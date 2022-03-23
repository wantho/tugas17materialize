import React, { Component } from "react";

import { Slide, Row, Col, MediaBox, Slider, Card } from "react-materialize";

class Side2 extends Component {
  render() {
    return (
      <div>
        <Slider>
          <Slide
            src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg"
            title="Pantai"
          >
            Dapatkan Kesempatan Jalan-Jalan Ke Pantai Dengan Membeli Sebuah
            Product
          </Slide>

          <Slide
            src="https://asset-a.grid.id/crop/0x0:0x0/750x500/photo/intisarifoto/original/14745_pantai-nampu-wonogiri-keindahan-yang-tersembunyi.jpg"
            title="Pantai"
          >
            Dapatkan Kesempatan Jalan-Jalan Ke Pantai Dengan Membeli Sebuah
            Product
          </Slide>
        </Slider>

        <h5>Host List</h5>

        <Row>
          <Col>
            <Card>
              <MediaBox
                src="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg"
                caption=""
              />
              <p>
                Audio Technica - Mulai Dari
                <span bgColor="red">Rp.910 rb</span>
              </p>
            </Card>
          </Col>

          <Col>
            <Card>
              <MediaBox
                src="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg"
                caption=""
              />

              <p>
                Handphone Samsung - Mulai Dari{" "}
                <span bgColor="red">Rp.200 rb</span>
              </p>
            </Card>
          </Col>

          <Col>
            <Card>
              <MediaBox
                src="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg"
                caption=""
              />
              <p>
                Sequisy - Mulai Dari <span bgColor="red">Rp.5,5rb</span>
              </p>
            </Card>
          </Col>

          <Col>
            <Card>
              <MediaBox
                src="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg"
                caption=""
              />
              <p>
                Sequisy - Mulai Dari <span bgColor="red">Rp.5,5rb</span>
              </p>
            </Card>
          </Col>

          <Col>
            <Card>
              <MediaBox
                alt=""
                src="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg"
                width="300"
                height="300"
              ></MediaBox>

              <p>
                Audio Technica - Mulai Dari
                <span bgColor="red">Rp.910 rb</span>
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Side2;
