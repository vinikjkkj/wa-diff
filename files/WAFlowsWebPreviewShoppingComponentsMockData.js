__d(
  "WAFlowsWebPreviewShoppingComponentsMockData",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
        {
          belongs_to: "collection1",
          compliance_info: {
            country_code_origin: "US",
            importer_address: {
              city: "San Francisco",
              country_code: "US",
              postal_code: "94101",
              region: "California",
              street1: "1 Hacker Way",
              street2: "",
            },
            importer_name: "Facebook Inc.",
          },
          currency: "USD",
          description: "This is a sample product",
          id: "123",
          image_fetch_status: "FETCHED",
          is_hidden: "ISHIDDEN_FALSE",
          max_available: 10,
          media: {
            image: {
              id: "img1",
              original_dimensions: { height: 500, width: 500 },
              original_image_url: "https://example.com/product1.jpg",
              request_image_url: "https://example.com/product1-thumb.jpg",
            },
          },
          name: "Product 1",
          price: "10000",
          product_availability: "IN_STOCK",
          retailer_id: "SKU-123",
          sale_price: {
            end_date: "2022-01-31",
            price: 8e3,
            start_date: "2022-01-01",
          },
          status_info: {
            can_appeal: "true",
            commerce_url: "https://example.com/commerce",
            reject_reason: "none",
            status: "APPROVED",
          },
          url: "https://example.com/product1",
        },
        {
          belongs_to: "collection2",
          compliance_info: {
            country_code_origin: "CA",
            importer_address: {
              city: "Toronto",
              country_code: "CA",
              postal_code: "M5J 2S1",
              region: "Ontario",
              street1: "1 CN Tower Rd",
              street2: "",
            },
            importer_name: "Shopify Inc.",
          },
          currency: "CAD",
          description: "This is another sample product",
          id: "456",
          image_fetch_status: "NOT_FETCHED",
          is_hidden: "ISHIDDEN_TRUE",
          max_available: 5,
          media: {
            image: {
              id: "img2",
              original_dimensions: { height: 700, width: 700 },
              original_image_url: "https://example.com/product2.jpg",
              request_image_url: "https://example.com/product2-thumb.jpg",
            },
          },
          name: "Product 2",
          price: "20000",
          product_availability: "OUT_OF_STOCK",
          retailer_id: "SKU-456",
          sale_price: {
            end_date: "2022-02-28",
            price: 15e3,
            start_date: "2022-02-01",
          },
          status_info: {
            can_appeal: "false",
            commerce_url: "https://example.com/commerce",
            reject_reason: "violation",
            status: "REJECTED",
          },
          url: "https://example.com/product2",
        },
      ],
      l = function () {
        return {
          data: {
            xwa_product_catalog_get_collections: {
              __typename: "XWAProductCatalogGetCollectionsResponseSuccess",
              collections: [
                { id: "collection1", name: "Collection 1", products: e },
                { id: "collection2", name: "Collection 2", products: e },
                { id: "collection3", name: "Collection 3", products: e },
              ],
            },
          },
        };
      },
      s = function () {
        return {
          data: {
            xwa_product_catalog_get_single_collection: {
              __typename: "XWAProductCatalogGetSingleCollectionResponseSuccess",
              collection: { products: e },
            },
          },
        };
      },
      u = function () {
        return {
          data: {
            xwa_product_catalog_get_product_list: {
              __typename: "XWAProductCatalogGetProductResponseSuccess",
              product_list: { cart_enabled: "true", products: e },
            },
          },
        };
      },
      c = function () {
        return {
          data: {
            xwa_product_catalog_get_product: {
              __typename: "XWAProductCatalogGetProductResponseSuccess",
              product_catalog: {
                cart_enabled: "true",
                catalog_id: "123",
                product: e[0],
              },
            },
          },
        };
      };
    ((i.getMockedExternalDataResponseForCategoryListLayout = l),
      (i.getMockedExternalDataResponseForItemListLayout = s),
      (i.getMockedExternalDataResponseForCartLayout = u),
      (i.getMockedExternalDataResponseForItemDetailLayout = c));
  },
  66,
);
