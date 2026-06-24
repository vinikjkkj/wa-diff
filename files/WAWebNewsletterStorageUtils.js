__d(
  "WAWebNewsletterStorageUtils",
  [
    "WATimeUtils",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterDBConstants",
    "WAWebNewsletterGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n =
          e == null || (t = e.statusMetadata) == null
            ? void 0
            : t.lastStatusSentTime;
      return (
        n != null &&
        o("WATimeUtils").unixTime() - n <= o("WATimeUtils").DAY_SECONDS &&
        o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()
      );
    }
    function s(e) {
      switch (e) {
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType
          .Subscriber:
          return o("WAWebNewsletterDBConstants").NewsletterDBMembership
            .Subscriber;
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin:
          return o("WAWebNewsletterDBConstants").NewsletterDBMembership.Admin;
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest:
          return o("WAWebNewsletterDBConstants").NewsletterDBMembership.Guest;
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner:
          return o("WAWebNewsletterDBConstants").NewsletterDBMembership.Owner;
      }
    }
    function u(e) {
      switch (e) {
        case o("WAWebCommonNewsletterEnums").NewsletterPrivacy.Public:
          return 0;
        case o("WAWebCommonNewsletterEnums").NewsletterPrivacy.Private:
          return 1;
      }
    }
    function c(e) {
      switch (e) {
        case o("WAWebCommonNewsletterEnums").WamoSubStatus.ACTIVE:
          return 0;
        case o("WAWebCommonNewsletterEnums").WamoSubStatus.INACTIVE:
          return 1;
      }
    }
    function d(e) {
      var t = { id: e.id.toString() };
      if (
        (e.creationTime != null && (t.creationTime = e.creationTime),
        e.name != null && (t.name = e.name),
        e.nameUpdateTime != null && (t.nameUpdateTime = e.nameUpdateTime),
        e.description != null && (t.description = e.description),
        e.descriptionUpdateTime != null &&
          (t.descriptionUpdateTime = e.descriptionUpdateTime),
        e.handle != null && (t.handle = e.handle),
        e.inviteCode != null && (t.inviteCode = e.inviteCode),
        e.size != null && (t.size = e.size),
        e.verified != null && (t.verified = e.verified),
        e.membershipType != null && (t.membershipType = s(e.membershipType)),
        e.privacy != null && (t.privacy = u(e.privacy)),
        e.website != null)
      ) {
        var n;
        t.website = (n = e.website) == null ? void 0 : n.href;
      }
      return (
        e.reactionCodesSetting != null &&
          (t.reactionCodesSetting = e.reactionCodesSetting),
        e.adminCount != null && (t.adminCount = e.adminCount),
        Object.hasOwn(e, "adminProfile") && (t.adminProfile = e.adminProfile),
        e.adminProfilesSettingEnabled != null &&
          (t.adminProfilesSettingEnabled = e.adminProfilesSettingEnabled),
        e.capabilities != null &&
          (t.capabilities = new Set(
            Array.from(e.capabilities, function (e) {
              return e;
            }),
          )),
        e.suspended != null && (t.suspended = e.suspended),
        e.geosuspended != null && (t.geosuspended = e.geosuspended),
        e.terminated != null && (t.terminated = e.terminated),
        e.wamoSubPlanId != null && (t.wamoSubPlanId = e.wamoSubPlanId),
        e.wamoSubStatus != null && (t.wamoSubStatus = c(e.wamoSubStatus)),
        e.followerActivityMuteExpiration != null &&
          (t.followerActivityMuteExpiration = e.followerActivityMuteExpiration),
        e.statusMetadata != null && (t.statusMetadata = e.statusMetadata),
        t
      );
    }
    ((l.maybeHasValidStatus = e),
      (l.mapNewsletterMembershipTypeForStorage = s),
      (l.mapNewsletterWamoSubStatusForStorage = c),
      (l.createNewsletterMetadataObjectForStorage = d));
  },
  98,
);
