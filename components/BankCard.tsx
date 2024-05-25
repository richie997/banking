import { formatAmount } from "@/lib/utils";
import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
         <Link href="/" className="bank-card">
             <div className="bank-card_content">

             </div>
         </Link>
     </div>
  );
};

export default BankCard;
