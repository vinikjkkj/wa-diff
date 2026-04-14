__d(
  "WAWebSelectMenuItem.react",
  [
    "WAWebCellMenuItem.react",
    "WAWebCheckboxRoundCheckedIcon.react",
    "WAWebCheckboxRoundPassiveIcon.react",
    "WAWebCheckboxRoundRadioCheckedIcon.react",
    "WAWebCheckboxRoundUncheckedIcon.react",
    "WAWebCheckmarkIcon.react",
    "WAWebMenuController.react",
    "asyncToGeneratorRuntime",
    "err",
    "react",
    "useWAWebListener",
    "useWAWebSet",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["middlecontainerXStyle", "onMouseEnter", "onMouseLeave", "theme"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.Children,
      m = c.createContext,
      p = c.useContext,
      _ = c.useEffect,
      f = { tealColor: { color: "x1v5yvga", $$css: !0 } },
      g = m(null);
    function h(e) {
      var t = e.children,
        r = e.initialSelection,
        a = e.multiselect,
        i = o("WAWebMenuController.react").useMenu(),
        l = o("useWAWebSet").useSet(),
        s = l[0],
        c = l[1],
        m = c.clear,
        p = c.toggle,
        f = d.map(t, function (e) {
          return e.props.optionId;
        }),
        h = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              var r;
              (a === !0 ? (r = yield p(t)) : (r = yield m([t])),
                e.onSelect == null || e.onSelect(t, n, r));
            },
          );
          return function (n, r) {
            return t.apply(this, arguments);
          };
        })();
      (o("useWAWebListener").useListener(
        i.events,
        "select",
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              f.includes(e) && (yield h(e, t));
            },
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
      ),
        _(function () {
          if (r != null) {
            var e = Array.isArray(r) ? r : [r];
            m(e);
          }
        }, []));
      var y = { selection: s, isMultiselect: a === !0 };
      return u.jsx(g.Provider, { value: y, children: t });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e, t) {
      switch (t) {
        case "select":
          return e
            ? u.jsx(
                o("WAWebCheckboxRoundCheckedIcon.react")
                  .CheckboxRoundCheckedIcon,
                {},
              )
            : u.jsx(
                o("WAWebCheckboxRoundUncheckedIcon.react")
                  .CheckboxRoundUncheckedIcon,
                {},
              );
        case "radio":
          return e
            ? u.jsx(
                o("WAWebCheckboxRoundRadioCheckedIcon.react")
                  .CheckboxRoundRadioCheckedIcon,
                {},
              )
            : u.jsx(
                o("WAWebCheckboxRoundPassiveIcon.react")
                  .CheckboxRoundPassiveIcon,
                {},
              );
      }
    }
    function C(e, t) {
      switch (t) {
        case "select":
          return e
            ? u.jsx(o("WAWebCheckmarkIcon.react").CheckmarkIcon, {
                iconXstyle: f.tealColor,
              })
            : null;
        case "radio":
          return e
            ? u.jsx(
                o("WAWebCheckboxRoundRadioCheckedIcon.react")
                  .CheckboxRoundRadioCheckedIcon,
                { iconXstyle: f.tealColor },
              )
            : u.jsx(
                o("WAWebCheckboxRoundPassiveIcon.react")
                  .CheckboxRoundPassiveIcon,
                {},
              );
      }
    }
    function b(t) {
      var n = t.middlecontainerXStyle,
        a = t.onMouseEnter,
        i = t.onMouseLeave,
        l = t.theme,
        s = l === void 0 ? "select" : l,
        c = babelHelpers.objectWithoutPropertiesLoose(t, e),
        d = p(g);
      if (d == null)
        throw r("err")(
          "[menu] `SelectMenuItem` must be used inside of a `SelectMenuItemGroup`",
        );
      var m = d.selection.has(c.optionId),
        _,
        f;
      return (
        d.isMultiselect
          ? ((_ = "multi-select"), (f = y(m, s)))
          : ((_ = "single-select"), (f = C(m, s))),
        u.jsx(
          o("WAWebCellMenuItem.react").CellV2MenuItem,
          babelHelpers.extends({ detailRight: f }, c, {
            middleContainerXStyle: n,
            onMouseEnter: a,
            onMouseLeave: i,
            type: _,
          }),
        )
      );
    }
    ((b.displayName = b.name + " [from " + i.id + "]"),
      (l.SelectMenuItemGroup = h),
      (l.SelectMenuItem = b));
  },
  98,
);
