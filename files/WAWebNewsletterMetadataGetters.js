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
      C = c("descriptionUpdateTime"),
      b = c("followerActivityMuteExpiration"),
      v = c("geosuspended"),
      S = c("handle"),
      R = c("hasProfilePictureDeletionAlerts"),
      L = c("inviteCode"),
      E = c("membershipType"),
      k = c("name"),
      I = c("nameUpdateTime"),
      T = c("pinnedMessages"),
      D = c("privacy"),
      x = c("reactionCodesSetting"),
      $ = c("size"),
      P = c("statusMetadata"),
      N = c("statusMute"),
      M = c("suspended"),
      w = c("terminated"),
      A = c("verified"),
      F = c("wamoSubPlanId"),
      O = c("wamoSubStatus"),
      B = c("website"),
      W = u(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [M, w],
      ),
      q = u(
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
        [_, E],
      ),
      U = u(
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
        [E],
      ),
      V = u(
        function (e) {
          var t = e[0];
          return (
            t === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest
          );
        },
        [E],
      );
    ((l.clearNewsletterMetadataGetterCacheFor = m),
      (l.getNewsletterMetadataUnsafe = p),
      (l.getAdminCount = _),
      (l.getAdminProfilesSettingEnabled = f),
      (l.getCapabilities = g),
      (l.getCreationTime = h),
      (l.getDescription = y),
      (l.getDescriptionUpdateTime = C),
      (l.getFollowerActivityMuteExpiration = b),
      (l.getGeosuspended = v),
      (l.getHandle = S),
      (l.getHasProfilePictureDeletionAlerts = R),
      (l.getInviteCode = L),
      (l.getMembershipType = E),
      (l.getName = k),
      (l.getNameUpdateTime = I),
      (l.getPinnedMessages = T),
      (l.getPrivacy = D),
      (l.getReactionCodesSetting = x),
      (l.getSize = $),
      (l.getStatusMetadata = P),
      (l.getStatusMute = N),
      (l.getSuspended = M),
      (l.getTerminated = w),
      (l.getVerified = A),
      (l.getWamoSubPlanId = F),
      (l.getWamoSubStatus = O),
      (l.getWebsite = B),
      (l.getIsSuspendedOrTerminated = W),
      (l.getCanBeMuted = q),
      (l.getIsSubscribedOrOwned = U),
      (l.getIsPreview = V));
  },
  98,
);
