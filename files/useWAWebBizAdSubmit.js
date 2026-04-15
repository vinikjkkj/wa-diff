__d(
  "useWAWebBizAdSubmit",
  [
    "FBLogger",
    "convertWAWebSpecToLWIVariables",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useLWIBoostedComponentSubmit",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.flowID,
        a = e.onError,
        i = e.onSuccess,
        l = e.pageID,
        s = e.product,
        u;
      t[0] !== n || t[1] !== l || t[2] !== s
        ? ((u = function (t) {
            return r("convertWAWebSpecToLWIVariables")(t, n, l, s);
          }),
          (t[0] = n),
          (t[1] = l),
          (t[2] = s),
          (t[3] = u))
        : (u = t[3]);
      var c, d;
      t[4] !== a
        ? ((c = function (t) {
            (r("FBLogger")("wa_ctwa_web")
              .catching(r("getErrorSafe")(t))
              .mustfix("Ad submit mutation failed in useWAWebBizAdSubmit"),
              a == null || a({ boostingStatus: null, errorMessage: null }));
          }),
          (d = function (t, n) {
            var e,
              o = n[0];
            (r("FBLogger")("wa_ctwa_web").mustfix(
              "Ad submit partial error in useWAWebBizAdSubmit: " +
                ((e = o == null ? void 0 : o.message) != null ? e : "unknown"),
            ),
              a == null ||
                a({
                  boostingStatus: null,
                  errorMessage: o == null ? void 0 : o.message,
                }));
          }),
          (t[4] = a),
          (t[5] = c),
          (t[6] = d))
        : ((c = t[5]), (d = t[6]));
      var m;
      t[7] !== i
        ? ((m = function (t, n) {
            var e,
              r =
                (e = t.create_boosted_component) == null || (e = e.spec) == null
                  ? void 0
                  : e.boosting_status;
            i == null || i({ boostingStatus: r, errorMessage: null });
          }),
          (t[7] = i),
          (t[8] = m))
        : (m = t[8]);
      var p;
      t[9] !== u || t[10] !== c || t[11] !== d || t[12] !== m
        ? ((p = {
            getVariables: u,
            onError: c,
            onPartialError: d,
            onSuccess: m,
          }),
          (t[9] = u),
          (t[10] = c),
          (t[11] = d),
          (t[12] = m),
          (t[13] = p))
        : (p = t[13]);
      var _ = p;
      return r("useLWIBoostedComponentSubmit")(_);
    }
    l.default = u;
  },
  98,
);
