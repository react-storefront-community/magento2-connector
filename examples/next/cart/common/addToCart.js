import get from 'lodash/get';
import getError from 'magento2-connector/helpers/getError';
import {
  fetchAddSimpleProductsToCart,
  normalizeAddSimpleProductsToCart,
} from 'magento2-connector/cart/common/addSimpleProductsToCart';

/**
 * Magento 2: common addToCart handler
 */
export default async function addToCart(req, res) {
  const token = get(req, 'query.token');
  const cartId = get(req, 'query.cartId');
  const sku = get(req, 'query.sku');
  const quantity = get(req, 'query.quantity');
  const rawData = await fetchAddSimpleProductsToCart({
    token,
    cartId,
    sku,
    quantity,
  });

  const error = getError(rawData);
  if (error) {
    return res.json({
      error,
    });
  }

  const data = normalizeAddSimpleProductsToCart(rawData);
  return res.json({
    ...data,
  });
}
