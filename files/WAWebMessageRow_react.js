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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(30),
        n = e.getSequentialMsg,
        a = e.groupedWithNext,
        i = e.groupedWithPrev,
        l = e.handleMsgRendered,
        u = e.isFocusedMsg,
        c = e.isFollowUpReply,
        m = e.isMsgVisible,
        p = e.msg,
        _ = e.onMessageSelect,
        f = e.selectable,
        g = e.selectedMessages,
        h = e.setFocusedMessage,
        y = e.showProfilePicture,
        C;
      a && !i
        ? (C = o("WAWebMessagePosition").MsgPosition.FRONT)
        : a && i
          ? (C = o("WAWebMessagePosition").MsgPosition.MID)
          : !a && i
            ? (C = o("WAWebMessagePosition").MsgPosition.END)
            : (C = o("WAWebMessagePosition").MsgPosition.SINGLE);
      var b;
      t[0] !== p || t[1] !== h
        ? ((b = function () {
            h(p.unsafe());
          }),
          (t[0] = p),
          (t[1] = h),
          (t[2] = b))
        : (b = t[2]);
      var v = b,
        S;
      t[3] !== h
        ? ((S = function () {
            h(null);
          }),
          (t[3] = h),
          (t[4] = S))
        : (S = t[4]);
      var R = S,
        L;
      t[5] !== l || t[6] !== p.id
        ? ((L = function (t) {
            l(t, p.id.toString());
          }),
          (t[5] = l),
          (t[6] = p.id),
          (t[7] = L))
        : (L = t[7]);
      var E = L,
        k =
          p.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
          p.type === o("WAWebMsgType").MSG_TYPE.VIDEO ||
          p.type === o("WAWebMsgType").MSG_TYPE.AUDIO ||
          p.carouselCards != null,
        I = d(null),
        T = k
          ? o("WAWebPrivacyModeBlurConfig").BlurCategory.Media
          : o("WAWebPrivacyModeBlurConfig").BlurCategory.General,
        D;
      t[8] !== p ? ((D = p.unsafe()), (t[8] = p), (t[9] = D)) : (D = t[9]);
      var x;
      t[10] !== p
        ? ((x = o("WAWebGetDisplayType").getDisplayType(p.unsafe())),
          (t[10] = p),
          (t[11] = x))
        : (x = t[11]);
      var $ = k || p.selectedCarouselCardIndex != null ? m : r("WAWebNoop"),
        P;
      t[12] !== n ||
      t[13] !== u ||
      t[14] !== c ||
      t[15] !== R ||
      t[16] !== v ||
      t[17] !== _ ||
      t[18] !== C ||
      t[19] !== E ||
      t[20] !== f ||
      t[21] !== g ||
      t[22] !== y ||
      t[23] !== D ||
      t[24] !== x ||
      t[25] !== $
        ? ((P = s.jsx("div", {
            ref: I,
            children: s.jsx(r("WAWebMessageWrapper.react"), {
              onMsgFocus: v,
              onMsgBlur: R,
              showProfilePicture: y,
              ref: E,
              msg: D,
              displayType: x,
              isMsgVisible: $,
              selectable: f,
              selectedMessages: g,
              onMessageSelect: _,
              position: C,
              isFocusedMsg: u,
              getSequentialMsg: n,
              isFocusable: !0,
              errorBoundaryName: "message-row",
              isFollowUpReply: c,
            }),
          })),
          (t[12] = n),
          (t[13] = u),
          (t[14] = c),
          (t[15] = R),
          (t[16] = v),
          (t[17] = _),
          (t[18] = C),
          (t[19] = E),
          (t[20] = f),
          (t[21] = g),
          (t[22] = y),
          (t[23] = D),
          (t[24] = x),
          (t[25] = $),
          (t[26] = P))
        : (P = t[26]);
      var N;
      return (
        t[27] !== T || t[28] !== P
          ? ((N = s.jsx(r("WAWebPrivacyBlurWrapper.react"), {
              containerRef: I,
              category: T,
              children: P,
            })),
            (t[27] = T),
            (t[28] = P),
            (t[29] = N))
          : (N = t[29]),
        N
      );
    }
    var p = o("WAWebPREGatingUtils").isPREMessageSendEnabled() ? s.memo(m) : m;
    l.WAWebMessageRow = p;
  },
  98,
);
