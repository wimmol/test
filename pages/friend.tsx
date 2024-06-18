import { useEffect, useState } from 'react';

import { useSnackbar } from 'notistack';
import axios from 'axios';

import { Button } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useRouter } from 'next/router';

interface Item {
  t_id: string;
  mount: number;
}

function Friend() {
  const [user, setUser] = useState<string | null>('');
  const [items, setItems] = useState<Item[]>([]);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const user = localStorage.getItem('user');
      setUser(user);
      if (user != '') {
        const response = await axios.post(
          'https://vws-be.onrender.com/friends',
          { user }
        );
        if (response.data.items == undefined) setItems([]);
        else setItems(response.data.items);
      }
    };
    fetchData();
  });

  const handleInviteClick = async () => {
    // Generate the invite link
    const inviteLink = `https://t.me/vws_latest_bot?start=${user}\nPlay with me, become cryptoexchange CEO and get a token airdrop`;
    console.log(inviteLink);

    // Show the invite link in a snackbar or modal
    enqueueSnackbar('Invite link copied to clipboard!', { variant: 'success' });

    // Copy the link to the clipboard
    const shareLink = `https://t.me/share/url?url=${encodeURIComponent(inviteLink)}`;

    // Open the share link in a new window
    window.open(shareLink, '_blank');
  };

  return (
    <>
      <div className="flex flex-col space-y-5 rounded-t-3xl border-t-2 border-[rgb(243,186,47)] bg-[#1C1F24] px-5 pt-5 shadow-km">
        <div className="text-center text-3xl font-semibold text-white">
          Invite Friends!
        </div>
        <div className="text-center text-lg font-medium text-white">
          You and your friend will receive bonuses
        </div>
        <div className="flex w-full space-x-2">
          <Button
            variant="contained"
            sx={{
              paddingY: '10px',
              fontSize: '18px',
              paddingX: '24px',
              borderRadius: '10px',
              textTransform: 'none',
              width: '100%',
            }}
            onClick={handleInviteClick}
          >
            Invite a friend
          </Button>
          <Button
            variant="contained"
            sx={{
              paddingY: '10px',
              fontSize: '18px',
              paddingX: '24px',
              borderRadius: '10px',
              textTransform: 'none',
            }}
          >
            <ContentCopyIcon></ContentCopyIcon>
          </Button>
        </div>
        <div className="flex space-x-4 rounded-2xl bg-[#272A2F] p-4">
          <img src="/images/gift2.png" alt="gift" className="h-16 w-16"></img>
          <div className="flex flex-col space-y-2 text-sm font-normal text-white">
            <p className="font-medium">Invite a friend</p>
            <div className="flex items-center space-x-2">
              <div className="h-1 w-1 rounded-full bg-yellow-500"></div>
              <img
                src="/images/dollar-icon.svg"
                alt="dollar"
                className="h-4 w-4"
              ></img>
              <div className="text-sm font-normal text-yellow-500">+5,000</div>
              <div className="text-sm">for you and your friend</div>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 rounded-2xl bg-[#272A2F] p-4">
          <img src="/images/gift1.png" alt="gift" className="h-16 w-16"></img>
          <div className="flex flex-col space-y-2 text-sm text-white">
            <p className="font-medium">Invite a friend with Telegram Premium</p>
            <div className="flex items-center space-x-2">
              <div className="h-1 w-1 rounded-full bg-yellow-500"></div>
              <img
                src="/images/dollar-icon.svg"
                alt="dollar"
                className="h-4 w-4"
              ></img>
              <div className="text-sm font-normal text-yellow-500">+10,000</div>
              <div className="text-sm">for you and your friend</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 mt-5 text-lg font-medium text-white">
        List of your friends
      </div>
      {items.length === 0 ? (
        <div className="mb-[100px] mt-5 text-center text-lg font-normal text-gray-600">
          You haven&apos;t invited anyone yet
        </div>
      ) : (
        <div className="mb-[100px]">
          {items.map((item, index) => (
            <div key={index}>
              <div className="mx-4 mt-5 flex flex-row items-center rounded-lg bg-[#272A2F] p-2 px-4">
                <div className="text-lg text-white">{index + 1}</div>
                <div className="ml-4 text-white">{item.t_id}</div>
                <img
                  src="/images/dollar-icon.svg"
                  alt="dollar"
                  className="ml-6 h-4 w-4"
                ></img>
                <div className="ml-2 text-white">{item.mount}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Friend;
