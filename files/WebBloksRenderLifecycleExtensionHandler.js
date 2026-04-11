__d(
  "WebBloksRenderLifecycleExtensionHandler",
  [],
  function (t, n, r, o, a, i) {
    var e = {
        hasLayoutWrapper: function () {
          return !1;
        },
        onMount: function (t, n, r) {
          var e = t.getExpression("on_component_rendered");
          e != null && r.executeOnNextTickCatch(n.current, e, [n.current, r]);
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
