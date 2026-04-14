__d(
  "useWAWebBizAdSubmit",
  [
    "FBLogger",
    "convertWAWebSpecToLWIVariables",
    "getErrorSafe",
    "react",
    "useLWIBoostedComponentSubmit",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      var t = e.flowID,
        n = e.onError,
        o = e.onSuccess,
        a = e.pageID,
        i = e.product,
        l = s(
          function () {
            return {
              getVariables: function (n) {
                return r("convertWAWebSpecToLWIVariables")(n, t, a, i);
              },
              onError: function (t) {
                (r("FBLogger")("wa_ctwa_web")
                  .catching(r("getErrorSafe")(t))
                  .mustfix("Ad submit mutation failed in useWAWebBizAdSubmit"),
                  n == null || n({ boostingStatus: null, errorMessage: null }));
              },
              onPartialError: function (t, o) {
                var e,
                  a = o[0];
                (r("FBLogger")("wa_ctwa_web").mustfix(
                  "Ad submit partial error in useWAWebBizAdSubmit: " +
                    ((e = a == null ? void 0 : a.message) != null
                      ? e
                      : "unknown"),
                ),
                  n == null ||
                    n({
                      boostingStatus: null,
                      errorMessage: a == null ? void 0 : a.message,
                    }));
              },
              onSuccess: function (t, n) {
                var e,
                  r =
                    (e = t.create_boosted_component) == null ||
                    (e = e.spec) == null
                      ? void 0
                      : e.boosting_status;
                o == null || o({ boostingStatus: r, errorMessage: null });
              },
            };
          },
          [t, n, o, a, i],
        );
      return r("useLWIBoostedComponentSubmit")(l);
    }
    l.default = u;
  },
  98,
);
