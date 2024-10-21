import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

function CustomNavbar({ loggedInUser }) { // Get logged-in user's email
  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{
        padding: '10px 20px',
        borderBottom: '1px solid #ddd',
        position: 'fixed',
        top: '0',
        width: '100%',
        zIndex: '1000',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* Search bar on the left */}
      <Form style={{ flex: 1, marginRight: '20px' }}>
        <FormControl
          type="text"
          placeholder="Search..."
          style={{
            border: 'none',
            borderBottom: '1px solid black',
            borderRadius: '0',
            width: '100%',
            maxWidth: '250px', // Limit the width of the search bar
          }}
        />
      </Form>

      {/* Navigation links on the right */}
      <Nav style={{ display: 'flex', gap: '20px', marginRight: '50px' }}>
        <Nav.Link
          href="/"
          style={{
            color: 'black',
            fontSize: '16px',
            fontWeight: '400',
          }}
        >
          HOME
        </Nav.Link>
        <Nav.Link
          href="/blog"
          style={{
            color: 'black',
            fontSize: '16px',
            fontWeight: '400',
          }}
        >
          BLOG
        </Nav.Link>
        <Nav.Link
          href="/detail"
          style={{
            color: 'black',
            fontSize: '16px',
            fontWeight: '400',
          }}
        >
          DETAIL
        </Nav.Link>

        {/* Conditionally render the email or login button */}
        {loggedInUser ? (
          <Nav.Link
            href="/profile"
            style={{
              color: 'black',
              fontSize: '16px',
              fontWeight: '400',
              padding: '8px 16px',
              border: '2px solid #007bff',
              borderRadius: '20px',
              transition: 'all 0.3s ease',
            }}
          >
            {loggedInUser}
          </Nav.Link>
        ) : (
          <Nav.Link
            href="/login"
            style={{
              color: 'black',
              fontSize: '16px',
              fontWeight: '400',
              padding: '8px 16px',
              border: '2px solid #007bff',
              borderRadius: '20px',
              transition: 'all 0.3s ease',
            }}
            className="login-link"
          >
            LOGIN
          </Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;
