import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
      <p className="text-center fs-4 mb-5 mt-5">
      <a href="">Calculate your costs upfront</a> using our brokerage calculator.
      </p>
      <h2 className="fs-3">Charges explained</h2>
        <div className="col-6 p-5">
          <ul className="text-muted">
            <h5>Securities/Commodities transaction tax</h5>
            <br />
            <li>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
            </li>
            <li>
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </li>
            <br />
            <h5>Transaction/Turnover Charges</h5>
            <br />
            <li>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </li>
            <li>
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017)
            </li>
            <li>
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </li>
            <li>
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
              W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
              December 1, 2022.
            </li>
            <li>
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </li>
            <br />
            <h5>Call & trade</h5>
            <br />
            <li>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </li>
            <br />
            <h5>Stamp charges</h5>
            <br />
            <li>
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </li>
            <br />
            <h5>NRI brokerage charges</h5>
            <br />
            <li>₹100 per order for futures and options.</li>
            <li>
              For a non-PIS account, 0.5% or ₹100 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              ₹500 + GST as yearly account maintenance charges (AMC) charges.
            </li>
            <br />
            <h5>Account with debit balance</h5>
            <br />
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
            <br />
            <h5>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h5>
            <br />
            <li>
              Equity and Futures - ₹10 per crore + GST of the traded value.
            </li>
            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
            <li>
              Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
              lakh + GST of premium for Options.
            </li>
            <br />
            <h5>Margin Trading Facility (MTF)</h5>
            <br />
            <li>
              MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
              The interest is applied from T+1 day until the day MTF stocks are
              sold.
            </li>
            <li>
              MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
            </li>
            <li>MTF pledge charge: ₹30 + GST per pledge request per ISIN.</li>
            <br />
          </ul>
        </div>
        <div className="col-6 p-5"> 
          <ul className="text-muted">
            <h5>GST</h5><br/>
            <li>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</li>
            <br/>
            <h5>SEBI Charges</h5><br/>
            <li>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</li>
            <br/>
            <h5>DP (Depository participant) charges</h5><br/>
            <li>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</li>
            <li>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</li>
            <li>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.

</li>
           <br/>
            <h5>Pledging charges</h5><br/>
            <li>₹30 + GST per pledge request per ISIN.</li>
           <br/>
            <h5>AMC (Account maintenance charges)</h5><br/>
            <li>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here</li>
            <li>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here</li>
           <br/>
            <h5>Corporate action order charges</h5><br/>
            <li>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</li>
            <br/>
            <h5>Off-market transfer charges

</h5><br/>
            <li>₹25 per transaction.</li>
           <br/>
            <h5>Physical CMR request</h5><br/>
            <li>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</li>
            <br/>
            <h5>Payment gateway charges</h5><br/>
            <li>₹9 + GST (Not levied on transfers done via UPI)</li>
            <br/>
            <h5>Delayed Payment Charges</h5><br/>
            <li>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. Learn more.</li>
            <br/>
            <h5>Trading using 3-in-1 account with block functionality</h5><br/>
            <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
            <li>Intraday Brokerage: 0.05% per executed order.</li><br/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
