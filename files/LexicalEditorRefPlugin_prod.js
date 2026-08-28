__d(
  "LexicalEditorRefPlugin.prod",
  ["LexicalComposerContext", "react"],
  function $module_LexicalEditorRefPlugin_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _require_closure_react;
    function t(e) {
      var t = Object.create(null);
      if (e) for (var r in e) t[r] = e[r];
      return ((t["default"] = e), t);
    }
    var r = t(
      _require_closure_react || (_require_closure_react = require("react")),
    );
    exports.EditorRefPlugin = function (_ref) {
      var t = _ref.editorRef;
      var _e$useLexicalComposer =
          require("LexicalComposerContext").useLexicalComposerContext(),
        n = _e$useLexicalComposer[0];
      return (
        r.useEffect(
          function () {
            "function" == typeof t
              ? t(n)
              : "object" == typeof t && null !== t && (t.current = n);
          },
          [n],
        ),
        null
      );
    };
  },
  null,
);
