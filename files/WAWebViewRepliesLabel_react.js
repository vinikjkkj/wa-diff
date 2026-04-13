__d(
  "WAWebViewRepliesLabel.react",
  [
    "fbt",
    "WAWebFlexBox.react",
    "WAWebFollowUpReplyIcon.react",
    "WAWebFrontendMsgGetters",
    "WAWebIsInThreadsViewContext",
    "WAWebModalManager",
    "WAWebThreadsGating",
    "WAWebViewRepliesThreadsModal.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebIsRootMessage",
    "useWAWebViewAllRepliesReplyCount",
    "useWAWebViewRepliesThreads",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext,
      p = {
        container: {
          color: "xo1mcw5",
          paddingTop: "x1tiyuxx",
          paddingBottom: "xa0aww2",
          paddingInlineStart: "x181vq82",
          $$css: !0,
        },
        clickable: { cursor: "x1ypdohk", $$css: !0 },
      };
    function _(e) {
      var t,
        n = o("react-compiler-runtime").c(13),
        a = e.msg,
        i,
        l;
      n[0] !== a
        ? ((l = a.unsafe()),
          (i = o("WAWebFrontendMsgGetters").getChat(l)),
          (n[0] = a),
          (n[1] = i),
          (n[2] = l))
        : ((i = n[1]), (l = n[2]));
      var c = i;
      r("useWAWebViewRepliesThreads")(c);
      var d =
          (t = c == null ? void 0 : c.viewRepliesThreads) != null ? t : null,
        _ = r("useWAWebIsRootMessage")(l, d),
        f = r("useWAWebViewAllRepliesReplyCount")(c, _),
        g;
      n[3] !== c || n[4] !== _
        ? ((g = function () {
            c != null &&
              _ != null &&
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebViewRepliesThreadsModal.react"), {
                  chat: c,
                  threadId: _,
                }),
              );
          }),
          (n[3] = c),
          (n[4] = _),
          (n[5] = g))
        : (g = n[5]);
      var h = g,
        y = m(r("WAWebIsInThreadsViewContext"));
      if (
        y ||
        c == null ||
        f < 2 ||
        !o("WAWebThreadsGating").isViewRepliesEntryPointEnabled(c)
      )
        return null;
      var C;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = [p.container, p.clickable]), (n[6] = C))
        : (C = n[6]);
      var b;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = u.jsx(o("WAWebFollowUpReplyIcon.react").FollowUpReplyIcon, {
            width: 15,
            height: 15,
          })),
          (n[7] = b))
        : (b = n[7]);
      var v;
      n[8] !== f
        ? ((v = u.jsx(r("WDSText.react"), {
            type: "Body2Emphasized",
            colorName: "contentActionEmphasized",
            children: s._(/*BTDS*/ '_j{"*":"{count} replies","_1":"1 reply"}', [
              s._plural(f, "count"),
            ]),
          })),
          (n[8] = f),
          (n[9] = v))
        : (v = n[9]);
      var S;
      return (
        n[10] !== h || n[11] !== v
          ? ((S = u.jsxs(o("WAWebFlexBox.react").FlexRow, {
              xstyle: C,
              align: "center",
              columnGap: 4,
              onClick: h,
              role: "button",
              tabIndex: 0,
              children: [b, v],
            })),
            (n[10] = h),
            (n[11] = v),
            (n[12] = S))
          : (S = n[12]),
        S
      );
    }
    l.default = _;
  },
  226,
);
