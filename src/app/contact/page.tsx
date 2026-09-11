'use client';

import React, { useState } from 'react';
import { BUSINESS_INFO, getWhatsAppLink } from '@/config/business';
import { SectionTitle } from '@/components/common/SectionTitle';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  Leaf
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    businessType: 'Restaurant / Cafe',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [serverError, setServerError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [isDemoMode, setIsDemoMode] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (serverError) {
      setServerError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message or inquiry';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setServerError('');
    setIsSubmitted(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setSubmitMessage(result.message || 'Inquiry submitted successfully!');
        setIsDemoMode(!!result.isDemoMode);
        setFormData({
          fullName: '',
          mobileNumber: '',
          email: '',
          businessType: 'Restaurant / Cafe',
          message: '',
        });
        setErrors({});
      } else {
        setServerError(result.error || 'Failed to send inquiry. Please try again.');
      }
    } catch (err: unknown) {
      console.error('Inquiry submission error:', err);
      setServerError('A network error occurred. Please try again or contact us on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-0">

      {/* 1. CONTACT HERO */}
      <section className="bg-gradient-eco text-white pt-16 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs sm:text-sm font-semibold mb-6">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span>Connect with Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto font-normal">
            We would love to hear from you. Contact Eco Mitra for product inquiries, bulk orders, and business requirements.
          </p>
        </div>
      </section>

      {/* 2. CONTACT SECTION (Two-Column Layout) */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left Column: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Direct Support
                </span>
                <h2 className="text-3xl font-black text-emerald-950 mt-1">
                  Contact Information
                </h2>
                <p className="text-slate-600 text-sm mt-2">
                  Reach out directly via phone, WhatsApp, or email. Our supply management team will assist you promptly.
                </p>
              </div>

              {/* Phone Card */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">Call Us Directly</div>
                  <div className="text-lg font-bold text-emerald-950 group-hover:text-emerald-700">
                    {BUSINESS_INFO.formattedPhone}
                  </div>
                  <div className="text-xs text-emerald-600 font-medium mt-0.5">Click to make a direct phone call</div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={getWhatsAppLink('Hello Eco Mitra, I would like to make an inquiry.')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">WhatsApp Chat</div>
                  <div className="text-lg font-bold text-emerald-950 group-hover:text-emerald-700">
                    Instant Messaging
                  </div>
                  <div className="text-xs text-emerald-600 font-medium mt-0.5">Chat with our sales team on WhatsApp</div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">Email Inquiries</div>
                  <div className="text-base font-bold text-emerald-950 group-hover:text-emerald-700">
                    {BUSINESS_INFO.email}
                  </div>
                  <div className="text-xs text-emerald-600 font-medium mt-0.5">For detailed RFPs and bulk quotes</div>
                </div>
              </a>

              {/* Address & Hours Card */}
              <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase">Headquarters</div>
                    <div className="text-sm font-semibold text-emerald-950 leading-snug mt-1">
                      {BUSINESS_INFO.address}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase">Business Hours</div>
                    <div className="text-xs font-semibold text-emerald-950 mt-1">
                      {BUSINESS_INFO.workingHours}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-emerald-100 shadow-xl">
                <h3 className="text-2xl font-black text-emerald-950 mb-2">
                  Send an Inquiry
                </h3>
                <p className="text-slate-600 text-sm mb-6">
                  Fill out the form below for product samples, wholesale pricing, or corporate contracts.
                </p>

                {/* Success Notification Alert */}
                {/* {isSubmitted && (
                  <div className={`mb-6 p-4 rounded-2xl flex items-start gap-3 border animate-in fade-in ${
                    isDemoMode
                      ? 'bg-amber-50 border-amber-200 text-amber-900'
                      : 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  }`}>
                    <CheckCircle2 className={`w-6 h-6 shrink-0 mt-0.5 ${
                      isDemoMode ? 'text-amber-600' : 'text-emerald-600'
                    }`} />
                    <div>
                      <div className="font-bold text-sm">
                        {isDemoMode ? 'Inquiry Recorded (Setup Required for Live Delivery)' : 'Inquiry Delivered to Email!'}
                      </div>
                      <div className="text-xs mt-1 leading-relaxed">
                        {submitMessage}
                      </div>
                      {isDemoMode && (
                        <div className="mt-2 pt-2 border-t border-amber-200/80 text-[11px] font-medium text-amber-800">
                          💡 <strong>How to receive emails directly in Gmail:</strong>
                          <ol className="list-decimal ml-4 mt-1 space-y-1">
                            <li>Open Google Account &gt; Security &gt; 2-Step Verification &gt; App Passwords</li>
                            <li>Generate a 16-character password for Eco Mitra</li>
                            <li>Paste password into <code>SMTP_PASS</code> inside <code>.env.local</code> file</li>
                          </ol>
                        </div>
                      )}
                    </div>
                  </div>
                )} */}

                {/* Error Notification Alert */}
                {serverError && (
                  <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-900 animate-in fade-in">
                    <AlertCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm">Unable to Send Inquiry</div>
                      <div className="text-xs text-rose-700 mt-0.5">
                        {serverError}
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all outline-hidden ${errors.fullName
                        ? 'border-rose-400 focus:border-rose-500 ring-2 ring-rose-100'
                        : 'border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100'
                        }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-500 font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Mobile & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all outline-hidden ${errors.mobileNumber
                          ? 'border-rose-400 focus:border-rose-500 ring-2 ring-rose-100'
                          : 'border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100'
                          }`}
                      />
                      {errors.mobileNumber && (
                        <p className="text-xs text-rose-500 font-semibold mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.mobileNumber}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rahul@example.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all outline-hidden"
                      />
                    </div>
                  </div>

                  {/* Business Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Business Type / Requirement
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all outline-hidden bg-white"
                    >
                      <option value="Restaurant / Cafe">Restaurant / Cafe</option>
                      <option value="Hotel / Resort">Hotel / Resort</option>
                      <option value="Corporate Office">Corporate Office</option>
                      <option value="Hospital / Clinic">Hospital / Clinic</option>
                      <option value="Catering Service">Catering Service</option>
                      <option value="Retailer / Supermarket">Retailer / Supermarket</option>
                      <option value="Wholesale Distributor">Wholesale Distributor</option>
                      <option value="Personal / Home Use">Personal / Home Use</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Message / Requirement Details <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify product types, required carton quantities, or delivery location..."
                      className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all outline-hidden ${errors.message
                        ? 'border-rose-400 focus:border-rose-500 ring-2 ring-rose-100'
                        : 'border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100'
                        }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 text-white font-bold text-base py-4 rounded-2xl shadow-lg transition-all transform active:scale-98 cursor-pointer"
                  >
                    {loading ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. GOOGLE MAP SECTION */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            pill="Location"
            title="Find Us"
            subtitle="Visit our corporate warehouse or send logistics pickups directly to our facility."
          />

          <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-md border border-slate-200 h-96 relative flex items-center justify-center">
            {/* Map Iframe Component */}
            <iframe
              title="Eco Mitra Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.468241513983!2d72.44020327487661!3d23.0065737169259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b6d0a0b596b%3A0xb724f90fd558dbc4!2sEco%20Mitra%20Tissue%20Paper!5e0!3m2!1sen!2sin!4v1789149238449!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full "
            />

          </div>
        </div>
      </section>

    </div>
  );
}
