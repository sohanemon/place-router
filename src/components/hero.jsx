import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className='py-24 flex items-center min-[calc(100vh-65px)] justify-center bg-white'>
        <div className='mx-auto max-w-[43rem]'>
          <div className='text-center'>
            <p className='text-lg font-medium leading-8 text-emerald-600/95'>
              Introducing Latest Photo Albums
            </p>
            <h1 className='mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black capitalize'>
              Go and view Latest timeline
            </h1>
            <p className='mt-3 text-lg leading-relaxed text-slate-400'>
              Once upon a time in Faridpur Engineering College.
            </p>
          </div>

          <div className='mt-6 flex items-center justify-center gap-4'>
            <Link
              to={"photos"}
              className='transform rounded-md bg-emerald-600/95 px-5 py-3 active:scale-95 transition-all font-medium text-white  hover:bg-emerald-700'
            >
              Go to Album{" "}
            </Link>
            <Link
              to={"timeline"}
              className='transform rounded-md border border-slate-200 px-5 py-3 active:scale-95 transition-all font-medium text-slate-900  hover:bg-slate-50'
            >
              {" "}
              Timeline{" "}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
