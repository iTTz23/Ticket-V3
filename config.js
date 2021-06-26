/*
  ███████████████████████████████████████████████████████████████████
  █▀▀▀▀▀█████▀▄─██▄─▄─▀█▄─▄▄▀█▄─██─▄█▄─▄███▄─▄████▀▄─██─█─███████████
  ███████████─▀─███─▄─▀██─██─██─██─███─██▀██─██▀██─▀─██─▄─███░░██░░██
  ▀▀▀▀▀▀▀▀▀▀▄▄▀▄▄▀▄▄▄▄▀▀▄▄▄▄▀▀▀▄▄▄▄▀▀▄▄▄▄▄▀▄▄▄▄▄▀▄▄▀▄▄▀▄▀▄▀▀▀▄▄▀▀▄▄▀▀
*/

const config = {
    prefix: '-', //برفكس البوت
    token: 'ODU3OTg5MjUyNjQxODQ5MzU1.YNXmwg.S_aRzAEURnnu5tkzJ27Tg5RP0N0', // التوكن
    debug: 'false',
    antispam_minute: '1', //عدد الدقائق لعدم تكرار فتح تذكرة
    serverurl: '',
    panel_message: 'طلب ديزاين \nطلب راب \nطلب برمجة', //تقدر تعدل الرسالة كامله من commands/add/panel.js
    servername: 'Hope',
    transcript: 'administrator',
    /*----------------------*/
    close_type: 'close', /* delete or close */
    categoryID_move: '857977433109430272', /* مهم أيدي كاتيجوري التذاكر المغلقه */
    /*----------------------*/
    autodelete_status: 'true', /* حذف التكتات المهملة */
    AutoDelete_inactive: '5',
    /*----------------------*/
    logs: '857978075513618432', /* مهم أيدي أيدي روم اللوقات */
    reopened: '857981336543690803', /* مهم أيدي كاتيجوري التكتات المغلقه بعد فتحها تنقل له */
    /*----------------------*/
    user_permissions: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY'],
    tickets: [
        {//تنسخ من هنا
            channel_name: "{ticket_reaction}〢ticket_{counter}",
            reaction: "🎨",
            title: "فتح تذكرة",
            message: '\`\`\`تم إنشاء تذكرتك بنجاح\`\`\`',
            managers: ['840514881831698452'],
            category: '857978425058131969',
            permissions: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY'],
        },//الى هنا
        //وتلصق تحت السطر لإنشاء تذكرة آخرى
	{//تنسخ من هنا
            channel_name: "{ticket_reaction}〢ticket_{counter}",
            reaction: "🎶",
            title: "فتح تذكرة",
            message: '\`\`\`تم إنشاء تذكرتك بنجاح\`\`\`',
            managers: ['840514881831698452'],
            category: '857978466007253023',
            permissions: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY'],
        },
	
	{//تنسخ من هنا
            channel_name: "{ticket_reaction}〢ticket_{counter}",
            reaction: "💻",
            title: "فتح تذكرة",
            message: '\`\`\`تم إنشاء تذكرتك بنجاح\`\`\`',
            managers: ['840514881831698452'],
            category: '857978499771662356',
            permissions: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY'],
        },
    ]
}

module.exports = config
