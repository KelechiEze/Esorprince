// Fix: Import React to resolve 'React' namespace for React.ReactNode
import React from 'react';

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}