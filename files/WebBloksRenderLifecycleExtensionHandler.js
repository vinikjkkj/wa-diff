__d(
  "WebBloksRenderLifecycleExtensionHandler",
  [],
  function (t, n, r, o, a, i) {
    var e = "#",
      l = {
        hasLayoutWrapper: function () {
          return !1;
        },
        onMount: function (n, r, o) {
          var t = n.getExpression(e);
          t != null && o.executeOnNextTickCatch(r.current, t, [r.current, o]);
        },
      },
      s = l;
    i.default = s;
  },
  66,
);
