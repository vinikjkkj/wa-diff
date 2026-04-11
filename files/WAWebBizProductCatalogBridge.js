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
    "WAWebBizCatalogProductVisibilitySetJob",
    "WAWebBizCreateProductCatalogJob",
    "WAWebBizGatingUtils",
    "WAWebBizLogQplEvents",
    "WAWebBusinessDirectConnectionBridge",
    "WAWebNoop",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebProductTypes.flow",
    "WAWebQplFlowWrapper",
    "WAWebQueryCatalog",
    "WAWebQueryCatalogHasCategories",
    "WAWebQueryCatalogProduct",
    "WAWebReportProductJob",
    "WAWebWidFactory",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (m = r("qpl"))._(774782053, "3437"),
      _ = m._(774769273, "3438"),
      f = m._(774769395, "3439"),
      g = m._(774779113, "3440"),
      h = m._(774774122, "3441"),
      y = m._(774778628, "3442");
    function C(e, t, n, a, i, l, s, u, c) {
      l === !0 &&
        o("WAWebBizLogQplEvents").qplPointProductView("datasource_start");
      var d = o(
        "WAWebBusinessDirectConnectionBridge",
      ).attemptWithDirectConnectionRetry(e, function (o) {
        return r("WAWebQueryCatalogProduct")(e, t, n, a, i, o, s, u, c);
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
    function b(t, a, i, l, u, c, m, p, _, f) {
      if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
        return (d || (d = n("Promise"))).reject(
          new (o("WAWebBackendErrors").E451)(),
        );
      var g = o(
        "WAWebBusinessDirectConnectionBridge",
      ).attemptWithDirectConnectionRetry(t, function (e) {
        return r("WAWebQueryCatalog")({
          catalogWid: t,
          afterCursor: a,
          limit: i,
          width: l,
          height: u,
          checkmarkCollectionId: c,
          allowShopSource: m,
          directConnectionEncryptedInfo: e,
          variantInfoFields: p,
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
    function v(e, t, r, a, i) {
      if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
        return (d || (d = n("Promise"))).reject(
          new (o("WAWebBackendErrors").E451)(),
        );
      i && o("WAWebBizLogQplEvents").qplPointPLMDetailsView("datasource_start");
      var l = o(
        "WAWebBusinessDirectConnectionBridge",
      ).attemptWithDirectConnectionRetry(e, function (n) {
        return o("WAWebPersistedJobManagerWorkerCompatible")
          .getJobManager()
          .waitUntilCompleted(
            o("WAWebPersistedJobDefinitions").jobSerializers.queryProductList(
              e,
              t,
              n,
              r,
              a,
            ),
          );
      });
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
    function S(e) {
      return o(
        "WAWebBusinessDirectConnectionBridge",
      ).attemptWithDirectConnectionRetry(e, function (t) {
        return o("WAWebQueryCatalogHasCategories").queryCatalogHasCategories({
          catalogWid: e,
          directConnectionEncryptedInfo: t,
        });
      });
    }
    function R(e, t, n) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(p, "datasource_start");
      var a = r("WAWebReportProductJob")(e, t, n);
      return (
        a
          .then(function () {
            o("WAWebQplFlowWrapper").QPL.markerPoint(p, "datasource_end");
          })
          .catch(r("WAWebNoop")),
        o("WAWebBackendErrors").attachErrorLogger(a, "Report product failed")
      );
    }
    function L(e, t) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(_, "datasource_start");
      var n = o("WAWebBizCatalogAppealProductJob").appealProductMD(e, t);
      return (
        n
          .then(function () {
            o("WAWebQplFlowWrapper").QPL.markerPoint(_, "datasource_end");
          })
          .catch(r("WAWebNoop")),
        o("WAWebBackendErrors").attachErrorLogger(n, "Appeal product failed")
      );
    }
    function E() {
      o("WAWebQplFlowWrapper").QPL.markerPoint(f, "datasource_start");
      var e = o("WAWebBizCreateProductCatalogJob").createProductCatalog();
      return (
        e
          .then(function () {
            o("WAWebQplFlowWrapper").QPL.markerPoint(f, "datasource_end");
          })
          .catch(r("WAWebNoop")),
        o("WAWebBackendErrors").attachErrorLogger(e, "Create catalog failed")
      );
    }
    function k(e, t, n) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(g, "datasource_start");
      var a = o("WAWebBizCatalogAddProductJob").addProductMD(e, t, n);
      return (
        a
          .then(function () {
            o("WAWebQplFlowWrapper").QPL.markerPoint(g, "datasource_end");
          })
          .catch(r("WAWebNoop")),
        a.then($).catch(function (e) {
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
    function I(e, t, n) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(g, "datasource_start");
      var a = r("WAWebBizCatalogEditProductJob")(e, t, n);
      return (
        a
          .then(function (e) {
            o("WAWebQplFlowWrapper").QPL.markerPoint(g, "datasource_end");
          })
          .catch(r("WAWebNoop")),
        a.then($).catch(function (e) {
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
    function T(e) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(h, "datasource_start");
      var t = o("WAWebBizCatalogDeleteProductsJob").deleteProductsMD(e),
        n = t.then(function (e) {
          return (
            o("WAWebQplFlowWrapper").QPL.markerPoint(h, "datasource_end"),
            e
          );
        });
      return o("WAWebBackendErrors").attachErrorLogger(
        n,
        "Delete product failed",
      );
    }
    function D(e) {
      return e == null ? null : parseInt(e, 10);
    }
    function x(e) {
      return e != null && e !== ""
        ? r("WAWeb-moment").utc(e, r("WAWeb-moment").ISO_8601).valueOf()
        : null;
    }
    function $(e, t) {
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
            (r = o("WAWebProductTypes.flow").ProductAvailability.cast(
              e.availability,
            )) != null
              ? r
              : o("WAWebProductTypes.flow").ProductAvailability.UNKNOWN,
          maxAvailable: e.max_available,
          additionalImageCdnUrl: e.additional_image_cdn_urls.map(function (e) {
            return e[1].value;
          }),
          additionalImageHashes: e.image_hashes_for_whatsapp.slice(1),
          imageCdnUrl: e.image_cdn_urls[1].value,
          imageHash: e.image_hashes_for_whatsapp[0],
          reviewStatus: i,
          currency: e.currency,
          priceAmount1000: D(e.price),
          salePriceAmount1000: D(e.sale_price),
          salePriceStartDate: x(e.sale_start_date),
          salePriceEndDate: x(e.sale_end_date),
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
        e.compliance_info && (l.complianceInfo = M(e.compliance_info)),
        e.signedShimmedUrl != null && (l.signedShimmedUrl = e.signedShimmedUrl),
        l
      );
    }
    function P(e) {
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
    function N(e, t) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(y, "datasource_start");
      var n = r("WAWebBizCatalogProductVisibilitySetJob")(e, t);
      return (
        n
          .then(function () {
            o("WAWebQplFlowWrapper").QPL.markerPoint(y, "datasource_end");
          })
          .catch(r("WAWebNoop")),
        o("WAWebBackendErrors").attachErrorLogger(
          n,
          "Product visibility change failed",
        )
      );
    }
    function M(e) {
      var t = { countryCodeOrigin: e.country_code_origin };
      return (
        e.importer_name != null &&
          e.importer_name !== "" &&
          (t.importerName = e.importer_name),
        e.importer_address && (t.importerAddress = w(e.importer_address)),
        t
      );
    }
    function w(e) {
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
    ((l.queryProduct = C),
      (l.queryCatalog = b),
      (l.queryProductList = v),
      (l.queryCatalogHasCategories = S),
      (l.reportProduct = R),
      (l.appealProduct = L),
      (l.createCatalog = E),
      (l.addProduct = k),
      (l.editProduct = I),
      (l.deleteProducts = T),
      (l.parseDateValue = x),
      (l.mapProductResponseToModel = $),
      (l.mapMsgToProductModel = P),
      (l.productVisibilitySet = N));
  },
  98,
);
