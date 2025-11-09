CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50),
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

INSERT INTO users (name, email, phone, password) VALUES
    ('John Doe', 'john@example.com', '+1234567890', 'password123'),
    ('Jane Smith', 'jane@example.com', '+0987654321', 'password456'),
    ('Test User', 'test@test.com', NULL, 'test')
ON CONFLICT (email) DO NOTHING;
