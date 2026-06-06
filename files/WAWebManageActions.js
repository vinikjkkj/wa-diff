__d(
  "WAWebManageActions",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizProductCatalogAction",
    "WAWebBizProductCatalogBridge",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebHttpErrors",
    "WAWebModalManager",
    "WAWebNonEmptyString",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCollection",
    "WAWebProductCollectionLogEvents",
    "WAWebProductCollectionsJob",
    "WAWebQplFlowWrapper",
    "WAWebToast.react",
    "WAWebToastManager",
    "getErrorSafe",
    "qpl",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = r("qpl")._(774774122, "3441"),
      p = r("qpl")._(774778628, "3442"),
      _ = r("qpl")._(774777483, "3443"),
      f = r("qpl")._(774776895, "3444");
    async function g(e, t, n) {
      try {
        return (
          await o("WAWebBizProductCatalogAction").deleteProducts([
            t.id.toString(),
          ]),
          o("WAWebProductCatalogLogEvents").logDeleteProductSuccess(t, 1, n),
          e.productCollection.evictImagesFromCache(t.id.toString()),
          e.productCollection.remove(t.id.toString()),
          e.collections &&
            e.collections.forEach(function (e) {
              return e.productCollection.remove(t.id.toString());
            }),
          !0
        );
      } catch (e) {
        if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError)
          return (
            o("WAWebProductCatalogLogEvents").logDeleteProductFailed(
              t,
              1,
              n,
              e.statusCode,
            ),
            o("WAWebToastManager").ToastManager.open(
              d.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Failed to delete product"),
                id: o("WAWebToast.react").genId(
                  "catalog_delete_product_failed",
                ),
              }),
            ),
            !1
          );
        throw e;
      }
    }
    function h(e, t, n, a) {
      return (
        o("WAWebProductCatalogLogEvents").logDeleteProductClick(t, 1, n),
        new Promise(function (i, l) {
          o("WAWebModalManager").ModalManager.open(
            d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "manage-catalog",
              },
              title: s._(/*BTDS*/ "Delete item"),
              okText: r("WAWebFbtCommon")("OK"),
              okButtonType: "solid-warning",
              cancelText: s._(/*BTDS*/ "Cancel"),
              onOK: function () {
                (o("WAWebModalManager").ModalManager.close(),
                  o("WAWebQplFlowWrapper").QPL.markerStart(m, {
                    annotations: { string: { EntryPoint: a } },
                  }),
                  g(e, t, n)
                    .then(function (e) {
                      (o("WAWebQplFlowWrapper").QPL.markerEnd(m, 2), i(e));
                    })
                    .catch(function (e) {
                      (o("WAWebQplFlowWrapper").QPL.markerEnd(m, 3), l(e));
                    }));
              },
              onCancel: function () {
                (o("WAWebModalManager").ModalManager.close(), i(!1));
              },
              children: d.jsx("div", {
                children: s._(
                  /*BTDS*/ "Are you sure you want to delete this item from your catalog?",
                ),
              }),
            }),
          );
        })
      );
    }
    async function y(e, t) {
      (await o("WAWebBizProductCatalogBridge").productVisibilitySet(
        t.id.toString(),
        !t.isHidden,
      ),
        (t.isHidden = !t.isHidden));
      var n = [e.productCollection].concat(
        (e.collections || []).map(function (e) {
          return e.productCollection;
        }),
      );
      n.forEach(function (e) {
        var n = e.get(t.id);
        n && (n.isHidden = t.isHidden);
      });
    }
    function C(e, t, n, a) {
      var i = t.id.toString(),
        l = !t.isHidden;
      return (
        l
          ? o("WAWebProductCatalogLogEvents").logCatalogProductHideClick(i, n)
          : o("WAWebProductCatalogLogEvents").logCatalogProductShowClick(i, n),
        new Promise(function (u, c) {
          var m = t.isHidden
            ? s._(/*BTDS*/ "Show item in your catalog?")
            : s._(/*BTDS*/ "Hide item in your catalog?");
          o("WAWebModalManager").ModalManager.open(
            d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "manage-catalog",
              },
              okText: r("WAWebFbtCommon")("OK"),
              cancelText: s._(/*BTDS*/ "Cancel"),
              onOK: function () {
                (o("WAWebQplFlowWrapper").QPL.markerStart(p, {
                  annotations: { string: { EntryPoint: a } },
                }),
                  o("WAWebModalManager").ModalManager.close(),
                  y(e, t)
                    .then(function () {
                      (o("WAWebQplFlowWrapper").QPL.markerEnd(p, 2),
                        l
                          ? o(
                              "WAWebProductCatalogLogEvents",
                            ).logCatalogProductHideSuccess(i, n)
                          : o(
                              "WAWebProductCatalogLogEvents",
                            ).logCatalogProductShowSuccess(i, n),
                        u(!0));
                    })
                    .catch(function (e) {
                      (o("WAWebQplFlowWrapper").QPL.markerEnd(p, 3),
                        l
                          ? o(
                              "WAWebProductCatalogLogEvents",
                            ).logCatalogProductHideFailed(i, n)
                          : o(
                              "WAWebProductCatalogLogEvents",
                            ).logCatalogProductShowFailed(i, n),
                        c(e));
                    }));
              },
              onCancel: function () {
                (o("WAWebModalManager").ModalManager.close(),
                  l
                    ? o(
                        "WAWebProductCatalogLogEvents",
                      ).logCatalogProductHideCancelled(i, n)
                    : o(
                        "WAWebProductCatalogLogEvents",
                      ).logCatalogProductShowCancelled(i, n),
                  u(!1));
              },
              children: d.jsx("div", { children: m }),
            }),
          );
        })
      );
    }
    async function b(e, t, n) {
      (await o("WAWebProductCollectionsJob").deleteCollection(
        t.id.toString(),
        n.session.sessionId.toString(),
      ),
        e.collections.remove(t.id.toString()),
        o("WAWebProductCollectionLogEvents").logCollectionDeleted({
          catalogContext: n,
          collectionId: t.id,
        }));
    }
    function v(t, n, a) {
      o("WAWebModalManager").ModalManager.open(
        d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: { surface: "unknown", viewName: "manage-catalog" },
          title: s._(/*BTDS*/ "Delete collection"),
          okText: r("WAWebFbtCommon")("OK"),
          cancelText: s._(/*BTDS*/ "Cancel"),
          onOK: function () {
            (o("WAWebModalManager").ModalManager.close(),
              b(t, n, a).catch(function (t) {
                return o("WAFilteredCatch").filteredCatch(
                  o("WAWebBackendErrors").ServerStatusCodeError,
                  function (t) {
                    return (
                      o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "Failed to delete collection, error: ",
                              "",
                            ])),
                          t,
                        )
                        .verbose()
                        .sendLogs("Deleteing collection failed"),
                      o("WAWebToastManager").ToastManager.open(
                        d.jsx(o("WAWebToast.react").Toast, {
                          msg: s._(/*BTDS*/ "Failed to delete collection"),
                          id: o("WAWebToast.react").genId(
                            "catalog_delete_product_failed",
                          ),
                        }),
                      ),
                      !1
                    );
                  },
                )(t);
              }));
          },
          onCancel: o("WAWebModalManager").closeModalManager,
          children: d.jsx("div", {
            children: s._(
              /*BTDS*/ "When you delete this collection, items in the collection will not be deleted.",
            ),
          }),
        }),
      );
    }
    function S(e, t, n, r, a, i) {
      var l;
      return (
        o("WAWebQplFlowWrapper").QPL.markerPoint(_, "datasource_start"),
        t
          ? (l = o("WAWebProductCollectionsJob")
              .editCollection(
                t.id.toString() || "",
                n === t.name
                  ? void 0
                  : o("WAWebNonEmptyString").asMaybeNonEmptyString(n),
                r.map(function (e) {
                  return e.id.toString();
                }),
                a.map(function (e) {
                  return e.id.toString();
                }),
                i.session.toString(),
              )
              .then(function (i) {
                return (
                  o("WAWebQplFlowWrapper").QPL.markerPoint(_, "datasource_end"),
                  (t.name = n),
                  (t.reviewStatus = i.reviewStatus),
                  e.collections.replaceId(t.id, i.id),
                  (r.length !== 0 || a.length !== 0) &&
                    (t.productCollection.reset(),
                    (t.afterCursor = void 0),
                    e.collections.reset(),
                    (e.collections.afterCursor = "")),
                  !0
                );
              }))
          : (l = o("WAWebProductCollectionsJob")
              .createCollection(
                n,
                r.map(function (e) {
                  return e.id.toString();
                }),
                i.session.toString(),
              )
              .then(function (t) {
                return (
                  o("WAWebQplFlowWrapper").QPL.markerPoint(_, "datasource_end"),
                  o("WAWebProductCollectionLogEvents").logCollectionCreated({
                    catalogContext: i,
                    productCount: r.length,
                  }),
                  e.collections.reset(),
                  (e.collections.afterCursor = ""),
                  !0
                );
              })),
        l.catch(function (e) {
          var t = function (t) {
              o("WAWebToastManager").ToastManager.open(
                d.jsx(o("WAWebToast.react").Toast, {
                  msg: t,
                  id: o("WAWebToast.react").genId(
                    "catalog_save_collection_failed",
                  ),
                }),
              );
            },
            n = s._(/*BTDS*/ "Failed to save collection");
          if (e.text === "not-acceptable")
            return (
              e.fieldName === "products" &&
                e.fieldReason === "duplicate" &&
                (n = s._(
                  /*BTDS*/ "You already have a collection with this group of items. Add or delete items to make a different group.",
                )),
              e.fieldName === "collection" &&
                e.fieldReason === "empty" &&
                (n = s._(
                  /*BTDS*/ "A collection must have at least one item in it",
                )),
              t(n),
              !1
            );
          throw (
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to save collection, error: ",
                    "",
                  ])),
                e,
              )
              .verbose()
              .sendLogs("Saving collection failed"),
            t(n),
            e
          );
        })
      );
    }
    async function R(e, t) {
      (o("WAWebQplFlowWrapper").QPL.markerPoint(f, "datasource_start"),
        await o("WAWebProductCollectionsJob").appealCollection(
          e.id.toString(),
          t,
        ),
        e.set({
          canAppeal: !1,
          reviewStatus: o("WAWebProductCollection").PRODUCT_REVIEW_STATUS
            .PENDING,
        }),
        o("WAWebQplFlowWrapper").QPL.markerPoint(f, "datasource_end"));
    }
    var L = {
        OUT_OF_SYNC: {
          getTitle: function () {
            return s._(/*BTDS*/ "Changes cannot be saved");
          },
          getDescription: function () {
            return s._(/*BTDS*/ "Please refresh and try again.");
          },
          getOkText: function () {
            return s._(/*BTDS*/ "Reload");
          },
        },
        SERVER_ERROR: {
          getTitle: function () {
            return s._(/*BTDS*/ "Error");
          },
          getDescription: function () {
            return s._(/*BTDS*/ "Something went wrong. Please try again.");
          },
          getOkText: function () {
            return s._(/*BTDS*/ "OK");
          },
        },
        HTTP_NETWORK_ERROR: {
          getTitle: function () {
            return s._(/*BTDS*/ "No internet connection");
          },
          getDescription: function () {
            return s._(
              /*BTDS*/ "Check your internet connection and try again.",
            );
          },
          getOkText: function () {
            return s._(/*BTDS*/ "OK");
          },
        },
      },
      E = function (t) {
        return t instanceof o("WAWebHttpErrors").HttpNetworkError
          ? L.HTTP_NETWORK_ERROR
          : t instanceof o("WAWebBackendErrors").CollectionReorderError
            ? L.OUT_OF_SYNC
            : L.SERVER_ERROR;
      };
    async function k(e, t) {
      try {
        var n = await o("WAWebProductCollectionsJob").reorderCollection(e);
        return (
          n &&
            o("WAWebProductCollectionLogEvents").logCollectionReorder({
              catalogContext: t,
              movesCount: e.length,
            }),
          n
        );
      } catch (e) {
        var a = r("getErrorSafe")(e),
          i = a instanceof o("WAWebHttpErrors").HttpNetworkError,
          l = E(a),
          s = l.getDescription,
          u = l.getOkText,
          c = l.getTitle;
        return new Promise(function (e, t) {
          o("WAWebModalManager").ModalManager.open(
            d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "manage-catalog",
              },
              title: c(),
              okText: u(),
              onOK: function () {
                (o("WAWebModalManager").ModalManager.close(), i ? t(a) : e(!1));
              },
              children: d.jsx("div", { children: s() }),
            }),
            { blockClose: !0 },
          );
        });
      }
    }
    ((l.handleProductDelete = h),
      (l.handleProductVisibilityChange = C),
      (l.handleCollectionDelete = v),
      (l.handleCollectionSave = S),
      (l.handleCollectionAppeal = R),
      (l.handleCollectionReorder = k));
  },
  226,
);
