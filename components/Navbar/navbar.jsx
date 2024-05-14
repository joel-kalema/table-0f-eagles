export default function Nav() {
  return (
    <div className="py-4 px-20 flex justify-between items-center fixed top-0 left-0 w-full">
      <div className="w-1/6">
        <img src="/logo.png" alt="" className="w-5/6"/>
      </div>

      <div className="w-4/6 flex justify-between items-center">
        <ul className="flex w-4/6 justify-between">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SPEAKERS</li>
          <li>INFO</li>
          <li>FAQS</li>
          <li>FASTING AND PRAYING</li>
        </ul>
        <div className="box">
          <p>REGISTER NOW</p>
        </div>
      </div>
    </div>
  );
}