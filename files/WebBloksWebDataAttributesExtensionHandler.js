__d(
  "WebBloksWebDataAttributesExtensionHandler",
  [],
  function (t, n, r, o, a, i) {
    var e = /^[a-z0-9_-]+$/,
      l = new Set(["bloks-name", "testid", "anchor-id"]),
      s = {
        getProps: function (n) {
          var t = n.get("attributes");
          if (t != null) {
            var r = {};
            for (var o of Object.keys(t))
              e.test(o) && !l.has(o) && (r["data-" + o] = t[o]);
            return r;
          }
        },
      },
      u = s;
    i.default = u;
  },
  66,
);
