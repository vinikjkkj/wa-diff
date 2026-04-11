__d(
  "LexicalComposerContext.prod",
  ["react"],
  function $module_LexicalComposerContext_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _require_closure_react;
    var e =
      _require_closure_react || (_require_closure_react = require("react"));
    var n = e.createContext(null);
    ((exports.LexicalComposerContext = n),
      (exports.createLexicalComposerContext = function (e, n) {
        var t = null;
        return (
          null != e && (t = e[1]),
          {
            getTheme: function getTheme() {
              return null != n ? n : null != t ? t.getTheme() : null;
            },
          }
        );
      }),
      (exports.useLexicalComposerContext = function () {
        var t = e.useContext(n);
        return (
          null == t &&
            (function (e) {
              var t = new URL("https://lexical.dev/docs/error"),
                r = new URLSearchParams();
              r.append("code", e);
              for (
                var _len = arguments.length,
                  n = new Array(_len > 1 ? _len - 1 : 0),
                  _key = 1;
                _key < _len;
                _key++
              ) {
                n[_key - 1] = arguments[_key];
              }
              for (var _e of n) r.append("v", _e);
              throw (
                (t.search = r.toString()),
                Error(
                  "Minified Lexical error #" +
                    e +
                    "; visit " +
                    t.toString() +
                    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
                )
              );
            })(8),
          t
        );
      }));
  },
  null,
);
