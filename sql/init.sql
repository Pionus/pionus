CREATE TABLE pionus_contents (
    cid INT(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title varchar(200),
    created INT(14) unsigned default 0,
    modified INT(14) unsigned default 0,
    text longtext,
    author int(10) unsigned default 0,
    type varchar(16) default "post",
    status varchar(16) default "publish",
    password varchar(32),
    comments int(10) unsigned default 0,
    views int(10) unsigned default 0,
    likes int(10) unsigned default 0
);


CREATE TABLE pionus_users (
    cid INT(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(32),
    password varchar(64),
    mail varchar(200),
    created INT(14) unsigned default 0,
    logged INT(14) unsigned default 0
);
