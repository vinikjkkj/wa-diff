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
      u = null;
    function c() {
      var e = window.location.search;
      if (u == null || u.search !== e) {
        var t = new Map();
        (new URLSearchParams(e).forEach(function (e, n) {
          t.has(n) || t.set(n, e);
        }),
          (u = { search: e, params: t }));
      }
      return u.params;
    }
    var d = 10,
      m = new Map();
    function p() {
      var e,
        t = r("err")("");
      return (e = t.stack) != null ? e : "";
    }
    var _ = new Map(),
      f = new (o("WAResolvable").Resolvable)(),
      g;
    function h(e) {
      return (
        g == null &&
          ((g = {}),
          Object.keys(o("WAWebABPropsConfigs").ABPropConfigs).forEach(
            function (e) {
              var t = o("WAWebABPropsConfigs").ABPropConfigs[e],
                n = t[0];
              g[n] = e;
            },
          ),
          Object.freeze(g)),
        g[e]
      );
    }
    function y() {
      (o("WAWebABProps").setGetABPropConfigValueImpl(C),
        o("WAWebGroupABPropsCache").initializeGroupABPropsCache());
    }
    function C(t) {
      var n = o("WAWebABPropsConfigs").ABPropConfigs[t],
        a = n[0],
        i = n[1],
        l = n[2],
        u = n[3],
        _ = l;
      if (!r("gkx")("26258") && !o("WAWebRuntimeEnvironmentUtils").isWorker()) {
        var g = c();
        if (g) {
          var h = g.get(t);
          if (h != null && h !== "")
            return o("WAWebABPropsParseConfigValue").parseConfigValue(h, i, _);
        }
      }
      if (!f.resolveWasCalled()) {
        if (!o("WAWebABProps").usedBeforeInitializationConfigs.includes(t)) {
          var y,
            C = (y = m.get(t)) != null ? y : 0;
          C < d &&
            (m.set(t, C + 1),
            C === 0 && !r("gkx")("17264")
              ? o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[abprops] config accessed before init: ",
                      " stack: ",
                      "",
                    ])),
                  t,
                  p(),
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
        return _;
      }
      return v(a);
    }
    function b(e) {
      if (_.get(e) && !o("WAWebABPropsGlobals").accessedConfigs.has(e)) {
        var t,
          n = (t = _.get(e)) == null ? void 0 : t.configExpoKey;
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
    function v(e) {
      b(e);
      var t = _.get(e);
      return !r("gkx")("26258") &&
        (t == null ? void 0 : t.overriddenConfigValue) != null
        ? t.overriddenConfigValue
        : t == null
          ? void 0
          : t.configValue;
    }
    function S() {
      return Array.from(_.values());
    }
    function R() {
      return _;
    }
    function L(e) {
      var t = !1;
      (e.forEach(function (e) {
        (_.set(e.configCode, e),
          e.hasAccessed === !0 &&
            (o("WAWebABPropsGlobals").accessedConfigs.add(e.configCode),
            e.configExpoKey != null &&
              (o("WAWebABPropsGlobals").exposureKeys.add(e.configExpoKey),
              (t = !0))));
      }),
        t && o("WAWebABPropsGlobals").updateGlobalExpoKey(),
        f.resolve());
      var n = R(),
        r = Array.from(n.values()).map(function (e) {
          return { configCode: e.configCode, configValue: e.configValue };
        });
      o("WAWebBackendWorkerInitState").recordInitAbProps({
        configs: r,
        urlSearch: window.location.search,
      });
    }
    function E() {
      return f.promise;
    }
    function k() {
      return f.resolveWasCalled();
    }
    function I() {
      (_.clear(),
        o("WAWebABPropsGlobals").accessedConfigs.clear(),
        o("WAWebABPropsGlobals").exposureKeys.clear(),
        (f = new (o("WAResolvable").Resolvable)()));
    }
    ((l.getABPropConfigNameFromCode = h),
      (l.initializeABPropsCache = y),
      (l.saveExposure = b),
      (l.getAllABPropConfigs = S),
      (l.getAllABPropsMap = R),
      (l.bulkCreateOrReplaceABPropConfigs = L),
      (l.waitForABPropConfigsReady = E),
      (l.isABPropConfigsReady = k),
      (l.clearABPropConfigs = I));
  },
  98,
);
