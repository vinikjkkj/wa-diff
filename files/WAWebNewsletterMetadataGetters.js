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
      f = c("adminProfile"),
      g = c("adminProfilesSettingEnabled"),
      h = c("capabilities"),
      y = c("creationTime"),
      C = c("description"),
      b = c("followerActivityMuteExpiration"),
      v = c("inviteCode"),
      S = c("membershipType"),
      R = c("name"),
      L = c("pinnedMessages"),
      E = c("privacy"),
      k = c("reactionCodesSetting"),
      I = c("size"),
      T = c("statusMetadata"),
      D = c("suspended"),
      x = c("terminated"),
      $ = c("verified"),
      P = c("wamoSubPlanId"),
      N = c("wamoSubStatus"),
      M = u(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [D, x],
      ),
      w = u(
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
        [_, S],
      ),
      A = u(
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
        [S],
      ),
      F = u(
        function (e) {
          var t = e[0];
          return (
            t === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest
          );
        },
        [S],
      );
    ((l.clearNewsletterMetadataGetterCacheFor = m),
      (l.getNewsletterMetadataUnsafe = p),
      (l.getAdminProfile = f),
      (l.getAdminProfilesSettingEnabled = g),
      (l.getCapabilities = h),
      (l.getCreationTime = y),
      (l.getDescription = C),
      (l.getFollowerActivityMuteExpiration = b),
      (l.getInviteCode = v),
      (l.getMembershipType = S),
      (l.getName = R),
      (l.getPinnedMessages = L),
      (l.getPrivacy = E),
      (l.getReactionCodesSetting = k),
      (l.getSize = I),
      (l.getStatusMetadata = T),
      (l.getSuspended = D),
      (l.getTerminated = x),
      (l.getVerified = $),
      (l.getWamoSubPlanId = P),
      (l.getWamoSubStatus = N),
      (l.getIsSuspendedOrTerminated = M),
      (l.getCanBeMuted = w),
      (l.getIsSubscribedOrOwned = A),
      (l.getIsPreview = F));
  },
  98,
);
