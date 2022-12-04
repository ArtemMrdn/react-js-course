function Header() {
  return (
    <nav className='pink darken-2'>
      <div className='nav-wrapper'>
        <a className='brand-logo'>React Shop</a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='sass.html'>Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
