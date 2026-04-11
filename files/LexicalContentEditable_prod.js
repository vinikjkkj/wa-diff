__d(
  "LexicalContentEditable.prod",
  ["LexicalComposerContext", "LexicalText", "LexicalUtils", "react"],
  function $module_LexicalContentEditable_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _excluded = [
        "editor",
        "ariaActiveDescendant",
        "ariaAutoComplete",
        "ariaControls",
        "ariaDescribedBy",
        "ariaErrorMessage",
        "ariaExpanded",
        "ariaInvalid",
        "ariaLabel",
        "ariaLabelledBy",
        "ariaMultiline",
        "ariaOwns",
        "ariaRequired",
        "autoCapitalize",
        "className",
        "id",
        "role",
        "spellCheck",
        "style",
        "tabIndex",
        "data-testid",
      ],
      _excluded2 = ["placeholder"];
    var _require_closure_react;
    var t =
        _require_closure_react || (_require_closure_react = require("react")),
      a = _require_closure_react;
    var n =
      "undefined" != typeof window &&
      void 0 !== window.document &&
      void 0 !== window.document.createElement
        ? t.useLayoutEffect
        : t.useEffect;
    function o(_ref, q) {
      var e = _ref.editor,
        i = _ref.ariaActiveDescendant,
        r = _ref.ariaAutoComplete,
        o = _ref.ariaControls,
        l = _ref.ariaDescribedBy,
        s = _ref.ariaErrorMessage,
        d = _ref.ariaExpanded,
        u = _ref.ariaInvalid,
        c = _ref.ariaLabel,
        f = _ref.ariaLabelledBy,
        b = _ref.ariaMultiline,
        m = _ref.ariaOwns,
        x = _ref.ariaRequired,
        E = _ref.autoCapitalize,
        p = _ref.className,
        C = _ref.id,
        _ref$role = _ref.role,
        v = _ref$role === void 0 ? "textbox" : _ref$role,
        _ref$spellCheck = _ref.spellCheck,
        w = _ref$spellCheck === void 0 ? !0 : _ref$spellCheck,
        y = _ref.style,
        L = _ref.tabIndex,
        g = _ref["data-testid"],
        h = babelHelpers.objectWithoutPropertiesLoose(_ref, _excluded);
      var _t$useState = t.useState(e.isEditable()),
        R = _t$useState[0],
        j = _t$useState[1],
        S = t.useCallback(
          function (t) {
            t && t.ownerDocument && t.ownerDocument.defaultView
              ? e.setRootElement(t)
              : e.setRootElement(null);
          },
          [e],
        ),
        D = t.useMemo(
          function () {
            return (function () {
              for (
                var _len = arguments.length, e = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                e[_key] = arguments[_key];
              }
              return function (t) {
                for (var _a of e)
                  "function" == typeof _a
                    ? _a(t)
                    : null != _a && (_a.current = t);
              };
            })(q, S);
          },
          [S, q],
        );
      return (
        n(
          function () {
            return (
              j(e.isEditable()),
              e.registerEditableListener(function (e) {
                j(e);
              })
            );
          },
          [e],
        ),
        a.jsx(
          "div",
          babelHelpers["extends"](
            {
              "aria-activedescendant": R ? i : void 0,
              "aria-autocomplete": R ? r : "none",
              "aria-controls": R ? o : void 0,
              "aria-describedby": l,
            },
            null != s ? { "aria-errormessage": s } : {},
            { "aria-expanded": R && "combobox" === v ? !!d : void 0 },
            null != u ? { "aria-invalid": u } : {},
            {
              "aria-label": c,
              "aria-labelledby": f,
              "aria-multiline": b,
              "aria-owns": R ? m : void 0,
              "aria-readonly": !R || void 0,
              "aria-required": x,
              autoCapitalize: E,
              className: p,
              contentEditable: R,
              "data-testid": g,
              id: C,
              ref: D,
              role: v,
              spellCheck: w,
              style: y,
              tabIndex: L,
            },
            h,
          ),
        )
      );
    }
    var l = t.forwardRef(o);
    function s(e) {
      return e
        .getEditorState()
        .read(require("LexicalText").$canShowPlaceholderCurry(e.isComposing()));
    }
    var d = t.forwardRef(u);
    function u(t, i) {
      var r = t.placeholder,
        n = babelHelpers.objectWithoutPropertiesLoose(t, _excluded2),
        _e$useLexicalComposer =
          require("LexicalComposerContext").useLexicalComposerContext(),
        o = _e$useLexicalComposer[0];
      return a.jsxs(a.Fragment, {
        children: [
          a.jsx(l, babelHelpers["extends"]({ editor: o }, n, { ref: i })),
          null != r && a.jsx(c, { editor: o, content: r }),
        ],
      });
    }
    function c(_ref2) {
      var e = _ref2.content,
        i = _ref2.editor;
      var o = (function (e) {
          var _t$useState3 = t.useState(function () {
              return s(e);
            }),
            a = _t$useState3[0],
            i = _t$useState3[1];
          return (
            n(
              function () {
                function t() {
                  var t = s(e);
                  i(t);
                }
                return (
                  t(),
                  require("LexicalUtils").mergeRegister(
                    e.registerUpdateListener(function () {
                      t();
                    }),
                    e.registerEditableListener(function () {
                      t();
                    }),
                  )
                );
              },
              [e],
            ),
            a
          );
        })(i),
        _t$useState2 = t.useState(i.isEditable()),
        l = _t$useState2[0],
        d = _t$useState2[1];
      if (
        (t.useLayoutEffect(
          function () {
            return (
              d(i.isEditable()),
              i.registerEditableListener(function (e) {
                d(e);
              })
            );
          },
          [i],
        ),
        !o)
      )
        return null;
      var u = null;
      return (
        "function" == typeof e ? (u = e(l)) : null !== e && (u = e),
        null === u ? null : a.jsx("div", { "aria-hidden": !0, children: u })
      );
    }
    ((exports.ContentEditable = d), (exports.ContentEditableElement = l));
  },
  null,
);
