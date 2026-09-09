__d(
  "LexicalAutoFocusPlugin.prod",
  ["Lexical", "LexicalComposerContext", "react"],
  function $module_LexicalAutoFocusPlugin_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _require_closure_react;
    var l =
      _require_closure_react || (_require_closure_react = require("react"));
    exports.AutoFocusPlugin = function (_ref) {
      var n = _ref.defaultSelection;
      var _e$useLexicalComposer =
          require("LexicalComposerContext").useLexicalComposerContext(),
        o = _e$useLexicalComposer[0];
      return (
        l.useEffect(
          function () {
            o.focus(
              function () {
                var e = o.getRootElement(),
                  l =
                    null !== e ? require("Lexical").getActiveElement(e) : null;
                null === e ||
                  (null !== l && e.contains(l)) ||
                  e.focus({ preventScroll: !0 });
              },
              { defaultSelection: n },
            );
          },
          [n, o],
        ),
        null
      );
    };
  },
  null,
);
