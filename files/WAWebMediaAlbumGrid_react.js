__d(
  "WAWebMediaAlbumGrid.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebCmd",
    "WAWebDisplayType",
    "WAWebMediaAlbumPosition",
    "WAWebMediaAlbumUtils",
    "WAWebMediaVideo.react",
    "WAWebMessagePicture.react",
    "WAWebMsgType",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "err",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u = ["elRef", "overlayContent"],
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useImperativeHandle,
      f = p.useRef,
      g = {
        albumTopLeft: {
          marginTop: "xdj266r",
          marginInlineEnd: "x1p8j9ns",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
        albumTopRight: {
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
        albumBottomLeft: {
          marginTop: "x7r5mf7",
          marginInlineEnd: "x1p8j9ns",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
        albumBottomRight: {
          marginTop: "x7r5mf7",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
      },
      h = new Map([
        [o("WAWebMediaAlbumPosition").AlbumPosition.TOP_LEFT, g.albumTopLeft],
        [o("WAWebMediaAlbumPosition").AlbumPosition.TOP_RIGHT, g.albumTopRight],
        [
          o("WAWebMediaAlbumPosition").AlbumPosition.BOTTOM_LEFT,
          g.albumBottomLeft,
        ],
        [
          o("WAWebMediaAlbumPosition").AlbumPosition.BOTTOM_RIGHT,
          g.albumBottomRight,
        ],
      ]);
    function y(t) {
      var n = o("react-compiler-runtime").c(15),
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.albumPosition,
        s = i.currentAlbumMessageIndex,
        u = i.displayType,
        d = i.msg,
        p = i.numAdditionalMedia,
        g = f(null),
        y = f(null),
        v = o("WAWebMediaAlbumUtils").isAlbumPortraitOriented(i.albumMsgs),
        S =
          l === o("WAWebMediaAlbumPosition").AlbumPosition.TOP_RIGHT &&
          (i.albumMsgs.length === 3 || (i.albumMsgs.length === 2 && !v)),
        R =
          (l === o("WAWebMediaAlbumPosition").AlbumPosition.BOTTOM_LEFT &&
            i.albumMsgs.length === 3) ||
          (l === o("WAWebMediaAlbumPosition").AlbumPosition.TOP_LEFT &&
            i.albumMsgs.length < 4 &&
            !(i.albumMsgs.length === 2 && v)),
        L = [
          [{ gridColumn: "1 / 3", gridRow: "1 / 3" }],
          [
            { gridColumn: "1 / 3", gridRow: "1 / 2" },
            { gridColumn: "1 / 3", gridRow: "2 / 3" },
          ],
          [
            { gridColumn: "1 / 3", gridRow: "1 / 2" },
            { gridColumn: "1 / 2", gridRow: "2 / 3" },
            { gridColumn: "2 / 3", gridRow: "2 / 3" },
          ],
          [
            { gridColumn: "1 / 2", gridRow: "1 / 2" },
            { gridColumn: "2 / 3", gridRow: "1 / 2" },
            { gridColumn: "1 / 2", gridRow: "2 / 3" },
            { gridColumn: "2 / 3", gridRow: "2 / 3" },
          ],
        ],
        E = [
          { gridColumn: "1 / 2", gridRow: "1 / 3" },
          { gridColumn: "2 / 3", gridRow: "1 / 3" },
        ],
        k = function () {
          d.type === o("WAWebMsgType").MSG_TYPE.REVOKED &&
            o("WAWebCmd").Cmd.refreshMessages();
        };
      o("useWAWebListener").useListener(d, "change:type", k);
      var I;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = function () {
            return y.current;
          }),
          (n[0] = I))
        : (I = n[0]);
      var T = I,
        D;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = function () {
            return r("WANullthrows")(g.current);
          }),
          (n[1] = D))
        : (D = n[1]);
      var x = D,
        $;
      (n[2] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = function () {
            return { getRef: T, getContainerElement: x };
          }),
          (n[2] = $))
        : ($ = n[2]),
        _(a, $));
      var P = function () {
          return i.albumMsgs.length === 2 && v
            ? E[s]
            : L[Math.min(i.albumMsgs.length, 4) - 1][s];
        },
        N = P(),
        M = { 0: "xh8yej3 x1qftm1w xt7dq6l", 1: "xh8yej3 xt7dq6l x60eefa" }[
          !!o("WAWebDisplayType").isWideDisplay(u) << 0
        ],
        w = (c || (c = r("stylex"))).props(
          h.get(l),
          R && o("WAWebUISpacing").uiMargin.end0,
          S && o("WAWebUISpacing").uiMargin.top3,
        ),
        A;
      n[3] !== p
        ? ((A =
            p != null && p > 0 ? m.jsx(C, { numAdditionalMedia: p }) : null),
          (n[3] = p),
          (n[4] = A))
        : (A = n[4]);
      var F;
      n[5] !== i || n[6] !== A
        ? ((F = m.jsx(
            b,
            babelHelpers.extends({}, i, { elRef: y, overlayContent: A }),
          )),
          (n[5] = i),
          (n[6] = A),
          (n[7] = F))
        : (F = n[7]);
      var O;
      n[8] !== w || n[9] !== F
        ? ((O = m.jsx("div", babelHelpers.extends({}, w, { children: F }))),
          (n[8] = w),
          (n[9] = F),
          (n[10] = O))
        : (O = n[10]);
      var B;
      return (
        n[11] !== N || n[12] !== M || n[13] !== O
          ? ((B = m.jsx("div", {
              ref: g,
              style: N,
              className: M,
              children: O,
            })),
            (n[11] = N),
            (n[12] = M),
            (n[13] = O),
            (n[14] = B))
          : (B = n[14]),
        B
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.numAdditionalMedia,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r =
            "x10l6tqk x1n327nk xr1yuqi x11t971q x4ii5y1 xvc5jky x1h833of x17t9dm2 x47corl"),
          (t[0] = r))
        : (r = t[0]);
      var a;
      return (
        t[1] !== n
          ? ((a = m.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
              className: r,
              children: s._(/*BTDS*/ "+{number}", [s._param("number", n)]),
            })),
            (t[1] = n),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(23),
        n,
        a,
        i;
      if (
        (t[0] !== e
          ? ((n = e.elRef),
            (a = e.overlayContent),
            (i = babelHelpers.objectWithoutPropertiesLoose(e, u)),
            (t[0] = e),
            (t[1] = n),
            (t[2] = a),
            (t[3] = i))
          : ((n = t[1]), (a = t[2]), (i = t[3])),
        i.msg.type === o("WAWebMsgType").MSG_TYPE.IMAGE)
      ) {
        var l;
        return (
          t[4] !== n ||
          t[5] !== a ||
          t[6] !== i.albumMsgs ||
          t[7] !== i.albumTheme ||
          t[8] !== i.currentAlbumMessageIndex ||
          t[9] !== i.displayType ||
          t[10] !== i.isMsgVisible ||
          t[11] !== i.msg ||
          t[12] !== i.zoomMsg
            ? ((l = m.jsx(o("WAWebMessagePicture.react").ImageMessage, {
                theme: i.albumTheme,
                albumMsgs: i.albumMsgs,
                msg: i.msg,
                currentAlbumMessageIndex: i.currentAlbumMessageIndex,
                mediaData: i.msg.mediaData,
                ref: n,
                isMsgVisible: i.isMsgVisible,
                zoomMsg: i.zoomMsg,
                overlayContent: a,
                displayAuthor: !1,
                displayType: i.displayType,
              })),
              (t[4] = n),
              (t[5] = a),
              (t[6] = i.albumMsgs),
              (t[7] = i.albumTheme),
              (t[8] = i.currentAlbumMessageIndex),
              (t[9] = i.displayType),
              (t[10] = i.isMsgVisible),
              (t[11] = i.msg),
              (t[12] = i.zoomMsg),
              (t[13] = l))
            : (l = t[13]),
          l
        );
      }
      if (i.msg.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
        var s;
        return (
          t[14] !== n ||
          t[15] !== a ||
          t[16] !== i.albumMsgs ||
          t[17] !== i.albumTheme ||
          t[18] !== i.currentAlbumMessageIndex ||
          t[19] !== i.displayType ||
          t[20] !== i.msg ||
          t[21] !== i.zoomMsg
            ? ((s = m.jsx(r("WAWebMediaVideo.react"), {
                theme: i.albumTheme,
                albumMsgs: i.albumMsgs,
                msg: i.msg,
                currentAlbumMessageIndex: i.currentAlbumMessageIndex,
                ref: n,
                zoomMsg: i.zoomMsg,
                displayAuthor: !1,
                overlayContent: a,
                displayType: i.displayType,
              })),
              (t[14] = n),
              (t[15] = a),
              (t[16] = i.albumMsgs),
              (t[17] = i.albumTheme),
              (t[18] = i.currentAlbumMessageIndex),
              (t[19] = i.displayType),
              (t[20] = i.msg),
              (t[21] = i.zoomMsg),
              (t[22] = s))
            : (s = t[22]),
          s
        );
      }
      throw r("err")("Unexpected Album Type: " + i.msg.type);
    }
    l.default = y;
  },
  226,
);
