__d(
  "WAWebNewsletterModelUtils",
  [
    "WAFilterObjectNullishProps",
    "WALogger",
    "WATimeUtils",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterGatingUtils",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 1,
      c = -1,
      d = 0;
    function m(e) {
      if (e == null) return null;
      var t = Number(e);
      return Number.isNaN(t) ? null : t;
    }
    function p(e, t) {
      return e == null && t == null
        ? null
        : { lastStatusServerId: m(e), lastStatusSentTime: m(t) };
    }
    var _ = "admin",
      f = "follower";
    function g(e) {
      return e === "verified";
    }
    function h(e) {
      var t = R(e);
      return (y(t), C(t));
    }
    function y(t) {
      var n,
        r =
          (n = t.newsletterMembershipMetadataMixin) == null
            ? void 0
            : n.membershipType,
        a = r == null || r === "guest";
      if (!a) {
        var i = "Trying to map an already subscribed newsletter";
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter][throwIfNewsletterNotPreview] ",
                "",
              ])),
            i,
          )
          .tags("newsletter")
          .sendLogs("newsletter-converting-already-subscribed-newsletter");
      }
    }
    function C(e) {
      var t = v(e);
      return ((t.muteExpiration = c), (t.isReadOnly = !0), t);
    }
    function b(e) {
      return e === "admin" || e === "owner";
    }
    function v(e) {
      var t,
        n,
        r,
        a =
          (t = e.newsletterNameMetadataMixin) == null
            ? void 0
            : t.nameElementValue,
        i =
          (n = e.newsletterMembershipMetadataMixin) == null
            ? void 0
            : n.membershipType,
        l =
          (r = e.newsletterCreationTimeMetadataMixin) == null
            ? void 0
            : r.creationTimeValue,
        s = k(e, "MUTE_ADMIN_ACTIVITY");
      return babelHelpers.extends(
        {
          id: o("WAWebWidFactory").createWid(e.idJid),
          name: a != null ? a : void 0,
          isReadOnly: i != null ? !b(i) : void 0,
          t: l != null ? o("WATimeUtils").castToUnixTime(l) : void 0,
        },
        s != null && { muteExpiration: s },
      );
    }
    function S(e) {
      var t = E(e);
      return (
        (t.membershipType = o(
          "WAWebCommonNewsletterEnums",
        ).NewsletterMembershipType.Guest),
        t
      );
    }
    function R(e) {
      return {
        idJid: e.idJid,
        newsletterCreationTimeMetadataMixin:
          e.newsletterCreationTimeMetadataMixin,
        newsletterNameMetadataMixin: e.newsletterNameMetadataMixin,
        newsletterPictureMetadataMixin: e.newsletterPictureMetadataMixin,
        newsletterDescriptionMetadataMixin:
          e.newsletterDescriptionMetadataMixin,
        newsletterInviteLinkMetadataMixin: e.newsletterInviteLinkMetadataMixin,
        newsletterSubscribersMetadataMixin:
          e.newsletterSubscribersMetadataMixin,
        newsletterPrivacyMetadataMixin: e.newsletterPrivacyMetadataMixin,
        newsletterVerificationMetadataMixin:
          e.newsletterVerificationMetadataMixin,
        hasNewsletterLinkedAccountsMetadataMixin: !1,
        newsletterMembershipMetadataMixin: null,
        newsletterUserSettingsMetadataMixin: [],
        newsletterStateMetadataMixin: null,
        newsletterStatusMetadata: e.newsletterStatusMetadata,
      };
    }
    function L(e) {
      var t = R(e);
      return (y(t), S(t));
    }
    function E(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _ =
          (t = e.newsletterVerificationMetadataMixin) == null
            ? void 0
            : t.verificationState,
        f = (n = e.newsletterStateMetadataMixin) == null ? void 0 : n.stateType,
        h =
          (r = e.newsletterMembershipMetadataMixin) == null
            ? void 0
            : r.membershipType,
        y =
          (a = e.newsletterPrivacyMetadataMixin) == null
            ? void 0
            : a.privacyType,
        C = babelHelpers.extends(
          {
            creationTime:
              (i = e.newsletterCreationTimeMetadataMixin) == null
                ? void 0
                : i.creationTimeValue,
            name:
              (l = e.newsletterNameMetadataMixin) == null
                ? void 0
                : l.nameElementValue,
            nameUpdateTime:
              (s = e.newsletterNameMetadataMixin) == null
                ? void 0
                : s.nameUpdateTime,
            description:
              (u = e.newsletterDescriptionMetadataMixin) == null ||
              (u = u.descriptionQueryDescriptionResponseMixin) == null
                ? void 0
                : u.elementValue,
            descriptionUpdateTime:
              (c = e.newsletterDescriptionMetadataMixin) == null ||
              (c = c.descriptionQueryDescriptionResponseMixin) == null
                ? void 0
                : c.updateTime,
            inviteCode:
              (d = e.newsletterInviteLinkMetadataMixin) == null
                ? void 0
                : d.inviteCode,
            size:
              (m = e.newsletterSubscribersMetadataMixin) == null
                ? void 0
                : m.subscribersCount,
            verified: _ != null ? g(_) : void 0,
            membershipType:
              h != null
                ? o("WAWebCommonNewsletterEnums").NewsletterMembershipType.cast(
                    h,
                  )
                : void 0,
            reactionCodesSetting: Object.prototype.hasOwnProperty.call(
              e,
              "newsletterReactionCodesSettingMetadataMixin",
            )
              ? (p =
                  e == null
                    ? void 0
                    : e.newsletterReactionCodesSettingMetadataMixin) != null
                ? p
                : o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting
                    .All
              : void 0,
            privacy:
              y != null
                ? o("WAWebCommonNewsletterEnums").NewsletterPrivacy.cast(y)
                : void 0,
            website: void 0,
            followerActivityMuteExpiration: k(e, "MUTE_FOLLOWER_ACTIVITY"),
            suspended:
              f != null
                ? o("WAWebCommonNewsletterEnums").NewsletterState.cast(f) ===
                    o("WAWebCommonNewsletterEnums").NewsletterState.Suspended ||
                  o("WAWebCommonNewsletterEnums").NewsletterState.cast(f) ===
                    o("WAWebCommonNewsletterEnums").NewsletterState.GeoSuspended
                : void 0,
            geosuspended:
              f != null
                ? o("WAWebCommonNewsletterEnums").NewsletterState.cast(f) ===
                  o("WAWebCommonNewsletterEnums").NewsletterState.GeoSuspended
                : void 0,
          },
          o("WAWebNewsletterGatingUtils").isWamoSubExperienceEnabled() && {
            wamoSubPlanId: e.newsletterWamoSubPlanIdMetadataMixin,
            wamoSubStatus: e.newsletterWamoSubStatusMetadataMixin,
          },
          {
            statusMetadata:
              e.newsletterStatusMetadata != null &&
              o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterStatusReceiverEnabled()
                ? e.newsletterStatusMetadata
                : void 0,
          },
        );
      return babelHelpers.extends(
        { id: o("WAWebWidFactory").createWid(e.idJid) },
        o("WAFilterObjectNullishProps").filterObjectNullishProps(C),
      );
    }
    function k(e, t) {
      var n,
        r =
          (n = e.newsletterUserSettingsMetadataMixin) == null
            ? void 0
            : n.find(function (e) {
                return e.type === t;
              });
      return (function (e) {
        if (e === "ON") return c;
        if (e === "OFF") return d;
      })(r == null ? void 0 : r.value);
    }
    var I = "https://pps.whatsapp.net";
    function T(e) {
      if (e == null || e === "") return null;
      var t = new URL(e, I);
      return t.href;
    }
    function D(e, t) {
      var n,
        r,
        a,
        i,
        l,
        s,
        u,
        c = o("WAWebWidFactory").createWid(e);
      if (t.length === 0) return { id: c };
      var d, m;
      for (var p of t) {
        var _ = p.queryPictureDirectPathOrEmptyResponseMixinGroup;
        if (_.name === "QueryPictureDirectPathResponse")
          _.value.type === "preview"
            ? (m = _.value)
            : _.value.type === "image" && (d = _.value);
        else if (_.name === "QueryPictureEmptyResponse")
          return {
            id: c,
            timestamp: Date.now(),
            eurl: null,
            previewEurl: null,
            eurlStale: !1,
            stale: !1,
          };
      }
      var f = {
        timestamp: Date.now(),
        tag:
          (n = (r = d) == null ? void 0 : r.id) != null
            ? n
            : (a = m) == null
              ? void 0
              : a.id,
        eurl: T(
          (i = (l = d) == null ? void 0 : l.directPath) != null
            ? i
            : (s = m) == null
              ? void 0
              : s.directPath,
        ),
        previewEurl: T((u = m) == null ? void 0 : u.directPath),
        eurlStale: !1,
        stale: !1,
      };
      return babelHelpers.extends(
        { id: c },
        o("WAFilterObjectNullishProps").filterObjectNullishProps(f),
      );
    }
    function x(e) {
      var t, n;
      return {
        chat: v(e),
        metadata: E(e),
        pic: D(
          e.idJid,
          (t =
            (n = e.newsletterPictureMetadataMixin) == null
              ? void 0
              : n.picture) != null
            ? t
            : [],
        ),
      };
    }
    function $(e) {
      return e === c;
    }
    function P(e) {
      switch (e) {
        case "INSIGHTS":
          return o("WAWebCommonNewsletterEnums").NewsletterCapability.Insights;
        case "PHOTO_POLLS":
          return o("WAWebCommonNewsletterEnums").NewsletterCapability
            .PhotoPolls;
        case "QUESTIONS":
          return o("WAWebCommonNewsletterEnums").NewsletterCapability.QUESTIONS;
        case "INVITE_ADMINS_BUTTON":
          return o("WAWebCommonNewsletterEnums").NewsletterCapability
            .INVITE_ADMINS_BUTTON;
        case "INVITE_FOLLOWERS":
          return o("WAWebCommonNewsletterEnums").NewsletterCapability
            .INVITE_FOLLOWERS;
        case "ADMIN_NOTIFICATIONS":
          return o("WAWebCommonNewsletterEnums").NewsletterCapability
            .ADMIN_NOTIFICATIONS;
        case "QUIZ":
          return o("WAWebCommonNewsletterEnums").NewsletterCapability.QUIZ;
        case "ADMIN_CONTEXT_CARD_1":
          return o("WAWebCommonNewsletterEnums").NewsletterCapability
            .ADMIN_CONTEXT_CARD_1;
        case "ADMIN_CONTEXT_CARD_2":
          return o("WAWebCommonNewsletterEnums").NewsletterCapability
            .ADMIN_CONTEXT_CARD_2;
        case "ADMIN_CONTEXT_CARD_3":
          return o("WAWebCommonNewsletterEnums").NewsletterCapability
            .ADMIN_CONTEXT_CARD_3;
        case "SHARE_STICKER_PACKS":
          return o("WAWebCommonNewsletterEnums").NewsletterCapability
            .SHARE_STICKER_PACKS;
        case "ADMIN_ONBOARDING":
          return o("WAWebCommonNewsletterEnums").NewsletterCapability
            .ADMIN_ONBOARDING;
        case "ADMIN_ONBOARDING_2":
          return o("WAWebCommonNewsletterEnums").NewsletterCapability
            .ADMIN_ONBOARDING_2;
        case "MUSIC":
          return o("WAWebCommonNewsletterEnums").NewsletterCapability.MUSIC;
        case "NEW_MESSAGE_TYPES_TOOLTIP":
          return o("WAWebCommonNewsletterEnums").NewsletterCapability
            .NEW_MESSAGE_TYPES_TOOLTIP;
        case "PINNING_NUDGE":
          return o("WAWebCommonNewsletterEnums").NewsletterCapability
            .PINNING_NUDGE;
        case "THREAD_MENU":
          return o("WAWebCommonNewsletterEnums").NewsletterCapability
            .THREAD_MENU;
        case "ADMIN_PROFILE":
          return o("WAWebCommonNewsletterEnums").NewsletterCapability
            .ADMIN_PROFILE;
        case "CHANNEL_STATUS_PRODUCER":
          return o("WAWebCommonNewsletterEnums").NewsletterCapability
            .CHANNEL_STATUS_PRODUCER;
        case "QUESTIONS_M2":
          return o("WAWebCommonNewsletterEnums").NewsletterCapability
            .QUESTIONS_M2;
        case "JARVIS_INTEGRATION_ENABLED":
          return o("WAWebCommonNewsletterEnums").NewsletterCapability
            .JARVIS_INTEGRATION_ENABLED;
        default:
          return (
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Encountered unexpected newsletter capability: ",
                    "",
                  ])),
                e,
              )
              .tags("newsletter-capabilities")
              .sendLogs("Unexpected newsletter capability"),
            o("WAWebCommonNewsletterEnums").NewsletterCapability.Insights
          );
      }
    }
    ((l.DEFAULT_NEWSLETTER_ADMIN_COUNT = u),
      (l.MUTED_STATE = c),
      (l.UNMUTED_STATE = d),
      (l.toStatusMetadata = p),
      (l.ADMIN_NOTIFICATIONS = _),
      (l.FOLLOWER_NOTIFICATIONS = f),
      (l.mapDirectoryNewsletterToChat = h),
      (l.mapPreviewNewsletterToChat = C),
      (l.isMembershipAdminOrOwner = b),
      (l.mapNewsletterToChat = v),
      (l.mapPreviewNewsletterToMetadata = S),
      (l.convertDirectoryNewsletterMetadataToNewsletterMetadata = R),
      (l.mapDirectoryNewsletterToMetadata = L),
      (l.mapNewsletterToMetadata = E),
      (l.formatProfilePictureURL = T),
      (l.mapPicturesToProfilePicThumb = D),
      (l.mapNewsletterToModels = x),
      (l.isMuted = $),
      (l.getNewsletterCapabilityFromValue = P));
  },
  98,
);
