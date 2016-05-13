<?PHP

// POST data being received?

if($_POST['rsvp'])
{
    // Check passcode

    if($_POST['passcode']==='5hin3y')
    {
        $return = (object)[
            "status" => true
        ];

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