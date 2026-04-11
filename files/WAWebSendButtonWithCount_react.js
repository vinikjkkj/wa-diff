__d(
  "WAWebSendButtonWithCount.react",
  [
    "fbt",
    "WAWebRound.react",
    "WAWebStatusCheckIcon.react",
    "WAWebWdsIcSendFilledIcon.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        buttonRefresh: {
          color: "x1pse0pq",
          backgroundColor: "xfn3atn",
          $$css: !0,
        },
      };
    function d(e) {
      return e > 9;
    }
    function m(e) {
      return e > 999;
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.ariaLabel,
        a = e.count,
        i = e.disabled,
        l = e.large,
        p = e.onClick,
        _ = e.ref,
        f = e.testid,
        g = e.theme,
        h;
      if (g === "TICK") {
        var y;
        (t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = u.jsx(o("WAWebStatusCheckIcon.react").StatusCheckIcon, {
              directional: !0,
              width: 24,
              height: 24,
            })),
            (t[0] = y))
          : (y = t[0]),
          (h = y));
      } else {
        var C;
        (t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = u.jsx(
              o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon,
              { directional: !0, height: 30 },
            )),
            (t[1] = C))
          : (C = t[1]),
          (h = C));
      }
      var b;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "Send")), (t[2] = b))
        : (b = t[2]);
      var v = i === !0,
        S;
      t[3] !== i
        ? ((S = {
            0: { className: "x1n2onr6" },
            1: { className: "x1n2onr6 x5dmra7" },
          }[(i === !0) << 0]),
          (t[3] = i),
          (t[4] = S))
        : (S = t[4]);
      var R;
      t[5] !== n ||
      t[6] !== i ||
      t[7] !== h ||
      t[8] !== l ||
      t[9] !== p ||
      t[10] !== f
        ? ((R = u.jsx(o("WAWebRound.react").Round, {
            xstyle: c.buttonRefresh,
            label: n,
            large: l,
            testid: void 0,
            onClick: p,
            disabled: i,
            children: h,
          })),
          (t[5] = n),
          (t[6] = i),
          (t[7] = h),
          (t[8] = l),
          (t[9] = p),
          (t[10] = f),
          (t[11] = R))
        : (R = t[11]);
      var L;
      t[12] !== a || t[13] !== l
        ? ((L =
            a != null &&
            u.jsx(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: {
                    className:
                      "x10l6tqk x78zum5 xdt5ytf xl56j7k x22s7rv xwajptj x1n327nk xw4jnvo x1qx5ct2 x1jchvi3 x1lixm6g x2b8uid x12peec7 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xu306ak xkdsq27 x12s1jxh xwwtwea",
                  },
                  2: {
                    className:
                      "x10l6tqk x78zum5 xdt5ytf xl56j7k x1n327nk x1jchvi3 x1lixm6g x2b8uid x12peec7 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xu306ak xkdsq27 x12s1jxh xwwtwea x8530fw xvy4d1p xxk0z11 x1fwf9ji",
                  },
                  1: {
                    className:
                      "x10l6tqk x78zum5 xdt5ytf xl56j7k x22s7rv xwajptj x1n327nk x1qx5ct2 x1jchvi3 x1lixm6g x2b8uid x12peec7 xu306ak xkdsq27 x12s1jxh xwwtwea xqbdsaf xpf24wh x14a4ghu x1a4jp9x x14atkfc x181vq82 x1uc92m",
                  },
                  3: {
                    className:
                      "x10l6tqk x78zum5 xdt5ytf xl56j7k x1n327nk x1jchvi3 x1lixm6g x2b8uid x12peec7 xu306ak xkdsq27 x12s1jxh xwwtwea x8530fw xxk0z11 x1fwf9ji xqbdsaf xpf24wh x14a4ghu x1a4jp9x x14atkfc x181vq82 x1uc92m",
                  },
                }[((l === !0) << 1) | (!!d(a) << 0)],
                { children: m(a) ? "999+" : a },
              ),
            )),
          (t[12] = a),
          (t[13] = l),
          (t[14] = L))
        : (L = t[14]);
      var E;
      t[15] !== _ || t[16] !== S || t[17] !== R || t[18] !== L
        ? ((E = u.jsxs(
            "div",
            babelHelpers.extends({ ref: _ }, S, { children: [R, L] }),
          )),
          (t[15] = _),
          (t[16] = S),
          (t[17] = R),
          (t[18] = L),
          (t[19] = E))
        : (E = t[19]);
      var k;
      return (
        t[20] !== v || t[21] !== E
          ? ((k = u.jsx(r("WDSTooltip.react"), {
              label: b,
              disabled: v,
              children: E,
            })),
            (t[20] = v),
            (t[21] = E),
            (t[22] = k))
          : (k = t[22]),
        k
      );
    }
    l.default = p;
  },
  226,
);
