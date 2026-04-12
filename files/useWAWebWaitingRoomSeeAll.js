__d(
  "useWAWebWaitingRoomSeeAll",
  [
    "WAWebCallCollection",
    "WAWebEventEmitter",
    "WAWebVoipParticipantsModal.react",
    "react",
    "useWAWebVoipModalManager",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useState;
    function p(e, t, n, o, a) {
      var i = r("useWAWebVoipModalManager")(),
        l = i.closeModal,
        u = i.openModal,
        p = m(function () {
          return new (r("WAWebEventEmitter"))();
        }),
        _ = p[0],
        f = m(!1),
        g = f[0],
        h = f[1];
      (d(
        function () {
          return function () {
            _.removeAllListeners();
          };
        },
        [_],
      ),
        d(
          function () {
            g &&
              _.trigger("update", {
                participantStates: n,
                participantsWithoutSelf: o,
              });
          },
          [n, o, _, g],
        ));
      var y = c(
          function () {
            (h(!1), l());
          },
          [l],
        ),
        C = c(
          function () {
            e
              ? t()
              : (h(!0),
                u(
                  s.jsx(r("WAWebVoipParticipantsModal.react"), {
                    call: r("WAWebCallCollection").activeCall,
                    onClose: y,
                    onRingParticipant: a,
                    initialParticipantStates: n,
                    initialParticipantsWithoutSelf: o,
                    participantDataEmitter: _,
                  }),
                  { skipDarkTheme: !0 },
                ));
          },
          [y, a, e, t, u, _, n, o],
        );
      return { handleWaitingRoomSeeAll: C, isParticipantsModalOpen: g };
    }
    l.default = p;
  },
  98,
);
