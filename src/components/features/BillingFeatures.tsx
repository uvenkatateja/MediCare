'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { Receipt, FileText, Calculator, CreditCard, Shield } from 'lucide-react'

type FAQItem = {
    id: string
    icon: React.ComponentType<{ className?: string }>
    question: string
    answer: string
}

export default function BillingFeatures() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: Receipt,
            question: 'How does GST-compliant invoicing work?',
            answer: 'Our system automatically generates GST-compliant invoices with proper tax calculations, HSN codes, and all required fields as per Indian tax regulations. All invoices include digital signatures and are stored securely for audit purposes.',
        },
        {
            id: 'item-2',
            icon: Calculator,
            question: 'Can I customize billing rates for different services?',
            answer: 'Yes, you can set custom rates for consultations, procedures, diagnostics, and medications. The system supports multiple pricing tiers, insurance billing rates, and special discount structures for different patient categories.',
        },
        {
            id: 'item-3',
            icon: CreditCard,
            question: 'What payment methods are supported?',
            answer: 'We support all major payment methods including UPI, credit/debit cards, net banking, and cash payments. Integration with popular payment gateways ensures secure transactions with automatic reconciliation.',
        },
        {
            id: 'item-4',
            icon: FileText,
            question: 'How are insurance claims processed?',
            answer: 'Our system integrates with major insurance providers for direct billing and claim processing. It automatically generates insurance forms, tracks claim status, and manages pre-authorization requests with real-time updates.',
        },
        {
            id: 'item-5',
            icon: Shield,
            question: 'Is patient billing data secure and compliant?',
            answer: 'All billing data is encrypted and stored in compliance with healthcare data protection regulations. We maintain detailed audit trails, automatic backups, and ensure HIPAA-compliant handling of all financial information.',
        },
    ]

    return (
        <section className="bg-muted dark:bg-background py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">Billing & GST-Compliant Invoicing</h2>
                            <p className="text-muted-foreground mt-4">
                                Streamline your clinic's financial operations with automated billing, GST compliance, and comprehensive payment management.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2"
                        >
                            {faqItems.map((item) => {
                                const IconComponent = item.icon
                                return (
                                    <AccordionItem
                                        key={item.id}
                                        value={item.id}
                                        className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
                                    >
                                        <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                            <div className="flex items-center gap-3">
                                                <div className="flex size-6">
                                                    <IconComponent className="m-auto size-4" />
                                                </div>
                                                <span className="text-base">{item.question}</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-5">
                                            <div className="px-9">
                                                <p className="text-base">{item.answer}</p>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}