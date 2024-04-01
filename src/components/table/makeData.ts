import { faker } from '@faker-js/faker';
type Status =  'reconciled' | 'un-renconciled' | 'settled' | 'unsettled';

export type Payment = {
	type: string;
	price: string;
	transactionNo: string;
	time: string;
	status: Status;
};


const range = (len: number) => {
	const arr = [];
	for (let i = 0; i < len; i++) {
		arr.push(i);
	}
	return arr;
};


const newPayment = (): Payment => {
	return {
	price: faker.finance.amount({min: 200, max: 5000}),
    time: '12:20',
    type:  'Apple Mac Book 15” 250 SSD 12GB',
    transactionNo: '1234567890',
		status: faker.helpers.arrayElement(['reconciled' , 'un-renconciled' , 'settled' , 'unsettled']),
	};
};

export function paymentsData(...lens: number[]) {
	const makeDataLevel = (depth = 0): Payment[] => {
		const len = lens[depth]!;
		return range(len).map((d): Payment => {
			return {
				...newPayment(),
			};
		});
	};

	return makeDataLevel();
}


