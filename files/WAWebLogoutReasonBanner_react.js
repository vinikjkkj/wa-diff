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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n =
          (t = o("WAWebLogoutReason").getPrevLogoutReasonCode()) != null
            ? t
            : e.reason;
      if (n == null) return null;
      var a = d(n);
      if (a == null) return null;
      var i = a.category,
        l = a.header,
        s = a.link,
        c = a.text;
      return u.jsx(r("WAWebLoggedOutBanner.react"), {
        header: l,
        text: c,
        link: s,
        category: i,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
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
