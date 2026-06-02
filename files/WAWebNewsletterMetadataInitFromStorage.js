__d(
  "WAWebNewsletterMetadataInitFromStorage",
  [
    "WAJids",
    "WALinkify",
    "WALogger",
    "WAWebBackendApi",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMessageDeliveryUpdateToModelUtils",
    "WAWebNewsletterMetadataCollection",
    "WAWebSchemaNewsletterMetadata",
    "WAWebWidFactory",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      switch (e) {
        case 0:
          return o("WAWebCommonNewsletterEnums").NewsletterMembershipType
            .Subscriber;
        case 1:
          return o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin;
        case 3:
          return o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner;
        case 2:
        default:
          return o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest;
      }
    }
    function u(e) {
      switch (e) {
        case 0:
          return o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting
            .All;
        case 3:
          return o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting
            .None;
        case 2:
          return o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting
            .Blocklist;
        case 1:
        default:
          return o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting
            .Basic;
      }
    }
    function c(e) {
      switch (e) {
        case 0:
          return o("WAWebCommonNewsletterEnums").NewsletterCapability.Insights;
        case 1:
          return o("WAWebCommonNewsletterEnums").NewsletterCapability
            .PhotoPolls;
        default:
          return null;
      }
    }
    function d(e) {
      switch (e) {
        case 1:
          return o("WAWebCommonNewsletterEnums").NewsletterPrivacy.Private;
        case 0:
        default:
          return o("WAWebCommonNewsletterEnums").NewsletterPrivacy.Public;
      }
    }
    function m(e) {
      switch (e) {
        case 0:
          return o("WAWebCommonNewsletterEnums").WamoSubStatus.ACTIVE;
        case 1:
        default:
          return o("WAWebCommonNewsletterEnums").WamoSubStatus.INACTIVE;
      }
    }
    async function p() {
      try {
        var t = await o("WAWebSchemaNewsletterMetadata")
            .getNewsletterMetadataTable()
            .all(),
          n = new Set(),
          a = [];
        (t.forEach(async function (e) {
          var t = o("WAWebWidFactory").createWid(e.id),
            i = {
              id: t,
              creationTime: e.creationTime,
              name: e.name,
              nameUpdateTime: e.nameUpdateTime,
              description: e.description,
              descriptionUpdateTime: e.descriptionUpdateTime,
              handle: e.handle,
              inviteCode: e.inviteCode,
              size: e.size,
              verified: e.verified,
              membershipType: s(e.membershipType),
              reactionCodesSetting: u(e.reactionCodesSetting),
              privacy: d(e.privacy),
              website:
                e.website != null ? o("WALinkify").findLink(e.website) : null,
              adminCount: e.adminCount,
              capabilities:
                e.capabilities != null
                  ? new Set(
                      r("compactMap")(Array.from(e.capabilities), function (e) {
                        var t = c(e);
                        return (t == null && n.add(e), t);
                      }),
                    )
                  : new Set(),
              suspended: e.suspended,
              geosuspended: e.geosuspended,
              terminated: e.terminated,
              wamoSubPlanId: e.wamoSubPlanId,
              wamoSubStatus: m(e.wamoSubStatus),
              statusMetadata: e.statusMetadata,
              lastFilledStatusServerId: e.lastFilledStatusServerId,
              statusMute: e.statusMute === !0,
            };
          if (
            (r("WAWebNewsletterMetadataCollection") == null ||
              r("WAWebNewsletterMetadataCollection").add(i, { merge: !0 }),
            e.statusMute === !0 &&
              o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterStatusReceiverEnabled() &&
              a.push({ id: e.id, statusMute: !0 }),
            e.messageDeliveryUpdates != null)
          ) {
            var l = [];
            e.messageDeliveryUpdates.forEach(function (e, t) {
              return l.push({ id: t, code: e.code });
            });
            var p = await o(
                "WAWebNewsletterMessageDeliveryUpdateToModelUtils",
              ).getMessageDeliveryUpdatesModelToUpdate(
                o("WAJids").toNewsletterJid(e.id),
                l,
                [],
              ),
              _ = p.modelUpdatesToAdd;
            await o("WAWebBackendApi").frontendFireAndForget(
              "updateNewsletterMessageDeliveryUpdate",
              { id: t, modelUpdatesToAdd: _, modelUpdatesToRemove: [] },
            );
          }
        }),
          a.length > 0 &&
            (await o("WAWebBackendApi").frontendFireAndForget(
              "updateContactsStatusMute",
              {
                userStatusMuteUpdates: [],
                groupStatusMuteUpdates: [],
                newsletterStatusMuteUpdates: a,
              },
            )),
          n.size > 0 &&
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Encountered ",
                    " unexpected newsletter capabilities in DB: ",
                    "",
                  ])),
                n.size,
                Array.from(n).join(", "),
              )
              .tags("newsletter-capabilities")
              .sendLogs("Unexpected newsletter capability in DB"));
      } finally {
      }
    }
    l.restoreNewsletterMetadata = p;
  },
  98,
);
