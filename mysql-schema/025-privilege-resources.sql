SET NAMES utf8mb4;
START TRANSACTION;

INSERT INTO changelog VALUES (25, UNIX_TIMESTAMP());

ALTER TABLE user_privileges
  CHANGE COLUMN privilege scope VARCHAR(50) NOT NULL;

ALTER TABLE user_privileges
  ADD COLUMN resource VARCHAR(255) NOT NULL DEFAULT '*' AFTER user_id;

COMMIT;
