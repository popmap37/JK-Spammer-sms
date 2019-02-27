const inquirer = require('inquirer')

module.exports = () => {
    const questions = [
        {
            name: 'number',
            type: 'input',
            message: 'ใส่เบอร์ที่เราจะแกล้งลบ0ออกใส่66แทน:',
            validate: (value) => {
                if (
                    !isNaN(value) && value.startsWith('66') && value.length == 11 ||
                    !isNaN(value) && value.startsWith('06') && value.length == 10 ||
                    !isNaN(value) && value.startsWith('08') && value.length == 10 ||
                    !isNaN(value) && value.startsWith('09') && value.length == 10
                ) return true
                return 'ใส่เบอร์ให้ถูกต้องอย่างเช่น 66123456789'
            }
        },
        {
            name: 'method',
            type: 'checkbox',
            message: 'Select method',
            choices: ['ข้อความ', 'โทร'],
            validate: (value) => {
                if (value.length) return true
                return 'Please select method'
            }
        }
    ]
    return inquirer.prompt(questions)
}
