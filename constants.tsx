
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
  name: 'Esor-Prince',
  fullName: 'Esor-Prince Edogbomanwana Revival',
  title: 'Content Creator & Production Assistant',
  location: 'Ikeja, Lagos State',
  email: 'revivalprince@yahoo.com',
  phone: '+(234) 7032862848',
  linkedin: 'https://www.linkedin.com/in/esor-prince-revival-40256b177',
  summary: 'Detail-oriented and highly organized individual skilled managing office operations and supporting executive staff. Proficient in coordinating schedules, handling communications, and streamlining administrative processes to enhance efficiency in a fast paced company. With a certification in project management, I’m now seeking opportunities to contribute optimally to company\'s growth.',
};

export const COLORS = {
  primary: '#28e98c',
  background: '#000000',
  surface: '#191919',
  textSecondary: '#999999',
};
