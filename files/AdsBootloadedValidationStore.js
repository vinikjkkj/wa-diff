__d(
  "AdsBootloadedValidationStore",
  [
    "AdsBootloadedStore",
    "AdsErrorUtils",
    "adsCreateStoreThunkSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
          o[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(o)) || this),
          (t.getCombinedErrorsForSelector = r("adsCreateStoreThunkSelector")(
            babelHelpers.assertThisInitialized(t),
            function (e) {
              return t.getCombinedErrorsFor(e);
            },
          )),
          (t.getCombinedErrorsSelector = r("adsCreateStoreThunkSelector")(
            babelHelpers.assertThisInitialized(t),
            function (e) {
              return t.getCombinedErrors(e);
            },
          )),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getErrorSpec = function (t) {
          return this.onLoadedStore(function (e) {
            return e.getErrorSpec(t);
          }, o("AdsErrorUtils").getErrorSpec([]));
        }),
        (n.indexErrorsByPath = function (t) {
          return this.onLoadedStore(function (e) {
            return e.indexErrorsByPath(t);
          }, o("AdsErrorUtils").indexErrorsByPath([]));
        }),
        (n.getErrors = function (t) {
          return this.onLoadedStore(function (e) {
            return e.getErrors(t);
          }, []);
        }),
        (n.getErrorsUnconditionally = function (t) {
          return this.onLoadedStore(function (e) {
            return e.getErrorsUnconditionally(t);
          }, []);
        }),
        (n.getAllErrors = function (t) {
          return this.onLoadedStore(function (e) {
            return e.getAllErrors(t);
          }, []);
        }),
        (n.getCombinedErrorsFor = function (t) {
          return this.onLoadedStore(function (e) {
            return e.getCombinedErrorsFor(t);
          }, r("immutable").Map());
        }),
        (n.getCombinedErrors = function (t) {
          return this.onLoadedStore(function (e) {
            return e.getCombinedErrors(t);
          }, []);
        }),
        (n.getAllCombinedErrors = function (t) {
          return this.onLoadedStore(
            function (e) {
              return e.getAllCombinedErrors(t);
            },
            r("immutable").Map(
              t.map(function (e) {
                return [e, []];
              }),
            ),
          );
        }),
        (n.getAllClientErrors = function (t) {
          return this.onLoadedStore(
            function (e) {
              return e.getAllClientErrors(t);
            },
            r("immutable").Map(
              t.map(function (e) {
                return [e, []];
              }),
            ),
          );
        }),
        t
      );
    })(r("AdsBootloadedStore"));
    l.default = e;
  },
  98,
);
