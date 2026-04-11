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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(22),
        a = e.chat,
        i = e.msg,
        l = e.onBack,
        m = e.onEnd,
        p = e.ref,
        _;
      t[0] !== m
        ? ((_ = {
            transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
            onEnd: m,
          }),
          (t[0] = m),
          (t[1] = _))
        : (_ = t[1]);
      var f = o("useWAWebFlow").useFlow(d.EventInfoDrawer, _),
        g = f[0],
        h = f[1],
        y = c(null),
        C = y[0],
        b = y[1],
        v = m != null ? m : h.end,
        S;
      t[2] !== h
        ? ((S = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o(
                  "WAWebChatGroupUtils",
                ).getOneToOneContactFromGroupContact(e, "participant_click");
                if (t != null) {
                  var n = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                      t,
                      "eventParticipants",
                    ),
                    r = n.chat;
                  (b(r), h.push(d.ParticipantInfoDrawer));
                }
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (t[2] = h),
          (t[3] = S))
        : (S = t[3]);
      var R = S;
      if (h.step == null) return null;
      var L = null;
      e: switch (h.step) {
        case d.EventInfoDrawer: {
          var E;
          t[4] !== a
            ? ((E = o("WAWebStateUtils").unproxy(a)), (t[4] = a), (t[5] = E))
            : (E = t[5]);
          var k;
          (t[6] !== v || t[7] !== R || t[8] !== i || t[9] !== l || t[10] !== E
            ? ((k = u.jsx(r("WAWebEventInfoDrawer.react"), {
                chat: E,
                msg: i,
                onBack: l,
                onEnd: v,
                onParticipantClick: R,
              })),
              (t[6] = v),
              (t[7] = R),
              (t[8] = i),
              (t[9] = l),
              (t[10] = E),
              (t[11] = k))
            : (k = t[11]),
            (L = k));
          break e;
        }
        case d.ParticipantInfoDrawer: {
          C != null || s(0, 79980);
          var I;
          t[12] !== h
            ? ((I = function () {
                return h.pop();
              }),
              (t[12] = h),
              (t[13] = I))
            : (I = t[13]);
          var T;
          (t[14] !== C || t[15] !== I
            ? ((T = u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                chat: C,
                onBack: I,
              })),
              (t[14] = C),
              (t[15] = I),
              (t[16] = T))
            : (T = t[16]),
            (L = T));
        }
      }
      var D;
      return (
        t[17] !== g || t[18] !== L || t[19] !== h || t[20] !== p
          ? ((D = u.jsx(g, { ref: p, flow: h, children: L })),
            (t[17] = g),
            (t[18] = L),
            (t[19] = h),
            (t[20] = p),
            (t[21] = D))
          : (D = t[21]),
        D
      );
    }
    l.default = m;
  },
  98,
);
