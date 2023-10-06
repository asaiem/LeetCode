class Solution {
public:
    bool isSubsequence(string s, string t) {
		int i=0;
		int j=0;
		int n=s.size();
		int v=t.size();
		while(i<n&&j<v){
			if(s[i]==t[j]){
				i++;
				j++;
			}
			
			else{
				j++;
			}
		}
		if(i==n){
			return true;
		}
		
		else{
			return false;
		}
	}	   
    
};
		