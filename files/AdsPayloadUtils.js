__d(
  "AdsPayloadUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (!e) return [];
      if (e.id != null) return [e.id];
      if (e.key != null) return [e.key];
      if (Array.isArray(e.ids) && e.ids.length > 0) return e.ids;
      if (Array.isArray(e.keys) && e.keys.length > 0) return e.keys;
      var t = e.action;
      return t
        ? t.id != null
          ? [t.id]
          : t.key != null
            ? [t.key]
            : Array.isArray(t.ids) && t.ids.length > 0
              ? t.ids
              : Array.isArray(t.keys) && t.keys.length > 0
                ? t.keys
                : null
        : [];
    }
    function l(t) {
      var n = t && t.action;
      if (n) {
        if (Array.isArray(n.adgroupIDs) && n.adgroupIDs.length > 0)
          return n.adgroupIDs;
        if (
          n.data &&
          Array.isArray(n.data.adgroupIDs) &&
          n.data.adgroupIDs.length > 0
        )
          return n.data.adgroupIDs;
      }
      var r = e(t);
      if (r) return r;
      if (
        n &&
        n.responses &&
        Array.isArray(n.responses) &&
        n.responses.length > 0
      ) {
        var o = [];
        return (
          n.responses.forEach(function (e) {
            return (o = o.concat(e.ids));
          }),
          o
        );
      }
      return [];
    }
    function s(t) {
      var n = t && t.action;
      if (n) {
        if (Array.isArray(n.campaignIDs) && n.campaignIDs.length > 0)
          return n.campaignIDs;
        if (
          n.data &&
          Array.isArray(n.data.campaignIDs) &&
          n.data.campaignIDs.length > 0
        )
          return n.data.campaignIDs;
      }
      var r = e(t);
      return r || [];
    }
    function u(t) {
      var n = t && t.action;
      if (n) {
        if (Array.isArray(n.campaignGroupIDs) && n.campaignGroupIDs.length > 0)
          return n.campaignGroupIDs;
        if (
          n.data &&
          Array.isArray(n.data.campaignGroupIDs) &&
          n.data.campaignGroupIDs.length > 0
        )
          return n.data.campaignGroupIDs;
      }
      var r = e(t);
      return r || [];
    }
    ((i.getAdgroupIDsFromPayload_DO_NOT_USE = l),
      (i.getCampaignIDsFromPayload_DO_NOT_USE = s),
      (i.getCampaignGroupIDsFromPayload_DO_NOT_USE = u));
  },
  66,
);
