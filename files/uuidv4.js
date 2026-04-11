__d(
  "uuidv4",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      var e,
        t =
          (e = self) == null || (e = e.crypto) == null ? void 0 : e.randomUUID;
      return typeof t == "function"
        ? self.crypto.randomUUID()
        : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            var t = (Math.random() * 16) | 0,
              n = e === "x" ? t : (t & 3) | 8;
            return n.toString(16);
          });
    }
    i.default = e;
  },
  66,
);
