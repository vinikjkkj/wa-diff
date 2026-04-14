__d(
  "WAWebVoipCallActiveInExternalPlayer.react",
  [
    "fbt",
    "WAWebCallCollection",
    "WAWebCallParticipantInfo.react",
    "WAWebContactCollection",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebOutgoingGroupCallParticipantInfo.react",
    "WAWebOutgoingGroupCallUtils",
    "WAWebVoipEventConstants",
    "WAWebVoipUiManager",
    "WAWebVoipWaCallEnums",
    "WDSButton.react",
    "WDSColorStyles.stylex",
    "WDSIconWdsIcPipExitTopRightToBottomLeft.react",
    "react",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useMemo,
      d = {
        fullWidth: { width: "xh8yej3", $$css: !0 },
        surfaceElevated: {
          marginTop: "x1380le5",
          marginInlineStart: "x150mmf0",
          marginInlineEnd: "xqf2s3x",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        moveCallHereContainer: { width: "x1m22und", $$css: !0 },
        moveCallHereButton: {
          alignItems: "x6s0dn4",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          minHeight: "x21xpn4",
          paddingBottom: "x12xbjc7",
          paddingTop: "x16ovd2e",
          $$css: !0,
        },
        participantInfoWrapper: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          minWidth: "xeuugli",
          $$css: !0,
        },
        buttonWrapper: { flexShrink: "x2lah0s", $$css: !0 },
      };
    function m() {
      (window.focus(),
        o("WAWebVoipUiManager").closeVoipUiPopoutWindow({ callEnded: !1 }));
    }
    function p(e) {
      var t,
        n,
        a,
        i,
        l = e.msg,
        p = l != null ? o("WAWebFrontendMsgGetters").getChat(l) : null,
        _ =
          (t = r("WAWebCallCollection").activeCall) == null
            ? void 0
            : t.callLinkCreatorJid,
        f =
          (n =
            (a = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : a.isCallLink) != null
            ? n
            : !1,
        g = c(
          function () {
            if (!f || _ == null) return null;
            var e = o("WAWebContactCollection").ContactCollection.get(_);
            return e != null
              ? o("WAWebFrontendContactGetters").getDisplayName(e)
              : null;
          },
          [f, _],
        ),
        h = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "change:state",
          function () {
            var e;
            return (e = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : e.getState();
          },
        ),
        y =
          h === o("WAWebVoipWaCallEnums").CallState.Calling ||
          h === o("WAWebVoipWaCallEnums").CallState.PreacceptReceived,
        C = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents
              .GROUP_CALL_PARTICIPANT_STATES,
          ),
          function () {
            var e, t;
            return [
              (e =
                (t = r("WAWebCallCollection").activeCall) == null
                  ? void 0
                  : t.groupCallParticipants) != null
                ? e
                : [],
            ];
          },
        ),
        b = C[0],
        v = c(
          function () {
            return o(
              "WAWebOutgoingGroupCallUtils",
            ).getOutgoingGroupCallNameOverride(y, b);
          },
          [y, b],
        ),
        S = c(
          function () {
            return o(
              "WAWebOutgoingGroupCallUtils",
            ).getOutgoingGroupCallParticipants(y, b);
          },
          [y, b],
        ),
        R = c(
          function () {
            return o(
              "WAWebOutgoingGroupCallUtils",
            ).getAdHocGroupCallNameOverride(b);
          },
          [b],
        ),
        L = c(
          function () {
            return o(
              "WAWebOutgoingGroupCallUtils",
            ).getAdHocGroupCallParticipants(b);
          },
          [b],
        ),
        E = v != null ? v : R,
        k = S != null ? S : L,
        I = s._(/*BTDS*/ "Viewing in another window"),
        T = (i = p == null ? void 0 : p.id) != null ? i : f ? _ : null,
        D =
          f && g != null
            ? s._(/*BTDS*/ "{name}'s link", [s._param("name", g)])
            : null,
        x;
      return (
        k != null && k.length > 1
          ? (x = u.jsx(r("WAWebOutgoingGroupCallParticipantInfo.react"), {
              callStateText: I,
              compact: !0,
              nameText: E,
              participantWids: k,
            }))
          : T != null
            ? (x = u.jsx(r("WAWebCallParticipantInfo.react"), {
                userId: T,
                compact: !0,
                imageSize: "small",
                callStateText: I,
                xstyle: d.fullWidth,
                audioLevelType: "peer",
                nameOverride: D != null ? D : E,
              }))
            : (x = u.jsx(r("WAWebCallParticipantInfo.react"), {
                showCallStateTextOnly: !0,
                callStateText: I,
                compact: !0,
                xstyle: d.fullWidth,
              })),
        u.jsx(o("WAWebFlex.react").FlexItem, {
          align: "center",
          xstyle: [
            d.moveCallHereContainer,
            d.surfaceElevated,
            o("WDSColorStyles.stylex").WDSBackgroundColorStyles
              .surfaceElevatedEmphasized,
          ],
          children: u.jsxs(o("WAWebFlex.react").FlexRow, {
            padding: 8,
            gap: 16,
            align: "center",
            children: [
              u.jsx(o("WAWebFlex.react").FlexItem, {
                grow: 1,
                shrink: 1,
                basis: 0,
                xstyle: d.participantInfoWrapper,
                children: x,
              }),
              u.jsx(o("WAWebFlex.react").FlexItem, {
                shrink: 0,
                xstyle: d.buttonWrapper,
                children: u.jsx(r("WDSButton.react"), {
                  size: "small",
                  Icon: r("WDSIconWdsIcPipExitTopRightToBottomLeft.react"),
                  label: s._(/*BTDS*/ "Move here"),
                  xstyle: [
                    d.moveCallHereButton,
                    o("WDSColorStyles.stylex").WDSBackgroundColorStyles
                      .persistentAlwaysWhite,
                  ],
                  onPress: m,
                }),
              }),
            ],
          }),
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
