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
      (o("WAWebABProps").setGetABPropConfigValueImpl(T, N),
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
      return $(a);
    }
    function D(e) {
      return e == null && r("justknobx")._("6581");
    }
    function x(e) {
      if (h.get(e) && !o("WAWebABPropsGlobals").accessedConfigs.has(e)) {
        var t,
          n = (t = h.get(e)) == null ? void 0 : t.configExpoKey;
        if (D(n)) return;
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
    function $(e) {
      x(e);
      var t = h.get(e);
      return r("gkx")("16539") &&
        (t == null ? void 0 : t.overriddenConfigValue) != null
        ? t.overriddenConfigValue
        : t == null
          ? void 0
          : t.configValue;
    }
    function P(e) {
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
    function N(e) {
      var t,
        n = k(e, (t = E()) == null ? void 0 : t.get(e)),
        a = o("WAWebABPropsConfigs").ABPropConfigs[e],
        i = a[0],
        l = y.resolveWasCalled() ? h.get(i) : null,
        s =
          r("gkx")("16539") &&
          (l == null ? void 0 : l.overriddenConfigValue) != null;
      return {
        isOverridden: n != null || s,
        hasServerValue: (l == null ? void 0 : l.configValue) != null,
      };
    }
    function M(e) {
      var t,
        n = o("WAWebABPropsConfigs").ABPropConfigs[e],
        r = n[0];
      return o("WAWebABPropsGlobals").accessedConfigs.has(r)
        ? (t = h.get(r)) == null
          ? void 0
          : t.configExpoKey
        : null;
    }
    function w() {
      return Array.from(h.values());
    }
    function A() {
      return h;
    }
    var F = 256 * 1024;
    function O(e, t, n) {
      var r = v(e);
      return r == null ? !1 : t === R(r, n);
    }
    function B(e, t) {
      var n = {};
      return (
        Object.keys(e).forEach(function (r) {
          var o = e[r];
          O(Number(r), o, t) || (n[r] = o);
        }),
        n
      );
    }
    function W() {
      try {
        var e = C;
        if (!r("justknobx")._("6120") || !V() || e == null || h.size === 0)
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
        var a = B(n, e);
        if (Object.keys(a).length === 0) return null;
        var i = JSON.stringify(a);
        return new Blob([i]).size > F
          ? (o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "ABProps exceed ",
                    "B, skipping bug report attachment",
                  ])),
                F,
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
    function q(e) {
      var t = !1;
      if (
        (e.forEach(function (e) {
          (h.set(e.configCode, e),
            e.hasAccessed === !0 &&
              !D(e.configExpoKey) &&
              (o("WAWebABPropsGlobals").accessedConfigs.add(e.configCode),
              e.configExpoKey != null &&
                (o("WAWebABPropsGlobals").exposureKeys.add(e.configExpoKey),
                (t = !0))));
        }),
        t && o("WAWebABPropsGlobals").updateGlobalExpoKey(),
        y.resolve(),
        !o("WAWebRuntimeEnvironmentUtils").isWorker())
      ) {
        var n = A(),
          r = Array.from(n.values()).map(function (e) {
            return {
              configCode: e.configCode,
              configValue: e.configValue,
              awaitingExpoKey: D(e.configExpoKey),
            };
          });
        o("WAWebBackendWorkerInitState").recordInitAbProps({
          configs: r,
          urlSearch: window.location.search,
        });
      }
    }
    function U() {
      return y.promise;
    }
    function V() {
      return y.resolveWasCalled();
    }
    function H() {
      (h.clear(),
        o("WAWebABPropsGlobals").accessedConfigs.clear(),
        o("WAWebABPropsGlobals").exposureKeys.clear(),
        (y = new (o("WAResolvable").Resolvable)()),
        (C = null));
    }
    ((l.getABPropConfigNameFromCode = v),
      (l.recordABPropsServedDevDefaults = S),
      (l.initializeABPropsCache = L),
      (l.saveExposure = x),
      (l.peekABPropConfigValue = P),
      (l.getABPropExpoKey = M),
      (l.getAllABPropConfigs = w),
      (l.getAllABPropsMap = A),
      (l.MAX_BUG_REPORT_ABPROPS_BYTES = F),
      (l.getABPropsJsonForBugReport = W),
      (l.bulkCreateOrReplaceABPropConfigs = q),
      (l.waitForABPropConfigsReady = U),
      (l.isABPropConfigsReady = V),
      (l.clearABPropConfigs = H));
  },
  98,
);
