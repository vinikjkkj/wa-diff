__d(
  "WAWebNewsletterPullMessagesFromServerAction",
  [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WARaceSignal",
    "WAWebApiChat",
    "WAWebChatGetters",
    "WAWebChatSeenBridge",
    "WAWebMsgModelFromData",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterErrors",
    "WAWebNewsletterGetMessagesJob",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNewsletterValidationUtils",
    "WAWebStateUtils",
    "WAWebUpdateUnreadChatAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t, a) {
      var i = o("WAWebStateUtils").unproxy(t);
      return o("WAWebChatGetters").getIsNewsletter(i)
        ? a.messageCount < 0
          ? (u || (u = n("Promise"))).resolve([])
          : r("WARaceSignal")(
              [a.signal, i.getDeleteSignal()].filter(Boolean),
              function (e) {
                return f(i, babelHelpers.extends({}, a, { signal: e }));
              },
            )
        : (o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[pullNewsletterMessagesFromServer] not a newsletter",
              ])),
          ),
          (u || (u = n("Promise"))).reject(
            new (o("WAWebNewsletterErrors").UnexpectedNonNewsletterChatError)(),
          ));
    }
    function d(e, t, n) {
      switch (t) {
        case "before": {
          e.msgs.msgLoadState.isLoadingEarlierMsgs = n;
          break;
        }
        case "after": {
          e.msgs.msgLoadState.isLoadingRecentMsgs = n;
          break;
        }
      }
    }
    function m(e, t, r) {
      return t.length === 0
        ? (u || (u = n("Promise"))).resolve()
        : e.addQueue.enqueue(
            (u || (u = n("Promise"))).resolve().then(function () {
              if (
                (e.msgs.add(t, r === "before" ? { at: 0 } : void 0),
                r === "after")
              ) {
                var n,
                  o = Math.max.apply(
                    null,
                    t.map(function (e) {
                      return e.t;
                    }),
                  );
                e.t = Math.max((n = e.t) != null ? n : 0, o);
              }
            }),
          );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebApiChat").getChatMeta(e.id),
            r = n.unreadCount,
            a = Math.max(r - t, 0);
          (yield o("WAWebChatSeenBridge").markConversationSeen(e.id, a),
            yield o("WAWebUpdateUnreadChatAction").updateUnreadCountMD(
              e,
              0,
              !1,
            ));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t.signal.aborted) throw new (o("WAAbortError").AbortError)();
          var r = t.cursor,
            a = t.messageCount,
            i = t.shouldUpdateMsg,
            l = r == null || r.after != null ? "after" : "before",
            c =
              "[pullNewsletterMessagesFromServer][" +
              e.id.toJid() +
              "][" +
              l +
              "]",
            _ = e.msgs.msgLoadState,
            f = _.isLoadingEarlierMsgs,
            g = _.isLoadingRecentMsgs;
          if (l === "before" && f) return e.msgs.loadEarlierPromise;
          if (l === "after" && g) return e.msgs.loadRecentPromise;
          d(e, l, !0);
          try {
            if (t.signal.aborted) throw new (o("WAAbortError").AbortError)();
            var y = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
                e.id.toJid(),
              ),
              C = (u || (u = n("Promise"))).resolve().then(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var s = yield o(
                      "WAWebNewsletterGetMessagesJob",
                    ).getNewsletterMessages(y, a, r),
                    c = i != null ? s.msgs.filter(i) : s.msgs,
                    _ = c.map(o("WAWebMsgModelFromData").msgModelFromMsgData);
                  if (t.signal.aborted)
                    throw new (o("WAAbortError").AbortError)();
                  return (
                    _.length > 0 &&
                      (yield (u || (u = n("Promise"))).all([
                        o(
                          "WAWebNewsletterUpdateMsgsRecordsJob",
                        ).addNewsletterMsgsRecords(c),
                        h(s),
                        m(e, _, l),
                      ]),
                      t.resetUnreadCount === !0 && (yield p(e, _.length))),
                    d(e, l, !1),
                    s.msgs.map(o("WAWebMsgModelFromData").msgModelFromMsgData)
                  );
                }),
              );
            return (
              l === "before"
                ? (e.msgs.loadEarlierPromise = C)
                : l === "after" && (e.msgs.loadRecentPromise = C),
              yield C
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[pullNewsletterMessagesFromServer] pull msgs failed",
                    ])),
                )
                .tags("newsletter"),
              e
            );
          }
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
          var t = e.pollVotes,
            n = e.reactions,
            r = e.timestamp;
          yield o("WAWebNewsletterBackendAddOnsUtils").updateAddOnDbRecords(e);
          var a = n.map(function (e) {
            return e.parentMsgKey;
          });
          return o(
            "WAWebNewsletterBridgeApi",
          ).NewsletterBridgeApi.updateNewsletterMessages({
            reactions: n,
            ids: a,
            timestamp: r,
            pollVotes: t,
          });
        })),
        y.apply(this, arguments)
      );
    }
    l.pullNewsletterMessagesFromServer = c;
  },
  98,
);
