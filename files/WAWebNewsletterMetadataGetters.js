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
      R = c("subscribers"),
      L = c("name"),
      E = c("pinnedMessages"),
      k = c("privacy"),
      I = c("reactionCodesSetting"),
      T = c("size"),
      D = c("statusMetadata"),
      x = c("suspended"),
      $ = c("terminated"),
      P = c("verified"),
      N = c("wamoSubPlanId"),
      M = c("wamoSubStatus"),
      w = u(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [x, $],
      ),
      A = u(
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
      F = u(
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
      O = u(
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
      (l.getSubscribers = R),
      (l.getName = L),
      (l.getPinnedMessages = E),
      (l.getPrivacy = k),
      (l.getReactionCodesSetting = I),
      (l.getSize = T),
      (l.getStatusMetadata = D),
      (l.getSuspended = x),
      (l.getTerminated = $),
      (l.getVerified = P),
      (l.getWamoSubPlanId = N),
      (l.getWamoSubStatus = M),
      (l.getIsSuspendedOrTerminated = w),
      (l.getCanBeMuted = A),
      (l.getIsSubscribedOrOwned = F),
      (l.getIsPreview = O));
  },
  98,
);
