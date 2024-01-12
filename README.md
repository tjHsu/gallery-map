# Gallery Map

If you want to start a gallery map website for your local community, this is all you need. [taipeigallerymap.com](https://taipeigallerymap.com) is a sample of this open-source art gallery guide with map functionality. 

## Deployment

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`. To deploy this project, our suggestion is [Vercel](https://vercel.com/dashboard).

## Step-by-step Guide

If you want to start your own gallery map, try the following.

1. Fill in the galleries' detail according to the format in the Configuration of this README.
2. Find your favourite [map tile provider](https://leaflet-extras.github.io/leaflet-providers/preview/), and replace it in the Map component. 
3. Deploy the github project to Vercel, [here](https://vercel.com/docs/deployments/git/vercel-for-github) is the guide.

If you have any issue, we are here to help.

## Sample

Visit [taipeigallerymap.com](https://taipeigallerymap.com), if self-hosting is too much hassle.

## Status

This project

- [x] [Alpha](https://newpa.io): The project has been launched, and iterated with a set of users.
- [x] [Beta](https://newpa.io): Finalise the features and details based on the feedbacks.
- [x] Public: Stable and reliable tool fits daily routine usage.

## Development

### Install

```bash
npm install
```

### Configuration

An example entry can be found below:
```
  {
    name: "gallery John Doe", // name of the gallery
    englishName: "gallery John Doe", // english name of the gallery
    originalName: "", // name of the gallery in local language
    urlName: "gallery-john-doe", // url path showing in the browser address bar
    website: "www.john-doe.example.com", // website of the gallery
    isSeparator: false, // set it to true if this is an index separator.
    exhibitions: [
      {
      artist: "A.P Jan",
      showName: "Sampel Show",
      date: "2024.01.06 - 2024.02.23",
      openingDate: "2024.01.06 sat 14:00-17:00"
    }
    ], //
    locations: [{
      locationName: "Gallery John Doe on 42", // required, if one gallery have multiple locations
      address: "42th street 165",
      position: [25.0624247,121.5788935], // GPS coordinates
      gMapLink: "", // map link to let user navigate.
      openingHours: "tue-sat 11:00-19:00"
    }]
  }
```

### Run

```bash
npm run dev
```

