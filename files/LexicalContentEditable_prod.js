__d(
  "LexicalContentEditable.prod",
  ["Lexical", "LexicalComposerContext", "LexicalText", "LexicalUtils", "react"],
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
      r = _require_closure_react;
    var o = require("Lexical").CAN_USE_DOM ? t.useLayoutEffect : t.useEffect;
    function l(_ref, w) {
      var e = _ref.editor,
        a = _ref.ariaActiveDescendant,
        i = _ref.ariaAutoComplete,
        n = _ref.ariaControls,
        l = _ref.ariaDescribedBy,
        s = _ref.ariaErrorMessage,
        d = _ref.ariaExpanded,
        u = _ref.ariaInvalid,
        c = _ref.ariaLabel,
        f = _ref.ariaLabelledBy,
        b = _ref.ariaMultiline,
        x = _ref.ariaOwns,
        E = _ref.ariaRequired,
        m = _ref.autoCapitalize,
        p = _ref.className,
        C = _ref.id,
        _ref$role = _ref.role,
        L = _ref$role === void 0 ? "textbox" : _ref$role,
        _ref$spellCheck = _ref.spellCheck,
        v = _ref$spellCheck === void 0 ? !0 : _ref$spellCheck,
        y = _ref.style,
        g = _ref.tabIndex,
        h = _ref["data-testid"],
        q = babelHelpers.objectWithoutPropertiesLoose(_ref, _excluded);
      var _t$useState = t.useState(e.isEditable()),
        R = _t$useState[0],
        S = _t$useState[1],
        j = t.useCallback(
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
            })(w, j);
          },
          [j, w],
        );
      return (
        o(
          function () {
            return (
              S(e.isEditable()),
              e.registerEditableListener(function (e) {
                S(e);
              })
            );
          },
          [e],
        ),
        r.jsx(
          "div",
          babelHelpers["extends"](
            {
              "aria-activedescendant": R ? a : void 0,
              "aria-autocomplete": R ? i : "none",
              "aria-controls": R ? n : void 0,
              "aria-describedby": l,
            },
            null != s ? { "aria-errormessage": s } : {},
            { "aria-expanded": R && "combobox" === L ? !!d : void 0 },
            null != u ? { "aria-invalid": u } : {},
            {
              "aria-label": c,
              "aria-labelledby": f,
              "aria-multiline": b,
              "aria-owns": R ? x : void 0,
              "aria-readonly": !R || void 0,
              "aria-required": E,
              autoCapitalize: m,
              className: p,
              contentEditable: R,
              "data-testid": h,
              id: C,
              ref: D,
              role: L,
              spellCheck: v,
              style: y,
              tabIndex: g,
            },
            q,
          ),
        )
      );
    }
    var s = t.forwardRef(l);
    function d(e) {
      return e
        .getEditorState()
        .read(require("LexicalText").$canShowPlaceholderCurry(e.isComposing()));
    }
    var u = t.forwardRef(c);
    function c(t, a) {
      var i = t.placeholder,
        n = babelHelpers.objectWithoutPropertiesLoose(t, _excluded2),
        _e$useLexicalComposer =
          require("LexicalComposerContext").useLexicalComposerContext(),
        o = _e$useLexicalComposer[0];
      return r.jsxs(r.Fragment, {
        children: [
          r.jsx(s, babelHelpers["extends"]({ editor: o }, n, { ref: a })),
          null != i && r.jsx(f, { editor: o, content: i }),
        ],
      });
    }
    function f(_ref2) {
      var e = _ref2.content,
        a = _ref2.editor;
      var i = (function (e) {
          var _t$useState3 = t.useState(function () {
              return d(e);
            }),
            a = _t$useState3[0],
            r = _t$useState3[1];
          return (
            o(
              function () {
                function t() {
                  var t = d(e);
                  r(t);
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
        })(a),
        _t$useState2 = t.useState(a.isEditable()),
        l = _t$useState2[0],
        s = _t$useState2[1];
      if (
        (t.useLayoutEffect(
          function () {
            return (
              s(a.isEditable()),
              a.registerEditableListener(function (e) {
                s(e);
              })
            );
          },
          [a],
        ),
        !i)
      )
        return null;
      var u = null;
      return (
        "function" == typeof e ? (u = e(l)) : null !== e && (u = e),
        null === u ? null : r.jsx("div", { "aria-hidden": !0, children: u })
      );
    }
    ((exports.ContentEditable = u), (exports.ContentEditableElement = s));
  },
  null,
);
