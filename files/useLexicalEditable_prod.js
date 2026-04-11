__d(
  "useLexicalEditable.prod",
  ["LexicalComposerContext", "react"],
  function $module_useLexicalEditable_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _require_closure_react;
    var t =
      _require_closure_react || (_require_closure_react = require("react"));
    var n =
      "undefined" != typeof window &&
      void 0 !== window.document &&
      void 0 !== window.document.createElement
        ? t.useLayoutEffect
        : t.useEffect;
    function i(e) {
      return {
        initialValueFn: function initialValueFn() {
          return e.isEditable();
        },
        subscribe: function subscribe(t) {
          return e.registerEditableListener(t);
        },
      };
    }
    exports.useLexicalEditable = function () {
      return (function (i) {
        var _e$useLexicalComposer =
            require("LexicalComposerContext").useLexicalComposerContext(),
          r = _e$useLexicalComposer[0],
          u = t.useMemo(
            function () {
              return i(r);
            },
            [r, i],
          ),
          _t$useState = t.useState(function () {
            return u.initialValueFn();
          }),
          o = _t$useState[0],
          s = _t$useState[1],
          c = t.useRef(o);
        return (
          n(
            function () {
              var e = u.initialValueFn,
                t = u.subscribe,
                n = e();
              return (
                c.current !== n && ((c.current = n), s(n)),
                t(function (e) {
                  ((c.current = e), s(e));
                })
              );
            },
            [u, i],
          ),
          o
        );
      })(i);
    };
  },
  null,
);
