__d(
  "WebBloksWebDataAttributesExtensionHandler",
  ["WebBloksModel"],
  function (t, n, r, o, a, i, l) {
    var e = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      s = /^[a-z0-9_-]+$/,
      u = new Set(["bloks-name", "testid", "anchor-id"]),
      c = {
        getProps: function (n) {
          var t = n.get(e);
          if (t != null) {
            var r = {};
            for (var o of Object.keys(t))
              s.test(o) && !u.has(o) && (r["data-" + o] = t[o]);
            return r;
          }
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
