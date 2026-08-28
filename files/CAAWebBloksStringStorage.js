__d(
  "CAAWebBloksStringStorage",
  ["WebStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function e(e) {
          this.$1 = e;
        }
        var t = e.prototype;
        return (
          (t.getString = function (t) {
            var e = this.$1.getItem(t);
            return e == null ? "" : e;
          }),
          (t.setString = function (t, n) {
            this.$1.setItem(t, n);
          }),
          e
        );
      })(),
      u = (function () {
        var t = (e || (e = r("WebStorage"))).getLocalStorage();
        return t
          ? new s(t)
          : {
              setString: function () {},
              getString: function () {
                return "";
              },
            };
      })();
    l.CAAWebBloksStringStorage = u;
  },
  98,
);
