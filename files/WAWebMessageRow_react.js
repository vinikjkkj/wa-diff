__d(
  "WAWebMessageRow.react",
  [
    "WAWebGetDisplayType",
    "WAWebMessagePosition",
    "WAWebMessageWrapper.react",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebPREGatingUtils",
    "WAWebPrivacyBlurWrapper.react",
    "WAWebPrivacyModeBlurConfig",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useRef;
    function m(e) {
      var t = e.getSequentialMsg,
        n = e.groupedWithNext,
        a = e.groupedWithPrev,
        i = e.handleMsgRendered,
        l = e.isFocusedMsg,
        u = e.isFollowUpReply,
        m = e.isMsgVisible,
        p = e.msg,
        _ = e.onMessageSelect,
        f = e.selectable,
        g = e.selectedMessages,
        h = e.setFocusedMessage,
        y = e.showProfilePicture,
        C;
      n && !a
        ? (C = o("WAWebMessagePosition").MsgPosition.FRONT)
        : n && a
          ? (C = o("WAWebMessagePosition").MsgPosition.MID)
          : !n && a
            ? (C = o("WAWebMessagePosition").MsgPosition.END)
            : (C = o("WAWebMessagePosition").MsgPosition.SINGLE);
      var b = c(
          function () {
            h(p.unsafe());
          },
          [p, h],
        ),
        v = c(
          function () {
            h(null);
          },
          [h],
        ),
        S = c(
          function (e) {
            i(e, p.id.toString());
          },
          [i, p.id],
        ),
        R =
          p.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
          p.type === o("WAWebMsgType").MSG_TYPE.VIDEO ||
          p.type === o("WAWebMsgType").MSG_TYPE.AUDIO ||
          p.carouselCards != null,
        L = d(null),
        E = R
          ? o("WAWebPrivacyModeBlurConfig").BlurCategory.Media
          : o("WAWebPrivacyModeBlurConfig").BlurCategory.General;
      return s.jsx(r("WAWebPrivacyBlurWrapper.react"), {
        containerRef: L,
        category: E,
        children: s.jsx("div", {
          ref: L,
          children: s.jsx(r("WAWebMessageWrapper.react"), {
            onMsgFocus: b,
            onMsgBlur: v,
            showProfilePicture: y,
            ref: S,
            msg: p.unsafe(),
            displayType: o("WAWebGetDisplayType").getDisplayType(p.unsafe()),
            isMsgVisible:
              R || p.selectedCarouselCardIndex != null ? m : r("WAWebNoop"),
            selectable: f,
            selectedMessages: g,
            onMessageSelect: _,
            position: C,
            isFocusedMsg: l,
            getSequentialMsg: t,
            isFocusable: !0,
            errorBoundaryName: "message-row",
            isFollowUpReply: u,
          }),
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = o("WAWebPREGatingUtils").isPREMessageSendEnabled() ? s.memo(m) : m;
    l.WAWebMessageRow = p;
  },
  98,
);
