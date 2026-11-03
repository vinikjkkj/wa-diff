__d(
  "WAWebNavigatableList",
  ["WAWebKeyboardHotKeys.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e = [
        "children",
        "forceSelection",
        "handlers",
        "initialActiveItem",
        "items",
        "listControllerRef",
        "onHotKeysFocus",
        "onSelect",
        "rotate",
      ],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useImperativeHandle,
      p = c.useRef;
    function _(t) {
      var n = t.children,
        r = t.forceSelection,
        a = r === void 0 ? !1 : r,
        i = t.handlers,
        l = t.initialActiveItem,
        s = t.items,
        c = t.listControllerRef,
        _ = t.onHotKeysFocus,
        f = t.onSelect,
        h = t.rotate,
        y = h === void 0 ? !1 : h,
        C = babelHelpers.objectWithoutPropertiesLoose(t, e),
        b = p(null),
        v = function (t) {
          _ == null || _({ e: t, controller: c == null ? void 0 : c.current });
        };
      d(
        function () {
          (l != null && s.setVal(l), a === !0 && s.index < 0 && s.setFirst(!1));
        },
        [s, a, l],
      );
      var S = i || {},
        R = S.down,
        L = S.enter,
        E = S.space,
        k = S.up,
        I = function () {
          y && s.index === s.list.length - 1 ? s.setFirst(!1) : s.setNext(!1);
        },
        T = function () {
          if (s.index === 0) {
            if (y) {
              s.setLast(!1);
              return;
            } else if (a) return;
          }
          s.setPrev(!1);
        },
        D = function (t) {
          s.setIndex(t);
        },
        x = function () {
          var e = s.getVal();
          e != null &&
            f != null &&
            (e == null ? void 0 : e.disabled) !== !0 &&
            f(e);
        },
        $ = babelHelpers.extends({}, i, {
          down: function (t) {
            (R == null ? void 0 : R(t)) !== !1 && I();
          },
          up: function (t) {
            (k == null ? void 0 : k(t)) !== !1 && (T(), t.preventDefault());
          },
          enter: function (t) {
            (L == null ? void 0 : L(t)) !== !1 && x();
          },
          space: function (t) {
            g(t.target) ||
              ((E == null ? void 0 : E(t)) !== !1 && (x(), t.preventDefault()));
          },
        });
      return (
        m(c, function () {
          return {
            goDown: I,
            goUp: T,
            selectItem: x,
            getIndex: function () {
              return s.index;
            },
            goIndex: D,
          };
        }),
        u.jsx(
          o("WAWebKeyboardHotKeys.react").HotKeys,
          babelHelpers.extends({ ref: b, handlers: $, onFocus: v }, C, {
            children: n,
          }),
        )
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    var f = new Set([
      "button",
      "checkbox",
      "color",
      "file",
      "hidden",
      "image",
      "radio",
      "range",
      "reset",
      "submit",
    ]);
    function g(e) {
      return e instanceof HTMLInputElement
        ? !f.has(e.type)
        : e instanceof HTMLTextAreaElement
          ? !0
          : e instanceof HTMLElement && e.isContentEditable;
    }
    l.default = _;
  },
  98,
);
