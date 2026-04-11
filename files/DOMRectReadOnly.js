__d(
  "DOMRectReadOnly",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.bottom = 0),
            (this.height = 0),
            (this.left = 0),
            (this.right = 0),
            (this.top = 0),
            (this.width = 0),
            (this.x = 0),
            (this.y = 0));
        }
        return (
          (e.fromRect = function (n) {
            var t = n || { height: 0, width: 0, x: 0, y: 0 },
              r = t.height,
              o = t.width,
              a = t.x,
              i = t.y,
              l = new e();
            return (
              (l.x = a),
              (l.y = i),
              (l.width = o),
              (l.height = r),
              (l.top = i),
              (l.bottom = i + r),
              (l.right = a + o),
              (l.left = a),
              l
            );
          }),
          e
        );
      })(),
      l = "DOMRectReadOnly" in window,
      s = l ? window.DOMRectReadOnly.fromRect : void 0,
      u = !!s && typeof s == "function",
      c = u ? window.DOMRectReadOnly : e;
    i.default = c;
  },
  66,
);
