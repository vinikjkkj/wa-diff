__d(
  "WAWebChatLockArchivePopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebConfirmPopup.react").waitForConfirmPopup({
            okText: r("WAWebFbtCommon")("Continue"),
            children: s._(
              /*BTDS*/ "This chat will be unarchived and moved to Locked Chats",
            ),
          });
        })),
        u.apply(this, arguments)
      );
    }
    l.waitForChatLockArchivePopup = e;
  },
  226,
);
