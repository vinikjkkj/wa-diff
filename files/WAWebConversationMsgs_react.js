__d(
  "WAWebConversationMsgs.react",
  [
    "fbt",
    "WAAbortError",
    "WAArrayFindNext",
    "WAFilteredCatch",
    "WALogger",
    "WANullthrows",
    "WARaceSignal",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackendErrors",
    "WAWebBizChatAssignmentOpenedAction",
    "WAWebChatAssignmentUtils",
    "WAWebChatGetters",
    "WAWebChatLoadMessages",
    "WAWebChatMessageSearch",
    "WAWebChatMsgsCollection",
    "WAWebChatThreadLogging",
    "WAWebClock",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebCongratulationsAnimationsGatingUtils",
    "WAWebContactGetters",
    "WAWebConversationLoadMoreMessages.react",
    "WAWebConversationMsgsMenuV2.react",
    "WAWebConversationMsgsUtils",
    "WAWebCopyPasteCopyableArea.react",
    "WAWebDebounce",
    "WAWebDocumentFlushed",
    "WAWebFocusTracer",
    "WAWebFrontendConstants",
    "WAWebFrontendMsgGetters",
    "WAWebGetBrazilnteractiveActions",
    "WAWebGroupCatchUpWamEvent",
    "WAWebHistorySyncUtils",
    "WAWebJumpToButtons.react",
    "WAWebListenerHoc_DEPRECATED",
    "WAWebMath",
    "WAWebMessageList.react",
    "WAWebMessagePosition",
    "WAWebMessageStickyDateMarker.react",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGetMessageUpdatesAction",
    "WAWebNewsletterLiveUpdatesManager",
    "WAWebNewsletterRepairMsgHistoryAction",
    "WAWebNonMessageDataRequestPlaceholderMessageResendUtils",
    "WAWebNoop",
    "WAWebTextStatusGatingUtils",
    "WAWebThemeContext",
    "WAWebThreadsGating",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUnmountSignalHoc_DEPRECATED.react",
    "WAWebUpdateUnreadChatAction",
    "WAWebUserPrefsMeUser",
    "WAWebVelocityAnimate",
    "WAWebWid",
    "cr:12474",
    "err",
    "gkx",
    "isEmptyObject",
    "lodash",
    "react",
    "shallowEqual",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["msgLoadState"],
      u = ["msgLoadState"],
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R = S || (S = o("react")),
      L = S,
      E = L.Component,
      k = L.createRef,
      I = 3e3,
      T = 8.5,
      D = 300,
      x = 80,
      $ = 20,
      P = 100,
      N = {
        jumpToContainer: {
          height: "x5yr21d",
          width: "xh8yej3",
          maxWidth: "xquzyny",
          position: "x1n2onr6",
          $$css: !0,
        },
      };
    function M(e, t) {
      r("WAWebWid").isUser(e) &&
        o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() &&
        o("WAWebCmd").Cmd.trigger("conversation_near_bottom_changed", e, t);
    }
    var w = (function (t) {
      function a(e) {
        var n;
        ((n = t.call(this, e) || this),
          (n.$1 = 0),
          (n.$3 = new Map()),
          (n.$4 = []),
          (n.$10 = !1),
          (n.$11 = !1),
          (n.$12 = 0),
          (n.$13 = 0),
          (n.$14 = !1),
          (n.$15 = function (e) {
            return (n.scrollContainer = e);
          }),
          (n.$16 = k()),
          (n.$17 = k()),
          (n.$18 = k()),
          (n.$19 = null),
          (n.$31 = function (e) {
            var t = n.scrollContainer;
            t &&
              (r("WAWebVelocityAnimate")(t, "stop"),
              r("WAWebVelocityAnimate")(t, "scroll", {
                duration: 300,
                container: t,
                offset: e,
              }));
          }),
          (n.$41 = function (e) {
            var t = n.$17.current;
            n.$18.current =
              t == null ? void 0 : t.getMsgWrapperRef(e.toString());
          }),
          (n.$38 = function (e) {
            e.has(n.props.chat.id.toString()) &&
              (o("WALogger")
                .LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "_onHistorySyncStateUpdate called, attempt to load earlier",
                    ])),
                )
                .tags("history-sync"),
              (n.$10 = !1),
              n.loadEarlierMsgs());
          }),
          (n.$47 = function () {
            n.forceUpdate();
          }),
          (n.$32 = function (e) {
            var t = n.$4[n.$4.length - 1];
            if (t) {
              var r = t.toString(),
                o = n.$17.current;
              if (r && o) {
                var a,
                  i =
                    (a = o.getMsgWrapperRef(r)) == null
                      ? void 0
                      : a.getContainerElement();
                if (i) {
                  var l = n.scrollContainer;
                  if (!l) return;
                  var s = n.$48(l, i);
                  n.$46 = { msg: i, container: l, msgBottom: s };
                }
              }
            }
          }),
          (n.$33 = function (e) {
            if (n.$46) {
              var t = n.$46,
                r = t.container,
                o = t.msg,
                a = t.msgBottom;
              (n.$49(r, o, a), (n.$46 = void 0));
            }
          }),
          (n.$42 = function (e) {
            var t,
              a,
              i = n.props,
              l = i.chat,
              u = i.listeners,
              c = i.msgCollection,
              d = e.chat,
              m = e.focusCtx,
              p = e.msgCollection;
            if (
              (c &&
                (u.remove(c, "remove_msgs insert_msgs bulk_add", n.$51),
                u.remove(l.msgs, "change:last", n.$52)),
              u.remove(l, "change:unreadCount", n.$53),
              u.remove(l, "change:unreadEditTimestampMs", n.$53),
              u.remove(l, "change:activeUnreadCount", n.$54),
              u.remove(l, "change:pendingDeleteForMeCount", n.$47),
              n.$9 != null && n.$9(),
              (n.$9 = p.onMsgLoadStateChange(n.$55)),
              o("WAWebChatGetters").getIsGroup(l) &&
                (t = l.groupMetadata) != null &&
                t.unreadMentionMetadata.unreadMentionCollection &&
                u.remove(
                  l.groupMetadata.unreadMentionMetadata.unreadMentionCollection,
                  "add remove reset",
                  n.$56,
                ),
              o("WAWebChatGetters").getIsGroup(d) &&
                (a = d.groupMetadata) != null &&
                a.unreadMentionMetadata.unreadMentionCollection &&
                u.add(
                  d.groupMetadata.unreadMentionMetadata.unreadMentionCollection,
                  "add remove reset",
                  n.$56,
                ),
              u.add(d, "change:unreadCount", n.$53),
              u.add(d, "change:unreadEditTimestampMs", n.$53),
              u.add(d, "change:activeUnreadCount", n.$54),
              u.add(d, "change:pendingDeleteForMeCount", n.$47),
              u.add(d.msgs, "change:last", n.$52),
              u.add(p, "remove_msgs insert_msgs bulk_add", n.$51),
              m && p.loadAroundPromise)
            ) {
              var _, f, g;
              ((_ = n.props.interaction) == null || _.startInteraction(),
                (f = n.props.interaction) == null ||
                  f.addExperimentExposure(
                    "wa_web_perf_messages_virtualization_margin_1000",
                    r("gkx")("4011"),
                    r("gkx")("5902"),
                  ),
                (g = n.props.interaction) == null ||
                  g.addAnnotation({
                    loadingType: "load_around",
                    surface: o("WAWebChatGetters").getIsNewsletter(n.props.chat)
                      ? "channels"
                      : "chats",
                  }),
                p.loadAroundPromise
                  .catch(function (e) {
                    o("WAFilteredCatch").filteredCatch(
                      o("WAWebBackendErrors").E404,
                      function () {
                        var t;
                        ((t = n.props.interaction) == null ||
                          t.failInteraction(e),
                          o("WAWebToastManager").ToastManager.open(
                            R.jsx(o("WAWebToast.react").Toast, {
                              msg: s._(/*BTDS*/ "Couldn't find message"),
                            }),
                          ),
                          o("WAWebCmd")
                            .Cmd.openChatBottom({ chat: d })
                            .catch(function () {}));
                      },
                    )(e);
                  })
                  .finally(function () {
                    var e;
                    (e = n.props.interaction) == null ||
                      e.completeInteraction();
                  }));
            }
          }),
          (n.$21 = r("lodash").throttle(function () {
            var e = n.props.getUnmountSignal();
            o("WAWebDocumentFlushed")
              .documentFlushed({ signal: e })
              .then(function () {
                if (e.aborted) throw new (o("WAAbortError").AbortError)();
                if ((n.$45(), !e.aborted)) {
                  var t = n,
                    r = t.scrollContainer;
                  if (r != null) {
                    var a = r.scrollTop,
                      i = a < D,
                      l = n.$57();
                    if (
                      (i ? (n.$14 = !0) : l && (n.$14 = !1),
                      !n.$10 &&
                        r.scrollTop < D &&
                        (n.hasMoreMessagesOnIslandAbove()
                          ? n.forceUpdate()
                          : n.loadEarlierMsgs()),
                      !(n.$10 && r.scrollTop < x))
                    ) {
                      r.scrollTop > x && (n.$10 = !1);
                      var s = n.state,
                        u = s.cursor,
                        c = s.isNearBottom;
                      l
                        ? (n.$25(!0),
                          (u.getEnd(n.props.msgCollection) <
                            n.props.msgCollection.length ||
                            !o("WAWebConversationMsgsUtils").isMostRecentCMC(
                              n.props,
                            )) &&
                            n.$58(),
                          n.hasMoreMessagesOnIslandBelow()
                            ? n.forceUpdate()
                            : o("WAWebConversationMsgsUtils").isMostRecentCMC(
                                n.props,
                              ) &&
                              c !== l &&
                              (n.setState({ isNearBottom: l, newUnread: 0 }),
                              M(n.props.chat.id, l)))
                        : c !== l &&
                          !n.hasMoreMessagesOnIslandBelow() &&
                          (n.setState({ isNearBottom: l }),
                          M(n.props.chat.id, l));
                    }
                  }
                }
              })
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAAbortError").AbortError,
                  r("WAWebNoop"),
                ),
              );
          }, 100)),
          (n.$55 = function () {
            var e = n.state.msgLoadState,
              t = o("WAWebConversationMsgsUtils").getMsgLoadState(
                n.props.msgCollection,
              ),
              r = { msgLoadState: t };
            if (e.isLoadingAroundMsgs && !t.isLoadingAroundMsgs) {
              var a = o("WAWebConversationMsgsUtils").validateFocusCtx(
                  n.props.focusCtx,
                ),
                i = a == null ? void 0 : a.msg;
              i &&
                (r = babelHelpers.extends({}, r, {
                  cursor: n.state.cursor.init(i.id, n.props.msgCollection),
                  focusCtx: a,
                }));
            }
            n.setState(r);
          }),
          (n.$22 = r("lodash").throttle(function () {
            n.$45();
          }, 100)),
          (n.$37 = function (e) {
            var t = e.newKey,
              r = e.oldKey,
              o = r.toString(),
              a = t.toString(),
              i = n.$3.get(o);
            i && (n.$3.delete(o), n.$3.set(a, i));
            for (var l = 0; l < n.$4.length; ++l)
              if (n.$4[l] === r) {
                n.$4[l] = t;
                break;
              }
          }),
          (n.$23 = r("WAWebDebounce")(function () {
            var e = n.$57();
            n.state.isNearBottom !== e &&
              (n.setState({ isNearBottom: e }), M(n.props.chat.id, e));
          }, 100)),
          (n.loadEarlierMsgs = function () {
            var e,
              t,
              a,
              i = n.props,
              l = i.chat,
              s = i.msgCollection,
              u = n.state,
              c = u.cursor,
              m = u.msgLoadState;
            if (
              ((e = n.props.interaction) == null || e.startInteraction(),
              (t = n.props.interaction) == null ||
                t.addExperimentExposure(
                  "wa_web_perf_messages_virtualization_margin_1000",
                  r("gkx")("4011"),
                  r("gkx")("5902"),
                ),
              (a = n.props.interaction) == null ||
                a.addAnnotation({
                  loadingType: "load_earlier_msgs",
                  surface: o("WAWebChatGetters").getIsNewsletter(n.props.chat)
                    ? "newsletters"
                    : "chats",
                }),
              c.getStart(s) > 0)
            ) {
              if (c.hasBefore(s)) {
                var p;
                ((p = n.props.interaction) == null || p.completeInteraction(),
                  n.setState({ cursor: c.loadBefore(s) }));
              }
            } else {
              if (m.isLoadingEarlierMsgs || m.isLoadingAroundMsgs) {
                var _, f;
                ((_ = n.props.interaction) == null ||
                  _.addAnnotation({ interrupted: "loading_other_msgs" }),
                  (f = n.props.interaction) == null || f.completeInteraction());
                return;
              }
              if (
                (o("WAWebConversationMsgsUtils").noEarlierMsgStateIsIncorrect(
                  l,
                  o("WAWebConversationMsgsUtils").isMostRecentCMC(n.props),
                  m,
                  n.props.threadId,
                ) && (s.msgLoadState.noEarlierMsgs = !1),
                s.msgLoadState.noEarlierMsgs)
              ) {
                var g, h;
                ((g = n.props.interaction) == null ||
                  g.addAnnotation({ interrupted: "no_earlier_msgs" }),
                  (h = n.props.interaction) == null || h.completeInteraction());
                return;
              }
              var y = n.props.getUnmountSignal();
              o("WAWebChatLoadMessages")
                .loadEarlierMsgs({
                  chat: l,
                  msgCollection: s,
                  threadId: o(
                    "WAWebThreadsGating",
                  ).isThreadLoadingInfraEnabled()
                    ? n.props.threadId
                    : void 0,
                })
                .then(function (e) {
                  var t;
                  if (y.aborted) {
                    var r, a;
                    ((r = n.props.interaction) == null ||
                      r.addAnnotation({ interrupted: "aborted" }),
                      (a = n.props.interaction) == null ||
                        a.completeInteraction());
                    return;
                  }
                  !e || e.length === 0 ? (n.$10 = !0) : (n.$10 = !1);
                  var i = {};
                  (n.state.focusCtx ||
                    (i.focusCtx = o(
                      "WAWebConversationMsgsUtils",
                    ).getUnreadFocusCtx(n.props, n.state.unreadCount)),
                    c.hasBefore(s) && (i.cursor = c.loadBefore(s)),
                    n.setState(i),
                    (t = n.props.interaction) == null ||
                      t.completeInteraction());
                })
                .catch(function (e) {
                  var t;
                  (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose(
                        ["ConversationMsgs:loadEarlierMsgs failed\n", ""],
                        ["ConversationMsgs:loadEarlierMsgs failed\\n", ""],
                      )),
                    e,
                  ),
                    (t = n.props.interaction) == null || t.failInteraction(e));
                });
            }
          }),
          (n.$58 = function () {
            var e,
              t,
              a,
              i = n.props,
              l = i.chat,
              s = i.msgCollection,
              u = n.state,
              c = u.cursor,
              d = u.msgLoadState;
            if (
              ((e = n.props.interaction) == null || e.startInteraction(),
              (t = n.props.interaction) == null ||
                t.addExperimentExposure(
                  "wa_web_perf_messages_virtualization_margin_1000",
                  r("gkx")("4011"),
                  r("gkx")("5902"),
                ),
              (a = n.props.interaction) == null ||
                a.addAnnotation({
                  loadingType: "load_recent_msgs",
                  surface: o("WAWebChatGetters").getIsNewsletter(n.props.chat)
                    ? "newsletters"
                    : "chats",
                }),
              c.getEnd(s) < s.length)
            ) {
              var p, _;
              ((p = n.props.interaction) == null || p.completeInteraction(),
                (_ = n.props.interaction) == null ||
                  _.addAnnotation({ interrupted: "already_loaded" }),
                n.setState({ cursor: c.loadAfter(s) }));
              return;
            }
            if (d.isLoadingRecentMsgs || d.isLoadingAroundMsgs) {
              var f, g;
              ((f = n.props.interaction) == null ||
                f.addAnnotation({ interrupted: "loading_other_msgs" }),
                (g = n.props.interaction) == null || g.completeInteraction());
              return;
            }
            var h = new AbortController(),
              y = h.signal,
              C = n.props.getUnmountSignal(),
              b = r("WARaceSignal")([y, C], function (e) {
                return o("WAWebChatLoadMessages")
                  .loadRecentMsgs({
                    chat: l,
                    msgCollection: s,
                    signal: e,
                    threadId: o(
                      "WAWebThreadsGating",
                    ).isThreadLoadingInfraEnabled()
                      ? n.props.threadId
                      : void 0,
                  })
                  .then(function () {
                    var t;
                    if (e.aborted) {
                      var r, a;
                      throw (
                        (r = n.props.interaction) == null ||
                          r.addAnnotation({ interrupted: "aborted" }),
                        (a = n.props.interaction) == null ||
                          a.completeInteraction(),
                        new (o("WAAbortError").AbortError)()
                      );
                    }
                    (c.hasAfter(s)
                      ? n.setState({ cursor: c.loadAfter(s) })
                      : n.state.cursor.getEnd(s) >= s.length &&
                        o("WAWebConversationMsgsUtils").isMostRecentCMC(
                          n.props,
                        ) &&
                        n.forceUpdate(),
                      (t = n.props.interaction) == null ||
                        t.completeInteraction());
                  });
              })
                .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
                .catch(function (e) {
                  var t;
                  ((t = n.props.interaction) == null || t.failInteraction(e),
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose(
                          ["ConversationMsgs:loadRecentMsgs failed\n", ""],
                          ["ConversationMsgs:loadRecentMsgs failed\\n", ""],
                        )),
                      e,
                    ));
                })
                .finally(function () {
                  n.$8 = null;
                });
            n.$8 = { promise: b, controller: h };
          }),
          (n.handleComposeHeightChange = function (e) {
            var t = n.scrollContainer;
            if (t)
              if (e) {
                if (
                  t &&
                  e < 0 &&
                  t.scrollTop === t.scrollHeight - t.clientHeight
                )
                  return;
                n.$50(t, t.scrollTop + e);
              } else {
                var o = t.scrollHeight - (t.scrollTop + t.clientHeight);
                r("WAWebVelocityAnimate")(
                  t,
                  { tween: 18 },
                  {
                    progress: function () {
                      n.$50(t, t.scrollHeight - o - t.clientHeight);
                    },
                    duration: 300,
                  },
                  [0.1, 0.82, 0.25, 1],
                );
              }
          }),
          (n.$59 = function () {
            return r("WANullthrows")(
              n.scrollContainer,
              "unexpected empty scroll container",
            );
          }),
          (n.getScrollBottom = function () {
            var e = n.scrollContainer;
            return e ? e.scrollHeight - (e.scrollTop + e.clientHeight) : 0;
          }),
          (n.$24 = new (o("WAShiftTimer").ShiftTimer)(function () {
            var e;
            (e = n.$16.current) == null || e.setVisibility(!1);
          })),
          (n.$20 = new (o("WAShiftTimer").ShiftTimer)(function (e) {
            var t = e || {},
              r = t.dateMarkerIdx,
              a = t.silent,
              i = a === void 0 ? !1 : a,
              l = n.$17.current;
            if (!(!l || typeof r != "number")) {
              var s = i || Date.now() - (n.$2 || 0) < 200;
              s || n.$43();
              var u = l.getDateMarkerRef(r);
              if (r === -1) {
                var c;
                (c = n.$16.current) == null || c.updateDateMarkerText();
              } else if (u) {
                var d,
                  m = u.getTimestamp(),
                  p = o("WAWebClock").Clock.relativeDateStr(m).toString();
                (d = n.$16.current) == null || d.updateDateMarkerText(p, m);
              }
              if (n.$7 !== r) {
                var _ = l.getDateMarkerRef(n.$7);
                (_ && _.show(), u && u.hide());
              }
            }
          })),
          (n.$62 = function () {
            n.$3.forEach(function (e, t) {
              var r;
              if (
                (r = n.props.chat.groupMetadata) != null &&
                r.unreadMentionMetadata.hasMentionId(t)
              ) {
                var o;
                (o = n.props.chat.groupMetadata) == null ||
                  o.unreadMentionMetadata.removeUnreadMentions(t);
              }
            });
          }),
          (n.isMsgVisible = function (e, t) {
            t === void 0 && (t = !1);
            var r = e,
              a = o("WAWebMsgCollection").MsgCollection.get(r);
            if (a != null && a.isCarouselCard === !0) {
              var i;
              r = (i = a.parentMsgId) != null ? i : r;
            }
            return n.$3.has(r.toString()) && (t ? !0 : n.getMsgComponent(r));
          }),
          (n.getSequentialMsg = function (e) {
            var t = n.getMsgs();
            return t
              ? r("WAArrayFindNext")(t, function (t) {
                  return e.equals(t.id);
                })
              : null;
          }),
          (n.$63 = function (e) {
            n.$21();
          }),
          (n.$35 = function () {
            var e = n.props.chat;
            if (!(n.$5 || (!e.isDirty() && !e.hasUnreadEdit()))) {
              var t = 2500;
              n.$5 = self.setTimeout(function () {
                ((n.$5 = null), n.$25());
              }, t);
            }
          }),
          (n.$36 = function () {
            if (
              !(
                !n.state.unreadCount ||
                !o("WAWebConversationMsgsUtils").isMostRecentCMC(n.props)
              )
            ) {
              var e = n.props.chat;
              (e.unreadCount === 0 &&
                (n.setState({ unreadCount: 0 }), (e.activeUnreadCount = 0)),
                (e.markedUnread = !1));
            }
          }),
          (n.$64 = function () {
            var e = n.props.msgCollection;
            o("WAWebConversationMsgsUtils").isMostRecentCMC(n.props) &&
            n.state.cursor.getEnd(e) >= e.length
              ? n.$30()
              : o("WAWebCmd")
                  .Cmd.openChatBottom({
                    chat: n.props.chat,
                    threadId: n.props.threadId,
                  })
                  .then(function (e) {
                    e &&
                      o("WAWebComposeBoxActions").ComposeBoxActions.focus(
                        n.props.chat,
                      );
                  });
          }),
          (n.$65 = function () {
            var e,
              t = n.props.chat,
              a =
                (e = t.groupMetadata) == null
                  ? void 0
                  : e.unreadMentionMetadata;
            if (a) {
              var i = a.pendingUnreadMentionCount,
                l = o("WAWebMath").roundUp10thPercentage(
                  i,
                  a.getUnreadMentionCount(),
                );
              if (
                (new (o("WAWebGroupCatchUpWamEvent").GroupCatchUpWamEvent)({
                  mentionsCountPendingPercentage: l,
                }).commit(),
                i > 0)
              ) {
                var u = s._(
                  /*BTDS*/ '_j{"*":"{count} \\u0040 messages not synced","_1":"1 \\u0040 message not synced"}',
                  [s._plural(i, "count")],
                );
                (o("WAWebToastManager").ToastManager.open(
                  R.jsx(o("WAWebToast.react").Toast, { msg: u }),
                ),
                  (a.pendingUnreadMentionCount = 0),
                  n.setState({
                    unreadMentionCount: a.getUnreadMentionCount(),
                  }));
                return;
              }
              if (a.unreadMentionCollection.length) {
                var c,
                  d = a.oldestUnreadMention(),
                  m = r("WAWebMsgKey").fromString(d == null ? void 0 : d.id),
                  p = o("WAWebMsgCollection").MsgCollection.get(m.toString()),
                  _ = o("WAWebChatMessageSearch").getSearchContext({
                    chat: t,
                    msgKey: (c = p == null ? void 0 : p.id) != null ? c : m,
                  });
                ((_.highlightMentionMsg = !0),
                  (_.enableAnimation = !1),
                  _ &&
                    o("WAWebCmd").Cmd.openChatAt({
                      chat: n.props.chat,
                      msgContext: _,
                    }));
              }
            }
          }),
          (n.$30 = function (e) {
            var t = n.scrollContainer;
            (t && n.$50(t, t.scrollHeight - t.clientHeight), e && e());
            var a = n.props.getUnmountSignal();
            o("WAWebDocumentFlushed")
              .documentFlushed({ signal: a })
              .then(function () {
                a.aborted ||
                  n.setState({
                    cursor: n.state.cursor.resetBeforeCursor(
                      n.props.msgCollection,
                    ),
                  });
              })
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAAbortError").AbortError,
                  r("WAWebNoop"),
                ),
              );
          }),
          (n.$52 = function (e, t) {
            var a = n.props,
              i = a.chat,
              l = a.msgCollection,
              s = n.state.focusCtx,
              u = n.state.cursor,
              c = l.last();
            if (!o("WAWebConversationMsgsUtils").isMostRecentCMC(n.props)) {
              t && e && o("WAWebMsgGetters").getIsSentByMe(e) && n.$64();
              return;
            }
            var d = {},
              m = document.hasFocus(),
              p = n.$57(),
              _ = p;
            (m && p
              ? ((d.unreadCount = i.activeUnreadCount),
                i.activeUnreadCount === 0 && (d.focusCtx = void 0),
                (u = u.setFocusedMsgKey(l)))
              : c &&
                o("WAWebMsgGetters").getIsSentByMe(c) &&
                t &&
                ((_ = !0),
                n.state.unreadCount && (d.unreadCount = 0),
                (d.focusCtx = void 0),
                (u = u.setFocusedMsgKey(l)),
                n.$64()),
              s && !Object.prototype.hasOwnProperty.call(d, "focusCtx")
                ? (u = u.loadAfter(l, { count: 1 }))
                : (u = u.loadBeforeCapped(l, { count: 1 })),
              u !== n.state.cursor && (d.cursor = u),
              r("isEmptyObject")(d) ||
                ((n.$11 = !0),
                n.setState(d, function () {
                  (t && n.$29({ fetchLastMessage: !1 }),
                    (n.$11 = !1),
                    _ && n.$30(),
                    n.$53());
                })));
          }),
          (n.$34 = function () {
            n.$6 = self.setTimeout(function () {
              var e, t;
              n.state.isNearBottom &&
                !(
                  o("WAWebChatGetters").getIsNewsletter(n.props.chat) === !0 &&
                  ((e = n.state.focusCtx) == null ? void 0 : e.highlightMsg) ===
                    !0 &&
                  ((t = n.state.focusCtx.msg) == null
                    ? void 0
                    : t.isLastMessage()) !== !0
                ) &&
                n.$30();
            }, 1);
          }),
          (n.$56 = function () {
            var e,
              t,
              r = n.props.chat,
              o =
                (e =
                  (t = r.groupMetadata) == null
                    ? void 0
                    : t.unreadMentionMetadata.getUnreadMentionCount()) != null
                  ? e
                  : 0;
            n.setState({ unreadMentionCount: o });
          }),
          (n.$53 = r("WAWebDebounce")(function () {
            if (!n.$11) {
              var e = n.props.chat,
                t = n.$57(),
                a = document.hasFocus();
              n.$25(t, a);
              var i = {};
              if (
                e.unreadCount &&
                !e.pendingSeenCount &&
                o("WAWebConversationMsgsUtils").isMostRecentCMC(n.props)
              ) {
                i.unreadCount = e.unreadCount;
                var l = o("WAWebConversationMsgsUtils").getUnreadFocusCtx(
                  n.props,
                  n.state.unreadCount,
                );
                if (l && i.focusCtx !== n.props.focusCtx) {
                  var s;
                  ((i.focusCtx = l),
                    (i.cursor = n.state.cursor.setFocusedMsgKey(
                      n.props.msgCollection,
                      (s = l.msg) == null ? void 0 : s.id,
                    )));
                }
              } else if (e.unreadCount === 0 && n.state.unreadCount !== 0) {
                var u = n.props.msgCollection.last();
                u &&
                  o("WAWebFrontendMsgGetters").getAsRevoked(u) &&
                  (i.unreadCount = 0);
              }
              var c = t && n.state.unreadCount + 1 === i.unreadCount;
              (((!t &&
                o("WAWebConversationMsgsUtils").isMostRecentCMC(n.props)) ||
                (!e.pendingSeenCount && n.state.newUnread !== e.unreadCount)) &&
                (i.newUnread = e.unreadCount),
                r("isEmptyObject")(i) ||
                  n.setState(i, function () {
                    c && n.$30();
                  }),
                e.unreadCount === 0 &&
                  n.state.unreadCount !== 0 &&
                  (e.activeUnreadCount = n.state.unreadCount));
            }
          }, 150)),
          (n.$54 = function () {
            if (!n.$11) {
              var e = n.props.chat;
              n.setState({ unreadCount: e.activeUnreadCount });
            }
          }),
          (n.$51 = function (e, t) {
            var r = n.state.cursor.ensureValidFocus(n.props.msgCollection);
            ((e == null ? void 0 : e.length) > 0 &&
              (t == null ? void 0 : t.at) === 0 &&
              o("WAWebABProps").getABPropConfigValue("group_history_receive") &&
              r.hasBefore(n.props.msgCollection) &&
              (r = r.loadBefore(n.props.msgCollection, { count: e.length })),
              n.state.cursor !== r
                ? n.setState({ cursor: r })
                : n.forceUpdate());
          }),
          (n.handlePageUpDown = function (e) {
            r("WAWebFocusTracer").focus(n.scrollContainer);
          }),
          (n.scrollMessages = function () {
            var e,
              t = n.$4[n.$4.length - 1];
            if (t) {
              var o = n.$17.current;
              if (o) {
                var a =
                  (e = o.getMsgWrapperRef(t.toString())) == null
                    ? void 0
                    : e.getContainerElement();
                if (a) {
                  var i = n.$4.length === 1 ? a.clientHeight : 0,
                    l = n.scrollContainer;
                  (r("WAWebVelocityAnimate")(a, "stop"),
                    l && r("WAWebVelocityAnimate")(l, "stop"),
                    r("WAWebVelocityAnimate")(a, "scroll", {
                      duration: 300,
                      container: l,
                      offset: i,
                    }));
                }
              }
            }
          }),
          (n.$66 = function (e) {
            e.metaKey ||
              e.ctrlKey ||
              (e.preventDefault(),
              e.key === "Enter" && !e.shiftKey
                ? o("WAWebComposeBoxActions").ComposeBoxActions.send(
                    n.props.chat,
                  )
                : o("WAWebComposeBoxActions").ComposeBoxActions.paste(
                    n.props.chat,
                    String.fromCharCode(e.charCode),
                  ));
          }),
          (n.$67 = function (e) {
            var t, r;
            if (
              ((t =
                (r = document.getSelection()) == null
                  ? void 0
                  : r.toString()) != null
                ? t
                : "") === ""
            ) {
              var a = n.props.chat;
              (!o(
                "WAWebConversationMsgsUtils",
              ).isSimplifiedChatConversationMenuEnabled(a) &&
                !o("WAWebContactGetters").getIsUser(a) &&
                !o("WAWebContactGetters").getIsGroup(a) &&
                !o("WAWebContactGetters").getIsBroadcast(a)) ||
                (e.preventDefault(),
                e.stopPropagation(),
                o(
                  "WAWebChatThreadLogging",
                ).handleActivitiesForChatThreadLogging([
                  {
                    activityType: "chatOverflowClicks",
                    ts: o("WATimeUtils").unixTime(),
                    chatId: a.id,
                  },
                ]),
                n.$19 != null && n.$19(e));
            }
          }),
          (n.$68 = function (e) {
            n.$19 = e;
          }),
          (n.$69 = function (e) {
            (e.preventDefault(),
              o("WAWebComposeBoxActions").ComposeBoxActions.sendPaste(
                n.props.chat,
                e,
              ));
          }),
          (n.$44 = function () {
            n.props.notifyChatRendered &&
              n.props.notifyChatRendered(n.getMsgs());
          }),
          (n.$39 = function () {
            var e = n.props.msgCollection,
              t = n.state.cursor;
            t.hasBefore(e) && n.setState({ cursor: t.loadBefore(e) });
          }),
          (n.$40 = function () {
            var e,
              t = n.props.msgCollection;
            n.setState(
              {
                cursor: n.state.cursor.init(
                  (e = t.last()) == null ? void 0 : e.id,
                  t,
                ),
              },
              function () {
                n.props.chat.unreadCount === 0 && n.$64();
              },
            );
          }));
        var a = e.chat,
          i = a.pendingSeenCount ? 0 : a.unreadCount,
          l = 0;
        if (o("WAWebChatGetters").getIsGroup(a)) {
          var u, p;
          l =
            (u =
              (p = a.groupMetadata) == null
                ? void 0
                : p.unreadMentionMetadata.getUnreadMentionCount()) != null
              ? u
              : 0;
        }
        return (
          (n.state = babelHelpers.extends(
            {},
            o("WAWebConversationMsgsUtils").getInitialCursorAndFocusContext(
              e,
              i,
            ),
            {
              unreadCount: i,
              unreadMentionCount: l,
              isNearBottom: !0,
              newUnread: 0,
              contextMenu: null,
              msgLoadState: o("WAWebConversationMsgsUtils").getMsgLoadState(
                e.msgCollection,
              ),
              lastSelectable: e.selectable,
              lastChat: e.chat,
              lastMsgCollection: e.msgCollection,
              lastFocusCtx: e.focusCtx,
              lastThreadId: e.threadId,
            },
          )),
          n
        );
      }
      babelHelpers.inheritsLoose(a, t);
      var i = a.prototype;
      return (
        (i.componentWillUnmount = function () {
          if (
            (this.$9 != null && this.$9(),
            this.$20.cancel(),
            this.$21.cancel(),
            this.$22.cancel(),
            this.$23.cancel(),
            this.$24.cancel(),
            this.$5 && self.clearTimeout(this.$5),
            this.$6 && self.clearTimeout(this.$6),
            this.$25(),
            (this.props.chat.markedUnread = !1),
            o("WAWebChatGetters").getIsGroup(this.props.chat))
          ) {
            var e;
            (e = this.props.chat.groupMetadata) == null ||
              e.unreadMentionMetadata.reset();
          }
          ((this.props.chat.activeUnreadCount = 0), this.$26());
        }),
        (i.$27 = function () {
          var e = this.props.chat;
          o("WAWebChatGetters").getIsNewsletter(e) &&
            o(
              "WAWebNewsletterExtendedGatingUtils",
            ).isNewsletterReactionEnabled() &&
            o("WAWebNewsletterGetMessageUpdatesAction").maybeUpdateMsgsAddOns(
              e.msgs.getModelsArray(),
              e,
            );
        }),
        (i.$28 = function () {
          var e = this.props.chat;
          o("WAWebChatGetters").getIsNewsletter(e) &&
            o("WAWebNewsletterLiveUpdatesManager").LiveUpdatesManager.subscribe(
              e.id,
            );
        }),
        (i.$26 = function () {
          o(
            "WAWebNewsletterLiveUpdatesManager",
          ).LiveUpdatesManager.unsubscribe();
        }),
        (i.componentDidMount = function () {
          var e = this,
            t,
            n = this.props,
            a = n.chat,
            i = n.listeners;
          (this.$28(),
            this.$27(),
            this.$29({ fetchLastMessage: !0 }),
            i.add(
              (t = o("WAWebCmd")).Cmd,
              "scroll_chat_to_bottom",
              function (t) {
                e.$30(t);
              },
            ),
            i.add(t.Cmd, "scroll_messages", this.scrollMessages),
            i.add(t.Cmd, "scroll_chat_by_height", function (t) {
              e.$31(t);
            }),
            i.add(t.Cmd, "panes_will_change", this.$32),
            i.add(t.Cmd, "panes_did_change", this.$33),
            i.add(t.Cmd, "scroll_to_focused_msg", function (t) {
              ((e.$1 = Date.now()), t());
            }),
            i.add(t.Cmd, "reaction_changed_last_msg", this.$34),
            i.add(window, "focus", this.$35),
            i.add(window, "blur", this.$36),
            i.add(window, "resize", this.$22),
            i.add(window, "resize", this.$23),
            i.add(
              o("WAWebMsgCollection").MsgCollection,
              "change:msgKey",
              this.$37,
            ),
            i.add(
              t.Cmd,
              "new_history_sync_chunk_processed_from_bridge",
              this.$38,
            ),
            i.add(a, "msgs:preloaded", this.$39),
            i.add(a, "msgs:history_repaired", this.$40),
            i.add(t.Cmd, "group_notification_context_card_rendered", this.$41),
            this.$42(this.props));
          var l = this.props.getUnmountSignal();
          (o("WAWebDocumentFlushed")
            .documentFlushed({ signal: l })
            .then(function () {
              l.aborted || e.$43();
            })
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAAbortError").AbortError,
                r("WAWebNoop"),
              ),
            ),
            this.props.updateOpenedChatInfo({ chat: a }),
            o("WAWebUpdateUnreadChatAction").sendSeen({
              chat: a,
              threadId: this.props.threadId,
            }),
            o("WAWebChatAssignmentUtils").canAssignChats() &&
              a.isAssignedToMe &&
              a.unopenedByAssignedAgent &&
              o("WAWebBizChatAssignmentOpenedAction").markChatAsOpened(a, !0),
            this.$21(),
            this.$44());
        }),
        (a.getDerivedStateFromProps = function (t, n) {
          var e = {
            lastSelectable: t.selectable,
            lastChat: t.chat,
            lastMsgCollection: t.msgCollection,
            lastFocusCtx: t.focusCtx,
            lastThreadId: t.threadId,
          };
          return (
            t.selectable === n.lastSelectable &&
              (t.chat !== n.lastChat ||
                t.msgCollection !== n.lastMsgCollection ||
                t.focusCtx !== n.lastFocusCtx ||
                t.threadId !== n.lastThreadId) &&
              (e = babelHelpers.extends(
                {},
                e,
                {
                  msgLoadState: o("WAWebConversationMsgsUtils").getMsgLoadState(
                    t.msgCollection,
                  ),
                },
                o("WAWebConversationMsgsUtils").getInitialCursorAndFocusContext(
                  t,
                  n.unreadCount,
                ),
              )),
            e
          );
        }),
        (i.shouldComponentUpdate = function (n, o) {
          if (!r("shallowEqual")(n, this.props)) return !0;
          var t = this.state,
            a = t.msgLoadState,
            i = babelHelpers.objectWithoutPropertiesLoose(t, e),
            l = o.msgLoadState,
            s = babelHelpers.objectWithoutPropertiesLoose(o, u);
          return !r("shallowEqual")(l, a) || !r("shallowEqual")(s, i);
        }),
        (i.componentDidUpdate = function (t) {
          (t.selectable === this.props.selectable &&
            (t.chat !== this.props.chat ||
              t.msgCollection !== this.props.msgCollection ||
              t.focusCtx !== this.props.focusCtx) &&
            (this.$8 && this.$8.controller.abort(), this.$42(this.props)),
            t.chat !== this.props.chat && (this.$26(), this.$28()));
          var e = this.props.chat;
          (this.$45(t.chat === e),
            this.props.updateOpenedChatInfo({ chat: e }),
            t.msgCollection !== this.props.msgCollection &&
              (this.$29({ fetchLastMessage: !0 }), this.$21()),
            this.$44());
        }),
        (i.$29 = function (t) {
          var e = t.fetchLastMessage;
          r("WAWebWid").isNewsletter(this.props.chat.id) &&
            o(
              "WAWebNewsletterRepairMsgHistoryAction",
            ).repairNewsletterMsgHistory({
              chat: this.props.chat,
              msgCollection: this.props.msgCollection,
              unmountSignal: this.props.getUnmountSignal(),
              fetchLastMessage: e,
            });
        }),
        (i.$48 = function (t, n) {
          var e = t.scrollTop,
            r = t.scrollHeight,
            o = t.clientHeight,
            a = r - (e + o);
          return r - (n.offsetTop + n.clientHeight + a);
        }),
        (i.$49 = function (t, n, r) {
          var e = n.offsetTop,
            o = n.clientHeight,
            a = e + o + r - t.clientHeight;
          this.$50(t, a);
        }),
        (i.getRenderedMessageCount = function () {
          return this.getMsgs().length;
        }),
        (i.hasMoreMessagesOnIslandAbove = function () {
          return this.$12 > 0;
        }),
        (i.hasMoreMessagesOnIslandBelow = function () {
          var e = this.getRenderedMessageCount();
          return e > this.$12 + P;
        }),
        (i.setScrollBottom = function (t) {
          var e = this.scrollContainer;
          e && this.$50(e, e.scrollHeight - t - e.clientHeight);
        }),
        (i.$50 = function (t, n) {
          ((this.$2 = Date.now()), t && (t.scrollTop = n));
        }),
        (i.focus = function () {
          var e,
            t =
              (e = this.state.focusCtx) == null || (e = e.msg) == null
                ? void 0
                : e.id.toString();
          if (t != null) {
            var n,
              r,
              o =
                (n = this.$17.current) == null ? void 0 : n.getMsgWrapperRef(t);
            o == null || (r = o.getContainerElement()) == null || r.focus();
          }
        }),
        (i.$43 = function () {
          var e;
          ((e = this.$16.current) == null || e.setVisibility(!0),
            this.$24.debounce(I));
        }),
        (i.$57 = function () {
          var e = this.scrollContainer;
          return e
            ? e.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE * 3 >
                e.scrollHeight - e.clientHeight
            : !1;
        }),
        (i.getMsgs = function (t) {
          var e = this;
          t === void 0 && (t = !1);
          var n = t ? Date.now() : 0,
            r = this.props,
            a = r.focusCtx,
            i = r.msgCollection,
            l = r.threadId,
            s = this.state,
            u = s.cursor,
            c = s.msgLoadState;
          if (a && c.isLoadingAroundMsgs) return [];
          var d = new (o("WAWebChatMsgsCollection").ChatMsgsCollection)();
          d.set(
            i.filter(function (e) {
              return o("WAWebConversationMsgsUtils").isMsgVisibleInConversation(
                e,
                l,
                i,
              );
            }),
          );
          var m = d
            .toArray()
            .slice(u.getStart(d), u.getEnd(d))
            .map(function (e) {
              return e.safe();
            })
            .filter(function (t) {
              var n;
              return o(
                "WAWebGetBrazilnteractiveActions",
              ).shouldHideOffsiteCardPayConfirmation(t) ||
                (t.type === o("WAWebMsgType").MSG_TYPE.GP2 &&
                  t.subtype === "create" &&
                  !o("WAWebUserPrefsMeUser").isMeAccount(
                    (n = e.props.chat.groupMetadata) == null ? void 0 : n.owner,
                  ))
                ? !1
                : !t.pendingDeleteForMe;
            });
          if (
            (o(
              "WAWebNonMessageDataRequestPlaceholderMessageResendUtils",
            ).handlePlaceholderMsgsSeen(m, t),
            t && (m = this.$60(m)),
            t && n > 0)
          ) {
            var _ = Date.now() - n;
            _ > 500 &&
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[ConversationMsgs] Slow getMsgs in render: ",
                    "ms, ",
                    " msgs",
                  ])),
                _,
                m.length,
              );
          }
          return m;
        }),
        (i.$60 = function (t) {
          var e = this.state.cursor.before + this.state.cursor.after;
          if (t.length <= P) return ((this.$12 = 0), (this.$13 = e), t);
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[ConversationMsgs][applyMessagesIsland] msgs len = ",
                "",
              ])),
            t.length,
          );
          var n = Math.max(e - this.$13, $),
            r;
          if (this.$14)
            ((r = Math.max(0, this.$12 - n)),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[ConversationMsgs][applyMessagesIsland] setting new start up ",
                    "",
                  ])),
                r,
              ));
          else {
            var a = Math.max(0, t.length - P);
            ((r = Math.min(a, this.$12 + n)),
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[ConversationMsgs][applyMessagesIsland] setting new start down ",
                    "",
                  ])),
                r,
              ));
          }
          return (
            (this.$12 = Math.max(0, Math.min(r, t.length - P))),
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[ConversationMsgs][applyMessagesIsland] setting currentIslandStart ",
                  "",
                ])),
              this.$12,
            ),
            (this.$13 = e),
            t.slice(this.$12, this.$12 + P)
          );
        }),
        (i.$61 = function (t) {
          if (
            o(
              "WAWebCongratulationsAnimationsGatingUtils",
            ).isCongratulationsAnimationsEnabled()
          ) {
            var e,
              n = o("WAWebFrontendMsgGetters").getChat(t),
              r = o("WAWebFrontendMsgGetters").getCelebrationAnimationCandidate(
                t,
              );
            if (r == null || o("WAWebContactGetters").getIsMe(n.contact))
              return;
            var a =
              n.animationCandidateData != null
                ? t.t >
                  ((e = n.animationCandidateData) == null
                    ? void 0
                    : e.msgTimestampSeconds)
                : t.t > n.celebrationAnimationLastPlayed;
            a &&
              n.setAnimationCandidateData({
                animationType: r,
                msgTimestampSeconds: t.t,
              });
          }
        }),
        (i.$45 = function (t) {
          var e = this.$17.current;
          if (!e) {
            this.$3.clear();
            return;
          }
          for (
            var a = [],
              i = e.props.msgs,
              l = new Map(),
              s = {},
              u = 0,
              c = i.length - 1;
            u < c;
          ) {
            var d = Math.floor((u + c) / 2),
              m = i[d].id.toString(),
              p = e.getMsgWrapperRef(m);
            e.getMsgVisibility(p).visibility ===
            o("WAWebMessagePosition").MSG_VISIBILITY.ABOVE
              ? (u = d + 1)
              : (c = d);
          }
          for (var _ = 0, f = u; f < i.length; f++) {
            var g = i[f].id.toString(),
              h = e.getMsgWrapperRef(g);
            if (!h) {
              _++;
              continue;
            }
            var C = e.getMsgVisibility(h);
            if (
              C.visibility !== o("WAWebMessagePosition").MSG_VISIBILITY.VISIBLE
            )
              break;
            ((s[g] = { offset: C.offset, t: i[f].t }),
              l.set(g, h),
              a.push(i[f].id),
              this.$61(i[f].unsafe()));
          }
          if (
            (_ > 0 &&
              o("WALogger").ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " msgRef(s) not found!",
                  ])),
                _,
              ),
            !!this.scrollContainer)
          ) {
            var b = this.scrollContainer.scrollTop;
            ((u = 0), (c = Object.keys(e.getRenderedDateMarkers()).length - 1));
            var v = e.getDateMarkerRef(0),
              S = v && v.getElement();
            if (S && S.offsetTop <= b + T)
              for (; u < c; ) {
                var R = Math.ceil((u + c) / 2),
                  L = e.getDateMarkerRef(R);
                if (!L)
                  throw r("err")(
                    "DateMarkerRef: " +
                      R +
                      " not found. " +
                      Object.keys(e.getRenderedDateMarkers()).toString() +
                      "}",
                  );
                var E = L.getElement();
                E && E.offsetTop > b + T ? (c = R - 1) : (u = R);
              }
            else u = -1;
            if (
              (this.$20.onOrBefore(0, { dateMarkerIdx: u, silent: t }),
              (this.$7 = u),
              this.pauseHiddenGifs(this.$3, l),
              (this.$3 = l),
              (this.$4 = a),
              n("cr:12474") == null || n("cr:12474").setCenterVisibleMsgId(a),
              o("WAWebChatGetters").getIsGroup(this.props.chat) && this.$62(),
              this.props.updateOpenedChatInfo({
                renderedMsgsInfo: s,
                visibleMsgOrder: a,
                clientHeight: this.scrollContainer
                  ? this.scrollContainer.clientHeight
                  : 0,
              }),
              o("WAWebChatGetters").getIsGroup(this.props.chat))
            ) {
              var k, I;
              (k = (I = this.props).updateCanShowSpamPanel) == null ||
                k.call(I, !this.checkIfGroupNotificationContextCardDisplayed());
            }
          }
        }),
        (i.getMsgComponent = function (t) {
          var e = this.$17.current;
          if (e) return e.getMsgComponentRef(t.toString());
        }),
        (i.pauseHiddenGifs = function (t, n) {
          var e = this;
          t.forEach(function (t, r) {
            if (!n.has(r)) {
              var o = e.props.msgCollection.get(r);
              if ((o == null ? void 0 : o.isGif) === !0) {
                var a = e.$17.current,
                  i = a == null ? void 0 : a.getMsgComponentRef(r);
                (i == null ? void 0 : i.pause) != null && i.pause();
              }
            }
          });
        }),
        (i.$25 = function (t, n) {
          var e = t,
            r = n,
            a = this.props,
            i = a.chat,
            l = a.msgCollection,
            s = this.state.cursor;
          if (
            !(
              !(
                i.isDirty() &&
                o("WAWebConversationMsgsUtils").isMostRecentCMC(this.props) &&
                s.getEnd(l) >= l.length
              ) && !i.hasUnreadEdit()
            ) &&
            (typeof r == "undefined" && (r = document.hasFocus()),
            !!r && (typeof e == "undefined" && (e = this.$57()), !!e))
          )
            return (
              o("WAWebUpdateUnreadChatAction").sendSeenDebounced({
                chat: i,
                threadId: this.props.threadId,
              }),
              !0
            );
        }),
        (i.checkIfGroupNotificationContextCardDisplayed = function () {
          try {
            var e;
            return (
              this.$18.current != null &&
              ((e = this.$17.current) == null
                ? void 0
                : e.getMsgVisibility(this.$18.current).visibility) ===
                o("WAWebMessagePosition").MSG_VISIBILITY.VISIBLE
            );
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[ConversationMsgs] Error while checking if group notification context card is displayed: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs(
                  "group-notification-context-card-visibility-check-error",
                ),
              !1
            );
          }
        }),
        (i.$70 = function () {
          var e = this.props,
            t = e.chat,
            n = e.msgCollection,
            r = this.state.msgLoadState,
            a = this.state.cursor.getStart(n) > 0,
            i = !r.noEarlierMsgs,
            l =
              t.endOfHistoryTransferType != null &&
              o("WAWebHistorySyncUtils").primaryHasMoreMessagesReadyToLoad(
                t.endOfHistoryTransferType,
              ),
            s = o("WAWebConversationMsgsUtils").isMostRecentCMC(this.props),
            u = o("WAWebConversationMsgsUtils").noEarlierMsgStateIsIncorrect(
              t,
              s,
              r,
              this.props.threadId,
            ),
            c = a || i || l || u;
          return (
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[ConversationMsgs] loadEarlier decision: shouldShow=",
                  ", hasMoreMsgsAboveCursor=",
                  ", hasEarlierMsgs=",
                  ", hasMoreHistorySyncMsgs=",
                  ", noEarlierMsgIncorrect=",
                  ", isMostRecentCMC=",
                  ", noEarlierMsgs=",
                  ", endOfHistoryTransferType=",
                  ", cursorStart=",
                  ", msgCollectionLength=",
                  "",
                ])),
              String(c),
              String(a),
              String(i),
              String(l),
              String(u),
              String(s),
              String(r.noEarlierMsgs),
              String(t.endOfHistoryTransferType),
              String(this.state.cursor.getStart(n)),
              String(n.length),
            ),
            c
          );
        }),
        (i.render = function () {
          var e,
            t = this.props,
            n = t.bottomBanners,
            a = t.chat,
            i = t.msgCollection,
            l = t.onMessageSelect,
            s = t.selectable,
            u = t.threadId,
            c = this.state,
            d = c.focusCtx,
            m = c.msgLoadState,
            p = c.unreadMentionCount,
            _ = !!d,
            f = this.getMsgs(!0),
            g =
              f.length > 0 &&
              o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(f[0]) !=
                null,
            h = R.jsx(r("WAWebMessageList.react"), {
              ref: this.$17,
              getScrollContainer: this.$59,
              chat: a,
              unreadCount: this.state.unreadCount,
              selectable: s,
              onMessageSelect: l,
              msgs: f,
              focusedMsgCtx: d,
              selectedMessages: this.props.selectedMessages,
              isMsgVisible: this.isMsgVisible,
              getSequentialMsg: this.getSequentialMsg,
              isLoadingEarlierMsgs: m.isLoadingEarlierMsgs,
              isNearBottom: this.state.isNearBottom,
            }),
            y,
            C,
            b;
          _ && m.isLoadingAroundMsgs
            ? (y = R.jsx(r("WAWebConversationLoadMoreMessages.react"), {
                direction: "around",
                isMostRecentCMC: o(
                  "WAWebConversationMsgsUtils",
                ).isMostRecentCMC(this.props),
                loadMoreMsgs: r("WAWebNoop"),
                isLoadingEarlierMsgs: m.isLoadingEarlierMsgs,
                isLoadingRecentMsgs: m.isLoadingRecentMsgs,
                isLoadingAroundMsgs: m.isLoadingAroundMsgs,
                isRepairingMsgHistory: m.isRepairingMsgHistory,
                chat: a,
                threadId: u,
              }))
            : ((this.$70() || u != null) &&
                (C = R.jsx(r("WAWebConversationLoadMoreMessages.react"), {
                  direction: "earlier",
                  isMostRecentCMC: o(
                    "WAWebConversationMsgsUtils",
                  ).isMostRecentCMC(this.props),
                  loadMoreMsgs: this.loadEarlierMsgs,
                  isLoadingEarlierMsgs: m.isLoadingEarlierMsgs,
                  isLoadingRecentMsgs: m.isLoadingRecentMsgs,
                  isLoadingAroundMsgs: m.isLoadingAroundMsgs,
                  mdHistorySyncTransferState: a.endOfHistoryTransferType,
                  isRepairingMsgHistory: m.isRepairingMsgHistory,
                  chat: a,
                  chatId: a.id,
                  threadId: u,
                })),
              u == null &&
                (this.state.cursor.getEnd(i) < i.length ||
                  !o("WAWebConversationMsgsUtils").isMostRecentCMC(
                    this.props,
                  ) ||
                  m.isRepairingMsgHistory) &&
                (b = R.jsx(r("WAWebConversationLoadMoreMessages.react"), {
                  direction: "recent",
                  isMostRecentCMC: o(
                    "WAWebConversationMsgsUtils",
                  ).isMostRecentCMC(this.props),
                  loadMoreMsgs: this.$58,
                  isLoadingEarlierMsgs: m.isLoadingEarlierMsgs,
                  isLoadingRecentMsgs: m.isLoadingRecentMsgs,
                  isLoadingAroundMsgs: m.isLoadingAroundMsgs,
                  isRepairingMsgHistory: m.isRepairingMsgHistory,
                })));
          var S = R.jsx(
            "div",
            babelHelpers.extends(
              {},
              (v || (v = r("stylex"))).props(
                N.jumpToContainer,
                o("WAWebUISpacing").uiMargin.horizAuto,
              ),
              {
                children: R.jsx(r("WAWebJumpToButtons.react"), {
                  chat: a,
                  unreadMentionCount: p,
                  newUnread: this.state.newUnread,
                  isNearBottom: this.state.isNearBottom,
                  handleJumpToBottom: this.$64,
                  handleJumpToMention: this.$65,
                  isMostRecentAndNotLoading:
                    !m.isLoadingAroundMsgs &&
                    !o("WAWebConversationMsgsUtils").isMostRecentCMC(
                      this.props,
                    ),
                }),
              },
            ),
          );
          return R.jsxs(r("WAWebCopyPasteCopyableArea.react"), {
            className: "x5yr21d",
            children: [
              R.jsx(r("WAWebMessageStickyDateMarker.react"), {
                ref: this.$16,
                scrollContainerRef: this.scrollContainer,
                chat: this.props.chat,
              }),
              S,
              R.jsxs("div", {
                className:
                  "x10l6tqk x13vifvy x1o0tod xupqr0c x9f619 x78zum5 xdt5ytf xh8yej3 x5yr21d x6ikm8r x1rife3k xjbqb8w x1ewm37j",
                "data-testid": void 0,
                "data-scrolltracepolicy": "wa.web.conversation.messages",
                ref: this.$15,
                onScroll: this.$63,
                onKeyPress: this.$66,
                onContextMenu: this.$67,
                onPaste: this.$69,
                tabIndex: 0,
                children: [
                  R.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      {
                        0: { className: "x12lumcd xx9tyur" },
                        2: { className: "x12lumcd xx9tyur x1lz4jft" },
                        1: { className: "x12lumcd xx9tyur xeo6yiz" },
                        3: { className: "x12lumcd xx9tyur xeo6yiz" },
                      }[
                        (!!g << 1) |
                          (!!(
                            g &&
                            ((e = this.context) == null ? void 0 : e.theme) ===
                              "dark"
                          ) <<
                            0)
                      ],
                    ),
                  ),
                  y,
                  C,
                  h,
                  b,
                  R.jsx("div", { children: n }),
                ],
              }),
              R.jsx(
                o("WAWebConversationMsgsMenuV2.react").ConversationMsgsMenuV2,
                {
                  chat: a,
                  selectable: s,
                  onSelect: this.props.onSelectMessages,
                  onCancelSelect: this.props.onCancelSelectMessages,
                  scrollContainerRef: this.scrollContainer,
                  onMenuReady: this.$68,
                },
              ),
            ],
          });
        }),
        a
      );
    })(E);
    w.contextType = o("WAWebThemeContext").ThemeContext;
    var A = r("WAWebUnmountSignalHoc_DEPRECATED.react")(
        o("WAWebListenerHoc_DEPRECATED").ListenerHOC(w),
      ),
      F = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getRenderedMessageCount = function () {
            return this.getComponent().getRenderedMessageCount();
          }),
          (n.getScrollBottom = function () {
            return this.getComponent().getScrollBottom();
          }),
          (n.onComposeHeightChange = function (t) {
            this.getComponent().handleComposeHeightChange(t);
          }),
          (n.onPageUpDown = function (t) {
            this.getComponent().handlePageUpDown(t);
          }),
          (n.setScrollBottom = function (t) {
            this.getComponent().setScrollBottom(t);
          }),
          (n.focus = function () {
            this.getComponent().focus();
          }),
          (n.checkIfGroupNotificationContextCardDisplayed = function () {
            return this.getComponent().checkIfGroupNotificationContextCardDisplayed();
          }),
          t
        );
      })(A);
    l.default = F;
  },
  226,
);
