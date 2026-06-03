__d(
  "WAWebHandlePreviousLogout",
  [
    "WALogger",
    "WAWebIndexedDBPurge",
    "WAWebLocalStorage",
    "WAWebLocalStorageUtils",
    "WAWebLogoutReason",
    "WAWebPonyfillsUrlSearchParams",
    "WAWebURLUtils",
    "WAWebWAWCInit",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      t != null &&
        Object.keys(t).forEach(function (n) {
          e.set(n, t[n]);
        });
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i;
          (t === void 0 && (t = "/"), a === void 0 && (a = {}));
          var l = o("WAWebLocalStorageUtils").isLogoutDirtyBitSet(),
            c = o("WAWebLocalStorageUtils").isUserLoggedOut();
          if (l || c)
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
          var d = n("WAWebPonyfillsUrlSearchParams"),
            m = new d((i = window.location.search) != null ? i : "");
          l &&
            (r("WAWebLocalStorage") == null || r("WAWebLocalStorage").clear(),
            m.set("post_logout", "1"),
            u(m, a),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[reload] handlePreviousLogoutFailures",
                ])),
            ),
            (window.location.href =
              window.location.pathname + "?" + m.toString()));
          var p = m.get("logout_reason");
          p != null && o("WAWebLogoutReason").setPrevLogoutReasonCode(p);
          var _ = m.get("logout_message_header"),
            f = m.get("logout_message_subtext");
          (_ != null || f != null) &&
            o("WAWebLogoutReason").setPrevCustomLogoutMessage({
              logoutMessageHeader: _,
              logoutMessageSubtext: f,
            });
          var g = m.get("post_logout") === "1";
          if ((g || p != null) && r("WAWebURLUtils").canMuckHistory()) {
            var h = new d();
            u(h, a);
            var y = h.toString() !== "" ? t + "?" + h.toString() : t;
            window.history.replaceState({}, document.title, y);
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.handlePreviousLogoutFailures = c;
  },
  98,
);
