import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import { getData } from "../../../../data/ProdFetch";
import { Link } from "react-router-dom";
import PopModal from "../../PopModal";
const ProductsPage = () => {
  const [productsOnline, setProductsOnline] = useState();
  const [delPopUp, setDeletePopup] = useState({productInfo: null, productLink:null, popUp:false});
  useEffect(() => {
    getData().then((finalData) => {
      console.log("Products PAGE: ", finalData);
      setProductsOnline(finalData);
    });
  }, []);

  const deleteProduct = (data) => {
    setDeletePopup({
      productInfo: data.productToDelete.title,
      productLink: data.productToDelete.productID,
      popUp:true
    })
    console.log("Requesting deteling the product:", data);

  }

  return (
    <Container fluid className="main-content-container px-4">
     {delPopUp.popUp && <PopModal title={`Doresti sa stergi ${delPopUp.productInfo}?`} />}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Product List" subtitle="View & Edit Products" className="text-sm-left" />
      </Row>
      <Row>{/* <RangeDatePicker  onValues={handleDateInputs}/> */}</Row>
      {/* Default Light Table */}
      <Row>
       
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Product List</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    {tableTypes.map((item) => (
                      <th scope="col" className="border-0">
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  { productsOnline &&  Object.values(productsOnline)?.map(item=>{
                    return <tr>
                            <td>{<img style={{height:'50px', aspectRatio:'1/1'}} className="object-fit-cover img-thumbnail " src={Array.from(item.imageProduct)[0]}/>}</td>
                            <td className="font-weight-bold"><a className="text-secondary text-decoration-none" href={`/produs/${item.ID}`}>{item.title}</a></td>
                            <td>{item.price}</td>
                            <td>
                          <Link  to={`/admin/newPanel/edit/${item.ID}`} className="btn btn-primary btn-sm">
                            EDITEAZA
                          </Link>
                          <Link  onClick={ ()=> deleteProduct( {productToDelete: {title:item.title, productID: item.ID}})} className="btn btn-danger btn-sm mx-1">
                            STERGE
                          </Link>
                        </td>
                    </tr>
                })}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const tableTypes = ["Image", "Name", "Price", "Actions"];

export default ProductsPage;
