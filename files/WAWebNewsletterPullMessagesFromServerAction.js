__d(
  "WAWebNewsletterPullMessagesFromServerAction",
  [
    "WAAbortError",
    "WALogger",
    "WARaceSignal",
    "WAWebApiChat",
    "WAWebBackendRuntime",
    "WAWebChatGetters",
    "WAWebChatReadService",
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
    "countWhere",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n) {
      var a = o("WAWebStateUtils").unproxy(t);
      return o("WAWebChatGetters").getIsNewsletter(a)
        ? n.messageCount < 0
          ? Promise.resolve([])
          : r("WARaceSignal")(
              [n.signal, a.getDeleteSignal()].filter(Boolean),
              function (e) {
                return _(a, babelHelpers.extends({}, n, { signal: e }));
              },
            )
        : (o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[pullNewsletterMessagesFromServer] not a newsletter",
              ])),
          ),
          Promise.reject(
            new (o("WAWebNewsletterErrors").UnexpectedNonNewsletterChatError)(),
          ));
    }
    function c(e, t, n) {
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
    function d(e, t, n) {
      return t.length === 0
        ? Promise.resolve()
        : e.addQueue.enqueue(
            Promise.resolve().then(function () {
              if (
                (e.msgs.add(t, n === "before" ? { at: 0 } : void 0),
                n === "after")
              ) {
                var r,
                  o = Math.max.apply(
                    null,
                    t.map(function (e) {
                      return e.t;
                    }),
                  );
                e.t = Math.max((r = e.t) != null ? r : 0, o);
              }
            }),
          );
    }
    async function m(e) {
      var t = await o("WAWebDBMsgUtils").getMsgsExistByMsgKey(
        e.map(function (e) {
          return e.id.toString();
        }),
      );
      return r("countWhere")(t, function (e) {
        return !e;
      });
    }
    async function p(e, t) {
      var n = await o("WAWebApiChat").getChatMeta(e.id),
        r = n.unreadCount,
        a = Math.max(r - t, 0);
      (await (
        o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebChatReadService").ChatReadService,
            ).markConversationSeen
          : o("WAWebChatSeenBridge").markConversationSeen
      )(e.id, a),
        await o("WAWebUpdateUnreadChatAction").updateUnreadCountMD(e, 0, !1));
    }
    async function _(e, t) {
      if (t.signal.aborted) throw new (o("WAAbortError").AbortError)();
      var n = t.cursor,
        r = t.messageCount,
        a = t.shouldUpdateMsg,
        i = n == null || n.after != null ? "after" : "before",
        l =
          "[pullNewsletterMessagesFromServer][" + e.id.toJid() + "][" + i + "]",
        u = e.msgs.msgLoadState,
        _ = u.isLoadingEarlierMsgs,
        g = u.isLoadingRecentMsgs;
      if (i === "before" && _) return e.msgs.loadEarlierPromise;
      if (i === "after" && g) return e.msgs.loadRecentPromise;
      c(e, i, !0);
      try {
        if (t.signal.aborted) throw new (o("WAAbortError").AbortError)();
        var h = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
            e.id.toJid(),
          ),
          y = Promise.resolve().then(async function () {
            var l = await o(
                "WAWebNewsletterGetMessagesJob",
              ).getNewsletterMessages(h, r, n),
              s = a != null ? l.msgs.filter(a) : l.msgs,
              u = s.map(o("WAWebMsgModelFromData").msgModelFromMsgData);
            if (t.signal.aborted) throw new (o("WAAbortError").AbortError)();
            if (u.length > 0) {
              var _ = t.resetUnreadCount === !0 ? await m(s) : null;
              (await Promise.all([
                o(
                  "WAWebNewsletterUpdateMsgsRecordsJob",
                ).addNewsletterMsgsRecords(s),
                f(l),
                d(e, u, i),
              ]),
                _ != null && (await p(e, _)));
            }
            return (
              c(e, i, !1),
              l.msgs.map(o("WAWebMsgModelFromData").msgModelFromMsgData)
            );
          });
        return (
          i === "before"
            ? (e.msgs.loadEarlierPromise = y)
            : i === "after" && (e.msgs.loadRecentPromise = y),
          await y
        );
      } catch (t) {
        throw (
          c(e, i, !1),
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[pullNewsletterMessagesFromServer] pull msgs failed",
                ])),
            )
            .tags("newsletter"),
          t
        );
      }
    }
    async function f(e) {
      var t = e.pollVotes,
        n = e.reactions,
        r = e.timestamp;
      await o("WAWebNewsletterBackendAddOnsUtils").updateAddOnDbRecords(e);
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
    }
    l.pullNewsletterMessagesFromServer = u;
  },
  98,
);
