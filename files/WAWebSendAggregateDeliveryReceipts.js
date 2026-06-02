__d(
  "WAWebSendAggregateDeliveryReceipts",
  [
    "$InternalEnum",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBoolFunc",
    "WAWebDBMsgUtils",
    "WAWebHandleMsgMetaUtils",
    "WAWebMsgProcessingApiUtils",
    "WAWebPollsVotesSchema",
    "WAWebSchemaReactions",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
        "Message",
        "Reaction",
        "PollVote",
        "NotSupportedAddon",
      ]),
      s = function (n) {
        return n.hasHideFailEnc
          ? o("WAWebHandleMsgMetaUtils").isPollVoteMsgMeta(n.msgMeta)
            ? e.PollVote
            : o("WAWebHandleMsgMetaUtils").isReactionMsgMeta(n.msgMeta)
              ? e.Reaction
              : e.NotSupportedAddon
          : e.Message;
      };
    function u(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n,
            r = s(e),
            o = (n = t.get(r)) != null ? n : t.set(r, []).get(r);
          o == null || o.push(e);
        }),
        t
      );
    }
    async function c(e, t, n) {
      var r = e.map(function (e) {
          var t = e.msgInfo;
          return o("WAWebMsgProcessingApiUtils").messageInfoToKey(t);
        }),
        a = o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd
          ? await t(r)
          : r.map(o("WAWebBoolFunc").returnFalse),
        i = new Set(),
        l = [];
      for (var s of a.entries()) {
        var u = s[0],
          c = s[1];
        c ? i.add(r[u].toString()) : l.push(r[u].toString());
      }
      if (l.length === 0) return i;
      var d = await n(l);
      return new Set([].concat(Array.from(i), Array.from(d)));
    }
    async function d(t, n) {
      return t === e.Message
        ? c(
            n,
            function (e) {
              return o("WAWebBackendApi").frontendSendAndReceive(
                "hasMsgsInCollection",
                { msgKeys: e },
              );
            },
            async function (e) {
              var t = new Set();
              return o("WAWebDBMsgUtils")
                .getMsgsExistByMsgKey(e)
                .then(function (n) {
                  for (var r of n.entries()) {
                    var o = r[0],
                      a = r[1];
                    a && t.add(e[o]);
                  }
                  return t;
                });
            },
          )
        : t === e.Reaction
          ? c(
              n,
              function (e) {
                return o("WAWebBackendApi").frontendSendAndReceive(
                  "hasReactionsInCollection",
                  { msgKeys: e },
                );
              },
              function (e) {
                var t = new Set();
                return o("WAWebSchemaReactions")
                  .getReactionsTable()
                  .anyOf(["msgKey"], e)
                  .then(function (e) {
                    for (var n of e) t.add(n.msgKey);
                    return t;
                  });
              },
            )
          : t === e.PollVote
            ? c(
                n,
                function (e) {
                  return o("WAWebBackendApi").frontendSendAndReceive(
                    "hasPollVotesInCollection",
                    { msgKeys: e },
                  );
                },
                function (e) {
                  return o("WAWebPollsVotesSchema")
                    .getTable()
                    .anyOf(["msgKey"], e, { shouldDecrypt: !1 })
                    .then(function (e) {
                      var t = new Set();
                      for (var n of e) t.add(n.msgKey);
                      return t;
                    });
                },
              )
            : t === e.NotSupportedAddon
              ? new Set(
                  n.map(function (e) {
                    var t = e.msgInfo;
                    return o("WAWebMsgProcessingApiUtils")
                      .messageInfoToKey(t)
                      .toString();
                  }),
                )
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
    }
    async function m(e) {
      var t = e[0],
        n = e[1],
        r = [],
        a = [];
      for (var i of n)
        i.msgReceivedTimes > 1 ? r.push({ isInDB: !0, receipt: i }) : a.push(i);
      if (a.length > 0) {
        var l = await d(t, a);
        r = r.concat(
          a.map(function (e) {
            return {
              isInDB: l.has(
                o("WAWebMsgProcessingApiUtils")
                  .messageInfoToKey(e.msgInfo)
                  .toString(),
              ),
              receipt: e,
            };
          }),
        );
      }
      return r;
    }
    async function p(e) {
      var t,
        n = u(e),
        r = await Promise.all(Array.from(n.entries(), m));
      return (t = []).concat.apply(t, r);
    }
    l.aggregateDeliveryReceipts = p;
  },
  98,
);
