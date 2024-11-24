echo "SYSTEM INFORMATION REPORT"

echo "Current Date & Time : $(date)"

echo "System Uptime : $(uptime -p)"

echo "Currently Logged In Users : "
who

echo "Disk Usage of Root Filesystem : "
df -h | awk 'NR==2 {print $5, "used out of", $2}'


