const cities = [
  {
    "id": 1,
    "name": "city1",
    "latitude": 52.52,
    "longitude": 13.419,
    "hourly": {
      "time": ["2022-07-01T00:00", "2022-07-01T01:00", "2022-07-01T02:00"],
      "temperature_2m": [13, 12.7, 12.7, 12.5, 12.5, 12.8, 13, 12.9, 13.3]
    },
    "hourly_units": {
      "temperature_2m": "°C"
    },
    "current_weather": {
      "time": "2022-07-01T09:00",
      "temperature": 10,
      "weathercode": 3,
      "windspeed": 10.3,
      "winddirection": 262
    },
    "photo": "https://img5.socratify.net/0c51d045dcf13fab2d_600x375.jpg"
  },
  {
    "id": 1,
    "name": "city2",
    "latitude": 37.65,
    "longitude": 62.17,
    "hourly": {
      "time": ["2022-07-01T00:00", "2022-07-01T01:00", "2022-07-01T02:00"],
      "temperature_2m": [13, 12.7, 12.7, 12.5, 12.5, 12.8, 13, 12.9, 13.3]
    },
    "hourly_units": {
      "temperature_2m": "°C"
    },
    "current_weather": {
      "time": "2022-07-01T09:00",
      "temperature": 30,
      "weathercode": 45,
      "windspeed": 30,
      "winddirection": 175
    },
    "photo": "https://img5.socratify.net/0c51d045dcf13fab2d_600x375.jpg"
  },
  {
    "timezone":	"Europe/Moscow",
    "hourly_units": {
      "temperature_2m": "°C"
    },
    "hourly": {
      "time": ["0", "0", "0"],
      "temperature_2m": [0, 0, 0]
    },
    "daily": {
      "time": ['2022-07-01T09:00'],
      "temperature_2m_max": [0],
      "temperature_2m_min": [0],
      "weathercode": [0],
      "windspeed_10m_max": [0],
      "windgusts_10m_max": [0],
      "winddirection_10m_dominant": [0],
      "precipitation_hours": [0],
    }
  }
]

export default cities;
