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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k;
    function I() {
      return o("WAWebBizCreateProductCatalogJob")
        .createProductCatalog()
        .then(function (t) {
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "debug:createProductCatalog",
                ])),
            ),
            t
          );
        });
    }
    I.doc = "Create product catalog";
    function T(e) {
      var t = e.currency,
        n = e.height,
        r = e.imageUrl,
        a = e.name,
        i = e.price,
        l = e.width,
        u = r != null ? r : "https://dummyimage.com/100x100/1ab029/ffffff",
        c = new (o("WAWebProductModel").Product)({
          name: a,
          imageCdnUrl: u,
          priceAmount1000: i != null ? i : void 0,
          currency: t,
        });
      return o("WAWebBizCatalogAddProductJob")
        .addProductMD(c, l != null ? l : 100, n != null ? n : 100)
        .then(function (e) {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "debug:addCatalogProductMD",
              ])),
          );
        });
    }
    T.doc = "Create catalog product";
    function D(e) {
      return o("WAWebBizCatalogManagementFetchCatalog")
        .fetchCatalog(e)
        .then(function (e) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementFetchCatalog",
              ])),
          );
        });
    }
    D.doc = "Fetch catalog for a business (business context)";
    function x(e) {
      return o("WAWebBizCatalogManagementFetchCollections")
        .fetchCollections(e)
        .then(function (e) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementFetchCollections",
              ])),
          );
        });
    }
    x.doc = "Fetch collections for a business (business context)";
    function $(e) {
      return o("WAWebBizCatalogManagementFetchSingleCollection")
        .fetchSingleCollection(e)
        .then(function (e) {
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementFetchSingleCollection",
              ])),
          );
        });
    }
    $.doc = "Fetch a single collection for a business (business context)";
    function P(e) {
      return o("WAWebBizCatalogManagementFetchProductList")
        .fetchProductList(e)
        .then(function (e) {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementFetchProductList",
              ])),
          );
        });
    }
    P.doc = "Fetch product list for a business (business context)";
    function N(e) {
      return o("WAWebBizGraphQLRefreshCartJob")
        .RefreshCart(e)
        .then(function (e) {
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementFetchCart",
              ])),
          );
        });
    }
    N.doc = "Fetch cart";
    function M(e) {
      return o("WAWebBizCatalogManagementFetchProduct")
        .fetchProduct(e)
        .then(function (e) {
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementFetchProduct",
              ])),
          );
        });
    }
    M.doc = "Fetch a single product for a business (business context)";
    function w(e) {
      return o("WAWebBizCatalogManagementCreateCollection")
        .createCollection(e)
        .then(function (e) {
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementCreateCollection",
              ])),
          );
        });
    }
    w.doc = "Create a collection for a business (business context)";
    function A(e) {
      return o("WAWebBizCatalogManagementDeleteCollections")
        .deleteCollections(e)
        .then(function (e) {
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementDeleteCollections",
              ])),
          );
        });
    }
    A.doc = "Delete collections for a business (business context)";
    function F(e) {
      return o("WAWebBizCatalogManagementAppealProduct")
        .appealProduct(e)
        .then(function (e) {
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementAppealProduct",
              ])),
          );
        });
    }
    F.doc = "Appeal a product by a business (business context)";
    function O(e) {
      return o("WAWebBizCatalogManagementUpdateCollectionList")
        .updateCollectionList(e)
        .then(function (e) {
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementUpdateCollectionList",
              ])),
          );
        });
    }
    O.doc = "Update collection list for a business (business context)";
    function B(e) {
      return o("WAWebBizCatalogManagementUpdateCollection")
        .updateCollection(e)
        .then(function (e) {
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementUpdateCollection",
              ])),
          );
        });
    }
    B.doc = "Update collection list for a business (business context)";
    function W(e) {
      return o("WAWebBizCatalogManagementUpdateProductVisibility")
        .updateProductVisibility(e)
        .then(function (e) {
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementUpdateProductVisibility",
              ])),
          );
        });
    }
    W.doc = "Update product visibility for a business (business context)";
    function q(e) {
      return o("WAWebBizCatalogManagementUpdateCommerceSettings")
        .updateCommerceSettings(e)
        .then(function (e) {
          o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementUpdateCommerceSettings",
              ])),
          );
        });
    }
    q.doc = "Update commerce settings for a business (business context)";
    function U(e) {
      return o("WAWebBizCatalogManagementAppealCollection")
        .appealCollection(e)
        .then(function (e) {
          o("WALogger").LOG(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementAppealCollection",
              ])),
          );
        });
    }
    U.doc = "Appeal a collection by a business (business context)";
    function V(e) {
      return o("WAWebBizCatalogManagementEditProduct")
        .editProduct(e)
        .then(function (e) {
          o("WALogger").LOG(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementEditProduct",
              ])),
          );
        });
    }
    V.doc = "Edit a product by a business (business context)";
    function H(e) {
      return o("WAWebBizCatalogManagementAddProduct")
        .addProduct(e)
        .then(function (e) {
          o("WALogger").LOG(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementAddProduct",
              ])),
          );
        });
    }
    H.doc = "Add a product by a business (business context)";
    function G(e) {
      return o("WAWebBizCatalogManagementDeleteProduct")
        .deleteProduct(e)
        .then(function (e) {
          o("WALogger").LOG(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementDeleteProduct",
              ])),
          );
        });
    }
    G.doc = "Delete a product by a business (business context)";
    function z(e) {
      return o("WAWebBizCatalogManagementCreateCatalog")
        .createCatalog(e)
        .then(function (e) {
          o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementCreateCatalog",
              ])),
          );
        });
    }
    z.doc = "Create a catalog by a business (business context)";
    function j(e) {
      var t,
        n = o("WAWebCatalogCollection").CatalogCollection.get(
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
