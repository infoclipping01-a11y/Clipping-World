import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  priceRange: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export enum PageRoute {
  HOME = '/',
  ABOUT = '/about',
  SERVICES = '/services',
  CONTACT = '/contact',
  PRIVACY = '/privacy',
  TERMS = '/terms'
}