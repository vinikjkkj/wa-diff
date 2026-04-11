__d(
  "WAWebComposeBoxSendButton.react",
  [
    "fbt",
    "WAGetUserMedia",
    "WAWebPttStartRecordingButton.react",
    "WAWebSendAiFilledIcon.react",
    "WAWebSendAiIcon.react",
    "WAWebTabOrder",
    "WAWebUISpacing",
    "WAWebWdsIcSendFilledIcon.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        childPaddingRefresh: {
          boxSizing: "x9f619",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          alignSelf: "xpvyfi4",
          $$css: !0,
        },
        sendButtonContainerRefresh: {
          flexShrink: "x2lah0s",
          flexGrow: "x1c4vz4f",
          minWidth: "x1fns5xo",
          minHeight: "x1ba4aug",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          color: "x1pse0pq",
          $$css: !0,
        },
        sendButtonBgEnabled: {
          backgroundColor: "xfn3atn",
          cursor: "x1ypdohk",
          ":hover_backgroundColor": "x1m2oepg",
          $$css: !0,
        },
        sendButtonBgDisabled: {
          color: "x18cpw0e",
          cursor: "x1h6gzvc",
          $$css: !0,
        },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.hasText,
        a = e.iconWidth,
        i = e.onClickSend,
        l = e.onStartRecording,
        u = e.recordingSession,
        d = e.supportsPtt,
        m = !!(o("WAGetUserMedia").getUserMedia && window.AudioContext),
        p = !n && m && d;
      if (p) {
        var _ = u != null,
          f;
        return (
          t[0] !== l || t[1] !== _
            ? ((f = c.jsx(r("WAWebPttStartRecordingButton.react"), {
                disabled: _,
                onConfirm: l,
              })),
              (t[0] = l),
              (t[1] = _),
              (t[2] = f))
            : (f = t[2]),
          f
        );
      }
      var g = a == null || a ? 20 : void 0,
        h,
        y;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "Send")),
          (y = {
            className: "x1c4vz4f x2lah0s xdl72j9 xhslqc4 x1iy03kw x1lfpgzf",
          }),
          (t[3] = h),
          (t[4] = y))
        : ((h = t[3]), (y = t[4]));
      var C = !n,
        b;
      t[5] !== g
        ? ((b = c.jsx(o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, {
            directional: !0,
            width: g,
          })),
          (t[5] = g),
          (t[6] = b))
        : (b = t[6]);
      var v;
      return (
        t[7] !== i || t[8] !== C || t[9] !== b
          ? ((v = c.jsx(
              "button",
              babelHelpers.extends(
                {
                  "data-testid": void 0,
                  "data-tab": o("WAWebTabOrder").TAB_ORDER.SEND_BUTTON,
                  "aria-label": h,
                },
                y,
                { onClick: i, disabled: C, children: b },
              ),
            )),
            (t[7] = i),
            (t[8] = C),
            (t[9] = b),
            (t[10] = v))
          : (v = t[10]),
        v
      );
    }
    function p(t) {
      var n = o("react-compiler-runtime").c(18),
        a = t.buttonVariant,
        i = t.hasTextState,
        l = t.isMessageToBot,
        u = t.onClickSend,
        m = t.onStartRecording,
        p = t.recordingSession,
        _ = t.supportsPtt,
        f = a === void 0 ? "filled" : a,
        g = !!(o("WAGetUserMedia").getUserMedia && window.AudioContext),
        h = !i && g && _,
        y = !i,
        C;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Send")), (n[0] = C))
        : (C = n[0]);
      var b = C,
        v,
        S;
      if (
        n[1] !== f ||
        n[2] !== y ||
        n[3] !== l ||
        n[4] !== u ||
        n[5] !== m ||
        n[6] !== p ||
        n[7] !== h
      ) {
        S = Symbol.for("react.early_return_sentinel");
        e: {
          var R = [
            d.childPaddingRefresh,
            d.sendButtonContainerRefresh,
            o("WAWebUISpacing").uiMargin.start5,
          ];
          if (
            (h || R.push(y ? d.sendButtonBgDisabled : d.sendButtonBgEnabled), h)
          ) {
            var L = p != null,
              E;
            (n[10] !== m || n[11] !== L
              ? ((E = c.jsx(r("WAWebPttStartRecordingButton.react"), {
                  disabled: L,
                  onConfirm: m,
                })),
                (n[10] = m),
                (n[11] = L),
                (n[12] = E))
              : (E = n[12]),
              (S = c.jsx(
                "div",
                babelHelpers.extends({}, (e || (e = r("stylex"))).props(R), {
                  children: E,
                }),
              )));
            break e;
          }
          var k = o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon;
          l &&
            (k = y
              ? o("WAWebSendAiIcon.react").SendAiIcon
              : o("WAWebSendAiFilledIcon.react").SendAiFilledIcon);
          var I;
          n[13] !== f || n[14] !== y || n[15] !== k || n[16] !== u
            ? ((I = c.jsx(r("WDSMenuBarItem.react"), {
                icon: k,
                title: b,
                onClick: u,
                tabOrder: o("WAWebTabOrder").TAB_ORDER.SEND_BUTTON,
                testid: void 0,
                disabled: y,
                buttonSize: "medium",
                buttonVariant: f,
                buttonType: "default",
              })),
              (n[13] = f),
              (n[14] = y),
              (n[15] = k),
              (n[16] = u),
              (n[17] = I))
            : (I = n[17]);
          var T = I;
          v = c.jsx(
            "div",
            babelHelpers.extends({}, (e || (e = r("stylex"))).props(R), {
              children: T,
            }),
          );
        }
        ((n[1] = f),
          (n[2] = y),
          (n[3] = l),
          (n[4] = u),
          (n[5] = m),
          (n[6] = p),
          (n[7] = h),
          (n[8] = v),
          (n[9] = S));
      } else ((v = n[8]), (S = n[9]));
      return S !== Symbol.for("react.early_return_sentinel") ? S : v;
    }
    ((l.SendButton = m), (l.SendButtonRefresh = p));
  },
  226,
);
