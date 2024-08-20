import {
  Title,
  SubTitle,
  ProfileContainer,
  ImageContainer,
  Profile,
  ModifyButton,
  ProfileTitle,
  NicknameContainer,
  NicknameInput,
  NicknameTitle,
  StartButtonContainer,
  RocketImage,
} from './ProfileStyles'
import profile from '../../assets/images/profile.png'
import rocket from '../../assets/images/footer/rocket.png'
import { GloablContainer32 } from '../../global/globalStyles'

export default function FirstProfile() {
  const handleClickStart = () => {}
  return (
    <GloablContainer32>
      <Title>
        <div>잠깐! </div>
        <div>프로필 설정을 해주세요!</div>
      </Title>
      <SubTitle>사용하실 이미지와 닉네임을 확인해주세요 ☺️</SubTitle>
      <ProfileContainer>
        <ProfileTitle>프로필 이미지</ProfileTitle>
        <ImageContainer>
          <Profile src={profile} />
          <ModifyButton>변경</ModifyButton>
        </ImageContainer>
      </ProfileContainer>
      <NicknameContainer>
        <NicknameTitle>닉네임</NicknameTitle>
        <NicknameInput
          placeholder='닉네임을 입력해주세요'
          minLength={2}
          maxLength={10}
        />
      </NicknameContainer>
      <StartButtonContainer onClick={handleClickStart}>
        <RocketImage src={rocket} />
        START
      </StartButtonContainer>
    </GloablContainer32>
  )
}
