__d(
  "WAWebProductCatalogCheckCartEnabled",
  ["WAWebBusinessProfileCollection"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t,
        n = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
          e,
        );
      if (!n || n.stale) {
        var r = await o(
          "WAWebBusinessProfileCollection",
        ).BusinessProfileCollection.update(e);
        n = Array.isArray(r) ? r[0] : r;
      }
      return ((t = n.profileOptions) == null ? void 0 : t.cartEnabled) || !1;
    }
    l.default = e;
  },
  98,
);
