__d(
  "WAWebCompactCellPresentation",
  ["WAWebSelectableAvatar.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t, n, r, o) {
      if (!e)
        return {
          theme: r,
          cellRole: o,
          rowAttributes: null,
          rowTestId: void 0,
        };
      var a = f(t, n);
      return {
        theme: a,
        cellRole: void 0,
        rowAttributes: {
          role: "checkbox",
          "aria-checked": t === !0,
          "aria-disabled": !n,
        },
        rowTestId: "compact-selection-row",
      };
    }
    function c(e, t, n) {
      return !e || !t
        ? null
        : function (e) {
            e.target === e.currentTarget && n(e);
          };
    }
    function d(e, t, n) {
      return e && !t ? null : n;
    }
    function m(e, t, n) {
      return t
        ? s.jsx(r("WAWebSelectableAvatar.react"), {
            checked: n === !0,
            children: e,
          })
        : e;
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e, t) {
      return e ? 40 : t;
    }
    function _(e) {
      return e ? "small" : "medium";
    }
    function f(e, t) {
      return t
        ? e === !0
          ? "compact-selected"
          : "compact-selectable"
        : "compact-disabled";
    }
    ((l.getCompactCellPresentation = u),
      (l.getCompactCellRowClickHandler = c),
      (l.getCompactCellAction = d),
      (l.renderCompactCellAvatar = m),
      (l.getCompactContactPhotoSize = p),
      (l.getCompactProfilePhotoSize = _));
  },
  98,
);
