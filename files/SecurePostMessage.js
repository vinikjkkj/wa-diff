__d(
  "SecurePostMessage",
  ["invariant"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "*",
      s = {
        sendMessageToSpecificOrigin: function (n, r, o, a) {
          (o !== e || l(0, 21157), n.postMessage(r, o, a));
        },
        sendMessageForCurrentOrigin: function (t, n) {
          t.postMessage(n);
        },
        sendMessageAllowAnyOrigin_UNSAFE: function (n, r, o) {
          n.postMessage(r, e, o);
        },
      };
    a.exports = s;
  },
  null,
);
