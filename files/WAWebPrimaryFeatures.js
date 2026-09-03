__d(
  "WAWebPrimaryFeatures",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
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
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").KEYS.PRIMARY_FEATURES,
            e,
          );
          var t = d,
            n = new Set(h(e));
          ((d = n),
            o("WAWebBackendApi").frontendFireAndForget("setPrimaryFeatures", {
              primaryFeatures: Array.from(d),
            }));
          try {
            o("WAWebBackendEventBusWorkerCompatible")
              .getBackendEventBus()
              .triggerPrimaryFeaturesSynced(f(t, n));
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
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
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[primary features] favorite_sticker enabled, check orphans",
                ])),
            ),
            yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "checkOrphanFavoriteStickers",
            ));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      var n = e != null ? e : new Set(),
        r = new Set();
      for (var o of t) n.has(o) || r.add(o);
      for (var a of n) t.has(a) || r.add(a);
      return r;
    }
    function g() {
      var e,
        t =
          (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebUserPrefsKeys").KEYS.PRIMARY_FEATURES,
          )) != null
            ? e
            : [];
      ((t = h(t)),
        (d = new Set(t)),
        o("WAWebBackendApi").frontendFireAndForget("setPrimaryFeatures", {
          primaryFeatures: t,
        }),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "primary features loaded",
            ])),
        ));
    }
    function h(e) {
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
          });
      a = Array.from(new Set([].concat(a, l)));
      var s = new Set(
        ((o = i.get("primary_features_disabled")) != null ? o : "")
          .split(",")
          .map(function (e) {
            return r("snakeCase")(e);
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
      (l.loadPrimaryFeatures = g));
  },
  98,
);
