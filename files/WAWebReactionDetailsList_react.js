__d(
  "WAWebReactionDetailsList.react",
  [
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebMsgCollection",
    "WAWebReactionDetailsListItem.react",
    "clamp",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createRef,
      d = u.useEffect,
      m = u.useImperativeHandle,
      p = u.useRef,
      _ = u.useState;
    function f(e) {
      var t = e.flatListController,
        n = e.isAggregated,
        a = e.onCloseDetailsPane,
        i = e.ref,
        l = e.senders,
        u = p(new Map()),
        f = p(null),
        g = _(0),
        h = g[0],
        y = g[1],
        C = function (t) {
          var e = l[t];
          if (e) {
            var n,
              r = e.id.toString(),
              o = u.current.get(r);
            o == null || (n = o.current) == null || n.focus();
          }
        },
        b = function (t) {
          return r("clamp")(t, 0, l.length - 1);
        },
        v = function () {
          C(b(h));
        },
        S = function () {
          var e;
          return (
            ((e = f.current) == null
              ? void 0
              : e.contains(document.activeElement)) || !1
          );
        };
      (m(i, function () {
        return { focus: v, hasFocus: S };
      }),
        d(
          function () {
            y(0);
          },
          [l],
        ));
      var R = function (t) {
          t.preventDefault();
          var e = b(h - 1);
          (y(e), C(e));
        },
        L = function (t) {
          var e = b(h + 1);
          (t.preventDefault(), y(e), C(e));
        },
        E = { up: R, down: L };
      return s.jsx(r("WAWebFlatListContainer.react"), {
        ref: f,
        className:
          "xh8yej3 x11oegk2 x1lumt5c xw2csxc x1odjw0f x12xbjc7 x16ovd2e",
        flatListControllers: [t],
        children: s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          role: "list",
          tabIndex: null,
          handlers: E,
          children: s.jsx(o("WAWebFlatList.react").FlatList, {
            flatListController: t,
            direction: "vertical",
            defaultItemHeight: 52,
            data: l.map(function (e, t) {
              return { itemKey: e.id.toString(), sender: e, index: t };
            }),
            renderItem: function (t) {
              var e = c();
              u.current.set(t.itemKey, e);
              var i = o("WAWebMsgCollection").MsgCollection.get(
                t.sender.parentMsgKey,
              );
              return i
                ? s.jsx(
                    r("WAWebReactionDetailsListItem.react"),
                    {
                      ref: e,
                      parentMsg: i,
                      reaction: t.sender,
                      isAggregated: n,
                      onCloseDetailsPane: a,
                      onItemFocus: function () {
                        return y(t.index);
                      },
                    },
                    t.itemKey,
                  )
                : null;
            },
            forceConsistentRenderCount: !1,
          }),
        }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
