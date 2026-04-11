__d(
  "WAWebAddGroupParticipantGroupHistoryContextProvider.react",
  [
    "WAWebAddGroupParticipantGroupHistoryContext.react",
    "WAWebGroupHistoryShareMode",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo,
      m = u.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.chat,
        a = e.children,
        i = e.enterFlowTimestamp,
        l = e.messageCountPromise,
        u = m(null),
        c = u[0],
        d = u[1],
        p = m(!1),
        _ = p[0],
        f = p[1],
        g;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = ["groupMetadata"]), (t[0] = g))
        : (g = t[0]);
      var h = o("useWAWebModelValues").useModelValues(n, g),
        y = h.groupMetadata,
        C;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = ["memberShareGroupHistoryMode", "participants"]), (t[1] = C))
        : (C = t[1]);
      var b = o("useWAWebModelValues").useOptionalModelValues(y, C),
        v;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function (t) {
            d(t);
          }),
          (t[2] = v))
        : (v = t[2]);
      var S = v,
        R;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = function (t) {
            f(t);
          }),
          (t[3] = R))
        : (R = t[3]);
      var L = R,
        E;
      if (
        t[4] !== (b == null ? void 0 : b.memberShareGroupHistoryMode) ||
        t[5] !== (b == null ? void 0 : b.participants)
      ) {
        var k;
        ((E =
          (b == null || (k = b.participants) == null ? void 0 : k.iAmAdmin()) ||
          (b == null ? void 0 : b.memberShareGroupHistoryMode) ===
            o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode
              .ALL_MEMBER_SHARE),
          (t[4] = b == null ? void 0 : b.memberShareGroupHistoryMode),
          (t[5] = b == null ? void 0 : b.participants),
          (t[6] = E));
      } else E = t[6];
      var I = E,
        T;
      t[7] !== I ||
      t[8] !== n.id ||
      t[9] !== i ||
      t[10] !== l ||
      t[11] !== c ||
      t[12] !== _
        ? ((T = {
            enterFlowTimestamp: i,
            groupWid: n.id,
            messageCountPromise: l,
            selectedMessageCount: c,
            setSelectedMessageCount: S,
            shouldSendGroupHistory: _,
            setShouldSendGroupHistory: L,
            canShareGroupHistory: I,
          }),
          (t[7] = I),
          (t[8] = n.id),
          (t[9] = i),
          (t[10] = l),
          (t[11] = c),
          (t[12] = _),
          (t[13] = T))
        : (T = t[13]);
      var D = T,
        x;
      return (
        t[14] !== a || t[15] !== D
          ? ((x = s.jsx(
              r("WAWebAddGroupParticipantGroupHistoryContext.react"),
              { value: D, children: a },
            )),
            (t[14] = a),
            (t[15] = D),
            (t[16] = x))
          : (x = t[16]),
        x
      );
    }
    l.default = p;
  },
  98,
);
