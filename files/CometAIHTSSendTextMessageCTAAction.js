__d(
  "CometAIHTSSendTextMessageCTAAction",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null;
    function l(t) {
      e = t;
    }
    function s() {
      e = null;
    }
    function u(t, n, r, o) {
      e != null && e(r);
    }
    ((i.setSendMessageCallback = l),
      (i.clearSendMessageCallback = s),
      (i.CometAIHTSSendTextMessageCTAAction = u));
  },
  66,
);
