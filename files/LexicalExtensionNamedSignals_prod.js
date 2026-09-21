__d(
  "LexicalExtensionNamedSignals.prod",
  ["LexicalExtensionSignals"],
  function $module_LexicalExtensionNamedSignals_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    exports.namedSignals = function (i, s) {
      if (s === void 0) {
        s = {};
      }
      var t = {};
      for (var e in i) {
        var o = s[e],
          r = require("LexicalExtensionSignals").signal(
            void 0 === o ? i[e] : o,
          );
        t[e] = r;
      }
      return t;
    };
  },
  null,
);
