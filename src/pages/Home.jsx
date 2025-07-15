import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import Navbar from "../components/Navbar";

export const Home = () =>{

    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle*/}
            <ThemeToggle />

            {/* BackGround Effects*/}

            <StarBackground />

            {/* Navbar */}

            <Navbar />

            {/* Hero Section */}

            {/* footer */}
        </div>
    );
}