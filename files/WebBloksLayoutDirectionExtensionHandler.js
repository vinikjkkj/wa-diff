__d(
  "WebBloksLayoutDirectionExtensionHandler",
  ["WebBloksModel"],
  function (t, n, r, o, a, i, l) {
    var e = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      s = {
        getProps: function (n) {
          return { dir: n.get(e) };
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
