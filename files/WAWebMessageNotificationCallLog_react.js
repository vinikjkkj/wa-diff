__d(
  "WAWebMessageNotificationCallLog.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebCallCollection",
    "WAWebCallLogEntryCell.react",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebClock",
    "WAWebDesktopUpsellCallingMissedCall.react",
    "WAWebDesktopUpsellCallingUnavailablePopover.react",
    "WAWebDesktopUpsellPlatformAwareHooks",
    "WAWebDesktopUpsellUtils",
    "WAWebDropdownV2.react",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMessageAuthor.react",
    "WAWebMessageMeta.react",
    "WAWebMsgGetters",
    "WAWebPopover.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebUserPrefsMeUser",
    "WAWebVoipGatingUtils",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipWaCallEnums",
    "countWhere",
    "react",
    "stylex",
    "useWAWebEventTargetValue",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useImperativeHandle,
      _ = m.useRef;
    function f(e, t, n, r, o) {
      return r
        ? s._(/*BTDS*/ "Silenced unknown caller")
        : e && !o
          ? t
            ? s._(/*BTDS*/ "Missed group call")
            : n
              ? s._(/*BTDS*/ "Missed video call")
              : s._(/*BTDS*/ "Missed voice call")
          : t
            ? s._(/*BTDS*/ "Group call")
            : n
              ? s._(/*BTDS*/ "Video call")
              : s._(/*BTDS*/ "Voice call");
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e, t, n, a, i, l, u, c, d, m, p) {
      var _ = function () {
        if (!o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled()) return !1;
        if (p === !0) {
          var e = r("WAWebCallCollection").activeCall;
          return !(e != null && e.id === m);
        }
        return !1;
      };
      if (o("WAWebVoipGatingUtils").isCallingEnabled() && !i) {
        var f,
          g = o("WAWebClock").Clock.callDurationStrSimple(a != null ? a : 0),
          h =
            u != null
              ? r("countWhere")(u, function (e) {
                  return (
                    e.outcome ===
                    o("WAWebVoipWaCallEnums").CallParticipantState.Connected
                  );
                })
              : 0,
          y =
            (f =
              u == null
                ? void 0
                : u.some(function (e) {
                    return e.participant.isLid();
                  })) != null
              ? f
              : !1,
          C = y
            ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
            : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
          b =
            u != null
              ? r("countWhere")(u, function (e) {
                  var t;
                  return !((t = e.participant) != null && t.equals(C));
                })
              : 0;
        return e === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing
          ? n
            ? c
              ? _()
                ? s._(
                    /*BTDS*/ "{invited-count} invited \u2022 Click to join here",
                    [s._param("invited-count", b)],
                  )
                : s._(
                    /*BTDS*/ "{invited-count} invited \u2022 Click to return",
                    [s._param("invited-count", b)],
                  )
              : _()
                ? s._(
                    /*BTDS*/ "{joined-count} joined \u2022 Click to join here",
                    [s._param("joined-count", h)],
                  )
                : s._(/*BTDS*/ "{joined-count} joined \u2022 Click to return", [
                    s._param("joined-count", h),
                  ])
            : d === o("WAWebCallLogMsgData.flow").CallOutcome.Completed
              ? s._(/*BTDS*/ "Call ended")
              : h > 1
                ? _()
                  ? s._(/*BTDS*/ "In call \u2022 Click to join here")
                  : s._(/*BTDS*/ "In call \u2022 Click to return")
                : s._(/*BTDS*/ "Ringing")
          : (e === o("WAWebCallLogMsgData.flow").CallOutcome.Missed ||
                e === o("WAWebCallLogMsgData.flow").CallOutcome.Rejected ||
                e === o("WAWebCallLogMsgData.flow").CallOutcome.Canceled) &&
              t &&
              !n
            ? s._(/*BTDS*/ "No answer")
            : e === o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere
              ? s._(/*BTDS*/ "Accepted on another device")
              : e === o("WAWebCallLogMsgData.flow").CallOutcome.Failed
                ? s._(/*BTDS*/ "Call failed")
                : c
                  ? s._(/*BTDS*/ "{invited-count} invited", [
                      s._param("invited-count", b),
                    ])
                  : e === o("WAWebCallLogMsgData.flow").CallOutcome.Missed && n
                    ? s._(/*BTDS*/ "{time} \u2022 {joined-count} joined", [
                        s._param("time", g),
                        s._param("joined-count", h),
                      ])
                    : e === o("WAWebCallLogMsgData.flow").CallOutcome.Completed
                      ? n
                        ? s._(/*BTDS*/ "{time} \u2022 {joined-count} joined", [
                            s._param("time", g),
                            s._param("joined-count", h),
                          ])
                        : s._(/*BTDS*/ "{time}", [s._param("time", g)])
                      : s._(/*BTDS*/ "Click to call back");
      } else if (i === !0 && l)
        switch (l) {
          case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS:
            return t
              ? n
                ? s._(/*BTDS*/ "Make group calls with the Mac app")
                : s._(/*BTDS*/ "Make calls with the Mac app")
              : n
                ? s._(/*BTDS*/ "Return group calls with the Mac app")
                : s._(/*BTDS*/ "Return calls with the Mac app");
          case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS:
            return t
              ? n
                ? s._(/*BTDS*/ "Make group calls with the Windows app")
                : s._(/*BTDS*/ "Make calls with the Windows app")
              : n
                ? s._(/*BTDS*/ "Return group calls with the Windows app")
                : s._(/*BTDS*/ "Return calls with the Windows app");
        }
      return s._(/*BTDS*/ "Return calls on your phone");
    }
    g.displayName = g.name + " [from " + i.id + "]";
    var h = {
      bubble: {
        boxSizing: "x9f619",
        userSelect: "x87ps6o",
        width: "x1o095ql",
        paddingBottom: "x1yt8dio",
        $$css: !0,
      },
      innerBubble: {
        height: "xr931m4",
        borderStartStartRadius: "xp43t2z",
        borderStartEndRadius: "x5j5mwf",
        borderEndEndRadius: "xptal55",
        borderEndStartRadius: "xjodkme",
        backgroundColor: "x1bu39yj",
        $$css: !0,
      },
      roundIconContainer: {
        display: "x78zum5",
        alignItems: "x6s0dn4",
        justifyContent: "xl56j7k",
        width: "x14qfxbe",
        height: "xc9qbxq",
        backgroundColor: "x1ew7x2d",
        borderStartStartRadius: "x1c9tyrk",
        borderStartEndRadius: "xeusxvb",
        borderEndEndRadius: "x1pahc9y",
        borderEndStartRadius: "x1ertn4p",
        $$css: !0,
      },
      titleText: { fontSize: "x1jchvi3", $$css: !0 },
    };
    function y(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.msg,
        c = o("useWAWebMsgValues").useMsgValues(i.msg.id, [
          (n = o("WAWebMsgGetters")).getIsVideoCall,
          n.getIsMissedCall,
          n.getIsSentByMe,
          n.getCallOutcome,
          n.getIsCallLink,
          n.getIsGroupCall,
          n.getIsAdHocGroupCall,
          n.getCallParticipants,
          n.getFinalCallOutcome,
          o("WAWebFrontendMsgGetters").getSenderObj,
          n.getCallDuration,
          n.getIsCallSilenced,
          n.getCallId,
          n.getSelfOtherDeviceConnected,
        ]),
        m = c[0],
        y = c[1],
        C = c[2],
        b = c[3],
        v = c[4],
        S = c[5],
        R = c[6],
        L = c[7],
        E = c[8],
        k = c[9],
        I = c[10],
        T = c[11],
        D = c[12],
        x = c[13],
        $ = _(null),
        P = function () {
          var e;
          (e = $.current) == null || e.click();
        };
      p(a, function () {
        return { handleKeyActivation: P };
      });
      var N = o("WAWebDesktopUpsellUtils").getUserDesktopOs(),
        M = o(
          "WAWebDesktopUpsellPlatformAwareHooks",
        ).useWAWebDesktopUpsellPlatformCheck(),
        w = o(
          "WAWebDesktopUpsellPlatformAwareHooks",
        ).useWAWebDesktopUpsellPlatformAwareOsVersionCheck(),
        A = o("WAWebVoipGatingUtils").isCallingEnabled(),
        F = o("WAWebVoipGatingUtils").isGroupCallingEnabled(),
        O = (M && !A) || (w && S && !F),
        B = o("WAWebCallLogUtils").getIsSelfConnected(L),
        W = o("WAWebCallLogUtils").getIsMissedCallOrNotConnected(y, B, C, b, E),
        q = r("useWAWebEventTargetValue")(
          o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection,
          "all",
          function () {
            return D != null
              ? o(
                  "WAWebVoipOngoingCallCollection",
                ).WAWebVoipOngoingCallCollection.getByCallId(D)
              : null;
          },
        ),
        U =
          q != null ||
          (b === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
            E !== o("WAWebCallLogMsgData.flow").CallOutcome.Completed),
        V = f(W, R, m, T, U),
        H = V;
      O &&
        (R
          ? (H = s._(/*BTDS*/ "Group call"))
          : m
            ? (H = s._(/*BTDS*/ "Video call"))
            : (H = s._(/*BTDS*/ "Voice call")));
      var G = d.jsx(
          "div",
          babelHelpers.extends(
            {},
            {
              0: { className: "x10l6tqk x1n327nk x7308am x1inkcgm" },
              1: { className: "x10l6tqk x1n327nk x7308am x1inkcgm xtrg13t" },
            }[!!r("WAWebL10N").isRTL() << 0],
            { children: d.jsx(o("WAWebMessageMeta.react").Meta, { msg: l }) },
          ),
        ),
        z = g(b, C, S, I, O, N, L, R, E, D, x),
        j =
          i.displayAuthor === !0 && k != null
            ? d.jsx("div", {
                className: "x1sbwfh8 x1yc453h",
                children: d.jsx(r("WAWebMessageAuthor.react"), {
                  msg: l,
                  contact: k,
                  stopClickPropagation: !0,
                }),
              })
            : null,
        K = d.jsxs(
          "div",
          babelHelpers.extends(
            { "data-testid": void 0 },
            (u || (u = r("stylex"))).props(
              [h.bubble, o("WAWebUISpacing").uiPadding.top5],
              o("WAWebUISpacing").uiPadding.horiz5,
            ),
            {
              children: [
                j,
                d.jsxs(o("WAWebFlex.react").FlexRow, {
                  xstyle: [
                    h.innerBubble,
                    o("WAWebUISpacing").uiPadding.horiz12,
                  ],
                  align: "center",
                  children: [
                    d.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: h.roundIconContainer,
                      padding: 2,
                      children: d.jsx(
                        o("WAWebCallLogEntryCell.react").CallLogIcon,
                        {
                          iconHeight: 22,
                          isMissedCall: W,
                          isVideoCall: m,
                          isFromMe: C,
                          isCallLink: v != null ? v : !1,
                          isOngoingCall: U,
                        },
                      ),
                    }),
                    d.jsxs(o("WAWebFlex.react").FlexColumn, {
                      xstyle: o("WAWebUISpacing").uiPadding.start12,
                      justify: "evenly",
                      rowGap: 4,
                      children: [
                        d.jsx(o("WAWebFlex.react").FlexItem, {
                          xstyle: h.titleText,
                          children: H,
                        }),
                        d.jsx(o("WAWebText.react").WAWebTextMuted, {
                          children: z,
                        }),
                      ],
                    }),
                  ],
                }),
                G,
              ],
            },
          ),
        );
      if (O === !0) {
        var Q = C
          ? d.jsx(r("WAWebDesktopUpsellCallingUnavailablePopover.react"), {
              userDesktopOs: r("WANullthrows")(N),
              isGroupCall: S,
            })
          : d.jsx(r("WAWebDesktopUpsellCallingMissedCall.react"), {
              userDesktopOs: r("WANullthrows")(N),
              isGroupCall: S,
              isMissedCall: y,
            });
        return d.jsxs(r("WAWebUnstyledButton.react"), {
          ref: $,
          children: [
            d.jsx(o("WAWebDropdownV2.react").DropdownV2, {
              target: $,
              alignment: o("WAWebPopover.react").PopoverAlignment.Center,
              position: o("WAWebPopover.react").PopoverPosition.Top,
              buffer: 12,
              material: !0,
              children: Q,
            }),
            K,
          ],
        });
      }
      return K;
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
