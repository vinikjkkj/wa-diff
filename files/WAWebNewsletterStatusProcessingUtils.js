__d(
  "WAWebNewsletterStatusProcessingUtils",
  [
    "Promise",
    "WAWebAck",
    "WAWebMsgCollection",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebStatusCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      (o("WAWebNewsletterMetadataJob").updateNewsletterMetadata({
        id: e,
        lastFilledStatusServerId: t,
      }),
        r("WAWebNewsletterMetadataCollection") == null ||
          r("WAWebNewsletterMetadataCollection").add(
            { id: e, lastFilledStatusServerId: t },
            { merge: !0 },
          ));
    }
    function u(e, t, n) {
      var a,
        i,
        l,
        s =
          r("WAWebNewsletterMetadataCollection") == null ||
          (a = r("WAWebNewsletterMetadataCollection").get(e)) == null
            ? void 0
            : a.statusMetadata,
        u = (i = s == null ? void 0 : s.lastStatusServerId) != null ? i : 0,
        c = (l = s == null ? void 0 : s.lastStatusSentTime) != null ? l : 0;
      if (!(t <= u && n <= c)) {
        var d = Math.max(t, u),
          m = Math.max(n, c),
          p = { lastStatusServerId: d, lastStatusSentTime: m };
        (o("WAWebNewsletterMetadataJob").updateNewsletterMetadata({
          id: e,
          statusMetadata: p,
        }),
          r("WAWebNewsletterMetadataCollection") == null ||
            r("WAWebNewsletterMetadataCollection").add(
              { id: e, statusMetadata: p },
              { merge: !0 },
            ));
      }
    }
    function c(e) {
      return e.reduce(function (e, t) {
        var n;
        return Math.max(e, (n = t.serverId) != null ? n : 0);
      }, 0);
    }
    function d(e, t) {
      var n = o("WAWebStatusCollection").StatusCollection.get(e);
      return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
        e,
        t,
        { add: "after", isHistory: !0 },
        "addStatusMessages",
        n == null ? void 0 : n.msgs,
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          o("WAWebStatusCollection").StatusCollection.add(
            {
              id: t,
              t: r.reduce(function (e, t) {
                var n;
                return Math.max(e, (n = t.t) != null ? n : 0);
              }, 0),
            },
            { merge: !0 },
          );
          var a = o("WAWebStatusCollection").StatusCollection.get(t);
          (a != null && (a.isSyntheticFromMetadata = !1),
            yield (e || (e = n("Promise"))).all([
              o("WAWebNewsletterUpdateMsgsRecordsJob").addNewsletterMsgsRecords(
                r,
              ),
              d(t, r),
            ]));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      var r = o("WAWebStatusCollection").StatusCollection.get(e);
      if (r != null) {
        var a = new Map();
        for (var i of t) {
          var l = n.get(i.id.toString());
          l != null && i.serverId != null && a.set(i.serverId, l);
        }
        r.msgs.forEach(function (e) {
          var t = e.serverId != null ? a.get(e.serverId) : void 0;
          t != null && e.set("viewCount", t);
        });
      }
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebStatusCollection").StatusCollection.get(e);
          if (n != null) {
            var r = [],
              a = new Map();
            (n.msgs.forEach(function (e) {
              var n = e.serverId != null ? t.get(e.serverId) : void 0;
              n != null &&
                (e.set("viewCount", n),
                r.push(e.id),
                a.set(e.id.toString(), n));
            }),
              a.size > 0 &&
                (yield o(
                  "WAWebNewsletterBackendAddOnsUtils",
                ).persistNewsletterViewCounts({
                  ids: r,
                  timestamp: Date.now(),
                  viewCounts: a,
                })));
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      var t = o("WAWebStatusCollection").StatusCollection.get(e);
      if (t != null) {
        var n = t.msgs.countWhere(function (e) {
          return e.ack == null || e.ack < o("WAWebAck").ACK.READ;
        });
        t.set({ totalCount: t.msgs.length, unreadCount: n });
      }
    }
    ((l.syncFilledStatusCursor = s),
      (l.syncStatusMetadata = u),
      (l.computeMaxServerId = c),
      (l.addAndPersistStatusMessages = m),
      (l.updateStatusViewCounts = _),
      (l.applyAndPersistViewCounts = f),
      (l.updateStatusUnreadCount = h));
  },
  98,
);
