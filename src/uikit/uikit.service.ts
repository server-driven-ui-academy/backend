import { Injectable } from '@nestjs/common';

@Injectable()
export class UikitService {
  getHome() {
    return {
      widgets: [
        {
          identifier: "SECTION_TITLE",
          title: "Section 1",
        },
        {
          identifier: "CIRCLE_COLLECTION",
          list: [
            {
              color: "#ABFFB8",
              text: "Title 1",
              action: {
                identifier: "SCREEN_SERVER",
                title: "Product 11",
                url: "product-11",
              },
            },
            {
              color: "#978AFF",
              text: "Title 2",
            },
            {
              color: "#FFBFA6",
              text: "Title 3",
            },
            {
              color: "#F09CE1",
              text: "Title 4",
            },
            {
              color: "#96E4F4",
              text: "Title 5",
            },
          ]
        },
        {
          identifier: "SECTION_TITLE",
          title: "Section 2",
        },
        {
          identifier: "GRID",
          list: [
            {
              color: "#ABFFB8",
              text: "Product 11 Name",
              action: {
                identifier: "SCREEN_SERVER",
                title: "Product 11",
                url: "product-11",
              },
            },
            {
              color: "#96E4F4",
              text: "Product 15 Name",
            },
            {
              color: "#FFBFA6",
              text: "Product 13 Name",
            },
            {
              color: "#F09CE1",
              text: "Product 14 Name",
            },
          ]
        },
        {
          identifier: "BANNER",
          color: "#96E4F4",
          title: "Banner A",
          titleColor: "#000000",
          action: {
            identifier: "SCREEN_SERVER",
            title: "Banner A Details",
            url: "bannerA",
          },
          imageURLString: "url_image_to_be_downloaded"
        },
        {
          identifier: "SECTION_TITLE",
          title: "Near you",
        },
        {
          identifier: "RECTANGLE_COLLECTION",
          list: [
            {
              color: "#FFBFA6",
              text: "Product 01 Name",
              action: {
                identifier: "SCREEN_SERVER",
                title: "Product 01",
                url: "product-1",
              },
            },
            {
              color: "#F09CE1",
              text: "Product 02 Name",
            },
            {
              color: "#96E4F4",
              text: "Product 03 Name",
            },
            {
              color: "#ABFFB8",
              text: "Product 04 Name",
            },
            {
              color: "#978AFF",
              text: "Product 05 Name",
            },
            {
              color: "#FFBFA6",
              text: "Product 06 Name",
            },
            {
              color: "#F09CE1",
              text: "Product 07 Name",
            },
            {
              color: "#96E4F4",
              text: "Product 08 Name",
            },
          ]
        },
        {
          identifier: "SECTION_TITLE",
          title: "For you",
        },
        {
          identifier: "RECTANGLE_COLLECTION",
          list: [
            {
              color: "#ABFFB8",
              text: "Product 11 Name",
            },
            {
              color: "#978AFF",
              text: "Product 12 Name",
            },
            {
              color: "#FFBFA6",
              text: "Product 13 Name",
            },
            {
              color: "#F09CE1",
              text: "Product 14 Name",
            },
            {
              color: "#96E4F4",
              text: "Product 15 Name",
            },
          ]
        },
        {
          identifier: "SECTION_TITLE",
          title: "New",
        },
        {
          identifier: "BANNER",
          color: "#8469FA",
          title: "Banner C",
          titleColor: "#FFFFFF",
          imageURLString: "url_image_to_be_downloaded",
          action: {
            identifier: "SCREEN_SERVER",
            title: "Banner C Details",
            url: "bannerC",
          },
        },
        {
          identifier: "SECTION_TITLE",
          title: "Near you",
        },
        {
          identifier: "LIST",
          list: [
            {
              color: "#DDDDDD",
              text: "Cell 01",
            },
            {
              color: "#DDDDDD",
              text: "Cell 02",
            },
            {
              color: "#DDDDDD",
              text: "Cell 03",
            },
            {
              color: "#DDDDDD",
              text: "Cell 04",
            },
            {
              color: "#DDDDDD",
              text: "Cell 05",
            },
            {
              color: "#DDDDDD",
              text: "Cell 06",
            },
            {
              color: "#DDDDDD",
              text: "Cell 01",
            },
            {
              color: "#DDDDDD",
              text: "Cell 02",
            },
            {
              color: "#DDDDDD",
              text: "Cell 03",
            },
          ]
        },
        {
          identifier: "SECTION_TITLE",
          title: "Old",
        },
        {
          identifier: "BANNER",
          color: "#ABFFB8",
          title: "Banner B",
          titleColor: "#000000",
          imageURLString: "url_image_to_be_downloaded",
          action: {
            identifier: "SCREEN_SERVER",
            title: "Banner B Details",
            url: "bannerB",
          },
        },
      ],
    };
  }

