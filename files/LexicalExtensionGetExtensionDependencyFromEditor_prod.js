__d(
  "LexicalExtensionGetExtensionDependencyFromEditor.prod",
  ["LexicalExtensionLexicalBuilder"],
  function $module_LexicalExtensionGetExtensionDependencyFromEditor_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    exports.getExtensionDependencyFromEditor = function (n, r) {
      var i = require("LexicalExtensionLexicalBuilder")
        .LexicalBuilder.fromEditor(n)
        .getExtensionRep(r);
      return (
        void 0 === i &&
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
              var r = new URL("https://lexical.dev/docs/error"),
                i = new URLSearchParams();
              i.append("code", e);
              for (
                var _len2 = arguments.length,
                  n = new Array(_len2 > 1 ? _len2 - 1 : 0),
                  _key2 = 1;
                _key2 < _len2;
                _key2++
              ) {
                n[_key2 - 1] = arguments[_key2];
              }
              for (var _e of n) i.append("v", _e);
              return (
                (r.search = i.toString()),
                new Error(
                  "Minified Lexical error #" +
                    e +
                    "; visit " +
                    r.toString() +
                    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
                )
              );
            }.apply(void 0, [e].concat(Array.from(n)));
          })(303, r.name),
        i.getExtensionDependency()
      );
    };
  },
  null,
);
