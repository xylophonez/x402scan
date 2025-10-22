import { facilitator as baseFacilitator } from '@coinbase/x402';

import type { FacilitatorConfig } from 'x402/types';

const payAiFacilitator: FacilitatorConfig = {
  url: 'https://facilitator.payai.network',
};

const thirdwebFacilitator: FacilitatorConfig = {
  url: 'https://api.thirdweb.com/v1/payments/x402',
};

const facilitator402104: FacilitatorConfig = {
  url: 'https://x402.load.network',
};

export const facilitators: FacilitatorConfig[] = [
  baseFacilitator,
  payAiFacilitator,
  thirdwebFacilitator,
  facilitator402104,
];
