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
          c = (l = S(i, t)) != null ? l : {},
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
          C = (y = S(i, t)) != null ? y : {},
          v = C.consentedUrl,
          R = C.originalUrl,
          L = C.unconsentedUrl;
        return b(n, v, L, R, r);
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
          if (v(m) === v(n)) {
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
        var S = 0;
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
          if (v(I) === v(n)) return { link: b(t, k, T, I, n), index: S };
          S++;
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
            return S(t, n);
          case o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE
            .CTA_APP_CLICK:
            return S(t, n);
          case o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE
            .BODY_URL_CLICK:
            return R(t, n);
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
          i = (a = S(e, t)) != null ? a : {},
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
          m = (d = R(e, s)) != null ? d : {},
          p = m.consentedUrl;
        if (p != null) return !0;
      }
      return !1;
    }
    function _(e) {
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
          return [
            o("WAWebMsgType").MSG_TYPE.CHAT,
            o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
          ].includes(e.type);
        }),
        s,
        u = !1,
        c = 0,
        d;
      for (d = l.length - 1; d >= 0; d--) {
        var m, p;
        if (
          (C(l[d]) && l[d].id.fromMe === a && !y(l, d) && c++,
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
          isContinuation: y(l, l.length - 1),
        }
      );
    }
    function f(e) {
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
        var l = g({ chat: t, deepConversationParams: n, msgId: a }),
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
            ? h(l, l.disclosedToken, r, c, u)
            : i === "undisclosed"
              ? h(l, l.undisclosedToken, r, m, d)
              : (p = h(l, l.disclosedToken, r, c, u)) != null
                ? p
                : h(l, l.undisclosedToken, r, m, d);
        }
      }
    }
    function g(e) {
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
          var i = _({ chat: n, fromMe: r.isNewMessagefromMe }),
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
    function h(e, t, n, r, a) {
      return n != null &&
        r.includes(n) &&
        !o(
          "WAWebMmSignalSharingExpirationWindowUtils",
        ).hasMmSignalSharingWindowExpired(e) &&
        !o(
          "WAWebMmSignalSharingExpirationWindowUtils",
        ).hasMmSignalSharingTokenExpired(e, a)
        ? t
        : void 0;
    }
    function y(e, t) {
      return (
        e.length > 1 &&
        t >= 1 &&
        C(e[t]) &&
        C(e[t - 1]) &&
        e[t].id.fromMe === e[t - 1].id.fromMe
      );
    }
    function C(e) {
      var t, n;
      return (
        ((t = e.mmSignalSharing) == null ? void 0 : t.existsDisclosedToken) !==
          !0 &&
        ((n = e.mmSignalSharing) == null
          ? void 0
          : n.existsUndisclosedToken) !== !0
      );
    }
    function b(e, t, n, r, a) {
      var i;
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
          e.mmSignalSharingExpirationWindow,
        )
      ) {
        var l, s, u;
        if (
          o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() &&
          (l = e.contact) != null &&
          l.isContactBlocked
        ) {
          var c;
          return (c = n != null ? n : r) != null ? c : a;
        }
        return (s = (u = t != null ? t : n) != null ? u : r) != null ? s : a;
      }
      return (i = n != null ? n : r) != null ? i : a;
    }
    function v(e) {
      return e == null ? "" : e.replace(/\/$/, "");
    }
    function S(e, t) {
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
    function R(e, t) {
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
      (l.getMmSignalSharingNewMessageParams = _),
      (l.getMMSignalSharingData = f),
      (l.getMmSignalSharingExpirationWindowItem = g));
  },
  98,
);
