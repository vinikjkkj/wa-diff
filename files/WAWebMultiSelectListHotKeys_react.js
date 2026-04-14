__d(
  "WAWebMultiSelectListHotKeys.react",
  ["WAWebKeyboardHotKeys.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.ref,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = r.active,
        i = r.onEnter,
        l = r.onIndexChange,
        s = r.onLeave,
        c = r.role,
        d = r.xstyle,
        m = function (t) {
          (t.preventDefault(),
            t.stopPropagation(),
            a.setNext(!0),
            l == null || l(a.index));
        },
        p = function (t) {
          (t.stopPropagation(), t.preventDefault());
          var e = a.prev();
          e > -1
            ? (a.setPrev(!0), l == null || l(a.index))
            : s && (s(t), a.unset());
        },
        _ = function (t) {
          i == null || i(t);
        },
        f = function (t) {
          var e = t.relatedTarget;
          return (
            e instanceof HTMLElement &&
            t.currentTarget instanceof HTMLElement &&
            !t.currentTarget.contains(e)
          );
        },
        g = function (t) {
          f(t) && a.setFirst(!0);
        },
        h = function (t) {
          f(t) && a.unset();
        },
        y = { down: m, up: p, enter: _, space: _ };
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: y,
        ref: n,
        onFocus: g,
        onBlur: h,
        tabIndex: 0,
        xstyle: d,
        role: c,
        children: r.children,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