  getProduct1() {
    return {
      widgets: [
        {
            identifier: "BANNER",
            color: "#96E4F4",
            title: "Banner A",
            titleColor: "#000000",
            action: {
                identifier: "SCREEN_SERVER",
                title: "Banner A Details",
                url: "bannerA",
            },
            imageURLString: "url_image_to_be_downloaded"
        },
        {
            identifier: "SECTION_TITLE",
            title: "Pictures",
        },
        {
            identifier: "GRID",
            list: [
                {
                    color: "#ABFFB8",
                    text: "Product 11 Name",
                },
                {
                    color: "#96E4F4",
                    text: "Product 15 Name",
                },
            ]
        },
        {
            identifier: "SECTION_TITLE",
            title: "Similar Products",
        },
        {
            identifier: "LIST",
            list: [
                {
                    color: "#DDDDDD",
                    text: "Cell 01",
                },
                {
                    color: "#DDDDDD",
                    text: "Cell 02",
                },
                {
                    color: "#DDDDDD",
                    text: "Cell 03",
                },
            ]
        },
      ],
    };
  }
  getProduct11() {
    return {
      widgets: [
        {
            identifier: "BANNER",
            color: "#96E4F4",
            title: "Banner A",
            titleColor: "#000000",
            action: {
                identifier: "SCREEN_SERVER",
                title: "Banner A Details",
                url: "bannerA",
            },
            imageURLString: "url_image_to_be_downloaded"
        },
        {
            identifier: "SECTION_TITLE",
            title: "Pictures",
        },
        {
            identifier: "GRID",
            list: [
                {
                    color: "#ABFFB8",
                    text: "Product 11 Name",
                },
                {
                    color: "#96E4F4",
                    text: "Product 15 Name",
                },
            ]
        },
        {
            identifier: "SECTION_TITLE",
            title: "Similar Products",
        },
        {
            identifier: "LIST",
            list: [
                {
                    color: "#DDDDDD",
                    text: "Cell 01",
                },
                {
                    color: "#DDDDDD",
                    text: "Cell 02",
                },
                {
                    color: "#DDDDDD",
                    text: "Cell 03",
                },
            ]
        },
      ],
    };
  }

  getBannerA() {
    return {
      widgets: [
        {
            identifier: "BANNER",
            color: "#96E4F4",
            title: "Banner A01",
            titleColor: "#000000",
            imageURLString: "url_image_to_be_downloaded"
        },
        {
            identifier: "SECTION_TITLE",
            title: "Pictures",
        },
        {
            identifier: "GRID",
            list: [
                {
                    color: "#F09CE1",
                    text: "Product 32 Name",
                },
                {
                    color: "#FF78AF",
                    text: "Product 12 Name",
                },
            ]
        },
        {
            identifier: "SECTION_TITLE",
            title: "Similar Products",
        },
        {
            identifier: "LIST",
            list: [
                {
                    color: "#DDDDDD",
                    text: "Cell 01",
                },
                {
                    color: "#DDDDDD",
                    text: "Cell 02",
                },
                {
                    color: "#DDDDDD",
                    text: "Cell 03",
                },
            ]
        },
      ],
    };
  }
  getBannerB() {
    return {
      widgets: [
        {
            identifier: "BANNER",
            color: "#ABFFB8",
            title: "Banner B01",
            titleColor: "#000000",
            action: {
                identifier: "SCREEN_SERVER",
                title: "Banner A Details",
                url: "bannerB",
            },
            imageURLString: "url_image_to_be_downloaded"
        },
        {
            identifier: "SECTION_TITLE",
            title: "Pictures",
        },
        {
            identifier: "GRID",
            list: [
                {
                    color: "#ABFFB8",
                    text: "Product 11 Name",
                },
                {
                    color: "#96E4F4",
                    text: "Product 15 Name",
                },
            ]
        },
        {
            identifier: "SECTION_TITLE",
            title: "Similar Products",
        },
        {
            identifier: "LIST",
            list: [
                {
                    color: "#DDDDDD",
                    text: "Cell 01",
                },
                {
                    color: "#DDDDDD",
                    text: "Cell 02",
                },
                {
                    color: "#DDDDDD",
                    text: "Cell 03",
                },
            ]
        },
      ],
    };
  }

  getBannerC() {
    return {
      widgets: [
        {
          identifier: "BANNER",
          color: "#6651C2",
          title: "Banner C01",
          titleColor: "#FFFFFF",
          imageURLString: "url_image_to_be_downloaded"
      },
      {
          identifier: "BANNER",
          color: "#735CDB",
          title: "Banner C02",
          titleColor: "#FFFFFF",
          imageURLString: "url_image_to_be_downloaded"
      }
      ],
    };
  }
}
