//Json Object
var data = [
    {
        time: '1973-03-24',
        header: 'Pink Floyd',
        body: [
        {
            tag: 'img',
            attr: {
                src: '../img/Dark_Side_of_the_Moon.png',
                width: '100px',
                cssclass: 'img-responsive'
            }
        },
        {
            tag: 'h2',
            content: 'Dark Side of the Moon'
        },
        {
            tag: 'p',
			content: `Released in March 1973, the LP became an instant chart success in the UK and throughout Western Europe, earning an enthusiastic response from critics. 
			<br> Each member of Pink Floyd except Wright boycotted the press release of The Dark Side of the Moon because a quadraphonic mix had not yet been completed, and they felt presenting the album through a poor-quality stereo PA system was insufficient.`
        }],
        footer: 'By Source, Fair use, <a href=\"https://en.wikipedia.org/w/index.php?curid=18421376\" target=\"_blank\">source Wikipedia</a>'
    },
    {
        time: '1973-03-23',
        body: [{
            tag: 'h1',
            content: 'Pink Floyd'
        },
			{
            tag: 'img',
            attr: {
                src: '../img/Dark_Side_of_the_Moon.png',
                width: '100px',
                cssclass: 'img-responsive'
            }
        },
        {
            tag: 'h2',
            content: 'Dark Side of the Moon'
        },
        {
            tag: 'p',
            content: `Released in March 1973, the LP became an instant chart success in the UK and throughout Western Europe, earning an enthusiastic response from critics.`
		}],
		footer: 'By Source, Fair use, <a href=\"https://en.wikipedia.org/w/index.php?curid=18421376\" target=\"_blank\">source Wikipedia</a>'
    },
    {
        time: '1973-03-22',
        body: [{
            tag: 'h1',
            content: 'Pink Floyd'
		},
		{
            tag: 'img',
            attr: {
                src: '../img/Dark_Side_of_the_Moon.png',
                width: '100px',
                cssclass: 'img-responsive'
            }
        },
        {
            tag: 'h2',
            content: 'Dark Side of the Moon'
        },
        {
            tag: 'p',
			content: `Released in March 1973, the LP became an instant chart success in the UK and throughout Western Europe, earning an enthusiastic response from critics.<br>
			By Source, Fair use, https://en.wikipedia.org/w/index.php?curid=18421376`
        }]
    },
    {
        time: '1973-03-21',
        body: [{
            tag: 'img',
            attr: {
                src: '../img/Dark_Side_of_the_Moon.png',
                width: '100px',
                cssclass: 'img-responsive'
            }
        },
        {
            tag: 'h2',
            content: 'Pink Floyd Dark Side of the Moon'
        },
        {
            tag: 'p',
            content: `Released in March 1973, the LP became an instant chart success in the UK and throughout Western Europe, earning an enthusiastic response from critics.<br>
			By Source, Fair use, https://en.wikipedia.org/w/index.php?curid=18421376`
        }]
    }
];

$(document).ready(function () {

    $('#myTimeline').albeTimeline(data, {
		language: 'en-US',
        effect: "zoomInUp",  // 'zoomIn', 'fadeInUp', 'bounceIn',"zoomInUp"
		showMenu: true,
		sortDesc: false,
		showGroup: true
    });

});
