"use client"
import { faker } from '@faker-js/faker';
export type PaymentStatus =  'reconciled' | 'un-renconciled' | 'settled' | 'unsettled';

export type PaymentType = {
	type: string;
	price: string;
	transactionNo: string;
	time: string;
	status: PaymentStatus;
};


const range = (len: number) => {
	const arr = [];
	for (let i = 0; i < len; i++) {
		arr.push(i);
	}
	return arr;
};



function generateAppleDevice() {
    const deviceTypes = ['iPhone', 'iPad', 'MacBook', 'iMac', 'Mac Mini', 'Mac Pro', 'Apple Watch', 'AirPods'];
    const deviceType = faker.helpers.arrayElement(deviceTypes);

    let deviceModel;
    switch (deviceType) {
        case 'iPhone':
            deviceModel = faker.helpers.arrayElement(['iPhone 13 Pro Max', 'iPhone 13 Pro', 'iPhone 13', 'iPhone 12 Pro Max', 'iPhone 12 Pro', 'iPhone 12', 'iPhone 11 Pro Max', 'iPhone 11 Pro', 'iPhone 11', 'iPhone SE (2nd generation)', 'iPhone XR']);
            break;
        case 'iPad':
            deviceModel = faker.helpers.arrayElement(['iPad Pro 12.9-inch (5th generation)', 'iPad Pro 11-inch (3rd generation)', 'iPad Air (4th generation)', 'iPad (9th generation)', 'iPad Mini (6th generation)', 'iPad Pro 12.9-inch (4th generation)', 'iPad Pro 11-inch (2nd generation)', 'iPad (8th generation)', 'iPad Air (3rd generation)', 'iPad Mini (5th generation)']);
            break;
        case 'MacBook':
            deviceModel = faker.helpers.arrayElement(['MacBook Air (M1, 2020)', 'MacBook Pro 13-inch (M1, 2020)', 'MacBook Pro 14-inch (M1 Pro, 2021)', 'MacBook Pro 16-inch (M1 Pro, 2021)', 'MacBook Air (2020)', 'MacBook Pro 13-inch (2020)', 'MacBook Pro 16-inch (2019)', 'MacBook Pro 15-inch (2019)', 'MacBook Air (2019)', 'MacBook (2017)']);
            break;
        case 'iMac':
            deviceModel = faker.helpers.arrayElement(['iMac (24-inch, M1, 2021)', 'iMac (27-inch, 2020)', 'iMac Pro (2017)', 'iMac (21.5-inch, 2019)', 'iMac (27-inch, 2019)', 'iMac (21.5-inch, 2017)', 'iMac (27-inch, 2017)']);
            break;
        case 'Mac Mini':
            deviceModel = faker.helpers.arrayElement(['Mac Mini (M1, 2020)', 'Mac Mini (2018)', 'Mac Mini (Late 2014)', 'Mac Mini (Late 2012)']);
            break;
        case 'Mac Pro':
            deviceModel = faker.helpers.arrayElement(['Mac Pro (2019)', 'Mac Pro (Late 2013)']);
            break;
        case 'Apple Watch':
            deviceModel = faker.helpers.arrayElement(['Apple Watch Series 7', 'Apple Watch SE', 'Apple Watch Series 6', 'Apple Watch Series 5', 'Apple Watch Series 4', 'Apple Watch Series 3']);
            break;
        case 'AirPods':
            deviceModel = faker.helpers.arrayElement(['AirPods Max', 'AirPods Pro', 'AirPods (3rd generation)', 'AirPods (2nd generation)', 'AirPods']);
            break;
        default:
            deviceModel = 'AirPods Max';
    }

    return {
        model: deviceModel
    };
}



const newPayment = (): PaymentType => {
	return {
	price: faker.finance.amount({min: 200, max: 5000}),
    time: '12:20',
    type:  generateAppleDevice().model,
    transactionNo: '#' + faker.datatype.number({min: 0, max:100}).toPrecision(),
		status: faker.helpers.arrayElement(['reconciled' , 'un-renconciled' , 'settled' , 'unsettled']),
	};
};

export function paymentsData(...lens: number[]) {
	const makeDataLevel = (depth = 0): PaymentType[] => {
		const len = lens[depth]!;
		return range(len).map((d): PaymentType => {
			return {
				...newPayment(),
			};
		});
	};

	return makeDataLevel();
}


