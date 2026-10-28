__d(
  "WAWebBizProductCatalogBridge",
  [
    "Promise",
    "WALogger",
    "WAWeb-moment",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizLogQplEvents",
    "WAWebNoop",
    "WAWebProductTypes",
    "WAWebQplFlowWrapper",
    "WAWebRestOperations",
    "WAWebScheduledOperations",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "qpl",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = (m = r("requireDeferred"))("WAWebBizCatalogAddProductJob").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      f = m("WAWebBizCatalogAppealProductJob").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      g = m("WAWebBizCatalogDeleteProductsJob").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      h = m("WAWebBizCatalogEditProductJob").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      y = m("WAWebBizCatalogProductVisibilitySetJob").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      C = m("WAWebBizCreateProductCatalogJob").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      b = m("WAWebPersistedJobDefinitions").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      v = m("WAWebPersistedJobManagerWorkerCompatible").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      S = m("WAWebQueryCatalog").__setRef("WAWebBizProductCatalogBridge"),
      R = m("WAWebQueryCatalogHasCategories").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      L = m("WAWebQueryCatalogProduct").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      E = m("WAWebQueryProductListCatalogJob").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      k = m("WAWebReportProductJob").__setRef("WAWebBizProductCatalogBridge"),
      I = (p = r("qpl"))._(774782053, "3437"),
      T = p._(774769273, "3438"),
      D = p._(774769395, "3439"),
      x = p._(774779113, "3440"),
      $ = p._(774774122, "3441"),
      P = p._(774778628, "3442");
    function N(e, t, n, r, o, a, i, l, s) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s, u, c) {
            l === !0 &&
              o("WAWebBizLogQplEvents").qplPointProductView("datasource_start");
            var d = L.load().then(function (r) {
              return r(e, t, n, a, i, s, u, c);
            });
            return (
              d
                .then(function () {
                  return (
                    l === !0 &&
                    o("WAWebBizLogQplEvents").qplPointProductView(
                      "datasource_end",
                    )
                  );
                })
                .catch(r("WAWebNoop")),
              o("WAWebBackendErrors").attachErrorLogger(
                d,
                "Query product failed",
              )
            );
          },
        )),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n, r, o, a, i, l, s, u) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i, l, u, c, m, p, _) {
            if (
              o(
                "WAWebBizCatalogGatingUtils",
              ).commerceFeaturesDisabledBySanctions()
            )
              return (d || (d = n("Promise"))).reject(
                new (o("WAWebBackendErrors").E451)(),
              );
            var f = S.load().then(function (e) {
              return e({
                catalogWid: t,
                afterCursor: r,
                limit: a,
                width: i,
                height: l,
                checkmarkCollectionId: u,
                allowShopSource: c,
                variantInfoFields: m,
                variantThumbnailHeight: p,
                variantThumbnailWidth: _,
              });
            });
            return f.catch(function (t) {
              throw t instanceof
                o("WAWebBackendErrors").ServerStatusCodeError &&
                t.statusCode === 404
                ? t
                : t.errorCode === 451
                  ? (o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Query catalog failed, error: 451",
                          ])),
                      )
                      .verbose()
                      .sendLogs(
                        "Query catalog failed, commerce-features-disabled",
                      ),
                    new (o("WAWebBackendErrors").E451)())
                  : (o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Query catalog failed, error: ",
                            "",
                          ])),
                        t,
                      )
                      .verbose()
                      .sendLogs("Query catalog failed"),
                    t);
            });
          },
        )),
        A.apply(this, arguments)
      );
    }
    function F(e, t, n, r, o) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a, i) {
            if (
              o(
                "WAWebBizCatalogGatingUtils",
              ).commerceFeaturesDisabledBySanctions()
            )
              return (d || (d = n("Promise"))).reject(
                new (o("WAWebBackendErrors").E451)(),
              );
            i &&
              o("WAWebBizLogQplEvents").qplPointPLMDetailsView(
                "datasource_start",
              );
            var l = yield (d || (d = n("Promise"))).all([
                E.load(),
                b.load(),
                v.load(),
              ]),
              s = l[0].queryProductListCatalog,
              u = l[1].jobSerializers,
              c = l[2].getJobManager,
              m = o("WAWebRestOperations").runRestOperation(
                o("WAWebScheduledOperations").ScheduledOperation
                  .QUERY_PRODUCT_LIST,
                function () {
                  return s({
                    catalogWid: e.toString(),
                    directConnectionEncryptedInfo: void 0,
                    height: a,
                    productIds: t,
                    width: r,
                  });
                },
                function () {
                  return c().waitUntilCompleted(
                    u.queryProductList(e, t, void 0, r, a),
                  );
                },
              );
            return (
              m
                .then(function () {
                  return (
                    i &&
                    o("WAWebBizLogQplEvents").qplPointPLMDetailsView(
                      "datasource_end",
                    )
                  );
                })
                .catch(function (e) {
                  if (e.errorCode === 451)
                    throw new (o("WAWebBackendErrors").E451)();
                }),
              m
            );
          },
        )),
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield R.load(),
            n = t.queryCatalogHasCategories;
          return n({ catalogWid: e });
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t, n) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          o("WAWebQplFlowWrapper").QPL.markerPoint(I, "datasource_start");
          var a = yield k.load(),
            i = a(e, t, n);
          return (
            i
              .then(function () {
                o("WAWebQplFlowWrapper").QPL.markerPoint(I, "datasource_end");
              })
              .catch(r("WAWebNoop")),
            o("WAWebBackendErrors").attachErrorLogger(
              i,
              "Report product failed",
            )
          );
        })),
        U.apply(this, arguments)
      );
    }
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WAWebQplFlowWrapper").QPL.markerPoint(T, "datasource_start");
          var n = yield f.load(),
            a = n.appealProductMD,
            i = a(e, t);
          return (
            i
              .then(function () {
                o("WAWebQplFlowWrapper").QPL.markerPoint(T, "datasource_end");
              })
              .catch(r("WAWebNoop")),
            o("WAWebBackendErrors").attachErrorLogger(
              i,
              "Appeal product failed",
            )
          );
        })),
        H.apply(this, arguments)
      );
    }
    function G() {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebQplFlowWrapper").QPL.markerPoint(D, "datasource_start");
          var e = yield C.load(),
            t = e.createProductCatalog,
            n = t();
          return (
            n
              .then(function () {
                o("WAWebQplFlowWrapper").QPL.markerPoint(D, "datasource_end");
              })
              .catch(r("WAWebNoop")),
            o("WAWebBackendErrors").attachErrorLogger(
              n,
              "Create catalog failed",
            )
          );
        })),
        z.apply(this, arguments)
      );
    }
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.height,
            n = e.product,
            a = e.width;
          o("WAWebQplFlowWrapper").QPL.markerPoint(x, "datasource_start");
          var i = yield _.load(),
            l = i.addProductMD,
            s = l(n, a, t);
          return (
            s
              .then(function () {
                o("WAWebQplFlowWrapper").QPL.markerPoint(x, "datasource_end");
              })
              .catch(r("WAWebNoop")),
            s.then(te).catch(function (e) {
              throw (
                (e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
                  e.statusCode === 406) ||
                  (e instanceof
                    o("WAWebBackendErrors").CatalogEditServerError &&
                    e.statusCode === 406) ||
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "Add product failed, error: ",
                          "",
                        ])),
                      e,
                    )
                    .verbose()
                    .sendLogs("Add product failed"),
                e
              );
            })
          );
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e, t, n) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          o("WAWebQplFlowWrapper").QPL.markerPoint(x, "datasource_start");
          var a = yield h.load(),
            i = a(e, t, n);
          return (
            i
              .then(function (e) {
                o("WAWebQplFlowWrapper").QPL.markerPoint(x, "datasource_end");
              })
              .catch(r("WAWebNoop")),
            i.then(te).catch(function (e) {
              throw (
                (e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
                  e.statusCode === 406) ||
                  (e instanceof
                    o("WAWebBackendErrors").CatalogEditServerError &&
                    e.statusCode === 406) ||
                  o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "Edit product failed, error: ",
                          "",
                        ])),
                      e,
                    )
                    .verbose()
                    .sendLogs("Edit product failed"),
                e
              );
            })
          );
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebQplFlowWrapper").QPL.markerPoint($, "datasource_start");
          var t = yield g.load(),
            n = t.deleteProductsMD,
            r = n(e),
            a = r.then(function (e) {
              return (
                o("WAWebQplFlowWrapper").QPL.markerPoint($, "datasource_end"),
                e
              );
            });
          return o("WAWebBackendErrors").attachErrorLogger(
            a,
            "Delete product failed",
          );
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e) {
      return e == null ? null : parseInt(e, 10);
    }
    function ee(e) {
      return e != null && e !== ""
        ? r("WAWeb-moment").utc(e, r("WAWeb-moment").ISO_8601).valueOf()
        : null;
    }
    function te(e, t) {
      var n,
        r,
        a,
        i =
          ((n = e.capability_to_review_status[0]) == null ? void 0 : n.value) ||
          "APPROVED",
        l = {
          catalogWid: t,
          id: e.id,
          isHidden: e.is_hidden || !1,
          isSanctioned: e.is_sanctioned || !1,
          url: e.url || "",
          name: e.name,
          description: e.description || "",
          availability:
            (r = o("WAWebProductTypes").ProductAvailability.cast(
              e.availability,
            )) != null
              ? r
              : o("WAWebProductTypes").ProductAvailability.UNKNOWN,
          maxAvailable: e.max_available,
          additionalImageCdnUrl: e.additional_image_cdn_urls.map(function (e) {
            return e[1].value;
          }),
          additionalImageHashes: e.image_hashes_for_whatsapp.slice(1),
          imageCdnUrl: e.image_cdn_urls[1].value,
          imageHash: e.image_hashes_for_whatsapp[0],
          reviewStatus: i,
          currency: e.currency,
          priceAmount1000: Z(e.price),
          salePriceAmount1000: Z(e.sale_price),
          salePriceStartDate: ee(e.sale_start_date),
          salePriceEndDate: ee(e.sale_end_date),
          retailerId: e.retailer_id || "",
          productMsgMediaData: null,
          imageCount: e.additional_image_cdn_urls.length + 1,
          fetchedFromServer: !0,
          videos:
            (a = e.videos) == null
              ? void 0
              : a.map(function (e) {
                  return {
                    thumbnail_url: e.thumbnail_url,
                    original_video_url: e.original_video_url,
                    id: e.id,
                  };
                }),
          t: Date.now() / 1e3,
          old: !1,
          canAppeal: e.whatsapp_product_can_appeal,
          checkmark: e.checkmark,
          importerInformationExempt: !!e.importer_information_exempt,
          variantInfo: e.variant_info,
          displayPriority: 0,
        };
      return (
        e.compliance_info && (l.complianceInfo = ae(e.compliance_info)),
        e.signedShimmedUrl != null && (l.signedShimmedUrl = e.signedShimmedUrl),
        l
      );
    }
    function ne(e) {
      var t;
      return (
        e.businessOwnerJid != null &&
          e.businessOwnerJid !== "" &&
          (t = o("WAWebWidFactory").createWid(e.businessOwnerJid)),
        {
          catalogWid: t,
          id: e.productId || "",
          url: e.url,
          name: e.title,
          description: e.description,
          imageCdnUrl: e.mediaData.renderableUrl,
          reviewStatus: "",
          currency: e.currencyCode,
          priceAmount1000: e.priceAmount1000,
          salePriceAmount1000: e.salePriceAmount1000,
          retailerId: e.retailerId,
          productMsgMediaData: e.mediaData,
          imageCount:
            e.productImageCount != null && e.productImageCount !== 0
              ? e.productImageCount
              : 1,
          fetchedFromServer: !1,
          t: e.t,
          isHidden: !1,
        }
      );
    }
    function re(e, t) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WAWebQplFlowWrapper").QPL.markerPoint(P, "datasource_start");
          var n = yield y.load(),
            a = n(e, t);
          return (
            a
              .then(function () {
                o("WAWebQplFlowWrapper").QPL.markerPoint(P, "datasource_end");
              })
              .catch(r("WAWebNoop")),
            o("WAWebBackendErrors").attachErrorLogger(
              a,
              "Product visibility change failed",
            )
          );
        })),
        oe.apply(this, arguments)
      );
    }
    function ae(e) {
      var t = { countryCodeOrigin: e.country_code_origin };
      return (
        e.importer_name != null &&
          e.importer_name !== "" &&
          (t.importerName = e.importer_name),
        e.importer_address && (t.importerAddress = ie(e.importer_address)),
        t
      );
    }
    function ie(e) {
      var t = { street1: e.street1, city: e.city, countryCode: e.country_code };
      return (
        e.street2 != null && e.street2 !== "" && (t.street2 = e.street2),
        e.postal_code != null &&
          e.postal_code !== "" &&
          (t.postalCode = e.postal_code),
        e.region != null && e.region !== "null" && (t.region = e.region),
        e.country_code && (t.countryCode = e.country_code),
        t
      );
    }
    ((l.queryProduct = N),
      (l.queryCatalog = w),
      (l.queryProductList = F),
      (l.queryCatalogHasCategories = B),
      (l.reportProduct = q),
      (l.appealProduct = V),
      (l.createCatalog = G),
      (l.addProduct = j),
      (l.editProduct = Q),
      (l.deleteProducts = Y),
      (l.parseDateValue = ee),
      (l.mapProductResponseToModel = te),
      (l.mapMsgToProductModel = ne),
      (l.productVisibilitySet = re));
  },
  98,
);
