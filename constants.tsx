
import React from 'react';
import { Home, User, Briefcase, FileText, Layers, Grid, MessageSquare, Mail } from 'lucide-react';
import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: <Home size={16} /> },
  { id: 'about', label: 'About', icon: <User size={16} /> },
  { id: 'resume', label: 'Resume', icon: <Briefcase size={16} /> },
  { id: 'services', label: 'Services', icon: <Layers size={16} /> },
  { id: 'skills', label: 'Skills', icon: <FileText size={16} /> },
  { id: 'portfolio', label: 'Portfolio', icon: <Grid size={16} /> },
  { id: 'contact', label: 'Contact', icon: <Mail size={16} /> },
];

export const PERSONAL_INFO = {
  name: 'Samuel',
  fullName: 'Samuel Johnson',
  title: 'Digital Marketing Strategist & Brand Builder',
  location: 'Remote / Lagos, Nigeria',
  email: 'mailsamueljohnson@gmail.com',
  phone: '+2348167769339',
  linkedin: 'https://www.linkedin.com/in/samuel-johnson-1a48b9128/',
  instagram: 'https://www.instagram.com/meetsamueljohnson?igsh=azFneTJ6NXI3cmY1&utm_source=qr',
  facebook: 'https://www.facebook.com/samuelstiko?mibextid=wwXIfr&mibextid=wwXIfr',
  summary: 'Digital Marketing Strategist with nearly a decade of experience helping brands grow, build communities, and drive meaningful engagement online. Co-founder of Well to Fit, a multi-platform health and wellness brand with a community of 200,000+ built through strategic content, consistent storytelling, and audience-first thinking across social media.',
};

export const COLORS = {
  primary: '#28e98c',
  background: '#000000',
  surface: '#191919',
  textSecondary: '#999999',
};
