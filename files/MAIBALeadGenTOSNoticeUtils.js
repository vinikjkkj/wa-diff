__d(
  "MAIBALeadGenTOSNoticeUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function l(t) {
      try {
        return e(JSON.parse(t));
      } catch (e) {
        return null;
      }
    }
    function s(e, t) {
      var n = e == null ? void 0 : e[t];
      return typeof n == "string" && n.trim() !== "" ? n : null;
    }
    function u(e) {
      return e === "accepted"
        ? "accepted"
        : e === "accepted_but_unreadable"
          ? "accepted_but_unreadable"
          : e === "not_accepted"
            ? "not_accepted"
            : null;
    }
    function c(e) {
      var t = e == null ? void 0 : e.result;
      return typeof t == "string" ? l(t) : e;
    }
    function d(t) {
      var n;
      return (n = e(t == null ? void 0 : t.preview)) != null ? n : t;
    }
    function m(t) {
      var n;
      return (n = e(t == null ? void 0 : t.lead_ads_terms)) != null ? n : t;
    }
    var p = "https://www.facebook.com/ads/leadgen/tos/";
    function _(e) {
      return p + "?page_id=" + encodeURIComponent(e);
    }
    function f(e, t) {
      return (
        "fb-ama://web-view?url=" +
        encodeURIComponent(e) +
        "&title=" +
        encodeURIComponent(t)
      );
    }
    function g(e) {
      if (e == null || e === "") return null;
      var t = m(d(c(l(e)))),
        n = u(s(t, "status")),
        r = s(t, "page_id"),
        o = s(t, "page_name");
      return n == null || r == null || o == null
        ? null
        : {
            blocksLeadAds: n === "not_accepted",
            canAcceptInApp:
              n === "not_accepted" &&
              (t == null ? void 0 : t.can_accept_in_app) === !0,
            canAcceptInChat: n === "not_accepted",
            explanation: s(t, "explanation"),
            pageId: r,
            pageName: o,
            status: n,
          };
    }
    ((i.buildLeadAdsTermsURL = _),
      (i.buildInAppWebViewDeeplink = f),
      (i.parseLeadGenTOSResult = g));
  },
  66,
);
