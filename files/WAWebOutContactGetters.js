__d(
  "WAWebOutContactGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createContactsCache,
      }),
      s = e.computed,
      u = e.field,
      c = e.unsafeIdentityGetter,
      d = c,
      m = u("id"),
      p = u("phoneNumber"),
      _ = u("fullName"),
      f = u("firstName"),
      g = s(
        function (e) {
          var t,
            n = e[0],
            r = e[1],
            o = e[2];
          return (t = n != null ? n : r) != null ? t : o;
        },
        [_, f, p],
      );
    ((l.getOutContactUnsafe = d),
      (l.getId = m),
      (l.getPhoneNumber = p),
      (l.getFullName = _),
      (l.getFirstName = f),
      (l.getName = g));
  },
  98,
);
