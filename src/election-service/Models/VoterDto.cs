namespace ElectionService.Models
{
    public class VoterDto
    {
          public int Id { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string City  { get; set; }
        public bool IsRegistered { get; set; }
        public bool HasFamilyMember { get; set; }
        public bool HasVoted { get; set; }
    
        public string ReferredBy { get; set; }
        public DateTime UpdatedAt { get; internal set; }
        public string? UpdatedBy { get; set; }   
        public string TransactionUserId { get; set; }
    }
}