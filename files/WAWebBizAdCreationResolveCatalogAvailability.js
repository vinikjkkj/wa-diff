__d(
  "WAWebBizAdCreationResolveCatalogAvailability",
  [
    "FBLogger",
    "Promise",
    "WAFilteredCatch",
    "WAWebBackendErrors",
    "WAWebCatalogCollection",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null;
    function u() {
      return o("WAWebCatalogCollection").CatalogCollection.get(
        o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
      );
    }
    function c(e) {
      return e.some(function (e) {
        return !e.isHidden && e.imageCdnUrl != null && e.imageCdnUrl !== "";
      });
    }
    function d() {
      var e = u();
      return e != null && c(e.productCollection.getProductModels());
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = u();
          e != null &&
            e.afterCursor &&
            !d() &&
            (yield o(
              "WAWebCatalogCollection",
            ).CatalogCollection.findNextProductPage(e.id, !1),
            yield m());
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return yield (e || (e = n("Promise")))
            .resolve()
            .then(function () {
              return o("WAWebCatalogCollection").CatalogCollection.find(
                o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
              );
            })
            .then(function () {
              return m();
            })
            .then(function () {
              return d();
            })
            .catch(
              o("WAFilteredCatch").filteredCatch(
                [
                  o("WAWebBackendErrors").ServerStatusCodeError,
                  o("WAWebBackendErrors").CatalogUnknownError,
                  o("WAWebBackendErrors").AdAccountRecoveryRequiredError,
                ],
                function () {
                  return null;
                },
              ),
            )
            .catch(function (e) {
              return (
                r("FBLogger")("wa_ctwa_web")
                  .catching(r("getErrorSafe")(e))
                  .mustfix("Unexpected catalog availability error"),
                null
              );
            });
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      return (
        s == null &&
          (s = _().finally(function () {
            s = null;
          })),
        s
      );
    }
    l.default = g;
  },
  98,
);
