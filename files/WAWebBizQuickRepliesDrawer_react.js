__d(
  "WAWebBizQuickRepliesDrawer.react",
  [
    "fbt",
    "WAWebBizQuickRepliesModal.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEmptyState.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlatList.react",
    "WAWebFlatListController",
    "WAWebModalManager",
    "WAWebPlusIcon.react",
    "WAWebQuickRepliesDrawerItem.react",
    "WAWebQuickReplyCollection",
    "WAWebQuickReplyEnum",
    "WAWebQuickReplyGetters",
    "WAWebQuickReplyLogging",
    "WAWebTabOrder",
    "WAWebText.react",
    "WAWebUISpacing",
    "WDSMenuBarItem.react",
    "react",
    "useLazyRef",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        instruction: {
          borderTopColor: "xx42vgk",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          $$css: !0,
        },
      };
    function p(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.isInitialStep,
        l = i === void 0 ? !1 : i,
        u = a.onBack,
        p = function () {
          return o("WAWebQuickReplyCollection")
            .QuickReplyCollection.filter(function (e) {
              return (
                o("WAWebQuickReplyGetters").getType(e) ===
                o("WAWebQuickReplyEnum").QuickReplyTypes.TEXT
              );
            })
            .map(function (e) {
              return { itemKey: e.id, quickReply: e };
            });
        },
        f = d(p),
        g = f[0],
        h = f[1];
      o("useWAWebListener").useListener(
        o("WAWebQuickReplyCollection").QuickReplyCollection,
        "add change remove",
        function () {
          h(p());
        },
      );
      var y = s._(/*BTDS*/ "Quick replies"),
        C = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        b =
          g.length > 0
            ? c.jsx(o("WAWebFlatList.react").FlatList, {
                data: g,
                direction: "vertical",
                flatListController: C.current,
                renderItem: _,
              })
            : c.jsx(o("WAWebEmptyState.react").NoQuickReplies, {}),
        v = function () {
          (o("WAWebQuickReplyLogging").logQuickReplyAddClickEvent(),
            o("WAWebModalManager").ModalManager.open(
              c.jsx(r("WAWebBizQuickRepliesModal.react"), {
                quickReply: null,
                tsNavigationData: { surface: "smb-quick-reply-add" },
              }),
            ));
        },
        S = c.jsx(
          r("WDSMenuBarItem.react"),
          {
            testid: void 0,
            tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
            icon: o("WAWebPlusIcon.react").PlusIcon,
            onClick: v,
            title: s._(/*BTDS*/ "Add Quick Reply"),
          },
          "menu-bar-add-quick-reply",
        ),
        R = {};
      return (
        l ? (R.onCancel = u) : (R.onBack = u),
        c.jsxs(r("WAWebDrawer.react"), {
          ref: n,
          tsNavigationData: { surface: "smb-quick-reply-list" },
          children: [
            c.jsx(
              o("WAWebDrawerHeader.react").DrawerHeader,
              babelHelpers.extends({ title: y }, R, {
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                focusBackOrCancel: !0,
                menu: [S],
              }),
            ),
            c.jsx(r("WAWebDrawerBody.react"), {
              flatListControllers: [C.current],
              children: c.jsxs(r("WAWebDrawerSection.react"), {
                animation: !1,
                children: [
                  b,
                  c.jsx(o("WAWebText.react").WAWebTextMuted, {
                    xstyle: [
                      o("WAWebUISpacing").uiPadding.vert20,
                      o("WAWebUISpacing").uiPadding.horiz15,
                      m.instruction,
                    ],
                    children: s._(
                      /*BTDS*/ "Create keyboard shortcuts for frequently sent messages. To use in a chat, type \/ and select the shortcut from the list. {=m2}",
                      [
                        s._implicitParam(
                          "=m2",
                          c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                            href: o("WAWebFaqUrl").getBizQuickRepliesFaqUrl(),
                            children: s._(/*BTDS*/ "Learn more"),
                          }),
                        ),
                      ],
                    ),
                  }),
                ],
              }),
            }),
          ],
        })
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      return c.jsx(r("WAWebQuickRepliesDrawerItem.react"), {
        quickReply: e.quickReply,
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
