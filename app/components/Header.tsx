'use client';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useEffect, useState } from 'react';

const Header = () => {
  const [username, setUsername] = useState<string | undefined>();
  useEffect(() => {
    const WebApp = window.Telegram.WebApp;
    WebApp.ready();
    setUsername(
      WebApp.initDataUnsafe.user?.username ||
        WebApp.initDataUnsafe.user?.first_name
    );
  }, []);
  return (
    <div className="relative z-[1] flex items-center px-5 py-3">
      <img src="/images/avatar.png" alt="AvatarImg" className="h-10 w-10"></img>
      {/*@ts-ignore*/}
      <div className="ml-3 text-sm font-medium text-white">
        {username || 'User'}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '12px',
          marginLeft: 'auto',
          textTransform: 'none',
        }}
      >
        <TonConnectButton />
      </div>
    </div>
  );
};

export default Header;
