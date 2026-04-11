__d(
  "WAWebQuickReplyGetters",
  ["WAWebGetters", "WAWebGettersCaches", "WAWebQuickReplyEnum"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createQuickReplyCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = e.unsafeIdentityGetter,
      m = s,
      p = d,
      _ = c("id"),
      f = c("count"),
      g = u(
        function (e) {
          var t,
            n = e[0],
            r =
              (t = o("WAWebQuickReplyEnum").QuickReplyTypes.cast(n)) != null
                ? t
                : o("WAWebQuickReplyEnum").QuickReplyTypes.TEXT;
          switch (r) {
            case o("WAWebQuickReplyEnum").QuickReplyTypes.ADDRESS_SMART_DEFAULT:
              return o("WAWebQuickReplyEnum").QuickReplyTypes
                .ADDRESS_SMART_DEFAULT;
            case o("WAWebQuickReplyEnum").QuickReplyTypes.HOURS_SMART_DEFAULT:
              return o("WAWebQuickReplyEnum").QuickReplyTypes
                .HOURS_SMART_DEFAULT;
            case o("WAWebQuickReplyEnum").QuickReplyTypes.PROFILE_SMART_DEFAULT:
              return o("WAWebQuickReplyEnum").QuickReplyTypes
                .PROFILE_SMART_DEFAULT;
            case o("WAWebQuickReplyEnum").QuickReplyTypes.PIX_KEY_SMART_DEFAULT:
              return o("WAWebQuickReplyEnum").QuickReplyTypes
                .PIX_KEY_SMART_DEFAULT;
            default:
              return o("WAWebQuickReplyEnum").QuickReplyTypes.TEXT;
          }
        },
        [_],
      );
    ((l.clearQuickReplyGetterCacheFor = m),
      (l.getQuickReplyUnsafe = p),
      (l.getCount = f),
      (l.getType = g));
  },
  98,
);
