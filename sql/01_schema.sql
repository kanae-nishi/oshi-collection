-- s6-01-create-items
create table items (
  id bigint generated always as identity primary key,
  title text not null,
  category text not null,
  description text
);


-- s6-04-create-comments
create table comments (
  id bigint generated always as identity primary key,
  item_id bigint not null references items(id),
  body text not null,
  stars integer not null
);
