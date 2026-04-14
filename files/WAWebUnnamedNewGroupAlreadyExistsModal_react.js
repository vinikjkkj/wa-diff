__d(
  "WAWebUnnamedNewGroupAlreadyExistsModal.react",
  [
    "fbt",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebConfirmPopup.react",
    "WAWebFindChatAction",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.existingUnnamedGroup,
        n = e.onCancel,
        r = e.onCreateNewGroupClick,
        a = e.onEnd,
        i = e.ref,
        l = { text: s._(/*BTDS*/ "Create new group"), onClick: r };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "unnamed-group-exists",
        },
        ref: i,
        title: s._(/*BTDS*/ "Group already exists"),
        onOK: function () {
          (a(),
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(t, "existingUnnamedGroup")
              .then(function (e) {
                var t = e.chat;
                o("WAWebCmd")
                  .Cmd.openChatBottom({ chat: t })
                  .then(function (e) {
                    e &&
                      (o("WAWebComposeBoxActions").ComposeBoxActions.focus(t),
                      o("WAWebCmd").Cmd.endFlow());
                  });
              }));
        },
        onCancel: n,
        okText: s._(/*BTDS*/ "View group"),
        cancelText: s._(/*BTDS*/ "Cancel"),
        extraButtonProps: l,
        children: s._(
          /*BTDS*/ "You already have this group without a name. To create a new group, give it a name.",
        ),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
