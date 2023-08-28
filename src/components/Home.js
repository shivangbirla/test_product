import React, { useEffect, useState } from "react";
import img_1 from "../assets/img_1.png";
import img_2 from "../assets/img_2.png";
import img_3 from "../assets/img_3.png";
import img_4 from "../assets/img_4.png";
import img_5 from "../assets/img_5.png";
import { products } from "../data/data";
// import { getProducts } from "../api/productRequest";

const Home = ({ searchValue }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const handleProductHover = (product) => {
    setHoveredProduct(product);
  };
  const handleProductLeave = () => {
    setHoveredProduct(null);
  };

  const [mappedProducts, setMappedProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getProducts();
  //       const data = response.data;
  //       console.log(data);

  //       setMappedProducts(data.products);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const [hoveredPairIndex, setHoveredPairIndex] = useState(null);
  const [hoverPairIndex, setHoverPairIndex] = useState(null);
  return (
    <>
      <div className="bg-[#1E1E1E] w-[100vw] h-auto sm:h-[100vh] md:h-[150vh]">
        <div className="flex flex-col md:flex-row-reverse justify-between">
          <div className="flex flex-col">
            {/* Zone 1 */}
            <div
              className="mt-[42vh] w-[500px] h-[380px] md:w-[220px] md:h-[140px] relative bg-cover"
              style={{ backgroundImage: `url(${img_1})` }}
            >
              {Array.from({ length: 3 }, (_, rowIndex) => (
                <div
                  key={rowIndex}
                  className="absolute flex flex-row md:left-[5vw] left-[3.5vw] space-x-8 md:space-x-2"
                  // style={{
                  //   top: `${190 + rowIndex * 70}px`,
                  //   "@media (max-width: 767px)": {
                  //     top: `${50 + rowIndex * 50}px`, // Customize this value for screens with max-width of 767px
                  //   },
                  // }}
                  style={{
                    top:
                      window.innerWidth >= 767
                        ? `${122 + rowIndex * 50}px`
                        : `${50 + rowIndex * 22}px`,
                  }}
                >
                  {products
                    .filter(
                      (product) =>
                        product.zone === 1 && product.level === rowIndex + 1
                    )
                    .sort((a, b) => a.rack - b.rack)
                    .reduce((pairs, product, index, array) => {
                      if (index % 4 === 0) {
                        pairs.push(array.slice(index, index + 4));
                      }
                      return pairs;
                    }, [])
                    .slice(0, 8) // Limit to 8 pairs for 4 divs
                    .map((pair, index) => (
                      <div
                        key={index}
                        className={`product-pair w-[25px] h-[25px] md:w-[15px] md:h-[15px] bg-[#373535] rounded-lg cursor-pointer ${
                          pair[0].product_name === searchValue ||
                          pair[1].product_name === searchValue ||
                          pair[2].product_name === searchValue ||
                          pair[3].product_name === searchValue
                            ? "bg-green-500"
                            : "bg-[#373535]"
                        }`}
                        onMouseEnter={() => setHoveredPairIndex(index)}
                        onMouseLeave={() => setHoveredPairIndex(null)}
                      >
                        {hoveredPairIndex === index && (
                          <div>
                            <div className="product-details fixed top-[30vh] left-[40vw] md:top-[10vh] md:left-[0vw] md:w-[180px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg font-semibold">
                                Product: {pair[0].product_name}
                              </h2>
                              <p>Product Details: {pair[0].quantity}</p>
                              <p>Description: {pair[0].description}</p>
                            </div>
                            <div className="product-details fixed top-[30vh] left-[70vw] md:top-[10vh] md:left-[50vw] md:w-[180px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg font-semibold">
                                Product: {pair[1].product_name}
                              </h2>
                              <p>Product Details: {pair[1].quantity}</p>
                              <p>Description: {pair[1].description}</p>
                            </div>
                            <div className="product-details fixed top-[60vh] left-[40vw] md:top-[30vh] md:left-[0vw] md:w-[180px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg font-semibold">
                                Product: {pair[2].product_name}
                              </h2>
                              <p>Product Details: {pair[2].quantity}</p>
                              <p>Description: {pair[2].description}</p>
                            </div>
                            <div className="product-details fixed top-[60vh] left-[70vw] md:top-[30vh] md:left-[50vw] md:w-[180px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg font-semibold">
                                Product: {pair[3].product_name}
                              </h2>
                              <p>Product Details: {pair[3].quantity}</p>
                              <p>Description: {pair[3].description}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              ))}
            </div>
            {/* Zone 2 */}
            <div
              className="mt-[10vh] md:mt-[0vh] w-[500px] h-[380px] md:w-[220px] md:h-[140px] relative bg-cover"
              style={{ backgroundImage: `url(${img_2})` }}
            >
              {Array.from({ length: 3 }, (_, rowIndex) => (
                <div
                  key={rowIndex}
                  style={{ top: `${122 + rowIndex * 50}px` }} // Use inline styles for dynamic positioning
                  className="absolute flex flex-row left-[3.5vw] space-x-10"
                >
                  {mappedProducts
                    .filter(
                      (product) =>
                        product.zone === 2 && product.level === rowIndex + 1
                    )
                    .sort((a, b) => a.rack - b.rack)
                    .reduce((pairs, product, index, array) => {
                      if (index % 4 === 0) {
                        pairs.push(array.slice(index, index + 4));
                      }
                      return pairs;
                    }, [])
                    .slice(0, 4) // Limit to 4 pairs for 4 divs
                    .map((pair, index) => (
                      <div
                        key={index}
                        className={`product-pair w-[25px] h-[25px] bg-black rounded-lg cursor-pointer ${
                          pair[0].product_name === searchValue ||
                          pair[1].product_name === searchValue ||
                          pair[2].product_name === searchValue ||
                          pair[3].product_name === searchValue
                            ? "bg-green-500"
                            : "bg-black"
                        }`}
                        onMouseEnter={() => setHoveredPairIndex(index)}
                        onMouseLeave={() => setHoveredPairIndex(null)}
                      >
                        {hoveredPairIndex === index && (
                          <div>
                            <div className="product-details fixed top-[40vh] left-[1vw] transform-translate-[-50% -50%] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg font-semibold">
                                Product Name: {pair[0].product_name}
                              </h2>
                              <p>Product Details: {pair[0].quantity}</p>
                              <p>Description: {pair[0].description}</p>
                            </div>
                            <div className="product-details fixed top-[40vh] left-[30vw] transform-translate-[-50% -50%] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg font-semibold">
                                Product Name: {pair[1].product_name}
                              </h2>
                              <p>Product Details: {pair[1].quantity}</p>
                              <p>Description: {pair[1].description}</p>
                            </div>
                            <div className="product-details fixed top-[40vh] left-[50vw] transform-translate-[-50% -50%] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg font-semibold">
                                Product Name: {pair[2].product_name}
                              </h2>
                              <p>Product Details: {pair[2].quantity}</p>
                              <p>Description: {pair[2].description}</p>
                            </div>
                            <div className="product-details fixed top-[40vh] left-[70vw] transform-translate-[-50% -50%] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg font-semibold">
                                Product Name: {pair[3].product_name}
                              </h2>
                              <p>Product Details: {pair[3].quantity}</p>
                              <p>Description: {pair[3].description}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              ))}
            </div>
            {/* Zone 3 */}
            <div
              className="mt-[20vh] md:mt-[0vh] w-[400px] h-[400px] md:w-[140px] md:h-[170px] relative bg-cover"
              style={{ backgroundImage: `url(${img_3})` }}
            >
              {Array.from({ length: 3 }, (_, rowIndex) => (
                <div
                  key={rowIndex}
                  style={{ top: `${122 + rowIndex * 50}px` }} // Use inline styles for dynamic positioning
                  className="absolute flex flex-row left-[3.5vw] space-x-10"
                >
                  {mappedProducts
                    .filter(
                      (product) =>
                        product.zone === 3 && product.level === rowIndex + 1
                    )
                    .sort((a, b) => a.rack - b.rack)
                    .reduce((pairs, product, index, array) => {
                      if (index % 4 === 0) {
                        pairs.push(array.slice(index, index + 4));
                      }
                      return pairs;
                    }, [])
                    .slice(0, 4) // Limit to 4 pairs for 4 divs
                    .map((pair, index) => (
                      <div
                        key={index}
                        className={`product-pair w-[25px] h-[25px] bg-black rounded-lg cursor-pointer ${
                          pair[0].product_name === searchValue ||
                          pair[1].product_name === searchValue ||
                          pair[2].product_name === searchValue ||
                          pair[3].product_name === searchValue
                            ? "bg-green-500"
                            : "bg-black"
                        }`}
                        onMouseEnter={() => setHoveredPairIndex(index)}
                        onMouseLeave={() => setHoveredPairIndex(null)}
                      >
                        {hoveredPairIndex === index && (
                          <div>
                            <div className="product-details fixed top-[40vh] left-[1vw] transform-translate-[-50% -50%] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg font-semibold">
                                Product Name: {pair[0].product_name}
                              </h2>
                              <p>Product Details: {pair[0].quantity}</p>
                              <p>Description: {pair[0].description}</p>
                            </div>
                            <div className="product-details fixed top-[40vh] left-[30vw] transform-translate-[-50% -50%] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg font-semibold">
                                Product Name: {pair[1].product_name}
                              </h2>
                              <p>Product Details: {pair[1].quantity}</p>
                              <p>Description: {pair[1].description}</p>
                            </div>
                            <div className="product-details fixed top-[40vh] left-[50vw] transform-translate-[-50% -50%] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg font-semibold">
                                Product Name: {pair[2].product_name}
                              </h2>
                              <p>Product Details: {pair[2].quantity}</p>
                              <p>Description: {pair[2].description}</p>
                            </div>
                            <div className="product-details fixed top-[40vh] left-[70vw] transform-translate-[-50% -50%] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg font-semibold">
                                Product Name: {pair[3].product_name}
                              </h2>
                              <p>Product Details: {pair[3].quantity}</p>
                              <p>Description: {pair[3].description}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            {/* Zone 4 */}
            <div
              className="mt-[42vh] w-[400px] h-[400px] md:w-[140px] md:h-[170px] relative bg-cover"
              style={{ backgroundImage: `url(${img_4})` }}
            >
              {Array.from({ length: 3 }, (_, rowIndex) => (
                <div
                  key={rowIndex}
                  className="absolute flex flex-row left-[7vw] md:left-[7vw] space-x-10 md:top-[60px] md:space-x-2"
                  style={{
                    top:
                      window.innerWidth >= 767
                        ? `${190 + rowIndex * 70}px`
                        : `${60 + rowIndex * 25}px`,
                  }}
                >
                  {products
                    .filter(
                      (product) =>
                        product.zone === 4 && product.level === rowIndex + 1
                    )
                    .sort((a, b) => a.rack - b.rack)
                    .reduce((pairs, product, index, array) => {
                      if (index % 4 === 0) {
                        pairs.push(array.slice(index, index + 4));
                      }
                      return pairs;
                    }, [])
                    .slice(0, 4) // Limit to 4 pairs for 4 divs
                    .map((pair, index) => (
                      <div
                        key={index}
                        className={`product-pair w-[25px] h-[25px] md:h-[15px] md:w-[15px] bg-[#373535] rounded-lg cursor-pointer ${
                          pair[0].product_name === searchValue ||
                          pair[1].product_name === searchValue ||
                          pair[2].product_name === searchValue ||
                          pair[3].product_name === searchValue
                            ? "bg-green-500"
                            : "bg-[#373535]"
                        }`}
                        onMouseEnter={() => setHoverPairIndex(index)}
                        onMouseLeave={() => setHoverPairIndex(null)}
                      >
                        {hoverPairIndex === index && (
                          <div>
                            <div className="product-details fixed top-[30vh] left-[40vw] md:top-[10vh] md:left-[0vw] md:w-[180px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg font-semibold">
                                Product: {pair[0].product_name}
                              </h2>
                              <p>Product Details: {pair[0].quantity}</p>
                              <p>Description: {pair[0].description}</p>
                            </div>
                            <div className="product-details fixed top-[30vh] left-[70vw] md:top-[10vh] md:left-[50vw] md:w-[180px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg font-semibold">
                                Product: {pair[1].product_name}
                              </h2>
                              <p>Product Details: {pair[1].quantity}</p>
                              <p>Description: {pair[1].description}</p>
                            </div>
                            <div className="product-details fixed top-[60vh] left-[40vw] md:top-[30vh] md:left-[0vw] md:w-[180px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg font-semibold">
                                Product: {pair[2].product_name}
                              </h2>
                              <p>Product Details: {pair[2].quantity}</p>
                              <p>Description: {pair[2].description}</p>
                            </div>
                            <div className="product-details fixed top-[60vh] left-[70vw] md:top-[30vh] md:left-[50vw] md:w-[180px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg font-semibold">
                                Product: {pair[3].product_name}
                              </h2>
                              <p>Product Details: {pair[3].quantity}</p>
                              <p>Description: {pair[3].description}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              ))}
            </div>
            {/* Zone 5 */}
            <div
              className="mt-[20vh] md:mt-[0vh] w-[400px] h-[400px] md:w-[140px] md:h-[170px] relative bg-cover"
              style={{ backgroundImage: `url(${img_5})` }}
            >
              {Array.from({ length: 3 }, (_, rowIndex) => (
                <div
                  key={rowIndex}
                  style={{ top: `${122 + rowIndex * 50}px` }} // Use inline styles for dynamic positioning
                  className="absolute flex flex-row left-[3.5vw] space-x-10"
                >
                  {mappedProducts
                    .filter(
                      (product) =>
                        product.zone === 5 && product.level === rowIndex + 1
                    )
                    .sort((a, b) => a.rack - b.rack)
                    .reduce((pairs, product, index, array) => {
                      if (index % 4 === 0) {
                        pairs.push(array.slice(index, index + 4));
                      }
                      return pairs;
                    }, [])
                    .slice(0, 4) // Limit to 4 pairs for 4 divs
                    .map((pair, index) => (
                      <div
                        key={index}
                        className={`product-pair w-[25px] h-[25px] bg-black rounded-lg cursor-pointer ${
                          pair[0].product_name === searchValue ||
                          pair[1].product_name === searchValue ||
                          pair[2].product_name === searchValue ||
                          pair[3].product_name === searchValue
                            ? "bg-green-500"
                            : "bg-black"
                        }`}
                        onMouseEnter={() => setHoveredPairIndex(index)}
                        onMouseLeave={() => setHoveredPairIndex(null)}
                      >
                        {hoveredPairIndex === index && (
                          <div>
                            <div className="product-details fixed top-[40vh] left-[1vw] transform-translate-[-50% -50%] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg font-semibold">
                                Product Name: {pair[0].product_name}
                              </h2>
                              <p>Product Details: {pair[0].quantity}</p>
                              <p>Description: {pair[0].description}</p>
                            </div>
                            <div className="product-details fixed top-[40vh] left-[30vw] transform-translate-[-50% -50%] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg font-semibold">
                                Product Name: {pair[1].product_name}
                              </h2>
                              <p>Product Details: {pair[1].quantity}</p>
                              <p>Description: {pair[1].description}</p>
                            </div>
                            <div className="product-details fixed top-[40vh] left-[50vw] transform-translate-[-50% -50%] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg font-semibold">
                                Product Name: {pair[2].product_name}
                              </h2>
                              <p>Product Details: {pair[2].quantity}</p>
                              <p>Description: {pair[2].description}</p>
                            </div>
                            <div className="product-details fixed top-[40vh] left-[70vw] transform-translate-[-50% -50%] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg font-semibold">
                                Product Name: {pair[3].product_name}
                              </h2>
                              <p>Product Details: {pair[3].quantity}</p>
                              <p>Description: {pair[3].description}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="">
          {hoveredProduct &&
            hoveredProduct.map(
              (hoveredP, i) =>
                hoveredP && (
                  <div
                    className="fixed top-[40vh] left-[60vw] transform-translate-[-50% -50%] bg-[#3B3835] p-4 rounded-md shadow-md"
                    key={i}
                  >
                    <h2 className="text-lg font-semibold">
                      Product Name: {hoveredP.product_name}
                    </h2>
                    <p>Product Details: {hoveredP.quantity}</p>
                    <p>Description: {hoveredP.description}</p>
                  </div>
                )
            )}
        </div>
      </div>
    </>
  );
};

export default Home;
