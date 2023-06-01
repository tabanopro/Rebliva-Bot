//THIS IS A BROKEN SOURCE CODE!!! THIS IS 100% FREE TO USE JUST CREDIT tabanopro#3951 !!!!!!!!!!!!!!!!
(async () => {
    // default imports
    const events = require('events');
    const {
        exec
    } = require("child_process")
    const logs = require("discord-logs")
    const Discord = require("discord.js")
    const {
        MessageEmbed,
        MessageButton,
        MessageActionRow,
        Intents,
        Permissions,
        MessageSelectMenu
    } = require("discord.js")
    const fs = require('fs');
    let process = require('process');
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // block imports
    const os = require("os-utils");
    let https = require("https")
    const {
        TicTacToe
    } = require("discord-gamecord");
    const S4D_APP_PKG_axios = require('axios')
    const S4D_APP_NOBLOX = require("noblox.js");
    const synchronizeSlashCommands = require('@frostzzone/discord-sync-commands');

    // define s4d components (pretty sure 90% of these arnt even used/required)
    let s4d = {
        Discord,
        fire: null,
        joiningMember: null,
        reply: null,
        player: null,
        manager: null,
        Inviter: null,
        message: null,
        notifer: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };

    // check if d.js is v13
    if (!require('./package.json').dependencies['discord.js'].startsWith("^13.")) {
        let file = JSON.parse(fs.readFileSync('package.json'))
        file.dependencies['discord.js'] = '^13.15.1'
        fs.writeFileSync('package.json', JSON.stringify(file, null, 4))
        exec('npm i')
        throw new Error("Seems you arent using v13 please re-run or run `npm i discord.js@13.12.0`");
    }

    // check if discord-logs is v2
    if (!require('./package.json').dependencies['discord-logs'].startsWith("^2.")) {
        let file = JSON.parse(fs.readFileSync('package.json'))
        file.dependencies['discord-logs'] = '^2.0.0'
        fs.writeFileSync('package.json', JSON.stringify(file, null, 4))
        exec('npm i')
        throw new Error("discord-logs must be 2.0.0. please re-run or if that fails run `npm i discord-logs@2.0.0` then re-run");
    }

    // create a new discord client
    s4d.client = new s4d.Discord.Client({
        intents: [
            Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)
        ],
        partials: [
            "REACTION",
            "CHANNEL"
        ]
    });

    // when the bot is connected say so
    s4d.client.on('ready', () => {
        console.log(s4d.client.user.tag + " is alive!")
    })

    // upon error print "Error!" and the error
    process.on('uncaughtException', function(err) {
        console.log('Error!');
        console.log(err);
    });

    // give the new client to discord-logs
    logs(s4d.client);

    // pre blockly code
    async function _S4D_inventionFSHapi(_S4D_fshurl, _S4D_fshquery) {
        let _S4D_fshresponse;
        try {
            _S4D_fshresponse = await S4D_APP_PKG_axios.get('https://fsh-bot.frostzzone.repl.co/api/' + _S4D_fshurl + encodeURIComponent(_S4D_fshquery) + '&plain=1');
            _S4D_fshresponse = _S4D_fshresponse.data;
        } catch (error) {
            // if error return empty and log
            _S4D_fshresponse = ""
            console.error('Fsh api error!')
            console.error(error)
        }
        return _S4D_fshresponse;
    }

    // blockly code
    function colourRandom() {
        var num = Math.floor(Math.random() * Math.pow(2, 24));
        return '#' + ('00000' + num.toString(16)).substr(-6);
    }

    function mathRandomInt(a, b) {
        if (a > b) {
            // Swap a and b to ensure a is smaller.
            var c = a;
            a = b;
            b = c;
        }
        return Math.floor(Math.random() * (b - a + 1) + a);
    }


    const http = require('http');
    const server = http.createServer((req, res) => {
        res.writeHead(200);
        res.end('This site was created to keep bot on 25/8');
    });
    server.listen(3000);

    s4d.client.on('messageCreate', async (s4dmessage) => {
        throw (['User That Sent Message:', s4dmessage.author, 'In server:', s4dmessage.guild, 'In Channel:', s4dmessage.channel, 'Time:', s4dmessage.createdTimestamp, 'Content:', s4dmessage.content].join(''))
        window.alert(['User That Sent Message:', s4dmessage.author, 'In server:', s4dmessage.guild, 'In Channel:', s4dmessage.channel, 'Time:', s4dmessage.createdTimestamp, 'Content:', s4dmessage.content].join(''));

    });

    await s4d.client.login((process.env[String('token')])).catch((e) => {
        const tokenInvalid = true;
        const tokenError = e;
        if (e.toString().toLowerCase().includes("token")) {
            throw new Error("An invalid bot token was provided!")
        } else {
            throw new Error("Privileged Gateway Intents are not enabled! Please go to https://discord.com/developers and turn on all of them.")
        }
    });

    s4d.client.on('ready', async () => {
        s4d.client.user.setPresence({
            status: "online",
            activities: [{
                name: 'Update Soon!',
                type: "WATCHING"
            }]
        });

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.member.user.id)
        if ((interaction.commandName) == 'tictactoe') {

            new TicTacToe({
                message: interaction,
                slash_command: true,
                opponent: (interaction.options.getUser('opponent')),
                embed: {
                    title: 'Tic Tac Toe',
                    overTitle: 'Game Over',
                    color: '#5865F2',
                },
                oEmoji: '🔵',
                xEmoji: '❌',
                blankEmoji: '➖',
                oColor: 'PRIMARY',
                xColor: 'DANGER',
                waitMessage: 'Waiting for the opponent...',
                turnMessage: '{emoji} | Its now **{player}** turn!',
                askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Tic Tac Toe!',
                cancelMessage: 'Looks like they refused to have a game of Tic Tac Toe. :(',
                timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
                drawMessage: 'It was a draw!',
                winMessage: '{emoji} | **{winner}** won the game!',
                gameEndMessage: 'The game went unfinished :(',
            }).startGame();
        }
        if ((interaction.commandName) == 'cat') {
            await interaction.reply({
                content: String('Cat Image'),
                embeds: [{
                    color: String(colourRandom()),
                    title: String('Image'),
                    description: String('made by: tabanopro#3951'),
                    image: {
                        url: String(await _S4D_inventionFSHapi('animal?animal=', cat))
                    },
                }],
                ephemeral: false,
                components: []
            });
        }
        if ((interaction.commandName) == 'kitty') {
            await interaction.reply({
                content: String('Kitty Image'),
                embeds: [{
                    color: String(colourRandom()),
                    title: String('Image'),
                    description: String('made by: tabanopro#3951'),
                    image: {
                        url: String(await _S4D_inventionFSHapi('animal?animal=', 'puppy'))
                    },
                }],
                ephemeral: false,
                components: []
            });
        }
        if ((interaction.commandName) == 'dog') {
            await interaction.reply({
                content: String('Dwag Image'),
                embeds: [{
                    color: String(colourRandom()),
                    title: String('Image'),
                    description: String('made by: tabanopro#3951'),
                    image: {
                        url: String(await _S4D_inventionFSHapi('animal?animal=', dog))
                    },
                }],
                ephemeral: false,
                components: []
            });
        }
        if ((interaction.commandName) == 'puppy') {
            await interaction.reply({
                content: String('Puppy Image'),
                embeds: [{
                    color: String(colourRandom()),
                    title: String('Image'),
                    description: String('made by: tabanopro#3951'),
                    image: {
                        url: String(await _S4D_inventionFSHapi('animal?animal=', 'puppy'))
                    },
                }],
                ephemeral: false,
                components: []
            });
        }
        if ((interaction.commandName) == 'robloxprofile') {
            S4D_APP_NOBLOX.getIdFromUsername(String((interaction.options.getString('username')))).then(async (gained_roblox_user_id) => {
                S4D_APP_NOBLOX.getPlayerInfo({
                    userId: Number((gained_roblox_user_id))
                }).then(async (roblox_user_info) => {
                    S4D_APP_NOBLOX.getPlayerThumbnail((gained_roblox_user_id), 720, "png", false, "Body").then(async (roblox_user_thumbnail) => {
                        await interaction.reply({
                            content: String(['{Your User Profile} Username:', roblox_user_info.username, 'Display Name:', roblox_user_info.displayName, 'Join Date:', roblox_user_info.joinDate, 'Account Age:', roblox_user_info.age].join('')),
                            embeds: [{
                                color: String(colourRandom()),
                                title: String('Roblox User Profile'),
                                description: String('made by: tabanopro#3951'),
                                image: {
                                    url: String(roblox_user_thumbnail[0].imageUrl)
                                },
                            }],
                            ephemeral: false,
                            components: []
                        });

                    })

                })

            })
        }
        if ((interaction.commandName) == 'rbxuseridconvert') {
            S4D_APP_NOBLOX.getIdFromUsername(String((interaction.options.getString('username')))).then(async (gained_roblox_user_id) => {
                S4D_APP_NOBLOX.getPlayerThumbnail((gained_roblox_user_id), 720, "png", false, "Headshot").then(async (roblox_user_thumbnail) => {
                    await interaction.reply({
                        embeds: [{
                            color: String(colourRandom()),
                            title: String('ur user id'),
                            description: String(['User Id:', gained_roblox_user_id, '{Created By: tabanopro#3951}'].join('')),
                            image: {
                                url: String(roblox_user_thumbnail[0].imageUrl)
                            },
                        }],
                        ephemeral: false,
                        components: []
                    });

                })

            })
        }
        if ((interaction.commandName) == 'magic8ball') {
            if (mathRandomInt(1, 2) == 1) {
                await interaction.reply({
                    embeds: [{
                        color: String(colourRandom()),
                        title: String('Magic 8 Ball Say:'),
                        description: String(['Question:', interaction.options.getString('message'), '|Answer: ', 'No, not at all ', '{Created By: tabanopro#3951}'].join('')),
                    }],
                    ephemeral: false,
                    components: []
                });
            } else {
                await interaction.reply({
                    embeds: [{
                        color: String(colourRandom()),
                        title: String('Magic 8 Ball Say:'),
                        description: String(['Question:', interaction.options.getString('message'), '|Answer: ', 'Yes, 100% ', '{Created By: tabanopro#3951}'].join('')),
                    }],
                    ephemeral: false,
                    components: []
                });
            }
        }
        if ((interaction.commandName) == 'botstat') {

            os.cpuUsage(async function(v) {
                var obj = v * 100
                await interaction.reply({
                    embeds: [{
                        color: String(colourRandom()),
                        title: String('Bot\'s Status on Repl.it'),
                        description: String(['Bot Server Count:', s4d.client.guilds.cache.size, '| Bot Opreating System:', os.platform(), '| Bot Free Memory:', os.freemem(), '| Bot  Total Memory:', os.totalmem(), '| Bot CPU Usage:', obj, ' {Created By: tabanopro#3951}  '].join('')),
                    }],
                    ephemeral: false,
                    components: []
                });

            });
        }
        if ((interaction.commandName) == 'lookup') {
            await interaction.reply({
                embeds: [{
                    color: String(colourRandom()),
                    title: String('Look Up An Image'),
                    description: String('here is your image your welcome.'),
                    image: {
                        url: String(await _S4D_inventionFSHapi('animal?animal=', (interaction.options.getString('input'))))
                    },
                }],
                ephemeral: false,
                components: []
            });
        }
        if ((interaction.commandName) == 'docs') {
            await interaction.reply({
                embeds: [{
                    color: String(colourRandom()),
                    title: String('Rebliva Bot Docs'),
                    url: String('https://rebliva-bot-doc.glim4045.repl.co'),
                    description: String('Your welcome.'),
                }],
                ephemeral: true,
                components: []
            });
        }

    });

    synchronizeSlashCommands(s4d.client, [{
        name: 'tictactoe',
        description: 'play tic tac toe (XO)',
        options: [{
            type: 6,
            name: 'opponent',
            required: true,
            description: 'anoter player',
            choices: [

            ]
        }, ]
    }, {
        name: "cat",
        description: 'cat images',
        options: [

        ]
    }, {
        name: 'kitty',
        description: 'kitty images',
        options: [

        ]
    }, {
        name: 'dog',
        description: 'dog images',
        options: [

        ]
    }, {
        name: 'puppy',
        description: 'puppy images',
        options: [

        ]
    }, {
        name: 'robloxprofile',
        description: 'view ur roblox profile',
        options: [{
            type: 3,
            name: 'username',
            required: true,
            description: 'your roblox username',
            choices: [

            ]
        }, ]
    }, {
        name: 'rbxuseridconvert',
        description: 'convert roblox username to id',
        options: [{
            type: 3,
            name: 'username',
            required: true,
            description: 'your roblox username',
            choices: [

            ]
        }, ]
    }, {
        name: 'magic8ball',
        description: 'yer/no',
        options: [{
            type: 3,
            name: 'message',
            required: true,
            description: 'what to ask',
            choices: [

            ]
        }, ]
    }, {
        name: 'botstat',
        description: 'Bot\'s status',
        options: [

        ]
    }, {
        name: 'lookup',
        description: 'look up an image using fsh api. (It updated)',
        options: [{
            type: 3,
            name: 'input',
            required: true,
            description: 'what to search',
            choices: [

            ]
        }, ]
    }, {
        name: 'docs',
        description: 'get a link to the docs',
        options: [

        ]
    }, ], {
        debug: true,

    });

    return s4d
})();
