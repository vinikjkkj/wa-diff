__d(
  "WAWebReloadAfterLogout",
  ["WALogger", "WAWebLogoutReason", "WAWebLogoutReasonConstants"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [
        "post_logout",
        "logout_reason",
        "logout_message_header",
        "logout_message_subtext",
      ];
    function u(t, n, r) {
      var a;
      t === void 0 && (t = !1);
      var i = new URLSearchParams(
        (a = window.location.search) != null ? a : "",
      );
      for (var l of s) i.delete(l);
      if ((i.set("post_logout", "1"), n)) {
        var u = o("WAWebLogoutReason").getErrorCodeFromLogoutReason(n);
        if (
          (u && i.set("logout_reason", u),
          n === o("WAWebLogoutReasonConstants").LogoutReason.AccountLocked &&
            r != null)
        ) {
          var c = r.logoutMessageHeader,
            d = r.logoutMessageSubtext;
          (c != null && i.set("logout_message_header", c),
            d != null && i.set("logout_message_subtext", d));
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
        (window.location.href = window.location.pathname + "?" + i.toString()));
    }
    ((l.POST_LOGOUT_URL_MARKERS = s), (l.reloadAfterLogout = u));
  },
  98,
);
