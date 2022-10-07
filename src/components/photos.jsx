import { useLoaderData } from "react-router-dom";

const Photos = () => {
  const data = useLoaderData();
  return (
    <div className='container px-5 py-24 mx-auto'>
      <section class='flex flex-wrap -m-4'>
        {data.slice(0, 12).map(({ thumbnailUrl, title, id }) => (
          <Photo key={id} thumbnailUrl={thumbnailUrl} title={title} />
        ))}
      </section>
    </div>
  );
};

export default Photos;

function Photo({ thumbnailUrl, title }) {
  return (
    <div class='p-4 md:w-1/3'>
      <div class='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
        <img
          class='lg:h-48 md:h-36 w-full object-cover object-center'
          src={thumbnailUrl}
          alt='blog'
        />
        <div class='p-2 text-gray-700 capitalize'>
          <h2 class='tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase'>
            title
          </h2>
          <h1 class='title-font text-sm font-medium  mb-1'>{title} </h1>
        </div>
      </div>
    </div>
  );
}
