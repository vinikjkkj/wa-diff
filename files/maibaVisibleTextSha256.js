__d(
  "maibaVisibleTextSha256",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t,
        n = (t = self.crypto) == null ? void 0 : t.subtle;
      return n == null || typeof self.TextEncoder != "function"
        ? null
        : n
            .digest("SHA-256", new self.TextEncoder().encode(e))
            .then(function (e) {
              return Array.from(new Uint8Array(e), function (e) {
                return e.toString(16).padStart(2, "0");
              }).join("");
            });
    }
    i.default = e;
  },
  66,
);
