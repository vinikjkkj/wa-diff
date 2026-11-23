__d(
  "WAWebContactsAndGroupsDBGroupPolls",
  [
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
    "WAWebUserUtils",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
      o("WAWebDBMessageRangeIndex").MessagePropertyType.IncomingChatMessage,
      o("WAWebDBMessageRangeIndex").MessagePropertyType.Outgoing,
    ];
    async function s(t, n) {
      var r = await Promise.all(
          e.map(function (e) {
            return d(t, e, n);
          }),
        ),
        a = r.flat().map(function (e) {
          return e.id;
        });
      if (a.length === 0) return [];
      var i = await Promise.all([
          o("WAWebSchemaMessage").getMessageTable().anyOf(["id"], a),
          m(a),
        ]),
        l = i[0],
        s = i[1];
      return l.map(function (e) {
        return f(e, s);
      });
    }
    async function u(e, t) {
      var n = await d(
          e,
          o("WAWebDBMessageRangeIndex").MessagePropertyType.Outgoing,
          t,
        ),
        a = n.map(function (e) {
          return e.id;
        });
      if (a.length === 0) return [];
      var i = await Promise.all([
          o("WAWebSchemaMessage").getMessageTable().anyOf(["id"], a),
          p(a),
        ]),
        l = i[0],
        s = i[1];
      return r("compactMap")(l, function (e) {
        return _(
          o("WAWebDBMessageSerialization").messageFromDbRow(e),
          s.get(e.id),
        );
      });
    }
    async function c(e) {
      var t = e.toString(),
        n = await Promise.all([
          o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([e]),
          p([t]),
        ]),
        r = n[0],
        a = n[1],
        i = r.get(t);
      return i != null ? _(i, a.get(t)) : null;
    }
    function d(e, t, n) {
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .between(
          ["messageRangeIndex"],
          o("WAWebDBMessageStoreUtils").beginningOfMessageRange(e, t, n),
          o("WAWebDBMessageStoreUtils").endOfMessageRange(e, t),
          { lowerInclusive: !0, shouldDecrypt: !1 },
          void 0,
          function (e) {
            return e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION;
          },
        );
    }
    async function m(e) {
      var t = await p(e);
      return new Set(
        e.filter(function (e) {
          var n;
          return (n = t.get(e)) == null
            ? void 0
            : n.some(function (e) {
                return (
                  e.selectedOptionLocalIds.length > 0 &&
                  o("WAWebUserUtils").isMeAccount(e.sender)
                );
              });
        }),
      );
    }
    async function p(e) {
      var t = new Map();
      e.forEach(function (e) {
        t.set(e, e);
        var n = o("WAWebLidMigrationUtils").getAlternateMsgKey(
          r("WAWebMsgKey").fromString(e),
        );
        n != null && t.set(n.toString(), e);
      });
      var n = await o("WAWebPollsVotesSchema")
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
    }
    function _(e, t) {
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
    function f(e, t) {
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
    ((l.getGroupPollsSince = s),
      (l.getMyGroupPollsSince = u),
      (l.getMyGroupPoll = c));
  },
  98,
);
