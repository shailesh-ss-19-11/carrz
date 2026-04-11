import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Book Car Wash in Nagpur',
    description: 'Contact Rediance Car Care Services to book your doorstep car wash and detailing slot in Nagpur. Call or WhatsApp us today for premium service.',
    keywords: ['book car wash nagpur', 'contact car detailing nagpur', 'Rediance Car Care Services phone number', 'mobile car wash booking nagpur']
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
