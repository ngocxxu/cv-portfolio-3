import { motion } from 'framer-motion';
import { useState } from 'react';
import PixelButton from './PixelButton';
import PixelInput from './PixelInput';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          <div className="pixel-card">
            <form onSubmit={handleSubmit}>
              <PixelInput
                label="NAME"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <PixelInput
                label="EMAIL"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div style={{ marginBottom: '24px' }}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '12px',
                    fontSize: '12px',
                    color: 'var(--text-dark)',
                  }}
                >
                  MESSAGE
                </label>
                <textarea
                  className="pixel-input"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  style={{
                    fontFamily: 'inherit',
                    resize: 'vertical',
                  }}
                />
              </div>
              <PixelButton type="submit" variant="primary">
                SEND MESSAGE
              </PixelButton>
            </form>
          </div>

          <div
            style={{
              marginTop: '50px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: '12px',
                marginBottom: '20px',
              }}
            >
              Or reach me at:
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '28px',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="mailto:ngocquach43@gmail.com"
                style={{
                  fontSize: '10px',
                  color: 'var(--primary-cyan)',
                  textDecoration: 'none',
                }}
              >
                📧 Email
              </a>
              <a
                href="https://www.topcv.vn/xem-cv/DFlWBgQGAw9dDwILVwIFVg4GCQ8MAgIDXFQLUg74ed"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '10px',
                  color: 'var(--primary-cyan)',
                  textDecoration: 'none',
                }}
              >
                📄 CV
              </a>
              <a
                href="https://github.com/ngocxxu"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '10px',
                  color: 'var(--primary-cyan)',
                  textDecoration: 'none',
                }}
              >
                🐙 GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

