__d(
  "WAWebHandlePreviousLogout",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WAWebDeleteAllCacheStorage",
    "WAWebIndexedDBPurge",
    "WAWebLocalStorage",
    "WAWebLocalStorageUtils",
    "WAWebLogoutReason",
    "WAWebReloadAfterLogout",
    "WAWebReloadCrashAnnotations",
    "WAWebURLUtils",
    "WAWebUserPrefsCacheStorage",
    "WAWebUserPrefsKeys",
    "WAWebWAWCInit",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "WAWebCacheStorageCleanupPending",
      d = 7e3;
    function m() {
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
    async function p() {
      var t = o("WAWebLocalStorageUtils").isLogoutDirtyBitSet(),
        n = o("WAWebLocalStorageUtils").isUserLoggedOut();
      if (t || n)
        try {
          (await o("WAWebIndexedDBPurge").deleteAllIdb(),
            await o("WAWebWAWCInit").initWAWC());
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
      if (
        (t &&
          (r("WAWebLocalStorage") == null || r("WAWebLocalStorage").clear()),
        await _(t),
        t)
      ) {
        var a,
          i = new URLSearchParams(
            (a = window.location.search) != null ? a : "",
          );
        (i.set("post_logout", "1"),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[reload] handlePreviousLogoutFailures",
              ])),
          ),
          o("WAWebReloadCrashAnnotations").annotateCrashWithReloadReason(
            "handlePreviousLogoutFailures",
          ),
          (window.location.href =
            window.location.pathname + "?" + i.toString()));
      }
      m();
    }
    async function _(e) {
      if (e)
        r("WAWebLocalStorage") == null ||
          r("WAWebLocalStorage").setItem(c, "1");
      else if (
        (r("WAWebLocalStorage") == null
          ? void 0
          : r("WAWebLocalStorage").getItem(c)) !== "1"
      )
        return;
      var t =
          (r("WAWebLocalStorage") == null
            ? void 0
            : r("WAWebLocalStorage").getItem(
                o("WAWebUserPrefsKeys").MD_NOISE_KEYS.NOISE_INFO,
              )) != null,
        n = new AbortController();
      try {
        (await o("WAPromiseTimeout").promiseTimeout(
          r("WAWebDeleteAllCacheStorage")(
            t
              ? [o("WAWebUserPrefsCacheStorage").USER_PREFS_STORE_CACHE_NAME]
              : [],
            n.signal,
          ),
          d,
        ),
          r("WAWebLocalStorage") == null ||
            r("WAWebLocalStorage").removeItem(c));
      } catch (e) {
        (n.abort(),
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[logout] cache storage delete after interrupted logout failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .tags("logout"));
      }
    }
    ((l.processLogoutReasonAndCleanupUrl = m),
      (l.handlePreviousLogoutFailures = p),
      (l.deleteCacheStorageIfLogoutInterrupted = _));
  },
  98,
);
