__d(
  "WAWebMessageDensityDot.react",
  ["fbt", "WDSTooltip.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.count;
      return t <= 0
        ? null
        : u.jsx(r("WDSTooltip.react"), {
            label: s._(
              /*BTDS*/ '_j{"*":"{number_of_messages} messages","_1":"1 message"}',
              [s._plural(t, "number_of_messages")],
            ),
            position: "below",
            delayTooltipMs: 200,
            children: u.jsx("div", {
              className: "x10l6tqk x1ey2m1c x1o0tod xtijo5x x13vifvy",
              children: u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
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
                  }[
                    ((t <= 5) << 2) |
                      ((t > 5 && t <= 20) << 1) |
                      ((t > 20) << 0)
                  ],
                ),
              ),
            }),
          });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
