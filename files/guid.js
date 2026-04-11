__d(
  "guid",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      if (
        typeof crypto == "object" &&
        typeof crypto.getRandomValues == "function" &&
        typeof String.prototype.padStart == "function"
      ) {
        var e = crypto.getRandomValues(new Uint32Array(2));
        return (
          "f" +
          e[0].toString(16).padStart(8, "0") +
          e[1].toString(16).padStart(8, "0")
        );
      }
      return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "");
    }
    i.default = e;
  },
  66,
);
