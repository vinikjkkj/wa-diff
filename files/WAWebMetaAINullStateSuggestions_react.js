__d(
  "WAWebMetaAINullStateSuggestions.react",
  [
    "WAWebChatEntryPoint",
    "WAWebGetRotatedNullStateSuggestions",
    "WAWebKeyboardHotKeys.react",
    "WAWebMetaAISuggestion.react",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useImperativeHandle,
      m = c.useMemo,
      p = c.useRef,
      _ = {
        container: { paddingBottom: "x1a8lsjc", $$css: !0 },
        wrapper: {
          paddingBottom: "x1a8lsjc",
          borderBottomStyle: "x1q0q8m5",
          borderBottomWidth: "xso031l",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          $$css: !0,
        },
      };
    function f(t) {
      var n = t.fetchedSuggestions,
        a = t.onBlur,
        i = t.onKeyDown,
        l = t.onSearchFocus,
        s = t.onSuggestionClick,
        c = t.ref,
        f = p([]),
        g = p(null),
        h = p(null),
        y = m(
          function () {
            return o(
              "WAWebGetRotatedNullStateSuggestions",
            ).getRotatedNullStateSuggestions(n);
          },
          [n],
        ),
        C = function () {
          var e;
          ((g.current = 0), (e = f.current[0]) == null || e.focus());
        };
      if (
        (d(c, function () {
          return {
            focus: C,
            getElement: function () {
              return h.current;
            },
          };
        }),
        y.length === 0)
      )
        return null;
      var b = function (t, n) {
          f.current[n] = t;
        },
        v = function (t) {
          var e,
            n,
            r = ((e = g.current) != null ? e : -1) + 1;
          if (r >= y.length) {
            i == null || i(t);
            return;
          }
          ((g.current = r), (n = f.current[r]) == null || n.focus());
        },
        S = function () {
          var e,
            t,
            n = ((e = g.current) != null ? e : y.length) - 1;
          if (n < 0) {
            l();
            return;
          }
          ((g.current = n), (t = f.current[n]) == null || t.focus());
        },
        R = { down: v, up: S },
        L = function (t) {
          var e = h.current,
            n = t.relatedTarget;
          e != null &&
            n != null &&
            n instanceof HTMLElement &&
            !e.contains(n) &&
            (a == null || a());
        };
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        ref: h,
        onBlur: L,
        xstyle: _.container,
        handlers: R,
        children: u.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props([
              _.wrapper,
              o("WAWebUISpacing").uiPadding.bottom10,
            ]),
            {
              children: y.map(function (e, t) {
                return u.jsx(
                  r("WAWebMetaAISuggestion.react"),
                  {
                    ref: function (n) {
                      return b(n, t);
                    },
                    suggestion: e,
                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                      .MetaAINullStateSuggestion,
                    onClick: function () {
                      return s == null ? void 0 : s(t, y.length);
                    },
                  },
                  t,
                );
              }),
            },
          ),
        ),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
