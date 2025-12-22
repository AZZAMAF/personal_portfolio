// Node Models
import { useState } from "react";

// Components
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

// Assets
import { MenuIcon } from "lucide-react";

// Constants
import { navLinks, socialLinks } from "@/constans";
export const Sidebar = ()=>{
    const [active,setActive] = useState('#hero');
    return (
        <>
        <Sheet>
            <SheetTrigger asChild>
                <Button
                variant='ghost'
                size='icon'
                className="m-4 fixed">
                    <MenuIcon className="m-4"/>
                </Button>
            </SheetTrigger>
        </Sheet>
        </>
    );
}