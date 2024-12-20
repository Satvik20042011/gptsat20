import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { DEVELOPER_INFO } from '../config/constants';

export function SocialLinks() {
  const socialLinks = [
    { icon: Github, url: DEVELOPER_INFO.github, label: 'GitHub' },
    { icon: Linkedin, url: DEVELOPER_INFO.linkedin, label: 'LinkedIn' },
    { icon: Instagram, url: DEVELOPER_INFO.instagram, label: 'Instagram' },
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map(({ icon: Icon, url, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-indigo-600 transition-colors"
          title={label}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}