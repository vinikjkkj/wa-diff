__d(
  "WASIContext",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
      var e, n, r, o, a, i;
      ((this.fs = (e = t == null ? void 0 : t.fs) != null ? e : {}),
        (this.args = (n = t == null ? void 0 : t.args) != null ? n : []),
        (this.env = (r = t == null ? void 0 : t.env) != null ? r : {}),
        (this.stdin =
          (o = t == null ? void 0 : t.stdin) != null
            ? o
            : function () {
                return null;
              }),
        (this.stdout =
          (a = t == null ? void 0 : t.stdout) != null ? a : function () {}),
        (this.stderr =
          (i = t == null ? void 0 : t.stderr) != null ? i : function () {}),
        (this.debug = t == null ? void 0 : t.debug),
        (this.isTTY = !!(t != null && t.isTTY)));
    };
    i.WASIContext = e;
  },
  66,
);
