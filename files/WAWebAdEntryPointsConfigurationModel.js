__d(
  "WAWebAdEntryPointsConfigurationModel",
  [
    "WALogger",
    "WAWebBizGatingUtils",
    "WAWebBusinessAdCreationUtils",
    "WAWebEventEmitter",
    "WAWebFetchAdEntryPointsConfiguration",
    "WAWebL10N",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = null,
      c = new (r("WAWebEventEmitter"))(),
      d;
    function m(t) {
      if (
        ((u = t),
        o(
          "WAWebBusinessAdCreationUtils",
        ).ServerConfigurableAdCreationEndpointsAll.forEach(function (e) {
          c.trigger("updated:" + e);
        }),
        u === "failed-to-load-recovery-required")
      ) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[setAdEntryPointsConfiguration] load failed, recovery needed",
            ])),
        );
        return;
      }
      d == null &&
        o("WAWebBizGatingUtils").adEntryPointsConfigurationFetchM1Enabled() &&
        (d = r("WAWebL10N").on("locale_change", function () {
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[setAdEntryPointsConfiguration] locale changed, fetch config",
              ])),
          ),
            o(
              "WAWebFetchAdEntryPointsConfiguration",
            ).fetchAdEntryPointsConfiguration("locale-change"));
        }));
    }
    function p(e) {
      c.trigger("loaded", e.type);
    }
    function _(e) {
      return e != null && e !== "not-linked" && !e.hasCreatedAd;
    }
    function f(e, t) {
      var n = o(
          "WAWebBizGatingUtils",
        ).isInLongTermHoldoutFallbackWhenAdEntryPointsConfigurationMissing(),
        r = g(e, t);
      return n || r;
    }
    function g(e, t) {
      if (
        !o("WAWebBizGatingUtils").adEntryPointsConfigurationFetchEnabled() ||
        u == null
      )
        return !1;
      if (u === "failed-to-load-recovery-required") return _(t);
      var n = u.entryPoints[e];
      return n == null ? !1 : !n.shouldShow;
    }
    function h(e) {
      if (
        !o("WAWebBizGatingUtils").adEntryPointsConfigurationFetchM1Enabled() ||
        u == null ||
        u === "failed-to-load-recovery-required"
      )
        return null;
      var t = u,
        n = t.entryPoints,
        a = t.locale;
      if (a !== r("WAWebL10N").getLocale()) return null;
      var i = n[e];
      if (i == null) return null;
      var l = i.content,
        s = i.subContent;
      return l == null && s == null
        ? null
        : { content: l != null ? l : null, subContent: s != null ? s : null };
    }
    ((l.AdEntryPointsEventBus = c),
      (l.setAdEntryPointsConfiguration = m),
      (l.notifyAdEntryPointsConfigurationLoaded = p),
      (l.isEndpointGatedByServer = f),
      (l.getEndpointContentTexts = h));
  },
  98,
);
