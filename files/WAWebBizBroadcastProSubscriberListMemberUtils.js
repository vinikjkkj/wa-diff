__d(
  "WAWebBizBroadcastProSubscriberListMemberUtils",
  [
    "WAJids",
    "WAWebApiContact",
    "WAWebBizBroadcastProRecipientNameRestriction",
    "WAWebBizBroadcastsRecipientUtils",
    "WAWebContactCollection",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e != null && e.trim() !== "";
    }
    function s(t) {
      var n = new Map();
      for (var r of t) {
        var o = n.get(r.phone);
        (o == null || (!e(o.fullName) && e(r.fullName))) && n.set(r.phone, r);
      }
      return Array.from(n.values());
    }
    function u(e, t) {
      var n = o(
        "WAWebBizBroadcastProRecipientNameRestriction",
      ).shouldOmitRecipientNames(t);
      return e.map(function (e) {
        var t;
        return {
          fullName: n ? null : (t = c(e.phone)) != null ? t : e.fullName,
          phone: e.phone,
        };
      });
    }
    function c(e) {
      var t, n;
      try {
        n = o("WAWebWidFactory").createUserWidOrThrow(
          o("WAJids").toPhoneUserJid(e.replace(/\D/g, "")),
        );
      } catch (e) {
        return null;
      }
      var r = o("WAWebApiContact").getCurrentLid(n),
        a =
          (t =
            r == null
              ? null
              : o("WAWebContactCollection").ContactCollection.get(r)) != null
            ? t
            : o("WAWebContactCollection").ContactCollection.get(n);
      return a == null
        ? null
        : o("WAWebBizBroadcastsRecipientUtils").getSavedRecipientName(a);
    }
    ((l.hasFullName = e),
      (l.dedupeMembersByPhone = s),
      (l.resolveMemberDisplayNames = u));
  },
  98,
);
