__d(
  "WAWebGroupMetadataGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = "https://chat.whatsapp.com/",
      s = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createGroupMetadataCache,
      }),
      u = s.clearCacheFor,
      c = s.computed,
      d = s.field,
      m = s.unsafeIdentityGetter,
      p = u,
      _ = m,
      f = d("inviteCode"),
      g = d("subject"),
      h = c(
        function (t) {
          var n = t[0];
          return n ? "" + e + n : null;
        },
        [f],
      ),
      y = c(
        function (e) {
          var t = e[0];
          return t === "";
        },
        [g],
      );
    ((l.clearGroupMetadataGetterCacheFor = p),
      (l.getGroupMetadataUnsafe = _),
      (l.getInviteCode = f),
      (l.getSubject = g),
      (l.getGroupInviteLink = h),
      (l.getIsUnnamed = y));
  },
  98,
);
