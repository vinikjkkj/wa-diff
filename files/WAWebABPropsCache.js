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
    "getErrorSafe",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = null;
    function p() {
      var e = window.location.search;
      if (m == null || m.search !== e) {
        var t = new Map();
        (new URLSearchParams(e).forEach(function (e, n) {
          t.has(n) || t.set(n, e);
        }),
          (m = { search: e, params: t }));
      }
      return m.params;
    }
    var _ = 10,
      f = new Map();
    function g() {
      var e,
        t = r("err")("");
      return (e = t.stack) != null ? e : "";
    }
    var h = new Map(),
      y = new (o("WAResolvable").Resolvable)(),
      C = null,
      b;
    function v(e) {
      return (
        b == null &&
          ((b = {}),
          Object.keys(o("WAWebABPropsConfigs").ABPropConfigs).forEach(
            function (e) {
              var t = o("WAWebABPropsConfigs").ABPropConfigs[e],
                n = t[0];
              b[n] = e;
            },
          ),
          Object.freeze(b)),
        b[e]
      );
    }
    function S(e) {
      C = e;
    }
    function R(e, t) {
      var n = o("WAWebABPropsConfigs").ABPropConfigs[e],
        r = n[2],
        a = n[3];
      return t ? a : r;
    }
    function L() {
      (o("WAWebABProps").setGetABPropConfigValueImpl(T),
        o("WAWebGroupABPropsCache").initializeGroupABPropsCache());
    }
    function E() {
      return r("gkx")("16539") && !o("WAWebRuntimeEnvironmentUtils").isWorker()
        ? p()
        : null;
    }
    function k(e, t) {
      if (t == null || t === "") return null;
      var n = o("WAWebABPropsConfigs").ABPropConfigs[e],
        r = n[1],
        a = n[2],
        i = n[3],
        l = a;
      return o("WAWebABPropsParseConfigValue").parseConfigValue(t, r, l);
    }
    function I(e) {
      var t = E();
      t == null ||
        t.size === 0 ||
        Object.keys(o("WAWebABPropsConfigs").ABPropConfigs).forEach(
          function (n) {
            var r = k(n, t.get(n));
            r != null &&
              (e[String(o("WAWebABPropsConfigs").ABPropConfigs[n][0])] = r);
          },
        );
    }
    function T(e) {
      var t,
        n = k(e, (t = E()) == null ? void 0 : t.get(e));
      if (n != null) return n;
      var r = o("WAWebABPropsConfigs").ABPropConfigs[e],
        a = r[0],
        i = r[2],
        l = r[3],
        c = i;
      if (!y.resolveWasCalled()) {
        if (!o("WAWebABProps").usedBeforeInitializationConfigs.includes(e)) {
          var d,
            m = (d = f.get(e)) != null ? d : 0;
          m < _ &&
            (f.set(e, m + 1),
            m === 0
              ? o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[abprops] config accessed before init: ",
                      " stack: ",
                      "",
                    ])),
                  e,
                  g(),
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
      return x(a);
    }
    function D(e) {
      if (h.get(e) && !o("WAWebABPropsGlobals").accessedConfigs.has(e)) {
        var t,
          n = (t = h.get(e)) == null ? void 0 : t.configExpoKey;
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
    function x(e) {
      D(e);
      var t = h.get(e);
      return r("gkx")("16539") &&
        (t == null ? void 0 : t.overriddenConfigValue) != null
        ? t.overriddenConfigValue
        : t == null
          ? void 0
          : t.configValue;
    }
    function $() {
      return Array.from(h.values());
    }
    function P() {
      return h;
    }
    var N = 256 * 1024;
    function M(e, t, n) {
      var r = v(e);
      return r == null ? !1 : t === R(r, n);
    }
    function w(e, t) {
      var n = {};
      return (
        Object.keys(e).forEach(function (r) {
          var o = e[r];
          M(Number(r), o, t) || (n[r] = o);
        }),
        n
      );
    }
    function A() {
      try {
        var e = C;
        if (!r("justknobx")._("6120") || !B() || e == null || h.size === 0)
          return null;
        var t = r("gkx")("16539"),
          n = {};
        (h.forEach(function (e, r) {
          var o =
            t && e.overriddenConfigValue != null
              ? e.overriddenConfigValue
              : e.configValue;
          o != null && (n[String(r)] = o);
        }),
          I(n));
        var a = w(n, e);
        if (Object.keys(a).length === 0) return null;
        var i = JSON.stringify(a);
        return new Blob([i]).size > N
          ? (o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "ABProps exceed ",
                    "B, skipping bug report attachment",
                  ])),
                N,
              )
              .sendLogs("abprops-bug-report-too-large"),
            null)
          : i;
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "ABProps bug report serialization failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("abprops-bug-report-serialization-fail"),
          null
        );
      }
    }
    function F(e) {
      var t = !1;
      if (
        (e.forEach(function (e) {
          (h.set(e.configCode, e),
            e.hasAccessed === !0 &&
              (o("WAWebABPropsGlobals").accessedConfigs.add(e.configCode),
              e.configExpoKey != null &&
                (o("WAWebABPropsGlobals").exposureKeys.add(e.configExpoKey),
                (t = !0))));
        }),
        t && o("WAWebABPropsGlobals").updateGlobalExpoKey(),
        y.resolve(),
        !o("WAWebRuntimeEnvironmentUtils").isWorker())
      ) {
        var n = P(),
          r = Array.from(n.values()).map(function (e) {
            return { configCode: e.configCode, configValue: e.configValue };
          });
        o("WAWebBackendWorkerInitState").recordInitAbProps({
          configs: r,
          urlSearch: window.location.search,
        });
      }
    }
    function O() {
      return y.promise;
    }
    function B() {
      return y.resolveWasCalled();
    }
    function W() {
      (h.clear(),
        o("WAWebABPropsGlobals").accessedConfigs.clear(),
        o("WAWebABPropsGlobals").exposureKeys.clear(),
        (y = new (o("WAResolvable").Resolvable)()),
        (C = null));
    }
    ((l.getABPropConfigNameFromCode = v),
      (l.recordABPropsServedDevDefaults = S),
      (l.initializeABPropsCache = L),
      (l.saveExposure = D),
      (l.getAllABPropConfigs = $),
      (l.getAllABPropsMap = P),
      (l.MAX_BUG_REPORT_ABPROPS_BYTES = N),
      (l.getABPropsJsonForBugReport = A),
      (l.bulkCreateOrReplaceABPropConfigs = F),
      (l.waitForABPropConfigsReady = O),
      (l.isABPropConfigsReady = B),
      (l.clearABPropConfigs = W));
  },
  98,
);
