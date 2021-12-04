import React from 'react';
import FaqData from './FaqData';
import './FaqData.css';
const DUMMY = [{
    ques: "What are the eligibility criteria to appear for NIMCET-2021?",
    ans: "The eligibility criteria to appear for NIMCET-2021 test are given in Section 2 of the Information Brochure of NIMCET-2021 available on the website https://www.nimcet.in."
},
{
    ques: "How do I apply ONLINE?",
    ans: "For online application, you need to logon on to the website https://www.nimcet.in. The online application process is explained in Section 6 of the Information Brochure of NIMCET 2021. "
},
{
    ques: "What should I do, if the power/internet connection failed during the submission of the application process?",
    ans: "Please login to the NIMCET website again and continue the online application process."
},
{
    ques: "What is the fee structure for NIMCET-2021 examination?",
    ans: "The non-refundable application processing fee for NIMCET-2021 examination is Rs. 2500/- for OPEN/OPEN-EWS/OBC category and Rs. 1250/- for SC/ST/PwD category candidates. The fee structure for NIMCET-2021 is given in the Section 5 of the Information Brochure"
},
{
    ques: "How do I make fee payment for the NIMCET examination?",
    ans: "The fee for NIMCET-2021 examination is to be paid ONLINE only. Please refer to Section 6, point No. 8 of the Information Brochure of NIMCET2021 for fee payment procedure."
},
{
    ques: "My net banking account has been debited more than once. How do I get the money back?",
    ans: "The eligibility criteria to appear for NIMCET-2021 test are given Any unaccounted or excess money received on behalf of NIMCET-2021 from any bank account, will automatically be returned (credited) to the same bank account. However, this may take a week or more time, after the closure of the application processin Section 2 of the Information Brochure of NIMCET-2021 available on the website https://www.nimcet.in."
},
{
    ques: "Do I have to send the print-out of the application form?",
    ans: "No, the print-out of the application form is not required to be sent to the Organizing Institute NIT Raipur or any other participating NITs."
},
{
    ques: "When and how will I know the status of my application?",
    ans: "You can check the status of your application by logging into the official website of the NIMCET-2021: https://www.nimcet.in. "
},
{
    ques: "What to do if I forgot the password?",
    ans: "You can click on ‘Forgot Password’ and then you have to enter your registered email-id and answer the security question. An email will be sent to your registered e-mail id with instructions on how to reset password."
},
{
    ques: "Can I change my email-id after registration for future notifications?",
    ans: "You can click on ‘Forgot Password’ and then you have to enter your regNo. Once you register your email id, it will be the primary email-id and all the NIMCET-2021 related communication will be sent to this e-mail id only. To receive notifications on another or new email id, you have to register again with that new e-mail id.istered email-id and answer the security question. An email will be sent to your registered e-mail id with instructions on how to reset password."
}];

const Faq = props => {
    return (
        <div className="outerDiv">
            <h1>Frequently Asked Questions (FAQ)</h1>
            {DUMMY.map(item => <FaqData ques={item.ques} ans={item.ans} />)}
        </div>
    );
}

export default Faq;