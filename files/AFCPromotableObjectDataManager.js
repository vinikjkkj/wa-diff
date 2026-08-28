__d(
  "AFCPromotableObjectDataManager",
  [
    "AdsAdgroupFetchAfcPromotableObjectsErrorDataAction",
    "AdsAdgroupFetchAfcPromotableObjectsSuccessDataAction",
    "AdsGraphAPI",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.loadPromotableObjects = function (t) {
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .adaccount(t)
                .get({ fields: ["ad_account_promotable_objects"] }),
              function (e) {
                r(
                  "AdsAdgroupFetchAfcPromotableObjectsSuccessDataAction",
                ).dispatch(
                  {
                    accountID: t,
                    promotableObjects: e.ad_account_promotable_objects,
                  },
                  {
                    line: "26",
                    module: "AFCPromotableObjectDataManager.js",
                    moduleID: i.id,
                  },
                );
              },
              function (e) {
                r(
                  "AdsAdgroupFetchAfcPromotableObjectsErrorDataAction",
                ).dispatch(
                  { error: e },
                  {
                    line: "32",
                    module: "AFCPromotableObjectDataManager.js",
                    moduleID: i.id,
                  },
                );
              },
            );
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
