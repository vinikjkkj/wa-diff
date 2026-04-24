__d(
  "WAWebCatalogManagementFlowLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAFilteredCatch",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebCatalogCollection",
    "WAWebContactUtils",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogSession",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebBizCatalogManagementFlow.react",
          )
            .__setRef("WAWebCatalogManagementFlowLoadable")
            .load();
          return e;
        }),
        "CatalogManagementFlow",
      ),
      d = r("WAWebLoadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), {
            title: s._(/*BTDS*/ "Catalog"),
            error: !!t.error,
          });
        },
      });
    function m(e) {
      var t = e.entryPoint,
        n = e.isInitialStep,
        r = e.product,
        a = e.promotionCampaign;
      _(function (e, i, l) {
        var s = o("WAWebProductCatalogContext").buildProductCatalogContext(
          new (o("WAWebProductCatalogSession").ProductCatalogSession)(),
          o("WAWebContactUtils").getMaybeBizPlatformForLogging(e.toString()),
          t,
        );
        if (l === !0 && !i) {
          p();
          return;
        }
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          u.jsx(d, {
            catalogId: e,
            product: r,
            isInitialStep: n,
            promotionCampaign: a,
          }),
          {
            newDrawerContext: s,
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
          },
        );
      });
    }
    var p = function () {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Failed to load catalog"),
          id: o("WAWebActionToast.react").genId(),
        }),
      );
    };
    function _(e) {
      var t = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        n = o("WAWebCatalogCollection").CatalogCollection.get(t);
      n == null
        ? o("WAWebCatalogCollection")
            .CatalogCollection.find(t)
            .then(function (n) {
              e(t, n);
            })
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebBackendErrors").ServerStatusCodeError,
                function (n) {
                  n.status === "not_found" || n.status === 404
                    ? e(t)
                    : e(t, void 0, !0);
                },
              ),
            )
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebBackendErrors").AdAccountRecoveryRequiredError,
                function (n) {
                  e(t);
                },
              ),
            )
            .catch(function () {
              e(t, void 0, !0);
            })
        : ((n.stale = !0), n.markProductCollectionOld(), e(t, n));
    }
    ((l.CatalogManagementFlowLoadable = d),
      (l.openCatalogManagementFlow = m),
      (l.showSelfCatalogLoadErrorToast = p),
      (l.createCatalogManagementFlowObject = _));
  },
  226,
);
