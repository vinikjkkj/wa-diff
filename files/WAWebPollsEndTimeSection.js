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
      var t = e.enabled,
        n = e.maxDurationMs,
        a = e.onEndTimeChange,
        i = e.onToggle,
        l = e.pollEndTime,
        c = r("WAWeb-moment")().format("YYYY-MM-DD"),
        d = h(o("WAWebClock").Clock.getServerTimeMs(), n),
        g = d != null ? p(d) : null,
        b = function () {
          return [c, g];
        },
        v = l != null ? p(l) : "",
        S = l != null ? _(l) : "",
        R = v === c ? r("WAWeb-moment")().format("HH:mm") : void 0,
        L = function (t) {
          (i(t), t && l == null && a(y(n)));
        },
        E = function (t) {
          var e = f(t, S);
          a(e == null ? e : C(e, n));
        },
        k = function (t) {
          var e = f(v, t);
          a(e == null ? e : C(e, n));
        };
      return u.jsxs("div", {
        "data-testid": "polls_end_time_section",
        children: [
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: m.toggleRow,
            testid: "polls_end_time_toggle_row",
            children: [
              u.jsx(o("WAWebFlex.react").FlexItem, {
                grow: 1,
                children: u.jsx("label", {
                  htmlFor: "polls-end-time-switch",
                  className: "xh8yej3 x1rg5ohu x1ypdohk",
                  children: s._(/*BTDS*/ ""),
                }),
              }),
              u.jsx(o("WAWebFlex.react").FlexItem, {
                children: u.jsx(r("WDSSwitch.react"), {
                  id: "polls-end-time-switch",
                  value: t,
                  onChange: L,
                  testid: "polls-end-time-switch",
                }),
              }),
            ],
          }),
          t &&
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
                    value: v,
                    onChange: E,
                    getDateBoundaries: b,
                  }),
                }),
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  grow: 1,
                  basis: 0,
                  children: u.jsx(o("WAWebTimeInput.react").TimeInput, {
                    theme: "event",
                    name: "poll-end-time",
                    value: S,
                    onChange: k,
                    min: R,
                  }),
                }),
              ],
            }),
        ],
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
