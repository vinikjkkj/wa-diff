__d(
  "MessengerThreadCannotReplyReason.bs",
  ["MessengerThreadCannotReplyReason"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e != null)
        return r("MessengerThreadCannotReplyReason")[e.toUpperCase()];
    }
    function s(e) {
      if (e == null) return null;
      switch (e.TAG) {
        case 1:
          return "recipients_not_loadable";
        case 0:
        case 2:
          return "blocked";
        case 3:
          return "messenger_blockee";
      }
    }
    ((l.fromName = e), (l.fromMessageThreadCannotReplyReason = s));
  },
  98,
);
