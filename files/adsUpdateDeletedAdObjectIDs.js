__d(
  "adsUpdateDeletedAdObjectIDs",
  ["adsDraftIsApplicationIDPowerEditor"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = t.adsApplicationID,
        a = t.fragments;
      if (!r("adsDraftIsApplicationIDPowerEditor")(o) || e.selection.size === 0)
        return e;
      var i = [];
      if (
        (a.forEach(function (t) {
          t.ad_object_type === n &&
            t.action === "add" &&
            (t.status === "CANCELED" || t.status === "USER_CANCELED") &&
            e.selection.contains(t.ad_object_id) &&
            i.push(t.ad_object_id);
        }),
        i.length === 0)
      )
        return e;
      var l = e.selection.subtract(i);
      return { selection: l, cachedSelectedIDs: Array.from(l) };
    }
    l.default = e;
  },
  98,
);
