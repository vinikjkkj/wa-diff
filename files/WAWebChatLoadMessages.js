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
          var u = yield v(
              l,
              "after",
              s,
              o("WAWebWamEnumWebcQueryTriggerType").WEBC_QUERY_TRIGGER_TYPE
                .USER_SCROLL,
              a,
              i,
            ),
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
            b = yield v(p, "before", _, g, i, h),
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
    function v(e, t, n, r, o, a) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l) {
            var s = t === "after" ? n.last() : n.head(),
              u =
                o("WAWebBotUtils").isMetaAiBot(e.id) &&
                o("WAWebBotGating").isAiChatThreadsEnabled() &&
                !o("WAWebThreadsGating").isThreadLoadingInfraEnabled()
                  ? o("WAWebBotGating").getAiThreadMsgsLoadLimit()
                  : o("WAWebCollectionConstants").PAGE_SIZE,
              c = {
                anchor: s != null ? s.id : { remote: e.id },
                count: u,
                direction: t,
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
                e.id,
                t,
                s == null ? void 0 : s.id,
                u,
                n.length,
              );
            var d = o("WAWebMsgCountReporter").newMessageQueryEvent(a),
              f = yield R(
                e,
                s,
                n,
                function () {
                  return o(
                    "WAWebMsgCollection",
                  ).MsgCollection.loadMessagesQuery(c);
                },
                t,
                d,
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
                e.id,
                t,
                f.length,
                u,
              ),
              o("WAWebChatGetters").getIsNewsletter(e) &&
                o(
                  "WAWebNewsletterExtendedGatingUtils",
                ).isNewsletterReactionEnabled() &&
                (yield o(
                  "WAWebNewsletterGetMessageUpdatesAction",
                ).maybeUpdateMsgsAddOns(f, e)));
            var g = f.length >= u;
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
                  e.id,
                  t,
                  g,
                  f.length,
                  u,
                  o("WAWebChatGetters").getIsNewsletter(e),
                ),
              g ||
                !o("WAWebChatGetters").getIsNewsletter(e) ||
                !o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled())
            )
              return { msgs: f, hasMoreMsgs: g };
            try {
              var h = f[0];
              if (
                t === "before" &&
                h != null &&
                o("WAWebNewsletterSystemMessages").isNewsletterSystemMsg(h)
              )
                return { msgs: f, hasMoreMsgs: !1 };
              var y = f.length > u,
                C = y
                  ? []
                  : yield o(
                      "WAWebNewsletterPullMessagesFromServerAction",
                    ).pullNewsletterMessagesFromServer(e, {
                      messageCount: u - f.length,
                      cursor: o("WAWebGetNewsletterCursor").getNewsletterCursor(
                        n,
                        t,
                        f,
                      ),
                      resetUnreadCount: !0,
                    }),
                b = t === "before" ? C.concat(f) : f.concat(C),
                v = b.length >= u,
                S = b[0];
              if (
                t === "before" &&
                !v &&
                (S == null ||
                  !o("WAWebNewsletterSystemMessages").isNewsletterSystemMsg(S))
              ) {
                var L = yield o(
                  "WAWebNewsletterSystemMessagesAction",
                ).addSystemMessagesToChat(e);
                b.unshift.apply(b, L);
              }
              return { msgs: b, hasMoreMsgs: v };
            } catch (e) {
              return { msgs: f, hasMoreMsgs: !0 };
            }
          },
        )),
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
