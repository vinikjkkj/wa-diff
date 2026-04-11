__d(
  "WAWebDeleteUnblockMsgBar.react",
  [
    "fbt",
    "WAWebBlockContactUtils",
    "WAWebBlockContants",
    "WAWebCmd",
    "WAWebDeleteIcon.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebSettingsBlockedIcon.react",
    "WAWebTabOrder",
    "WDSButton.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = function () {
          o("WAWebCmd").Cmd.deleteOrExitChatFromEntryPoint(t, 0);
        },
        a = u.jsx(o("WAWebFlex.react").FlexColumn, {
          marginEnd: 48,
          children: u.jsx(r("WDSButton.react"), {
            variant: "outline",
            type: "destructive",
            onPress: n,
            testid: void 0,
            Icon: o("WAWebDeleteIcon.react").DeleteIcon,
            tabOrder: o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
            label: s._(/*BTDS*/ "Delete chat"),
          }),
        }),
        i = u.jsx(o("WAWebFlex.react").FlexColumn, {
          children: u.jsx(r("WDSButton.react"), {
            variant: "outline",
            type: "default",
            onPress: function () {
              return o("WAWebBlockContactUtils").handleUnblock(
                t.contact,
                o("WAWebBlockContants").BlockEntryPoint
                  .OneToOneBlockedChatComposer,
              );
            },
            testid: void 0,
            Icon: o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
            tabOrder: o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
            label: r("WAWebFbtCommon")("Unblock"),
          }),
        });
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        justify: "around",
        children: [a, i],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
