__d(
  "WAWebMessageDensityDot.react",
  ["fbt", "WDSTooltip.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.count;
      if (n <= 0) return null;
      var a;
      t[0] !== n
        ? ((a = s._(
            /*BTDS*/ '_j{"*":"{number_of_messages} messages","_1":"1 message"}',
            [s._plural(n, "number_of_messages")],
          )),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { className: "x10l6tqk x1ey2m1c x1o0tod xtijo5x x13vifvy" }),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] !== n
        ? ((l = {
            0: {
              className:
                "x10l6tqk x1c7jfne xbudbmw xuuh30 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xfn3atn",
            },
            4: {
              className:
                "x10l6tqk x1c7jfne xbudbmw xuuh30 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xfn3atn x1g8rjiy xuoj239",
            },
            2: {
              className:
                "x10l6tqk x1c7jfne xbudbmw xuuh30 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xfn3atn x51ohtg xqu0tyb",
            },
            6: {
              className:
                "x10l6tqk x1c7jfne xbudbmw xuuh30 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xfn3atn x51ohtg xqu0tyb",
            },
            1: {
              className:
                "x10l6tqk x1c7jfne xbudbmw xuuh30 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xfn3atn x1ftt334 x1ycjhwn",
            },
            5: {
              className:
                "x10l6tqk x1c7jfne xbudbmw xuuh30 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xfn3atn x1ftt334 x1ycjhwn",
            },
            3: {
              className:
                "x10l6tqk x1c7jfne xbudbmw xuuh30 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xfn3atn x1ftt334 x1ycjhwn",
            },
            7: {
              className:
                "x10l6tqk x1c7jfne xbudbmw xuuh30 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xfn3atn x1ftt334 x1ycjhwn",
            },
          }[((n <= 5) << 2) | ((n > 5 && n <= 20) << 1) | ((n > 20) << 0)]),
          (t[3] = n),
          (t[4] = l))
        : (l = t[4]);
      var c;
      t[5] !== l
        ? ((c = u.jsx(
            "div",
            babelHelpers.extends({}, i, {
              children: u.jsx("div", babelHelpers.extends({}, l)),
            }),
          )),
          (t[5] = l),
          (t[6] = c))
        : (c = t[6]);
      var d;
      return (
        t[7] !== a || t[8] !== c
          ? ((d = u.jsx(r("WDSTooltip.react"), {
              label: a,
              position: "below",
              delayTooltipMs: 200,
              children: c,
            })),
            (t[7] = a),
            (t[8] = c),
            (t[9] = d))
          : (d = t[9]),
        d
      );
    }
    l.default = c;
  },
  226,
);
