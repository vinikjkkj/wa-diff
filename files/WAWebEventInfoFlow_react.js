__d(
  "WAWebEventInfoFlow.react",
  [
    "invariant",
    "$InternalEnum",
    "WAWebChatGroupUtils",
    "WAWebEventInfoDrawer.react",
    "WAWebFindChatAction",
    "WAWebInfoFlowLoadable",
    "WAWebStateUtils",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = n("$InternalEnum").Mirrored([
        "EventInfoDrawer",
        "ParticipantInfoDrawer",
      ]);
    function m(e) {
      var t = e.chat,
        a = e.msg,
        i = e.onBack,
        l = e.onEnd,
        m = e.ref,
        p = o("useWAWebFlow").useFlow(d.EventInfoDrawer, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
          onEnd: l,
        }),
        _ = p[0],
        f = p[1],
        g = c(null),
        h = g[0],
        y = g[1],
        C = l != null ? l : f.end,
        b = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(
              e,
              "participant_click",
            );
            if (t != null) {
              var n = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                  t,
                  "eventParticipants",
                ),
                r = n.chat;
              (y(r), f.push(d.ParticipantInfoDrawer));
            }
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })();
      if (f.step == null) return null;
      var v = null;
      switch (f.step) {
        case d.EventInfoDrawer:
          v = u.jsx(r("WAWebEventInfoDrawer.react"), {
            chat: o("WAWebStateUtils").unproxy(t),
            msg: a,
            onBack: i,
            onEnd: C,
            onParticipantClick: b,
          });
          break;
        case d.ParticipantInfoDrawer:
          (h != null || s(0, 79980),
            (v = u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
              chat: h,
              onBack: function () {
                return f.pop();
              },
            })));
          break;
      }
      return u.jsx(_, { ref: m, flow: f, children: v });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
