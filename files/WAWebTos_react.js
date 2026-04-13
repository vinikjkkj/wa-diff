__d(
  "WAWebTos.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebLogoutReasonConstants",
    "WAWebSocketModel",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = function () {
        o("WAWebSocketModel").Socket.logout(
          o("WAWebLogoutReasonConstants").LogoutReason.UserInitiated,
        );
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        a = e.description;
      r("vulture")("MlkJVMcCE94cT-gWlBtnPNYGXOE=");
      var i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { surface: "unknown", viewName: "tos" }), (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Log out")), (t[1] = l))
        : (l = t[1]);
      var d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Log in")), (t[2] = d))
        : (d = t[2]);
      var m;
      return (
        t[3] !== n || t[4] !== a
          ? ((m = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: i,
              cover: !0,
              cancelText: l,
              onCancel: c,
              okText: d,
              children: [a, "\xA0", n],
            })),
            (t[3] = n),
            (t[4] = a),
            (t[5] = m))
          : (m = t[5]),
        m
      );
    }
    l.default = d;
  },
  226,
);
