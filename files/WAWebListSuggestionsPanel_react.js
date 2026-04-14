__d(
  "WAWebListSuggestionsPanel.react",
  [
    "Lexical",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebSingleSelection",
    "WAWebStopEvent",
    "WAWebSuggestionsPanelContainer.react",
    "WAWebUnstyledButton.react",
    "react",
    "useLazyRef",
    "useWAWebActiveSelection",
    "useWAWebLexicalEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef,
      m = { itemWrapper: { width: "xh8yej3", $$css: !0 } };
    function p(e) {
      return !!(e && (e.metaKey || e.shiftKey || e.altKey || e.ctrlKey));
    }
    function _(e) {
      var t = e.active,
        n = e.item,
        a = e.onSelect,
        i = e.renderItem,
        l = r("useWAWebActiveSelection")(t, n.itemKey),
        u = l[0],
        c = l[1];
      if (n.selectable === !1)
        return s.jsx("div", { className: "xh8yej3", children: i(n, !1) });
      var d = function () {
          a(n);
        },
        p = function () {
          t.setVal(t.list[n.index]);
        };
      return s.jsx(r("WAWebUnstyledButton.react"), {
        onClick: d,
        xstyle: m.itemWrapper,
        onMouseEnter: p,
        onMouseDown: o("WAWebStopEvent").preventDefault,
        children: i(n, c),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t,
        n,
        a = e.editor,
        i = e.items,
        l = e.kind,
        u = e.onDismiss,
        m = e.onHide,
        f = e.onSelect,
        g = e.renderItem,
        h = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        y = d(),
        C = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.itemKey;
          });
        });
      ((t = o("useWAWebLexicalEvent")).useLexicalCommandListener(
        a,
        (n = o("Lexical")).KEY_ARROW_UP_COMMAND,
        function (e) {
          if (p(e) || !(i != null && i.length)) return !1;
          for (var t = C.current.prev(); t >= 0; ) {
            var n = C.current.list[t];
            if (n.selectable !== !1) break;
            t -= 1;
          }
          var r = C.current.list[t];
          if (r != null) {
            var o;
            (C.current.setVal(r),
              (o = y.current) == null || o.scrollIntoViewIfNeeded(r.index));
          }
          return !0;
        },
      ),
        t.useLexicalCommandListener(a, n.KEY_ARROW_DOWN_COMMAND, function (e) {
          if (p(e) || !(i != null && i.length)) return !1;
          for (var t = C.current.next(); t < C.current.list.length; ) {
            var n = C.current.list[t];
            if (n.selectable !== !1) break;
            t += 1;
          }
          var r = C.current.list[t];
          if (r != null) {
            var o;
            (C.current.setVal(r),
              (o = y.current) == null || o.scrollIntoViewIfNeeded(r.index));
          }
          return !0;
        }));
      var b = function (t) {
        var e;
        if (p(t) || !(i != null && i.length)) return !1;
        var n =
          (e = C.current.getVal()) != null
            ? e
            : C.current.list.find(function (e) {
                return (e == null ? void 0 : e.selectable) !== !1;
              });
        return (n && f(n), !0);
      };
      (c(
        function () {
          if (i != null && i.length) {
            C.current.init(i);
            var e = i.find(function (e) {
              return e.selectable === !0;
            });
            e != null && C.current.setVal(e);
          }
        },
        [i, C],
      ),
        t.useLexicalCommandListener(a, n.KEY_ENTER_COMMAND, b),
        t.useLexicalCommandListener(a, n.KEY_TAB_COMMAND, b));
      var v = null;
      return (
        i != null &&
          i.length &&
          (v = s.jsx(r("WAWebFlatListContainer.react"), {
            className: "x1n2onr6 xtxj1az xw2csxc x1odjw0f",
            flatListControllers: [h.current],
            children: s.jsx(o("WAWebFlatList.react").FlatList, {
              ref: y,
              data: i,
              flatListController: h.current,
              direction: "vertical",
              renderItem: function (t) {
                return s.jsx(_, {
                  item: t,
                  renderItem: g,
                  onSelect: f,
                  active: C.current,
                });
              },
            }),
          })),
        s.jsx(
          o("WAWebSuggestionsPanelContainer.react").SuggestionsPanelContainer,
          { editor: a, onDismiss: u, onHide: m, kind: l, children: v },
        )
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
