__d(
  "useWAWebWaitingRoomSeeAll",
  [
    "WAWebCallCollection",
    "WAWebEventEmitter",
    "WAWebVoipParticipantsModal.react",
    "react",
    "react-compiler-runtime",
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
    function p(e, t, n, a, i) {
      var l = o("react-compiler-runtime").c(23),
        u = r("useWAWebVoipModalManager")(),
        c = u.closeModal,
        p = u.openModal,
        f = m(_),
        g = f[0],
        h = m(!1),
        y = h[0],
        C = h[1],
        b,
        v;
      (l[0] !== g
        ? ((b = function () {
            return function () {
              g.removeAllListeners();
            };
          }),
          (v = [g]),
          (l[0] = g),
          (l[1] = b),
          (l[2] = v))
        : ((b = l[1]), (v = l[2])),
        d(b, v));
      var S, R;
      (l[3] !== y || l[4] !== g || l[5] !== n || l[6] !== a
        ? ((S = function () {
            y &&
              g.trigger("update", {
                participantStates: n,
                participantsWithoutSelf: a,
              });
          }),
          (R = [n, a, g, y]),
          (l[3] = y),
          (l[4] = g),
          (l[5] = n),
          (l[6] = a),
          (l[7] = S),
          (l[8] = R))
        : ((S = l[7]), (R = l[8])),
        d(S, R));
      var L;
      l[9] !== c
        ? ((L = function () {
            (C(!1), c());
          }),
          (l[9] = c),
          (l[10] = L))
        : (L = l[10]);
      var E = L,
        k;
      l[11] !== E ||
      l[12] !== i ||
      l[13] !== e ||
      l[14] !== t ||
      l[15] !== p ||
      l[16] !== g ||
      l[17] !== n ||
      l[18] !== a
        ? ((k = function () {
            e
              ? t()
              : (C(!0),
                p(
                  s.jsx(r("WAWebVoipParticipantsModal.react"), {
                    call: r("WAWebCallCollection").activeCall,
                    onClose: E,
                    onRingParticipant: i,
                    initialParticipantStates: n,
                    initialParticipantsWithoutSelf: a,
                    participantDataEmitter: g,
                  }),
                  { skipDarkTheme: !0 },
                ));
          }),
          (l[11] = E),
          (l[12] = i),
          (l[13] = e),
          (l[14] = t),
          (l[15] = p),
          (l[16] = g),
          (l[17] = n),
          (l[18] = a),
          (l[19] = k))
        : (k = l[19]);
      var I = k,
        T;
      return (
        l[20] !== I || l[21] !== y
          ? ((T = { handleWaitingRoomSeeAll: I, isParticipantsModalOpen: y }),
            (l[20] = I),
            (l[21] = y),
            (l[22] = T))
          : (T = l[22]),
        T
      );
    }
    function _() {
      return new (r("WAWebEventEmitter"))();
    }
    l.default = p;
  },
  98,
);
