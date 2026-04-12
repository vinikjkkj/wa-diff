__d(
  "WAWebBlockedDrawer.react",
  [
    "fbt",
    "WAWebAddUserIcon.react",
    "WAWebBlockContactUtils",
    "WAWebBlockContants",
    "WAWebBlocklistCollection",
    "WAWebBlocklistMigration",
    "WAWebChatContact.react",
    "WAWebChatGetters",
    "WAWebContactCollection",
    "WAWebContactsModal.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerButton.react",
    "WAWebDrawerHeader.react",
    "WAWebEmptyState.react",
    "WAWebFindChatAction",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebKeyboardRotateFocus.react",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebWamChatPSALogger",
    "asyncToGeneratorRuntime",
    "fbs",
    "react",
    "useLazyRef",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.data,
        n = e.onClick,
        r = e.onDelete,
        a = t.blocklist,
        i = a.contact();
      return u.jsx(
        o("WAWebChatContact.react").Contact,
        {
          contact: i,
          onClick: n,
          onDelete: r,
          showInactiveFlag: o("WAWebBlocklistMigration").isBlocklistMigrated(),
          waitIdle: !0,
          tabIndex: -1,
          allowFocusEventPropagation: !0,
          role: "button",
        },
        i.id.toString(),
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.onClose,
        a = e.ref,
        i = r("useWAWebEventTargetValue")(
          o("WAWebBlocklistCollection").BlocklistCollection,
          ["add", "remove"],
          function () {
            return o("WAWebBlocklistCollection")
              .BlocklistCollection.dedupedList()
              .map(function (e) {
                return { itemKey: e.id.toString(), blocklist: e };
              });
          },
        ),
        l = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        d = function (t, n) {
          o("WAWebBlockContactUtils").handleUnblock(
            n,
            o("WAWebBlockContants").BlockEntryPoint.BlockList,
          );
        },
        m = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                e.id,
                "blockFromBlocklistDrawer",
              ),
              n = t.chat;
            if (n != null && o("WAWebChatGetters").getIsPSA(n)) {
              var r = n.msgs.last();
              o("WAWebWamChatPSALogger").logChatPSARemove(r, 1, 1);
            }
            o("WAWebBlockContactUtils").handleBlock(
              n,
              o("WAWebBlockContants").BlockEntryPoint.BlockList,
            );
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        p = function () {
          var e = function (t) {
              return o("WAWebBlocklistCollection").BlocklistCollection.get(t.id)
                ? r("fbs")._(/*BTDS*/ "Already blocked").toString()
                : !0;
            },
            t = o("WAWebContactCollection")
              .ContactCollection.getFilteredContacts({
                showMe: !1,
                showWithoutName: !1,
              })
              .map(function (e) {
                return o(
                  "WAWebBlockContactUtils",
                ).getContactToBlockOnlyUseIfNoAssociatedChat(
                  e,
                  o("WAWebBlockContants").BlockEntryPoint.BlockList,
                );
              });
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebContactsModal.react"), {
              title: s._(/*BTDS*/ "Add blocked contact"),
              contacts: t,
              filter: e,
              onCancel: function () {
                return o("WAWebModalManager").ModalManager.close();
              },
              onSelect: function (t) {
                return void m(t);
              },
            }),
          );
        },
        _ =
          o("WAWebBlocklistCollection").BlocklistCollection.length > 0
            ? u.jsx(r("WAWebFlatListContainer.react"), {
                flatListControllers: [l.current],
                className: "x6ikm8r x1odjw0f",
                children: u.jsx(o("WAWebFlatList.react").FlatList, {
                  flatListController: l.current,
                  direction: "vertical",
                  data: i,
                  handleKeyboardNavigation: !0,
                  role: "list",
                  "aria-label": s._(/*BTDS*/ "Blocked contacts"),
                  focusableItemSelector: "[data-testid='cell-frame-container']",
                  renderItem: function (t) {
                    return u.jsx(c, { data: t, onClick: d, onDelete: d });
                  },
                }),
              })
            : u.jsx(o("WAWebEmptyState.react").Blocked, {}),
        f =
          o("WAWebBlocklistCollection").BlocklistCollection.length > 0
            ? u.jsx("div", {
                "data-testid": void 0,
                className:
                  "x1okw0bk x109j2v6 x1xnnf8n x1w3bhph xizuyw3 x1f6kntn x1fc57z9 xhslqc4",
                children: s._(
                  /*BTDS*/ "Blocked contacts will no longer be able to call you or send you messages",
                ),
              })
            : null;
      return u.jsx(r("WAWebDrawer.react"), {
        ref: a,
        testid: void 0,
        tsNavigationData: { surface: "unknown", viewName: "blocked-contacts" },
        children: u.jsxs(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
          focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
          children: [
            u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: s._(/*BTDS*/ "Blocked contacts"),
              onBack: t,
              focusBackOrCancel: !0,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            }),
            u.jsx("div", {
              className: "xso031l x1q0q8m5 x120ee7l",
              children: u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                testid: void 0,
                onClick: p,
                icon: u.jsx(o("WAWebAddUserIcon.react").AddUserIcon, {
                  directional: !0,
                }),
                children: s._(/*BTDS*/ "Add blocked contact"),
              }),
            }),
            u.jsxs(r("WAWebDrawerBody.react"), { children: [_, f] }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
