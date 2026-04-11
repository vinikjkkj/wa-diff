__d(
  "WAWebNewsletterStorageUtils",
  ["WAWebCommonNewsletterEnums", "WAWebNewsletterDBConstants"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
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
    function s(e) {
      switch (e) {
        case o("WAWebCommonNewsletterEnums").NewsletterPrivacy.Public:
          return 0;
        case o("WAWebCommonNewsletterEnums").NewsletterPrivacy.Private:
          return 1;
      }
    }
    function u(e) {
      switch (e) {
        case o("WAWebCommonNewsletterEnums").WamoSubStatus.ACTIVE:
          return 0;
        case o("WAWebCommonNewsletterEnums").WamoSubStatus.INACTIVE:
          return 1;
      }
    }
    function c(t) {
      var n = { id: t.id.toString() };
      if (
        (t.creationTime != null && (n.creationTime = t.creationTime),
        t.name != null && (n.name = t.name),
        t.nameUpdateTime != null && (n.nameUpdateTime = t.nameUpdateTime),
        t.description != null && (n.description = t.description),
        t.descriptionUpdateTime != null &&
          (n.descriptionUpdateTime = t.descriptionUpdateTime),
        t.handle != null && (n.handle = t.handle),
        t.inviteCode != null && (n.inviteCode = t.inviteCode),
        t.size != null && (n.size = t.size),
        t.verified != null && (n.verified = t.verified),
        t.membershipType != null && (n.membershipType = e(t.membershipType)),
        t.privacy != null && (n.privacy = s(t.privacy)),
        t.website != null)
      ) {
        var r;
        n.website = (r = t.website) == null ? void 0 : r.href;
      }
      return (
        t.reactionCodesSetting != null &&
          (n.reactionCodesSetting = t.reactionCodesSetting),
        t.adminCount != null && (n.adminCount = t.adminCount),
        t.capabilities != null &&
          (n.capabilities = new Set(
            Array.from(t.capabilities, function (e) {
              return e;
            }),
          )),
        t.suspended != null && (n.suspended = t.suspended),
        t.geosuspended != null && (n.geosuspended = t.geosuspended),
        t.terminated != null && (n.terminated = t.terminated),
        t.wamoSubPlanId != null && (n.wamoSubPlanId = t.wamoSubPlanId),
        t.wamoSubStatus != null && (n.wamoSubStatus = u(t.wamoSubStatus)),
        t.followerActivityMuteExpiration != null &&
          (n.followerActivityMuteExpiration = t.followerActivityMuteExpiration),
        t.statusMetadata != null && (n.statusMetadata = t.statusMetadata),
        n
      );
    }
    ((l.mapNewsletterMembershipTypeForStorage = e),
      (l.mapNewsletterWamoSubStatusForStorage = u),
      (l.createNewsletterMetadataObjectForStorage = c));
  },
  98,
);
