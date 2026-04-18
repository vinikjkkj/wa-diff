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
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 10,
      d = new Map();
    function m() {
      var e,
        t = r("err")("");
      return (e = t.stack) != null ? e : "";
    }
    var p = new Map(),
      _ = new (o("WAResolvable").Resolvable)(),
      f;
    function g(e) {
      return (
        f == null &&
          ((f = {}),
          Object.keys(o("WAWebABPropsConfigs").ABPropConfigs).forEach(
            function (e) {
              var t = o("WAWebABPropsConfigs").ABPropConfigs[e],
                n = t[0];
              f[n] = e;
            },
          ),
          Object.freeze(f)),
        f[e]
      );
    }
    function h() {
      (o("WAWebABProps").setGetABPropConfigValueImpl(y),
        o("WAWebGroupABPropsCache").initializeGroupABPropsCache());
    }
    function y(t) {
      var a = o("WAWebABPropsConfigs").ABPropConfigs[t],
        i = a[0],
        l = a[1],
        u = a[2],
        p = a[3],
        f = u;
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
      if (!_.resolveWasCalled()) {
        if (!o("WAWebABProps").usedBeforeInitializationConfigs.includes(t)) {
          var y,
            C = (y = d.get(t)) != null ? y : 0;
          C < c &&
            (d.set(t, C + 1),
            C === 0 && !r("gkx")("17264")
              ? o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[abprops] config accessed before init: ",
                      " stack: ",
                      "",
                    ])),
                  t,
                  m(),
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
      return b(i);
    }
    function C(e) {
      if (p.get(e) && !o("WAWebABPropsGlobals").accessedConfigs.has(e)) {
        var t,
          n = (t = p.get(e)) == null ? void 0 : t.configExpoKey;
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
    function b(e) {
      C(e);
      var t = p.get(e);
      return !r("gkx")("26258") &&
        (t == null ? void 0 : t.overriddenConfigValue) != null
        ? t.overriddenConfigValue
        : t == null
          ? void 0
          : t.configValue;
    }
    function v() {
      return Array.from(p.values());
    }
    function S() {
      return p;
    }
    function R(e) {
      var t = !1;
      (e.forEach(function (e) {
        (p.set(e.configCode, e),
          e.hasAccessed === !0 &&
            (o("WAWebABPropsGlobals").accessedConfigs.add(e.configCode),
            e.configExpoKey != null &&
              (o("WAWebABPropsGlobals").exposureKeys.add(e.configExpoKey),
              (t = !0))));
      }),
        t && o("WAWebABPropsGlobals").updateGlobalExpoKey(),
        _.resolve(),
        o("WAWebBackendWorkerClient")
          .getBackendWorkerBridge()
          .then(function (e) {
            var t = S(),
              n = Array.from(t.values()).map(function (e) {
                return { configCode: e.configCode, configValue: e.configValue };
              });
            return e.sendAndReceive("abProps", "update", {
              configs: n,
              urlSearch: window.location.search,
            });
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Error on syncing abprops with backend worker: ",
                    "",
                  ])),
                r("getErrorSafe")(e),
              )
              .sendLogs("worker-abprop-sync-failed");
          }));
    }
    function L() {
      return _.promise;
    }
    function E() {
      return _.resolveWasCalled();
    }
    function k() {
      (p.clear(),
        o("WAWebABPropsGlobals").accessedConfigs.clear(),
        o("WAWebABPropsGlobals").exposureKeys.clear(),
        (_ = new (o("WAResolvable").Resolvable)()));
    }
    ((l.getABPropConfigNameFromCode = g),
      (l.initializeABPropsCache = h),
      (l.saveExposure = C),
      (l.getAllABPropConfigs = v),
      (l.getAllABPropsMap = S),
      (l.bulkCreateOrReplaceABPropConfigs = R),
      (l.waitForABPropConfigsReady = L),
      (l.isABPropConfigsReady = E),
      (l.clearABPropConfigs = k));
  },
  98,
);
