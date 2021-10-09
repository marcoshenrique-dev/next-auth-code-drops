import {v4 as uuid} from 'uuid';

type SignInRequestData = {
  email: String;
  password: string;
}

const delay = (amount=750) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestData) {
  await delay();

  return {
    token: uuid(),
    user: {
      name: 'Marcos Henrique',
      email: 'marcoshenriqueh393@gmail.com',
      avatar_url: 'https://github.com/marcoshenrique-dev.png'
    }
  }
}

export async function recoverUserInformation() {
  await delay();

  return {
    user: {
      name: 'Marcos Henrique',
      email: 'marcoshenriqueh393@gmail.com',
      avatar_url: 'https://github.com/marcoshenrique-dev.png'
    }
  }
}