import {
  iconsClock,
  iconsTask,
  iconsTaskComplete
} from '../common/main-icon-reexp'

export interface UserInterface {
  userName?: string
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  phoneNumber?: string
  country?: string
  balance?: number
  avatarUrl?: string
  studyData?: StudyData[]
}

interface StudyData {
  icon: string // или другой тип, если у вас есть конкретный тип для иконок
  name: string
  count: string
}

const user: UserInterface = {
  userName: 'JohnieDOE',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  password: 'password123',
  phoneNumber: '+1234567890',
  country: 'United States',
  avatarUrl:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVSf40vU1zGS3SBc9ygAkEBAoT5qi-uTRXdw&s',
  balance: 12.55,
  studyData: [
    {
      icon: iconsClock,
      name: 'studying time',
      count: '12h 12m'
    },
    {
      icon: iconsTask,
      name: 'in progress',
      count: '4 courses'
    },
    {
      icon: iconsTaskComplete,
      name: 'courses',
      count: '3 completed'
    }
  ]
}

export default user
