__d(
  "WAWebMexNewsletterParseUtils",
  [
    "WAJids",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterModelUtils",
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
          v,
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
          W = (t = e.thread_metadata) == null ? void 0 : t.creation_time,
          q = (n = e.thread_metadata) == null ? void 0 : n.invite,
          U = (r = e.thread_metadata) == null ? void 0 : r.name,
          V = (a = e.thread_metadata) == null ? void 0 : a.subscribers_count,
          H = (i = e.viewer_metadata) == null ? void 0 : i.settings,
          G = (l = e.thread_metadata) == null ? void 0 : l.verification,
          z = (v = e.state) == null ? void 0 : v.type,
          j = (S = e.thread_metadata) == null ? void 0 : S.description,
          K = (R = e.viewer_metadata) == null ? void 0 : R.role,
          Q = (L = e.thread_metadata) == null ? void 0 : L.picture,
          X = (E = e.thread_metadata) == null ? void 0 : E.preview,
          Y =
            (k = e.thread_metadata) == null ||
            (k = k.settings) == null ||
            (k = k.reaction_codes) == null
              ? void 0
              : k.value,
          J =
            (I = e.thread_metadata) == null || (I = I.wamo_sub) == null
              ? void 0
              : I.plan_id,
          Z = (T = e.viewer_metadata) == null ? void 0 : T.wamo_sub_status,
          ee =
            (D = e.status_metadata) == null ? void 0 : D.last_status_server_id,
          te =
            (x = e.status_metadata) == null ? void 0 : x.last_status_sent_time,
          ne = {
            idJid: o("WAJids").toNewsletterJid(e.id),
            newsletterCreationTimeMetadataMixin: ($ = s(W)) != null ? $ : null,
            newsletterInviteLinkMetadataMixin: (P = u(q)) != null ? P : null,
            newsletterNameMetadataMixin: (N = c(U)) != null ? N : null,
            newsletterSubscribersMetadataMixin: (M = d(V)) != null ? M : null,
            newsletterUserSettingsMetadataMixin: m(H),
            newsletterVerificationMetadataMixin: (w = p(G)) != null ? w : null,
            newsletterStateMetadataMixin: (A = _(z)) != null ? A : null,
            newsletterDescriptionMetadataMixin: (F = f(j)) != null ? F : null,
            newsletterMembershipMetadataMixin: (O = g(K)) != null ? O : null,
            newsletterPictureMetadataMixin: (B = y([Q, X])) != null ? B : null,
            hasNewsletterLinkedAccountsMetadataMixin: !1,
            newsletterPrivacyMetadataMixin: null,
            newsletterReactionCodesSettingMetadataMixin:
              Y != null ? h(Y) : void 0,
          };
        return (
          o("WAWebNewsletterGatingUtils").isWamoSubExperienceEnabled() &&
            ((ne.newsletterWamoSubPlanIdMetadataMixin = C(J)),
            (ne.newsletterWamoSubStatusMetadataMixin = b(Z))),
          ee != null &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterStatusReceiverEnabled() &&
            (ne.newsletterStatusMetadata = o(
              "WAWebNewsletterModelUtils",
            ).toStatusMetadata(ee, te)),
          ne
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
    function C(e) {
      if (e != null) return e;
    }
    function b(e) {
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
    ((l.parseMexNewsletterResponse = e), (l.toReactionCodesSettingMixin = h));
  },
  98,
);
