__d(
  "WAWebChatLoadMessages",
  [
    "Promise",
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
    "WAWebThreadsGating",
    "WAWebWamEnumWebcMessageQueryDirection",
    "WAWebWamEnumWebcQueryTriggerType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            r = e.msgCollection,
            a = e.signal,
            i = e.threadId,
            l = o("WAWebStateUtils").unproxy(t),
            s = r;
          if ((s || (s = l.msgs), b(l, s)))
            return (f || (f = n("Promise"))).resolve();
          if (s.msgLoadState.isLoadingRecentMsgs) return s.loadRecentPromise;
          var u = yield v({
              chat: l,
              dir: "after",
              msgCollection: s,
              signal: a,
              threadId: i,
              trigger: o("WAWebWamEnumWebcQueryTriggerType")
                .WEBC_QUERY_TRIGGER_TYPE.USER_SCROLL,
            }),
            c = u.msgs;
          return c;
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            a = e.msgCollection,
            i = e.signal,
            l = e.threadId,
            m = e.trigger,
            p = o("WAWebStateUtils").unproxy(t);
          yield p.waitForChatLoading();
          var _ = a,
            g =
              m != null
                ? m
                : o("WAWebWamEnumWebcQueryTriggerType").WEBC_QUERY_TRIGGER_TYPE
                    .USER_SCROLL,
            h = l;
          if (
            (_ || (_ = p.msgs),
            r("gkx")("26259") &&
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[loadEarlierMsgs] id=",
                    " noEarlier=",
                    " loading=",
                    " len=",
                    " histType=",
                    "",
                  ])),
                p.id,
                _.msgLoadState.noEarlierMsgs,
                _.msgLoadState.isLoadingEarlierMsgs,
                _.length,
                p.endOfHistoryTransferType,
              ),
            _.msgLoadState.noEarlierMsgs)
          )
            return (
              r("gkx")("26259") &&
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[loadEarlierMsgs] returning early: noEarlierMsgs=true",
                    ])),
                ),
              (f || (f = n("Promise"))).resolve()
            );
          if (_.msgLoadState.isLoadingEarlierMsgs) return _.loadEarlierPromise;
          var y = _ ? _.head() : null;
          if (
            o("WAWebChatGetters").getIsNewsletter(p) &&
            y != null &&
            o("WAWebNewsletterSystemMessages").isEarliestNewsletterSystemMsg(y)
          )
            return ((_.msgLoadState.noEarlierMsgs = !0), []);
          var C = function () {
              return y ? y.getMsgChunk(h) : _;
            },
            b = yield v({
              chat: p,
              dir: "before",
              msgCollection: _,
              signal: i,
              threadId: h,
              trigger: g,
            }),
            S = b.hasMoreMsgs,
            R = b.msgs,
            L = C();
          return (
            r("gkx")("26259") &&
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
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
                p.endOfHistoryTransferType,
                o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled(),
              ),
            L &&
              !S &&
              ((L.msgLoadState.noEarlierMsgs =
                p.endOfHistoryTransferType !==
                o("WAWebChatConstants")
                  .ConversationEndOfHistoryTransferModelPropType.INCOMPLETE),
              o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled() &&
                (L.msgLoadState.noEarlierMsgs =
                  L.msgLoadState.noEarlierMsgs &&
                  p.endOfHistoryTransferType !==
                    o("WAWebChatConstants")
                      .ConversationEndOfHistoryTransferModelPropType
                      .COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY),
              r("gkx")("26259") &&
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[loadEarlierMsgs] noEarlier=",
                      " (more=false, histType=",
                      ")",
                    ])),
                  L.msgLoadState.noEarlierMsgs,
                  p.endOfHistoryTransferType,
                )),
            R
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return e.msgs === t;
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.dir,
            a = e.msgCollection,
            i = e.signal,
            l = e.threadId,
            s = e.trigger,
            u = n === "after" ? a.last() : a.head(),
            c =
              o("WAWebBotUtils").isMetaAiBot(t.id) &&
              o("WAWebBotGating").isAiChatThreadsEnabled() &&
              !o("WAWebThreadsGating").isThreadLoadingInfraEnabled()
                ? o("WAWebBotGating").getAiThreadMsgsLoadLimit()
                : o("WAWebCollectionConstants").PAGE_SIZE,
            d = {
              anchor: u != null ? u.id : { remote: t.id },
              count: c,
              direction: n,
              threadId: l != null ? l : null,
            };
          r("gkx")("26259") &&
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[_loadMsgs] id=",
                  " dir=",
                  " anchor=",
                  " limit=",
                  " len=",
                  "",
                ])),
              t.id,
              n,
              u == null ? void 0 : u.id,
              c,
              a.length,
            );
          var f = o("WAWebMsgCountReporter").newMessageQueryEvent(s),
            g = yield R(
              t,
              u,
              a,
              function () {
                return o("WAWebMsgCollection").MsgCollection.loadMessagesQuery(
                  d,
                );
              },
              n,
              f,
              !0,
              i,
            );
          (r("gkx")("26259") &&
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[_loadMsgs] chatId=",
                  ", dir=",
                  ", msgsFromDbCount=",
                  ", msgsLoadLimit=",
                  "",
                ])),
              t.id,
              n,
              g.length,
              c,
            ),
            o("WAWebChatGetters").getIsNewsletter(t) &&
              o(
                "WAWebNewsletterExtendedGatingUtils",
              ).isNewsletterReactionEnabled() &&
              (yield o(
                "WAWebNewsletterGetMessageUpdatesAction",
              ).maybeUpdateMsgsAddOns(g, t)));
          var h = g.length >= c;
          if (
            (r("gkx")("26259") &&
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[_loadMsgs] id=",
                    " dir=",
                    " more=",
                    " (dbCnt=",
                    " >= limit=",
                    ") newsletter=",
                    "",
                  ])),
                t.id,
                n,
                h,
                g.length,
                c,
                o("WAWebChatGetters").getIsNewsletter(t),
              ),
            h ||
              !o("WAWebChatGetters").getIsNewsletter(t) ||
              !o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled())
          )
            return { msgs: g, hasMoreMsgs: h };
          try {
            var y = g[0];
            if (
              n === "before" &&
              y != null &&
              o("WAWebNewsletterSystemMessages").isNewsletterSystemMsg(y)
            )
              return { msgs: g, hasMoreMsgs: !1 };
            var C = g.length > c,
              b = C
                ? []
                : yield o(
                    "WAWebNewsletterPullMessagesFromServerAction",
                  ).pullNewsletterMessagesFromServer(t, {
                    messageCount: c - g.length,
                    cursor: o("WAWebGetNewsletterCursor").getNewsletterCursor(
                      a,
                      n,
                      g,
                    ),
                    resetUnreadCount: !0,
                  }),
              v = n === "before" ? b.concat(g) : g.concat(b),
              S = v.length >= c,
              L = v[0];
            if (
              n === "before" &&
              !S &&
              (L == null ||
                !o("WAWebNewsletterSystemMessages").isNewsletterSystemMsg(L))
            ) {
              var E = yield o(
                "WAWebNewsletterSystemMessagesAction",
              ).addSystemMessagesToChat(t);
              v.unshift.apply(v, E);
            }
            return { msgs: v, hasMoreMsgs: S };
          } catch (e) {
            return { msgs: g, hasMoreMsgs: !0 };
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(t, a, i, l, s, u, c, d) {
      c === void 0 && (c = !0);
      var m = o("WAWebStateUtils").unproxy(t),
        p = self.performance.now();
      (s === "after"
        ? ((i.msgLoadState.isLoadingRecentMsgs = !0),
          (u.webcMessageQueryType = o(
            "WAWebWamEnumWebcMessageQueryDirection",
          ).WEBC_MESSAGE_QUERY_DIRECTION.LOAD_NEXT))
        : s === "before"
          ? ((i.msgLoadState.isLoadingEarlierMsgs = !0),
            (u.webcMessageQueryType = o(
              "WAWebWamEnumWebcMessageQueryDirection",
            ).WEBC_MESSAGE_QUERY_DIRECTION.LOAD_PREV))
          : s === "around" &&
            ((i.msgLoadState.isLoadingAroundMsgs = !0),
            (u.webcMessageQueryType = o(
              "WAWebWamEnumWebcMessageQueryDirection",
            ).WEBC_MESSAGE_QUERY_DIRECTION.LOAD_AROUND)),
        (u.webcBrowserNetworkType =
          o("WAWebNetworkType").getEffectiveNetworkType()),
        (u.webcChatType = m.getWebcChatType()),
        typeof m.initialIndex == "number" &&
          (u.webcChatPosition = m.initialIndex));
      var _ = r("WARaceSignal")(
        [d, m.getDeleteSignal()].filter(Boolean),
        function (t) {
          return o("WAPromiseLoop").promiseLoop(
            (function () {
              var c = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (c, d, _) {
                  if (t.aborted) throw new (o("WAAbortError").AbortError)();
                  var g = o("WAPromiseDelays").delayMs(
                      o("WABackoffUtils").expBackoff(_, 12e4, 1e3, 0.1),
                    ),
                    h = (f || (f = n("Promise"))).resolve();
                  try {
                    yield h;
                    var y = yield l();
                    if (t.aborted) throw new (o("WAAbortError").AbortError)();
                    u.webcQueryT = Math.ceil(self.performance.now() - p);
                    var C;
                    (Array.isArray(y[0])
                      ? ((C = y[0][0]),
                        y.forEach(function (e) {
                          return o("WAWebMsgCountReporter").logMessageCounts(
                            u,
                            e,
                          );
                        }))
                      : ((C = y[0]),
                        o("WAWebMsgCountReporter").logMessageCounts(u, y)),
                      C &&
                        ((u.webcEarliestMessageT = C.t),
                        C.getMsgChunk() === m.msgs &&
                          (u.webcEarliestMessageIndex = m.msgs.length - 1)),
                      o("WAStorageEstimator")
                        .estimateStorage()
                        .then(function (e) {
                          if (e.success) {
                            var t = e.value,
                              n = t.quota,
                              r = t.usage;
                            ((u.webcBrowserStorageQuotaBytes = n),
                              (u.webcBrowserStorageQuotaUsedBytes = r));
                          }
                        })
                        .finally(function () {
                          return u.commit();
                        }),
                      L(a, i, s),
                      c(y));
                  } catch (t) {
                    var b = r("getErrorSafe")(t);
                    if (b.name === o("WAAbortError").ABORT_ERROR) throw b;
                    return _ > 3 || t === 404
                      ? (L(a, i, s),
                        o("WALogger").WARN(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "chat:loadMsgs:error ",
                              "",
                            ])),
                          String(t),
                        ),
                        t === 404
                          ? (f || (f = n("Promise"))).reject(
                              new (o("WAWebBackendErrors").E404)(),
                            )
                          : (f || (f = n("Promise"))).reject(
                              new (o("WAWebMiscErrors").GaveUpRetry)(
                                "Gave up msg fetch after " + _ + " tries",
                              ),
                            ))
                      : g;
                  }
                },
              );
              return function (e, t, n) {
                return c.apply(this, arguments);
              };
            })(),
            0,
          );
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
              if (c) return [];
              throw e;
            },
          ),
        );
      return (
        s === "after"
          ? (i.loadRecentPromise = _)
          : s === "before"
            ? (i.loadEarlierPromise = _)
            : s === "around" && (i.loadAroundPromise = _),
        _
      );
    }
    function L(e, t, n) {
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
    ((l.loadRecentMsgs = g),
      (l.loadEarlierMsgs = y),
      (l.loadMsgsPromiseLoop = R));
  },
  98,
);
