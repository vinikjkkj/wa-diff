__d(
  "WAWebHandlePreviousLogout",
  [
    "WALogger",
    "WAWebIndexedDBPurge",
    "WAWebLocalStorage",
    "WAWebLocalStorageUtils",
    "WAWebLogoutReason",
    "WAWebReloadAfterLogout",
    "WAWebURLUtils",
    "WAWebWAWCInit",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      var e,
        t = new URLSearchParams((e = window.location.search) != null ? e : ""),
        n = t.get("logout_reason");
      n != null && o("WAWebLogoutReason").setPrevLogoutReasonCode(n);
      var a = t.get("logout_message_header"),
        i = t.get("logout_message_subtext");
      (a != null || i != null) &&
        o("WAWebLogoutReason").setPrevCustomLogoutMessage({
          logoutMessageHeader: a,
          logoutMessageSubtext: i,
        });
      var l = t.get("post_logout") === "1";
      if (!(!l && n == null) && r("WAWebURLUtils").canMuckHistory()) {
        for (var s of o("WAWebReloadAfterLogout").POST_LOGOUT_URL_MARKERS)
          t.delete(s);
        var u = t.toString(),
          c =
            u !== ""
              ? window.location.pathname + "?" + u
              : window.location.pathname;
        window.history.replaceState({}, document.title, c);
      }
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("WAWebLocalStorageUtils").isLogoutDirtyBitSet(),
            n = o("WAWebLocalStorageUtils").isUserLoggedOut();
          if (t || n)
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
            var a,
              i = new URLSearchParams(
                (a = window.location.search) != null ? a : "",
              );
            (r("WAWebLocalStorage") == null || r("WAWebLocalStorage").clear(),
              i.set("post_logout", "1"),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[reload] handlePreviousLogoutFailures",
                  ])),
              ),
              (window.location.href =
                window.location.pathname + "?" + i.toString()));
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
