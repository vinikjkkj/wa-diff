__d(
  "WAWebLexicalTypeAheadRow.react",
  [
    "ReactDOM",
    "WAWebAccessibility.react",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "react",
    "stylex",
    "useWAWebLexicalTypeAheadContainer",
    "useWAWebLexicalTypeAheadKeyboardNavigation",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useMemo,
      p = c.useRef,
      _ = 10,
      f = 7,
      g = {
        itemsContainer: {
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          backgroundColor: "x1311tq3",
          boxShadow: "xvh3i5d",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          overflowX: "x14aock7",
          $$css: !0,
        },
      };
    function h(t) {
      var n,
        a = t.itemHeight,
        i = t.items,
        l = t.itemWidth,
        s = t.leadOffset,
        c = t.onCancel,
        h = i.length,
        y = p([]),
        C = m(
          function () {
            if (h > f) {
              var e = l / 2 + _;
              return l * f - e + _ * 2;
            }
            return l * h + _ * 2;
          },
          [l, h],
        ),
        b = i.length === 0 ? 0 : C,
        v = a + _ * 2,
        S = o("useWAWebLexicalTypeAheadContainer").useLexicalTypeAheadContainer(
          s,
          b,
          v,
        ),
        R = S.containerEle,
        L = S.hideContainer,
        E = o(
          "useWAWebLexicalTypeAheadKeyboardNavigation",
        ).useLexicalTypeAheadKeyboardNavigation(i, 0, "row", {
          onSelect: function (t) {
            t.onSelect();
          },
          onCancel: function () {
            (L(), c());
          },
        }),
        k = E.activeIndex,
        I = E.setActiveIndex;
      d(
        function () {
          var e = y.current[k];
          e && e.scrollIntoView();
        },
        [k],
      );
      var T = i.map(function (e, t) {
        return u.jsx(
          r("WAWebUnstyledButton.react"),
          {
            ref: function (n) {
              return (y.current[t] = n);
            },
            "aria-label": e.ariaLabel,
            onClick: function (n) {
              (n.preventDefault(), n.stopPropagation(), e.onSelect());
            },
            onMouseEnter: function () {
              I(t);
            },
            children: e.renderFn(t === k),
          },
          t,
        );
      });
      if (T.length === 0) return null;
      var D = [g.itemsContainer, o("WAWebUISpacing").uiPadding.all10],
        x = i[k],
        $ = (n = x == null ? void 0 : x.ariaLabel) != null ? n : "";
      return o("ReactDOM").createPortal(
        u.jsxs(
          "div",
          babelHelpers.extends(
            { onClick: L },
            (e || (e = r("stylex"))).props(D),
            {
              children: [
                T,
                u.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
                  text: $,
                  assertive: !0,
                }),
              ],
            },
          ),
        ),
        R,
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
