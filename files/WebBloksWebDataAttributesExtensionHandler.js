__d(
  "WebBloksWebDataAttributesExtensionHandler",
  [],
  function (t, n, r, o, a, i) {
    var e = "#",
      l = /^[a-z0-9_-]+$/,
      s = new Set(["bloks-name", "testid", "anchor-id"]),
      u = {
        getProps: function (n) {
          var t = n.get(e);
          if (t != null) {
            var r = {};
            for (var o of Object.keys(t))
              l.test(o) && !s.has(o) && (r["data-" + o] = t[o]);
            return r;
          }
        },
      },
      c = u;
    i.default = c;
  },
  66,
);
