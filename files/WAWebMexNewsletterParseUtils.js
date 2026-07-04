__d(
  "WAWebMexNewsletterParseUtils",
  [
    "WAJids",
    "WATimeUtils",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterPinGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e != null && (e == null ? void 0 : e.id) != null) {
        var t,
          n,
          r,
          a,
          i,
          l,
          S,
          R,
          L,
          E,
          k,
          I,
          T,
          D,
          x,
          $,
          P,
          N,
          M,
          w,
          A,
          F,
          O,
          B,
          W,
          q,
          U = (t = e.thread_metadata) == null ? void 0 : t.creation_time,
          V = (n = e.thread_metadata) == null ? void 0 : n.invite,
          H = (r = e.thread_metadata) == null ? void 0 : r.name,
          G = (a = e.thread_metadata) == null ? void 0 : a.subscribers_count,
          z = (i = e.viewer_metadata) == null ? void 0 : i.settings,
          j = (l = e.thread_metadata) == null ? void 0 : l.verification,
          K = (S = e.state) == null ? void 0 : S.type,
          Q = (R = e.thread_metadata) == null ? void 0 : R.description,
          X = (L = e.viewer_metadata) == null ? void 0 : L.role,
          Y = (E = e.thread_metadata) == null ? void 0 : E.picture,
          J = (k = e.thread_metadata) == null ? void 0 : k.preview,
          Z =
            (I = e.thread_metadata) == null ||
            (I = I.settings) == null ||
            (I = I.reaction_codes) == null
              ? void 0
              : I.value,
          ee =
            (T = e.thread_metadata) == null || (T = T.wamo_sub) == null
              ? void 0
              : T.plan_id,
          te = (D = e.viewer_metadata) == null ? void 0 : D.wamo_sub_status,
          ne =
            (x = e.status_metadata) == null ? void 0 : x.last_status_server_id,
          re =
            ($ = e.status_metadata) == null ? void 0 : $.last_status_sent_time,
          oe = (P = e.thread_metadata) == null ? void 0 : P.pinned_messages,
          ae = babelHelpers.extends(
            {
              idJid: o("WAJids").toNewsletterJid(e.id),
              newsletterCreationTimeMetadataMixin:
                (N = s(U)) != null ? N : null,
              newsletterInviteLinkMetadataMixin: (M = u(V)) != null ? M : null,
              newsletterNameMetadataMixin: (w = c(H)) != null ? w : null,
              newsletterSubscribersMetadataMixin: (A = d(G)) != null ? A : null,
              newsletterUserSettingsMetadataMixin: m(z),
              newsletterVerificationMetadataMixin:
                (F = p(j)) != null ? F : null,
              newsletterStateMetadataMixin: (O = _(K)) != null ? O : null,
              newsletterDescriptionMetadataMixin: (B = f(Q)) != null ? B : null,
              newsletterMembershipMetadataMixin: (W = g(X)) != null ? W : null,
              newsletterPictureMetadataMixin:
                (q = C([Y, J])) != null ? q : null,
              hasNewsletterLinkedAccountsMetadataMixin: !1,
              newsletterPrivacyMetadataMixin: null,
              newsletterReactionCodesSettingMetadataMixin:
                Z != null ? h(Z) : void 0,
            },
            oe != null &&
              o(
                "WAWebNewsletterPinGatingUtils",
              ).isChannelMessagePinReadEnabled() && {
                newsletterPinnedMessagesMetadataMixin: y(oe),
              },
          );
        return (
          o("WAWebNewsletterGatingUtils").isWamoSubExperienceEnabled() &&
            ((ae.newsletterWamoSubPlanIdMetadataMixin = b(ee)),
            (ae.newsletterWamoSubStatusMetadataMixin = v(te))),
          ne != null &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterStatusReceiverEnabled() &&
            (ae.newsletterStatusMetadata = o(
              "WAWebNewsletterModelUtils",
            ).toStatusMetadata(ne, re)),
          ae
        );
      }
      return null;
    }
    function s(e) {
      if (e != null) return { creationTimeValue: Number(e) };
    }
    function u(e) {
      if (e != null) return { inviteCode: e };
    }
    function c(e) {
      if (e != null) {
        var t;
        return {
          nameId: e.id,
          nameUpdateTime: Number(e == null ? void 0 : e.update_time),
          nameElementValue: (t = e == null ? void 0 : e.text) != null ? t : "",
        };
      }
    }
    function d(e) {
      if (e != null) return { subscribersCount: Number(e) };
    }
    function m(e) {
      return (e != null ? e : []).map(function (e) {
        return { type: e.type, value: e.value };
      });
    }
    function p(e) {
      if (e != null) {
        var t = e.toLowerCase() === "unverified" ? "unverified" : "verified";
        return { verificationState: t };
      }
    }
    function _(e) {
      var t;
      if (
        ((e == null ? void 0 : e.toLowerCase()) === "active"
          ? (t = "active")
          : (e == null ? void 0 : e.toLowerCase()) === "suspended"
            ? (t = "suspended")
            : (e == null ? void 0 : e.toLowerCase()) === "geosuspended" &&
              (t = "geosuspended"),
        t != null)
      )
        return { stateType: t };
    }
    function f(e) {
      var t = e == null ? void 0 : e.text,
        n = e == null ? void 0 : e.update_time;
      if (e != null && t != null && n != null)
        return {
          descriptionQueryDescriptionResponseMixin: {
            id: e.id,
            updateTime: Number(n),
            elementValue: t,
          },
        };
    }
    function g(e) {
      if (e != null) {
        var t;
        switch (e.toLowerCase()) {
          case "admin":
            t = "admin";
            break;
          case "guest":
            t = "guest";
            break;
          case "owner":
            t = "owner";
            break;
          case "subscriber":
            t = "subscriber";
            break;
        }
        if (t != null) return { membershipType: t };
      }
    }
    function h(e) {
      switch (e) {
        case "ALL":
          return o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting
            .All;
        case "BLOCKLIST":
          return o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting
            .Blocklist;
        case "NONE":
          return o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting
            .None;
        case "BASIC":
          return o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting
            .Basic;
        default:
          return null;
      }
    }
    function y(e) {
      var t = [];
      for (var n of e) {
        var r = Number(n.message_id),
          a = Number(n.expiry_ts);
        Number.isSafeInteger(r) &&
          r > 0 &&
          Number.isFinite(a) &&
          a > 0 &&
          t.push({ serverId: r, expiryTs: o("WATimeUtils").castToUnixTime(a) });
      }
      return t;
    }
    function C(e) {
      var t = [];
      for (var n of e)
        if (n != null && n != null && n.type != null) {
          var r = n.type.toLowerCase() === "image" ? "image" : "preview";
          n.direct_path != null &&
          n.direct_path !== "" &&
          n.id != null &&
          n.type != null
            ? t.push({
                queryPictureDirectPathOrEmptyResponseMixinGroup: {
                  name: "QueryPictureDirectPathResponse",
                  value: { directPath: n.direct_path, type: r, id: n.id },
                },
              })
            : (n.direct_path === "" || n.direct_path == null) &&
              t.push({
                queryPictureDirectPathOrEmptyResponseMixinGroup: {
                  name: "QueryPictureEmptyResponse",
                  value: { type: "image" },
                },
              });
        }
      return { picture: [].concat(t) };
    }
    function b(e) {
      if (e != null) return e;
    }
    function v(e) {
      if (e != null)
        switch (e.toLowerCase()) {
          case "active":
            return o("WAWebCommonNewsletterEnums").WamoSubStatus.ACTIVE;
          case "inactive":
            return o("WAWebCommonNewsletterEnums").WamoSubStatus.INACTIVE;
          default:
            return;
        }
    }
    ((l.parseMexNewsletterResponse = e),
      (l.toReactionCodesSettingMixin = h),
      (l.toPinnedMessagesMixin = y));
  },
  98,
);
