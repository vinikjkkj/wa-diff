__d(
  "WAWebPollEndTimeLabel",
  [
    "fbt",
    "WAWebClock",
    "WAWebFlex.react",
    "WDSIconIcScheduleFilled.react",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        iconContainer: {
          display: "x78zum5",
          justifyContent: "xl56j7k",
          width: "xn6xy2s",
          $$css: !0,
        },
      },
      d = 1e3,
      m = 3600,
      p = 24 * m;
    function _(e) {
      if (e < m) return s._(/*BTDS*/ "Ends in less than 1h");
      if (e < p) {
        var t = Math.floor(e / m);
        return s._(/*BTDS*/ "Ends in {hours}h", [s._param("hours", t)]);
      }
      var n = Math.floor(e / p);
      return s._(
        /*BTDS*/ '_j{"*":"Ends in {days} days","_1":"Ends in {days} day"}',
        [s._plural(n), s._param("days", n)],
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.isPollEnded,
        a = e.isSingleOptionPoll,
        i = e.pollEndTime,
        l = i - o("WAWebClock").Clock.getServerTimeMs(),
        p = Math.max(0, Math.ceil(l / d)),
        f = p < m && !n,
        g = n ? "poll-ended-label" : "poll-end-time-label",
        h = a ? void 0 : c.iconContainer,
        y = f ? "secondaryNegative" : "contentDeemphasized",
        C;
      t[0] !== h || t[1] !== y
        ? ((C = u.jsx(r("WDSIconIcScheduleFilled.react"), {
            width: 12,
            height: 12,
            xstyle: h,
            colorName: y,
          })),
          (t[0] = h),
          (t[1] = y),
          (t[2] = C))
        : (C = t[2]);
      var b;
      t[3] !== f
        ? ((b = {
            0: { className: "x1pg5gke x1d3mw78 x1bvqhpb xaso8d8" },
            1: { className: "x1pg5gke x1d3mw78 x30a034 xaso8d8" },
          }[!!f << 0]),
          (t[3] = f),
          (t[4] = b))
        : (b = t[4]);
      var v;
      t[5] !== n || t[6] !== p
        ? ((v = n ? s._(/*BTDS*/ "Poll ended") : _(p)),
          (t[5] = n),
          (t[6] = p),
          (t[7] = v))
        : (v = t[7]);
      var S;
      t[8] !== b || t[9] !== v
        ? ((S = u.jsx("span", babelHelpers.extends({}, b, { children: v }))),
          (t[8] = b),
          (t[9] = v),
          (t[10] = S))
        : (S = t[10]);
      var R;
      return (
        t[11] !== g || t[12] !== C || t[13] !== S
          ? ((R = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: o("WDSPaddings.stylex").wdsPaddings.padding4,
              testid: g,
              children: [C, S],
            })),
            (t[11] = g),
            (t[12] = C),
            (t[13] = S),
            (t[14] = R))
          : (R = t[14]),
        R
      );
    }
    l.default = f;
  },
  226,
);
