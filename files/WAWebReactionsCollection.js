__d(
  "WAWebReactionsCollection",
  [
    "WALogger",
    "WAWebAck",
    "WAWebApiContact",
    "WAWebBaseCollection",
    "WAWebEmoji",
    "WAWebLidMigrationUtils",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgReactionsBridge",
    "WAWebReactionsBEUtils",
    "WAWebReactionsModels",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function (t) {
        function a() {
          for (var e, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
            a[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(a)) || this),
            (e.findImpl = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield o(
                      "WAWebMsgCollection",
                    ).MsgCollection.hydrateOrGetMessages([e]),
                    n = t[0];
                  return o("WAWebMsgReactionsBridge").sendQueryReactions(n);
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.findAddressingModeInsensitive = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.find(e, t);
                if (n != null) return n;
                var a = o("WAWebLidMigrationUtils").getAlternateMsgKey(
                  r("WAWebMsgKey").fromString(String(e)),
                );
                if (a != null) return this.find(a, t);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getAddressingModeInsensitive = function (t) {
            var e;
            return (e = this.get(t)) != null ? e : this._getByAltId(t);
          }),
          (i._getByAltId = function (n) {
            var e =
                n instanceof r("WAWebMsgKey")
                  ? n
                  : r("WAWebMsgKey").from(String(n)),
              a = o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
            if (a != null) return t.prototype.get.call(this, a);
          }),
          (i.addOrUpdateReaction = function (t) {
            if (
              t.reactionText ===
              o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT
            )
              return this.removeReaction(t);
            var e = this.getAddressingModeInsensitive(t.parentMsgKey);
            if (e) {
              var n = this.getAggregateEmojiAndSender(e, t.senderUserJid),
                r = n.reactionAggregateWithSender,
                a = n.reactionSenderModel;
              if (r && a) {
                if (a.id.toString() === t.msgKey && a.ack !== t.ack) {
                  ((a.ack = t.ack),
                    a.isSendFailure === !0 &&
                      t.ack != null &&
                      t.ack >= o("WAWebAck").ACK.SENT &&
                      ((a.isSendFailure = !1),
                      a.trigger("change:isSendFailure")),
                    a.trigger("change:ack"));
                  return;
                } else if (t.timestamp > a.timestamp) {
                  (o("WAWebUserPrefsMeUser").isSerializedWidMe(
                    t.senderUserJid,
                  ) && (a.trigger("revoked"), r.set({ hasReactionByMe: !1 })),
                    this._addNewReactionToAggregate(t, e),
                    r.aggregateEmoji ===
                    o("WAWebEmoji").EmojiUtil.getEmojiAggregate(t.reactionText)
                      ? (r.senders.remove(a.id),
                        e.reactions.trigger("change:senders"))
                      : this._removeAggregateEmojiAndSender(e, a, r));
                  return;
                }
                return;
              }
              this._addNewReactionToAggregate(t, e);
            }
          }),
          (i.removeReaction = function (n) {
            if (o("WAWebUserPrefsMeUser").isSerializedWidMe(n.senderUserJid))
              return this._removeSelfReaction(n);
            var t = this.get(n.parentMsgKey);
            if (t) {
              var r = this.getAggregateEmojiAndSender(t, n.senderUserJid),
                a = r.reactionAggregateWithSender,
                i = r.reactionSenderModel;
              a &&
                i &&
                (this._removeAggregateEmojiAndSender(t, i, a),
                i.trigger("revoked"));
            } else
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "reactions_collection:removeReaction no reactions model found",
                  ])),
              );
          }),
          (i._addNewReactionToAggregate = function (t, n) {
            var e = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(t.reactionText),
              a = n.reactions.get(e),
              i = r("WAWebMsgKey").fromString(t.msgKey),
              l = new (o("WAWebReactionsModels").ReactionsSenders)(
                babelHelpers.extends({}, t, { id: i }),
              ),
              s = o("WAWebUserPrefsMeUser").isSerializedWidMe(t.senderUserJid);
            a
              ? (s &&
                  (a.set({ hasReactionByMe: !0 }), n.set({ reactionByMe: t })),
                a.senders.add(l),
                n.reactions.sort(),
                a.trigger("change:senders"))
              : (s && n.set({ reactionByMe: t }),
                n.reactions.add({
                  aggregateEmoji: e,
                  hasReactionByMe: s,
                  id: e,
                  senders: [l],
                }));
          }),
          (i._removeAggregateEmojiAndSender = function (t, n, r) {
            (r.senders.remove(n.id),
              r.senders.length === 0
                ? t.reactions.remove(r.id)
                : t.reactions.sort(),
              r.trigger("change:senders"));
          }),
          (i.getAggregateEmojiAndSender = function (t, n) {
            for (
              var e = null,
                r = null,
                a = o("WAWebApiContact").getAlternateUserWid(
                  o("WAWebWidFactory").createUserWidOrThrow(n),
                ),
                i = 0;
              i < t.reactions.length;
              i++
            ) {
              var l = t.reactions.at(i),
                s =
                  l == null
                    ? void 0
                    : l.senders.findFirst(function (e) {
                        return (
                          e.senderUserJid === n ||
                          (a != null && e.senderUserJid === a.toString())
                        );
                      });
              if (s) {
                ((e = s), (r = l));
                break;
              }
            }
            return { reactionSenderModel: e, reactionAggregateWithSender: r };
          }),
          (i._removeSelfReaction = function (t) {
            var e = this.get(t.parentMsgKey);
            if ((e == null || e.set({ reactionByMe: null }), e)) {
              var n = this.getAggregateEmojiAndSender(e, t.senderUserJid),
                r = n.reactionAggregateWithSender,
                o = n.reactionSenderModel;
              (r == null || r.set({ hasReactionByMe: !1 }),
                r &&
                  o &&
                  (this._removeAggregateEmojiAndSender(e, o, r),
                  o.trigger("revoked")));
            }
          }),
          (i.markReactionsAsRead = function (t) {
            for (var e of this._getSendersByMsgKeys(t)) e.read = !0;
          }),
          (i._getSendersByMsgKeys = function (t) {
            if (t.length === 0) return [];
            var e = new Set(t),
              n = [];
            for (var r of this.toArray())
              for (var a of r.reactions.toArray())
                for (var i of e) {
                  var l = a.senders.get(i);
                  if (l != null && (n.push(l), e.delete(i), e.size === 0))
                    return n;
                }
            return (
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[markReactionsAsRead] sender model not found",
                  ])),
              ),
              n
            );
          }),
          (i.getSenderByMsgKey = function (t) {
            for (var e of this.toArray())
              for (var n of e.reactions.toArray()) {
                var r = n.senders.get(t);
                if (r != null) return r;
              }
          }),
          (i.getExistingSenderModelFromReactionDetails = function (t) {
            var e = t.msgKey,
              n = t.parentMsgKey,
              r = t.reactionText,
              a = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(r),
              i = this.get(n);
            if (i) {
              var l = i.reactions.get(a),
                s = l == null ? void 0 : l.senders.get(e);
              return s;
            }
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[getExistingSenderModelFromReactionDetails] sender not found",
                ])),
            );
          }),
          a
        );
      })(o("WAWebBaseCollection").BaseCollection);
    c.model = o("WAWebReactionsModels").Reactions;
    var d = new c();
    l.ReactionsCollection = d;
  },
  98,
);
