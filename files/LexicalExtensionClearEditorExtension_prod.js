__d(
  "LexicalExtensionClearEditorExtension.prod",
  ["Lexical", "LexicalExtensionNamedSignals", "LexicalExtensionSignals"],
  function $module_LexicalExtensionClearEditorExtension_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    function n() {
      var r = require("Lexical").$getRoot(),
        t = require("Lexical").$getSelection(),
        n = require("Lexical").$createParagraphNode();
      (r.clear(),
        r.append(n),
        null !== t && n.select(),
        require("Lexical").$isRangeSelection(t) && (t.format = 0));
    }
    function i(r, t) {
      if (t === void 0) {
        t = n;
      }
      return r.registerCommand(
        require("Lexical").CLEAR_EDITOR_COMMAND,
        function () {
          return (t(), !0);
        },
        require("Lexical").COMMAND_PRIORITY_EDITOR,
      );
    }
    var a = {
      build: function build(e, t, n) {
        return require("LexicalExtensionNamedSignals").namedSignals(t);
      },
      config: { $onClear: n },
      name: "@lexical/extension/ClearEditor",
      register: function register(e, r, n) {
        var _n$getOutput = n.getOutput(),
          a = _n$getOutput.$onClear;
        return require("LexicalExtensionSignals").effect(function () {
          return i(e, a.value);
        });
      },
    };
    ((exports.ClearEditorExtension = a), (exports.registerClearEditor = i));
  },
  null,
);
