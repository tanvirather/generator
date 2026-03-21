CREATE TABLE IF NOT EXISTS product.postgres_type ();
ALTER TABLE product.postgres_type ADD COLUMN IF NOT EXISTS id uuid NOT NULL;
ALTER TABLE product.postgres_type ADD COLUMN IF NOT EXISTS updated_by_id uuid NOT NULL;
ALTER TABLE product.postgres_type ADD COLUMN IF NOT EXISTS updated timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE product.postgres_type ADD COLUMN IF NOT EXISTS integer_type integer;
