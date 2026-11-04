__d(
  "WAWebContactsAndGroupsDBGroupPolls",
  [
    "Promise",
    "WAWebAddonQueryUtils",
    "WAWebDBMessageRangeIndex",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageStoreUtils",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebPollsDbSerialization",
    "WAWebPollsVotesSchema",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [
        o("WAWebDBMessageRangeIndex").MessagePropertyType.IncomingChatMessage,
        o("WAWebDBMessageRangeIndex").MessagePropertyType.Outgoing,
      ];
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = yield (e || (e = n("Promise"))).all(
              s.map(function (e) {
                return o("WAWebSchemaMessage")
                  .getMessageTable()
                  .between(
                    ["messageRangeIndex"],
                    o("WAWebDBMessageStoreUtils").beginningOfMessageRange(
                      t,
                      e,
                      r,
                    ),
                    o("WAWebDBMessageStoreUtils").endOfMessageRange(t, e),
                    { lowerInclusive: !0, shouldDecrypt: !1 },
                  );
              }),
            ),
            i = a
              .flat()
              .filter(function (e) {
                return e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION;
              })
              .map(function (e) {
                return e.id;
              });
          if (i.length === 0) return [];
          var l = yield e.all([
              o("WAWebSchemaMessage").getMessageTable().anyOf(["id"], i),
              f(i),
            ]),
            u = l[0],
            c = l[1];
          return u.map(function (e) {
            return b(e, c);
          });
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(
                ["messageRangeIndex"],
                o("WAWebDBMessageStoreUtils").beginningOfMessageRange(
                  t,
                  o("WAWebDBMessageRangeIndex").MessagePropertyType.Outgoing,
                  a,
                ),
                o("WAWebDBMessageStoreUtils").endOfMessageRange(
                  t,
                  o("WAWebDBMessageRangeIndex").MessagePropertyType.Outgoing,
                ),
                { lowerInclusive: !0, shouldDecrypt: !1 },
              ),
            l = i
              .filter(function (e) {
                return e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION;
              })
              .map(function (e) {
                return e.id;
              });
          if (l.length === 0) return [];
          var s = yield (e || (e = n("Promise"))).all([
              o("WAWebSchemaMessage").getMessageTable().anyOf(["id"], l),
              h(l),
            ]),
            u = s[0],
            c = s[1];
          return r("compactMap")(u, function (e) {
            return C(
              o("WAWebDBMessageSerialization").messageFromDbRow(e),
              c.get(e.id),
            );
          });
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.toString(),
            a = yield (e || (e = n("Promise"))).all([
              o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([t]),
              h([r]),
            ]),
            i = a[0],
            l = a[1],
            s = i.get(r);
          return s != null ? C(s, l.get(r)) : null;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield h(e);
          return new Set(
            e.filter(function (e) {
              var n;
              return (n = t.get(e)) == null
                ? void 0
                : n.some(function (e) {
                    return (
                      e.selectedOptionLocalIds.length > 0 &&
                      o("WAWebUserPrefsMeUser").isMeAccount(e.sender)
                    );
                  });
            }),
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map();
          e.forEach(function (e) {
            t.set(e, e);
            var n = o("WAWebLidMigrationUtils").getAlternateMsgKey(
              r("WAWebMsgKey").fromString(e),
            );
            n != null && t.set(n.toString(), e);
          });
          var n = yield o("WAWebPollsVotesSchema")
              .getTable()
              .anyOf(["parentMsgKey"], Array.from(t.keys())),
            a = new Map();
          return (
            n
              .map(o("WAWebPollsDbSerialization").voteFromDbRow)
              .forEach(function (e) {
                var n = t.get(e.parentMsgKey.toString());
                if (n != null) {
                  var r = a.get(n);
                  r != null ? r.push(e) : a.set(n, [e]);
                }
              }),
            a
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      var n, r, a;
      if (
        e.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
        e.pollInvalidated === !0
      )
        return null;
      var i = e.pollHideVoterNames === !0;
      return {
        hideVoterNames: i,
        msgKey: e.id,
        options: (n = e.pollOptions) != null ? n : [],
        question: (r = e.pollName) != null ? r : "",
        t: (a = e.t) != null ? a : 0,
        votes: (i ? [] : t != null ? t : []).map(function (e) {
          var t = e.selectedOptionLocalIds,
            n = e.sender,
            r = e.senderTimestampMs;
          return { selectedOptionLocalIds: t, sender: n, senderTimestampMs: r };
        }),
      };
    }
    function b(e, t) {
      var n,
        a = o("WAWebDBMessageSerialization").messageFromDbRow(e);
      return {
        endTimeMs: a.pollEndTime,
        iVoted: t.has(e.id),
        msgKey: r("WAWebMsgKey").fromString(e.id),
        question: (n = a.pollName) != null ? n : "",
        t: e.t,
      };
    }
    ((l.getGroupPollsSince = u),
      (l.getMyGroupPollsSince = d),
      (l.getMyGroupPoll = p));
  },
  98,
);
