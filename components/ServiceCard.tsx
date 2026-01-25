import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from './ui/card';

interface Props {
  service: ServiceItem;
  type: 'school' | 'parent';
}

const ServiceCard: React.FC<Props> = ({ service }) => {
  return (
    <Card className="bg-white border-0 shadow-sm hover:shadow-xl transition-all group rounded-sm">
      <CardHeader className="p-6">
        <div className="w-12 h-[2px] bg-terracotta mb-4 group-hover:w-20 transition-all duration-300" />
        <CardTitle className="text-xl font-serif text-charcoal group-hover:text-terracotta transition-colors">
          {service.title}
        </CardTitle>
        <CardDescription className="text-stone leading-relaxed mt-2">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-4">
        <ul className="space-y-3">
          {service.points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3 text-stone text-sm">
              <CheckCircle className="h-4 w-4 text-terracotta mt-0.5 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="border-t border-sandstone px-6 py-4">
        <a
          href="/#contact"
          className="text-charcoal font-semibold text-sm uppercase tracking-widest hover:text-terracotta transition-colors inline-flex items-center gap-2 group/link"
        >
          Enquire Now
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </a>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
