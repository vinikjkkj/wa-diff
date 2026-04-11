__d(
  "WAWebSendAggregateDeliveryReceipts",
  [
    "$InternalEnum",
    "Promise",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBoolFunc",
    "WAWebDBMsgUtils",
    "WAWebHandleMsgMetaUtils",
    "WAWebMsgProcessingApiUtils",
    "WAWebPollsVotesSchema",
    "WAWebSchemaReactions",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum").Mirrored([
        "Message",
        "Reaction",
        "PollVote",
        "NotSupportedAddon",
      ]),
      u = function (t) {
        return t.hasHideFailEnc
          ? o("WAWebHandleMsgMetaUtils").isPollVoteMsgMeta(t.msgMeta)
            ? s.PollVote
            : o("WAWebHandleMsgMetaUtils").isReactionMsgMeta(t.msgMeta)
              ? s.Reaction
              : s.NotSupportedAddon
          : s.Message;
      };
    function c(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n,
            r = u(e),
            o = (n = t.get(r)) != null ? n : t.set(r, []).get(r);
          o == null || o.push(e);
        }),
        t
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e.map(function (e) {
              var t = e.msgInfo;
              return o("WAWebMsgProcessingApiUtils").messageInfoToKey(t);
            }),
            a = o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd
              ? yield t(r)
              : r.map(o("WAWebBoolFunc").returnFalse),
            i = new Set(),
            l = [];
          for (var s of a.entries()) {
            var u = s[0],
              c = s[1];
            c ? i.add(r[u].toString()) : l.push(r[u].toString());
          }
          if (l.length === 0) return i;
          var d = yield n(l);
          return new Set([].concat(Array.from(i), Array.from(d)));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return e === s.Message
            ? d(
                t,
                function (e) {
                  return o("WAWebBackendApi").frontendSendAndReceive(
                    "hasMsgsInCollection",
                    { msgKeys: e },
                  );
                },
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
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
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              )
            : e === s.Reaction
              ? d(
                  t,
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
              : e === s.PollVote
                ? d(
                    t,
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
                : e === s.NotSupportedAddon
                  ? new Set(
                      t.map(function (e) {
                        var t = e.msgInfo;
                        return o("WAWebMsgProcessingApiUtils")
                          .messageInfoToKey(t)
                          .toString();
                      }),
                    )
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
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
          var t = e[0],
            n = e[1],
            r = [],
            a = [];
          for (var i of n)
            i.msgReceivedTimes > 1
              ? r.push({ isInDB: !0, receipt: i })
              : a.push(i);
          if (a.length > 0) {
            var l = yield p(t, a);
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
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r,
            o = c(t),
            a = yield (e || (e = n("Promise"))).all(Array.from(o.entries(), f));
          return (r = []).concat.apply(r, a);
        })),
        y.apply(this, arguments)
      );
    }
    l.aggregateDeliveryReceipts = h;
  },
  98,
);
