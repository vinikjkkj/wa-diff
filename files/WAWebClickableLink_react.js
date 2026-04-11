__d(
  "WAWebClickableLink.react",
  [
    "WAWebClassnames",
    "WAWebExternalLink.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var a,
        i = o("react-compiler-runtime").c(18),
        l = t.ariaLabel,
        s = t.children,
        c = t.className,
        d = t.href,
        m = t.onClick,
        p = t.tabIndex,
        _ = t.title,
        f = t.xstyle,
        g;
      i[0] !== d || i[1] !== m
        ? ((g = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (d != null && (e.metaKey || e.altKey)) ||
                  (e.preventDefault(), yield m(e));
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (i[0] = d),
          (i[1] = m),
          (i[2] = g))
        : (g = i[2]);
      var h = g,
        y = r("useWAWebStaticButtonA11y")(m),
        C = y[0],
        b = y[1],
        v = (a = t.testid) != null ? a : "clickable-link",
        S;
      i[3] !== c || i[4] !== f
        ? ((S = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            c,
            "x1xlr1w8 xt0b8zv xbvygy2 x17f7hit xp30eni xhmieyt",
            (e || (e = r("stylex")))(f),
          )),
          (i[3] = c),
          (i[4] = f),
          (i[5] = S))
        : (S = i[5]);
      var R = d != null ? d : void 0,
        L = p != null ? p : void 0,
        E = t["data-tab"],
        k;
      return (
        i[6] !== l ||
        i[7] !== b ||
        i[8] !== s ||
        i[9] !== C ||
        i[10] !== h ||
        i[11] !== v ||
        i[12] !== S ||
        i[13] !== R ||
        i[14] !== L ||
        i[15] !== E ||
        i[16] !== _
          ? ((k = u.jsx(
              o("WAWebExternalLink.react").ExternalLinkEl,
              babelHelpers.extends({}, b, {
                ref: C,
                "data-testid": void 0,
                className: S,
                href: R,
                onClick: h,
                role: "button",
                title: _,
                tabIndex: L,
                "data-tab": E,
                "aria-label": l,
                children: s,
              }),
            )),
            (i[6] = l),
            (i[7] = b),
            (i[8] = s),
            (i[9] = C),
            (i[10] = h),
            (i[11] = v),
            (i[12] = S),
            (i[13] = R),
            (i[14] = L),
            (i[15] = E),
            (i[16] = _),
            (i[17] = k))
          : (k = i[17]),
        k
      );
    }
    l.default = c;
  },
  98,
);
