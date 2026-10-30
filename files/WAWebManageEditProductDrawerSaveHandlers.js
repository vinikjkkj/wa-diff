__d(
  "WAWebManageEditProductDrawerSaveHandlers",
  [
    "fbt",
    "WAWebBackendErrors",
    "WAWebBizProductCatalogBridge",
    "WAWebDrawerManager",
    "WAWebManageActions",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogLogEvents",
    "WAWebQplFlowWrapper",
    "WDSToastImperativeHost",
    "qpl",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = r("qpl")._(774779113, "3440"),
      u = r("qpl")._(774778628, "3442");
    function c(t) {
      var n = t.context,
        r = t.e,
        a = t.markerId,
        i = t.newProduct,
        l = t.product,
        c = t.setImageError,
        d = t.setRetailerIdError;
      i
        ? o("WAWebProductCatalogLogEvents").logAddProductFailed(
            o("WAWebProductCatalogContext").getProductCatalogContext(n),
            r.statusCode,
          )
        : o("WAWebProductCatalogLogEvents").logEditProductFailed(
            l,
            o("WAWebProductCatalogContext").getProductCatalogContext(n),
            r.statusCode,
          );
      var m = s._(/*BTDS*/ "Couldn't save changes");
      if (
        r instanceof o("WAWebBackendErrors").CatalogEditServerError &&
        r.errors != null
      ) {
        if (
          r.errors.some(function (e) {
            return e.reason === "duplicate";
          })
        ) {
          var p = a === e ? e : u;
          o("WAWebQplFlowWrapper").QPL.markerDrop(p);
        } else {
          var _ = a === e ? e : u;
          o("WAWebQplFlowWrapper").QPL.markerEnd(_, 3);
        }
        r.errors.map(function (e) {
          (e.name === "media" &&
            e.reason === "duplicate" &&
            c(
              s._(
                /*BTDS*/ "Two or more images are the same. Delete any duplicates and try again.",
              ),
            ),
            (e.name === "retailer_id" || e.name === "retailer-id") &&
              e.reason === "duplicate" &&
              d(s._(/*BTDS*/ "Item code must be unique.")),
            e.name === "currency" &&
              e.reason === "invalid-data" &&
              (m = s._(
                /*BTDS*/ "Price can't be shown in your country. Delete the price you entered.",
              )));
        });
      }
      o("WDSToastImperativeHost").showWDSToast({ message: m });
    }
    function d(e) {
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
          o("WDSToastImperativeHost").showWDSToast({
            message: s._(/*BTDS*/ "Couldn't delete item"),
          });
        });
    }
    function m(e) {
      var t = e.catalog,
        n = e.context,
        r = e.localProduct,
        a = e.newProduct,
        i = e.onCreate,
        l = e.onEditSuccess,
        u = e.product;
      (t.productCollection.add(r, { merge: !0 }),
        a
          ? o("WAWebProductCatalogLogEvents").logAddProductSuccess(
              o("WAWebProductCatalogContext").getProductCatalogContext(n),
            )
          : o("WAWebProductCatalogLogEvents").logEditProductSuccess(
              u,
              o("WAWebProductCatalogContext").getProductCatalogContext(n),
            ),
        o("WDSToastImperativeHost").showWDSToast({
          message: a
            ? s._(/*BTDS*/ "Item saved")
            : s._(/*BTDS*/ "Changes saved"),
        }),
        l(r),
        a != null && (i == null || i()));
    }
    function p(t) {
      var n = t.catalog,
        r = t.handleEditError,
        a = t.handleEditSuccess,
        i = t.imagePanelRef,
        l = t.isModified,
        s = t.newProduct,
        c = t.product,
        d = t.productChanges,
        m = t.propsProduct,
        p = t.setIsUpdating,
        _ = !0;
      if ((p(!0), !s && !l))
        (o("WAWebQplFlowWrapper").QPL.markerStart(u, {
          annotations: { string: { EntryPoint: "Product" } },
        }),
          o("WAWebBizProductCatalogBridge")
            .productVisibilitySet(c.id.toString(), d.isHidden)
            .then(function () {
              (m.setIsHidden(d.isHidden),
                a(c),
                (_ = !1),
                o("WAWebQplFlowWrapper").QPL.markerEnd(u, 2));
            })
            .catch(function (e) {
              (e instanceof o("WAWebBackendErrors").CatalogEditServerError ||
                e instanceof o("WAWebBackendErrors").ServerStatusCodeError) &&
                ((_ = !1), r(e, u));
            })
            .finally(function () {
              (_ && o("WAWebQplFlowWrapper").QPL.markerEnd(u, 3), p(!1));
            }));
      else {
        var f;
        (o("WAWebQplFlowWrapper").QPL.markerStart(e, {
          annotations: { bool: { IsNewProduct: !!s } },
        }),
          (f = i.current) == null ||
            f
              .uploadImages(s)
              .then(function (t) {
                ((d.imageCdnUrl = t[0]),
                  (d.additionalImageCdnUrl = t.slice(1)));
                var i = s ? n.addProduct(d) : n.editProduct(d);
                i.then(function (t) {
                  (a(t),
                    (_ = !1),
                    o("WAWebQplFlowWrapper").QPL.markerEnd(e, 2));
                })
                  .catch(function (t) {
                    (t instanceof
                      o("WAWebBackendErrors").CatalogEditServerError ||
                      t instanceof
                        o("WAWebBackendErrors").ServerStatusCodeError) &&
                      ((_ = !1), r(t, e));
                  })
                  .finally(function () {
                    (_ && o("WAWebQplFlowWrapper").QPL.markerEnd(e, 3), p(!1));
                  });
              })
              .catch(function (t) {
                throw (o("WAWebQplFlowWrapper").QPL.markerEnd(e, 3), p(!1), t);
              }));
      }
    }
    ((l.handleEditError = c),
      (l.handleDeleteItem = d),
      (l.handleEditSuccessFn = m),
      (l.saveItem = p));
  },
  226,
);
