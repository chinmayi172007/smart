export const visitors = [
  { id: 1, name: "John Doe", type: "Guest", time: "10:30 AM", status: "Checked In", date: "Today" },
  { id: 2, name: "Pizza Delivery", type: "Delivery", time: "08:15 PM", status: "Left", date: "Yesterday" },
  { id: 3, name: "Jane Smith", type: "Family", time: "02:00 PM", status: "Checked In", date: "Yesterday" },
];

export const services = [
  { id: 1, name: "Plumbing", provider: "QuickFix", rating: 4.8, available: true },
  { id: 2, name: "Electrical", provider: "Sparky's", rating: 4.5, available: true },
  { id: 3, name: "Cleaning", provider: "Spotless", rating: 4.9, available: false },
  { id: 4, name: "Pest Control", provider: "NoBugs", rating: 4.7, available: true },
];

export const payments = [
  { id: 1, title: "Maintenance Fee", amount: "$150.00", date: "Oct 01, 2023", status: "Paid" },
  { id: 2, title: "Water Bill", amount: "$45.50", date: "Sep 28, 2023", status: "Paid" },
  { id: 3, title: "Event Fund", amount: "$20.00", date: "Sep 15, 2023", status: "Paid" },
];

export const notifications = [
  { id: 1, title: "Pool Maintenance", message: "Pool closed for cleaning tomorrow.", date: "2 hours ago", urgent: false },
  { id: 2, title: "Fire Drill", message: "Scheduled fire drill at 10 AM on Sunday.", date: "1 day ago", urgent: true },
  { id: 3, title: "Package Arrived", message: "Package at front desk for Unit 304.", date: "2 days ago", urgent: false },
];

export const records = [
  { id: 1, activity: "Gym Access", time: "06:00 AM", date: "Today" },
  { id: 2, activity: "Main Gate Entry", time: "05:45 PM", date: "Yesterday" },
  { id: 3, activity: "Clubhouse Booking", time: "02:00 PM", date: "Oct 01" },
];

export const profile = {
  unit: "304",
  block: "A",
  vehicle: "KA-01-AB-1234",
  members: ["John Doe", "Jane Doe", "Baby Doe"],
  intercom: "1304"
};
