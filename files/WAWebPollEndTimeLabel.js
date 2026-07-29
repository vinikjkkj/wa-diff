__d(
  "WAWebPollEndTimeLabel",
  [
    "fbt",
    "WAWebClock",
    "WAWebFlex.react",
    "WDSIconIcScheduleFilled.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        container: {
          flex: "x3psx0u",
          paddingTop: "x1iorvi4",
          paddingBottom: "xjkvuk6",
          $$css: !0,
        },
      },
      d = 1e3,
      m = 3600,
      p = 24 * m;
    function _(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.isPollEnded,
        a = e.pollEndTime,
        i = e.trailingSeparator,
        l = a - o("WAWebClock").Clock.getServerTimeMs(),
        p = Math.max(0, Math.ceil(l / d)),
        _ = p < m && !n,
        g = n ? "poll-ended-label" : "poll-end-time-label",
        h = _ ? "secondaryNegative" : "contentDeemphasized",
        y;
      t[0] !== h
        ? ((y = u.jsx(r("WDSIconIcScheduleFilled.react"), {
            width: 12,
            height: 12,
            colorName: h,
          })),
          (t[0] = h),
          (t[1] = y))
        : (y = t[1]);
      var C;
      t[2] !== _
        ? ((C = {
            0: { className: "x1pg5gke x1d3mw78 x1bvqhpb xaso8d8" },
            1: { className: "x1pg5gke x1d3mw78 x30a034 xaso8d8" },
          }[!!_ << 0]),
          (t[2] = _),
          (t[3] = C))
        : (C = t[3]);
      var b;
      t[4] !== n || t[5] !== p
        ? ((b = n ? s._(/*BTDS*/ "Poll ended") : f(p)),
          (t[4] = n),
          (t[5] = p),
          (t[6] = b))
        : (b = t[6]);
      var v;
      t[7] !== i
        ? ((v = i
            ? u.jsx("span", {
                className: "x135b78x x11lfxj5",
                children: "\xB7",
              })
            : null),
          (t[7] = i),
          (t[8] = v))
        : (v = t[8]);
      var S;
      t[9] !== C || t[10] !== b || t[11] !== v
        ? ((S = u.jsxs(
            "span",
            babelHelpers.extends({}, C, { children: [b, v] }),
          )),
          (t[9] = C),
          (t[10] = b),
          (t[11] = v),
          (t[12] = S))
        : (S = t[12]);
      var R;
      return (
        t[13] !== g || t[14] !== y || t[15] !== S
          ? ((R = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: c.container,
              testid: g,
              children: [y, S],
            })),
            (t[13] = g),
            (t[14] = y),
            (t[15] = S),
            (t[16] = R))
          : (R = t[16]),
        R
      );
    }
    function f(e) {
      if (e < m) return s._(/*BTDS*/ "Ends in less than 1h");
      if (e < p) {
        var t = Math.floor(e / m);
        return s._(/*BTDS*/ "Ends in {hours}h", [s._param("hours", t)]);
      }
      var n = Math.floor(e / p);
      return s._(/*BTDS*/ "Ends in {days}d", [s._param("days", n)]);
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
