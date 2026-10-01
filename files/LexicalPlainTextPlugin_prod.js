__d(
  "LexicalPlainTextPlugin.prod",
  [
    "Lexical",
    "LexicalComposerContext",
    "LexicalDragon",
    "LexicalExtensionLexicalBuilder",
    "LexicalPlainText",
    "LexicalReactProviderExtension",
    "LexicalText",
    "ReactDOM",
    "react",
    "useLexicalEditable",
  ],
  function $module_LexicalPlainTextPlugin_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _require_closure_react;
    var o =
        _require_closure_react || (_require_closure_react = require("react")),
      s = _require_closure_react;
    function x(e) {
      for (
        var _len = arguments.length,
          r = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        r[_key - 1] = arguments[_key];
      }
      throw function (e) {
        var n = new URL("https://lexical.dev/docs/error"),
          t = new URLSearchParams();
        t.append("code", e);
        for (
          var _len2 = arguments.length,
            r = new Array(_len2 > 1 ? _len2 - 1 : 0),
            _key2 = 1;
          _key2 < _len2;
          _key2++
        ) {
          r[_key2 - 1] = arguments[_key2];
        }
        for (var _e of r) t.append("v", _e);
        return (
          (n.search = t.toString()),
          new Error(
            "Minified Lexical error #" +
              e +
              "; visit " +
              n.toString() +
              " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
          )
        );
      }.apply(void 0, [e].concat(Array.from(r)));
    }
    function d(_ref) {
      var e = _ref.editor,
        r = _ref.ErrorBoundary;
      return (function (e, r) {
        var _o$useMemo = o.useMemo(
            function () {
              return [
                function (r) {
                  return e.registerDecoratorListener(r);
                },
                function () {
                  return e.getDecorators();
                },
              ];
            },
            [e],
          ),
          n = _o$useMemo[0],
          t = _o$useMemo[1],
          c = o.useSyncExternalStore(n, t, t),
          u = (function (e) {
            var _o$useMemo2 = o.useMemo(
                function () {
                  return [
                    e.registerRootListener.bind(e),
                    e.getRootElement.bind(e),
                  ];
                },
                [e],
              ),
              r = _o$useMemo2[0],
              n = _o$useMemo2[1];
            return o.useSyncExternalStore(r, n, n);
          })(e);
        return o.useMemo(
          function () {
            var n = function n(r) {
                return e._onError(r);
              },
              t = [];
            for (var _u in c) {
              var _a = e.getElementByKey(_u);
              if (null !== _a) {
                var _e2 = s.jsx(r, {
                  onError: n,
                  children: s.jsx(o.Suspense, {
                    fallback: null,
                    children: c[_u],
                  }),
                });
                t.push(require("ReactDOM").createPortal(_e2, _a, _u));
              }
            }
            return t;
          },
          [r, c, e, u],
        );
      })(e, r);
    }
    function f(_ref2) {
      var e = _ref2.editor,
        r = _ref2.ErrorBoundary;
      return (function (e) {
        var r =
          require("LexicalExtensionLexicalBuilder").LexicalBuilder.maybeFromEditor(
            e,
          );
        if (
          r &&
          r.hasExtensionByName(
            require("LexicalReactProviderExtension").ReactProviderExtension
              .name,
          )
        ) {
          for (var _e3 of ["LexicalPlainText", "LexicalRichText"])
            r.hasExtensionByName(_e3) && x(320, _e3);
          return !0;
        }
        return !1;
      })(e)
        ? null
        : s.jsx(d, { editor: e, ErrorBoundary: r });
    }
    var E = require("Lexical").CAN_USE_DOM ? o.useLayoutEffect : o.useEffect;
    function L(e) {
      return e.read(
        "latest",
        require("LexicalText").$canShowPlaceholderCurry(e.isComposing()),
      );
    }
    function g(_ref3) {
      var n = _ref3.content;
      var _e$useLexicalComposer =
          require("LexicalComposerContext").useLexicalComposerContext(),
        t = _e$useLexicalComposer[0],
        i = (function (e) {
          var _o$useState = o.useState(function () {
              return L(e);
            }),
            r = _o$useState[0],
            n = _o$useState[1];
          return (
            E(
              function () {
                function r() {
                  var r = L(e);
                  n(r);
                }
                return (
                  r(),
                  require("Lexical").mergeRegister(
                    e.registerUpdateListener(function () {
                      r();
                    }),
                    e.registerEditableListener(function () {
                      r();
                    }),
                  )
                );
              },
              [e],
            ),
            r
          );
        })(t),
        s = require("useLexicalEditable").useLexicalEditable();
      return i ? ("function" == typeof n ? n(s) : n) : null;
    }
    exports.PlainTextPlugin = function (_ref4) {
      var r = _ref4.contentEditable,
        _ref4$placeholder = _ref4.placeholder,
        n = _ref4$placeholder === void 0 ? null : _ref4$placeholder,
        t = _ref4.ErrorBoundary;
      var _e$useLexicalComposer2 =
          require("LexicalComposerContext").useLexicalComposerContext(),
        o = _e$useLexicalComposer2[0];
      return (
        (function (e) {
          E(
            function () {
              return require("Lexical").mergeRegister(
                require("LexicalPlainText").registerPlainText(e),
                require("LexicalDragon").registerDragonSupport(e),
              );
            },
            [e],
          );
        })(o),
        s.jsxs(s.Fragment, {
          children: [
            r,
            s.jsx(g, { content: n }),
            s.jsx(f, { editor: o, ErrorBoundary: t }),
          ],
        })
      );
    };
  },
  null,
);
