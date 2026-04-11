__d(
  "WAWebNewsletterModelUtils",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterGatingUtils",
    "WAWebWidFactory",
    "err",
    "lodash",
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
        a,
        i =
          (t = e.newsletterNameMetadataMixin) == null
            ? void 0
            : t.nameElementValue,
        l =
          (n = e.newsletterMembershipMetadataMixin) == null
            ? void 0
            : n.membershipType,
        s =
          (a = e.newsletterCreationTimeMetadataMixin) == null
            ? void 0
            : a.creationTimeValue,
        u = {
          id: o("WAWebWidFactory").createWid(e.idJid),
          name: i != null ? i : void 0,
          isReadOnly: l != null ? !b(l) : void 0,
          muteExpiration: k(e, "MUTE_ADMIN_ACTIVITY"),
          t: s != null ? o("WATimeUtils").castToUnixTime(s) : void 0,
        };
      return r("lodash").pickBy(u, function (e) {
        return e != null;
      });
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
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f =
          (t = e.newsletterVerificationMetadataMixin) == null
            ? void 0
            : t.verificationState,
        h = (n = e.newsletterStateMetadataMixin) == null ? void 0 : n.stateType,
        y =
          (a = e.newsletterMembershipMetadataMixin) == null
            ? void 0
            : a.membershipType,
        C =
          (i = e.newsletterPrivacyMetadataMixin) == null
            ? void 0
            : i.privacyType,
        b = babelHelpers.extends(
          {
            id: o("WAWebWidFactory").createWid(e.idJid),
            creationTime:
              (l = e.newsletterCreationTimeMetadataMixin) == null
                ? void 0
                : l.creationTimeValue,
            name:
              (s = e.newsletterNameMetadataMixin) == null
                ? void 0
                : s.nameElementValue,
            nameUpdateTime:
              (u = e.newsletterNameMetadataMixin) == null
                ? void 0
                : u.nameUpdateTime,
            description:
              (c = e.newsletterDescriptionMetadataMixin) == null ||
              (c = c.descriptionQueryDescriptionResponseMixin) == null
                ? void 0
                : c.elementValue,
            descriptionUpdateTime:
              (d = e.newsletterDescriptionMetadataMixin) == null ||
              (d = d.descriptionQueryDescriptionResponseMixin) == null
                ? void 0
                : d.updateTime,
            inviteCode:
              (m = e.newsletterInviteLinkMetadataMixin) == null
                ? void 0
                : m.inviteCode,
            size:
              (p = e.newsletterSubscribersMetadataMixin) == null
                ? void 0
                : p.subscribersCount,
            verified: f != null ? g(f) : void 0,
            membershipType:
              y != null
                ? o("WAWebCommonNewsletterEnums").NewsletterMembershipType.cast(
                    y,
                  )
                : void 0,
            reactionCodesSetting: Object.prototype.hasOwnProperty.call(
              e,
              "newsletterReactionCodesSettingMetadataMixin",
            )
              ? (_ =
                  e == null
                    ? void 0
                    : e.newsletterReactionCodesSettingMetadataMixin) != null
                ? _
                : o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting
                    .All
              : void 0,
            privacy:
              C != null
                ? o("WAWebCommonNewsletterEnums").NewsletterPrivacy.cast(C)
                : void 0,
            website: void 0,
            followerActivityMuteExpiration: k(e, "MUTE_FOLLOWER_ACTIVITY"),
            suspended:
              h != null
                ? o("WAWebCommonNewsletterEnums").NewsletterState.cast(h) ===
                    o("WAWebCommonNewsletterEnums").NewsletterState.Suspended ||
                  o("WAWebCommonNewsletterEnums").NewsletterState.cast(h) ===
                    o("WAWebCommonNewsletterEnums").NewsletterState.GeoSuspended
                : void 0,
            geosuspended:
              h != null
                ? o("WAWebCommonNewsletterEnums").NewsletterState.cast(h) ===
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
      return r("lodash").pickBy(b, function (e) {
        return e != null;
      });
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
        a,
        i,
        l,
        s,
        u,
        c,
        d = o("WAWebWidFactory").createWid(e);
      if (t.length === 0) return { id: d };
      var m, p;
      for (var _ of t) {
        var f = _.queryPictureDirectPathOrEmptyResponseMixinGroup;
        if (f.name === "QueryPictureDirectPathResponse")
          f.value.type === "preview"
            ? (p = f.value)
            : f.value.type === "image" && (m = f.value);
        else if (f.name === "QueryPictureEmptyResponse")
          return {
            id: d,
            timestamp: Date.now(),
            eurl: null,
            previewEurl: null,
            eurlStale: !1,
            stale: !1,
          };
      }
      var g = {
        id: d,
        timestamp: Date.now(),
        tag:
          (n = (a = m) == null ? void 0 : a.id) != null
            ? n
            : (i = p) == null
              ? void 0
              : i.id,
        eurl: T(
          (l = (s = m) == null ? void 0 : s.directPath) != null
            ? l
            : (u = p) == null
              ? void 0
              : u.directPath,
        ),
        previewEurl: T((c = p) == null ? void 0 : c.directPath),
        eurlStale: !1,
        stale: !1,
      };
      return r("lodash").pickBy(g, function (e) {
        return e != null;
      });
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
