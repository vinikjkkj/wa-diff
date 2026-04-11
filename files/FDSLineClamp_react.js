__d(
  "FDSLineClamp.react",
  [
    "CSSUserAgentSupports",
    "CometPlaceholder.react",
    "CometTextTypography",
    "FDSTextContext",
    "JSResourceForInteraction",
    "cr:2099",
    "lazyLoadComponent",
    "react",
    "stylex",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useRef,
      _ = d.useState;
    function f() {}
    var g =
        (e = n("cr:2099")) != null ? e : { useTranslationKeyForTextParent: f },
      h = g.useTranslationKeyForTextParent,
      y = r("JSResourceForInteraction")("FDSTooltip.react").__setRef(
        "FDSLineClamp.react",
      ),
      C = r("lazyLoadComponent")(y),
      b = r("CSSUserAgentSupports").webkitLineClamp(),
      v = {
        oneLine: { textOverflow: "xlyipyv", whiteSpace: "xuxw1ft", $$css: !0 },
        root: {
          display: "x1lliihq",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          $$css: !0,
        },
      };
    function S(e) {
      var t = e.children,
        n = e.id,
        a = e.lines,
        l = e.ref,
        u = e.testid,
        d = e.truncationTooltip,
        f = e.useAutomaticTextDirection,
        g = f === void 0 ? !1 : f,
        S = e.xstyle,
        L = o("FDSTextContext").useFDSTextContext(),
        E = h(),
        k = _(!1),
        I = k[0],
        T = k[1],
        D = p(null),
        x = t,
        $;
      if (a > 1)
        if (b)
          $ = {
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: a,
            display: "-webkit-box",
          };
        else {
          var P = R(L == null ? void 0 : L.type);
          $ = { maxHeight: P * a + 0.1 };
          var N = {
            maxHeight: "calc((100% - " + P * a + "px) * 999)",
            top: P * (a - 1),
          };
          x = c.jsxs(c.Fragment, {
            children: [
              x,
              c.jsx("span", {
                "aria-hidden": !0,
                className: "xtijo5x x6ikm8r x10wlt62 x10l6tqk",
                style: N,
                children: "\u2026",
              }),
            ],
          });
        }
      var M = function () {
          var e = D.current;
          e == null ||
            a < 1 ||
            T(e.offsetWidth < e.scrollWidth || e.offsetHeight < e.scrollHeight);
        },
        w = m(
          function (e) {
            e == null || d == null || y.preload();
          },
          [d],
        ),
        A = r("useMergeRefs")(l, D, w),
        F = c.jsx(
          "span",
          {
            className: (s || (s = r("stylex")))(
              v.root,
              a === 1 && v.oneLine,
              S,
            ),
            "data-testid": void 0,
            dir: g ? "auto" : void 0,
            id: n,
            onMouseEnter: d != null ? M : void 0,
            ref: A,
            style: $,
            children: x,
          },
          E,
        );
      return I
        ? c.jsx(r("CometPlaceholder.react"), {
            fallback: F,
            name: i.id,
            children: c.jsx(C, { tooltip: d, children: F }),
          })
        : F;
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      return e != null && e in r("CometTextTypography")
        ? r("CometTextTypography")[e].lineHeight
        : 16;
    }
    l.default = S;
  },
  98,
);
