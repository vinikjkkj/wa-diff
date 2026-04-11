__d(
  "WAWebUsePasswordDialog",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e, t, n) {
      var r = o("react-compiler-runtime").c(11),
        a;
      r[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { isVisible: !1, error: null, isSubmitting: !1 }), (r[0] = a))
        : (a = r[0]);
      var i = c(a),
        l = i[0],
        s = i[1],
        d,
        p;
      (r[1] !== n || r[2] !== t || r[3] !== e
        ? ((d = function () {
            if (e) {
              var r = e.listen("SHOW_PASSWORD_DIALOG", function () {
                  (s({ isVisible: !0, error: null, isSubmitting: !1 }), t());
                }),
                o = e.listen("SUBMIT_PASSWORD_RESPONSE", function (e) {
                  if (e.status === "SUCCESS")
                    s({ isVisible: !1, error: null, isSubmitting: !1 });
                  else {
                    var t;
                    s({
                      isVisible: !0,
                      error: (t = e.error) != null ? t : "Incorrect password",
                      isSubmitting: !1,
                    });
                  }
                }),
                a = e.listen("HIDE_PASSWORD_DIALOG", function () {
                  (s({ isVisible: !1, error: null, isSubmitting: !1 }), n());
                });
              return function () {
                (r(), o(), a());
              };
            }
          }),
          (p = [e, t, n]),
          (r[1] = n),
          (r[2] = t),
          (r[3] = e),
          (r[4] = d),
          (r[5] = p))
        : ((d = r[4]), (p = r[5])),
        u(d, p));
      var _;
      r[6] !== e
        ? ((_ = function (n) {
            e && (s(m), e.publish("SUBMIT_PASSWORD", { password: n }));
          }),
          (r[6] = e),
          (r[7] = _))
        : (_ = r[7]);
      var f = _,
        g;
      return (
        r[8] !== l || r[9] !== f
          ? ((g = { state: l, submitPassword: f }),
            (r[8] = l),
            (r[9] = f),
            (r[10] = g))
          : (g = r[10]),
        g
      );
    }
    function m(e) {
      return babelHelpers.extends({}, e, { isSubmitting: !0 });
    }
    l.usePasswordDialog = d;
  },
  98,
);
