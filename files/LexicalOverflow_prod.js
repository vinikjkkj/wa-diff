__d(
  "LexicalOverflow.prod",
  ["Lexical"],
  function $module_LexicalOverflow_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _t4 = (function (_e$ElementNode) {
      function t() {
        return _e$ElementNode.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, _e$ElementNode);
      var _proto = t.prototype;
      _proto.$config = function $config() {
        return this.config("overflow", {
          $transform: function $transform(e) {
            e.isEmpty() && e.remove();
          },
          extends: require("Lexical").ElementNode,
        });
      };
      _proto.createDOM = function createDOM(_t) {
        var r = require("Lexical").$getDocument().createElement("span"),
          n = _t.theme.characterLimit;
        return ("string" == typeof n && (r.className = n), r);
      };
      _proto.updateDOM = function updateDOM(e, _t2) {
        return !1;
      };
      _proto.insertNewAfter = function insertNewAfter(e, _t3) {
        if (_t3 === void 0) {
          _t3 = !0;
        }
        return this.getParentOrThrow().insertNewAfter(e, _t3);
      };
      _proto.excludeFromCopy = function excludeFromCopy() {
        return !0;
      };
      return t;
    })(require("Lexical").ElementNode);
    var r = {
      name: "LexicalOverflow",
      nodes: function nodes() {
        return [_t4];
      },
    };
    ((exports.$createOverflowNode = function () {
      return require("Lexical").$applyNodeReplacement(new _t4());
    }),
      (exports.$isOverflowNode = function (e) {
        return e instanceof _t4;
      }),
      (exports.OverflowExtension = r),
      (exports.OverflowNode = _t4));
  },
  null,
);
