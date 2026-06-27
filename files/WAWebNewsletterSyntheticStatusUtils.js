__d(
  "WAWebNewsletterSyntheticStatusUtils",
  [
    "WAJids",
    "WATimeUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMetadataCollection",
    "WAWebStatusCollection",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        e == null ||
        o("WATimeUtils").unixTime() - e > o("WATimeUtils").DAY_SECONDS
      );
    }
    function s(e) {
      var t, n;
      return (t =
        r("WAWebNewsletterMetadataCollection") == null ||
        (n = r("WAWebNewsletterMetadataCollection").get(e)) == null
          ? void 0
          : n.lastFilledStatusServerId) != null
        ? t
        : null;
    }
    function u(t, n, r) {
      if (e(r)) {
        var a = o("WAWebStatusCollection").StatusCollection.get(t);
        return (
          a != null && o("WAWebStatusCollection").StatusCollection.remove(a),
          !1
        );
      }
      var i = o("WAWebStatusCollection").StatusCollection.get(t),
        l = i != null && i.isSyntheticFromMetadata !== !0;
      if (l || n == null) return !1;
      var u = o("WAJids").toNewsletterJid(t.toJid()),
        c = s(u);
      return (c != null && n <= c) ||
        !o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()
        ? !1
        : (o("WAWebStatusCollection").StatusCollection.add(
            {
              id: t,
              t: r,
              totalCount: 1,
              unreadCount: 1,
              isSyntheticFromMetadata: !0,
            },
            { merge: !0 },
          ),
          !0);
    }
    function c() {
      o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled() &&
        (r("WAWebNewsletterMetadataCollection") == null ||
          r("WAWebNewsletterMetadataCollection").forEach(function (e) {
            var t = e.statusMetadata;
            if (t != null) {
              var n = e.id;
              u(n, t.lastStatusServerId, t.lastStatusSentTime);
            }
          }));
    }
    ((l.isNewsletterStatusExpired = e),
      (l.getFilledStatusCursor = s),
      (l.maybeCreateOrCleanupSynthetic = u),
      (l.createSyntheticsForNewsletters = c));
  },
  98,
);
