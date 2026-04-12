__d(
  "WAWebCallLogJoinOngoingCell.react",
  [
    "fbt",
    "WALogger",
    "WAWebBoolFunc",
    "WAWebCallCollection",
    "WAWebCallLogEntryChatImage.react",
    "WAWebCallLogTitle.react",
    "WAWebCallLogUtils",
    "WAWebChatCell.react",
    "WAWebEnvironment",
    "WAWebFacePile.react",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebMsgGetters",
    "WAWebVoipEventConstants",
    "WAWebVoipGatingUtils",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipStartCall",
    "WAWebVoipUiDocPipPortalContainer.react",
    "WAWebVoipUiManager",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "WAWebVoipWaCallEnums",
    "WAWebWamEnumLobbyEntryPointType",
    "WDSButton.react",
    "WDSIconIcCallFilled.react",
    "WDSIconIcVideocamFilled.react",
    "react",
    "useWAWebActiveSelection",
    "useWAWebEventTargetValue",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useMemo,
      m = {
        facePileBorderColor: {
          borderTopColor: "xlbpjqr",
          borderInlineEndColor: "xlt81dz",
          borderBottomColor: "x148b211",
          borderInlineStartColor: "xso6r1",
          $$css: !0,
        },
      };
    function p(t) {
      var n,
        a,
        i,
        l = t.callLogMsg,
        u = t.onClick,
        p = r("useWAWebActiveSelection")(t.active, l.id.toString()),
        _ = p[0],
        f = p[1],
        g = function (t) {
          (t.stopPropagation(), t.preventDefault());
        },
        h = o("WAWebFrontendMsgGetters").getChat(l),
        y = o("useWAWebMsgValues").useMsgValues(l.id, [
          (i = o("WAWebMsgGetters")).getId,
          i.getIsVideoCall,
          i.getCallId,
          i.getIsCallLink,
          i.getCallParticipants,
        ]),
        C = y[0],
        b = y[1],
        v = y[2],
        S = y[3],
        R = y[4],
        L = (a = r("useWAWebEventTargetValue"))(
          o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection,
          "all",
          function () {
            return v != null
              ? o(
                  "WAWebVoipOngoingCallCollection",
                ).WAWebVoipOngoingCallCollection.getByCallId(v)
              : null;
          },
        ),
        E = a(
          r("WAWebCallCollection"),
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
          ),
          function () {
            return r("WAWebCallCollection").activeCall;
          },
        ),
        k = a(
          o("WAWebVoipUiPopoutWindowPortalContainer.react")
            .WAWebVoipUiPopoutWindowEventEmitter,
          "setPopoutWindowProps",
          function () {
            return o(
              "WAWebVoipUiPopoutWindowPortalContainer.react",
            ).getIsCallActiveInPopoutWindow();
          },
        ),
        I = a(
          o("WAWebVoipUiDocPipPortalContainer.react")
            .WAWebVoipUiDocPipEventEmitter,
          "docPipOpenStateChanged",
          function () {
            return o(
              "WAWebVoipUiDocPipPortalContainer.react",
            ).getIsDocPipWindowOpen();
          },
        ),
        T = k || I,
        D =
          (n = o("useWAWebMsgValues").useMsgValues(l.id, [
            o("WAWebMsgGetters").getSelfOtherDeviceConnected,
          ])[0]) != null
            ? n
            : !1,
        x = function () {
          return E == null || v == null ? !1 : E.id === v;
        },
        $ = function () {
          return E == null || v == null ? !1 : E.id !== v;
        },
        P = function () {
          return x() ? !1 : D;
        },
        N = function () {
          var e = o("WAWebCallLogUtils").getJoinButtonTextType(
            x(),
            D,
            o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled(),
          );
          return e === "return"
            ? s._(/*BTDS*/ "Return")
            : e === "join_here"
              ? s._(/*BTDS*/ "Join here")
              : e === "join"
                ? s._(/*BTDS*/ "Join")
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
        },
        M = d(
          function () {
            if (R == null) return [];
            var e = R.filter(function (e) {
              return (
                e.outcome ===
                o("WAWebVoipWaCallEnums").CallParticipantState.Connected
              );
            }).map(function (e) {
              return e.participant;
            });
            return o("WAWebCallLogUtils").sortParticipantWidsByPriority(e);
          },
          [R],
        );
      if (v == null)
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: CallLogJoinOngoingCell: CallId is null",
                ])),
            )
            .sendLogs("voip-call-log-join-ongoing-cell-call-id-null"),
          null
        );
      var w = c.jsxs(o("WAWebFlex.react").FlexColumn, {
          rowGap: 4,
          children: [
            s._(
              /*BTDS*/ '_j{"VOICE":"Ongoing voice call","VIDEO":"Ongoing video call"}',
              [
                s._enum(b ? "VIDEO" : "VOICE", {
                  VOICE: "voice",
                  VIDEO: "video",
                }),
              ],
            ),
            M.length > 0 &&
              c.jsx(r("WAWebFacePile.react"), {
                idsOrUrls: M,
                chatWid: h == null ? void 0 : h.id,
                faceSize: 20,
                keyName: "call-" + v,
                borderColor: m.facePileBorderColor,
              }),
          ],
        }),
        A = x(),
        F = !r("WAWebEnvironment").isWindows,
        O = $() || (F && A && !T),
        B = c.jsx(r("WDSButton.react"), {
          label: N(),
          Icon: r(
            b ? "WDSIconIcVideocamFilled.react" : "WDSIconIcCallFilled.react",
          ),
          variant: O ? "outline" : "filled",
          disabled: O,
          onPress: function () {
            F && A
              ? (window.focus(),
                o("WAWebVoipUiManager").closeVoipUiPopoutWindow({
                  callEnded: !1,
                }))
              : o("WAWebVoipStartCall").joinOngoingWAWebVoipGroupCallPN(
                  v,
                  h,
                  b,
                  S != null && S
                    ? o("WAWebWamEnumLobbyEntryPointType")
                        .LOBBY_ENTRY_POINT_TYPE.CALL_LINK_CALL_LOG
                    : o("WAWebWamEnumLobbyEntryPointType")
                        .LOBBY_ENTRY_POINT_TYPE.CALL_LOG,
                  o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled() && P(),
                );
          },
        });
      return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: { enter: u, space: u },
        onFocus: g,
        ref: _,
        children: c.jsx(r("WAWebChatCell.react"), {
          theme: "voip-ongoing-call",
          idle: !0,
          contextEnabled: o("WAWebBoolFunc").returnFalse,
          active: f,
          image: c.jsx(r("WAWebCallLogEntryChatImage.react"), { msg: l }),
          primary: c.jsx(r("WAWebCallLogTitle.react"), { callLogMsg: l }),
          secondary: w,
          detail: B,
          onClick: u,
          testid: void 0,
          className: "xdmi676 x1qafhyn x16ovd2e x12xbjc7",
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
