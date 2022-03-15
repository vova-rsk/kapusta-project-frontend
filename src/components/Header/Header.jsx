import Logo from '../Logo';
import Container from './Header.styled';
import LogoutPanel from '../LogoutPanel';

function HeaderView() {
  return (
    <Container>
      <div>
        <div>
          <Logo />
        </div>
        <div>
          <LogoutPanel />
        </div>
      </div>
    </Container>
  );
}

export default HeaderView;
