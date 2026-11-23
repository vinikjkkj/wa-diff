__d(
  "MAWDbEncryptObjContent",
  ["MAWKeychainNaClCrypto"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return o("MAWKeychainNaClCrypto").encryptTweetNaClArrayBuffer(e, t, n);
    }
    l.encryptContent = e;
  },
  98,
);
