__d(
  "WAWebDBQueryAndRemoveMessageHistory",
  [
    "Promise",
    "WAWebDBDeleteAssociatedMsgsByMsgKey",
    "WAWebDBMessageRange",
    "WAWebDBMessageUtils",
    "WAWebFtsClient",
    "WAWebMessageAssociationGatingUtils",
    "WAWebNoop",
    "WAWebSchemaMessage",
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
          var t = o("WAWebDBMessageUtils").beginningOfChat(e),
            n = o("WAWebDBMessageUtils").endOfChat(e),
            r = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(["internalId"], t, n, {
                lowerInclusive: !1,
                upperInclusive: !1,
                limit: 1,
              });
          if (r.length === 0) return null;
          var a = r[0].rowId,
            i = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(["internalId"], t, n, {
                lowerInclusive: !1,
                upperInclusive: !1,
                limit: 1,
                reverse: !0,
              });
          if (i.length === 0) return null;
          var l = i[0].rowId,
            s = i[0].t;
          return a == null || l == null
            ? null
            : { startRowId: a, endRowId: l, tsOfLastMessage: s };
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = yield o("WAWebDBMessageRange").deleteMessagesInMessageRange(
            e,
            t,
            n,
          );
          return (
            o("WAWebFtsClient").ftsClient.purge(a).catch(r("WAWebNoop")),
            a
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = o("WAWebDBMessageUtils").beginningOfChat(t),
            a = o("WAWebDBMessageUtils").endOfChat(t),
            i = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(["internalId"], r, a, {
                lowerInclusive: !1,
                upperInclusive: !1,
                returnKeyType: "primary_key",
              }),
            l = [o("WAWebSchemaMessage").getMessageTable().bulkRemove(i)];
          return (
            o(
              "WAWebMessageAssociationGatingUtils",
            ).isMessageAssociationInfraEnabled() &&
              l.push(
                o(
                  "WAWebDBDeleteAssociatedMsgsByMsgKey",
                ).bulkDeleteMessagesByMsgKeys(i),
              ),
            yield (e || (e = n("Promise"))).all(l),
            i
          );
        })),
        p.apply(this, arguments)
      );
    }
    ((l.getBoundsForChat = s),
      (l.queryAndRemoveMessagesInMessageRange = c),
      (l.queryAndRemoveMessageHistory = m));
  },
  98,
);
