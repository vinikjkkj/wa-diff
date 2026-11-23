__d(
  "WAWebPrimaryFeatures",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebWorkerSafeBackendApi",
    "getErrorSafe",
    "gkx",
    "snakeCase",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = null;
    function m(t) {
      return d == null
        ? (o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "primaryFeatureEnabled: features not initialized",
              ])),
          ),
          !1)
        : d.has(t);
    }
    async function p(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").KEYS.PRIMARY_FEATURES,
        e,
      );
      var t = d,
        n = new Set(g(e));
      ((d = n),
        o("WAWebBackendApi").frontendFireAndForget("setPrimaryFeatures", {
          isFreshSync: !0,
          primaryFeatures: Array.from(d),
        }));
      try {
        o("WAWebBackendEventBusWorkerCompatible")
          .getBackendEventBus()
          .triggerPrimaryFeaturesSynced(_(t, n));
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[primary features] primary_features_synced listener failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("primary-features-synced-listener-failed");
      }
      var a = (t == null ? void 0 : t.has("favorite_sticker")) === !0,
        i = n.has("favorite_sticker");
      !a &&
        i &&
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[primary features] favorite_sticker enabled, check orphans",
            ])),
        ),
        await o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
          "checkOrphanFavoriteStickers",
        ));
    }
    function _(e, t) {
      var n = e != null ? e : new Set(),
        r = new Set();
      for (var o of t) n.has(o) || r.add(o);
      for (var a of n) t.has(a) || r.add(a);
      return r;
    }
    function f() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").KEYS.PRIMARY_FEATURES,
        ),
        t = g(e != null ? e : []);
      ((d = new Set(t)),
        (e != null || t.length > 0) &&
          o("WAWebBackendApi").frontendFireAndForget("setPrimaryFeatures", {
            primaryFeatures: t,
          }),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "primary features loaded",
            ])),
        ));
    }
    function g(e) {
      var t,
        n,
        o,
        a = e;
      if (r("gkx")("26258")) return a;
      var i = new URLSearchParams(
          (t = window.location.search) != null ? t : "",
        ),
        l = ((n = i.get("primary_features_enabled")) != null ? n : "")
          .split(",")
          .map(function (e) {
            return r("snakeCase")(e);
          })
          .filter(function (e) {
            return e !== "";
          });
      a = Array.from(new Set([].concat(a, l)));
      var s = new Set(
        ((o = i.get("primary_features_disabled")) != null ? o : "")
          .split(",")
          .map(function (e) {
            return r("snakeCase")(e);
          })
          .filter(function (e) {
            return e !== "";
          }),
      );
      return (
        (a = a.filter(function (e) {
          return !s.has(e);
        })),
        a
      );
    }
    ((l.primaryFeatureEnabled = m),
      (l.setPrimaryFeatures = p),
      (l.loadPrimaryFeatures = f));
  },
  98,
);
