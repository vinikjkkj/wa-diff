__d(
  "WAWebChatInfoMediaSection.react",
  [
    "fbt",
    "WAWebChatInfoDrawerRow.react",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatMedia",
    "WAWebMediaGallery.react",
    "WAWebSpinner.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WDSIconIcPermMedia.react",
    "react",
    "useWAWebListener",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useState;
    function _(e, t) {
      var n = p(null),
        a = n[0],
        i = n[1],
        l = r("useWAWebUnmountSignal")(),
        s = d(
          function () {
            o("WAWebChatMedia")
              .countAllMedia(e, t)
              .then(function (e) {
                l.aborted || i(e);
              });
          },
          [e, l, t],
        );
      return (
        m(s, [s]),
        o("useWAWebListener").useListener(
          e.getMediaMsgs(),
          ["add", "remove"],
          s,
        ),
        o("useWAWebListener").useListener(e.getDocMsgs(), ["add", "remove"], s),
        o("useWAWebListener").useListener(
          e.getLinkMsgs(),
          ["add", "remove"],
          s,
        ),
        a
      );
    }
    function f(e) {
      var t = e.chat,
        n = e.threadId,
        r = _(t, n);
      if (r == null)
        return u.jsx(o("WAWebSpinner.react").Spinner, { size: 16, stroke: 6 });
      var a = s._(/*BTDS*/ '_j{"*":"{mediaCount}"}', [
        s._param("mediaCount", r, [0]),
      ]);
      return u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
        color: "wdsContentDeemphasized",
        children: a,
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.chat,
        n = e.onMediaGallery,
        a = e.threadId,
        i = s._(/*BTDS*/ "Media, links and docs"),
        l = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, {
          title: i,
        }),
        c = u.jsx(f, { chat: t, threadId: a });
      return u.jsxs(
        o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
        {
          titleTestId: "section-media",
          xstyle: o("WAWebUISpacing").uiPadding.horiz0,
          children: [
            u.jsx(
              o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
              {
                testid: void 0,
                icon: u.jsx(r("WDSIconIcPermMedia.react"), {}),
                onClick: n,
                title: l,
                side: c,
              },
            ),
            u.jsx(r("WAWebMediaGallery.react"), {
              chat: t,
              mediaMsgs: t.getMediaMsgs(),
              theme: "chat-info",
              selectable: !1,
              isRefresh: !0,
              threadId: a,
            }),
          ],
        },
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
