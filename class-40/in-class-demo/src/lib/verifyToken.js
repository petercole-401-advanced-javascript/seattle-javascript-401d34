import jwt from 'jsonwebtoken';

function verifyToken(token) {
  try {
    const user = jwt.decode(token);
    return user;
  } catch (error) {
    console.error('Token validation error:', error);
  }
}

export default verifyToken;
