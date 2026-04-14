__d(
  "WAWebLexicalTypeAheadList.react",
  [
    "ReactDOM",
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
      f = {
        itemsContainer: {
          display: "x78zum5",
          height: "x5yr21d",
          width: "xh8yej3",
          overflowX: "x6ikm8r",
          overflowY: "x1odjw0f",
          flexDirection: "xdt5ytf",
          backgroundColor: "x1280gxy",
          boxShadow: "xvh3i5d",
          boxSizing: "x9f619",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          $$css: !0,
        },
      };
    function g(t) {
      var n = t.items,
        a = t.leadOffset,
        i = t.maxVisibleItems,
        l = i === void 0 ? 7 : i,
        s = t.onCancel,
        c = t.startingIndex,
        g = c === void 0 ? 0 : c,
        h = m(
          function () {
            var e = n.slice(0, l).reduce(function (e, t) {
              return e + t.height;
            }, 0);
            return e + _ * 2;
          },
          [n, l],
        ),
        y = m(
          function () {
            return n.reduce(function (e, t) {
              return Math.max(e, t.width);
            }, 0);
          },
          [n],
        ),
        C = n.length === 0 ? 0 : y + _ * 2,
        b = o("useWAWebLexicalTypeAheadContainer").useLexicalTypeAheadContainer(
          a,
          C,
          h,
        ),
        v = b.containerEle,
        S = b.hideContainer,
        R = o(
          "useWAWebLexicalTypeAheadKeyboardNavigation",
        ).useLexicalTypeAheadKeyboardNavigation(n, g, "column", {
          onSelect: function (t) {
            t.onSelect();
          },
          onCancel: function () {
            (S(), s());
          },
        }),
        L = R.activeIndex,
        E = R.setActiveIndex,
        k = p(null);
      if (
        (d(
          function () {
            var e;
            (e = k.current) == null || e.scrollIntoView({ block: "nearest" });
          },
          [L],
        ),
        n.length !== 0)
      ) {
        var I = n.map(function (e, t) {
            return u.jsx(
              r("WAWebUnstyledButton.react"),
              {
                ref: function (n) {
                  t === L && (k.current = n);
                },
                onClick: function () {
                  e.onSelect();
                },
                onMouseEnter: function () {
                  E(t);
                },
                children: e.renderFn(t === L),
              },
              t,
            );
          }),
          T = [f.itemsContainer, o("WAWebUISpacing").uiPadding.all10];
        return o("ReactDOM").createPortal(
          u.jsx(
            "div",
            babelHelpers.extends(
              { onClick: S },
              (e || (e = r("stylex"))).props(T),
              { children: I },
            ),
          ),
          v,
        );
      }
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
