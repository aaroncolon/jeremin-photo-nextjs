import WPAPI from 'wpapi'
import { API_URL } from './constants'

export const wp = new WPAPI({ endpoint: API_URL })
