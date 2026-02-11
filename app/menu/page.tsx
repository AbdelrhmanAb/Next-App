// import ProductHomePage from "../ProductHomePage";
import ProductMenuPage from "./productMenuPage";

export default function MenuPage() {
    return (
        <main>
            {/*----------- SEC-1 HERO IMAGE -------- */}
            <section className="relative w-full h-[70vh] flex items-center justify-center bg-black text-white overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1600')",
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-5xl text-amber-50 md:text-7xl font-bold mb-6">
                        Our Menu
                    </h1>
                    <p className="text-lg md:text-2xl max-w-2xl mx-auto text-amber-50">
                        Discover our delicious selection of freshly prepared meals,
                        made with high-quality ingredients and served with passion.
                    </p>
                </div>

            </section>
            {/*----------- SEC-1 HERO IMAGE -------- */}

            {/*  ------------ SEC-2 PRODUCT-GRID --------------- */}
         
        <section>
          <div className="w-full h-auto flex flex-col gap-6 items-center mt-12 p-5">
            <h3 className="text-5xl font-bold text-emerald-950 capitalize">our product </h3>
            <div className="w-24 border-4 border-emerald-800 rounded-full"></div>
            <p className="text-2xl text-emerald-900">Discover our special deals and exclusive discounts crafted just for you!</p>
            <div className="">
              <ProductMenuPage />
            </div>
          </div>
        </section>
            {/*  ------------ SEC-2 PRODUCT-GRID --------------- */}

        </main>
    );
}
