__d(
  "WAWebReactionsBEUtils",
  [
    "WALogger",
    "WALongInt",
    "WANullthrows",
    "WAWebAddonQueryUtils",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebDBGetReactions",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationConstants",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new Set([
        (u = o("WAWebMsgType")).MSG_TYPE.CIPHERTEXT,
        u.MSG_TYPE.REVOKED,
        u.MSG_TYPE.DEBUG,
        u.MSG_TYPE.DEBUG_PLACEHOLDER,
        u.MSG_TYPE.GP2,
        u.MSG_TYPE.NOTIFICATION,
        u.MSG_TYPE.NEWSLETTER_NOTIFICATION,
        u.MSG_TYPE.NOTIFICATION_TEMPLATE,
        u.MSG_TYPE.E2E_NOTIFICATION,
      ]),
      d = new Set([
        o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL,
      ]);
    function m(e) {
      var t = e.associationType,
        n = e.futureproofType,
        r = e.subtype,
        a = e.type;
      return a === o("WAWebMsgType").MSG_TYPE.UNKNOWN
        ? n != null &&
            o(
              "WAWebMessageAssociationConstants",
            ).orphanIneligibleFutureproofTypes.has(n)
        : !(
            c.has(a) ||
            (t != null && d.has(t)) ||
            (a === o("WAWebMsgType").MSG_TYPE.CHAT &&
              r ===
                o("WAWebBotGenTypingIndicatorMsg")
                  .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE)
          );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = [],
            a = [];
          t.forEach(function (e) {
            e && a.push(e.reactionParentKey);
          });
          var i = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey(a),
            l = 0,
            u = 0;
          return (
            t.forEach(function (e) {
              var t,
                a,
                s,
                c = (t = e.author) != null ? t : e.from;
              if (!c || !e) {
                l++;
                return;
              }
              var d = i.get(e.reactionParentKey.toString());
              if (d && !m(d)) {
                u++;
                return;
              }
              var p = o("WAWebWidFactory").asUserWidOrThrow(c),
                _ = {
                  msgKey: e.id.toString(),
                  parentMsgKey:
                    (a = d == null ? void 0 : d.id.toString()) != null
                      ? a
                      : e.reactionParentKey.toString(),
                  senderUserJid: p.toString(),
                  reactionText:
                    (s = e.reactionText) != null
                      ? s
                      : o("WAWebDBGetReactions").REVOKED_REACTION_TEXT,
                  timestamp: e.reactionTimestamp,
                  orphan: 0,
                  orphanReason: void 0,
                  read: !1,
                  t: r("WANullthrows")(
                    o("WALongInt").maybeNumberOrThrowIfTooLarge(e.t),
                  ),
                };
              n.push(_);
            }),
            l > 0 &&
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[createReactionsRowFromMsg] null sender/msg: ",
                    "",
                  ])),
                l,
              ),
            u > 0 &&
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[createReactionsRowFromMsg] reactions blocked: ",
                    "",
                  ])),
                u,
              ),
            n
          );
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
          var t = [],
            n = [];
          e.forEach(function (e) {
            var r = e.orphan,
              a = e.parentMsgKey,
              i = e.reactionText;
            if (r !== 1)
              if (i !== o("WAWebDBGetReactions").REVOKED_REACTION_TEXT) {
                var l = { id: a, hasReaction: !0 };
                n.push(l);
              } else t.push(a);
          });
          var r = yield o(
            "WAWebDBGetReactions",
          ).getFilteredReactionsFromParentMsgs(t);
          return (
            t.forEach(function (e) {
              var t = r.get(e),
                o = (t && t.length > 0) || !1,
                a = { id: e, hasReaction: o };
              n.push(a);
            }),
            o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(n)
          );
        })),
        g.apply(this, arguments)
      );
    }
    ((l.REVOKED_REACTION_TEXT = o("WAWebDBGetReactions").REVOKED_REACTION_TEXT),
      (l.canHaveReactions = m),
      (l.createReactionsRowFromMsg = p),
      (l.updateHasReactionFromParent = f));
  },
  98,
);
