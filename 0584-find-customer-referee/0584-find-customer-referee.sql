/* Write your T-SQL query statement below */
select name from Customer AS C where C.referee_id != 2  or C.referee_id is null