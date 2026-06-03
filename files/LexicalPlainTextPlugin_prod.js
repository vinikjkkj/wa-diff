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
    "LexicalUtils",
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
    function d(e) {
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
    var f = require("Lexical").CAN_USE_DOM ? o.useLayoutEffect : o.useEffect;
    function E(_ref) {
      var e = _ref.editor,
        r = _ref.ErrorBoundary;
      return (function (e, r) {
        var _o$useState = o.useState(function () {
            return e.getDecorators();
          }),
          t = _o$useState[0],
          n = _o$useState[1];
        return (
          f(
            function () {
              return e.registerDecoratorListener(function (e) {
                require("ReactDOM").flushSync(function () {
                  n(e);
                });
              });
            },
            [e],
          ),
          o.useEffect(
            function () {
              n(e.getDecorators());
            },
            [e],
          ),
          o.useMemo(
            function () {
              var n = [],
                a = Object.keys(t);
              for (var _c = 0; _c < a.length; _c++) {
                var _u = a[_c],
                  _l = s.jsx(r, {
                    onError: function onError(r) {
                      return e._onError(r);
                    },
                    children: s.jsx(o.Suspense, {
                      fallback: null,
                      children: t[_u],
                    }),
                  }),
                  _x = e.getElementByKey(_u);
                null !== _x &&
                  n.push(require("ReactDOM").createPortal(_l, _x, _u));
              }
              return n;
            },
            [r, t, e],
          )
        );
      })(e, r);
    }
    function g(_ref2) {
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
          for (var _e2 of ["LexicalPlainText", "LexicalRichText"])
            r.hasExtensionByName(_e2) && d(320, _e2);
          return !0;
        }
        return !1;
      })(e)
        ? null
        : s.jsx(E, { editor: e, ErrorBoundary: r });
    }
    function L(e) {
      return e
        .getEditorState()
        .read(require("LexicalText").$canShowPlaceholderCurry(e.isComposing()));
    }
    function h(_ref3) {
      var t = _ref3.content;
      var _e$useLexicalComposer =
          require("LexicalComposerContext").useLexicalComposerContext(),
        n = _e$useLexicalComposer[0],
        i = (function (e) {
          var _o$useState2 = o.useState(function () {
              return L(e);
            }),
            r = _o$useState2[0],
            t = _o$useState2[1];
          return (
            f(
              function () {
                function r() {
                  var r = L(e);
                  t(r);
                }
                return (
                  r(),
                  require("LexicalUtils").mergeRegister(
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
        a = require("useLexicalEditable").useLexicalEditable();
      return i ? ("function" == typeof t ? t(a) : t) : null;
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
          f(
            function () {
              return require("LexicalUtils").mergeRegister(
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
            s.jsx(h, { content: t }),
            s.jsx(g, { editor: o, ErrorBoundary: n }),
          ],
        })
      );
    };
  },
  null,
);
