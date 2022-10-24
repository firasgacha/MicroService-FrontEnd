
export default function randomPassword() {
  // return random password of 8 caracters
    return Math.random().toString(36).slice(-8);
}
