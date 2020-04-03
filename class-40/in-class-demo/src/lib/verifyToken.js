import jwt from 'jsonwebtoken';

function verifyToken(token) {
  try {
    const user = jwt.verify(token, 'fine, keep your secrets');
    return user;
  } catch (error) {
    console.error('Token validation error:', error);
  }
}

export default verifyToken;
