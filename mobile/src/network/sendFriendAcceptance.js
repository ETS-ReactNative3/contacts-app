import { host } from './constants';

export default async function sendFriendAcceptance(token, requested, id) {
  const response = await fetch(`${host}/request/accept`, {
    method: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify({token, requested, id})
  });

  if (response.ok) {
    return await response.text();
  }

  const errorMessage = await response.text();
  
  throw new Error(errorMessage);
};