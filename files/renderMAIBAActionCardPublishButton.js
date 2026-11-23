__d(
  "renderMAIBAActionCardPublishButton",
  [
    "GeoALSurface",
    "GeoIcon.react",
    "MAIBACanvasPillButton.react",
    "meta-brand-arrow-up-shallow-u-outline-16",
    "react",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useMemo,
      d = u.useRef;
    function m(e) {
      return s.jsx(p, babelHelpers.extends({}, e));
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = d(null),
        n = r("useMergeRefs")(e.containerRef, t),
        a = e.icon != null,
        i = e.onClick,
        l = e.logging,
        u = c(
          function () {
            return l == null || l.nodeRef != null
              ? l
              : babelHelpers.extends(
                  {},
                  l,
                  { nodeRef: t },
                  l.capability != null
                    ? {
                        capability: babelHelpers.extends({}, l.capability, {
                          wrapperStyle: { display: "inline" },
                        }),
                      }
                    : {},
                );
          },
          [l],
        );
      return s.jsx(r("GeoALSurface"), {
        logging: u,
        name: "GeoButton",
        children: s.jsx(r("MAIBACanvasPillButton.react"), {
          fillPalette: "creation",
          forwardedRef: n,
          icon: a
            ? s.jsx(r("GeoIcon.react"), {
                color: "inverted",
                icon: o("meta-brand-arrow-up-shallow-u-outline-16")
                  .metaBrandArrowUpShallowUUploadOutline16,
              })
            : null,
          isDisabled: e.isDisabled,
          label: e.label,
          onClick:
            i != null
              ? function (e) {
                  i(e);
                }
              : void 0,
          testid: void 0,
          variant: "filled",
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
