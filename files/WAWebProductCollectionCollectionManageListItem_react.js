__d(
  "WAWebProductCollectionCollectionManageListItem.react",
  [
    "fbt",
    "WAWebChatCell.react",
    "WAWebCollectionRefreshedIcon.react",
    "WAWebDeleteRefreshedIcon.react",
    "WAWebDraggableItemIcon.react",
    "WAWebDropdownItem.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebLinkedCatalogHelper",
    "WAWebPencilRefreshedIcon.react",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d() {
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        xstyle: o("WAWebUISpacing").uiMargin.end15,
        justify: "center",
        align: "center",
        children: u.jsx(
          o("WAWebDraggableItemIcon.react").DraggableItemIcon,
          {},
        ),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.canManage,
        n = e.collection,
        a = e.isReorder,
        i = e.onDelete,
        l = e.onEdit,
        m = e.onSeeCollection,
        p = e.theme,
        _ = c(null),
        f = _[0],
        g = _[1],
        h = function (t) {
          (t.preventDefault(), t.stopPropagation(), i && i(n));
        },
        y = function (t) {
          (t.preventDefault(), t.stopPropagation(), l && l(n));
        },
        C = function (t) {
          (t.preventDefault(), t.stopPropagation(), !a && m && m(n));
        },
        b = function () {
          g(null);
        },
        v = function (n) {
          if (f) {
            g(null);
            return;
          }
          var e = [];
          (t &&
            !o(
              "WAWebLinkedCatalogHelper",
            ).shouldHideComponentForSMBLinkedCatalog() &&
            (e.push(
              u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  testid: void 0,
                  action: y,
                  icon: u.jsx(
                    o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
                    {},
                  ),
                  children: s._(/*BTDS*/ "Edit"),
                },
                "EditLabel",
              ),
            ),
            e.push(
              u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  testid: void 0,
                  action: h,
                  icon: u.jsx(
                    o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
                    {},
                  ),
                  theme: o("WAWebDropdownItem.react").DropdownItemThemeType
                    .Negative,
                  children: s._(/*BTDS*/ "Delete"),
                },
                "DeleteLabel",
              ),
            )),
            g({ menu: e, event: n.event, anchor: n.anchor }));
        },
        S = o("WAWebCollectionRefreshedIcon.react").CollectionRefreshedIcon,
        R = u.jsx("div", {
          className:
            "xupqr0c x78zum5 x6s0dn4 xl56j7k x1dmp6jm x1xmf6yo xjx09e3 x1e56ztr x1lziwak x1xcyms6 x47corl xso2hbu xal68kn x51dqfy x1w4cqa3 x1byqp33",
          children: u.jsx("div", {
            className: "xhkc9bb",
            children: u.jsx(S, {}),
          }),
        }),
        L = u.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: n.name,
          ellipsify: !0,
          titlify: !0,
        }),
        E;
      return (
        f &&
          (E = u.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "CollectionContextMenu",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: b,
            children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: f }),
          })),
        u.jsxs(u.Fragment, {
          children: [
            u.jsx(
              r("WAWebChatCell.react"),
              {
                customImage: !0,
                image: R,
                primary: L,
                theme: p,
                detail: a ? u.jsx(d, {}) : void 0,
                active: !1,
                contextEnabled: function () {
                  return (
                    t &&
                    !a &&
                    !o(
                      "WAWebLinkedCatalogHelper",
                    ).shouldHideComponentForSMBLinkedCatalog()
                  );
                },
                onContext: v,
                onClick: C,
              },
              n.id.toString(),
            ),
            E,
          ],
        })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
