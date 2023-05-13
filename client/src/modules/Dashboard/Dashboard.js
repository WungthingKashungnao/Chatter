import React from "react";

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
        <div className="flex mx-14 items-center my-8">
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
        <div className="mx-14 mt-10">
          <div className="text-primary text-lg">Messages</div>
          <div>
            {contact.map(({ name, status, img }) => (
              <div className="flex items-center py-8 border-b border-b-gray-300">
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
      <div className="w-[50%] h-screen"></div>
      {/* messages section end */}

      {/* chat details start */}
      <div className="w-[25%] h-screen"></div>
      {/* chat details end */}
    </div>
  );
};

export default Dashboard;
