__d(
  "WAWebChatCellContextMenuV2.react",
  [
    "Promise",
    "WAWebABProps",
    "WAWebBroadcastChatListMenuItems",
    "WAWebChatContextMenu",
    "WAWebChatGetters",
    "WAWebNewsletterContextMenuLoadable",
    "WDSMenu.react",
    "react",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useMemo,
      p = c.useRef,
      _ = c.useState;
    function f(t) {
      var a = t.assignChat,
        i = t.cellRef,
        l = t.chat,
        s = t.multiSelection,
        c = t.onChevronMenuReady,
        f = t.onContextMenuChange,
        g = t.onContextMenuReady,
        h = t.onStartMultiSelect,
        y = t.searchQuery,
        C = t.selectableState,
        b = p(null),
        v = p(null);
      d(
        function () {
          i != null &&
            ((b.current = i.getCellFrameDivRef()),
            (v.current = i.getContextMenuRef()));
        },
        [i],
      );
      var S = o("WAWebChatGetters").getIsNewsletter(l),
        R = o("WAWebChatGetters").getIsBroadcast(l),
        L = m(
          function () {
            return !o("WAWebABProps").getABPropConfigValue(
              "wa_web_reduce_cascading_updates_chat_open",
            ) || S
              ? null
              : R
                ? o(
                    "WAWebBroadcastChatListMenuItems",
                  ).getBroadcastChatListMenuItems({
                    chat: l,
                    cellRef: i,
                    multiSelection: s,
                    onStartMultiSelect: h,
                    searchQuery: y,
                    selectableState: C,
                  })
                : o("WAWebChatContextMenu").getChatContextMenuItems({
                    chat: l,
                    assignChat: a,
                    multiSelection: s,
                    onStartMultiSelect: h,
                    searchQuery: y,
                    selectableState: C,
                    cellRef: i,
                  });
          },
          [S, R, l, a, s, h, y, C, i],
        ),
        E = _(null),
        k = E[0],
        I = E[1];
      d(
        function () {
          if (
            !(
              o("WAWebABProps").getABPropConfigValue(
                "wa_web_reduce_cascading_updates_chat_open",
              ) && !S
            )
          ) {
            var t = !1,
              r = S
                ? o("WAWebNewsletterContextMenuLoadable")
                    .loadGetNewsletterContextMenuItems()
                    .then(function (e) {
                      return e(l);
                    })
                : (e || (e = n("Promise"))).resolve(
                    R
                      ? o(
                          "WAWebBroadcastChatListMenuItems",
                        ).getBroadcastChatListMenuItems({
                          chat: l,
                          cellRef: i,
                          multiSelection: s,
                          onStartMultiSelect: h,
                          searchQuery: y,
                          selectableState: C,
                        })
                      : o("WAWebChatContextMenu").getChatContextMenuItems({
                          chat: l,
                          assignChat: a,
                          multiSelection: s,
                          onStartMultiSelect: h,
                          searchQuery: y,
                          selectableState: C,
                          cellRef: i,
                        }),
                  );
            return (
              r
                .then(function (e) {
                  t || I(e);
                })
                .catch(function () {
                  t || I(null);
                }),
              function () {
                t = !0;
              }
            );
          }
        },
        [S, R, l, a, s, h, y, C, i],
      );
      var T =
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_reduce_cascading_updates_chat_open",
          ) && !S
            ? L
            : k,
        D = m(
          function () {
            return T == null
              ? null
              : u.jsx(r("WDSMenu.react"), { children: T });
          },
          [T],
        ),
        x = r("useWDSMenu")({
          targetRef: b,
          menu: D,
          contextMenuArea: !0,
          enableUIM: !1,
        }),
        $ = x.isMenuOpen,
        P = x.menuPortal,
        N = x.openMenu,
        M = r("useWDSMenu")({ targetRef: v, menu: D, enableUIM: !1 }),
        w = M.isMenuOpen,
        A = M.menuPortal,
        F = M.openMenu;
      return (
        d(
          function () {
            g(N);
          },
          [N, g],
        ),
        d(
          function () {
            c(F);
          },
          [F, c],
        ),
        d(
          function () {
            f == null || f($ || w);
          },
          [$, w, f],
        ),
        u.jsxs(u.Fragment, { children: [P, A] })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
