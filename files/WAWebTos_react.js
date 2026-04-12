__d(
  "WAWebTos.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebLogoutReasonConstants",
    "WAWebSocketModel",
    "react",
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
      var t = e.children,
        n = e.description;
      return (
        r("vulture")("MlkJVMcCE94cT-gWlBtnPNYGXOE="),
        u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: { surface: "unknown", viewName: "tos" },
          cover: !0,
          cancelText: s._(/*BTDS*/ "Log out"),
          onCancel: c,
          okText: s._(/*BTDS*/ "Log in"),
          children: [n, "\xA0", t],
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
