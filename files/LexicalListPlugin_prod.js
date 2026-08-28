__d(
  "LexicalListPlugin.prod",
  ["Lexical", "LexicalComposerContext", "LexicalList", "react"],
  function $module_LexicalListPlugin_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _require_closure_react;
    var i =
      _require_closure_react || (_require_closure_react = require("react"));
    exports.ListPlugin = function (_ref) {
      var _ref$hasStrictIndent = _ref.hasStrictIndent,
        s = _ref$hasStrictIndent === void 0 ? !1 : _ref$hasStrictIndent,
        _ref$shouldPreserveNu = _ref.shouldPreserveNumbering,
        o = _ref$shouldPreserveNu === void 0 ? !1 : _ref$shouldPreserveNu;
      var _r$useLexicalComposer =
          require("LexicalComposerContext").useLexicalComposerContext(),
        n = _r$useLexicalComposer[0];
      return (
        i.useEffect(
          function () {
            if (
              !n.hasNodes([
                require("LexicalList").ListNode,
                require("LexicalList").ListItemNode,
              ])
            )
              throw new Error(
                "ListPlugin: ListNode and/or ListItemNode not registered on editor",
              );
          },
          [n],
        ),
        i.useEffect(
          function () {
            return require("Lexical").mergeRegister(
              require("LexicalList").registerList(n, { restoreNumbering: o }),
              s
                ? require("LexicalList").registerListStrictIndentTransform(n)
                : function () {},
            );
          },
          [n, s, o],
        ),
        (function (r) {
          i.useEffect(
            function () {
              return require("LexicalList").registerList(r);
            },
            [r],
          );
        })(n),
        null
      );
    };
  },
  null,
);
