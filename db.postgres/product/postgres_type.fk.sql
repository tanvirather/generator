DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'fk_product_postgres_type_updated_by_id_identity_users') THEN
        ALTER TABLE product.postgres_type ADD CONSTRAINT fk_product_postgres_type_updated_by_id_identity_users FOREIGN KEY (Updated_By_Id) REFERENCES Identity.Users (Id);
    END IF;
END $$;
