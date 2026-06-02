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
      i = { tag: require("Lexical").HISTORY_MERGE_TAG };
    exports.LexicalComposer = function (_ref) {
      var a = _ref.initialConfig,
        c = _ref.children;
      var s = o.useMemo(function () {
        var o = a.theme,
          r = a.namespace,
          n = a.nodes,
          c = a.onError,
          s = a.editorState,
          l = a.html,
          u = require("LexicalComposerContext").createLexicalComposerContext(
            null,
            o,
          ),
          d = require("Lexical").createEditor({
            editable: a.editable,
            html: l,
            namespace: r,
            nodes: n,
            onError: function onError(e) {
              return c(e, d);
            },
            theme: o,
          });
        return (
          (function (e, o) {
            if (null === o) return;
            if (void 0 === o)
              e.update(function () {
                var o = require("Lexical").$getRoot();
                if (o.isEmpty()) {
                  var _r = require("Lexical").$createParagraphNode();
                  o.append(_r);
                  var _n = require("Lexical").CAN_USE_DOM
                    ? document.activeElement
                    : null;
                  (null !== require("Lexical").$getSelection() ||
                    (null !== _n && _n === e.getRootElement())) &&
                    _r.select();
                }
              }, i);
            else if (null !== o)
              switch (typeof o) {
                case "string": {
                  var _t = e.parseEditorState(o);
                  e.setEditorState(_t, i);
                  break;
                }
                case "object":
                  e.setEditorState(o, i);
                  break;
                case "function":
                  e.update(function () {
                    require("Lexical").$getRoot().isEmpty() && o(e);
                  }, i);
              }
          })(d, s),
          [d, u]
        );
      }, []);
      return (
        n(function () {
          var e = a.editable,
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
