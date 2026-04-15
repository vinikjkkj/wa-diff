__d(
  "WAWebPerformantMenu.react",
  [
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebMenuController.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useImperativeHandle,
      d = u.useMemo,
      m = u.useRef;
    function p(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.colorScheme,
        a = e.data,
        i = e.flatListProps,
        l = e.handleActiveItemChange,
        u = e.initialActiveOptionId,
        d = e.material,
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
        E;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = new (r("WAWebFlatListController"))()), (t[0] = E))
        : (E = t[0]);
      var k = E,
        I;
      t[1] !== a || t[2] !== l
        ? ((I = function (t) {
            l == null || l(t);
            var e = a.findIndex(function (e) {
              return e.itemKey === t;
            });
            if (e > -1) {
              var n;
              (n = R.current) == null || n.scrollIntoViewIfNeeded(e);
            }
          }),
          (t[1] = a),
          (t[2] = l),
          (t[3] = I))
        : (I = t[3]);
      var T = I,
        D;
      (t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = function () {
            return {
              focus: function () {
                var e;
                (e = R.current) == null || e.setFocus();
              },
            };
          }),
          (t[4] = D))
        : (D = t[4]),
        c(b, D),
        a.forEach(function (e) {
          if (e.static !== !0) {
            var t = S.get(e.itemKey);
            S.set(e.itemKey, t != null ? t : { current: null });
          }
        }));
      var x;
      t[5] !== k ? ((x = [k]), (t[5] = k), (t[6] = x)) : (x = t[6]);
      var $;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = "x1rife3k x1plvlek"), (t[7] = $))
        : ($ = t[7]);
      var P;
      t[8] !== a ||
      t[9] !== k ||
      t[10] !== i ||
      t[11] !== u ||
      t[12] !== y ||
      t[13] !== C
        ? ((P = s.jsx(
            o("WAWebFlatList.react").FlatList,
            babelHelpers.extends(
              {
                ref: R,
                data: a,
                renderItem: y,
                direction: "vertical",
                flatListController: k,
                disablePointerEventsOnScroll: !1,
                reorderAnimationsEnabled: C,
                initialActiveOptionId: u,
              },
              i,
            ),
          )),
          (t[8] = a),
          (t[9] = k),
          (t[10] = i),
          (t[11] = u),
          (t[12] = y),
          (t[13] = C),
          (t[14] = P))
        : (P = t[14]);
      var N;
      return (
        t[15] !== x || t[16] !== P
          ? ((N = s.jsx(r("WAWebFlatListContainer.react"), {
              flatListControllers: x,
              className: $,
              children: P,
            })),
            (t[15] = x),
            (t[16] = P),
            (t[17] = N))
          : (N = t[17]),
        s.jsx(o("WAWebMenuController.react").Register, {
          registerRef: L,
          children: s.jsx(o("WAWebMenuController.react").WAWebMenuController, {
            data: S,
            colorScheme: n,
            menuControllerRef: _,
            material: d,
            onSelect: h,
            maxHeight: p,
            minWidth: f,
            initialActiveOptionId: u,
            onActiveItemChange: T,
            autoScroll: !1,
            size: v,
            onHotKeysFocus: g,
            children: N,
          }),
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.WDSPerformantMenu = p));
  },
  98,
);
