import React from 'react';
import { SocialLinks } from './SocialLinks';
import { DEVELOPER_INFO } from '../config/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t py-4 px-4">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600">
          © {currentYear} {DEVELOPER_INFO.name}. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}