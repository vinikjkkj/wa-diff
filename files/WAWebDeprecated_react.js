__d(
  "WAWebDeprecated.react",
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
    function d() {
      var e = o("react-compiler-runtime").c(2);
      r("vulture")("TZRYl1yiRaDX4PT2lqGlmWYSSS8=");
      var t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s._(/*BTDS*/ "Log out")), (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              cover: !0,
              cancelText: t,
              onCancel: c,
              okText: s._(/*BTDS*/ "Log in"),
              children: s._(
                /*BTDS*/ 'The version of WhatsApp on your phone is too old. Please update to the latest version, then click "Log in" to continue using WhatsApp.',
              ),
            })),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    l.default = d;
  },
  226,
);
