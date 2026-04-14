__d(
  "WAWebClickableLink.react",
  [
    "WAWebClassnames",
    "WAWebExternalLink.react",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var a,
        i = t.ariaLabel,
        l = t.children,
        s = t.className,
        c = t.href,
        d = t.onClick,
        m = t.tabIndex,
        p = t.title,
        _ = t.xstyle,
        f = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            (c != null && (e.metaKey || e.altKey)) ||
              (e.preventDefault(), yield d(e));
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        g = r("useWAWebStaticButtonA11y")(d),
        h = g[0],
        y = g[1];
      return u.jsx(
        o("WAWebExternalLink.react").ExternalLinkEl,
        babelHelpers.extends({}, y, {
          ref: h,
          "data-testid": void 0,
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            s,
            "x1xlr1w8 xt0b8zv xbvygy2 x17f7hit xp30eni xhmieyt",
            (e || (e = r("stylex")))(_),
          ),
          href: c != null ? c : void 0,
          onClick: f,
          role: "button",
          title: p,
          tabIndex: m != null ? m : void 0,
          "data-tab": t["data-tab"],
          "aria-label": i,
          children: l,
        }),
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
