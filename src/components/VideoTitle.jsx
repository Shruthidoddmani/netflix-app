
const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-5 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-lg text-black hover:bg-opacity-80 font-bold p-2 px-6 rounded-sm">Play</button>
        <button className="mx-2 bg-transparent hover:bg-gray-400 hover:bg-opacity-20 text-lg text-white p-2 px-6  rounded-sm">More Info!</button>
      </div>
    </div>
  )
}

export default VideoTitle;
