__d(
  "WAWebCommentsBubbleContainer.react",
  [
    "fbt",
    "WAWebAddOnBubble.react",
    "WAWebAddOnBubblesContainerConditions",
    "WAWebCmd",
    "WAWebCommentFrontendUtils",
    "WAWebCommentsModal.react",
    "WAWebFlexBox.react",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebReplyRefreshedIcon.react",
    "WAWebStateUtils",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "useWAWebCommentReplyCount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { container: { fontSize: "x1f6kntn", color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = [];
      for (var n of e) {
        var r = o("WAWebMsgCollection").MsgCollection.get(n);
        r != null && t.push(r);
      }
      return t;
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.msgIds,
        a = o("WAWebAddOnBubblesContainerConditions").useHasCommentsBubble(n),
        i;
      t[0] !== n ? ((i = d(n)), (t[0] = n), (t[1] = i)) : (i = t[1]);
      var l = i,
        m = o("useWAWebCommentReplyCount").useWAWebCommentReplyCount(l);
      if (!a) return null;
      var p;
      t[2] !== n
        ? ((p = function () {
            var e = [];
            for (var t of n) {
              var a = o("WAWebMsgCollection").MsgCollection.get(t);
              a && e.push(a);
            }
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebCommentsModal.react"), { parentMsgs: e }),
            );
          }),
          (t[2] = n),
          (t[3] = p))
        : (p = t[3]);
      var _ = p,
        f;
      t[4] !== l || t[5] !== _
        ? ((f = function () {
            return o("WAWebCommentFrontendUtils").isAlbumMessageContainer(l)
              ? o("WAWebCmd").Cmd.openMediaViewerForAlbumMedia(
                  o("WAWebStateUtils").unproxy(l[0]),
                )
              : _();
          }),
          (t[4] = l),
          (t[5] = _),
          (t[6] = f))
        : (f = t[6]);
      var g = f,
        h;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx(o("WAWebReplyRefreshedIcon.react").ReplyRefreshedIcon, {
            width: 20,
            height: 20,
            displayInline: !0,
            directional: !0,
          })),
          (t[7] = h))
        : (h = t[7]);
      var y = h,
        C;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = [
            c.container,
            o("WAWebUISpacing").uiPadding.start1,
            o("WAWebUISpacing").uiPadding.end3,
          ]),
          (t[8] = C))
        : (C = t[8]);
      var b;
      t[9] !== m
        ? ((b = u.jsx(r("WAWebAddOnBubble.react"), {
            children: u.jsxs(o("WAWebFlexBox.react").FlexRow, {
              xstyle: C,
              align: "center",
              columnGap: 2,
              justify: "center",
              children: [
                y,
                s._(/*BTDS*/ '_j{"*":"{count} replies","_1":"1 reply"}', [
                  s._plural(m, "count"),
                ]),
              ],
            }),
          })),
          (t[9] = m),
          (t[10] = b))
        : (b = t[10]);
      var v;
      return (
        t[11] !== g || t[12] !== b
          ? ((v = u.jsx("button", { onClick: g, children: b })),
            (t[11] = g),
            (t[12] = b),
            (t[13] = v))
          : (v = t[13]),
        v
      );
    }
    l.default = m;
  },
  226,
);
