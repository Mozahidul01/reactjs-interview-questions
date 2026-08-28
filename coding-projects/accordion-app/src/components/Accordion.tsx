import { useState } from "react";
import type { AccordionProps } from "../types/accordion";
import AccordionItem from "./AccordionItem";

export default function Accordion({items, allowMultiple}: AccordionProps) {
    const [openIds, setOpenIds] = useState<number[]>([]);

    const handleToggle = (id: number) => {
        setOpenIds((currentIds) => {
            const isOpen = currentIds.includes(id);

            if(allowMultiple) {
                return isOpen ? currentIds.filter((currentId) => currentId !== id) : [...currentIds, id];
            }

            return isOpen ? [] : [id];
        });
    }
    return (
        <div className="accordion">
            {items.map((item) => (
                <AccordionItem
                    key={item.id}
                    item={item}
                    isOpen={openIds.includes(item.id)}
                    onToggle={() => handleToggle(item.id)}>

                </AccordionItem>
            ))}
        </div>
    )
}