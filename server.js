const conf = require("./src/config")
const excel = require("./src/excel")
const mail = require("./src/email")

async function main() {
    console.log(conf.EMAIL_ADDRESS)
    const data = (await excel.getData()).Sheet1

    //console.log(data)

    if (data.length > 0) {
        data.forEach(element => {
            if (element.to && element.subject && element.content) {
                let subject = element.subject
                let content = element.content
                if (element.name) {
                    subject = element.subject.replace("$name", element.name)
                    content = element.content.replace("$name", element.name)
                }
                console.log(element.to+" | " + subject+" | "+ content)
                mail.send(element.to, subject, content)
            }
        });

    } else {
        console.log("Invalid data")
    }

}

main()