__d(
  "WAWebPollEndTimeLabel",
  [
    "fbt",
    "WAWebClock",
    "WAWebFlex.react",
    "WAWebUISpacing",
    "WDSIconIcScheduleFilled.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        iconContainer: {
          display: "x78zum5",
          justifyContent: "xl56j7k",
          width: "xn6xy2s",
          $$css: !0,
        },
        label: {
          fontSize: "x1pg5gke",
          lineHeight: "x1d3mw78",
          color: "x1bvqhpb",
          $$css: !0,
        },
        almostEnded: { color: "x30a034", $$css: !0 },
      },
      m = 1e3,
      p = 3600,
      _ = 24 * p;
    function f(e) {
      if (e < p) return s._(/*BTDS*/ "Ends in less than 1h");
      if (e < _) {
        var t = Math.floor(e / p);
        return s._(/*BTDS*/ "Ends in {hours}h", [s._param("hours", t)]);
      }
      var n = Math.floor(e / _);
      return s._(
        /*BTDS*/ '_j{"*":"Ends in {days} days","_1":"Ends in {days} day"}',
        [s._plural(n), s._param("days", n)],
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(t) {
      var n = o("react-compiler-runtime").c(15),
        a = t.isPollEnded,
        i = t.isSingleOptionPoll,
        l = t.pollEndTime,
        u = l - o("WAWebClock").Clock.getServerTimeMs(),
        _ = Math.max(0, Math.ceil(u / m)),
        g = _ < p && !a,
        h = a ? "poll-ended-label" : "poll-end-time-label",
        y = i ? void 0 : d.iconContainer,
        C = g ? "secondaryNegative" : "contentDeemphasized",
        b;
      n[0] !== y || n[1] !== C
        ? ((b = c.jsx(r("WDSIconIcScheduleFilled.react"), {
            width: 12,
            height: 12,
            xstyle: y,
            colorName: C,
          })),
          (n[0] = y),
          (n[1] = C),
          (n[2] = b))
        : (b = n[2]);
      var v;
      n[3] !== g
        ? ((v = (e || (e = r("stylex"))).props(
            d.label,
            g && d.almostEnded,
            o("WAWebUISpacing").uiPadding.start5,
          )),
          (n[3] = g),
          (n[4] = v))
        : (v = n[4]);
      var S;
      n[5] !== a || n[6] !== _
        ? ((S = a ? s._(/*BTDS*/ "Poll ended") : f(_)),
          (n[5] = a),
          (n[6] = _),
          (n[7] = S))
        : (S = n[7]);
      var R;
      n[8] !== v || n[9] !== S
        ? ((R = c.jsx("span", babelHelpers.extends({}, v, { children: S }))),
          (n[8] = v),
          (n[9] = S),
          (n[10] = R))
        : (R = n[10]);
      var L;
      return (
        n[11] !== h || n[12] !== b || n[13] !== R
          ? ((L = c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: o("WAWebUISpacing").uiPadding.all4,
              testid: void 0,
              children: [b, R],
            })),
            (n[11] = h),
            (n[12] = b),
            (n[13] = R),
            (n[14] = L))
          : (L = n[14]),
        L
      );
    }
    l.default = g;
  },
  226,
);
