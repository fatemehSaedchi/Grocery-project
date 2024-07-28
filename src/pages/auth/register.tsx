import {ImageView} from "@/components";

interface Props {
    
}

export default function Register({}: Props) {
    return (
        <>
            {
                // <!-- Register Start -->
            }
            <section className="container mt-[70px] mb-[120px] flex gap-[100px] justify-center font-lato">
                {
                    // <!-- Register Form -->
                }
                <form className="w-[480px]">
                    <h1 className="text-heading2 mb-2 font-quickSand">Create an Account</h1>
                    <div>
                        <p className="text-medium text-gray-400 mb-10">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>
                        <input type="text" aria-label="username" placeholder="Username" className="text-medium border rounded-xl px-9 py-6 w-full mb-6" />
                        <input type="email" aria-label="email" placeholder="Email" className="text-medium border rounded-xl px-9 py-6 w-full mb-6" />
                        <input type="password" aria-label="password" placeholder="Password" className="text-medium border rounded-xl px-9 py-6 w-full mb-6" />
                        <input type="password" aria-label="password" placeholder="Confirm password" className="text-medium border rounded-xl px-9 py-6 w-full mb-6" />
                        <div className="flex gap-5">
                            <input type="number" aria-label="securityCode" placeholder="Security code *" className="text-medium border rounded-xl px-9 py-6 w-full mb-6" />
                            <div className="rounded-xl w-[115px] h-[65px] bg-green-150 flex items-center justify-center">
                                <p className="text-heading4"><span className="text-[#3F7C35]">6</span><span className="text-[#7E396B]">8</span><span className="text-[#ADA05B]">8</span><span className="text-[#C14A83]">6</span></p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-10">
                            <div className="flex gap-2 items-center">
                                <label className="flex items-center cursor-pointer">
                                    <input type="checkbox" name="checkbox" checked disabled className="asdf w-[18px] h-[18px] mr-3 cursor-pointer checked:bg-red" />
                                    <span className="text-small text-gray-500">I agree to terms & Policy.</span>
                                </label>
                            </div>
                            <p className="text-heading-sm text-gray-400 cursor-pointer">Lean more</p>
                        </div>
                        <button className="h-16 px-11 bg-blue-300 text-white rounded-xl font-quickSand">Submit & Register</button>
                    </div>
                </form>
                {
                    // <!-- Social Login -->
                }
                <div className="p-[50px] flex flex-col gap-5 border rounded-xl h-fit translate-y-[182px]">
                    <button className="w-[370px] h-[60px] text-heading5 bg-[#1877F2] text-white rounded-xl flex gap-4 justify-center items-center">
                        <span>
                            <ImageView alt={''} width={29} src={"/assets/images/Facebook Logo.svg"} height={29}/>
                        </span>Continue with Facebook
                    </button>
                    <button className="w-[370px] h-[60px] text-heading5 bg-[#FFFFFF] rounded-xl flex gap-4 justify-center items-center border border-[#F2F3F4] shadow-c-xs">
                        <span>
                            <ImageView alt={''} height={29} src={"/assets/images/Google Logo.svg"} width={29} />
                        </span>Continue with Google
                    </button>
                    <button className="w-[370px] h-[60px] text-heading5 bg-[#000000] text-white rounded-xl flex gap-4 justify-center items-center">
                        <span>
                            <ImageView alt={''} src={"/assets/images/Apple Logo.svg"}  width={29} height={29}/>
                        </span>Continue with Apple
                    </button>
                </div>
            </section>
            {
                // <!-- Register End -->
            }
        </>
    )
}