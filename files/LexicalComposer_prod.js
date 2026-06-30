__d(
  "LexicalComposer.prod",
  ["Lexical", "LexicalComposerContext", "react"],
  function $module_LexicalComposer_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _require_closure_react;
    var o =
        _require_closure_react || (_require_closure_react = require("react")),
      r = _require_closure_react;
    var n = require("Lexical").CAN_USE_DOM ? o.useLayoutEffect : o.useEffect,
      a = { tag: require("Lexical").HISTORY_MERGE_TAG };
    exports.LexicalComposer = function (_ref) {
      var i = _ref.initialConfig,
        c = _ref.children;
      var s = o.useMemo(function () {
        var o = i.theme,
          r = i.namespace,
          n = i.nodes,
          c = i.onError,
          s = i.onWarn,
          l = i.editorState,
          u = i.html,
          d = require("LexicalComposerContext").createLexicalComposerContext(
            null,
            o,
          ),
          E = require("Lexical").createEditor(
            babelHelpers["extends"](
              {
                editable: i.editable,
                html: u,
                namespace: r,
                nodes: n,
                onError: function onError(e) {
                  return c(e, E);
                },
              },
              s
                ? {
                    onWarn: function onWarn(e) {
                      return s(e, E);
                    },
                  }
                : {},
              { theme: o },
            ),
          );
        return (
          (function (e, o) {
            if (null === o) return;
            if (void 0 === o)
              e.update(function () {
                var o = require("Lexical").$getRoot();
                if (o.isEmpty()) {
                  var _r = require("Lexical").$createParagraphNode();
                  o.append(_r);
                  var _n = e.getRootElement(),
                    _a =
                      require("Lexical").CAN_USE_DOM && null !== _n
                        ? require("Lexical").getActiveElement(_n)
                        : null;
                  (null !== require("Lexical").$getSelection() ||
                    (null !== _a && _a === _n)) &&
                    _r.select();
                }
              }, a);
            else if (null !== o)
              switch (typeof o) {
                case "string": {
                  var _t = e.parseEditorState(o);
                  e.setEditorState(_t, a);
                  break;
                }
                case "object":
                  e.setEditorState(o, a);
                  break;
                case "function":
                  e.update(function () {
                    require("Lexical").$getRoot().isEmpty() && o(e);
                  }, a);
              }
          })(E, l),
          [E, d]
        );
      }, []);
      return (
        n(function () {
          var e = i.editable,
            t = s[0];
          t.setEditable(void 0 === e || e);
        }, []),
        r.jsx(
          require("LexicalComposerContext").LexicalComposerContext.Provider,
          { value: s, children: c },
        )
      );
    };
  },
  null,
);
