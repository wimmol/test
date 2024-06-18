'use Client';

import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function Airdrop() {
  const [user, setUser] = useState<string | null>('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    setUser(user);
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleImageLoad = () => {
    // setImagesLoaded((prev) => {
    //     console.log(prev)
    //     const newCount = prev + 1;
    //     console.log(newCount)
    //     if (newCount === totalImages) {
    //         setLoading(false);
    //     }
    //     return newCount;
    // });
  };

  return (
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <CircularProgress />
        </div>
      ) : (
        <div></div>
      )}

      <div hidden={loading}>
        <div className="mb-[90px] rounded-t-3xl border-t-2 border-[rgb(243,186,47)] bg-[#1C1F24] px-5 pt-7 text-white shadow-km">
          <div className="text-xl font-medium">Airdrop</div>
          <div className="mt-5 flex flex-col">
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>Swap #VWS ✅</span>
            </span>
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>Mining Pool #VWS ✅</span>
            </span>
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>exchange negotiations ✅</span>
            </span>
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>Market maker negotiations ✅</span>
            </span>
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>Key partnerships are coming ✅</span>
            </span>
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>Airdrop Task list ✅</span>
            </span>
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>Airdrop Nfts ETH ✅</span>
            </span>
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>Airdrop NFTs MATIC ✅</span>
            </span>
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>Airdrop NFTs BNB ✅</span>
            </span>
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>Airdrop NFTs GAT ✅</span>
            </span>
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>Airdrop NFTs TON ✅</span>
            </span>
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>Rewards Mining Pool ✅</span>
            </span>
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>Clicker VWS Social Tasks ✅</span>
            </span>
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>Ton Blockchain Training ✅</span>
            </span>
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>VWS Staking , </span>
            </span>
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>Staking Mining NFTs , </span>
            </span>
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>Domain Zone</span>,
            </span>
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>Bridge BNB/TON </span>
            </span>
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>
                Buying premium Telegrams in the bot, and there are a lot of
                interesting things that we will tell you about
              </span>
            </span>
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>construction of flying drones </span>
            </span>
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>Updating the roadmap </span>
            </span>
            <span className="mt-1 flex items-center space-x-1 capitalize">
              <div className="h-4 min-w-4 rounded-full bg-[#0F0]" />{' '}
              <span>Listing all exchange</span>
            </span>
            <span className="mt-5">Donations</span>
            <span className="mt-2.5">TON</span>
            <span className="mt-2.5" style={{ wordBreak: 'break-word' }}>
              UQARROkNiK15pmaOZZoxtSra3v39Nd3XJT1DrLSrxVUH4Aci
            </span>
            <span className="mt-2.5 uppercase">bnb eth matic btc</span>
            <span className="mt-2.5" style={{ wordBreak: 'break-word' }}>
              0xc69F83A668b3bBAd0B5570dbccF98Ec3C3e50eF3
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Fetch or define your static props here
  return {
    props: {
      data: {}, // Example data
    },
  };
}

export default Airdrop;
