import logo from '../assets/Selrvk-Logo.png';

export default function Footer() {

    return (

        <>

            <footer className="flex flex-row justify-between bg-yellow-950 text-white items-center text-center p-4 mt-10">
                <p>© 2025 Majestic Balinese Mansion. All rights reserved.</p>

                <div className='flex flex-row items-center'>
                    <p> Developed by </p>
                    <a href='https://github.com/selrvk' target='_blank' rel='noopener noreferrer'>
                        <img src={logo.src} alt="Selrvk Logo" className="h-20 w-auto"/>
                    </a>
                </div>
            </footer>
        </>

    );
}