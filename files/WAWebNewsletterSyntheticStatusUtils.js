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
    function u(t, n, r, a) {
      if (e(r)) {
        var i = o("WAWebStatusCollection").StatusCollection.get(t);
        return (
          i != null && o("WAWebStatusCollection").StatusCollection.remove(i),
          !1
        );
      }
      var l = o("WAWebStatusCollection").StatusCollection.get(t);
      if (l != null && l.isSyntheticFromMetadata !== !0) {
        var u = s(a),
          c = n != null && (u == null || n > u);
        return (
          c &&
            l.unreadCount === 0 &&
            !l.isExpired() &&
            l.set({ unreadCount: 1 }),
          !1
        );
      }
      if (!o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled())
        return !1;
      var d = s(a);
      return d != null && n != null && d >= n
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
            t != null &&
              u(
                e.id,
                t.lastStatusServerId,
                t.lastStatusSentTime,
                o("WAJids").toNewsletterJid(e.id.toJid()),
              );
          }));
    }
    ((l.isNewsletterStatusExpired = e),
      (l.getFilledStatusCursor = s),
      (l.maybeCreateOrCleanupSynthetic = u),
      (l.createSyntheticsForNewsletters = c));
  },
  98,
);
