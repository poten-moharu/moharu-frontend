'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

interface PaymentButtonProps {
  activityId: string;
}
const PaymentButton: React.FC<PaymentButtonProps> = ({ activityId }) => {
  const router = useRouter();

  return (
    // TODO: 무료인 경우 등록 , 유료인 경우 결제
    <Button
      onClick={() =>
        router.push(`/activities/${activityId}/reservation/complete`)
      }
      className="mt-auto w-full"
    >
      등록/결제
    </Button>
  );
};

export default PaymentButton;
