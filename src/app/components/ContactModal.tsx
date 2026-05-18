import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  const itiRef = useRef<any>(null);
  const [formMsg, setFormMsg] = useState<{ text: string; type: 'success' | 'error' | '' ; visible: boolean }>({ text: '', type: '', visible: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize intl-tel-input when modal opens so the input is visible
    if (!isOpen) return;
    const win = window as any;

    const tryInit = () => {
      if (phoneInputRef.current && win.intlTelInput) {
        // Delay initialization slightly to ensure modal is painted and CSS applied
        setTimeout(() => {
          try {
            if (itiRef.current) {
              try { itiRef.current.destroy(); } catch (e) {}
              itiRef.current = null;
            }
            itiRef.current = win.intlTelInput(phoneInputRef.current, {
              initialCountry: 'in',
              separateDialCode: true,
              utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.19/build/js/utils.js',
            });
            // force redraw of flags
            window.dispatchEvent(new Event('resize'));
          } catch (e) {
            // swallow
          }
        }, 150);
      }
    };

    if (typeof win.intlTelInput === 'undefined') {
      const id = setInterval(() => {
        tryInit();
        if (win.intlTelInput) clearInterval(id);
      }, 200);
      return () => clearInterval(id);
    }

    tryInit();
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName.trim() === '') {
      setFormMsg({ text: 'Please enter your name.', type: 'error', visible: true });
      return;
    }

    let mobileNumber = '';
    if (itiRef.current) {
      try {
        if (formData.phone && !itiRef.current.isValidNumber()) {
          setFormMsg({ text: 'Invalid mobile number.', type: 'error', visible: true });
          return;
        }
        mobileNumber = itiRef.current.getNumber();
      } catch (err) {
        mobileNumber = formData.phone || '';
      }
    } else {
      mobileNumber = formData.phone || '';
    }

    setIsSubmitting(true);

    const payload = new FormData();
    payload.append('name', formData.fullName);
    payload.append('mobile', mobileNumber);
    payload.append('email', formData.email);
    payload.append('company', formData.company);
    payload.append('service', formData.service);
    payload.append('message', formData.message);

    const submitUrl = 'https://script.google.com/macros/s/AKfycbwJx5KNzBKEP7DeyKZWHp7qoUQHL966vIZeSlg9tVnZkBiSc-foER95ywehmedBUxWs/exec';

    fetch(submitUrl, { method: 'POST', body: payload })
      .then(() => {
        setFormMsg({ text: 'Thanks — your message was sent.', type: 'success', visible: true });
        setFormData({ fullName: '', email: '', phone: '', company: '', service: '', message: '' });
        // close modal shortly after success
        setTimeout(() => {
          setFormMsg({ text: '', type: '', visible: false });
          setIsSubmitting(false);
          onClose();
        }, 1600);
      })
      .catch(() => {
        setFormMsg({ text: 'There was an error sending your message. Please try again later.', type: 'error', visible: true });
        setIsSubmitting(false);
      });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-blue-500 text-white p-6 rounded-t-2xl flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
                  <p className="text-purple-100">Let's discuss your project</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      ref={phoneInputRef}
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="ecommerce">E-commerce Development</option>
                    <option value="frontend">Frontend Development</option>
                    <option value="backend">Backend Development</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="design">UI/UX Design</option>
                    <option value="analytics">Analytics & Insights</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share your vision, goals, and any specific requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02, boxShadow: '0 20px 25px -5px rgba(147, 51, 234, 0.4)' } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className={`w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Send size={20} className="group-hover:rotate-45 transition-transform" />
                      </motion.div>
                    </>
                  )}
                </motion.button>
                {formMsg.visible && (
                  <div className={`mt-4 p-3 rounded-md text-sm ${formMsg.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    {formMsg.text}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
