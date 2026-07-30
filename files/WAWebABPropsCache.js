__d(
  "WAWebABPropsCache",
  [
    "WALogger",
    "WAResolvable",
    "WAWebABProps",
    "WAWebABPropsConfigs",
    "WAWebABPropsGlobals",
    "WAWebABPropsParseConfigValue",
    "WAWebApiAbPropConfig",
    "WAWebBackendWorkerInitState",
    "WAWebGroupABPropsCache",
    "WAWebRuntimeEnvironmentUtils",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = null;
    function d() {
      var e = window.location.search;
      if (c == null || c.search !== e) {
        var t = new Map();
        (new URLSearchParams(e).forEach(function (e, n) {
          t.has(n) || t.set(n, e);
        }),
          (c = { search: e, params: t }));
      }
      return c.params;
    }
    var m = 10,
      p = new Map();
    function _() {
      var e,
        t = r("err")("");
      return (e = t.stack) != null ? e : "";
    }
    var f = new Map(),
      g = new (o("WAResolvable").Resolvable)(),
      h;
    function y(e) {
      return (
        h == null &&
          ((h = {}),
          Object.keys(o("WAWebABPropsConfigs").ABPropConfigs).forEach(
            function (e) {
              var t = o("WAWebABPropsConfigs").ABPropConfigs[e],
                n = t[0];
              h[n] = e;
            },
          ),
          Object.freeze(h)),
        h[e]
      );
    }
    function C() {
      (o("WAWebABProps").setGetABPropConfigValueImpl(b),
        o("WAWebGroupABPropsCache").initializeGroupABPropsCache());
    }
    function b(e) {
      var t = o("WAWebABPropsConfigs").ABPropConfigs[e],
        n = t[0],
        a = t[1],
        i = t[2],
        l = t[3],
        c = i;
      if (!r("gkx")("26258") && !o("WAWebRuntimeEnvironmentUtils").isWorker()) {
        var f = d();
        if (f) {
          var h = f.get(e);
          if (h != null && h !== "")
            return o("WAWebABPropsParseConfigValue").parseConfigValue(h, a, c);
        }
      }
      if (!g.resolveWasCalled()) {
        if (!o("WAWebABProps").usedBeforeInitializationConfigs.includes(e)) {
          var y,
            C = (y = p.get(e)) != null ? y : 0;
          C < m &&
            (p.set(e, C + 1),
            C === 0
              ? o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[abprops] config accessed before init: ",
                      " stack: ",
                      "",
                    ])),
                  e,
                  _(),
                )
              : o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[abprops] config accessed before init: ",
                      "",
                    ])),
                  e,
                ));
        }
        return c;
      }
      return S(n);
    }
    function v(e) {
      if (f.get(e) && !o("WAWebABPropsGlobals").accessedConfigs.has(e)) {
        var t,
          n = (t = f.get(e)) == null ? void 0 : t.configExpoKey;
        (n != null &&
          !o("WAWebABPropsGlobals").exposureKeys.has(n) &&
          (o("WAWebABPropsGlobals").exposureKeys.add(n),
          o("WAWebABPropsGlobals").updateGlobalExpoKey()),
          o("WAWebABPropsGlobals").accessedConfigs.add(e),
          self.setTimeout(function () {
            return o("WAWebApiAbPropConfig").setConfigAccessed(e);
          }, 0));
      }
    }
    function S(e) {
      v(e);
      var t = f.get(e);
      return !r("gkx")("26258") &&
        (t == null ? void 0 : t.overriddenConfigValue) != null
        ? t.overriddenConfigValue
        : t == null
          ? void 0
          : t.configValue;
    }
    function R() {
      return Array.from(f.values());
    }
    function L() {
      return f;
    }
    function E(e) {
      var t = !1;
      (e.forEach(function (e) {
        (f.set(e.configCode, e),
          e.hasAccessed === !0 &&
            (o("WAWebABPropsGlobals").accessedConfigs.add(e.configCode),
            e.configExpoKey != null &&
              (o("WAWebABPropsGlobals").exposureKeys.add(e.configExpoKey),
              (t = !0))));
      }),
        t && o("WAWebABPropsGlobals").updateGlobalExpoKey(),
        g.resolve());
      var n = L(),
        r = Array.from(n.values()).map(function (e) {
          return { configCode: e.configCode, configValue: e.configValue };
        });
      o("WAWebBackendWorkerInitState").recordInitAbProps({
        configs: r,
        urlSearch: window.location.search,
      });
    }
    function k() {
      return g.promise;
    }
    function I() {
      return g.resolveWasCalled();
    }
    function T() {
      (f.clear(),
        o("WAWebABPropsGlobals").accessedConfigs.clear(),
        o("WAWebABPropsGlobals").exposureKeys.clear(),
        (g = new (o("WAResolvable").Resolvable)()));
    }
    ((l.getABPropConfigNameFromCode = y),
      (l.initializeABPropsCache = C),
      (l.saveExposure = v),
      (l.getAllABPropConfigs = R),
      (l.getAllABPropsMap = L),
      (l.bulkCreateOrReplaceABPropConfigs = E),
      (l.waitForABPropConfigsReady = k),
      (l.isABPropConfigsReady = I),
      (l.clearABPropConfigs = T));
  },
  98,
);
