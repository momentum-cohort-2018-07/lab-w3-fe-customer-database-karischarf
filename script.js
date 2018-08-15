// class Customer {
//   constructor(name, location, phoneNumbers, thumbnail, dob, registered) {
//       this.name = name.first + ' ' +name.last; 
//       this.location - location;
//       this.phoneNumbers = phoneNumbers;
//       this.thumbnail = thumbnail;
//       this.dob = dob;
//       this.registered = registered;
//   }
// }

// Object.getPrototypeOf(Employee)
// date: return moment(dob).format(‘MMM Do, YYYY’)


console.log('Write your code here!')
console.log('customers and moment are available to you.')

function titleCase(word) {
    return word[0].toUpperCase() + word.slice(1)
}

class Customer {
    constructor(customerInfo) {
        this.info = customerInfo
    }

    getName() {
        return titleCase(this.info.name.first) +
            ' ' +
            titleCase(this.info.name.last)
    }

    getEmail() {
        return this.info.email
    }

    getDates() {
        return 'DOB: ' + moment(this.info.dob).format('MMM D, YYYY') + '\n' + 'Customer since: ' + moment(this.info.registered).format('MMM D, YYYY')
    }

    getLocation() {
        return titleCase(this.info.location.street) + '\n'+ ' ' +
        titleCase(this.info.location.city) + ', ' +
        titleCase(this.info.location.state) + ' ' +
        (this.info.location.postcode)
    }

    getCustomerSince () {
        return 'Customer since: ' + this.info.registered
    }


    generateDOM() {
        let div = document.createElement('div')
        div.classList.add('customer')

        let nameH2 = document.createElement('h2')
        nameH2.innerText = this.getName()

        let email = document.createElement('p')
        email.innerText = this.getEmail()

        let dates = document.createElement('p')
        dates.innerText = this.getDates()

        let photo = document.createElement('img')
        photo.src = this.info.picture.large

        let location = document.createElement('p')
        location.innerText = this.getLocation()

        let CustomerSince = document.createElement('p')
        CustomerSince.innerText = this.getCustomerSince()

        div.appendChild(nameH2)
        div.appendChild(email)
        div.appendChild(dates)
        div.appendChild(photo)
        div.appendChild(location)

        return div
    }
}

let outputDiv = document.getElementById('output')
for (let customerInfo of customers) {
    let customer = new Customer(customerInfo)
    outputDiv.appendChild(customer.generateDOM())
}

