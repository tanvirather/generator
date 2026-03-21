DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'fk_identity_users_updated_by_id_identity_users') THEN
        ALTER TABLE identity.users ADD CONSTRAINT fk_identity_users_updated_by_id_identity_users FOREIGN KEY (Updated_By_Id) REFERENCES Identity.Users (Id);
    END IF;
END $$;
