__d(
  "sdk.Model",
  ["ObservableMixin", "Type"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("Type").extend(
        {
          constructor: function (t) {
            this.parent();
            var e = {},
              n = this;
            Object.keys(t).forEach(function (r) {
              ((e[r] = t[r]),
                (n["set" + r] = function (t) {
                  return (
                    t === e[r] || ((e[r] = t), n.inform(r + ".change", t)),
                    n
                  );
                }),
                (n["get" + r] = function () {
                  return e[r];
                }));
            });
          },
        },
        r("ObservableMixin"),
      ),
      s = e;
    l.default = s;
  },
  98,
);
