__d(
  "LexicalExtensionConfig.prod",
  ["Lexical"],
  function $module_LexicalExtensionConfig_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    function n(e) {
      return ("function" == typeof e.nodes ? e.nodes() : e.nodes) || [];
    }
    ((exports.getKnownTypesAndNodes = function (t) {
      var o = new Set(),
        s = new Set();
      for (var d of n(t)) {
        var _n = "function" == typeof d ? d : d.replace;
        (require("Lexical").getStaticNodeConfig(_n),
          o.add(_n.getType()),
          s.add(_n));
      }
      return { nodes: s, types: o };
    }),
      (exports.getNodeConfig = n));
  },
  null,
);
