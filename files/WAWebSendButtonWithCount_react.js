__d(
  "WAWebSendButtonWithCount.react",
  [
    "fbt",
    "WAWebRound.react",
    "WAWebStatusCheckIcon.react",
    "WAWebWdsIcSendFilledIcon.react",
    "WDSTooltip.react",
    "react",
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
      var t = e.ariaLabel,
        n = e.count,
        a = e.disabled,
        i = e.large,
        l = e.onClick,
        p = e.ref,
        _ = e.testid,
        f = e.theme,
        g;
      return (
        f === "TICK"
          ? (g = u.jsx(o("WAWebStatusCheckIcon.react").StatusCheckIcon, {
              directional: !0,
              width: 24,
              height: 24,
            }))
          : (g = u.jsx(
              o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon,
              { directional: !0, height: 30 },
            )),
        u.jsx(r("WDSTooltip.react"), {
          label: s._(/*BTDS*/ "Send"),
          disabled: a === !0,
          children: u.jsxs(
            "div",
            babelHelpers.extends(
              { ref: p },
              {
                0: { className: "x1n2onr6" },
                1: { className: "x1n2onr6 x5dmra7" },
              }[(a === !0) << 0],
              {
                children: [
                  u.jsx(o("WAWebRound.react").Round, {
                    xstyle: c.buttonRefresh,
                    label: t,
                    large: i,
                    testid: void 0,
                    onClick: l,
                    disabled: a,
                    children: g,
                  }),
                  n != null &&
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
                        }[((i === !0) << 1) | (!!d(n) << 0)],
                        { children: m(n) ? "999+" : n },
                      ),
                    ),
                ],
              },
            ),
          ),
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
