import { db, Comment } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Comment).values([
		{ author: 'Jane Doe', body: 'Hope you like Astro DB!' },
		{ author: 'John Doe', body: 'Enjoy!'},
	])
}
