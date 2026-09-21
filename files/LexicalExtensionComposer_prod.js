__d(
  "LexicalExtensionComposer.prod",
  [
    "Lexical",
    "LexicalExtensionGetExtensionDependencyFromEditor",
    "LexicalExtensionLexicalBuilder",
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
    var o =
        _require_closure_react || (_require_closure_react = require("react")),
      c = _require_closure_react;
    exports.LexicalExtensionComposer = function (_ref) {
      var s = _ref.extension,
        x = _ref.children,
        u = _ref.contentEditable;
      var a = o.useMemo(
        function () {
          return require("LexicalExtensionLexicalBuilder")
            .LexicalBuilder.fromExtensions([
              require("LexicalReactProviderExtension").ReactProviderExtension,
              require("Lexical").configExtension(
                require("LexicalReactExtension").ReactExtension,
                void 0 === u ? {} : { contentEditable: u },
              ),
              s,
            ])
            .buildEditor();
        },
        [u, s],
      );
      o.useEffect(
        function () {
          var e = !1;
          return (
            queueMicrotask(function () {
              e = !0;
            }),
            function () {
              e && a.dispose();
            }
          );
        },
        [a],
      );
      var E =
        require("LexicalExtensionGetExtensionDependencyFromEditor").getExtensionDependencyFromEditor(
          a,
          require("LexicalReactExtension").ReactExtension,
        ).output.Component;
      return c.jsx(E, { children: x });
    };
  },
  null,
);
