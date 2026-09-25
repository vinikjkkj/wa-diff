__d(
  "WAWebMmSignalSharingModelUtils",
  [
    "WAWebHandleMsgTypes.flow",
    "WAWebMmSignalSharingContextInfo",
    "WAWebMmSignalSharingExpirationWindowUtils",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebWamEnumDisclosureEventType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      DISCLOSURE_ON_CLICK: 1,
      DISCLOSURE_ON_READ: 2,
      DISCLOSURE_ON_CLICK_AND_READ: 3,
    };
    function s(e, t) {
      var n;
      return o(
        "WAWebMmSignalSharingGatingUtils",
      ).isMmSignalSharingDisclosureEnabled()
        ? (((n = e.contact) == null || (n = n.privacyMode) == null
            ? void 0
            : n.hostStorage) ===
            o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook &&
            o("WAWebMsgGetters").getIsMarketingTemplateTag(t)) ||
            (u(t) === !0 &&
              o(
                "WAWebMmSignalSharingGatingUtils",
              ).isMmSignalSharingDisclosureEnabledFromCompanionHistorySync())
        : !1;
    }
    function u(t) {
      var n;
      return Object.values(e).includes(
        (n = t.mmSignalSharing) == null ? void 0 : n.dataSharingFlags,
      );
    }
    function c(e) {
      var t = e.btnIndex,
        n = e.chat,
        r = e.defaultUrl,
        a = e.isMmSignalSharingDisclosureTosAccepted,
        i = e.msg;
      if (
        !o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureEnabled()
      )
        return r;
      if (
        o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingReplacingShimmedLinksEnabled()
      ) {
        var l,
          u,
          c = (l = R(i, t)) != null ? l : {},
          d = c.consentedUrl,
          m = c.originalUrl,
          p = c.unconsentedUrl;
        if (a) {
          var _, f, g;
          if (
            o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() &&
            (_ = n.contact) != null &&
            _.isContactBlocked
          ) {
            var h;
            return (h = p != null ? p : m) != null ? h : r;
          }
          return (f = (g = d != null ? d : p) != null ? g : m) != null ? f : r;
        }
        return (u = p != null ? p : m) != null ? u : r;
      }
      if (s(n, i) && a) {
        var y,
          C = (y = R(i, t)) != null ? y : {},
          b = C.consentedUrl,
          S = C.originalUrl,
          L = C.unconsentedUrl;
        return v({
          chat: n,
          consentedUrl: b,
          defaultUrl: r,
          originalUrl: S,
          unconsentedUrl: L,
        });
      }
      return r;
    }
    function d(e) {
      var t,
        n,
        r = e.chat,
        a = e.defaultUrl,
        i = e.isMmSignalSharingDisclosureTosAccepted,
        l = e.msg;
      if (
        !o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureEnabled()
      )
        return { link: a, index: 0 };
      var u =
        (t = o(
          "WAWebMmSignalSharingContextInfo",
        ).getCappedMmSignalSharingURLTrackingMapElements(
          (n = l.mmSignalSharing) == null ? void 0 : n.urlTrackingMapElements,
        )) != null
          ? t
          : [];
      if (
        o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingReplacingShimmedLinksEnabled()
      ) {
        var c = 0;
        for (var d of u) {
          var m = d.consentedUsersUrl,
            p = d.originalUrl,
            _ = d.unconsentedUsersUrl;
          if (S(p) === S(a)) {
            var f = void 0;
            if (i) {
              var g;
              if (
                o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() &&
                (g = r.contact) != null &&
                g.isContactBlocked
              ) {
                var h;
                f = (h = _ != null ? _ : p) != null ? h : a;
              } else {
                var y, C;
                f =
                  (y = (C = m != null ? m : _) != null ? C : p) != null ? y : a;
              }
            } else {
              var b;
              f = (b = _ != null ? _ : p) != null ? b : a;
            }
            return { link: f, index: c };
          }
          c++;
        }
        return { link: a, index: void 0 };
      }
      if (s(r, l) && i) {
        var R = 0;
        for (var L of u) {
          var E = L.consentedUsersUrl,
            k = L.originalUrl,
            I = L.unconsentedUsersUrl;
          if (S(k) === S(a))
            return {
              link: v({
                chat: r,
                consentedUrl: E,
                defaultUrl: a,
                originalUrl: k,
                unconsentedUrl: I,
              }),
              index: R,
            };
          R++;
        }
      }
      return { link: a, index: void 0 };
    }
    function m(e, t, n) {
      if (
        o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureEnabled()
      )
        switch (e) {
          case o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE
            .CTA_URL_CLICK:
            return R(t, n);
          case o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE
            .CTA_APP_CLICK:
            return R(t, n);
          case o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE
            .BODY_URL_CLICK:
            return L(t, n);
          default:
            return null;
        }
    }
    function p(e) {
      var t, n;
      if (
        !o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureEnabled()
      )
        return !1;
      for (
        var r = 0;
        r <
        ((a =
          (i = e.interactivePayload) == null || (i = i.buttons) == null
            ? void 0
            : i.length) != null
          ? a
          : 0);
        r++
      ) {
        var a,
          i,
          l,
          s = (l = R(e, r)) != null ? l : {},
          u = s.consentedUrl;
        if (u != null) return !0;
      }
      for (
        var c =
            (t = o(
              "WAWebMmSignalSharingContextInfo",
            ).getCappedMmSignalSharingURLTrackingMapElements(
              (n = e.mmSignalSharing) == null
                ? void 0
                : n.urlTrackingMapElements,
            )) != null
              ? t
              : [],
          d = 0;
        d < c.length;
        d++
      )
        if (c[d].consentedUsersUrl != null) return !0;
      return !1;
    }
    var _ = new Set([
      o("WAWebMsgType").MSG_TYPE.CHAT,
      o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
    ]);
    function f(e) {
      var t,
        n,
        r = e.chat,
        a = e.fromMe;
      if (
        !o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureEnabled()
      )
        return null;
      var i = new Map(
          (t = r.mmSignalSharingExpirationWindow) == null
            ? void 0
            : t.map(function (e) {
                return [e.messageId.id, e];
              }),
        ),
        l = r.msgs.getModelsArray().filter(function (e) {
          return _.has(e.type);
        }),
        s,
        u = !1,
        c = 0,
        d;
      for (d = l.length - 1; d >= 0; d--) {
        var m, p;
        if (
          (b(l[d]) && l[d].id.fromMe === a && !C(l, d) && c++,
          u || (u = l[d].id.fromMe),
          (s = i.get(l[d].id.id)),
          ((m = s) == null ? void 0 : m.disclosedToken) != null ||
            ((p = s) == null ? void 0 : p.undisclosedToken) != null)
        )
          break;
      }
      return (
        a === !1 &&
          ((n = l[d + 1]) == null ? void 0 : n.id.fromMe) === !1 &&
          c--,
        {
          mmSignalSharingExpirationWindowItem: s,
          messageOriginGroups: c,
          isContinuation: C(l, l.length - 1),
        }
      );
    }
    function g(e) {
      var t = e.chat,
        n = e.deepConversationParams,
        r = e.mmSignalType,
        a = e.msgId,
        i = e.tokenPath;
      if (
        o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureEnabled()
      ) {
        var l = h({ chat: t, deepConversationParams: n, msgId: a }),
          s = o(
            "WAWebMmSignalSharingGatingUtils",
          ).getMmSignalSharingOptimizedDeliverySignalCollectionConfig(),
          u = s.consented_collection_window_in_hours,
          c = s.consented_types_allowlist,
          d = s.non_consented_collection_window_in_hours,
          m = s.non_consented_types_allowlist;
        if (l) {
          var p;
          return i === "disclosed"
            ? y({
                allowlist: c,
                expirationTimeInHours: u,
                expirationWindowItem: l,
                mmSignalType: r,
                token: l.disclosedToken,
              })
            : i === "undisclosed"
              ? y({
                  allowlist: m,
                  expirationTimeInHours: d,
                  expirationWindowItem: l,
                  mmSignalType: r,
                  token: l.undisclosedToken,
                })
              : (p = y({
                    allowlist: c,
                    expirationTimeInHours: u,
                    expirationWindowItem: l,
                    mmSignalType: r,
                    token: l.disclosedToken,
                  })) != null
                ? p
                : y({
                    allowlist: m,
                    expirationTimeInHours: d,
                    expirationWindowItem: l,
                    mmSignalType: r,
                    token: l.undisclosedToken,
                  });
        }
      }
    }
    function h(e) {
      var t,
        n = e.chat,
        r = e.deepConversationParams,
        a = e.msgId;
      if (
        o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureEnabled()
      ) {
        if (r) {
          var i = f({ chat: n, fromMe: r.isNewMessagefromMe }),
            l = i != null ? i : {},
            s = l.mmSignalSharingExpirationWindowItem;
          return s;
        }
        if (a) {
          var u,
            c =
              (u = n.mmSignalSharingExpirationWindow) == null
                ? void 0
                : u.find(function (e) {
                    return (
                      e.messageId.id === a.id &&
                      (e.disclosedToken != null || e.undisclosedToken != null)
                    );
                  });
          if (c) return c;
        }
        return (t = n.mmSignalSharingExpirationWindow) == null
          ? void 0
          : t.findLast(function (e) {
              return e.disclosedToken != null || e.undisclosedToken != null;
            });
      }
    }
    function y(e) {
      var t = e.allowlist,
        n = e.expirationTimeInHours,
        r = e.expirationWindowItem,
        a = e.mmSignalType,
        i = e.token;
      return a != null &&
        t.includes(a) &&
        !o(
          "WAWebMmSignalSharingExpirationWindowUtils",
        ).hasMmSignalSharingWindowExpired(r) &&
        !o(
          "WAWebMmSignalSharingExpirationWindowUtils",
        ).hasMmSignalSharingTokenExpired(r, n)
        ? i
        : void 0;
    }
    function C(e, t) {
      return (
        e.length > 1 &&
        t >= 1 &&
        b(e[t]) &&
        b(e[t - 1]) &&
        e[t].id.fromMe === e[t - 1].id.fromMe
      );
    }
    function b(e) {
      var t, n;
      return (
        ((t = e.mmSignalSharing) == null ? void 0 : t.existsDisclosedToken) !==
          !0 &&
        ((n = e.mmSignalSharing) == null
          ? void 0
          : n.existsUndisclosedToken) !== !0
      );
    }
    function v(e) {
      var t,
        n = e.chat,
        r = e.consentedUrl,
        a = e.defaultUrl,
        i = e.originalUrl,
        l = e.unconsentedUrl;
      if (
        !o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureEnabled()
      )
        return null;
      if (
        o(
          "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
        ).isMmSignalSharingUserDisclosedInCollectionWindow(
          n.mmSignalSharingExpirationWindow,
        )
      ) {
        var s, u, c;
        if (
          o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() &&
          (s = n.contact) != null &&
          s.isContactBlocked
        ) {
          var d;
          return (d = l != null ? l : i) != null ? d : a;
        }
        return (u = (c = r != null ? r : l) != null ? c : i) != null ? u : a;
      }
      return (t = l != null ? l : i) != null ? t : a;
    }
    function S(e) {
      return e == null ? "" : e.replace(/\/$/, "");
    }
    function R(e, t) {
      if (t != null) {
        var n,
          r,
          o =
            (n =
              (r = e.interactivePayload) == null || (r = r.buttons) == null
                ? void 0
                : r[t]) != null
              ? n
              : {},
          a = o.buttonParamsJson;
        if (a != null) {
          var i = JSON.parse(a),
            l = i.consented_users_url,
            s = i.unconsented_users_url,
            u = i.url;
          return { originalUrl: u, consentedUrl: l, unconsentedUrl: s };
        }
      }
    }
    function L(e, t) {
      if (t != null) {
        var n,
          r,
          a,
          i =
            (n =
              (r = o(
                "WAWebMmSignalSharingContextInfo",
              ).getCappedMmSignalSharingURLTrackingMapElements(
                (a = e.mmSignalSharing) == null
                  ? void 0
                  : a.urlTrackingMapElements,
              )) == null
                ? void 0
                : r[t]) != null
              ? n
              : {},
          l = i.consentedUsersUrl,
          s = i.originalUrl,
          u = i.unconsentedUsersUrl;
        return { consentedUrl: l, unconsentedUrl: u, originalUrl: s };
      }
    }
    ((l.isDisclosureEnabledForMm = s),
      (l.isDisclosureEnabledForMsg = u),
      (l.getCTALinkForMmSignalSharing = c),
      (l.getBodyLinkForMmSignalSharing = d),
      (l.getMMSignalSharingUrls = m),
      (l.existsMmSignalSharingConsentedUrl = p),
      (l.MM_SIGNAL_SHARING_COUNTED_MSG_TYPES = _),
      (l.getMmSignalSharingNewMessageParams = f),
      (l.getMMSignalSharingData = g),
      (l.getMmSignalSharingExpirationWindowItem = h),
      (l.isMmSignalSharingNewMessageParamsEligible = b));
  },
  98,
);
