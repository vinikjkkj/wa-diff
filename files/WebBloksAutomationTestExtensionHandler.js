__d(
  "WebBloksAutomationTestExtensionHandler",
  ["WebBloksModel"],
  function (t, n, r, o, a, i, l) {
    var e = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      s = {
        getProps: function (n) {
          var t = n.get(e);
          if (t != null) return { "data-testid": t };
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
