__d(
  "WAWebStoreOrphans",
  [
    "WAWebAddonProcessMsgsUtils",
    "WAWebDBStoreMessageOrphans",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e.length !== 0 &&
            (yield o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
              e,
              function (e) {
                return o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e);
              },
            ));
        })),
        s.apply(this, arguments)
      );
    }
    l.storeOrphans = e;
  },
  98,
);
