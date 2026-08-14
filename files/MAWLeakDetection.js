__d(
  "MAWLeakDetection",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "[Vault] Vaulted string detected";
    function l(e) {
      var t = /\d{10}##\d{10}/gm;
      return t.test(e);
    }
    function s(t) {
      return l(t) ? e : t;
    }
    ((i.VAULTED_STRING_DETECTED = e),
      (i.detectVaultedString = l),
      (i.maybeReplaceVaultedString = s));
  },
  66,
);
