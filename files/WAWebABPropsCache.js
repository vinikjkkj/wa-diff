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
    "WAWebBackendWorkerClient",
    "WAWebGroupABPropsCache",
    "WAWebRuntimeEnvironmentUtils",
    "cr:4941",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 10,
      c = new Map();
    function d() {
      var e,
        t = r("err")("");
      return (e = t.stack) != null ? e : "";
    }
    var m = new Map(),
      p = new (o("WAResolvable").Resolvable)(),
      _;
    function f(e) {
      return (
        _ == null &&
          ((_ = {}),
          Object.keys(o("WAWebABPropsConfigs").ABPropConfigs).forEach(
            function (e) {
              var t = o("WAWebABPropsConfigs").ABPropConfigs[e],
                n = t[0];
              _[n] = e;
            },
          ),
          Object.freeze(_)),
        _[e]
      );
    }
    function g() {
      (o("WAWebABProps").setGetABPropConfigValueImpl(h),
        o("WAWebGroupABPropsCache").initializeGroupABPropsCache());
    }
    function h(t) {
      var a = o("WAWebABPropsConfigs").ABPropConfigs[t],
        i = a[0],
        l = a[1],
        m = a[2],
        _ = a[3],
        f = m;
      if (
        !r("gkx")("26258") &&
        !o("WAWebRuntimeEnvironmentUtils").isWorker() &&
        n("cr:4941")
      ) {
        var g = new (n("cr:4941"))(window.location.search),
          h = g.get(t);
        if (h != null && h !== "")
          return o("WAWebABPropsParseConfigValue").parseConfigValue(h, l, f);
      }
      if (!p.resolveWasCalled()) {
        if (!o("WAWebABProps").usedBeforeInitializationConfigs.includes(t)) {
          var y,
            b = (y = c.get(t)) != null ? y : 0;
          b < u &&
            (c.set(t, b + 1),
            b === 0 && !r("gkx")("17264")
              ? o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[abprops] config accessed before init: ",
                      " stack: ",
                      "",
                    ])),
                  t,
                  d(),
                )
              : o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[abprops] config accessed before init: ",
                      "",
                    ])),
                  t,
                ));
        }
        return f;
      }
      return C(i);
    }
    function y(e) {
      if (m.get(e) && !o("WAWebABPropsGlobals").accessedConfigs.has(e)) {
        var t,
          n = (t = m.get(e)) == null ? void 0 : t.configExpoKey;
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
    function C(e) {
      y(e);
      var t = m.get(e);
      return !r("gkx")("26258") &&
        (t == null ? void 0 : t.overriddenConfigValue) != null
        ? t.overriddenConfigValue
        : t == null
          ? void 0
          : t.configValue;
    }
    function b() {
      return Array.from(m.values());
    }
    function v() {
      return m;
    }
    function S(e) {
      var t = !1;
      (e.forEach(function (e) {
        (m.set(e.configCode, e),
          e.hasAccessed === !0 &&
            (o("WAWebABPropsGlobals").accessedConfigs.add(e.configCode),
            e.configExpoKey != null &&
              (o("WAWebABPropsGlobals").exposureKeys.add(e.configExpoKey),
              (t = !0))));
      }),
        t && o("WAWebABPropsGlobals").updateGlobalExpoKey(),
        p.resolve());
      var n = v(),
        r = Array.from(n.values()).map(function (e) {
          return { configCode: e.configCode, configValue: e.configValue };
        });
      o("WAWebBackendWorkerClient").recordInitAbProps({
        configs: r,
        urlSearch: window.location.search,
      });
    }
    function R() {
      return p.promise;
    }
    function L() {
      return p.resolveWasCalled();
    }
    function E() {
      (m.clear(),
        o("WAWebABPropsGlobals").accessedConfigs.clear(),
        o("WAWebABPropsGlobals").exposureKeys.clear(),
        (p = new (o("WAResolvable").Resolvable)()));
    }
    ((l.getABPropConfigNameFromCode = f),
      (l.initializeABPropsCache = g),
      (l.saveExposure = y),
      (l.getAllABPropConfigs = b),
      (l.getAllABPropsMap = v),
      (l.bulkCreateOrReplaceABPropConfigs = S),
      (l.waitForABPropConfigsReady = R),
      (l.isABPropConfigsReady = L),
      (l.clearABPropConfigs = E));
  },
  98,
);
