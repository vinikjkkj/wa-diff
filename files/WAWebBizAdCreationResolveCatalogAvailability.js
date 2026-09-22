__d(
  "WAWebBizAdCreationResolveCatalogAvailability",
  [
    "FBLogger",
    "Promise",
    "WAFilteredCatch",
    "WAWebBackendErrors",
    "WAWebCatalogCollection",
    "WAWebNullFunc",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = 15e3;
    function c(t) {
      var r = null,
        o = new (e || (e = n("Promise")))(function (e) {
          r = window.setTimeout(function () {
            return e(null);
          }, u);
        });
      return e.race([t, o]).finally(function () {
        r != null && window.clearTimeout(r);
      });
    }
    function d() {
      return o("WAWebCatalogCollection").CatalogCollection.get(
        o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
      );
    }
    function m(e) {
      return e.some(function (e) {
        return !e.isHidden && e.imageCdnUrl != null && e.imageCdnUrl !== "";
      });
    }
    function p() {
      var e = d();
      return e != null && m(e.productCollection.getProductModels());
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = d();
          e != null &&
            e.afterCursor &&
            !p() &&
            (yield o(
              "WAWebCatalogCollection",
            ).CatalogCollection.findNextProductPage(e.id, !1),
            yield _());
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return yield (e || (e = n("Promise")))
            .resolve()
            .then(function () {
              return o("WAWebCatalogCollection").CatalogCollection.find(
                o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
              );
            })
            .then(function () {
              return _();
            })
            .then(function () {
              return p();
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
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return (
        s == null &&
          (s = c(g()).finally(function () {
            s = null;
          })),
        s
      );
    }
    l.default = y;
  },
  98,
);
