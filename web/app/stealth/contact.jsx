class Stealth_Contact
{
    constructor()
    {
        this.label = "";
        this.publickey = "";
    }
    validate_contact(label)
    {
        //todo
    }
    new_contact(label, publickey)
    {
        this.label = label;
        this.publickey = publickey;
    }
}
export default Stealth_Contact;