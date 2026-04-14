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
      return s(
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield e;
            (o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
              t != null &&
                o("WAWebFindChatAction")
                  .findOrCreateLatestChat(t, "handleNewGroupCreated")
                  .then(function (e) {
                    var t = e.chat;
                    o("WAWebCmd")
                      .Cmd.openChatBottom({ chat: t })
                      .then(function (e) {
                        e &&
                          o("WAWebComposeBoxActions").ComposeBoxActions.focus(
                            t,
                          );
                      });
                  }));
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        [],
      );
    }
    l.default = u;
  },
  98,
);
