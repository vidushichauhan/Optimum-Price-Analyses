import { Component, AfterViewInit, ViewChild, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements AfterViewInit {
  @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;

  productName: string = '';
  selectedCategory: string = '';
  categories: string[] = [
    'Industrial Scientific', 'Motorcycle Accessories Parts',
    'Automotive Tires Wheels', 'Dishwashing Supplies', 'Arts Crafts Supplies',
    "Men's Shoes", "Women's Shoes", 'Fresh Flowers Indoor Plants',
    'Pogo Sticks Hopping Toys', 'Swimming Pool Outdoor Water Toys',
    'Material Transport Equipment', 'Flashlights', 'Nails, Screws Fasteners',
    'Audio/Video Receivers Amplifiers', 'Digital Media Devices',
    'Data Storage', 'Perfume Cologne', 'Play Sets Playground Equipment',
    'Sandboxes Beach Toys', 'Building Supplies', 'Ladders',
    'Scaffolding Equipment', 'Hardware', 'Door Hardware Locks',
    'Furniture Hardware', 'Gate Hardware', 'Mailboxes Accessories',
    'Locks Hasps', 'Televisions Video', 'TV Accessories',
    'Satellite Television Equipment', 'Televisions', 'Hand Tools', 'Beauty',
    'Bath Body', 'Salon Spa Equipment', 'Shaving Hair Removal Products',
    'Skin Care Products', 'Tattooing Supplies', 'Beauty Tools Accessories',
    'Computer Components', 'Baby Toddler Toys', 'Kites Wind Spinners',
    'Job Site Lighting', 'Bathroom Hardware', 'Hardware Hooks',
    'Window Hardware', 'Home Theatre Systems', 'Electronics', 'Makeup',
    'Cutting Tools', "Women's Accessories", 'Outdoor Décor',
    'Kitchen Utensils Gadgets', 'Tableware', 'Household Cleaning Tools',
    'Household Cleaning', 'Laundry Supplies', 'Bedding',
    'Automotive Tools Equipment', 'Building Construction Toys',
    'Handmade Jewellery', 'RV Parts Accessories', 'Girls',
    'Luggage Travel Gear', 'Handmade Home Décor', 'Office Products',
    'International Food Market', 'Occupational Health Safety Products',
    'Pet Supplies', 'Home Storage Organization', 'Printers', 'Game Hardware',
    'Patio, Lawn Garden', 'Coffee, Tea Espresso',
    'Kitchen Storage Organization', 'Water Coolers, Filters Cartridges',
    'Boys', 'Cycling Equipment', 'Awards', 'Snow Ice Sports',
    'Janitorial Sanitation Supplies', 'Industrial Materials',
    'Automotive Care', 'Outdoor Power Lawn Equipment',
    'Outdoor Storage Housing', 'Pools, Hot Tubs Supplies', 'Home Kitchen',
    'Irons, Steamers Accessories', 'Baby Child Care Products',
    'Vision Care Products', 'Golf Equipment',
    'Laptop Netbook Computer Accessories', 'Printer Accessories',
    'Car Electronics Accessories', 'Weather Thermometers',
    'Handmade Toys Games', 'Handmade Kitchen Dining', "Men's Jewelry",
    "Women's Handbags", 'Outdoor Cooking', 'Automotive', 'Oils Fluids',
    'Handmade Clothing, Shoes Accessories', 'Dolls Accessories',
    'Sports Outdoors', "Men's Watches", "Women's Watches",
    'Farming Urban Agriculture', 'Outdoor Lighting Products', 'Men',
    'Shoe, Jewelry Watch Accessories', 'Sporting Apparel',
    'Martial Arts Combat Sports', 'Breakfast Cereal', '3D Printing Scanning',
    'Food Service Equipment Supplies', 'Cigarette Lighters',
    'Paper Plastic Household Supplies', 'Bath Products',
    'Sex Sensuality Products', 'Oral Hygiene Products', 'Hair Care',
    'Indoor Insect Pest Control', 'Sewing, Craft Hobby', 'Home Décor',
    'Household Supplies', 'Nail Polish Nail Decoration Products',
    'Home Portable Audio', 'Dog Supplies', 'Baby', 'Clothing, Shoes Jewellery',
    "Kids' Play Tents Tunnels", "Kids' Slumber Bags", 'Toy Sports Equipment',
    'Hardware Adhesives Sealers', 'Garage Door Hardware',
    'Shelf Brackets Supports', 'Blu-ray Players Recorders',
    'DVD Players Recorders', 'Luxury Beauty', 'Automotive Replacement Parts',
    'Women', 'Power Transmission Products', 'Sport Specific Clothing',
    'Outdoor Gear', 'Hunting Fishing', 'Outdoor Recreation Apparel Equipment',
    'Leisure Sports Game Room', 'Team Sports', 'Grocery',
    'Test, Measure Inspect', 'Commerical Door Products', 'Filtration',
    'Industrial Hardware', 'Material Handling', 'Power Hand Tools',
    'Tools Home Improvement', 'Automotive Exterior Accessories',
    'Automotive Interior Accessories', 'Handmade Beauty Grooming Products',
    'Toys Games', 'Stuffed Plush Animals', 'Collectible Toys',
    'Bikes, Scooters Ride-Ons', 'Action Figures, Maquettes Busts',
    "Men's Accessories", 'Bakeware', "Women's Jewelry", 'Home Audio Speakers',
    'Exercise Fitness Equipment', 'Handmade Baby Products',
    'Games Accessories', 'Power Tools Hand Tools', 'Furniture',
    'Handmade Artwork', 'Handmade Bedding', 'Networking Products',
    'Computer Monitors', 'Camping Hiking Equipment', 'Smart Home',
    'Handmade in Canada', 'Child Safety Car Seats', 'Lab Scientific Products',
    'Baby Strollers', 'Electrical Equipment', 'Patio Furniture Accessories',
    'Kitchen Cookware', 'Kitchen Dining', 'Diet Nutrition Products',
    "Women's Health Family Planning", 'Computer Audio Video Accessories',
    'USB Hubs', 'Outdoor Play Toys', 'Uniforms, Work Safety',
    'Boating Watersports', 'Electronics Gadgets',
    'Abrasive Finishing Products', 'Hydraulics, Pneumatics Plumbing',
    'Professional Medical Supplies', 'Novelty Special Use Clothing',
    'Sports Fan Shop', 'Action Sports', 'Fasteners',
    'Science Education Supplies', 'Pest Control',
    'Kitchen Knives Cutlery Accessories', 'Heating Cooling Air Quality',
    'Large Appliances', 'Health Care Products', 'Memory Cards',
    'Computer Monitor Accessories', 'Toy Gardening Equipment',
    'Garden Structures Germination Equipment', 'Outdoor Heating Cooling',
    'Barware', 'Small Appliances', 'Home Textiles', 'Vacuums Floor Care',
    'Wellness', 'Computer Accessories', 'USB Gadgets', 'Tablet Accessories',
    "Children's Outdoor Inflatable Bouncers Bouncy Castles",
    'Paint, Body Trim Products', 'Handmade Stationery Party Supplies',
    'Toy Vehicles', "Men's Clothing", "Women's Clothing", 'Backyard Birding',
    'Building Materials', 'Cabinet Hardware', 'House Numbers, Plaques Signs',
    'Tarps Tie-Downs', 'Television Projectors', 'Cat Supplies',
    'Musical Instruments, Stage Studio', 'Nursery Furniture, Bedding Décor',
    'Kitchen Bath Fixtures', 'Laptop Computers', 'Camera Photo', 'STEM',
    'Vehicle Electronics', 'Desktop Computers', 'Hobbies', 'Household Batteries',
    'Plants Seeds Bulbs', 'Home Brewing Wine Making',
    'Air Freshener Supplies', 'Artwork', 'Handmade Furniture',
    'Health Personal Care', 'Medical Supplies Equipment',
    'Stationery Party Supplies', 'Vitamins, Minerals Supplements',
    'Computer Cable Adapters', 'Computer Security Cables',
    'Computer Hard Drive Accessories', 'Keyboards, Mice Input Devices',
    'Computer Uninterrupted Power Supply', 'Memory Card Accessories',
    'Cables Accessories', "Kids' Ball Pits Accessories", 'Beanbag Foot Bags',
    'Toy Foam Blasters Guns', 'Bubble Blowing Products'
];


  private lottie: any;

  constructor(
    private sharedService: SharedService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  onProductNameChange() {
    this.sharedService.setData('title', this.productName);
  }

  onCategoryChange() {
    this.sharedService.setData('categoryName', this.selectedCategory);
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      import('lottie-web').then(lottie => {
        this.lottie = lottie.default;
        this.lottie.loadAnimation({
          container: this.lottieContainer.nativeElement,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: 'assets/productAnimation.json' // Adjust the path to where you have stored the animation JSON file
        });
      });
    }
  }
}
