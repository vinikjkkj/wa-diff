__d(
  "LexicalHistoryPlugin.prod",
  ["LexicalComposerContext", "LexicalHistory", "react"],
  function $module_LexicalHistoryPlugin_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _require_closure_react;
    var r =
      _require_closure_react || (_require_closure_react = require("react"));
    ((exports.createEmptyHistoryState =
      require("LexicalHistory").createEmptyHistoryState),
      (exports.HistoryPlugin = function (_ref) {
        var o = _ref.delay,
          s = _ref.externalHistoryState;
        var _e$useLexicalComposer =
            require("LexicalComposerContext").useLexicalComposerContext(),
          i = _e$useLexicalComposer[0];
        return (
          (function (e, o, s) {
            if (s === void 0) {
              s = 1e3;
            }
            var i = r.useMemo(
              function () {
                return o || require("LexicalHistory").createEmptyHistoryState();
              },
              [o],
            );
            r.useEffect(
              function () {
                return require("LexicalHistory").registerHistory(e, i, s);
              },
              [s, e, i],
            );
          })(i, s, o),
          null
        );
      }));
  },
  null,
);
