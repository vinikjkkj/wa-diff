__d(
  "LexicalExtensionNormalizeInlineElementsExtension.prod",
  ["Lexical", "LexicalExtensionNamedSignals", "LexicalExtensionSignals"],
  function $module_LexicalExtensionNormalizeInlineElementsExtension_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    function t(n) {
      require("Lexical").$isElementNode(n) &&
        n.isInline() &&
        n.isEmpty() &&
        n.remove();
    }
    var s = {
      build: function build(e, i, t) {
        return require("LexicalExtensionNamedSignals").namedSignals(i);
      },
      config: { disabled: !1 },
      name: "@lexical/NormalizeInlineElements",
      register: function register(n, s, o) {
        var l = o.getOutput();
        return require("LexicalExtensionSignals").effect(function () {
          if (!l.disabled.value) {
            var _i = [];
            var _loop = function _loop() {
              var s = _ref2.klass;
              var o = _ref2.transforms;
              s.prototype instanceof require("Lexical").ElementNode &&
                s.prototype.isInline !==
                  require("Lexical").ElementNode.prototype.isInline &&
                (o.add(t),
                _i.push(function () {
                  return o["delete"](t);
                }));
            };
            for (var _ref2 of n._nodes.values()) {
              _loop();
            }
            return function () {
              return _i.forEach(function (e) {
                return e();
              });
            };
          }
        });
      },
    };
    exports.NormalizeInlineElementsExtension = s;
  },
  null,
);
