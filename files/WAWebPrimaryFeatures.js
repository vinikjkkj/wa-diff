__d(
  "WAWebPrimaryFeatures",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebWorkerSafeBackendApi",
    "gkx",
    "snakeCase",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = null;
    function d(t) {
      return c == null
        ? (o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "primaryFeatureEnabled: features not initialized",
              ])),
          ),
          !1)
        : c.has(t);
    }
    async function m(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").KEYS.PRIMARY_FEATURES,
        e,
      );
      var t = c,
        n = new Set(_(e));
      ((c = n),
        o("WAWebBackendApi").frontendFireAndForget("setPrimaryFeatures", {
          primaryFeatures: Array.from(c),
        }));
      var r = (t == null ? void 0 : t.has("favorite_sticker")) === !0,
        a = n.has("favorite_sticker");
      !r &&
        a &&
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[primary features] favorite_sticker enabled, check orphans",
            ])),
        ),
        await o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
          "checkOrphanFavoriteStickers",
        ));
    }
    async function p() {
      var e,
        t =
          (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebUserPrefsKeys").KEYS.PRIMARY_FEATURES,
          )) != null
            ? e
            : [];
      ((t = _(t)),
        (c = new Set(t)),
        o("WAWebBackendApi").frontendFireAndForget("setPrimaryFeatures", {
          primaryFeatures: t,
        }),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "primary features loaded",
            ])),
        ));
    }
    function _(e) {
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
    ((l.primaryFeatureEnabled = d),
      (l.setPrimaryFeatures = m),
      (l.loadPrimaryFeatures = p));
  },
  98,
);
