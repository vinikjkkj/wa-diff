__d(
  "WAWebAiThreadContextMenu",
  [
    "fbt",
    "WAWebAiThreadRenameModal.react",
    "WAWebBotGating",
    "WAWebDeleteRefreshedIcon.react",
    "WAWebDropdownItem.react",
    "WAWebDropdownItemSeparator.react",
    "WAWebIcEditIcon.react",
    "WAWebModalManager",
    "WAWebResolveThreadForEntryPoint",
    "WAWebShowDeleteAiThreadConfirmation",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.activeThreadId,
        n = e.thread,
        a = [],
        i = function () {
          var e = n.id.key.remote;
          o("WAWebModalManager").ModalManager.open(
            u.jsx(o("WAWebAiThreadRenameModal.react").AiThreadRenameModal, {
              aiThread: n,
              chatId: e,
            }),
          );
        },
        l = function () {
          var e = n.id.key.remote,
            r = (t == null ? void 0 : t.toString()) === n.id.toString();
          o(
            "WAWebShowDeleteAiThreadConfirmation",
          ).showDeleteAiThreadConfirmation(e, n.id, r);
        };
      return (
        (!o("WAWebResolveThreadForEntryPoint").isDefaultThread(n.id) ||
          !o("WAWebBotGating").isDefaultThreadRoutingEnabled()) &&
          (a.push(
            u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                action: i,
                icon: u.jsx(o("WAWebIcEditIcon.react").IcEditIcon, {}),
                children: s._(/*BTDS*/ "Rename chat"),
              },
              "rename",
            ),
          ),
          a.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {}, "divider"))),
        a.push(
          u.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              testid: void 0,
              action: l,
              icon: u.jsx(
                o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
                {},
              ),
              children: s._(/*BTDS*/ "Delete"),
            },
            "delete",
          ),
        ),
        a
      );
    }
    l.getAiThreadContextMenuItems = c;
  },
  226,
);
