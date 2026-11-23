__d(
  "WAWebBizProductCatalogBridge",
  [
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
      p = (d = r("requireDeferred"))("WAWebBizCatalogAddProductJob").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      _ = d("WAWebBizCatalogAppealProductJob").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      f = d("WAWebBizCatalogDeleteProductsJob").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      g = d("WAWebBizCatalogEditProductJob").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      h = d("WAWebBizCatalogProductVisibilitySetJob").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      y = d("WAWebBizCreateProductCatalogJob").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      C = d("WAWebPersistedJobDefinitions").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      b = d("WAWebPersistedJobManagerWorkerCompatible").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      v = d("WAWebQueryCatalog").__setRef("WAWebBizProductCatalogBridge"),
      S = d("WAWebQueryCatalogHasCategories").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      R = d("WAWebQueryCatalogProduct").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      L = d("WAWebQueryProductListCatalogJob").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      E = d("WAWebReportProductJob").__setRef("WAWebBizProductCatalogBridge"),
      k = (m = r("qpl"))._(774782053, "3437"),
      I = m._(774769273, "3438"),
      T = m._(774769395, "3439"),
      D = m._(774779113, "3440"),
      x = m._(774774122, "3441"),
      $ = m._(774778628, "3442");
    async function P(e, t, n, a, i, l, s, u, c) {
      l === !0 &&
        o("WAWebBizLogQplEvents").qplPointProductView("datasource_start");
      var d = R.load().then(function (r) {
        return r(e, t, n, a, i, s, u, c);
      });
      return (
        d
          .then(function () {
            return (
              l === !0 &&
              o("WAWebBizLogQplEvents").qplPointProductView("datasource_end")
            );
          })
          .catch(r("WAWebNoop")),
        o("WAWebBackendErrors").attachErrorLogger(d, "Query product failed")
      );
    }
    async function N(t, n, r, a, i, l, u, c, d, m) {
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        return Promise.reject(new (o("WAWebBackendErrors").E451)());
      var p = v.load().then(function (e) {
        return e({
          catalogWid: t,
          afterCursor: n,
          limit: r,
          width: a,
          height: i,
          checkmarkCollectionId: l,
          allowShopSource: u,
          variantInfoFields: c,
          variantThumbnailHeight: d,
          variantThumbnailWidth: m,
        });
      });
      return p.catch(function (t) {
        throw t instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
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
                .sendLogs("Query catalog failed, commerce-features-disabled"),
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
    }
    async function M(e, t, n, r, a) {
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        return Promise.reject(new (o("WAWebBackendErrors").E451)());
      a && o("WAWebBizLogQplEvents").qplPointPLMDetailsView("datasource_start");
      var i = await Promise.all([L.load(), C.load(), b.load()]),
        l = i[0].queryProductListCatalog,
        s = i[1].jobSerializers,
        u = i[2].getJobManager,
        c = o("WAWebRestOperations").runRestOperation(
          o("WAWebScheduledOperations").ScheduledOperation.QUERY_PRODUCT_LIST,
          function () {
            return l({
              catalogWid: e.toString(),
              directConnectionEncryptedInfo: void 0,
              height: r,
              productIds: t,
              width: n,
            });
          },
          function () {
            return u().waitUntilCompleted(
              s.queryProductList(e, t, void 0, n, r),
            );
          },
        );
      return (
        c
          .then(function () {
            return (
              a &&
              o("WAWebBizLogQplEvents").qplPointPLMDetailsView("datasource_end")
            );
          })
          .catch(function (e) {
            if (e.errorCode === 451) throw new (o("WAWebBackendErrors").E451)();
          }),
        c
      );
    }
    async function w(e) {
      var t = await S.load(),
        n = t.queryCatalogHasCategories;
      return n({ catalogWid: e });
    }
    async function A(e, t, n) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(k, "datasource_start");
      var a = await E.load(),
        i = a(e, t, n);
      return (
        i
          .then(function () {
            o("WAWebQplFlowWrapper").QPL.markerPoint(k, "datasource_end");
          })
          .catch(r("WAWebNoop")),
        o("WAWebBackendErrors").attachErrorLogger(i, "Report product failed")
      );
    }
    async function F(e, t) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(I, "datasource_start");
      var n = await _.load(),
        a = n.appealProductMD,
        i = a(e, t);
      return (
        i
          .then(function () {
            o("WAWebQplFlowWrapper").QPL.markerPoint(I, "datasource_end");
          })
          .catch(r("WAWebNoop")),
        o("WAWebBackendErrors").attachErrorLogger(i, "Appeal product failed")
      );
    }
    async function O() {
      o("WAWebQplFlowWrapper").QPL.markerPoint(T, "datasource_start");
      var e = await y.load(),
        t = e.createProductCatalog,
        n = t();
      return (
        n
          .then(function () {
            o("WAWebQplFlowWrapper").QPL.markerPoint(T, "datasource_end");
          })
          .catch(r("WAWebNoop")),
        o("WAWebBackendErrors").attachErrorLogger(n, "Create catalog failed")
      );
    }
    async function B(e) {
      var t = e.height,
        n = e.product,
        a = e.width;
      o("WAWebQplFlowWrapper").QPL.markerPoint(D, "datasource_start");
      var i = await p.load(),
        l = i.addProductMD,
        s = l(n, a, t);
      return (
        s
          .then(function () {
            o("WAWebQplFlowWrapper").QPL.markerPoint(D, "datasource_end");
          })
          .catch(r("WAWebNoop")),
        s.then(H).catch(function (e) {
          throw (
            (e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
              e.statusCode === 406) ||
              (e instanceof o("WAWebBackendErrors").CatalogEditServerError &&
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
    }
    async function W(e, t, n) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(D, "datasource_start");
      var a = await g.load(),
        i = a(e, t, n);
      return (
        i
          .then(function (e) {
            o("WAWebQplFlowWrapper").QPL.markerPoint(D, "datasource_end");
          })
          .catch(r("WAWebNoop")),
        i.then(H).catch(function (e) {
          throw (
            (e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
              e.statusCode === 406) ||
              (e instanceof o("WAWebBackendErrors").CatalogEditServerError &&
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
    }
    async function q(e) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(x, "datasource_start");
      var t = await f.load(),
        n = t.deleteProductsMD,
        r = n(e),
        a = r.then(function (e) {
          return (
            o("WAWebQplFlowWrapper").QPL.markerPoint(x, "datasource_end"),
            e
          );
        });
      return o("WAWebBackendErrors").attachErrorLogger(
        a,
        "Delete product failed",
      );
    }
    function U(e) {
      return e == null ? null : parseInt(e, 10);
    }
    function V(e) {
      return e != null && e !== ""
        ? r("WAWeb-moment").utc(e, r("WAWeb-moment").ISO_8601).valueOf()
        : null;
    }
    function H(e, t) {
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
          priceAmount1000: U(e.price),
          salePriceAmount1000: U(e.sale_price),
          salePriceStartDate: V(e.sale_start_date),
          salePriceEndDate: V(e.sale_end_date),
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
        e.compliance_info && (l.complianceInfo = j(e.compliance_info)),
        e.signedShimmedUrl != null && (l.signedShimmedUrl = e.signedShimmedUrl),
        l
      );
    }
    function G(e) {
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
    async function z(e, t) {
      o("WAWebQplFlowWrapper").QPL.markerPoint($, "datasource_start");
      var n = await h.load(),
        a = n(e, t);
      return (
        a
          .then(function () {
            o("WAWebQplFlowWrapper").QPL.markerPoint($, "datasource_end");
          })
          .catch(r("WAWebNoop")),
        o("WAWebBackendErrors").attachErrorLogger(
          a,
          "Product visibility change failed",
        )
      );
    }
    function j(e) {
      var t = { countryCodeOrigin: e.country_code_origin };
      return (
        e.importer_name != null &&
          e.importer_name !== "" &&
          (t.importerName = e.importer_name),
        e.importer_address && (t.importerAddress = K(e.importer_address)),
        t
      );
    }
    function K(e) {
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
    ((l.queryProduct = P),
      (l.queryCatalog = N),
      (l.queryProductList = M),
      (l.queryCatalogHasCategories = w),
      (l.reportProduct = A),
      (l.appealProduct = F),
      (l.createCatalog = O),
      (l.addProduct = B),
      (l.editProduct = W),
      (l.deleteProducts = q),
      (l.parseDateValue = V),
      (l.mapProductResponseToModel = H),
      (l.mapMsgToProductModel = G),
      (l.productVisibilitySet = z));
  },
  98,
);
