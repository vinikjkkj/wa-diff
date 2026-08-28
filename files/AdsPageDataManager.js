__d(
  "AdsPageDataManager",
  [
    "AdsGraphAPI",
    "AdsPageSignLeadgenTosErrorDataAction",
    "AdsPageSignLeadgenTosSuccessDataAction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.signLeadGenTOS = function (t, n) {
            o("AdsGraphAPI")
              .get(i.id)
              .object("page", t)
              .post({ leadgen_tos_accepted: !0 })
              .then(function () {
                r("AdsPageSignLeadgenTosSuccessDataAction").dispatch(
                  { ids: n, pageID: t },
                  {
                    line: "25",
                    module: "AdsPageDataManager.js",
                    moduleID: i.id,
                  },
                );
              })
              .catch(function (e) {
                r("AdsPageSignLeadgenTosErrorDataAction").dispatch(
                  { error: e },
                  {
                    line: "31",
                    module: "AdsPageDataManager.js",
                    moduleID: i.id,
                  },
                );
              });
          }),
          e
        );
      })(),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
