__d(
  "WAWebClearSelectedChatsDropdownItem.react",
  [
    "fbt",
    "WAWebChatModel",
    "WAWebCmd",
    "WAWebDropdownItemSeparator.react",
    "WDSIconIcDoNotDisturbOn.react",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onComplete,
        n = e.selectedModels,
        a = n.getSelected(),
        i = a.reduce(function (e, t) {
          return (t instanceof o("WAWebChatModel").Chat && e.push(t), e);
        }, []),
        l = s._(/*BTDS*/ "Clear selected chats"),
        c = function () {
          o("WAWebCmd").Cmd.clearSelectedChats(i, t);
        };
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(r("WAWebDropdownItemSeparator.react"), {}),
          u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcDoNotDisturbOn.react"),
            title: l,
            onPress: c,
            destructive: !0,
            testid: void 0,
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
