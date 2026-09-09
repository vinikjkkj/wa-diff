__d(
  "WAWebGroupParticipantGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createGroupParticipantCache,
      }),
      s = e.clearCacheFor,
      u = e.field,
      c = s,
      d = u("isAdmin");
    ((l.clearGroupParticipantGetterCacheFor = c), (l.getIsAdmin = d));
  },
  98,
);
