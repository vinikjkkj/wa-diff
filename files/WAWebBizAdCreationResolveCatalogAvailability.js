__d(
  "WAWebBizAdCreationResolveCatalogAvailability",
  [
    "FBLogger",
    "WAFilteredCatch",
    "WAWebBackendErrors",
    "WAWebCatalogCollection",
    "WAWebNullFunc",
    "WAWebUserUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = 15e3;
    function u(e) {
      var t = null,
        n = new Promise(function (e) {
          t = window.setTimeout(function () {
            return e(null);
          }, s);
        });
      return Promise.race([e, n]).finally(function () {
        t != null && window.clearTimeout(t);
      });
    }
    function c() {
      return o("WAWebCatalogCollection").CatalogCollection.get(
        o("WAWebUserUtils").getMeUserOrThrow(),
      );
    }
    function d(e) {
      return e.some(function (e) {
        return !e.isHidden && e.imageCdnUrl != null && e.imageCdnUrl !== "";
      });
    }
    function m() {
      var e = c();
      return e != null && d(e.productCollection.getProductModels());
    }
    async function p() {
      var e = c();
      e != null &&
        e.afterCursor &&
        !m() &&
        (await o(
          "WAWebCatalogCollection",
        ).CatalogCollection.findNextProductPage(e.id, !1),
        await p());
    }
    async function _() {
      return await Promise.resolve()
        .then(function () {
          return o("WAWebCatalogCollection").CatalogCollection.find(
            o("WAWebUserUtils").getMeUserOrThrow(),
          );
        })
        .then(function () {
          return p();
        })
        .then(function () {
          return m();
        })
        .catch(
          o("WAFilteredCatch").filteredCatch(
            [
              o("WAWebBackendErrors").ServerStatusCodeError,
              o("WAWebBackendErrors").CatalogUnknownError,
              o("WAWebBackendErrors").AdAccountRecoveryRequiredError,
            ],
            o("WAWebNullFunc").returnNull,
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
    }
    function f() {
      return (
        e == null &&
          (e = u(_()).finally(function () {
            e = null;
          })),
        e
      );
    }
    l.default = f;
  },
  98,
);
