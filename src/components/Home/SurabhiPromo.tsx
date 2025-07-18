import React from 'react';
import surabhiPromoImg from "../../assets/surabhi-promo.svg"

const PromoSection: React.FC = () => {
  return (
    <section>
      <img
        src={surabhiPromoImg}
        alt="Surabhi Promo"
        style={{ width: '100%', height: 'auto' }}
      />
    </section>
  );
};

export default PromoSection;