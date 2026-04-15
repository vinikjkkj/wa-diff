__d(
  "WAWebConversationLoadMoreMessagesHistorySync",
  [
    "fbt",
    "WALogger",
    "WAWebAlertSyncPausedIcon.react",
    "WAWebChatConstants",
    "WAWebClock",
    "WAWebConfirmPopup.react",
    "WAWebHistorySyncInProgressPopup.react",
    "WAWebHistorySyncOnDemandEvents",
    "WAWebHistorySyncPausedPopup.react",
    "WAWebHistorySyncProgressGetters",
    "WAWebHistorySyncUIText",
    "WAWebIcSyncIcon.react",
    "WAWebLinkDeviceCommonInstructions.react",
    "WAWebModalManager",
    "WAWebModalManagerUtils",
    "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest",
    "WAWebSpinner.react",
    "WAWebSyncGatingUtils",
    "WAWebUserPrefsHistorySync",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebHistorySyncProgressValues",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d.useState;
    function _() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s._(/*BTDS*/ "Tap {=m1} and find this device.", [
              s._implicitParam(
                "=m1",
                m.jsx(o("WAWebLinkDeviceCommonInstructions.react").Strong, {
                  children: s._(/*BTDS*/ "Linked devices"),
                }),
              ),
            ])),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function f() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s._(
              /*BTDS*/ "In {=m1} settings enable {=m4}, and then try again.",
              [
                s._implicitParam(
                  "=m1",
                  m.jsx(o("WAWebLinkDeviceCommonInstructions.react").Strong, {
                    children: s._(/*BTDS*/ "Chat history"),
                  }),
                ),
                s._implicitParam(
                  "=m4",
                  m.jsx(o("WAWebLinkDeviceCommonInstructions.react").Strong, {
                    children: s._(/*BTDS*/ "All chat history"),
                  }),
                ),
              ],
            )),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    var g = { popoverButtonGroup: { paddingTop: "x1h678fw", $$css: !0 } };
    function h() {
      return s._(/*BTDS*/ "Click here to get older messages from your phone.");
    }
    function y() {
      var e = m.jsx(r("WDSText.react"), {
          type: "Headline2",
          colorName: "contentDefault",
          children: s._(
            /*BTDS*/ "This device needs your permission to load older messages.",
          ),
        }),
        t = [
          m.jsx(
            o("WAWebLinkDeviceCommonInstructions.react")
              .LinkDeviceInstructionOpenWhatsAppOnPhone,
            {},
            "step1",
          ),
          m.jsx(
            o("WAWebLinkDeviceCommonInstructions.react")
              .LinkDeviceInstructionNavigateToSettings,
            {},
            "step2",
          ),
          m.jsx(_, {}, "step3"),
          m.jsx(f, {}, "step4"),
        ],
        n = t.length - 1;
      o("WAWebModalManager").ModalManager.open(
        m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: {
            surface: "unknown",
            viewName: "load-more-messages",
          },
          title: e,
          onOK: o("WAWebModalManagerUtils").closeModalManager,
          buttonGroupStyle: g.popoverButtonGroup,
          children: m.jsx("ol", {
            className: "x3yw8vx xlese2p",
            children: t.map(function (e, t) {
              return m.jsx(
                "li",
                babelHelpers.extends(
                  {},
                  { 0: {}, 1: { className: "xefnzgg" } }[(t !== n) << 0],
                  { children: e },
                ),
                "step-" + t,
              );
            }),
          }),
        }),
      );
    }
    function C(t) {
      var n = t.chatId,
        a = t.mdHistorySyncTransferState,
        i = t.threadId,
        l = o("useWAWebHistorySyncProgressValues").useHistorySyncProgressValues(
          [
            o("WAWebHistorySyncProgressGetters").getInProgress,
            o("WAWebHistorySyncProgressGetters").getPaused,
          ],
        ),
        d = l[0],
        _ = l[1],
        f =
          a ===
          o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType
            .INCOMPLETE,
        g = n == null ? void 0 : n.toJid(),
        C = p(function () {
          return g != null
            ? new Set(
                o(
                  "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                ).inFlightHistorySyncOnDemandRequests.values(),
              ).has(g)
            : !1;
        }),
        b = C[0],
        v = C[1],
        S = p(null),
        R = S[0],
        L = S[1];
      (o("useWAWebListener").useListener(
        o("WAWebHistorySyncOnDemandEvents").WAWebHistorySyncOnDemandEvents,
        "history_sync_on_demand_events:success_history_sync_od",
        function (t) {
          o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled() &&
            t === g &&
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][on demand] success for chat ",
                  "",
                ])),
              n == null ? void 0 : n.toLogString(),
            ),
            v(!1),
            L(!0),
            a ===
              o("WAWebChatConstants")
                .ConversationEndOfHistoryTransferModelPropType
                .COMPLETE_ON_DEMAND_SYNC_WITH_MORE_MSG_ON_PRIMARY_BUT_NO_ACCESS &&
              o(
                "WAWebSyncGatingUtils",
              ).isHistorySyncOnDemandCompleteCompanionEnabled() &&
              y());
        },
      ),
        o("useWAWebListener").useListener(
          o("WAWebHistorySyncOnDemandEvents").WAWebHistorySyncOnDemandEvents,
          "history_sync_on_demand_events:error_history_sync_od",
          function (e) {
            o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled() &&
              e === g &&
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][on demand] fail for chat ",
                    "",
                  ])),
                n == null ? void 0 : n.toLogString(),
              ),
              v(!1),
              L(!1));
          },
        ));
      var E, k, I;
      if (i != null)
        E = s._(/*BTDS*/ "Use WhatsApp on your phone to see older messages.");
      else if (f && d)
        ((E = _
          ? o(
              "WAWebHistorySyncUIText",
            ).SYNCING_PAUSED_CONTEXTUAL_SYSTEM_MESSAGE_TEXT()
          : o(
              "WAWebHistorySyncUIText",
            ).SYNC_IN_PROGRESS_CONTEXTUAL_SYSTEM_MESSAGE_TEXT()),
          (k = _
            ? m.jsx(o("WAWebAlertSyncPausedIcon.react").AlertSyncPausedIcon, {
                width: 14,
                height: 14,
              })
            : m.jsx(o("WAWebIcSyncIcon.react").IcSyncIcon, {
                viewBox: { x: -10, y: -5, width: 32, height: 32 },
              })),
          (I = _
            ? function () {
                o("WAWebModalManager").ModalManager.open(
                  m.jsx(r("WAWebHistorySyncPausedPopup.react"), {}),
                );
              }
            : function () {
                o("WAWebModalManager").ModalManager.open(
                  m.jsx(r("WAWebHistorySyncInProgressPopup.react"), {}),
                );
              }));
      else {
        if (
          o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled() &&
          a != null &&
          !d &&
          !b &&
          !o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils")
            .historySyncOnDemandRequestsFailureRecord.disableRequestSending
        )
          switch (a) {
            case o("WAWebChatConstants")
              .ConversationEndOfHistoryTransferModelPropType
              .COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY:
            case o("WAWebChatConstants")
              .ConversationEndOfHistoryTransferModelPropType
              .COMPLETE_ON_DEMAND_SYNC_WITH_MORE_MSG_ON_PRIMARY_BUT_NO_ACCESS: {
              if (
                a ===
                  o("WAWebChatConstants")
                    .ConversationEndOfHistoryTransferModelPropType
                    .COMPLETE_ON_DEMAND_SYNC_WITH_MORE_MSG_ON_PRIMARY_BUT_NO_ACCESS &&
                !o(
                  "WAWebSyncGatingUtils",
                ).isHistorySyncOnDemandCompleteCompanionEnabled()
              )
                break;
              n != null &&
                (R !== !1
                  ? (E = h())
                  : ((E = s._(
                      /*BTDS*/ "Couldn't get older messages. Open WhatsApp on your phone and click here to try again.",
                    )),
                    (k = m.jsx(
                      o("WAWebAlertSyncPausedIcon.react").AlertSyncPausedIcon,
                      { width: 14, height: 14 },
                    ))),
                (I = function () {
                  (v(!0),
                    L(null),
                    o("WAWebSendNonMessageDataRequest")
                      .sendPeerDataOperationRequest(
                        o("WAWebProtobufsE2E.pb")
                          .Message$PeerDataOperationRequestType
                          .HISTORY_SYNC_ON_DEMAND,
                        { chatId: n },
                      )
                      .catch(function () {
                        (o("WALogger")
                          .ERROR(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "[history sync][on demand] failed to send request for chat ",
                                "",
                              ])),
                            n == null ? void 0 : n.toLogString(),
                          )
                          .sendLogs("history-sync-on-demand-request-failed"),
                          v(!1),
                          L(!1));
                      }));
                }));
              break;
            }
            case o("WAWebChatConstants")
              .ConversationEndOfHistoryTransferModelPropType
              .COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY:
              E = s._(
                /*BTDS*/ "Use WhatsApp on your phone to see older messages.",
              );
              break;
            case o("WAWebChatConstants")
              .ConversationEndOfHistoryTransferModelPropType
              .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY:
            case o("WAWebChatConstants")
              .ConversationEndOfHistoryTransferModelPropType.INCOMPLETE:
            case o("WAWebChatConstants")
              .ConversationEndOfHistoryTransferModelPropType
              .NOT_INCLUDED_IN_HIST_SYNC:
              break;
          }
        if (E == null) {
          var T = o("WAWebClock").Clock.relativeDateStr(
            o("WAWebUserPrefsHistorySync").getHistorySyncEarliestDate(),
          );
          E = s._(
            /*BTDS*/ "Use WhatsApp on your phone to see older messages from before {date}.",
            [s._param("date", T)],
          );
        }
      }
      if (o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled() && b)
        return m.jsx("div", {
          className: "x78zum5 x1okw0bk xl56j7k xexx8yu xyri2b xvg22vi x1c1uobl",
          children: m.jsx("div", {
            className:
              "x78zum5 x6s0dn4 xl56j7k x187nhsf xn3w4p2 xdj266r x11t971q xat24cr xvc5jky xhslqc4 x1280gxy x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1wpep30",
            children: m.jsx(o("WAWebSpinner.react").Spinner, {
              stroke: 6,
              size: 24,
              color: "highlight",
            }),
          }),
        });
      var D = m.jsxs("div", {
          className: "x78zum5 x6s0dn4 x1r0jzty x17zd0t2",
          children: [k, m.jsx("div", { children: E })],
        }),
        x = {
          0: "x9f619 x1rg5ohu x1okw0bk x193iq5w x123j3cw xpdmqnj x10b6aqq x1g0dm76 x13a8xbf xdod15v x2b8uid xyi3aci xwf5gio x1p453bz x1suzm8a",
          2: "x1bvqhpb x6f6fmj x1b9z3ur x9f619 x1rg5ohu x1okw0bk x193iq5w x123j3cw xpdmqnj x10b6aqq x1g0dm76 x13a8xbf xdod15v x2b8uid xyi3aci xwf5gio x1p453bz x1suzm8a",
          1: "x1bvqhpb x1280gxy x1b9z3ur x9f619 x1rg5ohu x1okw0bk x193iq5w x123j3cw xpdmqnj x10b6aqq x1g0dm76 x13a8xbf xdod15v x2b8uid xyi3aci xwf5gio x1p453bz x1suzm8a",
          3: "x6f6fmj x1bvqhpb x1280gxy x1b9z3ur x9f619 x1rg5ohu x1okw0bk x193iq5w x123j3cw xpdmqnj x10b6aqq x1g0dm76 x13a8xbf xdod15v x2b8uid xyi3aci xwf5gio x1p453bz x1suzm8a",
        }[(!f << 1) | (!!f << 0)],
        $ =
          I != null
            ? m.jsx("button", { className: x, onClick: I, children: D })
            : m.jsx("div", { className: x, children: D });
      return m.jsx("div", {
        className: "x78zum5 x1okw0bk xl56j7k xqy66fx xyri2b x1hhzuzn x1c1uobl",
        children: $,
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
