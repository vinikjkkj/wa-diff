__d(
  "WAWebFrontendGroupMetadataGetters",
  ["WAWebGetters", "WAWebGettersCaches", "WAWebGroupMetadataGetters"],
  function (t, n, r, o, a, i, l) {
    var e = "https://chat.whatsapp.com/",
      s = o("WAWebGetters").createGetterFactories({
        root: o("WAWebGroupMetadataGetters").getGroupMetadataUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendGroupMetadataCache,
      }),
      u = s.clearCacheFor,
      c = s.computed,
      d = s.field,
      m = u,
      p = d("inviteCode"),
      _ = c(
        function (t) {
          var n = t[0];
          return n ? "" + e + n : null;
        },
        [p],
      );
    ((l.clearFrontendGroupMetadataGetterCacheFor = m),
      (l.getInviteCode = p),
      (l.getGroupInviteLink = _));
  },
  98,
);
