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
      var t = e.hasText,
        n = e.iconWidth,
        a = e.onClickSend,
        i = e.onStartRecording,
        l = e.recordingSession,
        u = e.supportsPtt,
        d = !!(o("WAGetUserMedia").getUserMedia && window.AudioContext),
        m = !t && d && u;
      if (m)
        return c.jsx(r("WAWebPttStartRecordingButton.react"), {
          disabled: l != null,
          onConfirm: i,
        });
      var p = n == null || n ? 20 : void 0;
      return c.jsx("button", {
        "data-testid": void 0,
        "data-tab": o("WAWebTabOrder").TAB_ORDER.SEND_BUTTON,
        "aria-label": s._(/*BTDS*/ "Send"),
        className: "x1c4vz4f x2lah0s xdl72j9 xhslqc4 x1iy03kw x1lfpgzf",
        onClick: a,
        disabled: !t,
        children: c.jsx(
          o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon,
          { directional: !0, width: p },
        ),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(t) {
      var n = t.buttonVariant,
        a = n === void 0 ? "filled" : n,
        i = t.hasTextState,
        l = t.isMessageToBot,
        u = t.onClickSend,
        m = t.onStartRecording,
        p = t.recordingSession,
        _ = t.supportsPtt,
        f = !!(o("WAGetUserMedia").getUserMedia && window.AudioContext),
        g = !i && f && _,
        h = !i,
        y = s._(/*BTDS*/ "Send"),
        C = [
          d.childPaddingRefresh,
          d.sendButtonContainerRefresh,
          o("WAWebUISpacing").uiMargin.start5,
        ];
      if ((g || C.push(h ? d.sendButtonBgDisabled : d.sendButtonBgEnabled), g))
        return c.jsx(
          "div",
          babelHelpers.extends({}, (e || (e = r("stylex"))).props(C), {
            children: c.jsx(r("WAWebPttStartRecordingButton.react"), {
              disabled: p != null,
              onConfirm: m,
            }),
          }),
        );
      var b = o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon;
      l &&
        (b = h
          ? o("WAWebSendAiIcon.react").SendAiIcon
          : o("WAWebSendAiFilledIcon.react").SendAiFilledIcon);
      var v = c.jsx(r("WDSMenuBarItem.react"), {
        icon: b,
        title: y,
        onClick: u,
        tabOrder: o("WAWebTabOrder").TAB_ORDER.SEND_BUTTON,
        testid: void 0,
        disabled: h,
        buttonSize: "medium",
        buttonVariant: a,
        buttonType: "default",
      });
      return c.jsx(
        "div",
        babelHelpers.extends({}, (e || (e = r("stylex"))).props(C), {
          children: v,
        }),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.SendButton = m),
      (l.SendButtonRefresh = p));
  },
  226,
);
