__d(
  "WAWebPollsEndTimeSection",
  [
    "fbt",
    "WAWeb-moment",
    "WAWebClock",
    "WAWebDateInput.react",
    "WAWebFlex.react",
    "WAWebTimeInput.react",
    "WDSSwitch.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = 1440 * 60 * 1e3,
      d = 60 * 1e3,
      m = {
        toggleRow: {
          width: "xh8yej3",
          fontSize: "x1jchvi3",
          lineHeight: "xdod15v",
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          $$css: !0,
        },
        pickersRow: { marginBottom: "xefnzgg", $$css: !0 },
      };
    function p(e) {
      return r("WAWeb-moment")(e).format("YYYY-MM-DD");
    }
    function _(e) {
      return r("WAWeb-moment")(e).format("HH:mm");
    }
    function f(e, t) {
      if (e === "" || t === "") return null;
      var n = r("WAWeb-moment")(e + "T" + t);
      return n.isValid() ? n.valueOf() : null;
    }
    function g(e) {
      return Math.ceil(e / d) * d;
    }
    function h(e, t) {
      return t != null ? e + t : null;
    }
    function y(e) {
      var t = o("WAWebClock").Clock.getServerTimeMs(),
        n = g(t) + c,
        r = h(t, e);
      return r != null ? Math.min(n, r) : n;
    }
    function C(e, t) {
      var n = o("WAWebClock").Clock.getServerTimeMs(),
        r = Math.max(e, g(n)),
        a = h(n, t);
      return a != null ? Math.min(r, a) : r;
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(39),
        n = e.enabled,
        a = e.maxDurationMs,
        i = e.onEndTimeChange,
        l = e.onToggle,
        c = e.pollEndTime,
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = r("WAWeb-moment")().format("YYYY-MM-DD")), (t[0] = d))
        : (d = t[0]);
      var g = d,
        b;
      if (t[1] !== a) {
        var v = h(o("WAWebClock").Clock.getServerTimeMs(), a);
        ((b = v != null ? p(v) : null), (t[1] = a), (t[2] = b));
      } else b = t[2];
      var S = b,
        R;
      t[3] !== S
        ? ((R = function () {
            return [g, S];
          }),
          (t[3] = S),
          (t[4] = R))
        : (R = t[4]);
      var L = R,
        E;
      t[5] !== c
        ? ((E = c != null ? p(c) : ""), (t[5] = c), (t[6] = E))
        : (E = t[6]);
      var k = E,
        I;
      t[7] !== c
        ? ((I = c != null ? _(c) : ""), (t[7] = c), (t[8] = I))
        : (I = t[8]);
      var T = I,
        D;
      t[9] !== k
        ? ((D = k === g ? r("WAWeb-moment")().format("HH:mm") : void 0),
          (t[9] = k),
          (t[10] = D))
        : (D = t[10]);
      var x = D,
        $;
      t[11] !== a || t[12] !== i || t[13] !== l || t[14] !== c
        ? (($ = function (t) {
            (l(t), t && c == null && i(y(a)));
          }),
          (t[11] = a),
          (t[12] = i),
          (t[13] = l),
          (t[14] = c),
          (t[15] = $))
        : ($ = t[15]);
      var P = $,
        N;
      t[16] !== a || t[17] !== i || t[18] !== T
        ? ((N = function (t) {
            var e = f(t, T);
            i(e == null ? e : C(e, a));
          }),
          (t[16] = a),
          (t[17] = i),
          (t[18] = T),
          (t[19] = N))
        : (N = t[19]);
      var M = N,
        w;
      t[20] !== k || t[21] !== a || t[22] !== i
        ? ((w = function (t) {
            var e = f(k, t);
            i(e == null ? e : C(e, a));
          }),
          (t[20] = k),
          (t[21] = a),
          (t[22] = i),
          (t[23] = w))
        : (w = t[23]);
      var A = w,
        F;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = u.jsx(o("WAWebFlex.react").FlexItem, {
            grow: 1,
            children: u.jsx("label", {
              htmlFor: "polls-end-time-switch",
              className: "xh8yej3 x1rg5ohu x1ypdohk",
              children: s._(/*BTDS*/ "Set end time"),
            }),
          })),
          (t[24] = F))
        : (F = t[24]);
      var O;
      t[25] !== n || t[26] !== P
        ? ((O = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: m.toggleRow,
            testid: "polls_end_time_toggle_row",
            children: [
              F,
              u.jsx(o("WAWebFlex.react").FlexItem, {
                children: u.jsx(r("WDSSwitch.react"), {
                  id: "polls-end-time-switch",
                  value: n,
                  onChange: P,
                  testid: "polls-end-time-switch",
                }),
              }),
            ],
          })),
          (t[25] = n),
          (t[26] = P),
          (t[27] = O))
        : (O = t[27]);
      var B;
      t[28] !== k ||
      t[29] !== n ||
      t[30] !== L ||
      t[31] !== M ||
      t[32] !== A ||
      t[33] !== x ||
      t[34] !== T
        ? ((B =
            n &&
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              columnGap: 16,
              testid: "polls_end_time_pickers",
              xstyle: m.pickersRow,
              children: [
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  grow: 1,
                  basis: 0,
                  children: u.jsx(o("WAWebDateInput.react").DateInput, {
                    theme: "event",
                    name: "poll-end-date",
                    value: k,
                    onChange: M,
                    getDateBoundaries: L,
                  }),
                }),
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  grow: 1,
                  basis: 0,
                  children: u.jsx(o("WAWebTimeInput.react").TimeInput, {
                    theme: "event",
                    name: "poll-end-time",
                    value: T,
                    onChange: A,
                    min: x,
                  }),
                }),
              ],
            })),
          (t[28] = k),
          (t[29] = n),
          (t[30] = L),
          (t[31] = M),
          (t[32] = A),
          (t[33] = x),
          (t[34] = T),
          (t[35] = B))
        : (B = t[35]);
      var W;
      return (
        t[36] !== O || t[37] !== B
          ? ((W = u.jsxs("div", {
              "data-testid": "polls_end_time_section",
              children: [O, B],
            })),
            (t[36] = O),
            (t[37] = B),
            (t[38] = W))
          : (W = t[38]),
        W
      );
    }
    l.default = b;
  },
  226,
);
