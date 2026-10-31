__d(
  "WAWebCoexStateSyncCoordinator",
  [
    "WAAbortError",
    "WACustomError",
    "WAExponentialBackoffIterator",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseTimeout",
    "WAWebCoexCanonicalStateQuery",
    "WAWebCoexProductStateStore",
    "WAWebNoop",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = 6e4,
      g = {
        minTimeout: 2e3,
        factor: 4,
        maxTimeout: 3e4,
        jitter: 0.25,
        retries: 2,
      },
      h = null,
      y = null,
      C = 0,
      b = null;
    function v(e) {
      if (e === "sync_notification") {
        var t;
        ((t = b) == null || (t = t.timer) == null || t.abort(),
          (b = {
            lastPullBeforeSync: C,
            delays: o(
              "WAExponentialBackoffIterator",
            ).exponentialBackoffIterator(g),
            timer: null,
          }));
      }
      return S(e);
    }
    function S(e) {
      if (h != null) return ((y = e), h);
      var t = R(e);
      return ((h = t), t);
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = ++C,
            n = "not_authoritative";
          try {
            n = yield I(e);
          } catch (t) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "coexStateSync/",
                    "/threw",
                  ])),
                e,
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("coex-state-sync-threw");
          }
          E(n, t);
          var a = y;
          if (((y = null), a == null)) {
            h = null;
            return;
          }
          return R(a);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      var n = b;
      if (n != null) {
        if (e === "skipped" || (e === "changed" && t > n.lastPullBeforeSync)) {
          var r;
          ((r = n.timer) == null || r.abort(), (b = null));
          return;
        }
        n.timer == null && y == null && k(n, e);
      }
    }
    function k(t, n) {
      var a = t.delays.next();
      if (a.done === !0) {
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "coexStateSync/sync_retry/gave-up/",
              "",
            ])),
          n,
        ),
          (b = null));
        return;
      }
      var i = new AbortController();
      ((t.timer = i),
        o("WAPromiseDelays")
          .delayMs(a.value, i.signal)
          .then(function () {
            return ((t.timer = null), S("sync_retry"));
          })
          .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "coexStateSync/sync_retry/failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("coex-state-sync-retry-failed");
          }));
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r =
              (t = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1)) == null
                ? void 0
                : t.toString();
          if (r == null)
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "coexStateSync/",
                    "/skipped/logged-out",
                  ])),
                e,
              ),
              "skipped"
            );
          var a = Date.now(),
            i;
          try {
            i = yield o("WAPromiseTimeout").promiseTimeout(
              o("WAWebCoexCanonicalStateQuery").fetchCoexCanonicalMembership(),
              f,
            );
          } catch (t) {
            if (t instanceof o("WACustomError").TimeoutError)
              return (
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "coexStateSync/",
                      "/timed-out",
                    ])),
                  e,
                ),
                "not_authoritative"
              );
            throw t;
          }
          if (
            r !==
            ((n = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1)) == null
              ? void 0
              : n.toString())
          )
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "coexStateSync/",
                    "/dropped/account-changed",
                  ])),
                e,
              ),
              "skipped"
            );
          if (i.type !== "authoritative")
            return (
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "coexStateSync/",
                    "/",
                    "",
                  ])),
                e,
                D(i),
              ),
              "not_authoritative"
            );
          var l = o("WAWebCoexProductStateStore").saveCoexProductState({
            surfaces: i.surfaces,
            isBspHosted: i.isBspHosted,
            fetchedAtMs: a,
          })
            ? "changed"
            : "unchanged";
          return (
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "coexStateSync/",
                  "/",
                  "/",
                  "",
                ])),
              e,
              D(i),
              l,
            ),
            l
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "authoritative" &&
          "surfaces" in e &&
          "isBspHosted" in e
        ) {
          var t = e.surfaces,
            n = e.isBspHosted;
          return "authoritative/[" + t.join(",") + "]" + (n ? "/bsp" : "");
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "rejected" &&
          "reason" in e
        ) {
          var r = e.reason;
          return "rejected/" + r;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "failed" &&
          "reason" in e
        ) {
          var o = e.reason;
          return "failed/" + o;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    l.requestCoexStateRefresh = v;
  },
  98,
);
