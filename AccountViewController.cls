public class AccountViewController {
    @AuraEnabled
    public static List<Account> getAccountRecord( )
    {
        return new List<Account>([Select id,Name,website,owner.name,phone,ANNUALREVENUE from Account where industry = 'Financial Services']);
    }
    
      @AuraEnabled
    public static List<Account> getSearchRecord( string strName)
    {
        String searchword='%'+strName+'%';
        system.debug('!searchword:--'+searchword);
        return new List<Account>([Select id,Name,website,owner.name,phone,ANNUALREVENUE from Account where industry = 'Financial Services' and Name like:searchword]);
    }
}