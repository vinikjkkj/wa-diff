__d(
  "WAWebLogStatusPogImpression",
  [
    "WAWebClock",
    "WAWebStatusGatingUtils",
    "WAWebStatusLoggingUtils",
    "WAWebStatusPogImpressionWamEvent",
    "WAWebWamEnumStatusCategory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.msg,
        n = e.pogIndex,
        r = e.pogOwnerId,
        a = e.statusViewEntrypoint,
        i = e.tsSurface;
      if (o("WAWebStatusGatingUtils").isStatusVPVLoggingEnabled()) {
        var l = await s(r, t),
          c = l.statusGroupId,
          d = l.statusPosterHashId,
          m = l.statusPosterId,
          p = new (o(
            "WAWebStatusPogImpressionWamEvent",
          ).StatusPogImpressionWamEvent)({
            cid: r.isNewsletter() ? r.user : void 0,
            pogIndex: n,
            statusCategory: u(r),
            statusGroupId: c != null ? c : void 0,
            statusPosterHashId: d != null ? d : void 0,
            statusPosterId: m != null ? m : void 0,
            statusViewEntrypoint: a,
            tsSurface: i,
          });
        p.commit();
      }
    }
    async function s(e, t) {
      var n = o("WAWebClock").Clock.getServerTime();
      if (e.isNewsletter()) {
        var r = await o("WAWebStatusLoggingUtils").channelStatusPosterHashId(
          e,
          n,
        );
        return {
          statusGroupId: null,
          statusPosterHashId: r,
          statusPosterId: r,
        };
      }
      if (t == null)
        return {
          statusGroupId: null,
          statusPosterHashId: null,
          statusPosterId: null,
        };
      var a = await Promise.all([
          o("WAWebStatusLoggingUtils").statusPosterIdForLogging(t, n),
          o("WAWebStatusLoggingUtils").statusPosterHashIdForLogging(t, n),
          o("WAWebStatusLoggingUtils").statusGroupIdForLogging(t, n),
        ]),
        i = a[0],
        l = a[1],
        s = a[2];
      return { statusGroupId: s, statusPosterHashId: l, statusPosterId: i };
    }
    function u(e) {
      return e.isNewsletter()
        ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.CHANNEL_STATUS
        : e.isGroup()
          ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.GROUP_STATUS
          : o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.REGULAR_STATUS;
    }
    l.logStatusPogImpression = e;
  },
  98,
);
