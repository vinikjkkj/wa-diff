__d(
  "WAWebManageActions",
  [
    "fbt",
    "Promise",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "qpl",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = r("qpl")._(774774122, "3441"),
      _ = r("qpl")._(774778628, "3442"),
      f = r("qpl")._(774777483, "3443"),
      g = r("qpl")._(774776895, "3444");
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            return (
              yield o("WAWebBizProductCatalogAction").deleteProducts([
                t.id.toString(),
              ]),
              o("WAWebProductCatalogLogEvents").logDeleteProductSuccess(
                t,
                1,
                n,
              ),
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
                  m.jsx(o("WAWebToast.react").Toast, {
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
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, a, i) {
      return (
        o("WAWebProductCatalogLogEvents").logDeleteProductClick(t, 1, a),
        new (c || (c = n("Promise")))(function (n, l) {
          o("WAWebModalManager").ModalManager.open(
            m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
                  o("WAWebQplFlowWrapper").QPL.markerStart(p, {
                    annotations: { string: { EntryPoint: i } },
                  }),
                  h(e, t, a)
                    .then(function (e) {
                      (o("WAWebQplFlowWrapper").QPL.markerEnd(p, 2), n(e));
                    })
                    .catch(function (e) {
                      (o("WAWebQplFlowWrapper").QPL.markerEnd(p, 3), l(e));
                    }));
              },
              onCancel: function () {
                (o("WAWebModalManager").ModalManager.close(), n(!1));
              },
              children: m.jsx("div", {
                children: s._(
                  /*BTDS*/ "Are you sure you want to delete this item from your catalog?",
                ),
              }),
            }),
          );
        })
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield o("WAWebBizProductCatalogBridge").productVisibilitySet(
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
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, a, i) {
      var l = t.id.toString(),
        u = !t.isHidden;
      return (
        u
          ? o("WAWebProductCatalogLogEvents").logCatalogProductHideClick(l, a)
          : o("WAWebProductCatalogLogEvents").logCatalogProductShowClick(l, a),
        new (c || (c = n("Promise")))(function (n, c) {
          var d = t.isHidden
            ? s._(/*BTDS*/ "Show item in your catalog?")
            : s._(/*BTDS*/ "Hide item in your catalog?");
          o("WAWebModalManager").ModalManager.open(
            m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "manage-catalog",
              },
              okText: r("WAWebFbtCommon")("OK"),
              cancelText: s._(/*BTDS*/ "Cancel"),
              onOK: function () {
                (o("WAWebQplFlowWrapper").QPL.markerStart(_, {
                  annotations: { string: { EntryPoint: i } },
                }),
                  o("WAWebModalManager").ModalManager.close(),
                  b(e, t)
                    .then(function () {
                      (o("WAWebQplFlowWrapper").QPL.markerEnd(_, 2),
                        u
                          ? o(
                              "WAWebProductCatalogLogEvents",
                            ).logCatalogProductHideSuccess(l, a)
                          : o(
                              "WAWebProductCatalogLogEvents",
                            ).logCatalogProductShowSuccess(l, a),
                        n(!0));
                    })
                    .catch(function (e) {
                      (o("WAWebQplFlowWrapper").QPL.markerEnd(_, 3),
                        u
                          ? o(
                              "WAWebProductCatalogLogEvents",
                            ).logCatalogProductHideFailed(l, a)
                          : o(
                              "WAWebProductCatalogLogEvents",
                            ).logCatalogProductShowFailed(l, a),
                        c(e));
                    }));
              },
              onCancel: function () {
                (o("WAWebModalManager").ModalManager.close(),
                  u
                    ? o(
                        "WAWebProductCatalogLogEvents",
                      ).logCatalogProductHideCancelled(l, a)
                    : o(
                        "WAWebProductCatalogLogEvents",
                      ).logCatalogProductShowCancelled(l, a),
                  n(!1));
              },
              children: m.jsx("div", { children: d }),
            }),
          );
        })
      );
    }
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          (yield o("WAWebProductCollectionsJob").deleteCollection(
            t.id.toString(),
            n.session.sessionId.toString(),
          ),
            e.collections.remove(t.id.toString()),
            o("WAWebProductCollectionLogEvents").logCollectionDeleted({
              catalogContext: n,
              collectionId: t.id,
            }));
        })),
        L.apply(this, arguments)
      );
    }
    function E(t, n, a) {
      o("WAWebModalManager").ModalManager.open(
        m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: { surface: "unknown", viewName: "manage-catalog" },
          title: s._(/*BTDS*/ "Delete collection"),
          okText: r("WAWebFbtCommon")("OK"),
          cancelText: s._(/*BTDS*/ "Cancel"),
          onOK: function () {
            (o("WAWebModalManager").ModalManager.close(),
              R(t, n, a).catch(function (t) {
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
                        m.jsx(o("WAWebToast.react").Toast, {
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
          children: m.jsx("div", {
            children: s._(
              /*BTDS*/ "When you delete this collection, items in the collection will not be deleted.",
            ),
          }),
        }),
      );
    }
    function k(e, t, n, r, a, i) {
      var l;
      return (
        o("WAWebQplFlowWrapper").QPL.markerPoint(f, "datasource_start"),
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
                  o("WAWebQplFlowWrapper").QPL.markerPoint(f, "datasource_end"),
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
                  o("WAWebQplFlowWrapper").QPL.markerPoint(f, "datasource_end"),
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
                m.jsx(o("WAWebToast.react").Toast, {
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
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (o("WAWebQplFlowWrapper").QPL.markerPoint(g, "datasource_start"),
            yield o("WAWebProductCollectionsJob").appealCollection(
              e.id.toString(),
              t,
            ),
            e.set({
              canAppeal: !1,
              reviewStatus: o("WAWebProductCollection").PRODUCT_REVIEW_STATUS
                .PENDING,
            }),
            o("WAWebQplFlowWrapper").QPL.markerPoint(g, "datasource_end"));
        })),
        T.apply(this, arguments)
      );
    }
    var D = {
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
      x = function (t) {
        return t instanceof o("WAWebHttpErrors").HttpNetworkError
          ? D.HTTP_NETWORK_ERROR
          : t instanceof o("WAWebBackendErrors").CollectionReorderError
            ? D.OUT_OF_SYNC
            : D.SERVER_ERROR;
      };
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var a = yield o("WAWebProductCollectionsJob").reorderCollection(e);
            return (
              a &&
                o("WAWebProductCollectionLogEvents").logCollectionReorder({
                  catalogContext: t,
                  movesCount: e.length,
                }),
              a
            );
          } catch (e) {
            var i = r("getErrorSafe")(e),
              l = i instanceof o("WAWebHttpErrors").HttpNetworkError,
              s = x(i),
              u = s.getDescription,
              d = s.getOkText,
              p = s.getTitle;
            return new (c || (c = n("Promise")))(function (e, t) {
              o("WAWebModalManager").ModalManager.open(
                m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  tsNavigationData: {
                    surface: "unknown",
                    viewName: "manage-catalog",
                  },
                  title: p(),
                  okText: d(),
                  onOK: function () {
                    (o("WAWebModalManager").ModalManager.close(),
                      l ? t(i) : e(!1));
                  },
                  children: m.jsx("div", { children: u() }),
                }),
                { blockClose: !0 },
              );
            });
          }
        })),
        P.apply(this, arguments)
      );
    }
    ((l.handleProductDelete = C),
      (l.handleProductVisibilityChange = S),
      (l.handleCollectionDelete = E),
      (l.handleCollectionSave = k),
      (l.handleCollectionAppeal = I),
      (l.handleCollectionReorder = $));
  },
  226,
);
