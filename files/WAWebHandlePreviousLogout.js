__d(
  "WAWebHandlePreviousLogout",
  [
    "WALogger",
    "WAWebIndexedDBPurge",
    "WAWebLocalStorage",
    "WAWebLocalStorageUtils",
    "WAWebLogoutReason",
    "WAWebPonyfillsUrlSearchParams",
    "WAWebReloadAfterLogout",
    "WAWebURLUtils",
    "WAWebWAWCInit",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      var e,
        t = n("WAWebPonyfillsUrlSearchParams"),
        a = new t((e = window.location.search) != null ? e : ""),
        i = a.get("logout_reason");
      i != null && o("WAWebLogoutReason").setPrevLogoutReasonCode(i);
      var l = a.get("logout_message_header"),
        s = a.get("logout_message_subtext");
      (l != null || s != null) &&
        o("WAWebLogoutReason").setPrevCustomLogoutMessage({
          logoutMessageHeader: l,
          logoutMessageSubtext: s,
        });
      var u = a.get("post_logout") === "1";
      if (!(!u && i == null) && r("WAWebURLUtils").canMuckHistory()) {
        for (var c of o("WAWebReloadAfterLogout").POST_LOGOUT_URL_MARKERS)
          a.delete(c);
        var d = a.toString(),
          m =
            d !== ""
              ? window.location.pathname + "?" + d
              : window.location.pathname;
        window.history.replaceState({}, document.title, m);
      }
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("WAWebLocalStorageUtils").isLogoutDirtyBitSet(),
            a = o("WAWebLocalStorageUtils").isUserLoggedOut();
          if (t || a)
            try {
              (yield o("WAWebIndexedDBPurge").deleteAllIdb(),
                yield o("WAWebWAWCInit").initWAWC());
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Preemptive db delete failed with error ",
                      "",
                    ])),
                  t,
                )
                .tags("app-wrapper");
            }
          if (t) {
            var i,
              l = n("WAWebPonyfillsUrlSearchParams"),
              c = new l((i = window.location.search) != null ? i : "");
            (r("WAWebLocalStorage") == null || r("WAWebLocalStorage").clear(),
              c.set("post_logout", "1"),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[reload] handlePreviousLogoutFailures",
                  ])),
              ),
              (window.location.href =
                window.location.pathname + "?" + c.toString()));
          }
          u();
        })),
        d.apply(this, arguments)
      );
    }
    ((l.processLogoutReasonAndCleanupUrl = u),
      (l.handlePreviousLogoutFailures = c));
  },
  98,
);
