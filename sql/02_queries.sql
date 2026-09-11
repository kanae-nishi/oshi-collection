-- s6-02-insert-items
insert into items (title, category, description)
values ('推し①', 'カテゴリA', '説明'),
       ('推し②', 'カテゴリA', '説明'),
       ('推し③', 'カテゴリB', '説明');


-- s6-03-select
select title, description from items
where category = 'カテゴリA'
order by title asc;


-- s6-05-join
insert into comments (item_id, body, stars)
values (1, '最高',           5),
       (1, '安定感がすごい', 4),
       (2, '毎回見てる',     5),
       (3, 'これから期待',   3);

select items.title, comments.body, comments.stars
from items
join comments on comments.item_id = items.id
where comments.stars = 5
order by items.title asc;
