import Link from "next/link";
import Image from "next/image";
import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import { dark } from '@clerk/themes'
import { Organization } from "@clerk/nextjs/server";

function Topbar () {
    return (
        <nav className="topbar">
        <Link href="/" className='flex items-center gap-4'>
            <Image src="/assets/needle.svg" alt="logo" width={28} height={28}/>
            <p className="text-heading3-bold text-light-1 max-xs:hidden">T h r e d d e r</p>
        </Link>

        <div className="flex items-center gap-1">
            <div className="block md:hidden">
                <SignedIn>
                    <SignOutButton>
                        <div className="flex cursor-pointer">
                            <Image 
                            src=""
                            alt="logout"
                            width={24}
                            height={24}
                            />
                        </div>
                        
                    </SignOutButton>
                </SignedIn>
            </div>
            <OrganizationSwitcher
            appearance={{
                baseTheme: dark,
                elements: {
                    organizationSwitcherTrigger:
                    'py-2 px-4'
                }
            }}
            />
        </div>
        </nav>
    )
}

export default Topbar;