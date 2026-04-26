import ContactForm from "../components/ContactForm";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: Props) {

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-y-auto bg-gray-50 py-12 px-4 selection:bg-orange-100 font-sans">

            {/* 1. Background Image Layer */}
            <div
                className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
                style={{
                    backgroundImage: `url(/group-people.JPEG)`,
                    backgroundAttachment: 'fixed'
                }}
            />

            {/* 2. Glassmorphism Container */}
            <div className="relative z-10 w-full max-w-2xl p-8 sm:p-12 
                            bg-white/95 border border-[#FF8C00]/20 
                            rounded-[40px] shadow-[0_25px_50px_-12px_rgba(255,140,0,0.4)] text-center backdrop-blur-md my-auto">

                {/* Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl 
                                bg-[#FF8C00] text-white shadow-lg shadow-[#FF8C00]/50 mb-8">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>

                <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl mb-4">
                    contact Us
                </h1>

                {/* <p className="mx-auto mt-4 max-w-lg text-lg font-medium text-gray-600 leading-relaxed">
                    subtitle
                </p> */}

                {/* The Client Form */}
                <div className="mt-10 text-left">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}