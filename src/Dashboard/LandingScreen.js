
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Card, Input } from 'antd'; 
import "./LandingScreen.css";

const { Search } = Input;
const { Meta } = Card;
const { Header, Content, Footer } = Layout;

const items = (navigate) => [
  { key: '0', label: 'Buyer', onClick: () => navigate('/buy') },
  { key: '1', label: 'Seller', onClick: () => navigate('/sell') },
  { key: '2', label: 'Find Any Agent', onClick: () => navigate('/find-any-agent') },
  { key: '3', label: 'Manage Rentals', onClick: () => navigate('/manage-rentals') },
  { key: '4', label: 'Help', onClick: () => navigate('/help') },
  { key: '5', label: 'Sign In', onClick: () => navigate('/sign-in') },
];
const defaultImages = [
    {url: "https://img.staticmb.com/mbimages/project/Photo_h310_w462/2020/05/15/Project-Photo-8-Godrej-South-Estate-New-Delhi-5125235_500_1000_310_462.jpg",
        city:"Bhogapuram", 
        area: "1200 sqft",
        price: "$200,000",
        Description: "2 BHK, 2 Bathrooms, Near Park",
        keyFactors: "3 BHK, 3 Bathrooms, Near School",
        id:'1'
    },
    {url: "https://cdn.staticmb.com/magicservicestatic/images/mb-home-web/collection/buy/webp/new-projects.webp",
        city:"Bhogapuram", 
        area: "1200 sqft",
        price: "$200,000",
        Description: "2 BHK, 2 Bathrooms, Near Park",
        keyFactors: "3 BHK, 3 Bathrooms, Near School",
        id:'2'

    },
    {url: "https://newprojects.99acres.com/projects/sv_constructions_hyderabad/sv_emrald_height/images/ojcyzeb_1709882830_478390556_optOrig.jpg",
        city:"Bhogapuram",  
        area: "1200 sqft",
        price: "$200,000",
        Description: "2 BHK, 2 Bathrooms, Near Park",
        keyFactors: "3 BHK, 3 Bathrooms, Near School",
        id:'3'

    },
    {url: "https://ap.rdcpix.com/fb5fcfa8708984f5545c2805f4fa159bl-m2030875084rd-w960_h720.webp",
        city:"vizag", 
        area: "1200 sqft",
        price: "$200,000",
        Description: "2 BHK, 2 Bathrooms, Near Park",
        keyFactors: "3 BHK, 3 Bathrooms, Near School",
        id:'4'

    },
    {url: "https://ap.rdcpix.com/7e0ac9ef76a7bb7906bfc8697368015bl-m455458801rd-w960_h720.webp",
        city:"vizianagaram", 
        area: "1200 sqft",
        price: "$200,000",
        Description: "2 BHK, 2 Bathrooms, Near Park",
        keyFactors: "3 BHK, 3 Bathrooms, Near School",
        id:'5'

    },
    {url: "https://img.staticmb.com/mbimages/project/Photo_h310_w462/2022/09/26/Project-Photo-15-Godrej-South-Estate-New-Delhi-5125235_600_800_310_462.jpg",
        city:"vizag", 
        area: "1200 sqft",
        price: "$200,000",
        Description: "2 BHK, 2 Bathrooms, Near Park",
        keyFactors: "3 BHK, 3 Bathrooms, Near School",
        id:'6'

    },
    {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQPA7gJBXUrnDdp1WeJvW6ngiMuEcQpLQDbw&s", 
        city:"vizag", 
        area: "1200 sqft",
        price: "$200,000",
        Description: "2 BHK, 2 Bathrooms, Near Park",
        keyFactors: "3 BHK, 3 Bathrooms, Near School"},
     { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7_o0mdQkdZEunigCqxSN6HwFUP5YzU6hXg&s",
        city:"Srikakulam", 
        area: "1200 sqft",
        price: "$200,000",
        Description: "2 BHK, 2 Bathrooms, Near Park",
        keyFactors: "3 BHK, 3 Bathrooms, Near School"
     },
     {  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEn9ZZ6RBcWef8YkTI1wi91J49kSiid7yQ&s",
        city:"vizianagaram", 
        area: "1200 sqft",
        price: "$200,000",
        Description: "2 BHK, 2 Bathrooms, Near Park",
        keyFactors: "3 BHK, 3 Bathrooms, Near School"
     },
    {   url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABq2_McSKCUHICcyUAgMjZqEUJlRpZ3pbgg&s",
        city:"Srikakulam", 
        area: "1200 sqft",
        price: "$200,000",
        Description: "2 BHK, 2 Bathrooms, Near Park",
        keyFactors: "3 BHK, 3 Bathrooms, Near School"
    },
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9ljtrWC5On1K7yTDCl5WnVA_zWVaTqzwqw&s",
        city:"Srikakulam", 
        area: "1200 sqft",
        price: "$200,000",
        Description: "2 BHK, 2 Bathrooms, Near Park",
        keyFactors: "3 BHK, 3 Bathrooms, Near School"
    } ,    
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVwBRxE__TSTxz6i8UI_SQWkaW6fLX0noVw&s",
        city:"vizianagaram", 
        area: "1200 sqft",
        price: "$200,000",
        Description: "2 BHK, 2 Bathrooms, Near Park",
        keyFactors: "3 BHK, 3 Bathrooms, Near School"
    } 
];

