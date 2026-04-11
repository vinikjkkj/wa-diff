__d(
  "WAWebNewsletterQueryUtils",
  ["WAJids", "WAWebCommonNewsletterEnums", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    var e = [
      "hasNewsletterMembershipField",
      "hasNewsletterMutedField",
      "newsletterPictureFieldMixinArgs",
    ];
    function s(e) {
      if (e == null) return "guest";
      switch (e) {
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin:
          return "admin";
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner:
          return "owner";
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType
          .Subscriber:
          return "subscriber";
        default:
          return "guest";
      }
    }
    function u(t, n, a) {
      var i = d(a);
      if (r("WAWebWid").isNewsletter(t))
        return {
          queryPayloadsArgs: {
            jidQueryIQPayload: {
              anyJid: o("WAJids").toNewsletterJid(t),
              anyViewRole: s(n),
              allNewsletterMetadataIQRequestPayloadArgs: i,
            },
          },
        };
      var l = i.hasNewsletterMembershipField,
        u = i.hasNewsletterMutedField,
        c = i.newsletterPictureFieldMixinArgs,
        m = babelHelpers.objectWithoutPropertiesLoose(i, e);
      return {
        queryPayloadsArgs: {
          inviteQueryIQPayload: babelHelpers.extends(
            { anyKey: t, anyViewRole: s(n) },
            m,
            {
              newsletterPreviewTypePictureFieldMixinArgs: {
                baseNewsletterPictureFieldMixinArgs: {},
              },
            },
          ),
        },
      };
    }
    function c() {
      return {
        pictureArgs: [{ pictureType: "image" }, { pictureType: "preview" }],
      };
    }
    function d(e) {
      return e == null
        ? {
            hasNewsletterCreationTimeField: !0,
            hasNewsletterNameField: !0,
            newsletterPictureFieldMixinArgs: c(),
            hasNewsletterDescriptionField: !0,
            hasNewsletterInviteLinkField: !0,
            hasNewsletterHandleField: !0,
            hasNewsletterSubscribersField: !0,
            hasNewsletterPrivacyField: !0,
            hasNewsletterVerificationField: !0,
            hasNewsletterLinkedAccountsField: !0,
            hasNewsletterMembershipField: !0,
            hasNewsletterMutedField: !0,
            hasNewsletterStateField: !0,
          }
        : {
            hasNewsletterCreationTimeField: e.creationTime,
            hasNewsletterNameField: e.name,
            newsletterPictureFieldMixinArgs: e.picture === !0 ? c() : void 0,
            hasNewsletterDescriptionField: e.description,
            hasNewsletterInviteLinkField: e.inviteLink,
            hasNewsletterHandleField: e.handle,
            hasNewsletterSubscribersField: e.subscribers,
            hasNewsletterPrivacyField: e.privacy,
            hasNewsletterVerificationField: e.verification,
            hasNewsletterLinkedAccountsField: e.linkedAccounts,
            hasNewsletterMembershipField: e.membership,
            hasNewsletterMutedField: e.membership,
            hasNewsletterStateField: e.state,
          };
    }
    function m(e) {
      return r("WAWebWid").isNewsletter(e)
        ? {
            queryNewsletterJIDParams: {
              anyJid: o("WAJids").toNewsletterJid(e),
            },
          }
        : { queryNewsletterInviteParams: { anyKey: e } };
    }
    function p(e) {
      switch (e) {
        case o("WAWebCommonNewsletterEnums").NewsletterCapability.Insights:
          return "INSIGHTS";
        case o("WAWebCommonNewsletterEnums").NewsletterCapability.PhotoPolls:
          return "PHOTO_POLLS";
        case o("WAWebCommonNewsletterEnums").NewsletterCapability.QUESTIONS:
          return "QUESTIONS";
        case o("WAWebCommonNewsletterEnums").NewsletterCapability
          .INVITE_ADMINS_BUTTON:
          return "INVITE_ADMINS_BUTTON";
        case o("WAWebCommonNewsletterEnums").NewsletterCapability
          .INVITE_FOLLOWERS:
          return "INVITE_FOLLOWERS";
        case o("WAWebCommonNewsletterEnums").NewsletterCapability
          .ADMIN_NOTIFICATIONS:
          return "ADMIN_NOTIFICATIONS";
        case o("WAWebCommonNewsletterEnums").NewsletterCapability.QUIZ:
          return "QUIZ";
        case o("WAWebCommonNewsletterEnums").NewsletterCapability
          .ADMIN_CONTEXT_CARD_1:
          return "ADMIN_CONTEXT_CARD_1";
        case o("WAWebCommonNewsletterEnums").NewsletterCapability
          .ADMIN_CONTEXT_CARD_2:
          return "ADMIN_CONTEXT_CARD_2";
        case o("WAWebCommonNewsletterEnums").NewsletterCapability
          .ADMIN_CONTEXT_CARD_3:
          return "ADMIN_CONTEXT_CARD_3";
        case o("WAWebCommonNewsletterEnums").NewsletterCapability
          .SHARE_STICKER_PACKS:
          return "SHARE_STICKER_PACKS";
        case o("WAWebCommonNewsletterEnums").NewsletterCapability
          .ADMIN_ONBOARDING:
          return "ADMIN_ONBOARDING";
        case o("WAWebCommonNewsletterEnums").NewsletterCapability
          .ADMIN_ONBOARDING_2:
          return "ADMIN_ONBOARDING_2";
        case o("WAWebCommonNewsletterEnums").NewsletterCapability.MUSIC:
          return "MUSIC";
        case o("WAWebCommonNewsletterEnums").NewsletterCapability
          .NEW_MESSAGE_TYPES_TOOLTIP:
          return "NEW_MESSAGE_TYPES_TOOLTIP";
        case o("WAWebCommonNewsletterEnums").NewsletterCapability.PINNING_NUDGE:
          return "PINNING_NUDGE";
        case o("WAWebCommonNewsletterEnums").NewsletterCapability.THREAD_MENU:
          return "THREAD_MENU";
        case o("WAWebCommonNewsletterEnums").NewsletterCapability.ADMIN_PROFILE:
          return "ADMIN_PROFILE";
        case o("WAWebCommonNewsletterEnums").NewsletterCapability
          .CHANNEL_STATUS_PRODUCER:
          return "CHANNEL_STATUS_PRODUCER";
      }
    }
    ((l.mapMembershipTypeToViewRole = s),
      (l.getNewsletterMetadataQueryParamArgs = u),
      (l.getNewsletterMetadataArgs = d),
      (l.getNewsletterMessagesQueryParams = m),
      (l.getNewsletterCapabilityFromEnum = p));
  },
  98,
);
