const Contact = () => {
  return (
    <div id="contact" className="w-full bg-[#003329] p-5 flex flex-col gap-3">
      <h1 className="text-[50px] text-white/75">Contact</h1>
      <div className="p-5">
        <form className="flex flex-col gap-3 w-full sm:w-[500px]">
          <input
            type="text"
            placeholder="Email"
            className="bg-[#f9f9f9]/50 focus:bg-[#f9f9f9]/70 focus:outline-none w-full p-2 rounded-md text-black placeholder-black/70"
          />
          <textarea
            placeholder="Message..."
            className="bg-[#f9f9f9]/50 focus:bg-[#f9f9f9]/70 focus:outline-none w-full p-2 rounded-md text-black placeholder-black/70 resize-none"
          />
          <button className="bg-[#359381] p-2 rounded-lg text-white/50">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
