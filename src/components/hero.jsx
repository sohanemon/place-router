import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section class='py-24 flex items-center min-[calc(100vh-65px)] justify-center bg-white'>
        <div class='mx-auto max-w-[43rem]'>
          <div class='text-center'>
            <p class='text-lg font-medium leading-8 text-emerald-600/95'>
              Introducing Design Data Platform
            </p>
            <h1 class='mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black'>
              Distribute your brand from&nbsp;design to code
            </h1>
            <p class='mt-3 text-lg leading-relaxed text-slate-400'>
              Specify helps you unify your brand identity by collecting, storing
              and distributing design tokens and assets — automatically.
            </p>
          </div>

          <div class='mt-6 flex items-center justify-center gap-4'>
            <Link
              href='#'
              class='transform rounded-md bg-emerald-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-emerald-700'
            >
              Get started for free
            </Link>
            <Link
              href='#'
              class='transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50'
            >
              {" "}
              Request a demo{" "}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
