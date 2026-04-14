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
        g = t.rotate,
        h = g === void 0 ? !1 : g,
        y = babelHelpers.objectWithoutPropertiesLoose(t, e),
        C = p(null),
        b = function (t) {
          _ == null || _({ e: t, controller: c == null ? void 0 : c.current });
        };
      d(
        function () {
          (l != null && s.setVal(l), a === !0 && s.index < 0 && s.setFirst(!1));
        },
        [s, a, l],
      );
      var v = i || {},
        S = v.down,
        R = v.enter,
        L = v.space,
        E = v.up,
        k = function () {
          h && s.index === s.list.length - 1 ? s.setFirst(!1) : s.setNext(!1);
        },
        I = function () {
          if (s.index === 0) {
            if (h) {
              s.setLast(!1);
              return;
            } else if (a) return;
          }
          s.setPrev(!1);
        },
        T = function (t) {
          s.setIndex(t);
        },
        D = function () {
          var e = s.getVal();
          e != null &&
            f != null &&
            (e == null ? void 0 : e.disabled) !== !0 &&
            f(e);
        },
        x = babelHelpers.extends({}, i, {
          down: function (t) {
            (S == null ? void 0 : S(t)) !== !1 && k();
          },
          up: function (t) {
            (E == null ? void 0 : E(t)) !== !1 && (I(), t.preventDefault());
          },
          enter: function (t) {
            (R == null ? void 0 : R(t)) !== !1 && D();
          },
          space: function (t) {
            (L == null ? void 0 : L(t)) !== !1 && (D(), t.preventDefault());
          },
        });
      return (
        m(c, function () {
          return {
            goDown: k,
            goUp: I,
            selectItem: D,
            getIndex: function () {
              return s.index;
            },
            goIndex: T,
          };
        }),
        u.jsx(
          o("WAWebKeyboardHotKeys.react").HotKeys,
          babelHelpers.extends({ ref: C, handlers: x, onFocus: b }, y, {
            children: n,
          }),
        )
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
