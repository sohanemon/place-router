import { useLoaderData } from "react-router-dom";

const Timeline = () => {
  const data = useLoaderData();
  return (
    <section className='container px-5 py-24 mx-auto space-y-10 divide-y-2'>
      {data.slice(0, 10).map((e) => (
        <Post key={e.id} title={e.title} body={e.body} />
      ))}
    </section>
  );
};

export default Timeline;

const Post = ({ title, body }) => {
  return (
    <>
      <div class='lg:w-3/5 md:w-1/2 mx-auto md:pr-16 lg:pr-0 pr-0 '>
        <h1 class='title-font font-medium text-3xl text-gray-900 pt-10 capitalize'>
          {title}
        </h1>
        <p class='leading-relaxed mt-4'>{body} </p>
      </div>
    </>
  );
};
