__d(
  "WAWebMessageAlbumRow.react",
  [
    "WAWebGetDisplayType",
    "WAWebMessageAlbumWrapper.react",
    "WAWebMessagePosition",
    "WAWebPrivacyBlurWrapper.react",
    "WAWebPrivacyModeBlurConfig",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(20),
        n = e.albumId,
        a = e.focusedMsgIndex,
        i = e.groupedWithNext,
        l = e.groupedWithPrev,
        u = e.handleAlbumRendered,
        c = e.isFocusedAlbum,
        p = e.isMsgVisible,
        _ = e.msgs,
        f = e.onMessageSelect,
        g = e.selectable,
        h = e.selectedMessages,
        y = e.showProfilePicture,
        C = r("useWAWebEqualModelMemo")(_),
        b;
      t[0] !== n || t[1] !== u || t[2] !== C
        ? ((b = function (t) {
            u(t, n, C);
          }),
          (t[0] = n),
          (t[1] = u),
          (t[2] = C),
          (t[3] = b))
        : (b = t[3]);
      var v = b,
        S;
      i && !l
        ? (S = o("WAWebMessagePosition").MsgPosition.FRONT)
        : i && l
          ? (S = o("WAWebMessagePosition").MsgPosition.MID)
          : !i && l
            ? (S = o("WAWebMessagePosition").MsgPosition.END)
            : (S = o("WAWebMessagePosition").MsgPosition.SINGLE);
      var R = C[0],
        L = d(null),
        E = "album-" + n,
        k = S,
        I;
      t[4] !== R
        ? ((I = o("WAWebGetDisplayType").getDisplayType(
            R == null ? void 0 : R.unsafe(),
          )),
          (t[4] = R),
          (t[5] = I))
        : (I = t[5]);
      var T;
      return (
        t[6] !== n ||
        t[7] !== a ||
        t[8] !== c ||
        t[9] !== p ||
        t[10] !== f ||
        t[11] !== S ||
        t[12] !== v ||
        t[13] !== g ||
        t[14] !== h ||
        t[15] !== y ||
        t[16] !== C ||
        t[17] !== E ||
        t[18] !== I
          ? ((T = s.jsx(r("WAWebPrivacyBlurWrapper.react"), {
              containerRef: L,
              category: o("WAWebPrivacyModeBlurConfig").BlurCategory.Media,
              children: s.jsx("div", {
                ref: L,
                children: s.jsx(
                  m,
                  {
                    msgs: C,
                    ref: v,
                    position: k,
                    isMsgVisible: p,
                    selectable: g,
                    selectedMessages: h,
                    onMessageSelect: f,
                    albumId: n,
                    isFocusedAlbum: c,
                    focusedMsgIndex: a,
                    displayType: I,
                    isFocusable: !0,
                    showProfilePicture: y,
                  },
                  E,
                ),
              }),
            })),
            (t[6] = n),
            (t[7] = a),
            (t[8] = c),
            (t[9] = p),
            (t[10] = f),
            (t[11] = S),
            (t[12] = v),
            (t[13] = g),
            (t[14] = h),
            (t[15] = y),
            (t[16] = C),
            (t[17] = E),
            (t[18] = I),
            (t[19] = T))
          : (T = t[19]),
        T
      );
    }
    l.default = p;
  },
  98,
);
