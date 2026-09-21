__d(
  "LexicalExtensionGetPeerDependencyFromEditor.prod",
  ["LexicalExtensionLexicalBuilder"],
  function $module_LexicalExtensionGetPeerDependencyFromEditor_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    function r(r, n) {
      var o =
        require("LexicalExtensionLexicalBuilder").LexicalBuilder.maybeFromEditor(
          r,
        );
      if (!o) return;
      var t = o.extensionNameMap.get(n);
      return t ? t.getExtensionDependency() : void 0;
    }
    ((exports.getPeerDependencyFromEditor = r),
      (exports.getPeerDependencyFromEditorOrThrow = function (e, n) {
        var o = r(e, n);
        return (
          void 0 === o &&
            (function (e) {
              var n = new URL("https://lexical.dev/docs/error"),
                o = new URLSearchParams();
              o.append("code", e);
              for (
                var _len = arguments.length,
                  r = new Array(_len > 1 ? _len - 1 : 0),
                  _key = 1;
                _key < _len;
                _key++
              ) {
                r[_key - 1] = arguments[_key];
              }
              for (var _e of r) o.append("v", _e);
              throw (
                (n.search = o.toString()),
                Error(
                  "Minified Lexical error #" +
                    e +
                    "; visit " +
                    n.toString() +
                    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
                )
              );
            })(291, n),
          o
        );
      }));
  },
  null,
);
