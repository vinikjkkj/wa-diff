__d(
  "WAWebSetRefCache",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t(e) {
          ((this.cache = new Map()), (this.howBig = 0), (this.fn = e));
        }
        var n = t.prototype;
        return (
          (n.getKeyString = function (t) {
            return typeof t == "string" ? t : t.join("_");
          }),
          (n.getRefSetter = function (n) {
            var t = this,
              r = this.getKeyString(n),
              a = this.cache.get(r);
            return (
              a ||
                ((a = function (o) {
                  (t.fn(n, o), o || t.cache.delete(r));
                }),
                this.cache.set(r, a),
                Math.floor(this.cache.size / 500) > this.howBig &&
                  (o("WALogger").ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[SetRefCache] Large cache detected with ",
                        " entries",
                      ])),
                    this.cache.size,
                  ),
                  (this.howBig = Math.floor(this.cache.size / 500)))),
              a
            );
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
