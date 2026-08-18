__d(
  "WAWebNewsletterMetadataGetters",
  ["WAWebCommonNewsletterEnums", "WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createNewsletterMetadataCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = e.unsafeIdentityGetter,
      m = s,
      p = d,
      _ = c("adminCount"),
      f = c("membershipType"),
      g = c("name"),
      h = c("suspended"),
      y = c("terminated"),
      C = u(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [h, y],
      ),
      b = u(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            (n ===
              o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner &&
              t > 1) ||
            n ===
              o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin ||
            n ===
              o("WAWebCommonNewsletterEnums").NewsletterMembershipType
                .Subscriber
          );
        },
        [_, f],
      ),
      v = u(
        function (e) {
          var t = e[0];
          return (
            t ===
              o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner ||
            t ===
              o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin ||
            t ===
              o("WAWebCommonNewsletterEnums").NewsletterMembershipType
                .Subscriber
          );
        },
        [f],
      ),
      S = u(
        function (e) {
          var t = e[0];
          return (
            t === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest
          );
        },
        [f],
      );
    ((l.clearNewsletterMetadataGetterCacheFor = m),
      (l.getNewsletterMetadataUnsafe = p),
      (l.getAdminCount = _),
      (l.getMembershipType = f),
      (l.getName = g),
      (l.getSuspended = h),
      (l.getTerminated = y),
      (l.getIsSuspendedOrTerminated = C),
      (l.getCanBeMuted = b),
      (l.getIsSubscribedOrOwned = v),
      (l.getIsPreview = S));
  },
  98,
);
