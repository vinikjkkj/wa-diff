__d(
  "useWAWebHandleNewGroupCreated",
  [
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebDrawerManager",
    "WAWebFindChatAction",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u() {
      return c;
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield e;
          (o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
            t != null &&
              o("WAWebFindChatAction")
                .findOrCreateLatestChat(t, "handleNewGroupCreated")
                .then(m));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      var t = e.chat;
      o("WAWebCmd")
        .Cmd.openChatBottom({ chat: t })
        .then(function (e) {
          e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
        });
    }
    l.default = u;
  },
  98,
);
