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
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.albumPosition,
        l = a.currentAlbumMessageIndex,
        s = a.displayType,
        u = a.msg,
        d = a.numAdditionalMedia,
        p = f(null),
        g = f(null),
        y = o("WAWebMediaAlbumUtils").isAlbumPortraitOriented(a.albumMsgs),
        v =
          i === o("WAWebMediaAlbumPosition").AlbumPosition.TOP_RIGHT &&
          (a.albumMsgs.length === 3 || (a.albumMsgs.length === 2 && !y)),
        S =
          (i === o("WAWebMediaAlbumPosition").AlbumPosition.BOTTOM_LEFT &&
            a.albumMsgs.length === 3) ||
          (i === o("WAWebMediaAlbumPosition").AlbumPosition.TOP_LEFT &&
            a.albumMsgs.length < 4 &&
            !(a.albumMsgs.length === 2 && y)),
        R = [
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
        L = [
          { gridColumn: "1 / 2", gridRow: "1 / 3" },
          { gridColumn: "2 / 3", gridRow: "1 / 3" },
        ],
        E = function () {
          u.type === o("WAWebMsgType").MSG_TYPE.REVOKED &&
            o("WAWebCmd").Cmd.refreshMessages();
        };
      o("useWAWebListener").useListener(u, "change:type", E);
      var k = function () {
          return g.current;
        },
        I = function () {
          return r("WANullthrows")(p.current);
        };
      _(n, function () {
        return { getRef: k, getContainerElement: I };
      });
      var T = function () {
        return a.albumMsgs.length === 2 && y
          ? L[l]
          : R[Math.min(a.albumMsgs.length, 4) - 1][l];
      };
      return m.jsx("div", {
        ref: p,
        style: T(),
        className: {
          0: "xh8yej3 x1qftm1w xt7dq6l",
          1: "xh8yej3 xt7dq6l x60eefa",
        }[!!o("WAWebDisplayType").isWideDisplay(s) << 0],
        children: m.jsx(
          "div",
          babelHelpers.extends(
            {},
            (c || (c = r("stylex"))).props(
              h.get(i),
              S && o("WAWebUISpacing").uiMargin.end0,
              v && o("WAWebUISpacing").uiMargin.top3,
            ),
            {
              children: m.jsx(
                b,
                babelHelpers.extends({}, a, {
                  elRef: g,
                  overlayContent:
                    d != null && d > 0
                      ? m.jsx(C, { numAdditionalMedia: d })
                      : null,
                }),
              ),
            },
          ),
        ),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.numAdditionalMedia;
      return m.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
        className:
          "x10l6tqk x1n327nk xr1yuqi x11t971q x4ii5y1 xvc5jky x1h833of x17t9dm2 x47corl",
        children: s._(/*BTDS*/ "+{number}", [s._param("number", t)]),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.elRef,
        n = e.overlayContent,
        a = babelHelpers.objectWithoutPropertiesLoose(e, u);
      if (a.msg.type === o("WAWebMsgType").MSG_TYPE.IMAGE)
        return m.jsx(o("WAWebMessagePicture.react").ImageMessage, {
          theme: a.albumTheme,
          albumMsgs: a.albumMsgs,
          msg: a.msg,
          currentAlbumMessageIndex: a.currentAlbumMessageIndex,
          mediaData: a.msg.mediaData,
          ref: t,
          isMsgVisible: a.isMsgVisible,
          zoomMsg: a.zoomMsg,
          overlayContent: n,
          displayAuthor: !1,
          displayType: a.displayType,
        });
      if (a.msg.type === o("WAWebMsgType").MSG_TYPE.VIDEO)
        return m.jsx(r("WAWebMediaVideo.react"), {
          theme: a.albumTheme,
          albumMsgs: a.albumMsgs,
          msg: a.msg,
          currentAlbumMessageIndex: a.currentAlbumMessageIndex,
          ref: t,
          zoomMsg: a.zoomMsg,
          displayAuthor: !1,
          overlayContent: n,
          displayType: a.displayType,
        });
      throw r("err")("Unexpected Album Type: " + a.msg.type);
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
