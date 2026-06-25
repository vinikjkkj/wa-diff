__d(
  "WAWebPollsEndTimeSection",
  [
    "fbt",
    "WAWeb-moment",
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
      d = {
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
    function m(e) {
      return r("WAWeb-moment")(e).format("YYYY-MM-DD");
    }
    function p(e) {
      return r("WAWeb-moment")(e).format("HH:mm");
    }
    function _(e, t) {
      if (e === "" || t === "") return null;
      var n = r("WAWeb-moment")(e + "T" + t);
      return n.isValid() ? n.valueOf() : null;
    }
    function f() {
      var e = r("WAWeb-moment")().valueOf() + c,
        t = 60 * 1e3;
      return Math.ceil(e / t) * t;
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(32),
        n = e.enabled,
        a = e.onEndTimeChange,
        i = e.onToggle,
        l = e.pollEndTime,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = r("WAWeb-moment")().format("YYYY-MM-DD")), (t[0] = c))
        : (c = t[0]);
      var g = c,
        h;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function () {
            return [g, null];
          }),
          (t[1] = h))
        : (h = t[1]);
      var y = h,
        C;
      t[2] !== l
        ? ((C = l != null ? m(l) : ""), (t[2] = l), (t[3] = C))
        : (C = t[3]);
      var b = C,
        v;
      t[4] !== l
        ? ((v = l != null ? p(l) : ""), (t[4] = l), (t[5] = v))
        : (v = t[5]);
      var S = v,
        R;
      t[6] !== b
        ? ((R = b === g ? r("WAWeb-moment")().format("HH:mm") : void 0),
          (t[6] = b),
          (t[7] = R))
        : (R = t[7]);
      var L = R,
        E;
      t[8] !== a || t[9] !== i || t[10] !== l
        ? ((E = function (t) {
            (i(t), t && l == null && a(f()));
          }),
          (t[8] = a),
          (t[9] = i),
          (t[10] = l),
          (t[11] = E))
        : (E = t[11]);
      var k = E,
        I;
      t[12] !== a || t[13] !== S
        ? ((I = function (t) {
            var e = _(t, S);
            a(e);
          }),
          (t[12] = a),
          (t[13] = S),
          (t[14] = I))
        : (I = t[14]);
      var T = I,
        D;
      t[15] !== b || t[16] !== a
        ? ((D = function (t) {
            var e = _(b, t);
            a(e);
          }),
          (t[15] = b),
          (t[16] = a),
          (t[17] = D))
        : (D = t[17]);
      var x = D,
        $;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = u.jsx(o("WAWebFlex.react").FlexItem, {
            grow: 1,
            children: u.jsx("label", {
              htmlFor: "polls-end-time-switch",
              className: "xh8yej3 x1rg5ohu x1ypdohk",
              children: s._(/*BTDS*/ "Set end time"),
            }),
          })),
          (t[18] = $))
        : ($ = t[18]);
      var P;
      t[19] !== n || t[20] !== k
        ? ((P = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: d.toggleRow,
            testid: "polls_end_time_toggle_row",
            children: [
              $,
              u.jsx(o("WAWebFlex.react").FlexItem, {
                children: u.jsx(r("WDSSwitch.react"), {
                  id: "polls-end-time-switch",
                  value: n,
                  onChange: k,
                  testid: "polls-end-time-switch",
                }),
              }),
            ],
          })),
          (t[19] = n),
          (t[20] = k),
          (t[21] = P))
        : (P = t[21]);
      var N;
      t[22] !== b ||
      t[23] !== n ||
      t[24] !== T ||
      t[25] !== x ||
      t[26] !== L ||
      t[27] !== S
        ? ((N =
            n &&
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              columnGap: 16,
              testid: "polls_end_time_pickers",
              xstyle: d.pickersRow,
              children: [
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  grow: 1,
                  basis: 0,
                  children: u.jsx(o("WAWebDateInput.react").DateInput, {
                    theme: "event",
                    name: "poll-end-date",
                    value: b,
                    onChange: T,
                    getDateBoundaries: y,
                  }),
                }),
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  grow: 1,
                  basis: 0,
                  children: u.jsx(o("WAWebTimeInput.react").TimeInput, {
                    theme: "event",
                    name: "poll-end-time",
                    value: S,
                    onChange: x,
                    min: L,
                  }),
                }),
              ],
            })),
          (t[22] = b),
          (t[23] = n),
          (t[24] = T),
          (t[25] = x),
          (t[26] = L),
          (t[27] = S),
          (t[28] = N))
        : (N = t[28]);
      var M;
      return (
        t[29] !== P || t[30] !== N
          ? ((M = u.jsxs("div", {
              "data-testid": "polls_end_time_section",
              children: [P, N],
            })),
            (t[29] = P),
            (t[30] = N),
            (t[31] = M))
          : (M = t[31]),
        M
      );
    }
    l.default = g;
  },
  226,
);
