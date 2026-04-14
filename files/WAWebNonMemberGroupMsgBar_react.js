__d(
  "WAWebNonMemberGroupMsgBar.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebCmd",
    "WAWebDeleteIcon.react",
    "WAWebFlex.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        grow: 1,
        children: [
          u.jsx(o("WAWebFlex.react").FlexRow, {
            grow: 1,
            paddingEnd: 4,
            children: u.jsx("div", {
              className: "x126k92a",
              children: s._(
                /*BTDS*/ "You can't send messages to this group because you're no longer a member.",
              ),
            }),
          }),
          u.jsx(o("WAWebFlex.react").FlexRow, {
            shrink: 0,
            children: u.jsx(
              o("WAWebButton.react").WAWebButtonSecondaryDestructive,
              {
                alignSelf: "end",
                onClick: function () {
                  return o("WAWebCmd").Cmd.deleteOrExitChat(t);
                },
                icon: o("WAWebDeleteIcon.react").DeleteIcon,
                testid: void 0,
                children: s._(/*BTDS*/ "Delete chat"),
              },
            ),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
