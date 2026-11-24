__d(
  "WAWebChatLoadMessages",
  [
    "WAAbortError",
    "WABackoffUtils",
    "WAFilteredCatch",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseLoop",
    "WARaceSignal",
    "WAStorageEstimator",
    "WAWebBackendErrors",
    "WAWebChatConstants",
    "WAWebChatGetters",
    "WAWebChatModelDerivedMethods",
    "WAWebCollectionConstants",
    "WAWebEventsWaitForBbEvent",
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
    "WAWebWamEnumWebcMessageQueryDirection",
    "WAWebWamEnumWebcQueryTriggerType",
    "getErrorSafe",
    "gkx",
    "nullthrows",
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
    function g(e) {
      var t = e.anchorMsg,
        n = e.msgCollection,
        r = e.threadId;
      if (
        r != null &&
        r.type === o("WAWebThreadUtils").ThreadType.ViewAllReplies &&
        t != null &&
        o("WAWebThreadMsgUtils").isMsgRootOfThread(t, r)
      ) {
        var a;
        return (a = n.at(1)) != null ? a : null;
      }
      return t;
    }
    async function h(t) {
      var n = t.chat,
        a = t.msgCollection,
        i = t.signal,
        l = t.threadId,
        d = t.trigger,
        m = o("WAWebStateUtils").unproxy(n);
      await S(m);
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
          Promise.resolve(void 0)
        );
      if (p.msgLoadState.isLoadingEarlierMsgs) return p.loadEarlierPromise;
      var h = p ? p.head() : null,
        y = g({ anchorMsg: h, msgCollection: p, threadId: f });
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
        R = v.hasMoreMsgs,
        L = v.msgs,
        E = b();
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
            L.length,
            R,
            y == null ? void 0 : y.id,
            E != null,
            m.endOfHistoryTransferType,
            o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled(),
          ),
        E &&
          !R &&
          ((E.msgLoadState.noEarlierMsgs =
            m.endOfHistoryTransferType !==
            o("WAWebChatConstants")
              .ConversationEndOfHistoryTransferModelPropType.INCOMPLETE),
          o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled() &&
            (E.msgLoadState.noEarlierMsgs =
              E.msgLoadState.noEarlierMsgs &&
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
              E.msgLoadState.noEarlierMsgs,
              m.endOfHistoryTransferType,
            )),
        L
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
        _ = o("WAWebCollectionConstants").PAGE_SIZE,
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
        h = await b({
          chat: n,
          chatMightBeEmpty: !0,
          cmc: i,
          dir: a,
          event: g,
          msg: c,
          reqPromise: function () {
            return o("WAWebMsgCollection").MsgCollection.loadMessagesQuery(f);
          },
          signal: l,
        });
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
    function b(e) {
      var t = e.chat,
        n = e.chatMightBeEmpty,
        a = n === void 0 ? !0 : n,
        i = e.cmc,
        l = e.dir,
        s = e.event,
        u = e.msg,
        c = e.reqPromise,
        d = e.signal,
        m = o("WAWebStateUtils").unproxy(t),
        p = self.performance.now();
      l === "after"
        ? ((i.msgLoadState.isLoadingRecentMsgs = !0),
          (s.webcMessageQueryType = o(
            "WAWebWamEnumWebcMessageQueryDirection",
          ).WEBC_MESSAGE_QUERY_DIRECTION.LOAD_NEXT))
        : l === "before"
          ? ((i.msgLoadState.isLoadingEarlierMsgs = !0),
            (s.webcMessageQueryType = o(
              "WAWebWamEnumWebcMessageQueryDirection",
            ).WEBC_MESSAGE_QUERY_DIRECTION.LOAD_PREV))
          : l === "around" &&
            ((i.msgLoadState.isLoadingAroundMsgs = !0),
            (s.webcMessageQueryType = o(
              "WAWebWamEnumWebcMessageQueryDirection",
            ).WEBC_MESSAGE_QUERY_DIRECTION.LOAD_AROUND));
      var f = o("WAWebNetworkType").getEffectiveNetworkType();
      (f != null && (s.webcBrowserNetworkType = f),
        (s.webcChatType = o("WAWebChatModelDerivedMethods").getWebcChatTypeFn(
          m,
        )),
        typeof m.initialIndex == "number" &&
          (s.webcChatPosition = m.initialIndex));
      var g = r("WARaceSignal")(
        [d, m.getDeleteSignal()].filter(Boolean),
        function (e) {
          return o("WAPromiseLoop").promiseLoop(async function (t, n, a) {
            if (e.aborted) throw new (o("WAAbortError").AbortError)();
            var d = o("WAPromiseDelays").delayMs(
                o("WABackoffUtils").expBackoff(a, 12e4, 1e3, 0.1),
              ),
              f = Promise.resolve();
            try {
              await f;
              var g = await c();
              if (e.aborted) throw new (o("WAAbortError").AbortError)();
              s.webcQueryT = Math.ceil(self.performance.now() - p);
              var h;
              (Array.isArray(g[0])
                ? ((h = g[0][0]),
                  g.forEach(function (e) {
                    return o("WAWebMsgCountReporter").logMessageCounts(s, e);
                  }))
                : ((h = g[0]),
                  o("WAWebMsgCountReporter").logMessageCounts(s, g)),
                h &&
                  ((s.webcEarliestMessageT = h.t),
                  h.getMsgChunk() === m.msgs &&
                    (s.webcEarliestMessageIndex = m.msgs.length - 1)),
                o("WAStorageEstimator")
                  .estimateStorage()
                  .then(function (e) {
                    if (e.success) {
                      var t = e.value,
                        n = t.quota,
                        r = t.usage;
                      ((s.webcBrowserStorageQuotaBytes = n),
                        (s.webcBrowserStorageQuotaUsedBytes = r));
                    }
                  })
                  .finally(function () {
                    return s.commit();
                  }),
                v(u, i, l),
                t(g));
            } catch (e) {
              var y = r("getErrorSafe")(e);
              if (y.name === o("WAAbortError").ABORT_ERROR) throw y;
              return a > 3 || e === 404
                ? (v(u, i, l),
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
                          "Gave up msg fetch after " + a + " tries",
                        ),
                      ))
                : d;
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
              if (a) return [];
              throw e;
            },
          ),
        );
      return (
        l === "after"
          ? (i.loadRecentPromise = g)
          : l === "before"
            ? (i.loadEarlierPromise = g)
            : l === "around" && (i.loadAroundPromise = g),
        g
      );
    }
    function v(e, t, n) {
      var o = e == null ? void 0 : e.getMsgChunk(),
        a = o && o !== t;
      ((t.msgLoadState.contextLoaded = !0),
        e && a === !0 && (r("nullthrows")(o).msgLoadState.contextLoaded = !0),
        n === "after"
          ? (t.msgLoadState.isLoadingRecentMsgs = !1)
          : n === "before"
            ? (t.msgLoadState.isLoadingEarlierMsgs = !1)
            : n === "around" && (t.msgLoadState.isLoadingAroundMsgs = !1));
    }
    function S(e) {
      var t = Promise.resolve();
      return (
        e.pendingInitialLoading &&
          (t = r("WAWebEventsWaitForBbEvent")(
            e,
            "change:pendingInitialLoading",
            function () {
              return !e.pendingInitialLoading;
            },
          )),
        t
      );
    }
    ((l.loadRecentMsgs = f),
      (l.loadEarlierMsgs = h),
      (l.loadMsgsPromiseLoop = b));
  },
  98,
);
