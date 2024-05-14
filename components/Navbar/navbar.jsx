export default function Nav() {
  return (
    <div className="py-6 px-10 flex justify-between items-center">
      <div className="w-1/6 p-6">
        <img src="/logo.png" alt="" />
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