import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import PixelButton from './PixelButton';
import PixelInput from './PixelInput';
import { staggerContainer, staggerItem } from '../utils/animations';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { href: 'mailto:ngocquach43@gmail.com', label: '📧 Email', emoji: '📧' },
    { href: 'https://www.topcv.vn/xem-cv/DFlWBgQGAw9dDwILVwIFVg4GCQ8MAgIDXFQLUg74ed', label: '📄 CV', emoji: '📄', external: true },
    { href: 'https://github.com/ngocxxu', label: '🐙 GitHub', emoji: '🐙', external: true },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          CONTACT
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          <motion.div
            className="pixel-card"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit}>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={staggerItem}>
                  <PixelInput
                    label="NAME"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </motion.div>
                
                <motion.div variants={staggerItem}>
                  <PixelInput
                    label="EMAIL"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </motion.div>
                
                <motion.div variants={staggerItem} style={{ marginBottom: '24px' }}>
                  <motion.label
                    style={{
                      display: 'block',
                      marginBottom: '12px',
                      fontSize: '12px',
                      color: 'var(--text-dark)',
                    }}
                    animate={{
                      color: focusedField === 'message' ? 'var(--primary-cyan)' : 'var(--text-dark)',
                    }}
                  >
                    MESSAGE
                  </motion.label>
                  <motion.textarea
                    className="pixel-input"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    required
                    style={{
                      fontFamily: 'inherit',
                      resize: 'vertical',
                    }}
                    animate={{
                      boxShadow: focusedField === 'message'
                        ? 'inset 0 0 0 4px var(--border-white), inset 0 0 0 8px var(--border-black), 0 0 20px rgba(78, 205, 196, 0.4)'
                        : 'inset 0 0 0 4px var(--border-white), inset 0 0 0 8px var(--border-black)',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <PixelButton 
                  type="submit" 
                  variant="primary"
                  style={{
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.span
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        SENDING...
                      </motion.span>
                    ) : (
                      <motion.span
                        key="send"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        SEND MESSAGE
                      </motion.span>
                    )}
                  </AnimatePresence>
                </PixelButton>
              </motion.div>
            </form>

            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    marginTop: '20px',
                    padding: '12px',
                    backgroundColor: 'var(--health-green)',
                    border: '3px solid var(--border-black)',
                    fontSize: '10px',
                    color: 'var(--text-dark)',
                    textAlign: 'center',
                  }}
                >
                  ✓ Message sent successfully!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              marginTop: '50px',
              textAlign: 'center',
            }}
          >
            <motion.p
              style={{
                fontSize: '12px',
                marginBottom: '20px',
              }}
              animate={{
                textShadow: '0 0 10px rgba(78, 205, 196, 0.5)',
              }}
            >
              Or reach me at:
            </motion.p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '28px',
                flexWrap: 'wrap',
              }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  variants={staggerItem}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  style={{
                    fontSize: '10px',
                    color: 'var(--primary-cyan)',
                    textDecoration: 'none',
                    position: 'relative',
                    padding: '8px 16px',
                    border: '2px solid var(--border-black)',
                    backgroundColor: 'transparent',
                    display: 'inline-block',
                  }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'var(--primary-cyan)',
                    color: 'var(--text-dark)',
                    boxShadow: '0 0 20px rgba(78, 205, 196, 0.6)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {link.label}
                  <motion.span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '0%',
                      height: '2px',
                      backgroundColor: 'var(--primary-yellow)',
                    }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

