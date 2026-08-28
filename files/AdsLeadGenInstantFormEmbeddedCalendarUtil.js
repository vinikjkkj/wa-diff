__d(
  "AdsLeadGenInstantFormEmbeddedCalendarUtil",
  ["GeoTokenLabelColorEnum"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "calendly.com",
      c = "api.leadconnectorhq.com",
      d = ["/widget/booking/", "/widget/bookings/"],
      m = [
        "meetings.hubspot.com",
        "meetings-na1.hubspot.com",
        "meetings-na2.hubspot.com",
        "meetings-na3.hubspot.com",
        "meetings-eu1.hubspot.com",
        "meetings-ap1.hubspot.com",
      ],
      p =
        ((e = {}),
        (e.CALENDLY = "Calendly"),
        (e.GHL = "LeadConnector"),
        (e.HUBSPOT = "HubSpot"),
        e);
    function _(e) {
      return p[e];
    }
    var f =
      ((s = {}),
      (s.CALENDLY = function (t) {
        var e = t.hostname;
        return e === u || e.endsWith("." + u);
      }),
      (s.GHL = function (t) {
        return t.hostname !== c
          ? !1
          : d.some(function (e) {
              return t.pathname.startsWith(e);
            });
      }),
      (s.HUBSPOT = function (t) {
        return m.includes(t.hostname);
      }),
      s);
    function g(e) {
      if (e == null) return null;
      try {
        var t = new URL(e);
        if (f.CALENDLY(t)) return "CALENDLY";
        if (f.GHL(t)) return "GHL";
        if (f.HUBSPOT(t)) return "HUBSPOT";
      } catch (e) {
        return null;
      }
      return null;
    }
    function h(e) {
      var t = g(e);
      return t != null ? p[t] : null;
    }
    function y(e, t) {
      var n = g(e);
      return t == null
        ? n == null
          ? r("GeoTokenLabelColorEnum").Blue
          : r("GeoTokenLabelColorEnum").Grey
        : n === t
          ? r("GeoTokenLabelColorEnum").Blue
          : r("GeoTokenLabelColorEnum").Grey;
    }
    function C(e) {
      return g(e) === "CALENDLY";
    }
    function b(e) {
      return g(e) === "GHL";
    }
    function v(e) {
      return g(e) === "HUBSPOT";
    }
    function S(e) {
      return g(e) != null;
    }
    ((l.CALENDLY_DOMAIN = u),
      (l.GHL_DOMAIN_API = c),
      (l.getBookingTypeDisplayName = _),
      (l.detectBookingType = g),
      (l.detectBookingTypeDisplayName = h),
      (l.getBookingTypeLabelColor = y),
      (l.isCalendlyDomain = C),
      (l.isGHLDomain = b),
      (l.isHubSpotDomain = v),
      (l.isKnownBookingDomain = S));
  },
  98,
);
