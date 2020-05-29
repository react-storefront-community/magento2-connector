import get from 'lodash/get';
import { fetchGenerateToken, normalizeGenerateToken } from 'magento2-connector/cart/customer/generateToken';

/**
 * Magento 2: customer generateToken handler
 */
export default async function generateToken(req, res) {
  const email = get(req, 'query.email');
  const password = get(req, 'query.password');
  const rawData = await fetchGenerateToken(email, password);
  const data = normalizeGenerateToken(rawData);
  return res.json({
    ...data,
  });
}
