<?PHP

include_once('./mailer.php');

// POST data being received?

if($_POST['rsvp'])
{
    // Check passcode

    if($_POST['passcode']==='M4ltbyK3mp')
    {
        $return = (object)[
            "status" => true
        ];

        rsvpNotice($_POST);

    }
    else
    {
        $return = (object)[
            "status" => false,
            "statusMsg" => "Incorrect passcode."
        ];

    }

    return json_encode($return);
}


?>