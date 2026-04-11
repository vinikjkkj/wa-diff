__d(
  "WAWebNavigableFlatList.react",
  [
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebKeyboardHotKeys.react",
    "react",
    "stylex",
    "useLazyRef",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useRef,
      d = {
        listContainer: {
          zIndex: "xupqr0c",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          overflowY: "x1odjw0f",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
      };
    function m(t) {
      var n = t.ariaLabel,
        a = t.flatListController,
        i = t.listData,
        l = t.onRenderItem,
        s = t.rotateList,
        m = s === void 0 ? !1 : s,
        p = t.selection,
        _ = t.xstyle,
        f = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        g = c(),
        h = function (t) {
          t.target === g.current &&
            (p.index < 0 ? p.setFirst(!0) : p.reset(!0));
        },
        y = function (t) {
          var e = t.relatedTarget;
          e instanceof HTMLElement &&
            t.currentTarget instanceof HTMLElement &&
            !t.currentTarget.contains(e) &&
            p.unset();
        },
        C = function (t) {
          (t == null || t.preventDefault(), t == null || t.stopPropagation());
          var e = p.prev(m);
          e > -1 && p.setPrev(!0, m);
        },
        b = function (t) {
          (t == null || t.preventDefault(), t == null || t.stopPropagation());
          var e = p.next(m);
          p.index !== e && p.setNext(!0, m);
        };
      return u.jsx(r("WAWebFlatListContainer.react"), {
        flatListControllers: [a != null ? a : f.current],
        className: (e || (e = r("stylex")))(d.listContainer, _),
        id: "pane-side",
        children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          role: "list",
          handlers: { up: C, down: b },
          onFocus: h,
          onBlur: y,
          ref: g,
          tabIndex: p.list.length !== 0 ? 0 : -1,
          children: u.jsx(o("WAWebFlatList.react").FlatList, {
            flatListController: a != null ? a : f.current,
            direction: "vertical",
            data: i,
            renderItem: l,
            "aria-label": n,
          }),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
