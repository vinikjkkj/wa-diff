__d(
  "WAWebCommandPaletteController",
  [
    "Lexical",
    "LexicalComposer",
    "LexicalComposerContext",
    "WAWebCommandPaletteInput.react",
    "WAWebFlex.react",
    "WAWebLexicalUtils",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebToArray",
    "err",
    "react",
    "react-compiler-runtime",
    "useWAWebLexicalEvent",
    "useWAWebLexicalOnContentChange",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useCallback,
      m = u.useContext,
      p = u.useEffect,
      _ = u.useMemo,
      f = u.useState,
      g = u.useTransition,
      h = {
        container: {
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          backgroundColor: "x16w0wmm",
          color: "x14ug900",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        pluginContainer: { maxHeight: "x12f24lm", $$css: !0 },
      },
      y = c(null);
    function C() {
      var e = m(y);
      if (e == null)
        throw r("err")(
          "useCommandPalette must be used inside of a CommandPaletteContext",
        );
      return e;
    }
    function b(e) {
      var t = e.children,
        n = e.defaultPlugin,
        r = e.triggeredPlugins,
        a = f([]),
        i = a[0],
        l = a[1],
        u = f(""),
        c = u[0],
        m = u[1],
        h = o("LexicalComposerContext").useLexicalComposerContext(),
        C = h[0],
        b = g(),
        v = b[0],
        S = b[1],
        R = i[i.length - 1],
        L = d(
          function (e) {
            (o("WAWebLexicalUtils").setTextContent(C, e), m(e));
          },
          [C],
        ),
        E = d(
          function (e, t) {
            var n,
              r = (n = t == null ? void 0 : t.input) != null ? n : "";
            (L(r), l([].concat(i, [{ plugin: e, input: r }])));
          },
          [L, i],
        ),
        k = d(
          function (e) {
            var t = i.slice(0, i.length - 1),
              n = t[t.length - 1],
              r = "";
            (n != null &&
              ((e == null ? void 0 : e.input) != null
                ? (r = e.input)
                : n.plugin.restoreInputOnBack === !0 && (r = n.input)),
              L(r),
              l(t));
          },
          [L, i],
        ),
        I = function () {
          return l([]);
        },
        T = d(
          function (e, t) {
            var n,
              r = (n = t == null ? void 0 : t.input) != null ? n : "";
            (L(r), l([{ plugin: e, input: r }]));
          },
          [L, l],
        );
      (p(
        function () {
          if (i.length === 0) {
            var e =
              r == null
                ? void 0
                : r.find(function (e) {
                    var t = o("WAWebToArray").toArray(e.trigger);
                    if (t.includes(c)) return e;
                  });
            e != null && E(e.plugin);
          }
        },
        [c],
      ),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          C,
          o("Lexical").KEY_BACKSPACE_COMMAND,
          function (e) {
            return (c === "" && (e.preventDefault(), k()), !1);
          },
        ),
        o("useWAWebLexicalOnContentChange").useLexicalOnContentChange(
          function (e) {
            (R != null && (R.input = e),
              S(function () {
                m(e);
              }));
          },
        ));
      var D = _(
        function () {
          var e;
          return {
            input: c,
            pushPlugin: E,
            popPlugin: k,
            clearStack: I,
            replaceStack: T,
            closeModal: o("WAWebModalManager").closeModalManager,
            activePlugin: (e = R == null ? void 0 : R.plugin) != null ? e : n,
            pluginStack: i,
            pluginList: r,
            isSearching: v,
          };
        },
        [R == null ? void 0 : R.plugin, n, c, v, k, E, T, i, r],
      );
      return s.jsx(y.Provider, { value: D, children: t });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      var e = o("react-compiler-runtime").c(2),
        t = C(),
        n = t.activePlugin,
        r;
      return (
        e[0] !== n
          ? ((r =
              n != null
                ? s.jsx(o("WAWebFlex.react").FlexColumn, {
                    align: "stretch",
                    xstyle: h.pluginContainer,
                    children: s.jsx(n.Component, {}),
                  })
                : null),
            (e[0] = n),
            (e[1] = r))
          : (r = e[1]),
        r
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.defaultPlugin,
        a = e.triggeredPlugins,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { namespace: "CommandPaletteInput", onError: r("WAWebNoop") }),
          (t[0] = i))
        : (i = t[0]);
      var l = i,
        u,
        c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = s.jsx(r("WAWebCommandPaletteInput.react"), {})),
          (c = s.jsx(v, {})),
          (t[1] = u),
          (t[2] = c))
        : ((u = t[1]), (c = t[2]));
      var d;
      return (
        t[3] !== n || t[4] !== a
          ? ((d = s.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: h.container,
              children: s.jsx(o("LexicalComposer").LexicalComposer, {
                initialConfig: l,
                children: s.jsxs(b, {
                  defaultPlugin: n,
                  triggeredPlugins: a,
                  children: [u, c],
                }),
              }),
            })),
            (t[3] = n),
            (t[4] = a),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    ((l.useCommandPalette = C), (l.CommandPalette = S));
  },
  98,
);
