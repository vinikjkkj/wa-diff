__d(
  "WAWebLogoutReasonBanner.react",
  [
    "fbt",
    "WAWebEnvironment",
    "WAWebFaqUrl",
    "WAWebLoggedOutBanner.react",
    "WAWebLogoutReason",
    "WAWebLogoutReasonConstants",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(9),
        n;
      if (t[0] !== e.reason) {
        var a;
        ((n =
          (a = o("WAWebLogoutReason").getPrevLogoutReasonCode()) != null
            ? a
            : e.reason),
          (t[0] = e.reason),
          (t[1] = n));
      } else n = t[1];
      var i = n;
      if (i == null) return null;
      var l;
      t[2] !== i ? ((l = d(i)), (t[2] = i), (t[3] = l)) : (l = t[3]);
      var s = l;
      if (s == null) return null;
      var c = s.category,
        m = s.header,
        p = s.link,
        _ = s.text,
        f;
      return (
        t[4] !== c || t[5] !== m || t[6] !== p || t[7] !== _
          ? ((f = u.jsx(r("WAWebLoggedOutBanner.react"), {
              header: m,
              text: _,
              link: p,
              category: c,
            })),
            (t[4] = c),
            (t[5] = m),
            (t[6] = p),
            (t[7] = _),
            (t[8] = f))
          : (f = t[8]),
        f
      );
    }
    function d(e) {
      var t = o("WAWebLogoutReason").getPrevCustomLogoutMessage();
      switch (e) {
        case o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE.CLIENT_FATAL: {
          var n =
            r("WAWebEnvironment").isWindows === !0
              ? s._(
                  /*BTDS*/ "A database error occurred in your application. Please relink your device.",
                )
              : s._(
                  /*BTDS*/ "A database error occurred on your browser. Please relink your device.",
                );
          return {
            text: n,
            link: o("WAWebFaqUrl").getDBErrorFaqUrl(),
            category: "error",
          };
        }
        case o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE.SYNC_FAIL:
          return {
            text: s._(
              /*BTDS*/ "Your device could not link due to a sync issue. Please relink your device.",
            ),
            link: o("WAWebFaqUrl").getLinkDeviceFaqUrl(),
            category: "warning",
          };
        case o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE
          .INITIAL_HISTORY_SYNC_TIMEOUT:
          return {
            text: s._(
              /*BTDS*/ "Couldn't link device. Keep WhatsApp open on your phone when your device is linking.",
            ),
            link: o("WAWebFaqUrl").getLinkDeviceFaqUrl(),
            category: "warning",
          };
        case o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE.ACCOUNT_LOCKED:
          if (t != null) {
            var a = t.logoutMessageHeader,
              i = t.logoutMessageSubtext;
            if (a != null && i != null)
              return { header: a, text: i, category: "warning" };
          }
          return {
            text: s._(
              /*BTDS*/ "You have been logged out. To log back in, you will need to verify your phone number.",
            ),
            category: "warning",
          };
      }
      return null;
    }
    l.default = c;
  },
  226,
);
