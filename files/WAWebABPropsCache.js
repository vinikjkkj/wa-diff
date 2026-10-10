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
    function $(e) {
      var t,
        n = k(e, (t = E()) == null ? void 0 : t.get(e));
      if (n != null) return { value: n, source: "url_override" };
      var a = o("WAWebABPropsConfigs").ABPropConfigs[e],
        i = a[0],
        l = a[2],
        s = a[3],
        u = y.resolveWasCalled() ? h.get(i) : null;
      return r("gkx")("16539") &&
        (u == null ? void 0 : u.overriddenConfigValue) != null
        ? { value: u.overriddenConfigValue, source: "local_override" }
        : (u == null ? void 0 : u.configValue) != null
          ? { value: u.configValue, source: "server" }
          : { value: l, source: "default" };
    }
    function P() {
      return Array.from(h.values());
    }
    function N() {
      return h;
    }
    var M = 256 * 1024;
    function w(e, t, n) {
      var r = v(e);
      return r == null ? !1 : t === R(r, n);
    }
    function A(e, t) {
      var n = {};
      return (
        Object.keys(e).forEach(function (r) {
          var o = e[r];
          w(Number(r), o, t) || (n[r] = o);
        }),
        n
      );
    }
    function F() {
      try {
        var e = C;
        if (!r("justknobx")._("6120") || !W() || e == null || h.size === 0)
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
        var a = A(n, e);
        if (Object.keys(a).length === 0) return null;
        var i = JSON.stringify(a);
        return new Blob([i]).size > M
          ? (o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "ABProps exceed ",
                    "B, skipping bug report attachment",
                  ])),
                M,
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
    function O(e) {
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
        var n = N(),
          r = Array.from(n.values()).map(function (e) {
            return { configCode: e.configCode, configValue: e.configValue };
          });
        o("WAWebBackendWorkerInitState").recordInitAbProps({
          configs: r,
          urlSearch: window.location.search,
        });
      }
    }
    function B() {
      return y.promise;
    }
    function W() {
      return y.resolveWasCalled();
    }
    function q() {
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
      (l.peekABPropConfigValue = $),
      (l.getAllABPropConfigs = P),
      (l.getAllABPropsMap = N),
      (l.MAX_BUG_REPORT_ABPROPS_BYTES = M),
      (l.getABPropsJsonForBugReport = F),
      (l.bulkCreateOrReplaceABPropConfigs = O),
      (l.waitForABPropConfigsReady = B),
      (l.isABPropConfigsReady = W),
      (l.clearABPropConfigs = q));
  },
  98,
);
