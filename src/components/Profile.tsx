//Components
import { Button } from "@/components/ui/button";

// Constants
import { socialLinks } from "@/constans";

export const Profile = () =>{
    return (
        <aside className="max-w-3xl border m-6 border-neutral-600
        bg-neutral-900 text-white p-6 rounded-lg lg:sticky
        lg:left-0 lg:top-6 lg:w-96">
            <div className="flex flex-col gap-4 ">
                <div className="flex flex-col gap-4">
                    <h1 className="flex items-center justify-between 
                    gap-x-10 font-bold">David</h1>
                    <p className="text-3xl">
                        Front-End Designer & Developer
                    </p>
                </div>
                <img 
                src="/avatar.jpg" 
                alt="David"
                className="lg:w-96 rounded-2xl object-cover"
                />
                <div className="mt-6">
                    <p className="text-sm text-neutral-300">Specialization</p>
                    <p className="text-lg capitalize">UI/UX Designer and frontend Developer</p>
                </div>
                <div>
                    <p className="text-sm text-neutral-300">Based id</p>
                    <p className="text-lg capitalize">
                        Based in Los Angeles, CA    
                    </p>
                    <div className="flex gap-3 pt-2 text-neutral-500">
                        {socialLinks.map((social, i)=>{
                            const Icon = social.link;

                            return(
                                <a 
                                key={i}
                                href={social.link}
                                className="hover:text-primary
                                border-2 border-neutral-500 p-2
                                rounded-full hover:border-primary
                                transition duration-200"
                                >
                                    <Icon ></Icon>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </aside>
    )
        
    
}