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
    "WAWebDBMsgUtils",
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
    "countWhere",
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
                return h(i, babelHelpers.extends({}, a, { signal: e }));
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
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebDBMsgUtils").getMsgsExistByMsgKey(
            e.map(function (e) {
              return e.id.toString();
            }),
          );
          return r("countWhere")(t, function (e) {
            return !e;
          });
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
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            g = _.isLoadingEarlierMsgs,
            h = _.isLoadingRecentMsgs;
          if (l === "before" && g) return e.msgs.loadEarlierPromise;
          if (l === "after" && h) return e.msgs.loadRecentPromise;
          d(e, l, !0);
          try {
            if (t.signal.aborted) throw new (o("WAAbortError").AbortError)();
            var y = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
                e.id.toJid(),
              ),
              b = (u || (u = n("Promise"))).resolve().then(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var s = yield o(
                      "WAWebNewsletterGetMessagesJob",
                    ).getNewsletterMessages(y, a, r),
                    c = i != null ? s.msgs.filter(i) : s.msgs,
                    _ = c.map(o("WAWebMsgModelFromData").msgModelFromMsgData);
                  if (t.signal.aborted)
                    throw new (o("WAAbortError").AbortError)();
                  if (_.length > 0) {
                    var g = t.resetUnreadCount === !0 ? yield p(c) : null;
                    (yield (u || (u = n("Promise"))).all([
                      o(
                        "WAWebNewsletterUpdateMsgsRecordsJob",
                      ).addNewsletterMsgsRecords(c),
                      C(s),
                      m(e, _, l),
                    ]),
                      g != null && (yield f(e, g)));
                  }
                  return (
                    d(e, l, !1),
                    s.msgs.map(o("WAWebMsgModelFromData").msgModelFromMsgData)
                  );
                }),
              );
            return (
              l === "before"
                ? (e.msgs.loadEarlierPromise = b)
                : l === "after" && (e.msgs.loadRecentPromise = b),
              yield b
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
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        b.apply(this, arguments)
      );
    }
    l.pullNewsletterMessagesFromServer = c;
  },
  98,
);
