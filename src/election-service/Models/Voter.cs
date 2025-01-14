namespace ElectionService.Models
{
    public class Voter
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public string PhoneNumber { get; set; }
        public bool IsRegistered { get; set; }
        public bool HasFamilyMember { get; set; }
        public string? SpouseName { get; set; }
        public bool HasVoted { get; set; }
        public DateTime DateOfBirth { get; set; }
    
        public string ReferredBy { get; set; }
        public DateTime CreatedAt { get; internal set; }
        public DateTime UpdatedAt { get; internal set; }
        public string TransactionUserId { get; set; }   
        public string? UpdatedBy { get; set; }   
         
    
    }
}