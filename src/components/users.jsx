import { useLoaderData } from "react-router-dom";

const Users = () => {
  const data = useLoaderData();
  return (
    <>
      <div className='p-4 mx-auto w-full max-w-xl bg-white rounded-lg  border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <div className='flex justify-between items-center mb-4'>
          <h5 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
            Recent users
          </h5>
          <a
            href='/'
            className='text-sm font-medium text-blue-600 hover:underline dark:text-blue-500'
          >
            View all
          </a>
        </div>
        <div className='flow-root'>
          <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
            {data.map((e) => (
              <User
                key={e.id}
                name={e.name}
                email={e.email}
                street={e.address.street}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Users;

function User({ name, email, street }) {
  return (
    <li className='pt-3 pb-0 sm:pt-4'>
      <div className='flex items-center space-x-4'>
        <div className='flex-shrink-0'>
          <img
            className='w-8 h-8 rounded-full mb-4'
            src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
            alt='Thomas '
          />
        </div>
        <div className='flex-1 min-w-0'>
          <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
            {name}
          </p>
          <p className='text-sm text-gray-500 truncate lowercase pb-4 dark:text-gray-400'>
            {email}
          </p>
        </div>
        <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white mb-2'>
          {street}
        </div>
      </div>
    </li>
  );
}
