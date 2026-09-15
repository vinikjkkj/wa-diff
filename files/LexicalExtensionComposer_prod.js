__d(
  "LexicalExtensionComposer.prod",
  [
    "Lexical",
    "LexicalExtension",
    "LexicalReactExtension",
    "LexicalReactProviderExtension",
    "react",
  ],
  function $module_LexicalExtensionComposer_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _require_closure_react;
    var r =
        _require_closure_react || (_require_closure_react = require("react")),
      o = _require_closure_react;
    exports.LexicalExtensionComposer = function (_ref) {
      var c = _ref.extension,
        s = _ref.children,
        x = _ref.contentEditable;
      var u = r.useMemo(
        function () {
          return require("LexicalExtension")
            .LexicalBuilder.fromExtensions([
              require("LexicalReactProviderExtension").ReactProviderExtension,
              require("Lexical").configExtension(
                require("LexicalReactExtension").ReactExtension,
                void 0 === x ? {} : { contentEditable: x },
              ),
              c,
            ])
            .buildEditor();
        },
        [x, c],
      );
      r.useEffect(
        function () {
          var e = !1;
          return (
            queueMicrotask(function () {
              e = !0;
            }),
            function () {
              e && u.dispose();
            }
          );
        },
        [u],
      );
      var a = require("LexicalExtension").getExtensionDependencyFromEditor(
        u,
        require("LexicalReactExtension").ReactExtension,
      ).output.Component;
      return o.jsx(a, { children: s });
    };
  },
  null,
);
