__d(
  "LexicalPlainTextPlugin.prod",
  [
    "Lexical",
    "LexicalComposerContext",
    "LexicalDragon",
    "LexicalExtension",
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
      var t = new URL("https://lexical.dev/docs/error"),
        n = new URLSearchParams();
      n.append("code", e);
      for (
        var _len = arguments.length,
          r = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        r[_key - 1] = arguments[_key];
      }
      for (var _e of r) n.append("v", _e);
      throw (
        (t.search = n.toString()),
        Error(
          "Minified Lexical error #" +
            e +
            "; visit " +
            t.toString() +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
        )
      );
    }
    function d(e, r) {
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
        t = _o$useMemo[0],
        n = _o$useMemo[1],
        c = o.useSyncExternalStore(t, n, n),
        a = (function (e) {
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
            t = _o$useMemo2[1];
          return o.useSyncExternalStore(r, t, t);
        })(e);
      return o.useMemo(
        function () {
          var t = function t(r) {
              return e._onError(r);
            },
            n = [];
          for (var _a in c) {
            var _u = e.getElementByKey(_a);
            if (null !== _u) {
              var _e2 = s.jsx(r, {
                onError: t,
                children: s.jsx(o.Suspense, {
                  fallback: null,
                  children: c[_a],
                }),
              });
              n.push(require("ReactDOM").createPortal(_e2, _u, _a));
            }
          }
          return n;
        },
        [r, c, e, a],
      );
    }
    function f(_ref) {
      var e = _ref.editor,
        r = _ref.ErrorBoundary;
      return d(e, r);
    }
    function E(_ref2) {
      var e = _ref2.editor,
        r = _ref2.ErrorBoundary;
      return (function (e) {
        var r = require("LexicalExtension").LexicalBuilder.maybeFromEditor(e);
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
        : s.jsx(f, { editor: e, ErrorBoundary: r });
    }
    var g = require("Lexical").CAN_USE_DOM ? o.useLayoutEffect : o.useEffect;
    function L(e) {
      return e.read(
        "latest",
        require("LexicalText").$canShowPlaceholderCurry(e.isComposing()),
      );
    }
    function m(_ref3) {
      var t = _ref3.content;
      var _e$useLexicalComposer =
          require("LexicalComposerContext").useLexicalComposerContext(),
        n = _e$useLexicalComposer[0],
        i = (function (e) {
          var _o$useState = o.useState(function () {
              return L(e);
            }),
            r = _o$useState[0],
            t = _o$useState[1];
          return (
            g(
              function () {
                function r() {
                  var r = L(e);
                  t(r);
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
        })(n),
        s = require("useLexicalEditable").useLexicalEditable();
      return i ? ("function" == typeof t ? t(s) : t) : null;
    }
    exports.PlainTextPlugin = function (_ref4) {
      var r = _ref4.contentEditable,
        _ref4$placeholder = _ref4.placeholder,
        t = _ref4$placeholder === void 0 ? null : _ref4$placeholder,
        n = _ref4.ErrorBoundary;
      var _e$useLexicalComposer2 =
          require("LexicalComposerContext").useLexicalComposerContext(),
        o = _e$useLexicalComposer2[0];
      return (
        (function (e) {
          g(
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
            s.jsx(m, { content: t }),
            s.jsx(E, { editor: o, ErrorBoundary: n }),
          ],
        })
      );
    };
  },
  null,
);
