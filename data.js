const dataset = [
    {
        id: "Goa Wagha Beach",
        images: [
            "https://www.tripsavvy.com/thmb/OrVflvJk5fXQJsw5u1UJFxIcXQI=/2122x1413/filters:fill(auto,1)/GettyImages-dv1170129-5b2978f3ff1b78003721993b.jpg",
            "https://static.toiimg.com/thumb/msid-59486326,width=1200,height=900/59486326.jpg",
            "https://www.tripsavvy.com/thmb/pSvX01E-etJSN9QBnZtNf0HhTgk=/2090x1435/filters:fill(auto,1)/GettyImages-903398436-5c612e4a46e0fb00017dd31f.jpg",
            "https://www.caribjournal.com/wp-content/uploads/2024/02/beach-in-puerto-vallarta.jpg",
            "https://th.bing.com/th/id/OIP.FRdnwt4NPI2cx2hfLEM3ZgHaFj?w=1024&h=768&rs=1&pid=ImgDetMain",
            "https://cf.bstatic.com/xdata/images/hotel/max500/249314342.jpg?k=d81e9ac905c85814a8c0e186a81d534411f2dfe187ea5b20bceb7b8ee4071865&o=&hp=1"
        ],
        whether: [
            { Today: "30c" },
            { 1: "31c", wind_speed: "high", is_suitable: true, reason: "" },
            { 2: "40c", wind_speed: "high", is_suitable: false, reason: "Due To High Temperature" },
            { 3: "20c", wind_speed: "high", is_suitable: false, reason: "Due To High Rain" },
            { 4: "35c", wind_speed: "high", is_suitable: true, reason: "" }
        ],
    },
    {
        id: "Anjuna Beach",
        images: [
            "https://www.adotrip.com/public/images/areas/master_images/60d98ac53e7c9-Anjuna_Beach_Goa_History_Major_Attractions_&_How_To_Reach.jpg",
            "https://pixahive.com/wp-content/uploads/2020/09/Beauty-of-Anjuna-Beach-in-Goa-95521-pixahive.jpg",
            "https://www.thegoavilla.com/pic/instagram/BU4DyBOFX6B.jpg",
            "https://th.bing.com/th/id/R.b8be3345fa756d06d9a5d17f87eba290?rik=sF5mvp32Wt0Sig&riu=http%3a%2f%2fwww.global-gallivanting.com%2fwp-content%2fuploads%2f2015%2f02%2fanjuna-beach-1024x786.jpg&ehk=4X7GUrSIFUpUdjXLepwPvHhdxwqEPVMOWlf3dvo53Cs%3d&risl=&pid=ImgRaw&r=0",
            "https://media.tripinvites.com/places/goa/anjuna-beach/anjuna-beach-view-featured.jpg",
            "https://i.pinimg.com/originals/95/18/a2/9518a242d26c8d4d196c62d0251c6ddc.jpg"
        ],
        whether: [
            { Today: "28c" },
            { 1: "29c", wind_speed: "moderate", is_suitable: true, reason: "" },
            { 2: "35c", wind_speed: "high", is_suitable: false, reason: "Too Hot" },
            { 3: "25c", wind_speed: "moderate", is_suitable: true, reason: "" },
            { 4: "32c", wind_speed: "high", is_suitable: false, reason: "High Winds" }
        ],
    },
    {
        id: "Baga Beach",
        images: [
            "https://www.holidify.com/images/compressed/495.jpg",
            "https://www.tripsavvy.com/thmb/f1kSwhIhN3C-6nLqOYsduBxNDOg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/BagaBeachJetSki-5b22970d46e0fb005b8b88c0.jpg",
            "https://www.holidify.com/images/compressed/1287.jpg",
            "https://www.tripsavvy.com/thmb/hu7u1z4Bz-4D0O89ddc8GZyQuTg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/BagaBeachWalkway-5b22973ac5542e0036fa2a7b.jpg",
            "https://www.tripsavvy.com/thmb/tg0msDPOprcXMXTzYjHeDgbABtc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/BagaBeachParty-5b22971a46e0fb005b8b88c2.jpg",
            "https://www.holidify.com/images/cmsuploads/compressed/Baga-Beach-Goa-7_20190129200931.jpg",
        ],
        whether: [
            { Today: "32c" },
            { 1: "33c", wind_speed: "low", is_suitable: true, reason: "" },
            { 2: "38c", wind_speed: "moderate", is_suitable: false, reason: "Too Hot" },
            { 3: "28c", wind_speed: "low", is_suitable: true, reason: "" },
            { 4: "35c", wind_speed: "moderate", is_suitable: false, reason: "High Winds" }
        ],
    },
    {
        id: "Calangute Beach",
        images: [
            "https://www.tripsavvy.com/thmb/Kz49C3c4FykPqujNCJZXb9aLmbA=/2122x1413/filters:no_upscale():max_bytes(150000):strip_icc()/CalanguteBeach-5b22963ac5542e0036fa2a6b.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/7/71/Calangute_beach_in_North_Goa.JPG",
            "https://www.holidify.com/images/cmsuploads/compressed/Calangute_Beach_Goa_20190207172719.jpg",
            "https://www.tripsavvy.com/thmb/mzFEowSgfy4UJZwoWa8MD8y4bTE=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/CalanguteBeachChairs-5b229656c5542e0036fa2a6f.jpg",
            "https://www.holidify.com/images/cmsuploads/compressed/2018/10/Calangute-Beach-2_20181029180043.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Calangute_Beach_in_Goa.jpg/1024px-Calangute_Beach_in_Goa.jpg"
        ],
        whether: [
            { Today: "30c" },
            { 1: "31c", wind_speed: "moderate", is_suitable: true, reason: "" },
            { 2: "40c", wind_speed: "high", is_suitable: false, reason: "Too Hot" },
            { 3: "27c", wind_speed: "low", is_suitable: true, reason: "" },
            { 4: "36c", wind_speed: "high", is_suitable: false, reason: "High Winds" }
        ],
    },
    {
        id: "Vagator Beach",
        images: [
            "https://www.tripsavvy.com/thmb/OwHbHEmufGSzN5kMFBe8lzO4f94=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/VagatorBeachHuts-5b22976a46e0fb005b8b88c4.jpg",
            "https://www.holidify.com/images/compressed/2019/08/Vagator-Beach_20190826165932.jpg",
            "https://www.tripsavvy.com/thmb/jfIBvuDWUxtKiVeAzp5OrO2PnI8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/VagatorBeachChairs-5b22974ac5542e0036fa2a7f.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Vagator_Beach_Goa.jpg/1200px-Vagator_Beach_Goa.jpg",
            "https://www.tripsavvy.com/thmb/KKDthOfzWylS03HlYkPvDNnP42U=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/VagatorBeachSunset-5b22976946e0fb005b8b88c3.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Vagator_Beach_in_Goa.jpg/1920px-Vagator_Beach_in_Goa.jpg"
        ],
        whether: [
            { Today: "29c" },
            { 1: "30c", wind_speed: "low", is_suitable: true, reason: "" },
            { 2: "38c", wind_speed: "high", is_suitable: false, reason: "Too Hot" },
            { 3: "25c", wind_speed: "moderate", is_suitable: true, reason: "" },
            { 4: "34c", wind_speed: "high", is_suitable: false, reason: "High Winds" }
        ],
    },
    {
        id: "Palolem Beach",
        images: [
            "https://www.tripsavvy.com/thmb/nlEqbRVc0vJFncmRQHXdi9BSsOg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/PalolemBeach-5b229680c5542e0036fa2a71.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Palolem_Beach_Goa.jpg/1200px-Palolem_Beach_Goa.jpg",
            "https://www.tripsavvy.com/thmb/GLM5P3zx7XY7q8Dws5uLBo7IvRk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/PalolemBeachFishing-5b22969346e0fb005b8b88c6.jpg",
            "https://www.tripsavvy.com/thmb/9fdBuWXAsEY5FQNe5FvJ2gl1i_k=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/PalolemBeachWalkway-5b22969f46e0fb005b8b88c7.jpg",
            "https://www.holidify.com/images/compressed/1597.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Palolem_Beach_at_Sunset.jpg/1024px-Palolem_Beach_at_Sunset.jpg"
        ],
        whether: [
            { Today: "28c" },
            { 1: "29c", wind_speed: "low", is_suitable: true, reason: "" },
            { 2: "36c", wind_speed: "high", is_suitable: false, reason: "Too Hot" },
            { 3: "26c", wind_speed: "moderate", is_suitable: true, reason: "" },
            { 4: "32c", wind_speed: "high", is_suitable: false, reason: "High Winds" }
        ],
    },
    {
        id: "Candolim Beach",
        images: [
            "https://www.tripsavvy.com/thmb/OtKkXaVSH4BQBMEXIAsmt0aZWfI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/CandolimBeachView-5b229638c5542e0036fa2a69.jpg",
            "https://www.holidify.com/images/compressed/1801.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Candolim_Beach.jpg/1200px-Candolim_Beach.jpg",
            "https://www.tripsavvy.com/thmb/3G-s8zzK9vAXE0o12KHNZfFJDbw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/CandolimBeachPalmTree-5b22963ac5542e0036fa2a6d.jpg",
            "https://www.holidify.com/images/cmsuploads/compressed/1798.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Candolim_Beach_Goa.jpg/1920px-Candolim_Beach_Goa.jpg"
        ],
        whether: [
            { Today: "31c" },
            { 1: "32c", wind_speed: "low", is_suitable: true, reason: "" },
            { 2: "39c", wind_speed: "high", is_suitable: false, reason: "Too Hot" },
            { 3: "27c", wind_speed: "moderate", is_suitable: true, reason: "" },
            { 4: "35c", wind_speed: "high", is_suitable: false, reason: "High Winds" }
        ],
    },
    {
        id: "Colva Beach",
        images: [
            "https://www.tripsavvy.com/thmb/xFxM2kBTMSkDZedr3YvRBzjOPIQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/ColvaBeachSunset-5b229646c5542e0036fa2a6f.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Colva_beach_goa.jpg/1200px-Colva_beach_goa.jpg",
            "https://www.tripsavvy.com/thmb/NtGNB35XNrBAlqgBJKTlgIaymZg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/ColvaBeachFishingBoats-5b22966346e0fb005b8b88bc.jpg",
            "https://www.holidify.com/images/compressed/1804.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Colva_Beach.jpg/1024px-Colva_Beach.jpg",
            "https://www.tripsavvy.com/thmb/ZbMnpgrRZC6U_j5gTR3Z9pbNi2A=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/ColvaBeach-5b229657c5542e0036fa2a71.jpg"
        ],
        whether: [
            { Today: "30c" },
            { 1: "31c", wind_speed: "low", is_suitable: true, reason: "" },
            { 2: "37c", wind_speed: "moderate", is_suitable: false, reason: "Too Hot" },
            { 3: "26c", wind_speed: "low", is_suitable: true, reason: "" },
            { 4: "33c", wind_speed: "high", is_suitable: false, reason: "High Winds" }
        ],
    },
    {
        id: "Dona Paula Beach",
        images: [
            "https://www.tripsavvy.com/thmb/C-GIxGyODj4NEbEvEdmeNFjTR_k=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/DonaPaulaJetty-5b22965f46e0fb005b8b88b4.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Dona_Paula_Beach_View.jpg/1200px-Dona_Paula_Beach_View.jpg",
            "https://www.tripsavvy.com/thmb/PADj6LK4xfK7f_d4ZSYktsKihfM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/DonaPaulaBeach-5b22964f46e0fb005b8b88b2.jpg",
            "https://www.holidify.com/images/compressed/1736.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Dona_Paula_Goa.jpg/1920px-Dona_Paula_Goa.jpg",
            "https://www.tripsavvy.com/thmb/d9Db27PtK-ZgM17yAFMXI8k4xzU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/DonaPaulaJettyGoa-5b22966546e0fb005b8b88b6.jpg"
        ],
        whether: [
            { Today: "29c" },
            { 1: "30c", wind_speed: "moderate", is_suitable: true, reason: "" },
            { 2: "38c", wind_speed: "high", is_suitable: false, reason: "Too Hot" },
            { 3: "25c", wind_speed: "low", is_suitable: true, reason: "" },
            { 4: "34c", wind_speed: "high", is_suitable: false, reason: "High Winds" }
        ],
    },
    {
        id: "Miramar Beach",
        images: [
            "https://www.tripsavvy.com/thmb/djTxZC1oMEpoopW4lsDi5cNcew0=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/MiramarBeachView-5b2296a1c5542e0036fa2a73.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Miramar_Beach_Goa.jpg/1200px-Miramar_Beach_Goa.jpg",
            "https://www.tripsavvy.com/thmb/d_YkgJppcNmX-hzOmZpB2OCTIzk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/MiramarBeachSunset-5b2296b246e0fb005b8b88c9.jpg",
            "https://www.holidify.com/images/compressed/1705.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Miramar_Beach_Panaji_Goa.jpg/1200px-Miramar_Beach_Panaji_Goa.jpg",
            "https://www.tripsavvy.com/thmb/qEB0EjV0L4j7x_Ej03vhkHeOMnM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/MiramarBeachView2-5b2296b346e0fb005b8b88cb.jpg"
        ],
        whether: [
            { Today: "28c" },
            { 1: "29c", wind_speed: "low", is_suitable: true, reason: "" },
            { 2: "36c", wind_speed: "moderate", is_suitable: false, reason: "Too Hot" },
            { 3: "27c", wind_speed: "low", is_suitable: true, reason: "" },
            { 4: "32c", wind_speed: "high", is_suitable: false, reason: "High Winds" }
        ],
    }
];


