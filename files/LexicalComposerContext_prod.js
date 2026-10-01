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
              for (
                var _len = arguments.length,
                  n = new Array(_len > 1 ? _len - 1 : 0),
                  _key = 1;
                _key < _len;
                _key++
              ) {
                n[_key - 1] = arguments[_key];
              }
              throw function (e) {
                var t = new URL("https://lexical.dev/docs/error"),
                  r = new URLSearchParams();
                r.append("code", e);
                for (
                  var _len2 = arguments.length,
                    n = new Array(_len2 > 1 ? _len2 - 1 : 0),
                    _key2 = 1;
                  _key2 < _len2;
                  _key2++
                ) {
                  n[_key2 - 1] = arguments[_key2];
                }
                for (var _e of n) r.append("v", _e);
                return (
                  (t.search = r.toString()),
                  new Error(
                    "Minified Lexical error #" +
                      e +
                      "; visit " +
                      t.toString() +
                      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
                  )
                );
              }.apply(void 0, [e].concat(Array.from(n)));
            })(8),
          t
        );
      }));
  },
  null,
);
