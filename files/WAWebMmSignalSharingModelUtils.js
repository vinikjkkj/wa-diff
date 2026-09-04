__d(
  "WAWebMmSignalSharingModelUtils",
  [
    "WAWebHandleMsgTypes.flow",
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
      var t = e.chat,
        n = e.defaultUrl,
        r = e.isMmSignalSharingDisclosureTosAccepted,
        a = e.msg;
      if (
        !o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureEnabled()
      )
        return { link: n, index: 0 };
      if (
        o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingReplacingShimmedLinksEnabled()
      ) {
        var i = 0;
        for (var l of (u =
          (c = a.mmSignalSharing) == null
            ? void 0
            : c.urlTrackingMapElements) != null
          ? u
          : []) {
          var u,
            c,
            d = l.consentedUsersUrl,
            m = l.originalUrl,
            p = l.unconsentedUsersUrl;
          if (S(m) === S(n)) {
            var _ = void 0;
            if (r) {
              var f;
              if (
                o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() &&
                (f = t.contact) != null &&
                f.isContactBlocked
              ) {
                var g;
                _ = (g = p != null ? p : m) != null ? g : n;
              } else {
                var h, y;
                _ =
                  (h = (y = d != null ? d : p) != null ? y : m) != null ? h : n;
              }
            } else {
              var C;
              _ = (C = p != null ? p : m) != null ? C : n;
            }
            return { link: _, index: i };
          }
          i++;
        }
        return { link: n, index: void 0 };
      }
      if (s(t, a) && r) {
        var b = 0;
        for (var R of (L =
          (E = a.mmSignalSharing) == null
            ? void 0
            : E.urlTrackingMapElements) != null
          ? L
          : []) {
          var L,
            E,
            k = R.consentedUsersUrl,
            I = R.originalUrl,
            T = R.unconsentedUsersUrl;
          if (S(I) === S(n))
            return {
              link: v({
                chat: t,
                consentedUrl: k,
                defaultUrl: n,
                originalUrl: I,
                unconsentedUrl: T,
              }),
              index: b,
            };
          b++;
        }
      }
      return { link: n, index: void 0 };
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
      if (
        !o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureEnabled()
      )
        return !1;
      for (
        var t = 0;
        t <
        ((n =
          (r = e.interactivePayload) == null || (r = r.buttons) == null
            ? void 0
            : r.length) != null
          ? n
          : 0);
        t++
      ) {
        var n,
          r,
          a,
          i = (a = R(e, t)) != null ? a : {},
          l = i.consentedUrl;
        if (l != null) return !0;
      }
      for (
        var s = 0;
        s <
        ((u =
          (c = e.mmSignalSharing) == null ||
          (c = c.urlTrackingMapElements) == null
            ? void 0
            : c.length) != null
          ? u
          : 0);
        s++
      ) {
        var u,
          c,
          d,
          m = (d = L(e, s)) != null ? d : {},
          p = m.consentedUrl;
        if (p != null) return !0;
      }
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
          o =
            (n =
              (r = e.mmSignalSharing) == null ||
              (r = r.urlTrackingMapElements) == null
                ? void 0
                : r[t]) != null
              ? n
              : {},
          a = o.consentedUsersUrl,
          i = o.originalUrl,
          l = o.unconsentedUsersUrl;
        return { consentedUrl: a, unconsentedUrl: l, originalUrl: i };
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
