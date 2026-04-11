__d(
  "WAWebViewRepliesChatUtils",
  ["WAWebWid"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return !!(
        (r("WAWebWid").isUser(e) && !r("WAWebWid").isBot(e)) ||
        r("WAWebWid").isGroup(e)
      );
    }
    l.isChatSupportedForViewRepliesWid = e;
  },
  98,
);
