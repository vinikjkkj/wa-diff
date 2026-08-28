__d(
  "AdsTypedID",
  ["gkx", "isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("gkx")("22395"),
      s = ":Adgroup",
      u = ":Campaign",
      c = ":CampaignGroup";
    function d(t) {
      return !e || r("isStringNullOrEmpty")(t) ? t : t + s;
    }
    function m(t) {
      return !e || r("isStringNullOrEmpty")(t) ? t : t + u;
    }
    function p(t) {
      return !e || r("isStringNullOrEmpty")(t) ? t : t + c;
    }
    function _(e) {
      return e.map(d);
    }
    function f(e) {
      return e.map(m);
    }
    function g(e) {
      return e.map(p);
    }
    function h(t) {
      return !e || r("isStringNullOrEmpty")(t) ? t : t.slice(0, -s.length);
    }
    function y(t) {
      return !e || r("isStringNullOrEmpty")(t) ? t : t.slice(0, -u.length);
    }
    function C(t) {
      return !e || r("isStringNullOrEmpty")(t) ? t : t.slice(0, -c.length);
    }
    function b(e) {
      return e.map(h);
    }
    function v(e) {
      return e.map(y);
    }
    function S(e) {
      return e.map(C);
    }
    function R(t) {
      return !e || r("isStringNullOrEmpty")(t) ? !0 : t.endsWith(s);
    }
    function L(t) {
      return !e || r("isStringNullOrEmpty")(t) ? !0 : t.endsWith(u);
    }
    function E(t) {
      return !e || r("isStringNullOrEmpty")(t) ? !0 : t.endsWith(c);
    }
    ((l.fbidToAdgroupTypedID = d),
      (l.fbidToCampaignTypedID = m),
      (l.fbidToCampaignGroupTypedID = p),
      (l.fbidArrayToAdgroupTypedIDArray = _),
      (l.fbidArrayToCampaignTypedIDArray = f),
      (l.fbidArrayToCampaignGroupTypedIDArray = g),
      (l.adgroupTypedIDToFBID = h),
      (l.campaignTypedIDToFBID = y),
      (l.campaignGroupTypedIDToFBID = C),
      (l.adgroupTypedIDArrayToFBIDArray = b),
      (l.campaignTypedIDArrayToFBIDArray = v),
      (l.campaignGroupTypedIDArrayToFBIDArray = S),
      (l.isAdgroupTypedID = R),
      (l.isCampaignTypedID = L),
      (l.isCampaignGroupTypedID = E));
  },
  98,
);
