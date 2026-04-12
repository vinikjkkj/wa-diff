__d(
  "WAWebMessageAlbumRow.react",
  [
    "WAWebGetDisplayType",
    "WAWebMessageAlbumWrapper.react",
    "WAWebMessagePosition",
    "WAWebPrivacyBlurWrapper.react",
    "WAWebPrivacyModeBlurConfig",
    "react",
    "useWAWebEqualModelMemo",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useRef,
      m = s.memo(r("WAWebMessageAlbumWrapper.react"));
    function p(e) {
      var t = e.albumId,
        n = e.focusedMsgIndex,
        a = e.groupedWithNext,
        i = e.groupedWithPrev,
        l = e.handleAlbumRendered,
        u = e.isFocusedAlbum,
        p = e.isMsgVisible,
        _ = e.msgs,
        f = e.onMessageSelect,
        g = e.selectable,
        h = e.selectedMessages,
        y = e.showProfilePicture,
        C = r("useWAWebEqualModelMemo")(_),
        b = c(
          function (e) {
            l(e, t, C);
          },
          [l, t, C],
        ),
        v;
      a && !i
        ? (v = o("WAWebMessagePosition").MsgPosition.FRONT)
        : a && i
          ? (v = o("WAWebMessagePosition").MsgPosition.MID)
          : !a && i
            ? (v = o("WAWebMessagePosition").MsgPosition.END)
            : (v = o("WAWebMessagePosition").MsgPosition.SINGLE);
      var S = C[0],
        R = d(null);
      return s.jsx(r("WAWebPrivacyBlurWrapper.react"), {
        containerRef: R,
        category: o("WAWebPrivacyModeBlurConfig").BlurCategory.Media,
        children: s.jsx("div", {
          ref: R,
          children: s.jsx(
            m,
            {
              msgs: C,
              ref: b,
              position: v,
              isMsgVisible: p,
              selectable: g,
              selectedMessages: h,
              onMessageSelect: f,
              albumId: t,
              isFocusedAlbum: u,
              focusedMsgIndex: n,
              displayType: o("WAWebGetDisplayType").getDisplayType(
                S == null ? void 0 : S.unsafe(),
              ),
              isFocusable: !0,
              showProfilePicture: y,
            },
            "album-" + t,
          ),
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
