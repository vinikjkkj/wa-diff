__d(
  "WAWebNewsletterReactionCollection",
  [
    "WATimeUtils",
    "WAWebBaseCollection",
    "WAWebDBGetReactions",
    "WAWebMiscErrors",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterReactionModel",
    "WAWebReactionsBEUtils",
    "WAWebUserPrefsMeUser",
    "WAWebdbCRUDOperationsNewsletterReaction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
          i[l] = arguments[l];
        return (
          (t = e.call.apply(e, [this].concat(i)) || this),
          (t.findImpl = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield o(
                    "WAWebdbCRUDOperationsNewsletterReaction",
                  ).getNewsletterReaction(e),
                  n = yield o(
                    "WAWebMsgCollection",
                  ).MsgCollection.hydrateOrGetMessages([e]),
                  a = n[0];
                if (a == null)
                  throw new (o("WAWebMiscErrors").NotFoundError)(
                    "No reactions found",
                  );
                var i = a.id.remote.toJid(),
                  l = a.serverId,
                  s =
                    l != null
                      ? yield o(
                          "WAWebNewsletterDBUtils",
                        ).craftNewsletterMsgKeyFromServerId(l, i)
                      : null,
                  u =
                    s != null
                      ? yield o(
                          "WAWebDBGetReactions",
                        ).existsReactionAddressingModeInsensitive({
                          parentMsgKey: s.toString(),
                          senderUserJid: o("WAWebUserPrefsMeUser")
                            .getMePnUserOrThrow_DO_NOT_USE()
                            .toString(),
                        })
                      : null;
                if (t == null && u == null)
                  throw new (o("WAWebMiscErrors").NotFoundError)(
                    "No reactions to display",
                  );
                var c = { id: r("WAWebMsgKey").fromString(e) };
                return (
                  l != null && (c.parentMsgServerId = l),
                  t != null &&
                    ((c.reactionCountMap = t.emojiCountMap),
                    (c.reactionCountMapTs = o("WATimeUtils").castToUnixTime(
                      t.serverTimestamp,
                    ))),
                  u != null &&
                    u.reactionText !==
                      o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT &&
                    ((c.myReactionMsgKey = r("WAWebMsgKey").from(u.msgKey)),
                    (c.myReaction = u.reactionText),
                    (c.myReactionTs = o("WATimeUtils").castToUnixTime(
                      u.timestamp,
                    ))),
                  c
                );
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebNewsletterReactionModel").NewsletterMessageReactions;
    var s = new e();
    function u(e) {
      var t = e.parentMsg,
        n = e.reactionCode,
        r = e.reactionMsg,
        o = s.gadd({ id: t.id, myReactionMsgKey: r.id });
      return (o.updateMyReaction(n), o);
    }
    ((l.NewsletterMessageReactionsCollection = s),
      (l.updateOrCreateMessageReaction = u));
  },
  98,
);
