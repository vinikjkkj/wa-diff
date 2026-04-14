__d(
  "WAWebBroadcastMenuDropdown.react",
  ["WAWebConversationMenus", "WDSMenu.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e = ["_ref"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t._ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.chat,
        l = o("WAWebConversationMenus").broadcastMenu(i);
      return u.jsx(r("WDSMenu.react"), { children: l });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
