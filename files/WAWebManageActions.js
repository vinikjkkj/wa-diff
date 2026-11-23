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
    "WAWebProductCollectionLogEvents",
    "WAWebProductCollectionsJob",
    "WAWebQplFlowWrapper",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "WDSToastImperativeHost",
    "getErrorSafe",
    "justknobx",
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
      _ = r("qpl")._(774777483, "3443");
    async function f(e, t, n) {
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
            o("WAWebProductCatalogLogEvents").logDeleteProductFailed({
              context: n,
              errorCode: e.statusCode,
              product: t,
              productCount: 1,
            }),
            o("WDSToastImperativeHost").showWDSToast({
              message: s._(/*BTDS*/ ""),
            }),
            !1
          );
        throw e;
      }
    }
    function g(e, t, n, a) {
      return (
        o("WAWebProductCatalogLogEvents").logDeleteProductClick({
          context: n,
          product: t,
          productCount: 1,
        }),
        new Promise(function (i, l) {
          o("WDSDialogBridge").openWDSDialog(
            d.jsx(r("WDSConfirmDialog.react"), {
              title: s._(/*BTDS*/ "", [s._param("productName", t.name)]),
              confirmLabel: s._(/*BTDS*/ ""),
              destructive: !0,
              onConfirm: function () {
                (o("WDSDialogBridge").closeWDSDialog(),
                  o("WAWebQplFlowWrapper").QPL.markerStart(m, {
                    annotations: { string: { EntryPoint: a } },
                  }),
                  f(e, t, n)
                    .then(function (e) {
                      (o("WAWebQplFlowWrapper").QPL.markerEnd(m, 2), i(e));
                    })
                    .catch(function (e) {
                      (o("WAWebQplFlowWrapper").QPL.markerEnd(m, 3), l(e));
                    }));
              },
              onDismiss: function () {
                (o("WDSDialogBridge").closeWDSDialog(), i(!1));
              },
              open: !0,
            }),
          );
        })
      );
    }
    async function h(e, t) {
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
    function y(e, t, n, a) {
      var i = t.id.toString(),
        l = !t.isHidden;
      return (
        l
          ? o("WAWebProductCatalogLogEvents").logCatalogProductHideClick(i, n)
          : o("WAWebProductCatalogLogEvents").logCatalogProductShowClick(i, n),
        new Promise(function (u, c) {
          var m = t.isHidden ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
          o("WAWebModalManager").ModalManager.open(
            d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "manage-catalog",
              },
              okText: r("WAWebFbtCommon")("OK"),
              cancelText: r("WAWebFbtCommon")("Cancel"),
              onOK: function () {
                (o("WAWebQplFlowWrapper").QPL.markerStart(p, {
                  annotations: { string: { EntryPoint: a } },
                }),
                  o("WAWebModalManager").ModalManager.close(),
                  h(e, t)
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
    async function C(e) {
      var t = e.catalog,
        n = e.collection,
        r = e.context;
      (await o("WAWebProductCollectionsJob").deleteCollection(
        n.id.toString(),
        r.session.sessionId.toString(),
      ),
        t.collections.remove(n.id.toString()),
        o("WAWebProductCollectionLogEvents").logCollectionDeleted({
          catalogContext: r,
          collectionId: n.id,
        }));
    }
    function b(t, n, a) {
      o("WDSDialogBridge").openWDSDialog(
        d.jsx(r("WDSConfirmDialog.react"), {
          title: s._(/*BTDS*/ "", [s._param("collectionName", n.name)]),
          description: r("justknobx")._("8068")
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ ""),
          confirmLabel: s._(/*BTDS*/ ""),
          destructive: !0,
          onConfirm: function () {
            (o("WDSDialogBridge").closeWDSDialog(),
              C({ catalog: t, collection: n, context: a }).catch(
                o("WAFilteredCatch").filteredCatch(
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
                      o("WDSToastImperativeHost").showWDSToast({
                        message: s._(/*BTDS*/ ""),
                      }),
                      !1
                    );
                  },
                ),
              ));
          },
          onDismiss: o("WDSDialogBridge").closeWDSDialog,
          open: !0,
        }),
      );
    }
    function v(e, t, n, r, a, i) {
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
              .createCollection({
                catalogSessionId: i.session.toString(),
                name: n,
                productIds: r.map(function (e) {
                  return e.id.toString();
                }),
              })
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
              o("WDSToastImperativeHost").showWDSToast({ message: t });
            },
            n = s._(/*BTDS*/ "");
          if (e.text === "not-acceptable")
            return (
              e.fieldName === "products" &&
                e.fieldReason === "duplicate" &&
                (n = s._(/*BTDS*/ "")),
              e.fieldName === "collection" &&
                e.fieldReason === "empty" &&
                (n = s._(/*BTDS*/ "")),
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
    var S = {
      OUT_OF_SYNC: {
        getTitle: function () {
          return s._(/*BTDS*/ "");
        },
        getDescription: function () {
          return s._(/*BTDS*/ "");
        },
        getOkText: function () {
          return s._(/*BTDS*/ "");
        },
      },
      SERVER_ERROR: {
        getTitle: function () {
          return s._(/*BTDS*/ "");
        },
        getDescription: function () {
          return s._(/*BTDS*/ "");
        },
        getOkText: function () {
          return s._(/*BTDS*/ "");
        },
      },
      HTTP_NETWORK_ERROR: {
        getTitle: function () {
          return s._(/*BTDS*/ "");
        },
        getDescription: function () {
          return s._(/*BTDS*/ "");
        },
        getOkText: function () {
          return s._(/*BTDS*/ "");
        },
      },
    };
    function R(e) {
      return e instanceof o("WAWebHttpErrors").HttpNetworkError
        ? S.HTTP_NETWORK_ERROR
        : e instanceof o("WAWebBackendErrors").CollectionReorderError
          ? S.OUT_OF_SYNC
          : S.SERVER_ERROR;
    }
    async function L(e, t) {
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
          l = R(a),
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
    ((l.handleProductDelete = g),
      (l.handleProductVisibilityChange = y),
      (l.handleCollectionDelete = b),
      (l.handleCollectionSave = v),
      (l.handleCollectionReorder = L));
  },
  226,
);
