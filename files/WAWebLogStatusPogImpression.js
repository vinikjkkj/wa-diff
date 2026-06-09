__d(
  "WAWebLogStatusPogImpression",
  [
    "Promise",
    "WAWebClock",
    "WAWebStatusGatingUtils",
    "WAWebStatusLoggingUtils",
    "WAWebStatusPogImpressionWamEvent",
    "WAWebWamEnumStatusCategory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msg,
            n = e.pogIndex,
            r = e.pogOwnerId,
            a = e.statusViewEntrypoint,
            i = e.tsSurface;
          if (o("WAWebStatusGatingUtils").isStatusVPVLoggingEnabled()) {
            var l = yield c(r, t),
              s = l.statusGroupId,
              u = l.statusPosterHashId,
              d = l.statusPosterId,
              p = new (o(
                "WAWebStatusPogImpressionWamEvent",
              ).StatusPogImpressionWamEvent)({
                cid: o("WAWebStatusLoggingUtils").channelStatusCid(r),
                pogIndex: n,
                statusCategory: m(r),
                statusGroupId: s != null ? s : void 0,
                statusPosterHashId: u != null ? u : void 0,
                statusPosterId: d != null ? d : void 0,
                statusViewEntrypoint: a,
                tsSurface: i,
              });
            p.commit();
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = o("WAWebClock").Clock.getServerTime();
          if (t.isNewsletter()) {
            var i = yield o(
              "WAWebStatusLoggingUtils",
            ).channelStatusPosterHashId(t, a);
            return {
              statusGroupId: null,
              statusPosterHashId: i,
              statusPosterId: i,
            };
          }
          if (r == null)
            return {
              statusGroupId: null,
              statusPosterHashId: null,
              statusPosterId: null,
            };
          var l = yield (e || (e = n("Promise"))).all([
              o("WAWebStatusLoggingUtils").statusPosterIdForLogging(r, a),
              o("WAWebStatusLoggingUtils").statusPosterHashIdForLogging(r, a),
              o("WAWebStatusLoggingUtils").statusGroupIdForLogging(r, a),
            ]),
            s = l[0],
            u = l[1],
            c = l[2];
          return { statusGroupId: c, statusPosterHashId: u, statusPosterId: s };
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return e.isNewsletter()
        ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.CHANNEL_STATUS
        : e.isGroup()
          ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.GROUP_STATUS
          : o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.REGULAR_STATUS;
    }
    l.logStatusPogImpression = s;
  },
  98,
);
