// import Dishes from "../components/Dishes"

const DishesList = [{img: "https://food-cms.grab.com/compressed_webp/items/VNITE2022121508003350584/detail/menueditor_item_193a7f5a2ef64314ae6c04b8009a9382_1671091204310774447.webp",
                        name: "Cơm rang hải sản + Coca",
                        description: "",
                        price: "62.000",
                        type: "promo"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2022102317255933199/detail/menueditor_item_476862ed3161426da8fbeb62edccb770_1666545908142523068.webp",
                        name: "Cơm rang thập cẩm bò",
                        description: "",
                        price: "33.000",
                        type: "promo"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2023022313520400037/detail/menueditor_item_cbf4da8a7244484bbfac8957b7717ab0_1677234358523786289.webp",
                        name: "Cơm rang cải bò + Pepsi",
                        description: "",
                        price: "46.900",
                        type: "suggested"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE20221014103325393700/detail/menueditor_item_6ae0dc906e4c4e57ad5efee6d842ee70_1666545236229215324.webp",
                        name: "Cơm rang thập cẩm",
                        description: "",
                        price: "37.000",
                        type: "suggested"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2024040405104696756/detail/menueditor_item_0b1986d97c1944498d51a9c2a6ab6237_1712207397978550931.webp",
                        name: "Phở Bò Tái Bắp",
                        description: "",
                        price: "55.000",
                        type: "suggested"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2022121508003350584/detail/menueditor_item_193a7f5a2ef64314ae6c04b8009a9382_1671091204310774447.webp",
                        name: "Cơm rang hải sản + Coca",
                        description: "",
                        price: "62.000",
                        type: "suggested"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE20221014103326019026/detail/menueditor_item_5682e2564aaf4fde9609240f8f74e9dc_1666545278114211627.webp",
                        name: "Cơm rang trứng",
                        description: "",
                        price: "30.000",
                        type: "main"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2023073011283583275/detail/menueditor_item_c6209fededb54c63b4d450e92941ac55_1690716475778799299.webp",
                        name: "Cơm rang thập cẩm nhiều cơm",
                        description: "",
                        price: "33.000",
                        type: "main"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2022102317353689280/detail/menueditor_item_2298bf3167514d58bc8c5ca7286e40f0_1666546495005767706.webp",
                        name: "Cơm rang trứng ốp",
                        description: "",
                        price: "37.000",
                        type: "main"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2024040405085412322/detail/menueditor_item_d0ec2ee20542496aaea42834006faedf_1712207308665398221.webp",
                        name: "Phở Bò Tái Gầu",
                        description: "",
                        price: "55.000",
                        type: "main"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2024040405062048008/detail/menueditor_item_379266e6d5694acb82b32b01624c9546_1712207083178285190.webp",
                        name: "Phở Bò Tái Nạm",
                        description: "",
                        price: "55.000",
                        type: "main"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2024040405030378266/detail/menueditor_item_6c3097d7454947c6b2244bc942729bd9_1712206949589462239.webp",
                        name: "Phở Bò Tái Chín",
                        description: "",
                        price: "50.000",
                        type: "main"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2024040405015879292/detail/menueditor_item_dbea297117c2473da5c4e2577cc7a3a2_1712206873244736529.webp",
                        name: "Phở Bò Chín",
                        description: "",
                        price: "45.000",
                        type: "main"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2022121508020170286/detail/menueditor_item_e11545eb5d564f46ad09946abad7cc9d_1671091295487597385.webp",
                        name: "Cơm rang dưa bò nhiều thịt + Coca",
                        description: "",
                        price: "59.000",
                        type: "main"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2022102317255933199/detail/menueditor_item_476862ed3161426da8fbeb62edccb770_1666545908142523068.webp",
                        name: "cơm rang thập cẩm bò",
                        description: "",
                        price: "33.000",
                        type: "main"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE20221014103326019026/detail/menueditor_item_5682e2564aaf4fde9609240f8f74e9dc_1666545278114211627.webp",
                        name: "Cơm rang trứng",
                        description: "",
                        price: "30.000",
                        type: "main"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2022102317164912924/detail/menueditor_item_1ff84133c690489a9321b67e97938f46_1666545363799688548.webp",
                        name: "Mì xào cải bò",
                        description: "",
                        price: "47.000",
                        type: "main"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2022102317174966996/detail/menueditor_item_0aea12b74fe548a3a87b09f054338258_1666545433927725415.webp",
                        name: "Phở xào cải bò",
                        description: "",
                        price: "47.000",
                        type: "main"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2022111312441878517/detail/menueditor_item_1907c603d1cc48a5b22c0e8adc80a6aa_1668343554023020494.webp",
                        name: "Dồi sụn thêm",
                        description: "",
                        price: "37.000",
                        type: "extra"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2022111312440087458/detail/menueditor_item_a0e3803b15484685b97c5b1cec5dc7d8_1668343570032743651.webp",
                        name: "Chả cốm thêm",
                        description: "",
                        price: "35.000",
                        type: "extra"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2022111312434231100/detail/menueditor_item_dda151868ca949a8a1a6592d7eaedf86_1668388205099600203.webp",
                        name: "Nem rán thêm",
                        description: "",
                        price: "40.000",
                        type: "extra"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2022111312053029606/detail/menueditor_item_440ae57850674f7d87002870c4c74980_1668341117414544524.webp",
                        name: "Trà tắc",
                        description: "",
                        price: "20.000",
                        type: "drinks"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2022121507411350045/detail/menueditor_item_dadb994ba8da4d89b936844c89b0fcc1_1671090061718033575.webp",
                        name: "Fanta nho",
                        description: "",
                        price: "10.000",
                        type: "drinks"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2022102212084667359/detail/menueditor_item_95939d1704844ea8a6ef9f17c3a19a4a_1671090054336136597.webp",
                        name: "Coca",
                        description: "",
                        price: "13.000",
                        type: "drinks"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2022102212100452236/detail/menueditor_item_03e0abc0be9f4fdb91461befe8bfd57e_1666440601251865311.webp",
                        name: "Pepsi",
                        description: "",
                        price: "10.000",
                        type: "drinks"},
                    {img: "https://food-cms.grab.com/compressed_webp/items/VNITE2023121407141272843/detail/menueditor_item_71bfca3578af4de3982332ad27e88a5b_1702538041560952347.webp",
                        name: "Trà Ô Long",
                        description: "",
                        price: "15.000",
                        type: "drinks"}]

// function DishList(props) {
//     DishesList.map(dish => { if (dish.type === props.type) {
//         return(
//             <Dishes dishImg={dish.img} dishName={dish.name} dishPrice={dish.price} />
//         )}}) 
// }
// function DishList() {
//     DishesList.map(dish => <Dishes dishImg={dish.img} dishName={dish.name} dishPrice={dish.price} />) 
// }

export default DishesList