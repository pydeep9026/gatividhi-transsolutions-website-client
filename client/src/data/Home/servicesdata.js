import commercialmoving from '../../assets/images/commercialmoving.png';
import domesticmoving from '../../assets/images/domesticmoving.png';
import officemoving from '../../assets/images/officemoving.png';
import fragilegoods from '../../assets/images/fragilegoods.png';
import customizedservices from '../../assets/images/customizedservices.png';
import trainedlabour from '../../assets/images/trainedlabour.png';
import timelydelivery from '../../assets/images/timelydelivery.png';
import widerange from '../../assets/images/widerange.png';
import securepkg from '../../assets/images/securepkg.png';


const Servicesdata = [
    {
      title: 'Commercial Moving',
      image: commercialmoving,
      description: 'Our commercial moving service is designed to help businesses relocate efficiently and minimize downtime. We have a team of experienced movers who handle all aspects of the move, from packing and transportation to unloading and unpacking. We understand the unique requirements of commercial moves and work closely with our clients to ensure a smooth transition.',
      features: [
        {
          image: fragilegoods,
          description: 'Specialized packing materials for fragile items'
        },
        {
          image:customizedservices,
          description: 'Efficient loading and unloading of commercial goods'
        },
        {
          image: trainedlabour,
          description: 'Experienced team trained in handling office equipment'
        },
        {
          image: timelydelivery
          ,
          description: 'Timely and secure transportation'
        }
      ]
    },
    {
      title: 'Domestic Moving(coming soon)',
      image: domesticmoving,
      description: 'When it comes to domestic moving, we offer comprehensive solutions to make your move stress-free. Our team of professional movers will assist you in packing your belongings, safely transporting them to your new home, and helping with the unpacking process. Whether you are moving locally or across the country, we have the expertise and resources to handle your domestic move with care and efficiency.',
      features: [
        {
          image: widerange,
          description: 'Wide range of packing supplies available'
        },
        {
          image: fragilegoods,
          description: 'Expertise in handling delicate furniture and valuables'
        },
        {
          image: timelydelivery,
          description: 'Flexible scheduling to suit your needs'
        },
        {
          image: timelydelivery,
          description: 'Timely and reliable delivery'
        }
      ]
    },
    {
      title: 'Office Moving(coming soon)',
      image: officemoving,
      description: 'Relocating your office requires careful planning and execution. Our office moving service is designed to minimize disruptions to your business operations. We handle everything from packing office equipment and furniture to safely transporting and setting up your new office space. Our team is trained to handle office moves of all sizes, ensuring a seamless transition so you can get back to business quickly.',
      features: [
        {
          image: customizedservices,
          description: 'Customized plans to meet your specific requirements'
        },
        {
          image: securepkg,
          description: 'Secure handling of sensitive equipment and documents'
        },
        {
          image: trainedlabour,
          description: 'IT equipment relocation expertise'
        },
        {
          image: timelydelivery,
          description: 'Minimized downtime and business disruption'
        }
      ]
    },
    // Add more service data as needed
  ];
  
  export default Servicesdata;
  