__d(
  "LexicalExtensionGetExtensionDependency.prod",
  [
    "Lexical",
    "LexicalExtensionGetExtensionDependencyFromEditor",
    "LexicalExtensionGetPeerDependencyFromEditor",
  ],
  function $module_LexicalExtensionGetExtensionDependency_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    function r(n) {
      return require("LexicalExtensionGetExtensionDependencyFromEditor").getExtensionDependencyFromEditor(
        require("Lexical").$getEditor(),
        n,
      );
    }
    ((exports.$getExtensionDependency = r),
      (exports.$getExtensionOutput = function (e) {
        return r(e).output;
      }),
      (exports.$getPeerDependency = function (t) {
        return require("LexicalExtensionGetPeerDependencyFromEditor").getPeerDependencyFromEditor(
          require("Lexical").$getEditor(),
          t,
        );
      }));
  },
  null,
);
