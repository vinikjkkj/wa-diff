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
      f = c("adminProfilesSettingEnabled"),
      g = c("capabilities"),
      h = c("creationTime"),
      y = c("description"),
      C = c("followerActivityMuteExpiration"),
      b = c("inviteCode"),
      v = c("membershipType"),
      S = c("name"),
      R = c("pinnedMessages"),
      L = c("privacy"),
      E = c("reactionCodesSetting"),
      k = c("size"),
      I = c("statusMetadata"),
      T = c("suspended"),
      D = c("terminated"),
      x = c("verified"),
      $ = c("wamoSubPlanId"),
      P = c("wamoSubStatus"),
      N = u(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [T, D],
      ),
      M = u(
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
        [_, v],
      ),
      w = u(
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
        [v],
      ),
      A = u(
        function (e) {
          var t = e[0];
          return (
            t === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest
          );
        },
        [v],
      );
    ((l.clearNewsletterMetadataGetterCacheFor = m),
      (l.getNewsletterMetadataUnsafe = p),
      (l.getAdminProfilesSettingEnabled = f),
      (l.getCapabilities = g),
      (l.getCreationTime = h),
      (l.getDescription = y),
      (l.getFollowerActivityMuteExpiration = C),
      (l.getInviteCode = b),
      (l.getMembershipType = v),
      (l.getName = S),
      (l.getPinnedMessages = R),
      (l.getPrivacy = L),
      (l.getReactionCodesSetting = E),
      (l.getSize = k),
      (l.getStatusMetadata = I),
      (l.getSuspended = T),
      (l.getTerminated = D),
      (l.getVerified = x),
      (l.getWamoSubPlanId = $),
      (l.getWamoSubStatus = P),
      (l.getIsSuspendedOrTerminated = N),
      (l.getCanBeMuted = M),
      (l.getIsSubscribedOrOwned = w),
      (l.getIsPreview = A));
  },
  98,
);
