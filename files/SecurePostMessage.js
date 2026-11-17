__d(
  "SecurePostMessage",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "*",
      u = {
        sendMessageToSpecificOrigin: function (n, r, o, a) {
          (o !== e || s(0, 21157), n.postMessage(r, o, a));
        },
        sendMessageForCurrentOrigin: function (t, n) {
          t.postMessage(n);
        },
        sendMessageAllowAnyOrigin_UNSAFE: function (n, r, o) {
          n.postMessage(r, e, o);
        },
      };
    i.exports = u;
  },
  34,
);
