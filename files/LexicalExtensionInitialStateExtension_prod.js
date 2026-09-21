__d(
  "LexicalExtensionInitialStateExtension.prod",
  ["Lexical"],
  function $module_LexicalExtensionInitialStateExtension_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _require_Lexical;
    var i = { tag: (_require_Lexical = require("Lexical")).HISTORY_MERGE_TAG };
    function e() {
      var i = require("Lexical").$getRoot();
      i.isEmpty() && i.append(require("Lexical").$createParagraphNode());
    }
    var o = {
      config: { setOptions: i, updateOptions: i },
      init: function init(_ref) {
        var _ref$$initialEditorSt = _ref.$initialEditorState,
          t = _ref$$initialEditorSt === void 0 ? e : _ref$$initialEditorSt;
        return { $initialEditorState: t, initialized: !1 };
      },
      afterRegistration: function afterRegistration(i, _ref2, a) {
        var e = _ref2.updateOptions,
          o = _ref2.setOptions;
        var n = a.getInitResult();
        if (!n.initialized) {
          n.initialized = !0;
          var _a = n.$initialEditorState;
          if (require("Lexical").$isEditorState(_a)) i.setEditorState(_a, o);
          else if ("function" == typeof _a)
            i.update(function () {
              _a(i);
            }, e);
          else if (_a && ("string" == typeof _a || "object" == typeof _a)) {
            var _t = i.parseEditorState(_a);
            i.setEditorState(_t, o);
          }
        }
        return function () {};
      },
      name: "@lexical/extension/InitialState",
      nodes: [
        _require_Lexical.RootNode,
        _require_Lexical.TextNode,
        _require_Lexical.LineBreakNode,
        _require_Lexical.TabNode,
        _require_Lexical.ParagraphNode,
      ],
    };
    exports.InitialStateExtension = o;
  },
  null,
);
