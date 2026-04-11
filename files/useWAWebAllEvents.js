__d(
  "useWAWebAllEvents",
  [
    "WAWebChatCollection",
    "WAWebFrontendMsgGetters",
    "compactMap",
    "react",
    "useWAWebCallbackOnce",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebUiIdle",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useState;
    function m(e) {
      var t,
        n = r("useWAWebUnmountSignal")(),
        a = r("useWAWebUiIdle")(),
        i =
          (t = o("useWAWebModelValues").useOptionalModelValues(
            e == null ? void 0 : e.groupMetadata,
            ["joinedSubgroups"],
          )) != null
            ? t
            : {},
        l = i.joinedSubgroups,
        s = o("useWAWebModelValues").useOptionalModelValues(e, ["msgs"]),
        m = d([]),
        p = m[0],
        _ = m[1],
        f = u(
          function () {
            var e = [];
            if (l && l.length > 0) {
              var t = r("compactMap")(l, function (e) {
                return o("WAWebChatCollection").ChatCollection.get(e);
              });
              e.push.apply(e, t);
            } else s != null && e.push(s);
            if (!n.aborted) {
              var a = e.map(function (e) {
                return e.getEventMsgs();
              });
              _(a);
            }
          },
          [l, s, n.aborted],
        );
      c(f, [f]);
      var g = d([]),
        h = g[0],
        y = g[1],
        C = u(
          function () {
            var e = [];
            (p.forEach(function (t) {
              var n = t.reduce(function (e, n) {
                var r = o("WAWebFrontendMsgGetters").getAsEventCreation(n);
                return (r != null && e.push({ chat: t.chat, msg: r }), e);
              }, []);
              e.push.apply(e, n);
            }),
              !n.aborted && y(e));
          },
          [p, n.aborted],
        ),
        b = r("useWAWebCallbackOnce")(function () {
          n.aborted ||
            p.forEach(function (e) {
              return void e.queryEvents({ recurse: !0 });
            });
        });
      return (
        o("useWAWebListener").useListeners(
          p.map(function (e) {
            return {
              source: e,
              eventOrEvents: ["add", "remove", "reset"],
              callback: C,
            };
          }),
        ),
        c(
          function () {
            C();
          },
          [C],
        ),
        a(b),
        h.sort(function (e, t) {
          return e.msg.eventStartTime - t.msg.eventStartTime;
        })
      );
    }
    l.useAllEvents = m;
  },
  98,
);
