'use client'
import { TonConnectButton } from "@tonconnect/ui-react";
import { useEffect, useState } from "react";

const Header=()=>{
  const [user, setUser] = useState<string | null>("");
  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user)
    setUser(user);
  }, []);
  useEffect(() => {
    // @ts-ignore
    const tg = window.Telegram.WebApp;
    tg.ready();

    const initUser = tg.initDataUnsafe.user;
    if (initUser) {
      setUser(initUser);
    }

  }, [])
  return (
    <div className="px-5 py-3 flex items-center relative z-[1]">
      <img
        src="/images/avatar.png"
        alt="AvatarImg"
        className="w-10 h-10"
      ></img>
      {/*@ts-ignore*/}
      <div className=" text-sm font-medium text-white ml-3">{user.username || user.first_name}</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          fontSize: "12px",
          marginLeft: "auto",
          textTransform: "none",
        }}
      >
        <TonConnectButton />
      </div>
    </div>
  )
}

export default Header
