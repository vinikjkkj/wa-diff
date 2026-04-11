__d(
  "WAWebStringPolyfills",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      String.prototype.replaceAll ||
        (String.prototype.replaceAll = function (e, t) {
          function n(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          return Object.prototype.toString.call(e).toLowerCase() ===
            "[object regexp]"
            ? this.replace(e, t)
            : this.replace(new RegExp(n(e), "g"), t);
        });
    }
    i.polyfillStringReplaceAll = e;
  },
  66,
);
