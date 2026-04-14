__d(
  "WAWebPerformantMenu.react",
  [
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebMenuController.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useImperativeHandle,
      d = u.useMemo,
      m = u.useRef;
    function p(e) {
      var t = e.colorScheme,
        n = e.data,
        a = e.flatListProps,
        i = e.handleActiveItemChange,
        l = e.initialActiveOptionId,
        u = e.material,
        p = e.maxHeight,
        _ = e.menuControllerRef,
        f = e.minWidth,
        g = e.onHotKeysFocus,
        h = e.onSelect,
        y = e.renderItem,
        C = e.reorderAnimationsEnabled,
        b = e.setFocusRef,
        v = e.size,
        S = new Map(),
        R = m(null),
        L = o("WAWebMenuController.react").useRegister({
          onRegister: function (t) {
            t.forEach(function (e, t) {
              S.set(t, e);
            });
          },
          onChange: function (t) {
            t.forEach(function (e, t) {
              S.set(t, e);
            });
          },
        }),
        E = d(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        k = function (t) {
          i == null || i(t);
          var e = n.findIndex(function (e) {
            return e.itemKey === t;
          });
          if (e > -1) {
            var r;
            (r = R.current) == null || r.scrollIntoViewIfNeeded(e);
          }
        };
      return (
        c(b, function () {
          return {
            focus: function () {
              var e;
              (e = R.current) == null || e.setFocus();
            },
          };
        }),
        n.forEach(function (e) {
          if (e.static !== !0) {
            var t = S.get(e.itemKey);
            S.set(e.itemKey, t != null ? t : { current: null });
          }
        }),
        s.jsx(o("WAWebMenuController.react").Register, {
          registerRef: L,
          children: s.jsx(o("WAWebMenuController.react").WAWebMenuController, {
            data: S,
            colorScheme: t,
            menuControllerRef: _,
            material: u,
            onSelect: h,
            maxHeight: p,
            minWidth: f,
            initialActiveOptionId: l,
            onActiveItemChange: k,
            autoScroll: !1,
            size: v,
            onHotKeysFocus: g,
            children: s.jsx(r("WAWebFlatListContainer.react"), {
              flatListControllers: [E],
              className: "x1rife3k x1plvlek",
              children: s.jsx(
                o("WAWebFlatList.react").FlatList,
                babelHelpers.extends(
                  {
                    ref: R,
                    data: n,
                    renderItem: y,
                    direction: "vertical",
                    flatListController: E,
                    disablePointerEventsOnScroll: !1,
                    reorderAnimationsEnabled: C,
                    initialActiveOptionId: l,
                  },
                  a,
                ),
              ),
            }),
          }),
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.WDSPerformantMenu = p));
  },
  98,
);
