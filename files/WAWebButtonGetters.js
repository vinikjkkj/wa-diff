__d(
  "WAWebButtonGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createButtonCache,
      }),
      s = e.field,
      u = e.unsafeIdentityGetter,
      c = u,
      d = o("WAWebGetters").createGetterFactories({
        root: c,
        createCache: o("WAWebGettersCaches").createFrontendButtonCache,
      }),
      m = d.field,
      p = s("id"),
      _ = s("displayText"),
      f = m("selected");
    ((l.getButtonUnsafe = c),
      (l.getId = p),
      (l.getDisplayText = _),
      (l.getSelected = f));
  },
  98,
);
