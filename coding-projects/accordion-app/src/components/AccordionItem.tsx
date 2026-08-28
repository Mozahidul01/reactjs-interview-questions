import type { AccordionItemProps } from "../types/accordion";

export default function AccordionItem({item, isOpen, onToggle}: AccordionItemProps) {
    return(
        <div className="accordion-item">
            <button
                className="accordion-header"
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${item.id}`}>
                    <span>
                        {item.question}
                    </span>
                    <span className="accordion-icon">
                        {isOpen ? '-' : '+'}
                    </span>
            </button>

            {isOpen && (
                <div
                    className="accordion-content"
                    id={`accordion-content-${item.id}`}
                    role="region"
                    aria-labelledby={`accordion-content-${item.id}`}
                    >
                        <p>{item.answer}</p>
                </div>
            )}
        </div>
    )

}