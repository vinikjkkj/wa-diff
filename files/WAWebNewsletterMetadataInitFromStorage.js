__d(
  "WAWebNewsletterMetadataInitFromStorage",
  [
    "WAJids",
    "WALinkify",
    "WALogger",
    "WAWebBackendApi",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterMessageDeliveryUpdateToModelUtils",
    "WAWebNewsletterMetadataCollection",
    "WAWebSchemaNewsletterMetadata",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield o("WAWebSchemaNewsletterMetadata")
                .getNewsletterMetadataTable()
                .all(),
              a = new Set();
            (t.forEach(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = o("WAWebWidFactory").createWid(e.id),
                      n = {
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
                          e.website != null
                            ? o("WALinkify").findLink(e.website)
                            : null,
                        adminCount: e.adminCount,
                        capabilities:
                          e.capabilities != null
                            ? new Set(
                                r("compactMap")(
                                  Array.from(e.capabilities),
                                  function (e) {
                                    var t = c(e);
                                    return (t == null && a.add(e), t);
                                  },
                                ),
                              )
                            : new Set(),
                        suspended: e.suspended,
                        geosuspended: e.geosuspended,
                        terminated: e.terminated,
                        wamoSubPlanId: e.wamoSubPlanId,
                        wamoSubStatus: m(e.wamoSubStatus),
                        statusMetadata: e.statusMetadata,
                        lastFilledStatusServerId: e.lastFilledStatusServerId,
                      };
                    if (
                      (r("WAWebNewsletterMetadataCollection") == null ||
                        r("WAWebNewsletterMetadataCollection").add(n, {
                          merge: !0,
                        }),
                      e.messageDeliveryUpdates != null)
                    ) {
                      var i = [];
                      e.messageDeliveryUpdates.forEach(function (e, t) {
                        return i.push({ id: t, code: e.code });
                      });
                      var l = yield o(
                          "WAWebNewsletterMessageDeliveryUpdateToModelUtils",
                        ).getMessageDeliveryUpdatesModelToUpdate(
                          o("WAJids").toNewsletterJid(e.id),
                          i,
                          [],
                        ),
                        p = l.modelUpdatesToAdd;
                      yield o("WAWebBackendApi").frontendFireAndForget(
                        "updateNewsletterMessageDeliveryUpdate",
                        {
                          id: t,
                          modelUpdatesToAdd: p,
                          modelUpdatesToRemove: [],
                        },
                      );
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
              a.size > 0 &&
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Encountered ",
                        " unexpected newsletter capabilities in DB: ",
                        "",
                      ])),
                    a.size,
                    Array.from(a).join(", "),
                  )
                  .tags("newsletter-capabilities")
                  .sendLogs("Unexpected newsletter capability in DB"));
          } finally {
          }
        })),
        _.apply(this, arguments)
      );
    }
    l.restoreNewsletterMetadata = p;
  },
  98,
);
