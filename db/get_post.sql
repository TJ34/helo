SELECT p.title, p.img, p.content, u.username, u.profile_pic
FROM posts AS p JOIN users AS u 
ON p.author_id = u.id 
WHERE p.id = $1;