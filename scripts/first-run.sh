#!/bin/bash

echo "🚀 เริ่มต้นการรันโปรเจคครั้งแรก..."

# หยุดและลบ containers เดิม (ถ้ามี)
echo "�� ลบ containers เดิม..."
docker-compose down -v

# สร้างและรัน containers
echo "🔧 สร้างและรัน containers..."
docker-compose up -d

# รอให้ MySQL พร้อมใช้งาน

# รัน database setup
echo "�� รัน database setup..."
docker-compose exec node-server node prisma/db-setup.js

echo "✅ การตั้งค่าเสร็จสิ้น! แอปพลิเคชันพร้อมใช้งานที่ http://localhost:3000"
echo "📊 phpMyAdmin พร้อมใช้งานที่ http://localhost:8080" 