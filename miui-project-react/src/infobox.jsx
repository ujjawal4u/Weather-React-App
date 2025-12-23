import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
     import WhatshotIcon from '@mui/icons-material/Whatshot';
     import WbSunnyIcon from '@mui/icons-material/WbSunny';
     import OpacityIcon from '@mui/icons-material/Opacity';

// 1. Accept 'info' as a prop here
export default function InfoBox({ info }) {
    
    // 2. DELETE the hardcoded 'let info = { ... }' block that was here
    const COLD_IMG = "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=60&auto=format&fit=crop";
    const HOT_IMG = "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=800&q=60&auto=format&fit=crop";
    const HUMID_IMG = "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=60&auto=format&fit=crop";
    const RAIN_IMG = "https://images.unsplash.com/photo-1527766833261-b09c3163a791?w=800&q=60&auto=format&fit=crop";
    const DEFAULT_IMG = "https://images.unsplash.com/photo-1503264116251-35a269479413?w=800&q=60&auto=format&fit=crop";

    const isHighHumidity = info.humidity > 80;
    const isCold = info.temperature < 5;
    const isHot = info.temperature > 27;
    const desc = (info.description || '').toLowerCase();

    // Determine priority: when both temp and humidity match, prefer temp if temp < 5, otherwise prefer humidity
    let priority; // 'cold' | 'hot' | 'humidity' | 'rain' | 'mild'
    if (isHighHumidity && (isCold || isHot)) {
      priority = isCold ? 'cold' : 'humidity';
    } else if (isCold) {
      priority = 'cold';
    } else if (isHot) {
      priority = 'hot';
    } else if (isHighHumidity) {
      priority = 'humidity';
    } else if (desc.includes('rain') || desc.includes('drizzle') || desc.includes('fog')) {
      priority = 'rain';
    } else {
      priority = 'mild';
    }

    const imageMap = {
      cold: COLD_IMG,
      hot: HOT_IMG,
      humidity: HUMID_IMG,
      rain: RAIN_IMG,
      mild: DEFAULT_IMG
    };

    const iconMap = {
      cold: <span><AcUnitIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> Cold</span>,
      hot: <span><WhatshotIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> Hot</span>,
      humidity: <span><OpacityIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> High Humidity</span>,
      rain: <span><OpacityIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> Rainy</span>,
      mild: <span><WbSunnyIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> Mild</span>
    };

    const status = iconMap[priority];
    const selectedImage = imageMap[priority];

    return (
      <div className='info-box'>
        <div className='card-Container'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={selectedImage}
              title="Weather Image"
            />
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city} — {status}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                <p>Temperature: {info.temperature} °C</p>
                <p>Description: {info.description}</p>
                <p>Feels Like: {info.feelslike} °C</p>
                <p>Humidity: {info.humidity} %</p>
                <p>Min Temp: {info.temperature_min} °C</p>
                <p>Max Temp: {info.temperature_max} °C</p>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    );
}