__d(
  "WAWebDebugCatalog",
  [
    "WALogger",
    "WAWebApiDirectConnectionKeys",
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
    "WAWebBizRemoveDirectConnectionKeysBridge",
    "WAWebCatalogCollection",
    "WAWebDebugCertificates",
    "WAWebDirectConnectionUtils",
    "WAWebDirectConnectionX509",
    "WAWebProductModel",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $;
    function P() {
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
    P.doc = "Create product catalog";
    function N(e) {
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
    N.doc = "Create catalog product";
    function M(e) {
      o("WAWebApiDirectConnectionKeys")
        .fetchDirectConnectionKeys(e)
        .then(function (e) {
          e != null &&
            o(
              "WAWebApiDirectConnectionKeys",
            ).createOrUpdateDirectConnectionKeys(
              babelHelpers.extends({}, e, {
                cypherExpirationTimestamp: "20011210T101452Z",
              }),
            );
        });
    }
    M.doc =
      'takes the row in `direct_connection_keys` table for the id (string, eg: "16005554444@s.whatsapp.net") passed and expires its cypher';
    function w(e) {
      o("WAWebApiDirectConnectionKeys")
        .fetchDirectConnectionKeys(e)
        .then(function (e) {
          e != null &&
            o("WAWebDirectConnectionX509")
              .extractCertificates(
                o("WAWebDebugCertificates").EXPIRED_SELF_SIGNED,
              )
              .then(function (e) {
                return o("WAWebDirectConnectionX509").encodeToString(e);
              })
              .then(function (t) {
                o(
                  "WAWebApiDirectConnectionKeys",
                ).createOrUpdateDirectConnectionKeys(
                  babelHelpers.extends({}, e, {
                    certificateChain: o(
                      "WAWebDirectConnectionUtils",
                    ).certificateStringToString(t),
                    cypherExpirationTimestamp: "20011210T101452Z",
                  }),
                );
              });
        });
    }
    w.doc =
      'takes the row in `direct_connection_keys` table for the id (string, eg: "16005554444@s.whatsapp.net") passed and expires its certificate';
    function A(e) {
      o("WAWebApiDirectConnectionKeys")
        .fetchDirectConnectionKeys(e)
        .then(function (t) {
          t != null &&
            o(
              "WAWebBizRemoveDirectConnectionKeysBridge",
            ).removeDirectConnectionKeys(o("WAWebWidFactory").createWid(e));
        });
    }
    A.doc =
      "removes postcode and direct connection keys used by JioMart direct connection catalog";
    function F() {
      (o("WAWebUserPrefsGeneral").setPostcodeAutoOpenChangePostcodeDone(!1),
        o("WAWebUserPrefsGeneral").setPostcodeAutoOpenChangePostcodeCount(0));
    }
    F.doc =
      "removes flags and resets count related to auto open change postcode modal";
    function O() {
      var e = o(
          "WAWebUserPrefsGeneral",
        ).getPostcodeAutoOpenChangePostcodeDone(),
        t = o("WAWebUserPrefsGeneral").getPostcodeAutoOpenChangePostcodeCount();
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[direct-conn] postcode auto-open: session=",
            " count=",
            "",
          ])),
        e,
        t,
      );
    }
    O.doc = "print config related to auto open postcode change modal";
    function B() {
      var e = o("WAWebUserPrefsGeneral").getPostcodeTooltipViewCount(),
        t = o("WAWebUserPrefsGeneral").getPostcodeTooltipViewedInSession();
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[direct-conn] postcode tooltip: session=",
            " count=",
            "",
          ])),
        t,
        e,
      );
    }
    B.doc = "prints postcode tooltip view config";
    function W(e) {
      (o("WAWebUserPrefsGeneral").setPostcodeTooltipViewCount(0),
        o("WAWebUserPrefsGeneral").setPostcodeTooltipViewedInSession(!1));
    }
    W.doc =
      "resets view count for postcode tooltip to zero and also resets viewed in session flag";
    function q(e) {
      o("WAWebApiDirectConnectionKeys")
        .fetchDirectConnectionKeys(e)
        .then(function (e) {
          if (e) {
            var t = Object.entries(e),
              n = t.slice(0, 3).map(function (e) {
                var t = e[0],
                  n = e[1];
                return t + ": " + String(n);
              });
            t.length > 0 &&
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[direct-connection] Stored ",
                    " keys => ",
                    "",
                  ])),
                t.length,
                n,
              );
          } else
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[direct-connection] postcode data does not exist",
                ])),
            );
        })
        .catch(function (e) {
          return o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[direct-connection] failed to fetch saved postcode data",
                ])),
            )
            .verbose();
        })
        .finally(function () {
          (B(), O());
        });
    }
    q.doc = "prints direct connection postcode info";
    function U(e) {
      return o("WAWebBizCatalogManagementFetchCatalog")
        .fetchCatalog(e)
        .then(function (e) {
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementFetchCatalog",
              ])),
          );
        });
    }
    U.doc = "Fetch catalog for a business (business context)";
    function V(e) {
      return o("WAWebBizCatalogManagementFetchCollections")
        .fetchCollections(e)
        .then(function (e) {
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementFetchCollections",
              ])),
          );
        });
    }
    V.doc = "Fetch collections for a business (business context)";
    function H(e) {
      return o("WAWebBizCatalogManagementFetchSingleCollection")
        .fetchSingleCollection(e)
        .then(function (e) {
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementFetchSingleCollection",
              ])),
          );
        });
    }
    H.doc = "Fetch a single collection for a business (business context)";
    function G(e) {
      return o("WAWebBizCatalogManagementFetchProductList")
        .fetchProductList(e)
        .then(function (e) {
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementFetchProductList",
              ])),
          );
        });
    }
    G.doc = "Fetch product list for a business (business context)";
    function z(e) {
      return o("WAWebBizGraphQLRefreshCartJob")
        .RefreshCart(e)
        .then(function (e) {
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementFetchCart",
              ])),
          );
        });
    }
    z.doc = "Fetch cart";
    function j(e) {
      return o("WAWebBizCatalogManagementFetchProduct")
        .fetchProduct(e)
        .then(function (e) {
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementFetchProduct",
              ])),
          );
        });
    }
    j.doc = "Fetch a single product for a business (business context)";
    function K(e) {
      return o("WAWebBizCatalogManagementCreateCollection")
        .createCollection(e)
        .then(function (e) {
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementCreateCollection",
              ])),
          );
        });
    }
    K.doc = "Create a collection for a business (business context)";
    function Q(e) {
      return o("WAWebBizCatalogManagementDeleteCollections")
        .deleteCollections(e)
        .then(function (e) {
          o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementDeleteCollections",
              ])),
          );
        });
    }
    Q.doc = "Delete collections for a business (business context)";
    function X(e) {
      return o("WAWebBizCatalogManagementAppealProduct")
        .appealProduct(e)
        .then(function (e) {
          o("WALogger").LOG(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementAppealProduct",
              ])),
          );
        });
    }
    X.doc = "Appeal a product by a business (business context)";
    function Y(e) {
      return o("WAWebBizCatalogManagementUpdateCollectionList")
        .updateCollectionList(e)
        .then(function (e) {
          o("WALogger").LOG(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementUpdateCollectionList",
              ])),
          );
        });
    }
    Y.doc = "Update collection list for a business (business context)";
    function J(e) {
      return o("WAWebBizCatalogManagementUpdateCollection")
        .updateCollection(e)
        .then(function (e) {
          o("WALogger").LOG(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementUpdateCollection",
              ])),
          );
        });
    }
    J.doc = "Update collection list for a business (business context)";
    function Z(e) {
      return o("WAWebBizCatalogManagementUpdateProductVisibility")
        .updateProductVisibility(e)
        .then(function (e) {
          o("WALogger").LOG(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementUpdateProductVisiblity",
              ])),
          );
        });
    }
    Z.doc = "Update product visibility for a business (business context)";
    function ee(e) {
      return o("WAWebBizCatalogManagementUpdateCommerceSettings")
        .updateCommerceSettings(e)
        .then(function (e) {
          o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementUpdateCommerceSettings",
              ])),
          );
        });
    }
    ee.doc = "Update commerce settings for a business (business context)";
    function te(e) {
      return o("WAWebBizCatalogManagementAppealCollection")
        .appealCollection(e)
        .then(function (e) {
          o("WALogger").LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementAppealCollection",
              ])),
          );
        });
    }
    te.doc = "Appeal a collection by a business (business context)";
    function ne(e) {
      return o("WAWebBizCatalogManagementEditProduct")
        .editProduct(e)
        .then(function (e) {
          o("WALogger").LOG(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementEditProduct",
              ])),
          );
        });
    }
    ne.doc = "Edit a product by a business (business context)";
    function re(e) {
      return o("WAWebBizCatalogManagementAddProduct")
        .addProduct(e)
        .then(function (e) {
          o("WALogger").LOG(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementAddProduct",
              ])),
          );
        });
    }
    re.doc = "Add a product by a business (business context)";
    function oe(e) {
      return o("WAWebBizCatalogManagementDeleteProduct")
        .deleteProduct(e)
        .then(function (e) {
          o("WALogger").LOG(
            x ||
              (x = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementDeleteProduct",
              ])),
          );
        });
    }
    oe.doc = "Delete a product by a business (business context)";
    function ae(e) {
      return o("WAWebBizCatalogManagementCreateCatalog")
        .createCatalog(e)
        .then(function (e) {
          o("WALogger").LOG(
            $ ||
              ($ = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizManagementCreateCatalog",
              ])),
          );
        });
    }
    ae.doc = "Create a catalog by a business (business context)";
    function ie(e) {
      var t,
        n = o("WAWebCatalogCollection").CatalogCollection.get(
          o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        );
      return n == null || (t = n.productCollection) == null ? void 0 : t.get(e);
    }
    ie.doc = "Get Product model of a speific product id for own Catalog";
    var le = {
      createProductCatalog: P,
      addCatalogProductMD: N,
      directConnectionExpireCypher: M,
      directConnectionExpireCertificate: w,
      directConnectionRemovePostcodeAndKeys: A,
      resetAutoOpenChangePostcodeConfig: F,
      printAutoOpenChangePostcodeConfig: O,
      resetPostcodeTooltipViewConfig: W,
      printPostcodeInfo: q,
      printPostcodeTooltipViewConfig: B,
      bizManagementFetchCatalog: U,
      bizManagementFetchCollections: V,
      bizManagementFetchSingleCollection: H,
      bizManagementFetchProductList: G,
      bizManagementFetchProduct: j,
      bizManagementCreateCollection: K,
      bizManagementDeleteCollections: Q,
      bizManagementAppealProduct: X,
      bizManagementUpdateCollectionList: Y,
      bizManagementUpdateCollection: J,
      bizManagementUpdateProductVisiblity: Z,
      bizManagementFetchCart: z,
      bizManagementUpdateCommerceSettings: ee,
      bizManagementAppealCollection: te,
      bizManagementEditProduct: ne,
      bizManagementAddProduct: re,
      bizManagementDeleteProduct: oe,
      bizManagementCreateCatalog: ae,
      bizManagementGetProductModelForMyCatalog: ie,
    };
    l.default = le;
  },
  98,
);
