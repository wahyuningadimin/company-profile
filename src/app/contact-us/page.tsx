"use client";
import React, { useState } from 'react';

interface FormData {
  name: string;
  phone: string; // Added phone property
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '',email: '',  message: '' });
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (): boolean => {
    const errors: string[] = [];
    if (!formData.name) errors.push('Name is required');
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) errors.push('A valid phone number (10 digits) is required');
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.push('A valid email is required');
    if (!formData.message) errors.push('Message is required');
    setErrors(errors);
    return errors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 1000);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-stone-50">
      <div className="max-w-lg mx-auto pb-20">
        <div className="flex justify-center items-center">
          <h1 className="mt-5 pt-20 text-4xl font-bold">Contact Us</h1>
        </div>
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
        {errors.length > 0 && (
          <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mt-5 text-2xl font-bold pt-10 mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isSubmitting ? 'Submitting...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
