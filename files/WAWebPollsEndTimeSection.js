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
    function g() {
      var e = 6e4;
      return Math.ceil(o("WAWebClock").Clock.getServerTimeMs() / e) * e;
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(32),
        n = e.enabled,
        a = e.onEndTimeChange,
        i = e.onToggle,
        l = e.pollEndTime,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = r("WAWeb-moment")().format("YYYY-MM-DD")), (t[0] = c))
        : (c = t[0]);
      var h = c,
        y;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = function () {
            return [h, null];
          }),
          (t[1] = y))
        : (y = t[1]);
      var C = y,
        b;
      t[2] !== l
        ? ((b = l != null ? m(l) : ""), (t[2] = l), (t[3] = b))
        : (b = t[3]);
      var v = b,
        S;
      t[4] !== l
        ? ((S = l != null ? p(l) : ""), (t[4] = l), (t[5] = S))
        : (S = t[5]);
      var R = S,
        L;
      t[6] !== v
        ? ((L = v === h ? r("WAWeb-moment")().format("HH:mm") : void 0),
          (t[6] = v),
          (t[7] = L))
        : (L = t[7]);
      var E = L,
        k;
      t[8] !== a || t[9] !== i || t[10] !== l
        ? ((k = function (t) {
            (i(t), t && l == null && a(f()));
          }),
          (t[8] = a),
          (t[9] = i),
          (t[10] = l),
          (t[11] = k))
        : (k = t[11]);
      var I = k,
        T;
      t[12] !== a || t[13] !== R
        ? ((T = function (t) {
            var e = _(t, R);
            a(e == null ? e : Math.max(e, g()));
          }),
          (t[12] = a),
          (t[13] = R),
          (t[14] = T))
        : (T = t[14]);
      var D = T,
        x;
      t[15] !== v || t[16] !== a
        ? ((x = function (t) {
            var e = _(v, t);
            a(e == null ? e : Math.max(e, g()));
          }),
          (t[15] = v),
          (t[16] = a),
          (t[17] = x))
        : (x = t[17]);
      var $ = x,
        P;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = u.jsx(o("WAWebFlex.react").FlexItem, {
            grow: 1,
            children: u.jsx("label", {
              htmlFor: "polls-end-time-switch",
              className: "xh8yej3 x1rg5ohu x1ypdohk",
              children: s._(/*BTDS*/ "Set end time"),
            }),
          })),
          (t[18] = P))
        : (P = t[18]);
      var N;
      t[19] !== n || t[20] !== I
        ? ((N = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: d.toggleRow,
            testid: "polls_end_time_toggle_row",
            children: [
              P,
              u.jsx(o("WAWebFlex.react").FlexItem, {
                children: u.jsx(r("WDSSwitch.react"), {
                  id: "polls-end-time-switch",
                  value: n,
                  onChange: I,
                  testid: "polls-end-time-switch",
                }),
              }),
            ],
          })),
          (t[19] = n),
          (t[20] = I),
          (t[21] = N))
        : (N = t[21]);
      var M;
      t[22] !== v ||
      t[23] !== n ||
      t[24] !== D ||
      t[25] !== $ ||
      t[26] !== E ||
      t[27] !== R
        ? ((M =
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
                    value: v,
                    onChange: D,
                    getDateBoundaries: C,
                  }),
                }),
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  grow: 1,
                  basis: 0,
                  children: u.jsx(o("WAWebTimeInput.react").TimeInput, {
                    theme: "event",
                    name: "poll-end-time",
                    value: R,
                    onChange: $,
                    min: E,
                  }),
                }),
              ],
            })),
          (t[22] = v),
          (t[23] = n),
          (t[24] = D),
          (t[25] = $),
          (t[26] = E),
          (t[27] = R),
          (t[28] = M))
        : (M = t[28]);
      var w;
      return (
        t[29] !== N || t[30] !== M
          ? ((w = u.jsxs("div", {
              "data-testid": "polls_end_time_section",
              children: [N, M],
            })),
            (t[29] = N),
            (t[30] = M),
            (t[31] = w))
          : (w = t[31]),
        w
      );
    }
    l.default = h;
  },
  226,
);
