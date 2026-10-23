__d(
  "WAWebDebugCatalog",
  [
    "WALogger",
    "WAWebBizCatalogAddProductJob",
    "WAWebBizCatalogManagementAddProduct",
    "WAWebBizCatalogManagementAppealCollection",
    "WAWebBizCatalogManagementAppealProduct",
    "WAWebBizCatalogManagementCreateCatalog",
    "WAWebBizCatalogManagementCreateCollection",
    "WAWebBizCatalogManagementDeleteCollections",
    "WAWebBizCatalogManagementDeleteProduct",
    "WAWebBizCatalogManagementEditProduct",
    "WAWebBizCatalogManagementFetchCatalog",
    "WAWebBizCatalogManagementFetchCollections",
    "WAWebBizCatalogManagementFetchProduct",
    "WAWebBizCatalogManagementFetchProductList",
    "WAWebBizCatalogManagementFetchSingleCollection",
    "WAWebBizCatalogManagementUpdateCollection",
    "WAWebBizCatalogManagementUpdateCollectionList",
    "WAWebBizCatalogManagementUpdateCommerceSettings",
    "WAWebBizCatalogManagementUpdateProductVisibility",
    "WAWebBizCreateProductCatalogJob",
    "WAWebBizGraphQLRefreshCartJob",
    "WAWebCatalogCollection",
    "WAWebProductModel",
    "WAWebUserPrefsMeUser",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k;
    function I() {
      return (
        r("vulture")("xEzstuYrYBS-b-owkk9u_QseQFM="),
        o("WAWebBizCreateProductCatalogJob")
          .createProductCatalog()
          .then(function (t) {
            return (
              r("vulture")("3K5xuPc3s97WJxGUlRdFIAfyCnE="),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:createProductCatalog",
                  ])),
              ),
              t
            );
          })
      );
    }
    I.doc = "Create product catalog";
    function T(e) {
      var t = e.currency,
        n = e.height,
        a = e.imageUrl,
        i = e.name,
        l = e.price,
        u = e.width;
      r("vulture")("qv5SJQYmj9KVrE1MKVT8iqAf_NE=");
      var c = a != null ? a : "https://dummyimage.com/100x100/1ab029/ffffff",
        d = new (o("WAWebProductModel").Product)({
          name: i,
          imageCdnUrl: c,
          priceAmount1000: l != null ? l : void 0,
          currency: t,
        });
      return o("WAWebBizCatalogAddProductJob")
        .addProductMD(d, u != null ? u : 100, n != null ? n : 100)
        .then(function (e) {
          (r("vulture")("5Fhq5esvy-OaIEZ8oAQ6-omEeO4="),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "debug:addCatalogProductMD",
                ])),
            ));
        });
    }
    T.doc = "Create catalog product";
    function D(e) {
      return (
        r("vulture")("CJNnirfXwGIo2132mScoq3YT9JE="),
        o("WAWebBizCatalogManagementFetchCatalog")
          .fetchCatalog(e)
          .then(function (e) {
            (r("vulture")("M-E2cWyA320rF9Kg-FCDWSSOun0="),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:bizManagementFetchCatalog",
                  ])),
              ));
          })
      );
    }
    D.doc = "Fetch catalog for a business (business context)";
    function x(e) {
      return (
        r("vulture")("FCTJSz7Ba2qcm0oihBEdcnomJ_o="),
        o("WAWebBizCatalogManagementFetchCollections")
          .fetchCollections(e)
          .then(function (e) {
            (r("vulture")("0msrLamx6QLh1WjhCQbsed-Zv6I="),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:bizManagementFetchCollections",
                  ])),
              ));
          })
      );
    }
    x.doc = "Fetch collections for a business (business context)";
    function $(e) {
      return (
        r("vulture")("6u7tTU5l5AMRUpfgF6UDfDLo6kU="),
        o("WAWebBizCatalogManagementFetchSingleCollection")
          .fetchSingleCollection(e)
          .then(function (e) {
            (r("vulture")("wl73qS9ns9u1lf85wyz6XZqvnvQ="),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:bizManagementFetchSingleCollection",
                  ])),
              ));
          })
      );
    }
    $.doc = "Fetch a single collection for a business (business context)";
    function P(e) {
      return (
        r("vulture")("KwTLzq7xrHw1umhqo2z99WuxuWg="),
        o("WAWebBizCatalogManagementFetchProductList")
          .fetchProductList(e)
          .then(function (e) {
            (r("vulture")("gvbw3FGOts0LFmvtCH7IckbPQmU="),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:bizManagementFetchProductList",
                  ])),
              ));
          })
      );
    }
    P.doc = "Fetch product list for a business (business context)";
    function N(e) {
      return (
        r("vulture")("WE4ZuUVEjRk_Qp8cNtARKRKCQ74="),
        o("WAWebBizGraphQLRefreshCartJob")
          .RefreshCart(e)
          .then(function (e) {
            (r("vulture")("udIvlfaNIY8FIl-iQ1_MJzoifTs="),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:bizManagementFetchCart",
                  ])),
              ));
          })
      );
    }
    N.doc = "Fetch cart";
    function M(e) {
      return (
        r("vulture")("vPs7v2L07v-qY6u5j3FvVO439RU="),
        o("WAWebBizCatalogManagementFetchProduct")
          .fetchProduct(e)
          .then(function (e) {
            (r("vulture")("TN7_QmPRh8LTmvaLapBVYaFhY6Y="),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:bizManagementFetchProduct",
                  ])),
              ));
          })
      );
    }
    M.doc = "Fetch a single product for a business (business context)";
    function w(e) {
      return (
        r("vulture")("xpnRMBAeniqJpQ-bkbXXoqo-UnY="),
        o("WAWebBizCatalogManagementCreateCollection")
          .createCollection(e)
          .then(function (e) {
            (r("vulture")("ckCcJJMXv2vj5aKRWmc6osbLHyo="),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:bizManagementCreateCollection",
                  ])),
              ));
          })
      );
    }
    w.doc = "Create a collection for a business (business context)";
    function A(e) {
      return (
        r("vulture")("-5BF6EkfmfbmFSc0UmLKmmYro0M="),
        o("WAWebBizCatalogManagementDeleteCollections")
          .deleteCollections(e)
          .then(function (e) {
            (r("vulture")("DMqNbomaavZcIlLMBoft1PtTN8Y="),
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:bizManagementDeleteCollections",
                  ])),
              ));
          })
      );
    }
    A.doc = "Delete collections for a business (business context)";
    function F(e) {
      return (
        r("vulture")("H_MuM4leqB_SiwUZj7jrSqnX-kI="),
        o("WAWebBizCatalogManagementAppealProduct")
          .appealProduct(e)
          .then(function (e) {
            (r("vulture")("8INvKfINug2rndKiRr7t622pdtI="),
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:bizManagementAppealProduct",
                  ])),
              ));
          })
      );
    }
    F.doc = "Appeal a product by a business (business context)";
    function O(e) {
      return (
        r("vulture")("pkqpmGikhyBcX6hPbpodVGdHpAQ="),
        o("WAWebBizCatalogManagementUpdateCollectionList")
          .updateCollectionList(e)
          .then(function (e) {
            (r("vulture")("R36glXFYwIiX70-p-Z0hl1z8JdE="),
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:bizManagementUpdateCollectionList",
                  ])),
              ));
          })
      );
    }
    O.doc = "Update collection list for a business (business context)";
    function B(e) {
      return (
        r("vulture")("u7Dfa7C5iNLCuDW0VYnHdj-kMTM="),
        o("WAWebBizCatalogManagementUpdateCollection")
          .updateCollection(e)
          .then(function (e) {
            (r("vulture")("Lfjk6j3cpyj-b0TNb6lYissMzWw="),
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:bizManagementUpdateCollection",
                  ])),
              ));
          })
      );
    }
    B.doc = "Update collection list for a business (business context)";
    function W(e) {
      return (
        r("vulture")("Ekn2PgCGcK1il8jj-PXF8H7zRDo="),
        o("WAWebBizCatalogManagementUpdateProductVisibility")
          .updateProductVisibility(e)
          .then(function (e) {
            (r("vulture")("q0-VAx-g-3G29nfplrLl6ar6hwQ="),
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:bizManagementUpdateProductVisibility",
                  ])),
              ));
          })
      );
    }
    W.doc = "Update product visibility for a business (business context)";
    function q(e) {
      return (
        r("vulture")("3wxh7ELrjWV8gCfMo7nmRwOTmkQ="),
        o("WAWebBizCatalogManagementUpdateCommerceSettings")
          .updateCommerceSettings(e)
          .then(function (e) {
            (r("vulture")("W0Y1NxgbxS_iW3EDae2LXX5OOP8="),
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:bizManagementUpdateCommerceSettings",
                  ])),
              ));
          })
      );
    }
    q.doc = "Update commerce settings for a business (business context)";
    function U(e) {
      return (
        r("vulture")("uh5DUek6YWoRKTj6Ykm8U0DXYBM="),
        o("WAWebBizCatalogManagementAppealCollection")
          .appealCollection(e)
          .then(function (e) {
            (r("vulture")("inVV8EASu0z02WUXIKYH2paU-rg="),
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:bizManagementAppealCollection",
                  ])),
              ));
          })
      );
    }
    U.doc = "Appeal a collection by a business (business context)";
    function V(e) {
      return (
        r("vulture")("wJbJ3xyDCeTWaYnikPdsmOB1EG8="),
        o("WAWebBizCatalogManagementEditProduct")
          .editProduct(e)
          .then(function (e) {
            (r("vulture")("yJBqQyAJVVxT15micr34xxN-RRs="),
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:bizManagementEditProduct",
                  ])),
              ));
          })
      );
    }
    V.doc = "Edit a product by a business (business context)";
    function H(e) {
      return (
        r("vulture")("S1dslKYvbRC45pkraa9A2KMjheE="),
        o("WAWebBizCatalogManagementAddProduct")
          .addProduct(e)
          .then(function (e) {
            (r("vulture")("GLCg-BBAzG4JxpXqgehFEAqHbhE="),
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:bizManagementAddProduct",
                  ])),
              ));
          })
      );
    }
    H.doc = "Add a product by a business (business context)";
    function G(e) {
      return (
        r("vulture")("lQAZUq5Hoc6YIbv6jQ99yRKwyeU="),
        o("WAWebBizCatalogManagementDeleteProduct")
          .deleteProduct(e)
          .then(function (e) {
            (r("vulture")("_NU2PzpbtQX2gNpDX-C4kWcPgsI="),
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:bizManagementDeleteProduct",
                  ])),
              ));
          })
      );
    }
    G.doc = "Delete a product by a business (business context)";
    function z(e) {
      return (
        r("vulture")("fFtcin-Nrq7Dw9rf56BPmpiMzWQ="),
        o("WAWebBizCatalogManagementCreateCatalog")
          .createCatalog(e)
          .then(function (e) {
            (r("vulture")("swE1cRNYN7kc3yntsHSHQFHkkzs="),
              o("WALogger").LOG(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:bizManagementCreateCatalog",
                  ])),
              ));
          })
      );
    }
    z.doc = "Create a catalog by a business (business context)";
    function j(e) {
      var t;
      r("vulture")("oQZmftS5cO6JTdRjYo1xaPXgZyU=");
      var n = o("WAWebCatalogCollection").CatalogCollection.get(
        o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
      );
      return n == null || (t = n.productCollection) == null ? void 0 : t.get(e);
    }
    j.doc = "Get Product model of a speific product id for own Catalog";
    var K = {
      createProductCatalog: I,
      addCatalogProductMD: T,
      bizManagementFetchCatalog: D,
      bizManagementFetchCollections: x,
      bizManagementFetchSingleCollection: $,
      bizManagementFetchProductList: P,
      bizManagementFetchProduct: M,
      bizManagementCreateCollection: w,
      bizManagementDeleteCollections: A,
      bizManagementAppealProduct: F,
      bizManagementUpdateCollectionList: O,
      bizManagementUpdateCollection: B,
      bizManagementUpdateProductVisibility: W,
      bizManagementFetchCart: N,
      bizManagementUpdateCommerceSettings: q,
      bizManagementAppealCollection: U,
      bizManagementEditProduct: V,
      bizManagementAddProduct: H,
      bizManagementDeleteProduct: G,
      bizManagementCreateCatalog: z,
      bizManagementGetProductModelForMyCatalog: j,
    };
    l.default = K;
  },
  98,
);
