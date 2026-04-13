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
    "react-compiler-runtime",
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
        a = o("react-compiler-runtime").c(67),
        i = t.callLogMsg,
        l = t.onClick,
        u = t.active,
        d;
      a[0] !== i.id
        ? ((d = i.id.toString()), (a[0] = i.id), (a[1] = d))
        : (d = a[1]);
      var p = r("useWAWebActiveSelection")(u, d),
        b = p[0],
        v = p[1],
        S = C,
        R;
      a[2] !== i
        ? ((R = o("WAWebFrontendMsgGetters").getChat(i)),
          (a[2] = i),
          (a[3] = R))
        : (R = a[3]);
      var L = R,
        E;
      if (a[4] === Symbol.for("react.memo_cache_sentinel")) {
        var k;
        ((E = [
          (k = o("WAWebMsgGetters")).getId,
          k.getIsVideoCall,
          k.getCallId,
          k.getIsCallLink,
          k.getCallParticipants,
        ]),
          (a[4] = E));
      } else E = a[4];
      var I = o("useWAWebMsgValues").useMsgValues(i.id, E),
        T = I[0],
        D = I[1],
        x = I[2],
        $ = I[3],
        P = I[4],
        N;
      (a[5] !== x
        ? ((N = function () {
            return x != null
              ? o(
                  "WAWebVoipOngoingCallCollection",
                ).WAWebVoipOngoingCallCollection.getByCallId(x)
              : null;
          }),
          (a[5] = x),
          (a[6] = N))
        : (N = a[6]),
        r("useWAWebEventTargetValue")(
          o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection,
          "all",
          N,
        ));
      var M;
      a[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
          )),
          (a[7] = M))
        : (M = a[7]);
      var w = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), M, y),
        A = r("useWAWebEventTargetValue")(
          o("WAWebVoipUiPopoutWindowPortalContainer.react")
            .WAWebVoipUiPopoutWindowEventEmitter,
          "setPopoutWindowProps",
          h,
        ),
        F = r("useWAWebEventTargetValue")(
          o("WAWebVoipUiDocPipPortalContainer.react")
            .WAWebVoipUiDocPipEventEmitter,
          "docPipOpenStateChanged",
          g,
        ),
        O = A || F,
        B =
          (n = o("useWAWebMsgValues").useMsgValues(i.id, [
            o("WAWebMsgGetters").getSelfOtherDeviceConnected,
          ])[0]) != null
            ? n
            : !1,
        W;
      a[8] !== w || a[9] !== x
        ? ((W = function () {
            return w == null || x == null ? !1 : w.id === x;
          }),
          (a[8] = w),
          (a[9] = x),
          (a[10] = W))
        : (W = a[10]);
      var q = W,
        U;
      a[11] !== w || a[12] !== x
        ? ((U = function () {
            return w == null || x == null ? !1 : w.id !== x;
          }),
          (a[11] = w),
          (a[12] = x),
          (a[13] = U))
        : (U = a[13]);
      var V = U,
        H;
      a[14] !== q || a[15] !== B
        ? ((H = function () {
            return q() ? !1 : B;
          }),
          (a[14] = q),
          (a[15] = B),
          (a[16] = H))
        : (H = a[16]);
      var G = H,
        z;
      a[17] !== q || a[18] !== B
        ? ((z = function () {
            var e = o("WAWebCallLogUtils").getJoinButtonTextType(
              q(),
              B,
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
          }),
          (a[17] = q),
          (a[18] = B),
          (a[19] = z))
        : (z = a[19]);
      var j = z,
        K;
      e: {
        if (P == null) {
          var Q;
          (a[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((Q = []), (a[20] = Q))
            : (Q = a[20]),
            (K = Q));
          break e;
        }
        var X;
        if (a[21] !== P) {
          var Y = P.filter(f).map(_);
          ((X = o("WAWebCallLogUtils").sortParticipantWidsByPriority(Y)),
            (a[21] = P),
            (a[22] = X));
        } else X = a[22];
        K = X;
      }
      var J = K;
      if (x == null)
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
      var Z;
      a[23] !== D
        ? ((Z = s._(
            /*BTDS*/ '_j{"VOICE":"Ongoing voice call","VIDEO":"Ongoing video call"}',
            [
              s._enum(D ? "VIDEO" : "VOICE", {
                VOICE: "voice",
                VIDEO: "video",
              }),
            ],
          )),
          (a[23] = D),
          (a[24] = Z))
        : (Z = a[24]);
      var ee;
      a[25] !== x || a[26] !== (L == null ? void 0 : L.id) || a[27] !== J
        ? ((ee =
            J.length > 0 &&
            c.jsx(r("WAWebFacePile.react"), {
              idsOrUrls: J,
              chatWid: L == null ? void 0 : L.id,
              faceSize: 20,
              keyName: "call-" + x,
              borderColor: m.facePileBorderColor,
            })),
          (a[25] = x),
          (a[26] = L == null ? void 0 : L.id),
          (a[27] = J),
          (a[28] = ee))
        : (ee = a[28]);
      var te;
      a[29] !== Z || a[30] !== ee
        ? ((te = c.jsxs(o("WAWebFlex.react").FlexColumn, {
            rowGap: 4,
            children: [Z, ee],
          })),
          (a[29] = Z),
          (a[30] = ee),
          (a[31] = te))
        : (te = a[31]);
      var ne = te,
        re = q(),
        oe = !r("WAWebEnvironment").isWindows,
        ae = V() || (oe && re && !O),
        ie;
      a[32] !== j ? ((ie = j()), (a[32] = j), (a[33] = ie)) : (ie = a[33]);
      var le = r(
          D ? "WDSIconIcVideocamFilled.react" : "WDSIconIcCallFilled.react",
        ),
        se = ae ? "outline" : "filled",
        ue;
      a[34] !== x ||
      a[35] !== L ||
      a[36] !== re ||
      a[37] !== $ ||
      a[38] !== G ||
      a[39] !== D
        ? ((ue = function () {
            oe && re
              ? (window.focus(),
                o("WAWebVoipUiManager").closeVoipUiPopoutWindow({
                  callEnded: !1,
                }))
              : o("WAWebVoipStartCall").joinOngoingWAWebVoipGroupCallPN(
                  x,
                  L,
                  D,
                  $ != null && $
                    ? o("WAWebWamEnumLobbyEntryPointType")
                        .LOBBY_ENTRY_POINT_TYPE.CALL_LINK_CALL_LOG
                    : o("WAWebWamEnumLobbyEntryPointType")
                        .LOBBY_ENTRY_POINT_TYPE.CALL_LOG,
                  o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled() && G(),
                );
          }),
          (a[34] = x),
          (a[35] = L),
          (a[36] = re),
          (a[37] = $),
          (a[38] = G),
          (a[39] = D),
          (a[40] = ue))
        : (ue = a[40]);
      var ce;
      a[41] !== ae ||
      a[42] !== ie ||
      a[43] !== le ||
      a[44] !== se ||
      a[45] !== ue
        ? ((ce = c.jsx(r("WDSButton.react"), {
            label: ie,
            Icon: le,
            variant: se,
            disabled: ae,
            onPress: ue,
          })),
          (a[41] = ae),
          (a[42] = ie),
          (a[43] = le),
          (a[44] = se),
          (a[45] = ue),
          (a[46] = ce))
        : (ce = a[46]);
      var de = ce,
        me;
      a[47] !== l
        ? ((me = { enter: l, space: l }), (a[47] = l), (a[48] = me))
        : (me = a[48]);
      var pe, _e;
      a[49] !== i
        ? ((pe = c.jsx(r("WAWebCallLogEntryChatImage.react"), { msg: i })),
          (_e = c.jsx(r("WAWebCallLogTitle.react"), { callLogMsg: i })),
          (a[49] = i),
          (a[50] = pe),
          (a[51] = _e))
        : ((pe = a[50]), (_e = a[51]));
      var fe;
      a[52] !== T
        ? ((fe = T.toString()), (a[52] = T), (a[53] = fe))
        : (fe = a[53]);
      var ge = "calls-tab-join-ongoing-cell-" + fe,
        he;
      a[54] === Symbol.for("react.memo_cache_sentinel")
        ? ((he = "xdmi676 x1qafhyn x16ovd2e x12xbjc7"), (a[54] = he))
        : (he = a[54]);
      var ye;
      a[55] !== v ||
      a[56] !== de ||
      a[57] !== l ||
      a[58] !== ne ||
      a[59] !== pe ||
      a[60] !== _e ||
      a[61] !== ge
        ? ((ye = c.jsx(r("WAWebChatCell.react"), {
            theme: "voip-ongoing-call",
            idle: !0,
            contextEnabled: o("WAWebBoolFunc").returnFalse,
            active: v,
            image: pe,
            primary: _e,
            secondary: ne,
            detail: de,
            onClick: l,
            testid: void 0,
            className: he,
          })),
          (a[55] = v),
          (a[56] = de),
          (a[57] = l),
          (a[58] = ne),
          (a[59] = pe),
          (a[60] = _e),
          (a[61] = ge),
          (a[62] = ye))
        : (ye = a[62]);
      var Ce;
      return (
        a[63] !== b || a[64] !== me || a[65] !== ye
          ? ((Ce = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: me,
              onFocus: S,
              ref: b,
              children: ye,
            })),
            (a[63] = b),
            (a[64] = me),
            (a[65] = ye),
            (a[66] = Ce))
          : (Ce = a[66]),
        Ce
      );
    }
    function _(e) {
      return e.participant;
    }
    function f(e) {
      return (
        e.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected
      );
    }
    function g() {
      return o(
        "WAWebVoipUiDocPipPortalContainer.react",
      ).getIsDocPipWindowOpen();
    }
    function h() {
      return o(
        "WAWebVoipUiPopoutWindowPortalContainer.react",
      ).getIsCallActiveInPopoutWindow();
    }
    function y() {
      return r("WAWebCallCollection").activeCall;
    }
    function C(e) {
      (e.stopPropagation(), e.preventDefault());
    }
    l.default = p;
  },
  226,
);
