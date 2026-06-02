__d(
  "WAWebStorageErrorHandlingUtils",
  [
    "WALogger",
    "WAStorageEstimator",
    "WAWebAppTracker",
    "WAWebClearFalcoBufferApi",
    "WAWebEnvironment",
    "WAWebLocalStorage",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 1048576,
      f = 1024 * 1024 * 1024,
      g = "storage_recovery_app_reload",
      h = !1;
    function y() {
      var t = window.location.search.includes(g);
      if (t)
        try {
          if (r("WAWebLocalStorage") != null) {
            var n = new Date();
            (n.setHours(n.getHours() + 12),
              r("WAWebLocalStorage").setItem(g, n.toISOString()));
            var a = new URL(window.location.href);
            (a.searchParams.delete(g),
              window.history.replaceState(null, "", a.toString()));
          }
        } catch (t) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[quota-exceeded] Failed to set ",
                " in localStorage. Error: ",
                "",
              ])),
            g,
            t,
          );
        }
    }
    function C() {
      try {
        var e =
          r("WAWebLocalStorage") == null
            ? void 0
            : r("WAWebLocalStorage").getItem(g);
        if (e != null) {
          var t = new Date(e),
            n = new Date();
          return n > t
            ? (r("WAWebLocalStorage") != null &&
                r("WAWebLocalStorage").removeItem(g),
              !1)
            : (o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[quota-exceeded] App reloaded for recovery, expires: ",
                    "",
                  ])),
                t,
              ),
              !0);
        }
      } catch (e) {
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "Failed to get ",
              " from localStorage.",
            ])),
          g,
        );
      }
      return window.location.search.includes(g);
    }
    function b() {
      var e = new URL(window.location.href);
      (e.searchParams.set(g, "1"),
        window.history.replaceState(null, "", e.toString()));
    }
    async function v() {
      var e = await o("WAStorageEstimator").estimateStorage(),
        t = e.success,
        n = e.value;
      if (!t || !n || n.quota <= 0) return !1;
      var r = n.usage / n.quota,
        a = n.quota - n.usage,
        i = 5 * _;
      return r >= 0.95 || a < i;
    }
    function S(e) {
      return (
        e.name === "QuotaExceededError" ||
        e.message.includes("QuotaExceededError")
      );
    }
    async function R(e, t) {
      if (S(e) && !h) {
        h = !0;
        var n = "",
          a = "";
        try {
          var i = await L();
          (i &&
            (n = JSON.stringify(
              babelHelpers.extends({}, i, {
                win: r("WAWebEnvironment").isWindows,
                didReload: C(),
              }),
            )),
            (a = JSON.stringify(t != null ? t : {})),
            await o("WAWebClearFalcoBufferApi").clearFalcoBuffer({
              force: !0,
            }));
        } catch (e) {
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[quota-exceeded] Failed to prepare error data: ",
                "",
              ])),
            e,
          );
        }
        var l = o("WAWebAppTracker").AppTracker.getAppContextWithLookback(5e3);
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[quota-exceeded] App Context: ",
              "",
            ])),
          l != null ? l : "null",
        );
        var s =
          "[quota-exceeded] Quota: " +
          (n != null ? n : "Error") +
          ", Context: " +
          a;
        if (r("WAWebEnvironment").isWindows) {
          o("WALogger")
            .ERROR(
              m || (m = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              s,
            )
            .sendLogs("win-hybrid-storage-quota-exceeded");
          return;
        }
        o("WALogger")
          .ERROR(
            p || (p = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            s,
          )
          .sendLogs("storage-quota-exceeded", { sampling: 0.01 });
      }
    }
    async function L() {
      var e,
        t,
        n,
        r,
        a = await o("WAStorageEstimator").estimateStorage(),
        i = a.success,
        l = a.value;
      if (!i || !l) return null;
      var s = {},
        u = {
          quota: l.quota,
          usage: l.usage,
          sw:
            (e = l.usageDetails) == null
              ? void 0
              : e.serviceWorkerRegistrations,
          caches: (t = l.usageDetails) == null ? void 0 : t.caches,
          idb: (n = l.usageDetails) == null ? void 0 : n.indexedDB,
          ls: (r = l.usageDetails) == null ? void 0 : r.localStorage,
        };
      return (
        Object.entries(u).forEach(function (e) {
          var t = e[0],
            n = e[1];
          typeof n == "number" && (s[t] = Number((n / f).toFixed(4)));
        }),
        s
      );
    }
    ((l.persistAppReloadMarker = y),
      (l.didReloadAppForStorageRecovery = C),
      (l.markAppReloadForStorageRecovery = b),
      (l.isQuotaActuallyExceeded = v),
      (l.isQuotaExceededError = S),
      (l.reportQuotaExceededError = R),
      (l.estimateStorageLogFormatted = L));
  },
  98,
);
