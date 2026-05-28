import dataSource from './data-source';
import { WorkType } from '../work-type/work-type.entity';
import { WorkEntry } from '../work-entry/work-entry.entity';

async function seed() {
  await dataSource.initialize();

  const workTypeRepo = dataSource.getRepository(WorkType);
  const workEntryRepo = dataSource.getRepository(WorkEntry);

  let workTypes = await workTypeRepo.find();

  if (workTypes.length === 0) {
    workTypes = await workTypeRepo.save([
      workTypeRepo.create({ name: 'Кладка перегородок' }),
      workTypeRepo.create({ name: 'Монтаж опалубки' }),
      workTypeRepo.create({ name: 'Армирование фундамента' }),
      workTypeRepo.create({ name: 'Штукатурка стен' }),
    ]);

    console.log('✅ WorkType seeded');
  }

  const count = await workEntryRepo.count();

  if (count === 0) {
    await workEntryRepo.save([
      workEntryRepo.create({
        date: '2026-05-20',
        workType: workTypes[0],
        volume: 24,
        unit: 'м²',
        performer: 'Иванов И.И.',
      }),
      workEntryRepo.create({
        date: '2026-05-21',
        workType: workTypes[1],
        volume: 18,
        unit: 'м²',
        performer: 'Петров А.А.',
      }),
      workEntryRepo.create({
        date: '2026-05-22',
        workType: workTypes[2],
        volume: 120,
        unit: 'кг',
        performer: 'Сидоров С.С.',
      }),
      workEntryRepo.create({
        date: '2026-05-23',
        workType: workTypes[3],
        volume: 95,
        unit: 'м²',
        performer: 'Кузнецов К.К.',
      }),
    ]);

    console.log('✅ WorkEntry seeded');
  }

  await dataSource.destroy();
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
