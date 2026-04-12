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
        n = e.msg,
        a = n.unsafe(),
        i = o("WAWebFrontendMsgGetters").getChat(a);
      r("useWAWebViewRepliesThreads")(i);
      var l =
          (t = i == null ? void 0 : i.viewRepliesThreads) != null ? t : null,
        c = r("useWAWebIsRootMessage")(a, l),
        _ = r("useWAWebViewAllRepliesReplyCount")(i, c),
        f = d(
          function () {
            i != null &&
              c != null &&
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebViewRepliesThreadsModal.react"), {
                  chat: i,
                  threadId: c,
                }),
              );
          },
          [i, c],
        ),
        g = m(r("WAWebIsInThreadsViewContext"));
      return g ||
        i == null ||
        _ < 2 ||
        !o("WAWebThreadsGating").isViewRepliesEntryPointEnabled(i)
        ? null
        : u.jsxs(o("WAWebFlexBox.react").FlexRow, {
            xstyle: [p.container, p.clickable],
            align: "center",
            columnGap: 4,
            onClick: f,
            role: "button",
            tabIndex: 0,
            children: [
              u.jsx(o("WAWebFollowUpReplyIcon.react").FollowUpReplyIcon, {
                width: 15,
                height: 15,
              }),
              u.jsx(r("WDSText.react"), {
                type: "Body2Emphasized",
                colorName: "contentActionEmphasized",
                children: s._(
                  /*BTDS*/ '_j{"*":"{count} replies","_1":"1 reply"}',
                  [s._plural(_, "count")],
                ),
              }),
            ],
          });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
