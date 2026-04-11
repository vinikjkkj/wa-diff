__d(
  "WAWebCartGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createCartCache,
      }),
      s = e.field,
      u = s("itemCount");
    l.getCartItemCount = u;
  },
  98,
);
