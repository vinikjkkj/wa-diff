__d(
  "WAWebChatLoadMessages",
  [
    "WAAbortError",
    "WABackoffUtils",
    "WAFilteredCatch",
    "WALogger",
    "WANullthrows",
    "WAPromiseDelays",
    "WAPromiseLoop",
    "WARaceSignal",
    "WAStorageEstimator",
    "WAWebBackendErrors",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebChatConstants",
    "WAWebChatGetters",
    "WAWebCollectionConstants",
    "WAWebGetNewsletterCursor",
    "WAWebMiscErrors",
    "WAWebMsgCollection",
    "WAWebMsgCountReporter",
    "WAWebNetworkType",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGetMessageUpdatesAction",
    "WAWebNewsletterPullMessagesFromServerAction",
    "WAWebNewsletterSystemMessages",
    "WAWebNewsletterSystemMessagesAction",
    "WAWebStateUtils",
    "WAWebSyncGatingUtils",
    "WAWebThreadMsgUtils",
    "WAWebThreadUtils",
    "WAWebThreadsGating",
    "WAWebWamEnumWebcMessageQueryDirection",
    "WAWebWamEnumWebcQueryTriggerType",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    async function f(e) {
      var t = e.chat,
        n = e.msgCollection,
        r = e.signal,
        a = e.threadId,
        i = o("WAWebStateUtils").unproxy(t),
        l = n;
      if ((l || (l = i.msgs), y(i, l))) return Promise.resolve();
      if (l.msgLoadState.isLoadingRecentMsgs) return l.loadRecentPromise;
      var s = await C({
          chat: i,
          dir: "after",
          msgCollection: l,
          signal: r,
          threadId: a,
          trigger: o("WAWebWamEnumWebcQueryTriggerType").WEBC_QUERY_TRIGGER_TYPE
            .USER_SCROLL,
        }),
        u = s.msgs;
      return u;
    }
    function g(e, t, n) {
      if (
        n != null &&
        n.type === o("WAWebThreadUtils").ThreadType.ViewAllReplies &&
        e != null &&
        o("WAWebThreadMsgUtils").isMsgRootOfThread(e, n)
      ) {
        var r;
        return (r = t.at(1)) != null ? r : null;
      }
      return e;
    }
    async function h(t) {
      var n = t.chat,
        a = t.msgCollection,
        i = t.signal,
        l = t.threadId,
        d = t.trigger,
        m = o("WAWebStateUtils").unproxy(n);
      await m.waitForChatLoading();
      var p = a,
        _ =
          d != null
            ? d
            : o("WAWebWamEnumWebcQueryTriggerType").WEBC_QUERY_TRIGGER_TYPE
                .USER_SCROLL,
        f = l;
      if (
        (p || (p = m.msgs),
        r("gkx")("26259") &&
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[loadEarlierMsgs] id=",
                " noEarlier=",
                " loading=",
                " len=",
                " histType=",
                "",
              ])),
            m.id,
            p.msgLoadState.noEarlierMsgs,
            p.msgLoadState.isLoadingEarlierMsgs,
            p.length,
            m.endOfHistoryTransferType,
          ),
        p.msgLoadState.noEarlierMsgs)
      )
        return (
          r("gkx")("26259") &&
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[loadEarlierMsgs] returning early: noEarlierMsgs=true",
                ])),
            ),
          Promise.resolve()
        );
      if (p.msgLoadState.isLoadingEarlierMsgs) return p.loadEarlierPromise;
      var h = p ? p.head() : null,
        y = g(h, p, f);
      if (y == null && h != null)
        return ((p.msgLoadState.noEarlierMsgs = !0), []);
      if (
        o("WAWebChatGetters").getIsNewsletter(m) &&
        y != null &&
        o("WAWebNewsletterSystemMessages").isEarliestNewsletterSystemMsg(y)
      )
        return ((p.msgLoadState.noEarlierMsgs = !0), []);
      var b = function () {
          return y ? y.getMsgChunk(f) : p;
        },
        v = await C({
          anchorOverride: y,
          chat: m,
          dir: "before",
          msgCollection: p,
          signal: i,
          threadId: f,
          trigger: _,
        }),
        S = v.hasMoreMsgs,
        R = v.msgs,
        L = b();
      return (
        r("gkx")("26259") &&
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[loadEarlierMsgs] cnt=",
                " more=",
                " anchor=",
                " cmc=",
                " hist=",
                " onDemand=",
                "",
              ])),
            R.length,
            S,
            y == null ? void 0 : y.id,
            L != null,
            m.endOfHistoryTransferType,
            o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled(),
          ),
        L &&
          !S &&
          ((L.msgLoadState.noEarlierMsgs =
            m.endOfHistoryTransferType !==
            o("WAWebChatConstants")
              .ConversationEndOfHistoryTransferModelPropType.INCOMPLETE),
          o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled() &&
            (L.msgLoadState.noEarlierMsgs =
              L.msgLoadState.noEarlierMsgs &&
              m.endOfHistoryTransferType !==
                o("WAWebChatConstants")
                  .ConversationEndOfHistoryTransferModelPropType
                  .COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY),
          r("gkx")("26259") &&
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[loadEarlierMsgs] noEarlier=",
                  " (more=false, histType=",
                  ")",
                ])),
              L.msgLoadState.noEarlierMsgs,
              m.endOfHistoryTransferType,
            )),
        R
      );
    }
    function y(e, t) {
      return e.msgs === t;
    }
    async function C(e) {
      var t = e.anchorOverride,
        n = e.chat,
        a = e.dir,
        i = e.msgCollection,
        l = e.signal,
        s = e.threadId,
        u = e.trigger,
        c = t != null ? t : a === "after" ? i.last() : i.head(),
        _ =
          o("WAWebBotUtils").isMetaAiBot(n.id) &&
          o("WAWebBotGating").isAiChatThreadsEnabled() &&
          !o("WAWebThreadsGating").isThreadLoadingInfraEnabled()
            ? o("WAWebBotGating").getAiThreadMsgsLoadLimit()
            : o("WAWebCollectionConstants").PAGE_SIZE,
        f = {
          anchor: c != null ? c.id : { remote: n.id },
          count: _,
          direction: a,
          threadId: s != null ? s : null,
        };
      r("gkx")("26259") &&
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[_loadMsgs] id=",
              " dir=",
              " anchor=",
              " limit=",
              " len=",
              "",
            ])),
          n.id,
          a,
          c == null ? void 0 : c.id,
          _,
          i.length,
        );
      var g = o("WAWebMsgCountReporter").newMessageQueryEvent(u),
        h = await b(
          n,
          c,
          i,
          function () {
            return o("WAWebMsgCollection").MsgCollection.loadMessagesQuery(f);
          },
          a,
          g,
          !0,
          l,
        );
      (r("gkx")("26259") &&
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[_loadMsgs] chatId=",
              ", dir=",
              ", msgsFromDbCount=",
              ", msgsLoadLimit=",
              "",
            ])),
          n.id,
          a,
          h.length,
          _,
        ),
        o("WAWebChatGetters").getIsNewsletter(n) &&
          o(
            "WAWebNewsletterExtendedGatingUtils",
          ).isNewsletterReactionEnabled() &&
          (await o(
            "WAWebNewsletterGetMessageUpdatesAction",
          ).maybeUpdateMsgsAddOns(h, n)));
      var y = h.length >= _;
      if (
        (r("gkx")("26259") &&
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[_loadMsgs] id=",
                " dir=",
                " more=",
                " (dbCnt=",
                " >= limit=",
                ") newsletter=",
                "",
              ])),
            n.id,
            a,
            y,
            h.length,
            _,
            o("WAWebChatGetters").getIsNewsletter(n),
          ),
        y ||
          !o("WAWebChatGetters").getIsNewsletter(n) ||
          !o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled())
      )
        return { msgs: h, hasMoreMsgs: y };
      try {
        var C = h[0];
        if (
          a === "before" &&
          C != null &&
          o("WAWebNewsletterSystemMessages").isNewsletterSystemMsg(C)
        )
          return { msgs: h, hasMoreMsgs: !1 };
        var v = h.length > _,
          S = v
            ? []
            : await o(
                "WAWebNewsletterPullMessagesFromServerAction",
              ).pullNewsletterMessagesFromServer(n, {
                messageCount: _ - h.length,
                cursor: o("WAWebGetNewsletterCursor").getNewsletterCursor(
                  i,
                  a,
                  h,
                ),
                resetUnreadCount: !0,
              }),
          R = a === "before" ? S.concat(h) : h.concat(S),
          L = R.length >= _,
          E = R[0];
        if (
          a === "before" &&
          !L &&
          (E == null ||
            !o("WAWebNewsletterSystemMessages").isNewsletterSystemMsg(E))
        ) {
          var k = await o(
            "WAWebNewsletterSystemMessagesAction",
          ).addSystemMessagesToChat(n);
          R.unshift.apply(R, k);
        }
        return { msgs: R, hasMoreMsgs: L };
      } catch (e) {
        return { msgs: h, hasMoreMsgs: !0 };
      }
    }
    function b(e, t, n, a, i, l, s, u) {
      s === void 0 && (s = !0);
      var c = o("WAWebStateUtils").unproxy(e),
        d = self.performance.now();
      (i === "after"
        ? ((n.msgLoadState.isLoadingRecentMsgs = !0),
          (l.webcMessageQueryType = o(
            "WAWebWamEnumWebcMessageQueryDirection",
          ).WEBC_MESSAGE_QUERY_DIRECTION.LOAD_NEXT))
        : i === "before"
          ? ((n.msgLoadState.isLoadingEarlierMsgs = !0),
            (l.webcMessageQueryType = o(
              "WAWebWamEnumWebcMessageQueryDirection",
            ).WEBC_MESSAGE_QUERY_DIRECTION.LOAD_PREV))
          : i === "around" &&
            ((n.msgLoadState.isLoadingAroundMsgs = !0),
            (l.webcMessageQueryType = o(
              "WAWebWamEnumWebcMessageQueryDirection",
            ).WEBC_MESSAGE_QUERY_DIRECTION.LOAD_AROUND)),
        (l.webcBrowserNetworkType =
          o("WAWebNetworkType").getEffectiveNetworkType()),
        (l.webcChatType = c.getWebcChatType()),
        typeof c.initialIndex == "number" &&
          (l.webcChatPosition = c.initialIndex));
      var m = r("WARaceSignal")(
        [u, c.getDeleteSignal()].filter(Boolean),
        function (e) {
          return o("WAPromiseLoop").promiseLoop(async function (s, u, m) {
            if (e.aborted) throw new (o("WAAbortError").AbortError)();
            var p = o("WAPromiseDelays").delayMs(
                o("WABackoffUtils").expBackoff(m, 12e4, 1e3, 0.1),
              ),
              f = Promise.resolve();
            try {
              await f;
              var g = await a();
              if (e.aborted) throw new (o("WAAbortError").AbortError)();
              l.webcQueryT = Math.ceil(self.performance.now() - d);
              var h;
              (Array.isArray(g[0])
                ? ((h = g[0][0]),
                  g.forEach(function (e) {
                    return o("WAWebMsgCountReporter").logMessageCounts(l, e);
                  }))
                : ((h = g[0]),
                  o("WAWebMsgCountReporter").logMessageCounts(l, g)),
                h &&
                  ((l.webcEarliestMessageT = h.t),
                  h.getMsgChunk() === c.msgs &&
                    (l.webcEarliestMessageIndex = c.msgs.length - 1)),
                o("WAStorageEstimator")
                  .estimateStorage()
                  .then(function (e) {
                    if (e.success) {
                      var t = e.value,
                        n = t.quota,
                        r = t.usage;
                      ((l.webcBrowserStorageQuotaBytes = n),
                        (l.webcBrowserStorageQuotaUsedBytes = r));
                    }
                  })
                  .finally(function () {
                    return l.commit();
                  }),
                v(t, n, i),
                s(g));
            } catch (e) {
              var y = r("getErrorSafe")(e);
              if (y.name === o("WAAbortError").ABORT_ERROR) throw y;
              return m > 3 || e === 404
                ? (v(t, n, i),
                  o("WALogger").WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "chat:loadMsgs:error ",
                        "",
                      ])),
                    String(e),
                  ),
                  e === 404
                    ? Promise.reject(new (o("WAWebBackendErrors").E404)())
                    : Promise.reject(
                        new (o("WAWebMiscErrors").GaveUpRetry)(
                          "Gave up msg fetch after " + m + " tries",
                        ),
                      ))
                : p;
            }
          }, 0);
        },
      )
        .catch(
          o("WAFilteredCatch").filteredCatch(
            o("WAWebMiscErrors").GaveUpRetry,
            function () {
              return [];
            },
          ),
        )
        .catch(
          o("WAFilteredCatch").filteredCatch(
            o("WAWebBackendErrors").E404,
            function (e) {
              if (s) return [];
              throw e;
            },
          ),
        );
      return (
        i === "after"
          ? (n.loadRecentPromise = m)
          : i === "before"
            ? (n.loadEarlierPromise = m)
            : i === "around" && (n.loadAroundPromise = m),
        m
      );
    }
    function v(e, t, n) {
      var o = e == null ? void 0 : e.getMsgChunk(),
        a = o && o !== t;
      ((t.msgLoadState.contextLoaded = !0),
        e && a === !0 && (r("WANullthrows")(o).msgLoadState.contextLoaded = !0),
        n === "after"
          ? (t.msgLoadState.isLoadingRecentMsgs = !1)
          : n === "before"
            ? (t.msgLoadState.isLoadingEarlierMsgs = !1)
            : n === "around" && (t.msgLoadState.isLoadingAroundMsgs = !1));
    }
    ((l.loadRecentMsgs = f),
      (l.loadEarlierMsgs = h),
      (l.loadMsgsPromiseLoop = b));
  },
  98,
);
