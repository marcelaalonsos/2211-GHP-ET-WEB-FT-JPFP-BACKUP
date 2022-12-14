const {db} = require('./server/db')
const {green, red} = require('chalk')

const Student = require('./server/db/models/students');
const Campus = require('./server/db/models/campuses');

const students = [{
  firstName: 'Bart',
  lastName: 'Simpson',
  email: 'bart@springfield.edu',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png',
  gpa: 1
}, {
  firstName: 'Lisa',
  lastName: 'Simpson',
  email: 'lisa@harvard.edu',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png',
  gpa: 4
}, {
  firstName: 'Milhouse',
  lastName: 'VanHouten',
  email: 'milhouse@nyu.edu',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/11/Milhouse_Van_Houten.png',
  gpa: 2
}, {
  firstName: 'Nelson',
  lastName: 'Muntz',
  email: 'nelson@springfield.edu',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c6/Nelson_Muntz.PNG',
  gpa: 1
}, {
  firstName: 'Martin',
  lastName: 'Prince',
  email: 'martin@harvard.edu',
  imageUrl: 'https://i.ibb.co/QHKbcfB/bane-2-1-1-4-4-10-4-1-1-1.png',
  gpa: 4
}, {
  firstName: 'Jimbo',
  lastName: 'Jones',
  email: 'jimbo@nyu.edu',
  imageUrl: 'https://pbs.twimg.com/profile_images/625013401287196672/19vLuojk_400x400.png',
  gpa: 2
}];

const campuses = [{
  name: 'Springfield',
  imageUrl: 'https://tstotopix.files.wordpress.com/2015/05/ddlvalley-rocks_simons-s26e22-720p-hdtv-x264-dimension-mkv_snapshot_07-02_2015-05-18_02-55-12.png',
  address: '305 Evergreen Terrace',
  description: 'Not even a community college, this is a last-chance-u'
}, {
  name: 'Harvard',
  imageUrl: 'https://cdn.britannica.com/69/141169-050-CD5892EB/Baker-Library-Harvard-Business-School-Boston-University.jpg',
  address: '1 Harvard Avenue',
  description: 'Veritas'
}, {
  name: 'NYU',
  imageUrl: 'https://meet.nyu.edu/wp-content/uploads/2020/04/Header_Imageone-e1586952269373.jpg',
  address: '4 Washington square',
  description: 'Perstare et Praesteare'
}];

const seed = async () => {
  try {
    await db.sync({force: true})

    const studentList = await Promise.all(students.map(student => {
      return Student.create(student);
    }));

    const [bart, lisa, milhouse, nelson, martin, jimbo] = studentList;

    const schoolList = await Promise.all(campuses.map(campus => {
      return Campus.create(campus)
    }));

    const [springfield, harvard, nyu] = schoolList;

    await bart.setCampus(springfield);
    await lisa.setCampus(harvard);
    await milhouse.setCampus(nyu);
    await nelson.setCampus(springfield);
    await martin.setCampus(harvard);
    await jimbo.setCampus(nyu);

    console.log(green('Seeding success!'))
    db.close()
  }
  catch (err) {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  }
}

seed();
