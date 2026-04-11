__d(
  "WAWebReloadAfterLogout",
  [
    "WALogger",
    "WAWebLogoutReason",
    "WAWebLogoutReasonConstants",
    "WAWebMiscBrowserUtils",
    "WAWebPonyfillsUrlSearchParams",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n, a) {
      t === void 0 && (t = !1);
      var i = new (r("WAWebPonyfillsUrlSearchParams"))();
      if (
        (t &&
          r("WAWebMiscBrowserUtils").info().name !== "Firefox" &&
          i.set("post_logout", "1"),
        n)
      ) {
        var l = o("WAWebLogoutReason").getErrorCodeFromLogoutReason(n);
        if (
          (l && i.set("logout_reason", l),
          n === o("WAWebLogoutReasonConstants").LogoutReason.AccountLocked &&
            a != null)
        ) {
          var u = a.logoutMessageHeader,
            c = a.logoutMessageSubtext;
          (u != null && i.set("logout_message_header", u),
            c != null && i.set("logout_message_subtext", c));
        }
      }
      var d = i.toString();
      d == null || d === ""
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[reload] reloadAfterLogout: no params",
              ])),
          ),
          window.location.reload())
        : (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[reload] reloadAfterLogout: with params",
              ])),
          ),
          (window.location.href =
            window.location.pathname + "?" + i.toString()));
    }
    l.default = u;
  },
  98,
);
