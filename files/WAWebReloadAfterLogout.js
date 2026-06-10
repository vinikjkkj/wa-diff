__d(
  "WAWebReloadAfterLogout",
  [
    "WALogger",
    "WAWebLogoutReason",
    "WAWebLogoutReasonConstants",
    "WAWebPonyfillsUrlSearchParams",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [
        "post_logout",
        "logout_reason",
        "logout_message_header",
        "logout_message_subtext",
      ];
    function u(t, n, a) {
      var i;
      t === void 0 && (t = !1);
      var l = new (r("WAWebPonyfillsUrlSearchParams"))(
        (i = window.location.search) != null ? i : "",
      );
      for (var u of s) l.delete(u);
      if ((l.set("post_logout", "1"), n)) {
        var c = o("WAWebLogoutReason").getErrorCodeFromLogoutReason(n);
        if (
          (c && l.set("logout_reason", c),
          n === o("WAWebLogoutReasonConstants").LogoutReason.AccountLocked &&
            a != null)
        ) {
          var d = a.logoutMessageHeader,
            m = a.logoutMessageSubtext;
          (d != null && l.set("logout_message_header", d),
            m != null && l.set("logout_message_subtext", m));
        }
      }
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[reload] reloadAfterLogout errorDuringStorageClear=",
            "",
          ])),
        t,
      ),
        (window.location.href = window.location.pathname + "?" + l.toString()));
    }
    ((l.POST_LOGOUT_URL_MARKERS = s), (l.reloadAfterLogout = u));
  },
  98,
);
