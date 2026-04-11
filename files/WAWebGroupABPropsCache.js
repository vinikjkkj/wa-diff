__d(
  "WAWebGroupABPropsCache",
  [
    "WALogger",
    "WAResolvable",
    "WAWebGroupABPropsConfigs",
    "WAWebGroupABPropsGlobals",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Map(),
      u = new Map(),
      c = new (o("WAResolvable").Resolvable)(),
      d = null;
    function m() {
      d = f;
    }
    function p() {
      return d;
    }
    function _(e, t) {
      var n,
        r = s.get(e);
      if (r != null) {
        var a = u.get(e);
        if ((a == null && ((a = new Set()), u.set(e, a)), !a.has(t))) {
          var i = (n = r.get(t)) == null ? void 0 : n.configExpoKey;
          if (i != null) {
            var l = o("WAWebGroupABPropsGlobals").groupExposureKeys.get(e);
            (l == null &&
              ((l = new Set()),
              o("WAWebGroupABPropsGlobals").groupExposureKeys.set(e, l)),
              l.has(i) ||
                (l.add(i),
                o("WAWebGroupABPropsGlobals").updateGroupExpoKey(e)));
          }
          a.add(t);
        }
      }
    }
    function f(t, n) {
      var a = o("WAWebGroupABPropsConfigs").ABPropConfigs[n],
        i = a[0];
      if (!c.resolveWasCalled()) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[group-abprops] access before init: ",
              "",
            ])),
          n,
        );
        return;
      }
      var l = s.get(t),
        u = l == null ? void 0 : l.get(i);
      if (u != null)
        return (
          _(t, i),
          !r("gkx")("26258") && u.overriddenConfigValue != null
            ? u.overriddenConfigValue
            : u.configValue
        );
    }
    function g(e, t) {
      var n = s.get(e);
      n == null && ((n = new Map()), s.set(e, n));
      var r = !1;
      for (var a of t)
        if ((n.set(a.configCode, a), a.hasAccessed === !0)) {
          var i = u.get(e);
          (i == null && ((i = new Set()), u.set(e, i)), i.add(a.configCode));
          var l = a.configExpoKey;
          if (l != null) {
            var d = o("WAWebGroupABPropsGlobals").groupExposureKeys.get(e);
            (d == null &&
              ((d = new Set()),
              o("WAWebGroupABPropsGlobals").groupExposureKeys.set(e, d)),
              d.add(l),
              (r = !0));
          }
        }
      (r && o("WAWebGroupABPropsGlobals").updateGroupExpoKey(e), c.resolve());
    }
    function h() {
      return c.promise;
    }
    function y(e) {
      var t = s.get(e);
      return t == null ? [] : Array.from(t.values());
    }
    function C() {
      (s.clear(),
        u.clear(),
        o("WAWebGroupABPropsGlobals").groupExposureKeys.clear(),
        (c = new (o("WAResolvable").Resolvable)()));
    }
    ((l.groupAccessedConfigs = u),
      (l.initializeGroupABPropsCache = m),
      (l.getGetGroupABPropConfigValueImpl = p),
      (l.bulkCreateOrReplaceGroupABPropConfigs = g),
      (l.waitForGroupABPropConfigsReady = h),
      (l.getAllGroupABPropConfigsForGroup = y),
      (l.clearGroupABPropConfigs = C));
  },
  98,
);
