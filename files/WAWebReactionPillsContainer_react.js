__d(
  "WAWebReactionPillsContainer.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebReactionEmoji.react",
    "WDSChip.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useRef,
      m = c.useState,
      p = {
        pillsContainer: {
          maxHeight: "x1aoj0v",
          overflowY: "x1odjw0f",
          paddingTop: "x16ovd2e",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          $$css: !0,
        },
        pillsContainerGrid: { flexWrap: "x1a02dak", $$css: !0 },
        pillsContainerRow: {
          flexWrap: "xozqiw3",
          overflowX: "xw2csxc",
          $$css: !0,
        },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(35),
        n = e.addReactionPill,
        a = e.display,
        i = e.mode,
        l = e.onPillClick,
        c = e.reactionAggregates,
        _ = a === void 0 ? "row" : a,
        f = i === void 0 ? "interactive" : i,
        g;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = []), (t[0] = g))
        : (g = t[0]);
      var h = d(g),
        y = m(-1),
        C = y[0],
        b = y[1],
        v = _ === "row" ? p.pillsContainerRow : p.pillsContainerGrid,
        S = c.length,
        R;
      t[1] !== S
        ? ((R = function (t) {
            var e;
            t < 0 || t >= S || (b(t), (e = h.current[t]) == null || e.focus());
          }),
          (t[1] = S),
          (t[2] = R))
        : (R = t[2]);
      var L = R,
        E,
        k,
        I;
      t[3] !== L || t[4] !== C
        ? ((E = function () {
            C !== -1 && L(C - 1);
          }),
          (k = function () {
            C !== -1 && L(C + 1);
          }),
          (I = function () {
            C !== -1 && L(0);
          }),
          (t[3] = L),
          (t[4] = C),
          (t[5] = E),
          (t[6] = k),
          (t[7] = I))
        : ((E = t[5]), (k = t[6]), (I = t[7]));
      var T;
      t[8] !== L || t[9] !== C || t[10] !== S
        ? ((T = function () {
            C !== -1 && L(S - 1);
          }),
          (t[8] = L),
          (t[9] = C),
          (t[10] = S),
          (t[11] = T))
        : (T = t[11]);
      var D;
      t[12] !== E || t[13] !== k || t[14] !== I || t[15] !== T
        ? ((D = { left: E, right: k, home: I, end: T }),
          (t[12] = E),
          (t[13] = k),
          (t[14] = I),
          (t[15] = T),
          (t[16] = D))
        : (D = t[16]);
      var x = D,
        $;
      t[17] !== n
        ? (($ =
            n != null
              ? s._(
                  /*BTDS*/ "All message reactions, including the possibility to add a new one",
                )
              : s._(/*BTDS*/ "All message reactions")),
          (t[17] = n),
          (t[18] = $))
        : ($ = t[18]);
      var P = $,
        N;
      t[19] !== v
        ? ((N = [p.pillsContainer, v]), (t[19] = v), (t[20] = N))
        : (N = t[20]);
      var M;
      t[21] !== C || t[22] !== f || t[23] !== l || t[24] !== c || t[25] !== S
        ? ((M = c.map(function (e, t) {
            var n = e.count,
              a = e.emoji,
              i = e.hasMyReaction,
              c = t === 0,
              d = s._(
                /*BTDS*/ "{reaction}, {count} reactions, {position} of {total}",
                [
                  s._param("reaction", a),
                  s._param("count", n),
                  s._param("position", t + 1),
                  s._param("total", S),
                ],
              );
            return u.jsx(
              r("WDSChip.react"),
              {
                label: d,
                isDisabled: f === "read-only",
                isSelected: i,
                onPress: function () {
                  return l(a, i);
                },
                focusable: C === -1 ? c : C === t,
                "aria-pressed": i,
                testid: void 0,
                smbLabelsContent: u.jsx(
                  o("WAWebReactionEmoji.react").ReactionEmoji,
                  { reaction: a },
                ),
                endNumber: n,
                onFocus: function () {
                  return b(t);
                },
                onBlur: function () {
                  return b(-1);
                },
                ref: function (n) {
                  h.current[t] = n;
                },
              },
              a,
            );
          })),
          (t[21] = C),
          (t[22] = f),
          (t[23] = l),
          (t[24] = c),
          (t[25] = S),
          (t[26] = M))
        : (M = t[26]);
      var w;
      t[27] !== n || t[28] !== N || t[29] !== M
        ? ((w = u.jsxs(o("WAWebFlex.react").FlexRow, {
            columnGap: 8,
            rowGap: 8,
            shrink: 0,
            xstyle: N,
            children: [n, M],
          })),
          (t[27] = n),
          (t[28] = N),
          (t[29] = M),
          (t[30] = w))
        : (w = t[30]);
      var A;
      return (
        t[31] !== P || t[32] !== x || t[33] !== w
          ? ((A = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: x,
              role: "toolbar",
              "aria-label": P,
              children: w,
            })),
            (t[31] = P),
            (t[32] = x),
            (t[33] = w),
            (t[34] = A))
          : (A = t[34]),
        A
      );
    }
    l.default = _;
  },
  226,
);
