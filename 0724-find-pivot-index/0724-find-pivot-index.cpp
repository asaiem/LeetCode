class Solution {


public:


int pivotIndex(vector<int>& nums) {

int L=0;

int R=0;

/*for(int i=0;i<nums.size();i++){

R =R+nums[i];

}*/

    for (int i:nums){

     R +=i;
    }

    for(int j=0;j<nums.size();j++){


       R = R-nums[j];


        if(L==R){

            return j;
            
        }
      L = L+nums[j];

 
    }


    return -1;

 }



};


    