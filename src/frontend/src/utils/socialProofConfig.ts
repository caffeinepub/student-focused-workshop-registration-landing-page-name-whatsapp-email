// Configuration for social proof popup system
export const SOCIAL_PROOF_CONFIG = {
  // Show interval: random between 6-10 seconds
  showIntervalMin: 6000,
  showIntervalMax: 10000,
  
  // Auto-hide duration: 4 seconds
  autoHideDuration: 4000,
  
  // Storage configuration
  storageKey: 'socialProofShownNames',
  useSessionStorage: true, // true = sessionStorage, false = localStorage
  
  // Time ago options
  timeAgoOptions: [
    'just now',
    '1 minute ago',
    '2 minutes ago',
    '3 minutes ago',
    '5 minutes ago',
    '7 minutes ago',
    '10 minutes ago',
  ],
  
  // Indian names list (provided by user)
  names: [
    'Divyansh', 'Riya', 'Aman', 'Naina', 'Kunal', 'Shruti', 'Ayush', 'Simran',
    'Rohit', 'Anushka', 'Yash', 'Pallavi', 'Harshit', 'Neha', 'Saurabh', 'Kavya',
    'Aditya', 'Garima', 'Mohit', 'Sneha', 'Varun', 'Ishita', 'Gaurav', 'Mansi',
    'Shubham', 'Ritu', 'Siddharth', 'Pooja', 'Ankit', 'Aarushi', 'Pranav', 'Divya',
    'Rahul', 'Komal', 'Tushar', 'Sakshi', 'Mayank', 'Rashmi', 'Jeet', 'Tanvi',
    'Vikas', 'Khushboo', 'Nikhil', 'Rupal', 'Lokesh', 'Megha', 'Manish', 'Anjali',
    'Chirag', 'Saloni', 'Deepak', 'Ira', 'Hemant', 'Shivani', 'Ujjwal', 'Monika',
    'Sachin', 'Payal', 'Arjun', 'Pankhuri', 'Naveen', 'Renu', 'Devansh', 'Twinkle',
    'Tarun', 'Sonali', 'Kartik', 'Aditi', 'Sandeep', 'Vaishali', 'Abhishek', 'Heena',
    'Suraj', 'Nazneen', 'Puneet', 'Surbhi', 'Karan', 'Babita', 'Yogesh', 'Reena',
    'Alok', 'Jyoti', 'Ashish', 'Seema', 'Mukesh', 'Madhuri', 'Ramesh', 'Chitra',
    'Naresh', 'Rakhi', 'Mahesh', 'Sunita', 'Ravi', 'Meenakshi', 'Bhanu', 'Aishwarya',
    'Sameer', 'Sonia', 'Anurag', 'Farah', 'Kishan', 'Radha', 'Pratik', 'Pinki',
    'Uday', 'Kritika', 'Ishan', 'Nupur', 'Lakshay', 'Preeti', 'Darsh', 'Poonam',
    'Vedant', 'Anamika', 'Atharv', 'Bharti', 'Yuvraj', 'Rekha', 'Ritvik', 'Lata',
    'Shaurya', 'Kajal', 'Om', 'Madhu', 'Vihaan', 'Sheetal', 'Krish', 'Alka',
    'Neil', 'Deepali', 'Dev', 'Rashika', 'Ayaan', 'Suman', 'Kabir', 'Chanchal',
    'Arnav', 'Rachna', 'Samarth', 'Rashika', 'Yogendra', 'Ankita', 'Rajat', 'Garima',
    'Vivek', 'Minal', 'Sunil', 'Aparna', 'Narendra', 'Ishani', 'Shankar', 'Rupal',
    'Gopal', 'Farhan', 'Jeetendra', 'Vaibhav', 'Purnima', 'Rohin', 'Tanu', 'Bhupesh',
    'Pallak', 'Chetan', 'Swati', 'Rajeev', 'Pankaj', 'Neeraj', 'Trisha',
  ],
  
  // Indian cities list (provided by user)
  cities: [
    'Delhi', 'Lucknow', 'Jaipur', 'Noida', 'Ghaziabad', 'Meerut', 'Kanpur', 'Varanasi',
    'Prayagraj', 'Agra', 'Aligarh', 'Bareilly', 'Moradabad', 'Saharanpur', 'Muzaffarnagar',
    'Bijnor', 'Hapur', 'Bulandshahr', 'Mathura', 'Firozabad', 'Jhansi', 'Gorakhpur',
    'Ballia', 'Azamgarh', 'Faizabad', 'Ayodhya', 'Sultanpur', 'Amethi', 'Raebareli',
    'Hardoi', 'Sitapur', 'Lakhimpur', 'Shahjahanpur', 'Bahraich', 'Gonda', 'Basti',
    'Deoria', 'Kushinagar', 'Mau', 'Chandauli', 'Mirzapur', 'Sonbhadra', 'Patna',
    'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Purnea', 'Katihar', 'Darbhanga', 'Madhubani',
    'Samastipur', 'Begusarai', 'Khagaria', 'Arrah', 'Buxar', 'Sasaram', 'Siwan',
    'Chhapra', 'Motihari', 'Bettiah', 'Sitamarhi', 'Hajipur', 'Vaishali', 'Ranchi',
    'Dhanbad', 'Jamshedpur', 'Hazaribagh', 'Giridih', 'Ramgarh', 'Bokaro', 'Palamu',
    'Deoghar', 'Godda', 'Dumka', 'Chaibasa', 'Chandigarh', 'Mohali', 'Panchkula',
    'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Moga', 'Ferozepur',
    'Pathankot', 'Hoshiarpur', 'Kapurthala', 'Dehradun', 'Haridwar', 'Roorkee',
    'Haldwani', 'Rudrapur', 'Kashipur', 'Nainital', 'Almora', 'Pithoragarh', 'Shimla',
    'Solan', 'Una', 'Hamirpur', 'Mandi', 'Kullu', 'Manali', 'Bilaspur (HP)', 'Chamba',
    'Kangra', 'Jammu', 'Udhampur', 'Kathua', 'Samba', 'Reasi', 'Anantnag', 'Baramulla',
    'Pulwama', 'Kupwara', 'Srinagar', 'Leh', 'Kargil', 'Ajmer', 'Kota', 'Udaipur',
    'Alwar', 'Bharatpur', 'Sikar', 'Jhunjhunu', 'Churu', 'Bikaner', 'Nagaur', 'Pali',
    'Jodhpur', 'Barmer', 'Jaisalmer', 'Tonk', 'Bundi', 'Chittorgarh', 'Bhilwara',
    'Hanumangarh', 'Sri Ganganagar', 'Indore', 'Bhopal', 'Ujjain', 'Ratlam', 'Dewas',
    'Rewa', 'Satna', 'Jabalpur', 'Katni', 'Chhindwara', 'Sagar', 'Vidisha', 'Itarsi',
    'Hoshangabad', 'Gwalior', 'Morena', 'Bhind', 'Shivpuri', 'Damoh', 'Seoni', 'Nagpur',
    'Pune', 'Mumbai', 'Thane', 'Kalyan', 'Nashik', 'Aurangabad', 'Jalgaon', 'Amravati',
    'Akola', 'Wardha', 'Yavatmal', 'Solapur', 'Kolhapur', 'Sangli', 'Satara', 'Baramati',
    'Latur', 'Beed', 'Parbhani', 'Nanded', 'Chennai', 'Coimbatore', 'Madurai', 'Salem',
    'Erode', 'Trichy', 'Thanjavur', 'Vellore', 'Tirunelveli', 'Thoothukudi', 'Nagercoil',
    'Kanchipuram', 'Chengalpattu', 'Tambaram', 'Avadi', 'Bangalore', 'Mysore', 'Mandya',
    'Tumkur', 'Davangere', 'Shimoga', 'Hubli', 'Dharwad', 'Belgaum', 'Kalaburagi',
    'Raichur', 'Bellary', 'Hyderabad', 'Warangal', 'Karimnagar', 'Nizamabad', 'Khammam',
    'Suryapet', 'Nalgonda', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Tirupati',
    'Rajahmundry', 'Vizianagaram', 'Visakhapatnam', 'Kakinada', 'Bhubaneswar', 'Cuttack',
    'Rourkela', 'Sambalpur', 'Berhampur', 'Balasore', 'Bhadrak', 'Keonjhar', 'Kolkata',
    'Howrah', 'Asansol', 'Durgapur', 'Siliguri', 'Malda', 'Raiganj', 'Bankura', 'Purulia',
    'Midnapore', 'Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Tezpur', 'Tinsukia',
    'Shillong', 'Agartala', 'Imphal', 'Aizawl', 'Itanagar', 'Dimapur', 'Kohima',
  ],
};
