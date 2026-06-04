__d(
  "WAWebReloadAfterLogout",
  [
    "WALogger",
    "WAWebBrowserInfo",
    "WAWebLogoutReason",
    "WAWebLogoutReasonConstants",
    "WAWebPonyfillsUrlSearchParams",
    "WAWebURLUtils",
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
      var l = new (r("WAWebPonyfillsUrlSearchParams"))();
      if (
        (t &&
          r("WAWebBrowserInfo")().name !== "Firefox" &&
          l.set("post_logout", "1"),
        n)
      ) {
        var u = o("WAWebLogoutReason").getErrorCodeFromLogoutReason(n);
        if (
          (u && l.set("logout_reason", u),
          n === o("WAWebLogoutReasonConstants").LogoutReason.AccountLocked &&
            a != null)
        ) {
          var c = a.logoutMessageHeader,
            d = a.logoutMessageSubtext;
          (c != null && l.set("logout_message_header", c),
            d != null && l.set("logout_message_subtext", d));
        }
      }
      var m = new (r("WAWebPonyfillsUrlSearchParams"))(
        (i = window.location.search) != null ? i : "",
      );
      for (var p of s) m.delete(p);
      var _ = m.toString(),
        f = r("WAWebURLUtils").buildLoginUrlWithNext(
          window.location.pathname,
          _ === "" ? "" : "?" + _,
        ),
        g = l.toString(),
        h = f.split("?"),
        y = h[1],
        C = y ? "&" : "?",
        b = g === "" ? f : "" + f + C + g;
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[reload] reloadAfterLogout: ",
            "",
          ])),
        b,
      ),
        (window.location.href = b));
    }
    ((l.POST_LOGOUT_URL_MARKERS = s), (l.reloadAfterLogout = u));
  },
  98,
);
