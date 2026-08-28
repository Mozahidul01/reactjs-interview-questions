export interface AccordionItem {
    id: number;
    question: string;
    answer: string;
}

export interface AccordionItemProps {
    item: AccordionItem;
    isOpen: boolean;
    onToggle: () => void
}

export interface AccordionProps {
    items: AccordionItem[];
    allowMultiple?: boolean;
}