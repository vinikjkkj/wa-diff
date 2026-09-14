__d(
  "WebBloksRenderLifecycleExtensionHandler",
  ["WebBloksModel"],
  function (t, n, r, o, a, i, l) {
    var e = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      s = {
        hasLayoutWrapper: function () {
          return !1;
        },
        onMount: function (n, r, o) {
          var t = n.getExpression(e);
          t != null && o.executeOnNextTickCatch(r.current, t, [r.current, o]);
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
