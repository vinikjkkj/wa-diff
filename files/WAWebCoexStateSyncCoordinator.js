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
    async function R(t) {
      var n = ++C,
        a = "not_authoritative";
      try {
        a = await k(t);
      } catch (n) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "coexStateSync/",
                "/threw",
              ])),
            t,
          )
          .catching(r("getErrorSafe")(n))
          .sendLogs("coex-state-sync-threw");
      }
      L(a, n);
      var i = y;
      if (((y = null), i == null)) {
        h = null;
        return;
      }
      return R(i);
    }
    function L(e, t) {
      var n = b;
      if (n != null) {
        if (e === "skipped" || (e === "changed" && t > n.lastPullBeforeSync)) {
          var r;
          ((r = n.timer) == null || r.abort(), (b = null));
          return;
        }
        n.timer == null && y == null && E(n, e);
      }
    }
    function E(e, t) {
      var n = e.delays.next();
      if (n.done === !0) {
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "coexStateSync/sync_retry/gave-up/",
              "",
            ])),
          t,
        ),
          (b = null));
        return;
      }
      var a = new AbortController();
      ((e.timer = a),
        o("WAPromiseDelays")
          .delayMs(n.value, a.signal)
          .then(function () {
            return ((e.timer = null), S("sync_retry"));
          })
          .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "coexStateSync/sync_retry/failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("coex-state-sync-retry-failed");
          }));
    }
    async function k(e) {
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
        i = await o("WAPromiseTimeout").promiseTimeout(
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
            I(i),
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
          I(i),
          l,
        ),
        l
      );
    }
    function I(e) {
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
