__d(
  "WAWebManageEditProductDrawerSaveHandlers",
  [
    "fbt",
    "WAWebBackendErrors",
    "WAWebBizGatingUtils",
    "WAWebBizProductCatalogBridge",
    "WAWebDrawerManager",
    "WAWebManageActions",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogLogEvents",
    "WAWebQplFlowWrapper",
    "WAWebQplQuickPerformanceLoggerMarkerIds",
    "WAWebToast.react",
    "WAWebToastManager",
    "qpl",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("qpl")._(774779113, "3440"),
      d = r("qpl")._(774778628, "3442");
    function m(e) {
      var t = e.context,
        n = e.e,
        r = e.markerId,
        a = e.newProduct,
        i = e.product,
        l = e.setImageError,
        m = e.setRetailerIdError;
      a
        ? o("WAWebProductCatalogLogEvents").logAddProductFailed(
            o("WAWebProductCatalogContext").getProductCatalogContext(t),
            n.statusCode,
          )
        : o("WAWebProductCatalogLogEvents").logEditProductFailed(
            i,
            o("WAWebProductCatalogContext").getProductCatalogContext(t),
            n.statusCode,
          );
      var p = s._(/*BTDS*/ "Failed to save changes");
      if (
        n instanceof o("WAWebBackendErrors").CatalogEditServerError &&
        n.errors != null
      ) {
        if (
          n.errors.some(function (e) {
            return e.reason === "duplicate";
          })
        ) {
          var _ =
            r ===
            o("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId
              .WHATSAPP_PRODUCT_SAVE
              ? c
              : d;
          o("WAWebQplFlowWrapper").QPL.markerDrop(_);
        } else {
          var f =
            r ===
            o("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId
              .WHATSAPP_PRODUCT_SAVE
              ? c
              : d;
          o("WAWebQplFlowWrapper").QPL.markerEnd(f, 3);
        }
        n.errors.map(function (e) {
          (e.name === "media" &&
            e.reason === "duplicate" &&
            l(
              s._(
                /*BTDS*/ "Two or more images are the same. Delete any duplicates and try again.",
              ),
            ),
            (e.name === "retailer_id" || e.name === "retailer-id") &&
              e.reason === "duplicate" &&
              m(s._(/*BTDS*/ "Item code must be unique.")),
            o("WAWebBizGatingUtils").hideUnsupportedCurrency() &&
              e.name === "currency" &&
              e.reason === "invalid-data" &&
              (p = s._(
                /*BTDS*/ "Price can't be shown in your country. Delete the price you entered.",
              )));
        });
      }
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: p,
          id: o("WAWebToast.react").genId("catalog_save_item_failed"),
        }),
      );
    }
    function p(e) {
      var t = e.catalog,
        n = e.context,
        r = e.onDelete,
        a = e.product;
      o("WAWebManageActions")
        .handleProductDelete(
          t,
          a,
          o("WAWebProductCatalogContext").getProductCatalogContext(n),
          "Product",
        )
        .then(function (e) {
          e &&
            (o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
            r == null || r(a));
        })
        .catch(function () {
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "Failed to delete item"),
            }),
          );
        });
    }
    function _(e) {
      var t = e.catalog,
        n = e.context,
        r = e.localProduct,
        a = e.newProduct,
        i = e.onCreate,
        l = e.onEditSuccess,
        c = e.product;
      (t.productCollection.add(r, { merge: !0 }),
        a
          ? o("WAWebProductCatalogLogEvents").logAddProductSuccess(
              o("WAWebProductCatalogContext").getProductCatalogContext(n),
            )
          : o("WAWebProductCatalogLogEvents").logEditProductSuccess(
              c,
              o("WAWebProductCatalogContext").getProductCatalogContext(n),
            ),
        o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebToast.react").Toast, {
            msg: a ? s._(/*BTDS*/ "Item saved") : s._(/*BTDS*/ "Changes saved"),
            id: o("WAWebToast.react").genId("catalog_item_saved"),
          }),
        ),
        l(r),
        a != null && (i == null || i()));
    }
    function f(e) {
      var t = e.catalog,
        n = e.handleEditError,
        r = e.handleEditSuccess,
        a = e.imagePanelRef,
        i = e.isModified,
        l = e.newProduct,
        s = e.product,
        u = e.productChanges,
        m = e.propsProduct,
        p = e.setIsUpdating,
        _ = !0;
      if ((p(!0), !l && !i))
        (o("WAWebQplFlowWrapper").QPL.markerStart(d, {
          annotations: { string: { EntryPoint: "Product" } },
        }),
          o("WAWebBizProductCatalogBridge")
            .productVisibilitySet(s.id.toString(), u.isHidden)
            .then(function () {
              (m.setIsHidden(u.isHidden),
                r(s),
                (_ = !1),
                o("WAWebQplFlowWrapper").QPL.markerEnd(d, 2));
            })
            .catch(function (e) {
              (e instanceof o("WAWebBackendErrors").CatalogEditServerError ||
                e instanceof o("WAWebBackendErrors").ServerStatusCodeError) &&
                ((_ = !1),
                n(
                  e,
                  o("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId
                    .WHATSAPP_PRODUCT_SET_VISIBLE,
                ));
            })
            .finally(function () {
              (_ && o("WAWebQplFlowWrapper").QPL.markerEnd(d, 3), p(!1));
            }));
      else {
        var f;
        (o("WAWebQplFlowWrapper").QPL.markerStart(c, {
          annotations: { bool: { IsNewProduct: !!l } },
        }),
          (f = a.current) == null ||
            f
              .uploadImages(l)
              .then(function (e) {
                ((u.imageCdnUrl = e[0]),
                  (u.additionalImageCdnUrl = e.slice(1)));
                var a = l ? t.addProduct(u) : t.editProduct(u);
                a.then(function (e) {
                  (r(e),
                    (_ = !1),
                    o("WAWebQplFlowWrapper").QPL.markerEnd(c, 2));
                })
                  .catch(function (e) {
                    (e instanceof
                      o("WAWebBackendErrors").CatalogEditServerError ||
                      e instanceof
                        o("WAWebBackendErrors").ServerStatusCodeError) &&
                      ((_ = !1),
                      n(
                        e,
                        o("WAWebQplQuickPerformanceLoggerMarkerIds")
                          .QuickLogMarkerId.WHATSAPP_PRODUCT_SAVE,
                      ));
                  })
                  .finally(function () {
                    (_ && o("WAWebQplFlowWrapper").QPL.markerEnd(c, 3), p(!1));
                  });
              })
              .catch(function (e) {
                throw (o("WAWebQplFlowWrapper").QPL.markerEnd(c, 3), p(!1), e);
              }));
      }
    }
    ((l.handleEditError = m),
      (l.handleDeleteItem = p),
      (l.handleEditSuccessFn = _),
      (l.saveItem = f));
  },
  226,
);
