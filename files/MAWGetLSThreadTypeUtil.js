__d(
  "MAWGetLSThreadTypeUtil",
  ["LSIntEnum", "WAJids"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = o("WAJids").switchOnMsgrChatJidType(t, {
        group: function () {
          return (e || (e = o("LSIntEnum"))).ofNumber(16);
        },
        user: function () {
          return (e || (e = o("LSIntEnum"))).ofNumber(15);
        },
      });
      return n;
    }
    l.getLSThreadTypeFromJid = s;
  },
  98,
);
