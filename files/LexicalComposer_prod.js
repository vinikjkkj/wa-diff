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
      n = _require_closure_react;
    var r =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement,
      i = r ? o.useLayoutEffect : o.useEffect,
      a = { tag: require("Lexical").HISTORY_MERGE_TAG };
    exports.LexicalComposer = function (_ref) {
      var c = _ref.initialConfig,
        s = _ref.children;
      var l = o.useMemo(function () {
        var o = c.theme,
          n = c.namespace,
          i = c.nodes,
          s = c.onError,
          l = c.editorState,
          d = c.html,
          u = require("LexicalComposerContext").createLexicalComposerContext(
            null,
            o,
          ),
          m = require("Lexical").createEditor({
            editable: c.editable,
            html: d,
            namespace: n,
            nodes: i,
            onError: function onError(e) {
              return s(e, m);
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
                  var _n = require("Lexical").$createParagraphNode();
                  o.append(_n);
                  var _i = r ? document.activeElement : null;
                  (null !== require("Lexical").$getSelection() ||
                    (null !== _i && _i === e.getRootElement())) &&
                    _n.select();
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
          })(m, l),
          [m, u]
        );
      }, []);
      return (
        i(function () {
          var e = c.editable,
            t = l[0];
          t.setEditable(void 0 === e || e);
        }, []),
        n.jsx(
          require("LexicalComposerContext").LexicalComposerContext.Provider,
          { value: l, children: s },
        )
      );
    };
  },
  null,
);
