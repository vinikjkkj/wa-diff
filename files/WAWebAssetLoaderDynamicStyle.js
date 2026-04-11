__d(
  "WAWebAssetLoaderDynamicStyle",
  ["WACamelCase", "lodash", "uniqueID"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        ((this.rules = {}), (this.styleSheet = this.createStyleSheet(e)));
      }
      var t = e.prototype;
      return (
        (t.createStyleSheet = function (t) {
          var e = t || r("uniqueID")("dynamic-style-"),
            n = document.createElement("style");
          return (
            (n.id = e),
            (n.type = "text/css"),
            document.head && document.head.appendChild(n),
            (n = n.sheet),
            n
          );
        }),
        (t.addRule = function (t, n) {
          var e = this.styleSheet.cssRules.length,
            r = Object.entries(n)
              .map(function (e) {
                var t = e[0],
                  n = e[1];
                return t + ": " + n + ";";
              })
              .join(" ");
          return (
            this.styleSheet.insertRule(t + " { " + r + " }", e),
            (this.rules[t] = this.styleSheet.cssRules[e]),
            this.rules[t]
          );
        }),
        (t.updateRule = function (t, n) {
          var e = this.rules[t];
          return (
            r("lodash").forOwn(n, function (t, n) {
              e.style[r("WACamelCase")(n)] = t;
            }),
            e
          );
        }),
        (t.setRule = function (t, n) {
          var e = this.rules[t];
          return e ? this.updateRule(t, n) : this.addRule(t, n);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
