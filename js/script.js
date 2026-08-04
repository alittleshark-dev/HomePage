function updateClock() {
            const now = new Date();
            
            // 1. 获取时间部分 (关键改动在这里！)
            // 加上了 second: '2-digit'，并且去掉了 hour12: false (因为中文环境下它不会干扰秒的显示)
            const timeStr = now.toLocaleTimeString('zh-CN', { 
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit' // 加上这一项，时间就会变成 12:00:00 格式
            });
            document.getElementById('current-time').innerText = timeStr;

            // 2. 获取日期部分
            const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
            const weekStr = weekdays[now.getDay()];
            
            // 3. 组合显示 (例如：2026-04-25 星期六)
            // toLocaleDateString 默认是 2026/4/25，我们用 replace 把 / 换成 -
            const dateStr = now.toLocaleDateString('zh-CN').replace(/\//g, '-') + ' ' + weekStr;
            document.getElementById('current-date').innerText = dateStr;
        }

        // 每100毫秒更新一次，让秒针跳动更流畅
        setInterval(updateClock, 100); 
        updateClock(); // 页面加载时立即执行一次
        function openWin(url) {
            window.open("http://"+url, "_blank", "width=800,height=600");
        }