__d(
  "PerfHelperUtils",
  [
    "cx",
    "DeferredComponent.react",
    "JSResource",
    "joinClasses",
    "promiseDone",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.children,
        n = e.className,
        o = e.color,
        a = e.tooltip;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          {
            0: { className: "x1rg5ohu xh8yej3" },
            2: { className: "x1rg5ohu xh8yej3 x1mcmo0z" },
            1: { className: "x1rg5ohu xh8yej3 xenqo9p" },
            3: { className: "x1rg5ohu xh8yej3 xenqo9p" },
          }[((o === "red") << 1) | ((o === "green") << 0)],
          {
            children: u.jsx(r("DeferredComponent.react"), {
              className: r("joinClasses")("_5_my", n),
              "data-tooltip": a,
              deferredComponent: function (t) {
                r("promiseDone")(
                  r("JSResource")("Tooltip.react")
                    .__setRef("PerfHelperUtils")
                    .load(),
                  t,
                );
              },
              deferredPlaceholder: u.jsx("div", {}),
              tooltip: a,
              children: t,
            }),
          },
        ),
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.children,
        n = e.moduleId,
        r = e.timeLimitSecs,
        o = e.timeSpentSecs;
      return u.jsx(c, {
        color: "red",
        tooltip:
          "This bootloaded component has a red border\n          because " +
          n +
          "\n          took over " +
          r +
          " seconds (" +
          o +
          "s) to load",
        children: t,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.BorderedComponent = c),
      (l.SlowBootloadBorder = d));
  },
  98,
);
