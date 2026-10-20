__d(
  "LexicalContentEditable.prod",
  ["Lexical", "LexicalComposerContext", "LexicalText", "react"],
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
    var a =
        _require_closure_react || (_require_closure_react = require("react")),
      i = _require_closure_react;
    var n = require("Lexical").CAN_USE_DOM ? a.useLayoutEffect : a.useEffect;
    function o(_ref, w) {
      var e = _ref.editor,
        t = _ref.ariaActiveDescendant,
        r = _ref.ariaAutoComplete,
        o = _ref.ariaControls,
        l = _ref.ariaDescribedBy,
        d = _ref.ariaErrorMessage,
        s = _ref.ariaExpanded,
        u = _ref.ariaInvalid,
        c = _ref.ariaLabel,
        b = _ref.ariaLabelledBy,
        f = _ref.ariaMultiline,
        v = _ref.ariaOwns,
        m = _ref.ariaRequired,
        x = _ref.autoCapitalize,
        p = _ref.className,
        E = _ref.id,
        C = _ref.role,
        _ref$spellCheck = _ref.spellCheck,
        y = _ref$spellCheck === void 0 ? !0 : _ref$spellCheck,
        g = _ref.style,
        L = _ref.tabIndex,
        h = _ref["data-testid"],
        q = babelHelpers.objectWithoutPropertiesLoose(_ref, _excluded);
      var _a$useState = a.useState(e.isEditable()),
        R = _a$useState[0],
        j = _a$useState[1],
        D = a.useCallback(
          function (a) {
            a && a.ownerDocument && a.ownerDocument.defaultView
              ? e.setRootElement(a)
              : e.setRootElement(null);
          },
          [e],
        ),
        S = a.useMemo(
          function () {
            return (function () {
              for (
                var _len = arguments.length, e = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                e[_key] = arguments[_key];
              }
              return function (a) {
                for (var _t of e)
                  "function" == typeof _t
                    ? _t(a)
                    : null != _t && (_t.current = a);
              };
            })(w, D);
          },
          [D, w],
        );
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
      );
      var M = babelHelpers["extends"](
          {
            "aria-activedescendant": R ? t : void 0,
            "aria-autocomplete": R ? r : "none",
            "aria-controls": R ? o : void 0,
            "aria-describedby": l,
          },
          null != d ? { "aria-errormessage": d } : {},
          { "aria-expanded": "combobox" === C ? (s != null ? s : !1) : void 0 },
          null != u ? { "aria-invalid": u } : {},
          {
            "aria-label": c,
            "aria-labelledby": b,
            "aria-multiline": f,
            "aria-owns": R ? v : void 0,
            "aria-readonly": !R || void 0,
            "aria-required": m,
          },
          q,
        ),
        k = [M["aria-label"], M["aria-labelledby"], M.title].some(function (e) {
          return "string" == typeof e && "" !== e.trim();
        }),
        A = void 0 === C ? (R || k ? "textbox" : void 0) : C;
      return (
        null == A &&
          ((M["aria-activedescendant"] = void 0),
          (M["aria-autocomplete"] = void 0),
          (M["aria-expanded"] = void 0),
          (M["aria-multiline"] = void 0),
          (M["aria-placeholder"] = void 0),
          (M["aria-readonly"] = void 0),
          (M["aria-required"] = void 0)),
        i.jsx(
          "div",
          babelHelpers["extends"](
            {
              autoCapitalize: x,
              className: p,
              contentEditable: R,
              "data-testid": h,
              id: E,
              ref: S,
              role: A,
              spellCheck: y,
              style: g,
              tabIndex: L != null ? L : R ? void 0 : -1,
            },
            M,
          ),
        )
      );
    }
    var l = a.forwardRef(o);
    function d(e) {
      return e.read(
        "latest",
        require("LexicalText").$canShowPlaceholderCurry(e.isComposing()),
      );
    }
    var s = a.forwardRef(u);
    function u(a, t) {
      var r = a.placeholder,
        n = babelHelpers.objectWithoutPropertiesLoose(a, _excluded2),
        _e$useLexicalComposer =
          require("LexicalComposerContext").useLexicalComposerContext(),
        o = _e$useLexicalComposer[0];
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx(l, babelHelpers["extends"]({ editor: o }, n, { ref: t })),
          null != r && i.jsx(c, { editor: o, content: r }),
        ],
      });
    }
    function c(_ref2) {
      var e = _ref2.content,
        r = _ref2.editor;
      var o = (function (e) {
          var _a$useState3 = a.useState(function () {
              return d(e);
            }),
            i = _a$useState3[0],
            r = _a$useState3[1];
          return (
            n(
              function () {
                function a() {
                  var a = d(e);
                  r(a);
                }
                return (
                  a(),
                  require("Lexical").mergeRegister(
                    e.registerUpdateListener(function () {
                      a();
                    }),
                    e.registerEditableListener(function () {
                      a();
                    }),
                  )
                );
              },
              [e],
            ),
            i
          );
        })(r),
        _a$useState2 = a.useState(r.isEditable()),
        l = _a$useState2[0],
        s = _a$useState2[1];
      if (
        (n(
          function () {
            return (
              s(r.isEditable()),
              r.registerEditableListener(function (e) {
                s(e);
              })
            );
          },
          [r],
        ),
        !o)
      )
        return null;
      var u = null;
      return (
        "function" == typeof e ? (u = e(l)) : null !== e && (u = e),
        null === u ? null : i.jsx("div", { "aria-hidden": !0, children: u })
      );
    }
    ((exports.ContentEditable = s), (exports.ContentEditableElement = l));
  },
  null,
);
