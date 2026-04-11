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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(20),
        n = e.active,
        a = e.item,
        i = e.onSelect,
        l = e.renderItem,
        u = r("useWAWebActiveSelection")(n, a.itemKey),
        c = u[1];
      if (a.selectable === !1) {
        var d;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = { className: "xh8yej3" }), (t[0] = d))
          : (d = t[0]);
        var p;
        t[1] !== a || t[2] !== l
          ? ((p = l(a, !1)), (t[1] = a), (t[2] = l), (t[3] = p))
          : (p = t[3]);
        var _;
        return (
          t[4] !== p
            ? ((_ = s.jsx("div", babelHelpers.extends({}, d, { children: p }))),
              (t[4] = p),
              (t[5] = _))
            : (_ = t[5]),
          _
        );
      }
      var f;
      t[6] !== a || t[7] !== i
        ? ((f = function () {
            i(a);
          }),
          (t[6] = a),
          (t[7] = i),
          (t[8] = f))
        : (f = t[8]);
      var g = f,
        h;
      t[9] !== n || t[10] !== a.index
        ? ((h = function () {
            n.setVal(n.list[a.index]);
          }),
          (t[9] = n),
          (t[10] = a.index),
          (t[11] = h))
        : (h = t[11]);
      var y = h,
        C;
      t[12] !== c || t[13] !== a || t[14] !== l
        ? ((C = l(a, c)), (t[12] = c), (t[13] = a), (t[14] = l), (t[15] = C))
        : (C = t[15]);
      var b;
      return (
        t[16] !== g || t[17] !== y || t[18] !== C
          ? ((b = s.jsx(r("WAWebUnstyledButton.react"), {
              onClick: g,
              xstyle: m.itemWrapper,
              onMouseEnter: y,
              onMouseDown: o("WAWebStopEvent").preventDefault,
              children: C,
            })),
            (t[16] = g),
            (t[17] = y),
            (t[18] = C),
            (t[19] = b))
          : (b = t[19]),
        b
      );
    }
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
