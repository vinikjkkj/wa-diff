__d(
  "WAWebFrontendStatusGetters",
  ["WAWebGetters", "WAWebGettersCaches", "WAWebStatusGetters"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        root: o("WAWebStatusGetters").getStatusUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendStatusCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = s,
      m = c("msgs"),
      p = c("msgsChanged"),
      _ = c("contact"),
      f = u(
        function (e) {
          var t = e[0],
            n = e[1];
          return n.last();
        },
        [p, m],
      ),
      g = c("unreadCount"),
      h = u(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          if (t === 0) return !1;
          for (
            var o = r.getModelsArray(), a = Math.max(0, o.length - t), i = a;
            i < o.length;
            i++
          )
            if (o[i].statusAudienceMetadata != null) return !0;
          return !1;
        },
        [g, p, m],
      );
    ((l.clearFrontendStatusGetterCacheFor = d),
      (l.getContact = _),
      (l.getLastStatus = f),
      (l.getHasUnreadCloseFriendStatus = h));
  },
  98,
);
