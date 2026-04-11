__d(
  "WAWebDBPollsUpsertVotes",
  [
    "WAWebAck",
    "WAWebApiContact",
    "WAWebMaxPerGroup",
    "WAWebModelStorageUtils",
    "WAWebPollsDbSerialization",
    "WAWebPollsGetVoteKey",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebMaxPerGroup").maxPerGroup(
        e,
        function (e) {
          return e.senderTimestampMs;
        },
        o("WAWebPollsGetVoteKey").getVoteKey,
      );
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["poll-votes"],
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e[0],
                  r = yield n.anyOf(["parentMsgKey", "sender"], s(t)),
                  a = new Map();
                for (var i of r)
                  a.set(o("WAWebPollsGetVoteKey").getVoteKey(i), i);
                var l = [],
                  u = [],
                  c = [];
                for (var d of t) {
                  var m,
                    p = a.get(o("WAWebPollsGetVoteKey").getVoteKey(d));
                  if (p != null) {
                    if (p.senderTimestampMs > d.senderTimestampMs) {
                      l.push(o("WAWebPollsDbSerialization").voteFromDbRow(p));
                      continue;
                    }
                    String(d.sender) !== String(p.sender) && c.push(p);
                  }
                  var _ = d.selectedOptionLocalIds.length === 0,
                    f = (m = p == null ? void 0 : p.read) != null ? m : !1,
                    g =
                      !_ && f && d.read !== f
                        ? babelHelpers.extends({}, d, { read: !0 })
                        : d,
                    h = g.lastSuccessfulSelectedOptionLocalIds;
                  p != null &&
                    (p.ack != null && p.ack >= o("WAWebAck").ACK.SENT
                      ? (h = Array.from(
                          new Uint8Array(p.selectedOptionLocalIds),
                        ))
                      : p.lastSuccessfulSelectedOptionLocalIds != null &&
                        (h = Array.from(
                          new Uint8Array(
                            p.lastSuccessfulSelectedOptionLocalIds,
                          ),
                        )));
                  var y =
                    h !== g.lastSuccessfulSelectedOptionLocalIds
                      ? babelHelpers.extends({}, g, {
                          lastSuccessfulSelectedOptionLocalIds: h,
                        })
                      : g;
                  (l.push(y),
                    u.push(o("WAWebPollsDbSerialization").dbRowFromVote(y)));
                }
                return (
                  c.length > 0 &&
                    (yield n.bulkRemove(
                      u.map(function (e) {
                        return [e.parentMsgKey, e.sender];
                      }),
                    )),
                  u.length > 0 && (yield n.bulkCreateOrReplace(u)),
                  l
                );
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
    }
    function s(e) {
      var t = [];
      for (var n of e) {
        var r = n.parentMsgKey,
          a = n.sender;
        t.push([r.toString(), a.toString()]);
        var i = o("WAWebApiContact").getAlternateUserWid(a);
        i != null && t.push([r.toString(), i.toString()]);
      }
      return t;
    }
    l.upsertVotesDb = e;
  },
  98,
);
