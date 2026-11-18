__d(
  "WAWebBizBroadcastProSendableContactsV2",
  [
    "WAJids",
    "WAWebBizBroadcastProContactRecipientUtils",
    "WAWebBizBroadcastProRecipientContacts",
    "WAWebBizBroadcastProSelectAllUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebBizBroadcastProSelectAllUtils").getSelectAllScope(
          e,
          function (e) {
            return e.id.user;
          },
          o("WAWebBizBroadcastProContactRecipientUtils").hasRecipientPhone,
        ),
        n = t.selectableIds;
      if (n.length === e.length) return e;
      var r = new Set(n);
      return e.filter(function (e) {
        return r.has(e.id.user);
      });
    }
    function s(t) {
      t === void 0 && (t = !1);
      var n = new Set(
        e(
          o("WAWebBizBroadcastProRecipientContacts").getProRecipientContacts(),
        ).map(function (e) {
          return o("WAJids").toLidUserJid(e.id.user);
        }),
      );
      return o("WAWebBizBroadcastProRecipientContacts")
        .getProRecipientCandidateLids(t)
        .filter(function (e) {
          return n.has(e);
        });
    }
    ((l.getProSendableContactsV2 = e),
      (l.getProSendableRecipientCandidateLidsV2 = s));
  },
  98,
);
