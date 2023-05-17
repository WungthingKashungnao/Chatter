import React from "react";
import Input from "../../components/Input/Input";

const Dashboard = () => {
  const contact = [
    {
      name: "Adam",
      status: "Available",
      img: "https://images.freeimages.com/images/large-previews/8ca/peerless-chain-1-1641825.jpg",
    },
    {
      name: "Briggs",
      status: "Available",
      img: "https://images.freeimages.com/images/large-previews/8ca/peerless-chain-1-1641825.jpg",
    },
    {
      name: "Cathy",
      status: "Available",
      img: "https://images.freeimages.com/images/large-previews/8ca/peerless-chain-1-1641825.jpg",
    },
    {
      name: "Dave",
      status: "Available",
      img: "https://images.freeimages.com/images/large-previews/8ca/peerless-chain-1-1641825.jpg",
    },
    {
      name: "Eve",
      status: "Available",
      img: "https://images.freeimages.com/images/large-previews/8ca/peerless-chain-1-1641825.jpg",
    },
  ];
  return (
    <div className="w-screen flex">
      <div className="w-[25%]  h-screen bg-secondary">
        {/* users section start */}
        <div className="flex mx-14 items-center my-6">
          <div className="border border-primary p-[2px] rounded-full overflow-hidden">
            <img
              src="https://images.freeimages.com/images/large-previews/8ca/peerless-chain-1-1641825.jpg"
              alt=""
              width={75}
              height={75}
            />
          </div>

          <div className="ml-4">
            <h3 className="text-2xl">Athing</h3>
            <p className="text-lg font-light">My Account</p>
          </div>
        </div>

        <hr />
        <div className="mx-14 mt-7">
          <div className="text-primary text-lg">Messages</div>
          <div>
            {contact.map(({ name, status, img }) => (
              <div className="flex items-center py-6 border-b border-b-gray-300">
                <div className="cursor-pointer w-full flex items-center">
                  <div className="border border-primary p-[2px] rounded-full overflow-hidden">
                    <img src={img} alt="" width={60} height={60} />
                  </div>

                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="text-sm font-light text-gray-600">{status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* users section end */}

      {/* messages section start */}
      <div className="w-[50%] h-screen bg-white flex flex-col items-center">
        {/* chat info bar start */}
        <div className="w-[75%] bg-secondary h-[80px] my-14 rounded-full flex items-center px-14">
          {/* msg image start */}
          <div className="cursor-pointer">
            <img
              src="https://images.freeimages.com/images/large-previews/8ca/peerless-chain-1-1641825.jpg"
              alt=""
              width={60}
              height={60}
            />
          </div>
          {/* msg image start */}

          {/* msg status start */}
          <div className="ml-6 mr-auto">
            <h3 className="text-lg">Alexander</h3>
            <p className="text-sm font-light text-gray-600">online</p>
          </div>
          {/* msg status end */}

          {/* msg call start */}
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-phone-outgoing"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <path d="M15 9l5 -5" />
              <path d="M16 4l4 0l0 4" />
            </svg>
          </div>
          {/* msg call end */}
        </div>
        {/* chat info bar end */}

        {/* chats start */}
        <div className="h-[75%] w-full overflow-scroll shadow-md">
          <div className=" px-10 py-14">
            <div className="p-4 max-w-[50%] bg-secondary rounded-b-xl rounded-tr-xl mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              alias praesentium.
            </div>
            <div className="p-4 max-w-[50%] bg-primary text-white rounded-b-xl rounded-tl-xl ml-auto mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus, laboriosam?
            </div>

            <div className="p-4 max-w-[50%] bg-secondary rounded-b-xl rounded-tr-xl mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              alias praesentium.
            </div>
            <div className="p-4 max-w-[50%] bg-primary text-white rounded-b-xl rounded-tl-xl ml-auto mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus, laboriosam?
            </div>
            <div className="p-4 max-w-[50%] bg-secondary rounded-b-xl rounded-tr-xl mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              alias praesentium.
            </div>
            <div className="p-4 max-w-[50%] bg-primary text-white rounded-b-xl rounded-tl-xl ml-auto mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus, laboriosam?
            </div>
            <div className="p-4 max-w-[50%] bg-secondary rounded-b-xl rounded-tr-xl mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              alias praesentium.
            </div>
            <div className="p-4 max-w-[50%] bg-primary text-white rounded-b-xl rounded-tl-xl ml-auto mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus, laboriosam?
            </div>
          </div>
        </div>
        {/* chats endf */}

        {/* enter message start */}

        <div className="p-14 w-full flex items-center">
          {/* input component */}
          <Input
            className="border w-[75%]"
            placeholder="Enter your message..."
            inputClassName="p-4 border-0 shadow-lg rounded-full bg-secondary outline-0 border-0 foucs:ring-0 focus:border-0"
          />

          {/* icons start */}
          {/* send icon start */}
          <div className="ml-4 p-2 cursor-pointer flex items-center bg-ligt rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-telegram"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
            </svg>
          </div>
          {/* send icon end */}
          {/* plus icon start */}
          <div className="ml-4 p-2 cursor-pointer flex items-center bg-ligt rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-square-rounded-plus"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 12h6" />
              <path d="M12 9v6" />
              <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
            </svg>
          </div>
          {/* plus icon end */}
          {/* icons end */}
        </div>
        {/* enter message end */}
      </div>
      {/* messages section end */}

      {/* chat details start */}
      <div className="w-[25%] h-screen bg-light"></div>
      {/* chat details end */}
    </div>
  );
};

export default Dashboard;
