__d(
  "AdsAdObjectRelayIDUtils",
  ["$InternalEnum", "AdsUEditorHostIDs", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      ADGROUP: "adgroup",
      CAMPAIGN: "campaign",
      CAMPAIGN_GROUP: "campaign_group",
    });
    function s(e) {
      return e;
    }
    function u(e) {
      return e;
    }
    function c(e) {
      return e;
    }
    function d(e) {
      return e;
    }
    function m(e) {
      return e;
    }
    function p(e) {
      return e;
    }
    function _(t) {
      var n = t.split(",");
      if (n.length !== 3) throw r("err")("Cannot parse relayID " + t);
      var o = n[0],
        a = n[1],
        i = n[2],
        l = e.cast(i);
      if (l == null)
        throw r("err")("Cannot parse adObjectLevel " + i + " from " + t);
      return { adObjectLevel: l, hostID: a != null ? a : "", id: o };
    }
    function f(e, t, n) {
      if (e.includes(",")) throw r("err")("Cannot encode ID with comma " + e);
      if (t.includes(","))
        throw r("err")("Cannot encode hostID with comma " + t);
      return e + "," + t + "," + n;
    }
    function g(e, t, n) {
      return e.map(function (e) {
        return f(e, t, n);
      });
    }
    function h(e, t) {
      return e.map(function (e) {
        return f(e, t.hostID, t.adObjectLevel);
      });
    }
    function y(e, t) {
      return h(e, t);
    }
    function C(e) {
      return e;
    }
    function b(e) {
      return e;
    }
    function v(e) {
      return e.join("|");
    }
    function S(e) {
      return e.split("|").map(function (e) {
        return e;
      });
    }
    function R(t) {
      switch (t) {
        case "ad":
          return e.ADGROUP;
        case "ad_set":
          return e.CAMPAIGN;
        case "campaign":
          return e.CAMPAIGN_GROUP;
        default:
          throw r("err")(
            "Cannot convert level " + t + " to AdsUEditorAdObjectLevels",
          );
      }
    }
    function L(t) {
      return t.map(function (t) {
        return f(t, r("AdsUEditorHostIDs").EDITING, e.ADGROUP);
      });
    }
    function E(t) {
      return t.map(function (t) {
        return f(t, r("AdsUEditorHostIDs").EDITING, e.CAMPAIGN);
      });
    }
    function k(t) {
      return t.map(function (t) {
        return f(t, r("AdsUEditorHostIDs").EDITING, e.CAMPAIGN_GROUP);
      });
    }
    ((l.AdsUEditorAdObjectLevels = e),
      (l.stringToAdObjectRelayID = s),
      (l.adObjectRelayIDToString = u),
      (l.campaignGroupIDToString = c),
      (l.campaignGroupIDToFBID = d),
      (l.adObjectRelayIDArrayToStringArray = m),
      (l.campaignGroupIDArrayToFBIDArray = p),
      (l.decodeAdObjectRelayID = _),
      (l.encodeAdObjectRelayID = f),
      (l.encodeAdObjectRelayIDArray = g),
      (l.encodeAdObjectRelayIDsWithContext = h),
      (l.encodeCampaignGroupRelayIDsWithContext = y),
      (l.stringToAdObjectRelayIDArray = C),
      (l.adObjectRelayIDArrayToString = b),
      (l.encodeAdObjectRelayIDArrayToString = v),
      (l.decodeAdObjectRelayIDArrayToArray = S),
      (l.adObjectLevelsTypeToAdsUEditorAdObjectLevels = R),
      (l.encodeEditingAdgroupRelayIDs = L),
      (l.encodeEditingCampaignRelayIDs = E),
      (l.encodeEditingCampaignGroupRelayIDs = k));
  },
  98,
);
