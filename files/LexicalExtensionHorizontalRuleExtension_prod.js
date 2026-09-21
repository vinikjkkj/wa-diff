__d(
  "LexicalExtensionHorizontalRuleExtension.prod",
  [
    "Lexical",
    "LexicalExtensionEditorStateExtension",
    "LexicalExtensionNodeSelectionExtension",
    "LexicalExtensionSignals",
    "LexicalUtils",
  ],
  function $module_LexicalExtensionHorizontalRuleExtension_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var i = require("Lexical").createCommand("INSERT_HORIZONTAL_RULE_COMMAND");
    var _s3 = (function (_t$DecoratorNode) {
      function s() {
        return _t$DecoratorNode.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(s, _t$DecoratorNode);
      var _proto = s.prototype;
      _proto.$config = function $config() {
        return this.config("horizontalrule", {
          extends: require("Lexical").DecoratorNode,
          importDOM: {
            hr: function hr() {
              return { conversion: l, priority: 0 };
            },
          },
        });
      };
      _proto.exportDOM = function exportDOM() {
        return {
          element: require("Lexical").$getDocument().createElement("hr"),
        };
      };
      _proto.createDOM = function createDOM(e) {
        var n = require("Lexical").$getDocument().createElement("hr");
        return (require("Lexical").addClassNamesToElement(n, e.theme.hr), n);
      };
      _proto.getTextContent = function getTextContent() {
        return "\n";
      };
      _proto.isInline = function isInline() {
        return !1;
      };
      _proto.updateDOM = function updateDOM() {
        return !1;
      };
      return s;
    })(require("Lexical").DecoratorNode);
    function l() {
      return { node: c() };
    }
    function c() {
      return require("Lexical").$create(_s3);
    }
    function a(e) {
      return e instanceof _s3;
    }
    var d = {
      dependencies: [
        require("LexicalExtensionEditorStateExtension").EditorStateExtension,
        require("LexicalExtensionNodeSelectionExtension")
          .NodeSelectionExtension,
      ],
      name: "@lexical/extension/HorizontalRule",
      nodes: function nodes() {
        return [_s3];
      },
      register: function register(n, l, d) {
        var _n$_config$theme$hrSe;
        var u = d.getDependency(
            require("LexicalExtensionNodeSelectionExtension")
              .NodeSelectionExtension,
          ).output.watchNodeKey,
          N = require("LexicalExtensionSignals").signal({
            nodeSelections: new Map(),
          }),
          g =
            (_n$_config$theme$hrSe = n._config.theme.hrSelected) != null
              ? _n$_config$theme$hrSe
              : "selected";
        return require("Lexical").mergeRegister(
          n.registerCommand(
            i,
            function (n) {
              var o = require("Lexical").$getSelection();
              if (!require("Lexical").$isRangeSelection(o)) return !1;
              if (null !== o.focus.getNode()) {
                var _t = c();
                require("LexicalUtils").$insertNodeToNearestRoot(_t);
              }
              return !0;
            },
            require("Lexical").COMMAND_PRIORITY_EDITOR,
          ),
          n.registerCommand(
            require("Lexical").CLICK_COMMAND,
            function (e) {
              if (require("Lexical").isDOMNode(e.target)) {
                var _n = require("Lexical").$getNodeFromDOMNode(e.target);
                if (a(_n))
                  return (
                    (function (e, n) {
                      if (n === void 0) {
                        n = !1;
                      }
                      var o = require("Lexical").$getSelection(),
                        r = e.isSelected(),
                        i = e.getKey();
                      var s;
                      (n && require("Lexical").$isNodeSelection(o)
                        ? (s = o)
                        : ((s = require("Lexical").$createNodeSelection()),
                          require("Lexical").$setSelection(s)),
                        r ? s["delete"](i) : s.add(i));
                    })(_n, e.shiftKey),
                    !0
                  );
              }
              return !1;
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
          n.registerMutationListener(_s3, function (e, t) {
            require("LexicalExtensionSignals").batch(function () {
              var t = !1;
              var _N$peek = N.peek(),
                o = _N$peek.nodeSelections;
              for (var _ref2 of e.entries()) {
                var _i = _ref2[0];
                var _s = _ref2[1];
                if ("destroyed" === _s) (o["delete"](_i), (t = !0));
                else {
                  var _e = o.get(_i),
                    _s2 = n.getElementByKey(_i);
                  _e
                    ? (_e.domNode.value = _s2)
                    : ((t = !0),
                      o.set(_i, {
                        domNode: require("LexicalExtensionSignals").signal(_s2),
                        selectedSignal: u(_i),
                      }));
                }
              }
              t && (N.value = { nodeSelections: o });
            });
          }),
          require("LexicalExtensionSignals").effect(function () {
            var e = [];
            var _loop = function _loop() {
              var n = _ref4.domNode;
              var o = _ref4.selectedSignal;
              e.push(
                require("LexicalExtensionSignals").effect(function () {
                  var e = n.value;
                  if (e) {
                    o.value
                      ? require("Lexical").addClassNamesToElement(e, g)
                      : require("Lexical").removeClassNamesFromElement(e, g);
                  }
                }),
              );
            };
            for (var _ref4 of N.value.nodeSelections.values()) {
              _loop();
            }
            return require("Lexical").mergeRegister.apply(
              require("Lexical"),
              Array.from(e),
            );
          }),
        );
      },
    };
    ((exports.$createHorizontalRuleNode = c),
      (exports.$isHorizontalRuleNode = a),
      (exports.HorizontalRuleExtension = d),
      (exports.HorizontalRuleNode = _s3),
      (exports.INSERT_HORIZONTAL_RULE_COMMAND = i));
  },
  null,
);