const LandingScreen = () => {
    const navigate = useNavigate();
    const [filteredImages, setFilteredImages] = useState(defaultImages.map(item => item.url));
    const [dumyData,setFilterData]=useState([])
    const [imageDetails, setImageDetails] = useState([]);

    const handleSearch = (value) => {
        
        const lowercasedValue = value.toLowerCase();
        console.log(lowercasedValue,'lowercase')
        const filteredData = dumyData.filter((item) => 
            item.city.toLowerCase().includes(lowercasedValue)
        );
        setImageDetails(filteredData)
        
       

        
    };
    useEffect(()=>{
        setFilterData(defaultImages)
        setImageDetails(defaultImages)
        fethData();
    },[])
    const fethData =()=>{
        console.log(dumyData,'dumydata');
        
    }
    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 24px',
                    position: 'fixed',
                    width: '100%',
                    top: 0,
                    left: 0,
                    zIndex: 1000,
                    height: '64px',
                    theme: "dark"
                }}
            > 
            <div style={{color: 'white', fontWeight: 'bold'}}>Real Estate Management System</div>
                <div className="demo-logo content-right" />
                <Menu 
                    theme="dark"
                    mode="horizontal"
                    items={items(navigate)}
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        border: 'none',
                        color :'#fff'
                    }}
                />
            </Header>
            
            <Content 
                style={{
                    padding: '0 24px',
                    marginTop: '64px', // Space for fixed header
                }}
            >
                <div className="background">
                    <Search
                        placeholder="Search with City"
                        allowClear
                        enterButton="Search"
                        size="large"
                        className='landingSearch'
                        onSearch={handleSearch}  // Call the search function
                    />
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap',
                    gap: '12px',
                    padding: '16px'
                }}
            >
            
        



{imageDetails.map((item) => (

          <Card
            key={item.id}
            hoverable
            style={{
              width: "30%",
              marginBottom: '16px'
            }}
            cover={<img alt={item.city} src={item.url} style={{ height: "30vh", objectFit: 'cover' }} />}
          >
            <Meta
              title={item.city}
              description={
                <div>
                  <p><strong>Area:</strong> {item.area}</p>
                  <p><strong>Price:</strong> {item.price}</p>
                  <p><strong>Description:</strong> {item.Description}</p>
                  <p><strong>Key Factors:</strong> {item.keyFactors}</p>
                </div>
              }
            />
          </Card>




        ))}
 <div style={{ textAlign: 'center', marginTop: '20px' }}>
        @ 2024 Your Company. All Rights Reserved.
        </div>
            </Footer>
        </Layout>
    );
};

export default LandingScreen;

