__d(
  "AdsPromotablePageListDataManager",
  [
    "AdsAccountStore",
    "AdsBaseListDataManager",
    "AdsLoadState_LEGACY",
    "AdsManagerIGLoginUtils",
    "AdsPromotablePageListBatchLoadErrorDataAction",
    "AdsPromotablePageListBatchLoadedDataAction",
    "AdsPromotablePageListPartialLoadDataAction",
    "GraphAPIPaging",
    "cr:20373",
    "gkx",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.loadFor = function (t) {
            var e = this,
              a = r("AdsAccountStore").get(t).getValue(),
              l = o("AdsManagerIGLoginUtils").getIsIGLogin(a),
              s = r("gkx")("890") ? 1 : null;
            r("promiseDone")(
              n("cr:20373")
                .loadPages(t)
                .then(
                  o("GraphAPIPaging").eachPage(function (n) {
                    var o = l ? n.data : e.filterIABPages(n.data);
                    r("AdsPromotablePageListPartialLoadDataAction").dispatch(
                      {
                        accountID: t,
                        loadState: r("AdsLoadState_LEGACY").LOADING,
                        promotablePages: o,
                      },
                      {
                        line: "50",
                        module: "AdsPromotablePageListDataManager.js",
                        moduleID: i.id,
                      },
                    );
                  }, s),
                ),
              function (n) {
                return e.__handleSuccess(["load"], t, null, n);
              },
              function (n) {
                return e.__handleError(["load"], t, null, n);
              },
            );
          }),
          (a.__onBatchLoaded = function (t) {
            var e = this,
              n = r("AdsAccountStore").getSelectedAccountID(),
              a = n != null ? r("AdsAccountStore").get(n).getValue() : null,
              l = t;
            (o("AdsManagerIGLoginUtils").getIsIGLogin(a) ||
              ((l = new Map()),
              t.forEach(function (t, n) {
                ((t.data = e.filterIABPages(t.data)), l.set(n, t));
              })),
              r("AdsPromotablePageListBatchLoadedDataAction").dispatch(
                { responses: l },
                {
                  line: "78",
                  module: "AdsPromotablePageListDataManager.js",
                  moduleID: i.id,
                },
              ));
          }),
          (a.__onBatchLoadError = function (t) {
            r("AdsPromotablePageListBatchLoadErrorDataAction").dispatch(
              { errors: t },
              {
                line: "85",
                module: "AdsPromotablePageListDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.filterIABPages = function (t) {
            return t.filter(function (e) {
              return e.is_instagram_account_backed_page !== !0;
            });
          }),
          t
        );
      })(r("AdsBaseListDataManager")),
      s = new e();
    l.default = s;
  },
  98,
);
