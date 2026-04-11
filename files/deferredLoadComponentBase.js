__d(
  "deferredLoadComponentBase",
  [
    "ExecutionEnvironment",
    "Promise",
    "PromiseAnnotate",
    "react",
    "suspendOrThrowIfUsedInSSR",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = ["loadImmediately"],
      u,
      c,
      d,
      m,
      p,
      _ = p || (p = r("react")),
      f = {},
      g = {},
      h = new Map();
    function y(e, t) {
      h.set(e, t);
    }
    function C(e) {
      return h.get(e);
    }
    function b(t, a) {
      var l = C(t);
      if (l) return l;
      var p,
        h = t.getModuleId();
      function b() {
        var e = g[h];
        return (
          e ||
            (e = g[h] =
              new (c || (c = n("Promise")))(function (e) {
                t.loadImmediately(function (t) {
                  (delete g[h], (p = a(t)), e());
                });
              })),
          e
        );
      }
      function v() {
        var e = f[h];
        return (
          e ||
            (e = f[h] =
              new (c || (c = n("Promise")))(function (e) {
                t.onReady(function (t) {
                  ((p = a(t)), delete f[h], e());
                });
              })),
          e
        );
      }
      function S(n) {
        var i = n.ref,
          l = babelHelpers.objectWithoutPropertiesLoose(n, e),
          c = l.loadImmediately,
          f = babelHelpers.objectWithoutPropertiesLoose(l, s);
        if (!p) {
          var g = t.getModuleIfRequireable();
          if ((g != null && (p = a(g)), !p)) {
            !(d || (d = r("ExecutionEnvironment"))).isInBrowser &&
              !t.isAvailableInSSR_DO_NOT_USE() &&
              (m || (m = r("suspendOrThrowIfUsedInSSR")))(
                "Loading bootloaded and T3 components are disabled during SSR",
              );
            var h = c === !0 ? b() : v();
            throw (
              (u || (u = o("PromiseAnnotate"))).setDisplayName(
                h,
                S.displayName,
              ),
              h
            );
          }
        }
        return _.jsx(p, babelHelpers.extends({}, f, { ref: i }));
      }
      S.displayName = S.name + " [from " + i.id + "]";
      var R = t.getModuleId();
      (t.isRequireDeferredForDisplay() === !0
        ? (R = "requireDeferredForDisplay" + ("(" + t.getModuleId() + ")"))
        : t.isRequireDeferredForDisplay() === !1 &&
          (R = "requireDeferred" + ("(" + t.getModuleId() + ")")),
        (S.displayName = "deferredLoadComponent(" + R + ")"));
      var L = S;
      return (y(t, L), L);
    }
    l.default = b;
  },
  98,
);
