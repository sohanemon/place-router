import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Profile = () => {
  const [user] = useLoaderData();
  const [isShowAll, setIsShowAll] = useState(false);
  const [todos, setTodos] = useState([]);
  const [album, setAlbum] = useState([]);
  const [showAllTodos, setShowAllTodos] = useState(false);
  const [showAllAlbum, setShowAllAlbum] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`)
      .then((res) => res.json())
      .then((data) => setAlbum(data));
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`)
      .then((res) => res.json())
      .then((data) => setTodos(data));

    return () => {};
  }, [user.id]);
  console.log(album);
  return (
    <>
      {" "}
      <div className='container mx-auto my-5 p-5'>
        <div className='md:flex no-wrap md:-mx-2 '>
          <div className='w-full md:w-3/12 md:mx-2'>
            <div className='bg-white p-3 border-t-4 border-emerald-400'>
              <div className='image overflow-hidden'>
                <img
                  className='h-auto w-full mx-auto'
                  src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
                  alt=''
                />
              </div>
              <h1 className='text-gray-900 font-bold text-xl leading-8 my-1'>
                {user.name}{" "}
              </h1>
              <h3 className='text-gray-600 font-lg text-semibold leading-6'>
                Works at {user.company.name || "Unknown Company"}.
              </h3>
              <p className='text-sm text-gray-500 hover:text-gray-600 leading-6'>
                Amake amar moto thakte dao...🚀🚀
              </p>
              <ul className='bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm'>
                <li className='flex items-center py-3'>
                  <span>Status</span>
                  <span className='ml-auto'>
                    <span className='bg-emerald-500 py-1 px-2 rounded text-white text-sm'>
                      Active
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className='my-4'></div>
            <div className='bg-white p-3 hover:shadow'></div>
          </div>
          <div className='w-full md:w-9/12 mx-2 h-64'>
            <div className='bg-white p-3 shadow-sm rounded-sm text-emerald-500'>
              <div className='flex items-center space-x-2 font-semibold leading-8'>
                <span>
                  <svg
                    className='h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                    />
                  </svg>
                </span>
                <span className='tracking-wide '>About</span>
              </div>
              <div className='text-gray-700'>
                <div className='grid md:grid-cols-2 text-sm'>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>First Name</div>
                    <div className='px-4 py-2'>{user.name.split(" ")[0]}</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Last Name</div>
                    <div className='px-4 py-2'>{user.name.split(" ")[1]}</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Username</div>
                    <div className='px-4 py-2'>@{user.username}</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Contact No.</div>
                    <div className='px-4 py-2'>+{user.phone.split(" ")[0]}</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Address</div>
                    <div className='px-4 py-2'>
                      {user.address.street}, {user.address.city}
                    </div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Zipcode</div>{" "}
                    <div className='px-4 py-2'>{user.address.zipcode}</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Email.</div>
                    <div className='px-4 py-2'>
                      <a
                        className='text-blue-800'
                        href={`mailto:${user.email}`}
                      >
                        {user.email.toLowerCase()}
                      </a>
                    </div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Website</div>{" "}
                    <a
                      href={`https://${user.website}`}
                      className='px-4 py-2 text-blue-800'
                    >
                      https://{user.website.toLowerCase()}
                    </a>
                  </div>
                  {isShowAll ? (
                    <>
                      <div className='grid grid-cols-2'>
                        <div className='px-4 py-2 font-semibold'>Latitude</div>
                        <div className='px-4 py-2'>{user.address.geo.lat}</div>
                      </div>
                      <div className='grid grid-cols-2'>
                        <div className='px-4 py-2 font-semibold'>Longitude</div>{" "}
                        <div className='px-4 py-2'>{user.address.geo.lng}</div>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
              <button
                onClick={() => setIsShowAll((p) => !p)}
                className='block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4'
              >
                Show {isShowAll ? "Less" : "Full"} Information
              </button>
            </div>

            <div className='my-4'></div>

            <div className='bg-white p-3 shadow-sm rounded-sm'>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <div className='flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3 text-emerald-500'>
                    <span>
                      <svg
                        className='h-5'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                        />
                      </svg>
                    </span>
                    <span className='tracking-wide'>Todos</span>
                  </div>
                  <ul className='list-inside space-y-2 divide-y-2 divide-emerald-100 '>
                    {todos.slice(0, 3).map((el) => (
                      <Todo key={el.id} {...el} />
                    ))}

                    {showAllTodos &&
                      todos.slice(3).map((el) => <Todo key={el.id} {...el} />)}
                  </ul>
                  <ShowAllBtn getter={showAllTodos} setter={setShowAllTodos} />
                </div>
                <div>
                  <div className='flex items-center text-emerald-500 space-x-2 font-semibold leading-8 mb-3'>
                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='w-6 h-6'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                        />
                      </svg>
                    </span>
                    <span className='tracking-wide'>Album</span>
                  </div>
                  <ul className='list-inside space-y-2 divide-y-2 divide-emerald-100'>
                    {album.slice(0, 3).map((el) => (
                      <Album key={el.id} {...el} />
                    ))}
                    {showAllAlbum &&
                      album.slice(3).map((el) => <Album key={el.id} {...el} />)}
                  </ul>
                  <ShowAllBtn getter={showAllAlbum} setter={setShowAllAlbum} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

function Todo({ title, completed }) {
  return (
    <li>
      <div className='text-emerald-800 capitalize'>{title}.</div>
      <div className='text-gray-500 text-xs'>
        {completed ? "Done" : "Not done"}
      </div>
    </li>
  );
}

function Album({ title }) {
  return (
    <li>
      <div className='text-emerald-800 capitalize'>{title}</div>
    </li>
  );
}

const ShowAllBtn = ({ getter, setter }) => {
  return (
    <button
      onClick={() => setter((p) => !p)}
      className={`${
        getter ? "hidden" : "block"
      } w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4`}
    >
      Show All
    </button>
  );
};
