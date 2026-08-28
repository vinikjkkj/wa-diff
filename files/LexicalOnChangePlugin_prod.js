__d(
  "LexicalOnChangePlugin.prod",
  ["Lexical", "LexicalComposerContext", "react"],
  function $module_LexicalOnChangePlugin_prod(
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
    var i = require("Lexical").CAN_USE_DOM ? r.useLayoutEffect : r.useEffect;
    exports.OnChangePlugin = function (_ref) {
      var _ref$ignoreHistoryMer = _ref.ignoreHistoryMergeTagChange,
        r = _ref$ignoreHistoryMer === void 0 ? !0 : _ref$ignoreHistoryMer,
        _ref$ignoreSelectionC = _ref.ignoreSelectionChange,
        n = _ref$ignoreSelectionC === void 0 ? !1 : _ref$ignoreSelectionC,
        s = _ref.onChange;
      var _e$useLexicalComposer =
          require("LexicalComposerContext").useLexicalComposerContext(),
        o = _e$useLexicalComposer[0];
      return (
        i(
          function () {
            if (s)
              return o.registerUpdateListener(function (_ref2) {
                var e = _ref2.editorState,
                  i = _ref2.dirtyElements,
                  a = _ref2.dirtyLeaves,
                  u = _ref2.prevEditorState,
                  c = _ref2.tags;
                (n && 0 === i.size && 0 === a.size) ||
                  (r && c.has(require("Lexical").HISTORY_MERGE_TAG)) ||
                  u.isEmpty() ||
                  s(e, o, c);
              });
          },
          [o, r, n, s],
        ),
        null
      );
    };
  },
  null,
);
