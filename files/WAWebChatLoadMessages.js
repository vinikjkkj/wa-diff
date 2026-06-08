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
          if ((s || (s = l.msgs), v(l, s)))
            return (f || (f = n("Promise"))).resolve();
          if (s.msgLoadState.isLoadingRecentMsgs) return s.loadRecentPromise;
          var u = yield S({
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
    function y(e, t, n) {
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
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var C = _ ? _.head() : null,
            b = y(C, _, h);
          if (b == null && C != null)
            return ((_.msgLoadState.noEarlierMsgs = !0), []);
          if (
            o("WAWebChatGetters").getIsNewsletter(p) &&
            b != null &&
            o("WAWebNewsletterSystemMessages").isEarliestNewsletterSystemMsg(b)
          )
            return ((_.msgLoadState.noEarlierMsgs = !0), []);
          var v = function () {
              return b ? b.getMsgChunk(h) : _;
            },
            R = yield S({
              anchorOverride: b,
              chat: p,
              dir: "before",
              msgCollection: _,
              signal: i,
              threadId: h,
              trigger: g,
            }),
            L = R.hasMoreMsgs,
            E = R.msgs,
            k = v();
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
                E.length,
                L,
                b == null ? void 0 : b.id,
                k != null,
                p.endOfHistoryTransferType,
                o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled(),
              ),
            k &&
              !L &&
              ((k.msgLoadState.noEarlierMsgs =
                p.endOfHistoryTransferType !==
                o("WAWebChatConstants")
                  .ConversationEndOfHistoryTransferModelPropType.INCOMPLETE),
              o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled() &&
                (k.msgLoadState.noEarlierMsgs =
                  k.msgLoadState.noEarlierMsgs &&
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
                  k.msgLoadState.noEarlierMsgs,
                  p.endOfHistoryTransferType,
                )),
            E
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return e.msgs === t;
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.anchorOverride,
            n = e.chat,
            a = e.dir,
            i = e.msgCollection,
            l = e.signal,
            s = e.threadId,
            u = e.trigger,
            c = t != null ? t : a === "after" ? i.last() : i.head(),
            d = o("WAWebCollectionConstants").PAGE_SIZE,
            f = {
              anchor: c != null ? c.id : { remote: n.id },
              count: d,
              direction: a,
              threadId: s != null ? s : null,
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
              n.id,
              a,
              c == null ? void 0 : c.id,
              d,
              i.length,
            );
          var g = o("WAWebMsgCountReporter").newMessageQueryEvent(u),
            h = yield L(
              n,
              c,
              i,
              function () {
                return o("WAWebMsgCollection").MsgCollection.loadMessagesQuery(
                  f,
                );
              },
              a,
              g,
              !0,
              l,
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
              n.id,
              a,
              h.length,
              d,
            ),
            o("WAWebChatGetters").getIsNewsletter(n) &&
              o(
                "WAWebNewsletterExtendedGatingUtils",
              ).isNewsletterReactionEnabled() &&
              (yield o(
                "WAWebNewsletterGetMessageUpdatesAction",
              ).maybeUpdateMsgsAddOns(h, n)));
          var y = h.length >= d;
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
                n.id,
                a,
                y,
                h.length,
                d,
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
            var b = h.length > d,
              v = b
                ? []
                : yield o(
                    "WAWebNewsletterPullMessagesFromServerAction",
                  ).pullNewsletterMessagesFromServer(n, {
                    messageCount: d - h.length,
                    cursor: o("WAWebGetNewsletterCursor").getNewsletterCursor(
                      i,
                      a,
                      h,
                    ),
                    resetUnreadCount: !0,
                  }),
              S = a === "before" ? v.concat(h) : h.concat(v),
              R = S.length >= d,
              E = S[0];
            if (
              a === "before" &&
              !R &&
              (E == null ||
                !o("WAWebNewsletterSystemMessages").isNewsletterSystemMsg(E))
            ) {
              var k = yield o(
                "WAWebNewsletterSystemMessagesAction",
              ).addSystemMessagesToChat(n);
              S.unshift.apply(S, k);
            }
            return { msgs: S, hasMoreMsgs: R };
          } catch (e) {
            return { msgs: h, hasMoreMsgs: !0 };
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(t, a, i, l, s, u, c, d) {
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
                      E(a, i, s),
                      c(y));
                  } catch (t) {
                    var b = r("getErrorSafe")(t);
                    if (b.name === o("WAAbortError").ABORT_ERROR) throw b;
                    return _ > 3 || t === 404
                      ? (E(a, i, s),
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
    function E(e, t, n) {
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
      (l.loadEarlierMsgs = C),
      (l.loadMsgsPromiseLoop = L));
  },
  98,
);
