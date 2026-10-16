__d(
  "WAWebBizProductCatalogBridge",
  [
    "Promise",
    "WALogger",
    "WAWeb-moment",
    "WAWebBackendErrors",
    "WAWebBizCatalogAddProductJob",
    "WAWebBizCatalogAppealProductJob",
    "WAWebBizCatalogDeleteProductsJob",
    "WAWebBizCatalogEditProductJob",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogProductVisibilitySetJob",
    "WAWebBizCreateProductCatalogJob",
    "WAWebBizLogQplEvents",
    "WAWebNoop",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebProductTypes",
    "WAWebQplFlowWrapper",
    "WAWebQueryCatalogHasCategories",
    "WAWebQueryProductListCatalogJob",
    "WAWebReportProductJob",
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
      p = r("requireDeferred")("WAWebQueryCatalog").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      _ = r("requireDeferred")("WAWebQueryCatalogProduct").__setRef(
        "WAWebBizProductCatalogBridge",
      ),
      f = (m = r("qpl"))._(774782053, "3437"),
      g = m._(774769273, "3438"),
      h = m._(774769395, "3439"),
      y = m._(774779113, "3440"),
      C = m._(774774122, "3441"),
      b = m._(774778628, "3442");
    function v(e, t, n, a, i, l, s, u, c) {
      l === !0 &&
        o("WAWebBizLogQplEvents").qplPointProductView("datasource_start");
      var d = _.load().then(function (r) {
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
    function S(t, r, a, i, l, u, c, m, _, f) {
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        return (d || (d = n("Promise"))).reject(
          new (o("WAWebBackendErrors").E451)(),
        );
      var g = p.load().then(function (e) {
        return e({
          catalogWid: t,
          afterCursor: r,
          limit: a,
          width: i,
          height: l,
          checkmarkCollectionId: u,
          allowShopSource: c,
          variantInfoFields: m,
          variantThumbnailHeight: _,
          variantThumbnailWidth: f,
        });
      });
      return g.catch(function (t) {
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
    function R(e, t, r, a, i) {
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        return (d || (d = n("Promise"))).reject(
          new (o("WAWebBackendErrors").E451)(),
        );
      i && o("WAWebBizLogQplEvents").qplPointPLMDetailsView("datasource_start");
      var l = o("WAWebRestOperations").runRestOperation(
        o("WAWebScheduledOperations").ScheduledOperation.QUERY_PRODUCT_LIST,
        function () {
          return o("WAWebQueryProductListCatalogJob").queryProductListCatalog({
            catalogWid: e.toString(),
            directConnectionEncryptedInfo: void 0,
            height: a,
            productIds: t,
            width: r,
          });
        },
        function () {
          return o("WAWebPersistedJobManagerWorkerCompatible")
            .getJobManager()
            .waitUntilCompleted(
              o("WAWebPersistedJobDefinitions").jobSerializers.queryProductList(
                e,
                t,
                void 0,
                r,
                a,
              ),
            );
        },
      );
      return (
        l
          .then(function () {
            return (
              i &&
              o("WAWebBizLogQplEvents").qplPointPLMDetailsView("datasource_end")
            );
          })
          .catch(function (e) {
            if (e.errorCode === 451) throw new (o("WAWebBackendErrors").E451)();
          }),
        l
      );
    }
    function L(e) {
      return o("WAWebQueryCatalogHasCategories").queryCatalogHasCategories({
        catalogWid: e,
      });
    }
    function E(e, t, n) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(f, "datasource_start");
      var a = r("WAWebReportProductJob")(e, t, n);
      return (
        a
          .then(function () {
            o("WAWebQplFlowWrapper").QPL.markerPoint(f, "datasource_end");
          })
          .catch(r("WAWebNoop")),
        o("WAWebBackendErrors").attachErrorLogger(a, "Report product failed")
      );
    }
    function k(e, t) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(g, "datasource_start");
      var n = o("WAWebBizCatalogAppealProductJob").appealProductMD(e, t);
      return (
        n
          .then(function () {
            o("WAWebQplFlowWrapper").QPL.markerPoint(g, "datasource_end");
          })
          .catch(r("WAWebNoop")),
        o("WAWebBackendErrors").attachErrorLogger(n, "Appeal product failed")
      );
    }
    function I() {
      o("WAWebQplFlowWrapper").QPL.markerPoint(h, "datasource_start");
      var e = o("WAWebBizCreateProductCatalogJob").createProductCatalog();
      return (
        e
          .then(function () {
            o("WAWebQplFlowWrapper").QPL.markerPoint(h, "datasource_end");
          })
          .catch(r("WAWebNoop")),
        o("WAWebBackendErrors").attachErrorLogger(e, "Create catalog failed")
      );
    }
    function T(e) {
      var t = e.height,
        n = e.product,
        a = e.width;
      o("WAWebQplFlowWrapper").QPL.markerPoint(y, "datasource_start");
      var i = o("WAWebBizCatalogAddProductJob").addProductMD(n, a, t);
      return (
        i
          .then(function () {
            o("WAWebQplFlowWrapper").QPL.markerPoint(y, "datasource_end");
          })
          .catch(r("WAWebNoop")),
        i.then(N).catch(function (e) {
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
    function D(e, t, n) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(y, "datasource_start");
      var a = r("WAWebBizCatalogEditProductJob")(e, t, n);
      return (
        a
          .then(function (e) {
            o("WAWebQplFlowWrapper").QPL.markerPoint(y, "datasource_end");
          })
          .catch(r("WAWebNoop")),
        a.then(N).catch(function (e) {
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
    function x(e) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(C, "datasource_start");
      var t = o("WAWebBizCatalogDeleteProductsJob").deleteProductsMD(e),
        n = t.then(function (e) {
          return (
            o("WAWebQplFlowWrapper").QPL.markerPoint(C, "datasource_end"),
            e
          );
        });
      return o("WAWebBackendErrors").attachErrorLogger(
        n,
        "Delete product failed",
      );
    }
    function $(e) {
      return e == null ? null : parseInt(e, 10);
    }
    function P(e) {
      return e != null && e !== ""
        ? r("WAWeb-moment").utc(e, r("WAWeb-moment").ISO_8601).valueOf()
        : null;
    }
    function N(e, t) {
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
          priceAmount1000: $(e.price),
          salePriceAmount1000: $(e.sale_price),
          salePriceStartDate: P(e.sale_start_date),
          salePriceEndDate: P(e.sale_end_date),
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
        e.compliance_info && (l.complianceInfo = A(e.compliance_info)),
        e.signedShimmedUrl != null && (l.signedShimmedUrl = e.signedShimmedUrl),
        l
      );
    }
    function M(e) {
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
    function w(e, t) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(b, "datasource_start");
      var n = r("WAWebBizCatalogProductVisibilitySetJob")(e, t);
      return (
        n
          .then(function () {
            o("WAWebQplFlowWrapper").QPL.markerPoint(b, "datasource_end");
          })
          .catch(r("WAWebNoop")),
        o("WAWebBackendErrors").attachErrorLogger(
          n,
          "Product visibility change failed",
        )
      );
    }
    function A(e) {
      var t = { countryCodeOrigin: e.country_code_origin };
      return (
        e.importer_name != null &&
          e.importer_name !== "" &&
          (t.importerName = e.importer_name),
        e.importer_address && (t.importerAddress = F(e.importer_address)),
        t
      );
    }
    function F(e) {
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
    ((l.queryProduct = v),
      (l.queryCatalog = S),
      (l.queryProductList = R),
      (l.queryCatalogHasCategories = L),
      (l.reportProduct = E),
      (l.appealProduct = k),
      (l.createCatalog = I),
      (l.addProduct = T),
      (l.editProduct = D),
      (l.deleteProducts = x),
      (l.parseDateValue = P),
      (l.mapProductResponseToModel = N),
      (l.mapMsgToProductModel = M),
      (l.productVisibilitySet = w));
  },
  98,
);
