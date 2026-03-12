import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Book Car Wash in Nagpur',
    description: 'Contact Carrz Car Care to book your doorstep car wash and detailing slot in Nagpur. Call or WhatsApp us today for premium service.',
    keywords: ['book car wash nagpur', 'contact car detailing nagpur', 'carrz car care phone number', 'mobile car wash booking nagpur']
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
