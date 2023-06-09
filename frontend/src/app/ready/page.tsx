'use client';
// Hooks
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
// Components
import GuestsList from '@/components/ready/GuestsList';
import PinCode from '@/components/ready/PinCode';
import StartBtn from '@/components/ready/StartBtn';
import UserNum from '@/components/ready/UserNum';
import BgAudioPlayer from '@/components/common/BgAudioPlayer';
// redux
import { RootState } from '@/store/store';
import { ReadyInfo } from '@/store/readyInfoSlice';
import { RoundInfo } from '@/store/roundInfoSlice';

export default function ReadyPage() {
  const router = useRouter();
  const isHost: boolean = useSelector((state: RootState) => state.status.isHost);
  const title: string = useSelector((state: RootState) => state.gameinfo.name);
  const readyInfo: ReadyInfo[] = useSelector((state: RootState) => state.readyInfo);
  const roundInfo: RoundInfo = useSelector((state: RootState) => state.roundInfo);
  const guestTitle: string = useSelector((state: RootState) => state.guest.title);

  useEffect(() => {
    if (roundInfo.keyword) {
      router.push('/game');
    }
  }, [roundInfo]);

  return (
    <>
      {isHost ? (
        <div className="min-h-screen bg-cover flex flex-col align-middle bg-bg-1">
          <BgAudioPlayer src="/audio/bgfull.wav" />
          <PinCode />
          <div className="text-center text-[#44474B]">
            <h1 className="text-[2rem] font-bold">{title}</h1>
            <h2 className="my-5">
              준비가 완료되면 시작하기 버튼을 눌러주세요!
            </h2>
            <div>
              <StartBtn category={'게임 시작'} />
              <UserNum num={readyInfo.length} />
            </div>
          </div>
          <GuestsList host={isHost} />
        </div>
      ) : (
        <div className="min-h-screen bg-cover flex flex-col align-middle pt-10 bg-repeat-y bg-bg-1">
          <div className="text-center text-black">
            <h1 className="text-[2rem] font-bold">{guestTitle}</h1>
            <h2 className="my-5">당신의 닉네임이 있는지 확인해보세요! </h2>
            <UserNum num={readyInfo.length} />
            <GuestsList host={isHost} />
          </div>
        </div>
      )}
    </>
  );
}
