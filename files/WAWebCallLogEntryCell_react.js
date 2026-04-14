__d(
  "WAWebCallLogEntryCell.react",
  [
    "fbt",
    "WAWebBoolFunc",
    "WAWebCallLogEntryChatImage.react",
    "WAWebCallLogTitle.react",
    "WAWebCallLogUtils",
    "WAWebChatCell.react",
    "WAWebChatSendMessages",
    "WAWebChatTimestamp.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebVoipActionRequestOpenChat",
    "WAWebVoipCallsTabPanelManager",
    "WAWebVoipCoexCallingPermissionDisabledModal.react",
    "WAWebVoipGatingUtils",
    "WAWebVoipStartCall",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "WDSIconIcCall.react",
    "WDSIconIcChat.react",
    "WDSIconIcDelete.react",
    "WDSIconIcLink.react",
    "WDSIconIcPhoneCallbackFilled.react",
    "WDSIconIcVideocam.react",
    "WDSIconWdsIcCallVideoMadeFilled.react",
    "WDSIconWdsIcCallVideoReceivedFilled.react",
    "WDSIconWdsIcPhoneCallMadeFilled.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "useWAWebActiveSelection",
    "useWAWebMsgValues",
    "useWAWebVoipCanStartCall",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["msg", "testid"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useMemo,
      _ = d.useRef,
      f = {
        miss: { color: "x30a034", $$css: !0 },
        ongoing: { color: "x1v5yvga", $$css: !0 },
      };
    function g(e) {
      var t = e.iconHeight,
        n = e.isCallLink,
        o = e.isFromMe,
        a = e.isMissedCall,
        i = e.isOngoingCall,
        l = i === void 0 ? !1 : i,
        s = e.isVideoCall,
        u = e.xstyle,
        d;
      n === !0
        ? (d = r("WDSIconIcLink.react"))
        : o
          ? (d = r(
              s
                ? "WDSIconWdsIcCallVideoMadeFilled.react"
                : "WDSIconWdsIcPhoneCallMadeFilled.react",
            ))
          : (d = r(
              s
                ? "WDSIconWdsIcCallVideoReceivedFilled.react"
                : "WDSIconIcPhoneCallbackFilled.react",
            ));
      var m;
      l ? (m = f.ongoing) : a && (m = f.miss);
      var p;
      return (
        d === r("WDSIconWdsIcCallVideoReceivedFilled.react")
          ? (p = "video-call-incoming-filled")
          : d === r("WDSIconWdsIcCallVideoMadeFilled.react")
            ? (p = "video-call-outgoing-filled")
            : d === r("WDSIconIcPhoneCallbackFilled.react")
              ? (p = "voice-call-incoming-filled")
              : d === r("WDSIconWdsIcPhoneCallMadeFilled.react") &&
                (p = "voice-call-outgoing-filled"),
        c.jsx(d, { height: t, xstyle: [u, m], testid: void 0 })
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.count,
        n = e.isCallLink,
        a = e.isCallSilenced,
        i = e.isFromMe,
        l = e.isMissedCall,
        u;
      return (
        n === !0
          ? (u = s._(/*BTDS*/ "Call link"))
          : i
            ? (u = s._(/*BTDS*/ "Outgoing"))
            : l
              ? a
                ? (u = s._(/*BTDS*/ "Missed (silenced)"))
                : (u = s._(/*BTDS*/ "Missed"))
              : (u = s._(/*BTDS*/ "Incoming")),
        t > 1 &&
          (u = s._(
            /*BTDS*/ "{call-log-entry-text} ({call-logs-merged-count})",
            [
              s._param("call-log-entry-text", u),
              s._param("call-logs-merged-count", r("WAWebL10N").n(t)),
            ],
          )),
        c.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: u,
          direction: "auto",
          ellipsify: !0,
          xstyle: l && !i && f.miss,
        })
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e, t, n, a, i, l) {
      var u = o("WAWebVoipGatingUtils").isCallInfoOptimizationsEnabled(),
        d = u && !t && !n,
        m = function (t) {
          if (!l) {
            o("WAWebModalManager").ModalManager.open(
              c.jsx(r("WAWebVoipCoexCallingPermissionDisabledModal.react"), {}),
            );
            return;
          }
          i.length > 1
            ? o("WAWebVoipStartCall").startWAWebVoipGroupCallFromWids(
                i,
                t,
                o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALLS_TAB_BOTTOM_SHEET,
                o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                  .NOT_OPENED,
              )
            : a.groupType === void 0
              ? o("WAWebVoipStartCall").startWAWebVoipCall(
                  a.contact.id,
                  t,
                  o("WAWebWamEnumCallFromUi").CALL_FROM_UI
                    .CALLS_TAB_BOTTOM_SHEET,
                  o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                    .NOT_OPENED,
                )
              : o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(
                  a,
                  t,
                  o("WAWebWamEnumCallFromUi").CALL_FROM_UI
                    .CALLS_TAB_BOTTOM_SHEET,
                  o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                    .NOT_OPENED,
                );
        };
      return c.jsxs(r("WDSMenu.react"), {
        children: [
          d &&
            c.jsx(
              r("WDSMenuItem.react"),
              {
                onPress: function () {
                  return o("WAWebVoipActionRequestOpenChat").requestOpenChat(
                    a.id,
                  );
                },
                Icon: r("WDSIconIcChat.react"),
                title: s._(/*BTDS*/ "Message"),
              },
              "message",
            ),
          u &&
            c.jsx(
              r("WDSMenuItem.react"),
              {
                onPress: function () {
                  return m(!0);
                },
                Icon: r("WDSIconIcVideocam.react"),
                title: s._(/*BTDS*/ "Video call"),
              },
              "video-call",
            ),
          u &&
            c.jsx(
              r("WDSMenuItem.react"),
              {
                onPress: function () {
                  return m(!1);
                },
                Icon: r("WDSIconIcCall.react"),
                title: s._(/*BTDS*/ "Voice call"),
              },
              "voice-call",
            ),
          u && c.jsx(r("WDSMenuItem.react"), { type: "separator" }),
          c.jsx(
            r("WDSMenuItem.react"),
            {
              onPress: function () {
                return C(e);
              },
              testid: void 0,
              destructive: !0,
              Icon: r("WDSIconIcDelete.react"),
              title: s._(/*BTDS*/ "Delete"),
            },
            "delete-call-log",
          ),
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      if (e.length !== 0) {
        var t = o("WAWebFrontendMsgGetters").getChat(e[0]);
        o("WAWebChatSendMessages")
          .sendDeleteMsgs(t, { type: "message", list: e }, !1)
          .then(function () {
            (r("WAWebVoipCallsTabPanelManager").trigger(
              "closeCallLogInfoPanel",
            ),
              r("WAWebVoipCallsTabPanelManager").trigger(
                "onWriteCallLogMessage",
              ));
          })
          .catch(function () {
            r("WAWebVoipCallsTabPanelManager").trigger("onWriteCallLogMessage");
          });
      }
    }
    function b(t) {
      var n,
        a = t.msg,
        i = t.testid,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s = l.filterPreset,
        u = l.mergedMsgs,
        d = u.length,
        f = o("useWAWebMsgValues").useMsgValues(a.id, [
          (n = o("WAWebMsgGetters")).getId,
          n.getIsSentByMe,
          n.getIsVideoCall,
          n.getIsMissedCall,
          n.getIsCallSilenced,
          n.getIsCallLink,
          n.getIsAdHocGroupCall,
          n.getCallOutcome,
          n.getCallParticipants,
          n.getFinalCallOutcome,
        ]),
        C = f[0],
        b = f[1],
        v = f[2],
        S = f[3],
        R = f[4],
        L = f[5],
        E = f[6],
        k = f[7],
        I = f[8],
        T = f[9],
        D = o("WAWebCallLogUtils").getIsSelfConnected(I),
        x = r("useWAWebActiveSelection")(l.active, C.toString()),
        $ = x[0],
        P = x[1],
        N = o("WAWebFrontendMsgGetters").getChat(a),
        M = p(
          function () {
            return I != null
              ? I.map(function (e) {
                  return e.participant;
                })
              : [];
          },
          [I],
        ),
        w = o(
          "useWAWebVoipCanStartCall",
        ).useWAWebVoipIsCapiCallingPermissionAllowed(N),
        A = p(
          function () {
            return y(u, E, L, N, M, w);
          },
          [u, E, L, N, M, w],
        ),
        F = _(null),
        O = r("useWDSMenu")({ targetRef: F, menu: A }),
        B = O.closeMenu,
        W = O.isMenuOpen,
        q = O.menuPortal,
        U = O.openMenu;
      m(
        function () {
          P &&
            r("WAWebVoipCallsTabPanelManager").trigger(
              "updateActveCallLogInfo",
              u,
            );
        },
        [u, P],
      );
      var V = function (t) {
          (t.stopPropagation(), t.preventDefault());
        },
        H = function (t) {
          if (W) {
            B();
            return;
          }
          (t.anchor instanceof HTMLElement && (F.current = t.anchor), U());
        },
        G = o("WAWebCallLogUtils").getIsMissedCallOrNotConnected(S, D, b, k, T),
        z = c.jsx(r("WAWebChatTimestamp.react"), { msg: a }),
        j = c.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          children: [
            c.jsx(g, {
              iconHeight: 16,
              isMissedCall: G,
              isVideoCall: v,
              isFromMe: b,
              isCallLink: L != null ? L : !1,
            }),
            "\xA0",
            c.jsx(h, {
              isCallSilenced: R,
              isFromMe: b,
              isMissedCall: G,
              count: d,
              isCallLink: L != null ? L : !1,
            }),
          ],
        }),
        K = function () {
          (l.onClick(),
            r("WAWebVoipCallsTabPanelManager").trigger(
              "openCallLogInfoPanel",
              u,
            ));
        };
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            handlers: { enter: K, space: K },
            onFocus: V,
            ref: $,
            children: c.jsx(r("WAWebChatCell.react"), {
              contextEnabled: o("WAWebBoolFunc").returnTrue,
              contextMenu: W,
              onContext: H,
              active: P,
              image: c.jsx(r("WAWebCallLogEntryChatImage.react"), { msg: a }),
              primary: c.jsx(r("WAWebCallLogTitle.react"), {
                callLogMsg: a,
                filterPreset: s,
              }),
              primaryDetail: z,
              secondary: j,
              onClick: K,
              testid: void 0,
            }),
          }),
          q,
        ],
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.mergedMsgs,
        n = e.testidPrefix;
      if (t.length === 0) return null;
      var r = t[0];
      return c.jsx(b, babelHelpers.extends({}, e, { msg: r, testid: void 0 }));
    }
    ((v.displayName = v.name + " [from " + i.id + "]"),
      (l.CallLogIcon = g),
      (l.CallLogEntryCell = v));
  },
  226,
);
