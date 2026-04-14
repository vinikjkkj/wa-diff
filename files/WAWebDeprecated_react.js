__d(
  "WAWebDeprecated.react",
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
    function d() {
      return (
        r("vulture")("TZRYl1yiRaDX4PT2lqGlmWYSSS8="),
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          cover: !0,
          cancelText: s._(/*BTDS*/ "Log out"),
          onCancel: c,
          okText: s._(/*BTDS*/ "Log in"),
          children: s._(
            /*BTDS*/ 'The version of WhatsApp on your phone is too old. Please update to the latest version, then click "Log in" to continue using WhatsApp.',
          ),
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
