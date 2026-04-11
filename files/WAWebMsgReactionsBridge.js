__d(
  "WAWebMsgReactionsBridge",
  [
    "Promise",
    "WALogger",
    "WAWebAck",
    "WAWebDBGetReactions",
    "WAWebDBUpdateMessageTable",
    "WAWebLidMigrationUtils",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = o("WAWebMsgCollection").MsgCollection.get(e);
          if (r && r.hasReaction !== t) {
            var a = { hasReaction: t };
            (yield o("WAWebDBUpdateMessageTable").updateMessageTable(r.id, a),
              r.set(a));
          }
          return (s || (s = n("Promise"))).resolve();
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          try {
            if (
              ((n = yield o("WAWebDBGetReactions").getReactions(
                t.id.toString(),
              )),
              n.reactions.length === 0 && t.id.remote.isStatus())
            ) {
              var a = o("WAWebLidMigrationUtils").getAlternateMsgKey(t.id);
              a &&
                (n = yield o("WAWebDBGetReactions").getReactions(a.toString()));
            }
          } catch (t) {
            var i = r("getErrorSafe")(t);
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "getReactions: failed",
                    ])),
                )
                .catching(i)
                .verbose()
                .sendLogs("getReactions failed"),
              i
            );
          }
          var l = n.reactions.map(function (e) {
              var t = e.senders.map(function (e) {
                return babelHelpers.extends({}, e, {
                  id: r("WAWebMsgKey").fromString(e.msgKey),
                  isSendFailure:
                    o("WAWebUserPrefsMeUser").isSerializedWidMe(
                      e.senderUserJid,
                    ) && e.ack === o("WAWebAck").ACK.CLOCK,
                });
              });
              return babelHelpers.extends({}, e, {
                hasReactionByMe: e.hasReactionByMe,
                id: e.aggregateEmoji,
                senders: t,
              });
            }),
            s = l.length > 0;
          return (
            yield u(t.id.toString(), s),
            babelHelpers.extends({}, n, { id: t.id, reactions: l })
          );
        })),
        m.apply(this, arguments)
      );
    }
    ((l.updateHasReactionInParent = u), (l.sendQueryReactions = d));
  },
  98,
);
