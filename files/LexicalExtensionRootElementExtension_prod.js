__d(
  "LexicalExtensionRootElementExtension.prod",
  ["LexicalExtensionWatchedSignal"],
  function $module_LexicalExtensionRootElementExtension_prod(
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
            return t.getRootElement();
          },
          function (e) {
            return t.registerRootListener(function (t) {
              e.value = t;
            });
          },
        );
      },
      name: "@lexical/extension/RootElement",
    };
    exports.RootElementExtension = t;
  },
  null,
);
