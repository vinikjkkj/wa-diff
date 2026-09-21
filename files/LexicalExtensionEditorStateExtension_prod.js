__d(
  "LexicalExtensionEditorStateExtension.prod",
  ["LexicalExtensionWatchedSignal"],
  function $module_LexicalExtensionEditorStateExtension_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var t = {
      build: function build(t) {
        return require("LexicalExtensionWatchedSignal").watchedSignal(
          function () {
            return t.getEditorState();
          },
          function (e) {
            return t.registerUpdateListener(function (t) {
              e.value = t.editorState;
            });
          },
        );
      },
      name: "@lexical/extension/EditorState",
    };
    exports.EditorStateExtension = t;
  },
  null,
);
