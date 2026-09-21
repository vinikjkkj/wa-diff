__d(
  "LexicalExtensionNodeSelectionExtension.prod",
  [
    "Lexical",
    "LexicalExtensionEditorStateExtension",
    "LexicalExtensionSignals",
    "LexicalExtensionWatchedSignal",
  ],
  function $module_LexicalExtensionNodeSelectionExtension_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var o = new Set(),
      s = {
        build: function build(s, a, c) {
          var d = c.getDependency(
              require("LexicalExtensionEditorStateExtension")
                .EditorStateExtension,
            ).output,
            l = require("LexicalExtensionSignals").signal({
              watchedNodeKeys: new Map(),
            }),
            r = require("LexicalExtensionWatchedSignal").watchedSignal(
              function () {},
              function () {
                return require("LexicalExtensionSignals").effect(function () {
                  var t = r.peek(),
                    n = l.value.watchedNodeKeys;
                  var i,
                    o = !1;
                  (d.value.read(function () {
                    if (require("Lexical").$getSelection())
                      for (var _ref2 of n.entries()) {
                        var _s = _ref2[0];
                        var _a = _ref2[1];
                        {
                          if (0 === _a.size) {
                            n["delete"](_s);
                            continue;
                          }
                          var _c = require("Lexical").$getNodeByKey(_s),
                            _d = (_c && _c.isSelected()) || !1;
                          ((o = o || _d !== (!!t && t.has(_s))),
                            _d && ((i = i || new Set()), i.add(_s)));
                        }
                      }
                  }),
                    (!o && i && t && i.size === t.size) || (r.value = i));
                });
              },
            );
          return {
            watchNodeKey: function watchNodeKey(e) {
              var t = require("LexicalExtensionSignals").computed(function () {
                  return (r.value || o).has(e);
                }),
                _l$peek = l.peek(),
                i = _l$peek.watchedNodeKeys;
              var s = i.get(e);
              var a = void 0 !== s;
              return (
                (s = s || new Set()),
                s.add(t),
                a || (i.set(e, s), (l.value = { watchedNodeKeys: i })),
                t
              );
            },
          };
        },
        dependencies: [
          require("LexicalExtensionEditorStateExtension").EditorStateExtension,
        ],
        name: "@lexical/extension/NodeSelection",
      };
    exports.NodeSelectionExtension = s;
  },
  null,
);
