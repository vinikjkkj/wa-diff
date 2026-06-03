__d(
  "LexicalClearEditorPlugin.prod",
  ["Lexical", "LexicalComposerContext", "LexicalExtension", "react"],
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
    var i =
      _require_closure_react || (_require_closure_react = require("react"));
    var o = require("Lexical").CAN_USE_DOM ? i.useLayoutEffect : i.useEffect;
    exports.ClearEditorPlugin = function (_ref) {
      var t = _ref.onClear;
      var _r$useLexicalComposer =
          require("LexicalComposerContext").useLexicalComposerContext(),
        i = _r$useLexicalComposer[0];
      return (
        o(
          function () {
            return require("LexicalExtension").registerClearEditor(i, t);
          },
          [i, t],
        ),
        null
      );
    };
  },
  null,
);
