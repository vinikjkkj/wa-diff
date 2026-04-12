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
      var t = e.msgIds,
        n = o("WAWebAddOnBubblesContainerConditions").useHasCommentsBubble(t),
        a = d(t),
        i = o("useWAWebCommentReplyCount").useWAWebCommentReplyCount(a);
      if (!n) return null;
      var l = function () {
          var e = [];
          for (var n of t) {
            var a = o("WAWebMsgCollection").MsgCollection.get(n);
            a && e.push(a);
          }
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebCommentsModal.react"), { parentMsgs: e }),
          );
        },
        m = function () {
          return o("WAWebCommentFrontendUtils").isAlbumMessageContainer(a)
            ? o("WAWebCmd").Cmd.openMediaViewerForAlbumMedia(
                o("WAWebStateUtils").unproxy(a[0]),
              )
            : l();
        },
        p = u.jsx(o("WAWebReplyRefreshedIcon.react").ReplyRefreshedIcon, {
          width: 20,
          height: 20,
          displayInline: !0,
          directional: !0,
        });
      return u.jsx("button", {
        onClick: m,
        children: u.jsx(r("WAWebAddOnBubble.react"), {
          children: u.jsxs(o("WAWebFlexBox.react").FlexRow, {
            xstyle: [
              c.container,
              o("WAWebUISpacing").uiPadding.start1,
              o("WAWebUISpacing").uiPadding.end3,
            ],
            align: "center",
            columnGap: 2,
            justify: "center",
            children: [
              p,
              s._(/*BTDS*/ '_j{"*":"{count} replies","_1":"1 reply"}', [
                s._plural(i, "count"),
              ]),
            ],
          }),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
