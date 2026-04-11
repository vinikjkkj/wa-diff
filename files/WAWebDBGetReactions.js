__d(
  "WAWebDBGetReactions",
  [
    "WAWebApiContact",
    "WAWebEmoji",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebParseMsgKeyString",
    "WAWebSchemaReactions",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "";
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o("WAWebSchemaReactions")
              .getReactionsTable()
              .equals(["parentMsgKey"], t),
            a = { reactions: [], reactionByMe: null },
            i = new Map();
          n.forEach(function (t) {
            var n = t.orphan,
              l = t.reactionText;
            if (l !== e && n !== 1) {
              var s,
                u = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(l),
                c = (s = i.get(u)) != null ? s : [];
              i.set(u, [].concat(c, [t]));
              var d = r("WAWebParseMsgKeyString")(t.msgKey);
              d.fromMe && (a.reactionByMe = t);
            }
          });
          var l = a.reactionByMe
            ? o("WAWebEmoji").EmojiUtil.getEmojiAggregate(
                a.reactionByMe.reactionText,
              )
            : "";
          return (
            i.forEach(function (e, t) {
              var n = !1;
              (t === l && (n = !0),
                a.reactions.push({
                  aggregateEmoji: t,
                  senders: e,
                  hasReactionByMe: n,
                }));
            }),
            a
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = new Map();
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["reactions"],
                (function () {
                  var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var o = n[0],
                        a = yield o.anyOf(["parentMsgKey"], t);
                      a.forEach(function (t) {
                        var n = t.orphan,
                          o = t.reactionText;
                        if (o !== e && n !== 1) {
                          var a,
                            i = (a = r.get(t.parentMsgKey)) != null ? a : [];
                          (i.push(t), r.set(t.parentMsgKey, i));
                        }
                      });
                    },
                  );
                  return function (e) {
                    return o.apply(this, arguments);
                  };
                })(),
              ),
            r
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["reactions"], function (t) {
          var n = t[0];
          return n.anyOf(["parentMsgKey"], e);
        });
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = e.parentMsgKey,
            i = e.senderUserJid,
            l = [],
            s =
              (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(
                r("WAWebMsgKey").from(a),
              )) == null
                ? void 0
                : t.toString(),
            u =
              (n = o("WAWebApiContact").getAlternateUserWid(
                o("WAWebWidFactory").createUserWidOrThrow(i),
              )) == null
                ? void 0
                : n.toString(),
            c = [a, s].filter(Boolean),
            d = [i, u].filter(Boolean);
          for (var m of c) for (var p of d) l.push([m, p]);
          var _ = yield o("WAWebSchemaReactions")
            .getReactionsTable()
            .anyOf(["parentMsgKey", "senderUserJid"], l, { limit: 1 });
          return _[0];
        })),
        _.apply(this, arguments)
      );
    }
    ((l.REVOKED_REACTION_TEXT = e),
      (l.getReactions = s),
      (l.getFilteredReactionsFromParentMsgs = c),
      (l.getAllReactionsFromParentMsgs = m),
      (l.existsReactionAddressingModeInsensitive = p));
  },
  98,
);
