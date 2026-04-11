__d(
  "LexicalClearEditorPlugin.prod",
  ["LexicalComposerContext", "LexicalExtension", "react"],
  function $module_LexicalClearEditorPlugin_prod(
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
      _require_closure_react || (_require_closure_react = require("react"));
    var r =
      "undefined" != typeof window &&
      void 0 !== window.document &&
      void 0 !== window.document.createElement
        ? o.useLayoutEffect
        : o.useEffect;
    exports.ClearEditorPlugin = function (_ref) {
      var o = _ref.onClear;
      var _t$useLexicalComposer =
          require("LexicalComposerContext").useLexicalComposerContext(),
        n = _t$useLexicalComposer[0];
      return (
        r(
          function () {
            return require("LexicalExtension").registerClearEditor(n, o);
          },
          [n, o],
        ),
        null
      );
    };
  },
  null,
);
