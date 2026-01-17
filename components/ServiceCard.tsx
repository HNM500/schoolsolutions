
import React from 'react';
import { ServiceItem } from '../types';

interface Props {
  service: ServiceItem;
  type: 'school' | 'parent';
}

const ServiceCard: React.FC<Props> = ({ service, type }) => {
  return (
    <div className="bg-white p-8 rounded-sm border-t-4 border-navy shadow-sm hover:shadow-lg transition-all group">
      <h3 className="text-2xl font-serif text-navy mb-4 group-hover:text-royal transition-colors">{service.title}</h3>
      <p className="text-gray-600 mb-6 italic">{service.description}</p>
      <ul className="space-y-3">
        {service.points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
            <span className="text-royal mt-1">
              <i className="fas fa-check-circle"></i>
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 pt-6 border-t border-gray-100">
        <a href="#contact" className="text-navy font-bold text-sm uppercase tracking-widest hover:text-royal transition-colors inline-flex items-center gap-2">
          Enquire Now <i className="fas fa-arrow-right text-xs"></i>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
