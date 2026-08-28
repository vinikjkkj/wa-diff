__d(
  "AdsUserDataManager",
  [
    "fbt",
    "AdsBaseDataManager",
    "AdsGraphAPI",
    "AdsMgmtPreloadingUtils",
    "AdsUserBatchLoadErrorDataAction",
    "AdsUserBatchLoadedDataAction",
    "AdsUserDataFields.experimental",
    "AdsUserDataManagerPreloader",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.load = function (t) {
            this.loadAll([t]);
          }),
          (n.loadAll = function (t) {
            var e = this;
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .objects("user", t)
                .preloadedBy(
                  r("AdsUserDataManagerPreloader").preloader,
                  o("AdsMgmtPreloadingUtils").defaultConfig,
                )
                .get({ fields: r("AdsUserDataFields.experimental").fields }),
              function (t) {
                return Object.keys(t).forEach(function (n) {
                  e.__handleSuccess(["load"], n, null, t[n]);
                });
              },
              function (n) {
                return t.forEach(function (t) {
                  e.__handleError(["load"], t, null, n);
                });
              },
            );
          }),
          (n.__onBatchLoaded = function (t) {
            r("AdsUserBatchLoadedDataAction").dispatch(
              { responses: t },
              { line: "56", module: "AdsUserDataManager.js", moduleID: i.id },
            );
          }),
          (n.__onBatchLoadError = function (t) {
            r("AdsUserBatchLoadErrorDataAction").dispatch(
              { errors: t },
              { line: "61", module: "AdsUserDataManager.js", moduleID: i.id },
            );
          }),
          (n.__getObjectTypeLabel = function () {
            return s._(/*BTDS*/ "User");
          }),
          t
        );
      })(r("AdsBaseDataManager")),
      u = new e(),
      c = u;
    l.default = c;
  },
  226,
);
