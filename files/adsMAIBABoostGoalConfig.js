__d(
  "adsMAIBABoostGoalConfig",
  [
    "fbt",
    "adsMAIBABuildCTAMenuItems",
    "adsMAIBAMessagingChannels",
    "adsMAIBAWebsiteCTATypes",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = new Set(["FACEBOOK_PAGE"]),
      u = "INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE",
      c = new Set(["VISIT_PROFILE", "VIEW_INSTAGRAM_PROFILE"]),
      d = new Set([
        "APPLY_NOW",
        "BOOK_NOW",
        "BOOK_TRAVEL",
        "CALL_NOW",
        "CONTACT_US",
        "DONATE_NOW",
        "DOWNLOAD",
        "GET_QUOTE",
        "LEARN_MORE",
        "REQUEST_TIME",
        "SEE_MENU",
        "SHOP_NOW",
        "SIGN_UP",
        "SUBSCRIBE",
        "WATCH_MORE",
      ]),
      m = new Set([
        "APPLY_NOW",
        "BOOK_TRAVEL",
        "CONTACT_US",
        "DOWNLOAD",
        "LEARN_MORE",
        "REQUEST_TIME",
        "SEE_MENU",
        "SHOP_NOW",
        "SIGN_UP",
        "WATCH_MORE",
        "DONATE_NOW",
      ]),
      p = new Set(["MESSAGE_PAGE", "WHATSAPP_MESSAGE", "INSTAGRAM_MESSAGE"]),
      _ = new Set(["CALL_NOW"]),
      f = new Set(["VISIT_PROFILE", "LEARN_MORE"]),
      g = new Set(["VIEW_INSTAGRAM_PROFILE"]),
      h = new Set(["VISIT_PROFILE"]);
    function y(e, t, n, r, o, a, i) {
      return {
        ctaFilter: a,
        defaultCTA: i,
        goalId: e,
        primaryFieldKind: n,
        primaryFieldLabel: r,
        primaryFieldRequired: o,
        title: t,
      };
    }
    var C = null;
    function b() {
      return (
        C == null &&
          (C = new Map([
            [
              "WEBSITE_VISITORS",
              y(
                "WEBSITE_VISITORS",
                s._(/*BTDS*/ "").toString(),
                "WEBSITE_URL",
                s._(/*BTDS*/ "").toString(),
                !0,
                m,
                "LEARN_MORE",
              ),
            ],
            [
              "ENGAGEMENT",
              y(
                "ENGAGEMENT",
                s._(/*BTDS*/ "").toString(),
                "NONE",
                null,
                !1,
                d,
                null,
              ),
            ],
            [
              "MESSAGES",
              y(
                "MESSAGES",
                s._(/*BTDS*/ "").toString(),
                "DESTINATION",
                s._(/*BTDS*/ "").toString(),
                !1,
                p,
                "MESSAGE_PAGE",
              ),
            ],
            [
              "CALLS",
              y(
                "CALLS",
                s._(/*BTDS*/ "").toString(),
                "PHONE_NUMBER",
                s._(/*BTDS*/ "").toString(),
                !0,
                _,
                "CALL_NOW",
              ),
            ],
            [
              "VIDEO_VIEWS",
              y(
                "VIDEO_VIEWS",
                s._(/*BTDS*/ "").toString(),
                "NONE",
                null,
                !1,
                d,
                null,
              ),
            ],
            [
              "PAGE_VISITS",
              y(
                "PAGE_VISITS",
                s._(/*BTDS*/ "").toString(),
                "NONE",
                null,
                !1,
                f,
                "LEARN_MORE",
              ),
            ],
            [
              "INSTAGRAM_PROFILE_VISITS",
              y(
                "INSTAGRAM_PROFILE_VISITS",
                s._(/*BTDS*/ "").toString(),
                "NONE",
                null,
                !1,
                g,
                null,
              ),
            ],
            [
              "PROFILE_VISITS",
              y(
                "PROFILE_VISITS",
                s._(/*BTDS*/ "").toString(),
                "NONE",
                null,
                !1,
                h,
                "VISIT_PROFILE",
              ),
            ],
            [
              "REACH",
              y(
                "REACH",
                s._(/*BTDS*/ "").toString(),
                "NONE",
                null,
                !1,
                d,
                null,
              ),
            ],
          ])),
        C
      );
    }
    function v(t, n) {
      if (t == null || t === "") return null;
      var r = b();
      switch (t) {
        case "POST_ENGAGEMENT":
          return r.get("ENGAGEMENT");
        case "CONVERSATIONS":
        case "CONVERSATION":
          return r.get("MESSAGES");
        case "QUALITY_CALL":
          return n === "PHONE_CALL" ? r.get("CALLS") : null;
        case "VIDEO_VIEWS":
        case "THRUPLAY":
          return r.get("VIDEO_VIEWS");
        case "REACH":
          return r.get("REACH");
        case "PROFILE_VISIT":
          return n === "INSTAGRAM_PROFILE"
            ? r.get("INSTAGRAM_PROFILE_VISITS")
            : n === u
              ? r.get("PROFILE_VISITS")
              : r.get("PAGE_VISITS");
        case "VISIT_INSTAGRAM_PROFILE":
          return r.get("INSTAGRAM_PROFILE_VISITS");
        case "LANDING_PAGE_VIEWS":
          return n === "WEBSITE" ? r.get("WEBSITE_VISITORS") : null;
        case "LINK_CLICKS":
          return n === "WEBSITE"
            ? r.get("WEBSITE_VISITORS")
            : n === "INSTAGRAM_PROFILE"
              ? r.get("INSTAGRAM_PROFILE_VISITS")
              : n === u
                ? r.get("PROFILE_VISITS")
                : n != null && e.has(n)
                  ? r.get("PAGE_VISITS")
                  : null;
        default:
          return null;
      }
    }
    var S = new Map([
      ["GET_MESSAGES", "MESSAGES"],
      ["GET_MULTI_MESSAGES", "MESSAGES"],
      ["VIEW_INSTAGRAM_PROFILE", "INSTAGRAM_PROFILE_VISITS"],
      ["GET_WEBSITE_VISITORS", "WEBSITE_VISITORS"],
      ["GET_POST_ENGAGEMENT", "ENGAGEMENT"],
      ["GET_VIDEO_VIEWS", "VIDEO_VIEWS"],
      ["GET_MORE_VISITS", "PAGE_VISITS"],
      ["GET_PAGE_VISITS", "PAGE_VISITS"],
      ["CALL_NOW", "CALLS"],
    ]);
    function R(e) {
      var t;
      return e == null ? null : (t = S.get(e)) != null ? t : null;
    }
    function L(e) {
      var t;
      return (t = b().get(e)) != null ? t : null;
    }
    function E(e) {
      switch (e) {
        case "WEBSITE_VISITORS":
          return "LINK_CLICKS";
        case "ENGAGEMENT":
          return "POST_ENGAGEMENT";
        case "MESSAGES":
          return "CONVERSATIONS";
        case "CALLS":
          return "QUALITY_CALL";
        case "VIDEO_VIEWS":
          return "VIDEO_VIEWS";
        case "PAGE_VISITS":
        case "PROFILE_VISITS":
          return "PROFILE_VISIT";
        case "INSTAGRAM_PROFILE_VISITS":
          return "VISIT_INSTAGRAM_PROFILE";
        case "REACH":
          return "REACH";
      }
    }
    function k(e) {
      switch (e) {
        case "WEBSITE_VISITORS":
          return "WEBSITE";
        case "CALLS":
          return "PHONE_CALL";
        case "PAGE_VISITS":
          return "FACEBOOK_PAGE";
        case "INSTAGRAM_PROFILE_VISITS":
          return "INSTAGRAM_PROFILE";
        case "PROFILE_VISITS":
          return u;
        case "ENGAGEMENT":
        case "MESSAGES":
        case "VIDEO_VIEWS":
        case "REACH":
          return null;
      }
    }
    function I(e, t, n) {
      return n != null && c.has(n)
        ? !1
        : e.includes("INSTAGRAM_PROFILE_VISITS") ||
            (t && e.includes("PAGE_VISITS"));
    }
    function T(e, t) {
      return I(e, !0, t) && !I(e, !1, t);
    }
    function D(e, t) {
      var n, r;
      return (n = (r = v(e, t)) == null ? void 0 : r.title) != null ? n : null;
    }
    function x(e, t) {
      var n, r;
      return (n = (r = v(e, t)) == null ? void 0 : r.primaryFieldLabel) != null
        ? n
        : null;
    }
    function $(e, t) {
      var n, r;
      return (n = (r = v(e, t)) == null ? void 0 : r.primaryFieldKind) != null
        ? n
        : null;
    }
    var P = [
      {
        field: "creative_link_url",
        relevantWhen: o("adsMAIBAWebsiteCTATypes").isWebsiteCTAType,
      },
      {
        field: "creative_phone_number",
        relevantWhen: function (t) {
          return t === "CALL_NOW";
        },
      },
    ];
    function N(e) {
      var t = P.find(function (t) {
        return t.field === e;
      });
      return t != null ? t.relevantWhen : null;
    }
    function M(e, t) {
      var n, r;
      return (n = (r = v(e, t)) == null ? void 0 : r.ctaFilter) != null
        ? n
        : null;
    }
    function w(e, t) {
      var n = e != null ? e : [];
      return t == null
        ? n
        : n.filter(function (e) {
            return (
              e.value === o("adsMAIBABuildCTAMenuItems").NO_BUTTON ||
              t.has(e.value)
            );
          });
    }
    function A(e) {
      return e == null || e.length === 0
        ? !0
        : e.length === 1 &&
            e[0].value === o("adsMAIBABuildCTAMenuItems").NO_BUTTON;
    }
    var F = new Set([
        "CALLS",
        "INSTAGRAM_PROFILE_VISITS",
        "PAGE_VISITS",
        "PROFILE_VISITS",
      ]),
      O = new Set([
        "CALLS",
        "INSTAGRAM_PROFILE_VISITS",
        "MESSAGES",
        "PAGE_VISITS",
        "PROFILE_VISITS",
        "WEBSITE_VISITORS",
      ]),
      B = new Set(["ENGAGEMENT", "REACH", "VIDEO_VIEWS"]),
      W = new Set(["PROFILE_VISITS"]);
    function q(e, t) {
      var n = v(e, t);
      return n != null && W.has(n.goalId);
    }
    function U(e, t) {
      var n = v(e, t);
      return n != null && B.has(n.goalId);
    }
    function V(e, t, n) {
      return n == null ||
        n === "" ||
        n === o("adsMAIBABuildCTAMenuItems").NO_BUTTON ||
        !U(e, t)
        ? null
        : n;
    }
    function H(e, t, n, r) {
      var a = V(t, n, r);
      if (a != null) {
        var i;
        return [
          {
            label:
              (i = o("adsMAIBABuildCTAMenuItems").adsMAIBAFormatCTALabel(a)) !=
              null
                ? i
                : a,
            value: a,
          },
        ];
      }
      var l = v(t, n),
        s = l != null && B.has(l.goalId) ? null : n,
        u = l != null && F.has(l.goalId) ? l.ctaFilter : null,
        c =
          u != null
            ? o("adsMAIBABuildCTAMenuItems").adsMAIBABuildCTAMenuItemsFromNames(
                Array.from(u),
                n,
              )
            : w(
                o("adsMAIBABuildCTAMenuItems").adsMAIBABuildCTAMenuItems(e, s),
                M(t, n),
              );
      return l != null && O.has(l.goalId)
        ? c.filter(function (e) {
            return e.value !== o("adsMAIBABuildCTAMenuItems").NO_BUTTON;
          })
        : c;
    }
    function G(e, t, n, r, a) {
      var i,
        l,
        s = V(t, n, a);
      if (s != null) return s;
      var u = v(t, n),
        c = H(e, t, n);
      if (
        r != null &&
        r !== "" &&
        c.some(function (e) {
          return e.value === r;
        })
      )
        return r;
      var d = u == null ? void 0 : u.defaultCTA;
      if (
        d != null &&
        c.some(function (e) {
          return e.value === d;
        })
      )
        return d;
      var m = u != null && B.has(u.goalId);
      if (
        (r == null || r === "" || m) &&
        c.some(function (e) {
          return e.value === o("adsMAIBABuildCTAMenuItems").NO_BUTTON;
        })
      )
        return o("adsMAIBABuildCTAMenuItems").NO_BUTTON;
      var p = c.find(function (e) {
        return e.value !== o("adsMAIBABuildCTAMenuItems").NO_BUTTON;
      });
      return (i = (l = p == null ? void 0 : p.value) != null ? l : d) != null
        ? i
        : null;
    }
    function z(e, t, n, r) {
      var o = N(e),
        a = v(t, n);
      return o == null || a == null || !o(r)
        ? !1
        : B.has(a.goalId)
          ? !0
          : a.primaryFieldKind ===
            (e === "creative_link_url" ? "WEBSITE_URL" : "PHONE_NUMBER");
    }
    function j(e, t, n, r, o) {
      return z(e, t, n, r) && V(t, n, o) == null;
    }
    function K(e, t, n, r, o, a) {
      return (a == null || a === "") && U(t, n) && j(e, t, n, r, o);
    }
    function Q(e) {
      var t,
        n,
        r =
          e === "creative_link_url"
            ? "WEBSITE_VISITORS"
            : e === "creative_phone_number"
              ? "CALLS"
              : null;
      return r != null &&
        (t = (n = b().get(r)) == null ? void 0 : n.primaryFieldLabel) != null
        ? t
        : null;
    }
    function X(e, t, n) {
      var r = v(e, t);
      return r == null || !r.primaryFieldRequired ? !1 : n == null || n === "";
    }
    function Y(e, t, n, r, a, i) {
      var l = v(e, t);
      if (l == null) return !1;
      switch (l.primaryFieldKind) {
        case "DESTINATION":
          return (
            o("adsMAIBAMessagingChannels").decodeMessagingChannels(t).length ===
            0
          );
        case "WEBSITE_URL":
          return l.primaryFieldRequired && (n == null || n === "");
        case "PHONE_NUMBER":
          return l.primaryFieldRequired && (r == null || r === "");
        case "NONE":
        default:
          return (
            K("creative_link_url", e, t, a, i, n) ||
            K("creative_phone_number", e, t, a, i, r)
          );
      }
    }
    ((l.resolveBoostGoalConfig = v),
      (l.mapAdsLWIGoalToBoostGoalId = R),
      (l.getBoostGoalConfigById = L),
      (l.representativeOptimizationGoalForBoostGoalId = E),
      (l.naturalDestinationTypeForBoostGoalId = k),
      (l.isBoostBothProfilesGoalOffered = I),
      (l.isBoostInstagramLinkNeededForBothProfiles = T),
      (l.getBoostGoalTitle = D),
      (l.getBoostGoalPrimaryFieldLabel = x),
      (l.getBoostGoalPrimaryFieldKind = $),
      (l.BOOST_DEPENDENT_FIELDS = P),
      (l.getBoostDependentRelevantWhen = N),
      (l.getBoostGoalCTAFilter = M),
      (l.applyBoostGoalCTAFilter = w),
      (l.isBoostButtonLabelHidden = A),
      (l.isBoostGoalButtonFixed = q),
      (l.isBoostAnyButtonGoal = U),
      (l.getBoostGoalPostLockedCTA = V),
      (l.getBoostGoalCTAItems = H),
      (l.getBoostGoalEffectiveDisplayCTA = G),
      (l.isBoostDependentFieldSurfaced = z),
      (l.isBoostDependentFieldEditable = j),
      (l.isBoostAnyButtonFieldMissing = K),
      (l.getBoostDependentFieldLabel = Q),
      (l.isBoostRequiredPrimaryFieldMissing = X),
      (l.isBoostGoalSectionIncomplete = Y));
  },
  226,
);
