__d(
  "TabIsolation",
  ["Event", "Focus", "Keys", "TabbableElements", "containsNode"],
  function (t, n, r, o, a, i, l) {
    var e = [],
      s = 0,
      u = (function () {
        function t(t) {
          var n = this;
          ((this.enable = function () {
            (n.disable(),
              e.unshift(n.$2),
              (n.$1 = r("Event").listen(
                window,
                "keydown",
                function (t) {
                  e[0] === n.$2 && n.$4(t);
                },
                r("Event").Priority.URGENT,
              )));
          }),
            (this.disable = function () {
              if (n.$1) {
                var t = e.indexOf(n.$2);
                (t > -1 && e.splice(t, 1), n.$1.remove(), (n.$1 = null));
              }
            }),
            (this.$3 = t),
            (this.$1 = null),
            (this.$2 = s++));
        }
        var n = t.prototype;
        return (
          (n.$4 = function (t) {
            if (r("Event").getKeyCode(t) === r("Keys").TAB) {
              var e = t.getTarget();
              if (e) {
                var n = o("TabbableElements").find(this.$3),
                  a = n[0],
                  i = n[n.length - 1],
                  l = t.getModifiers(),
                  s = l.shift;
                s && e === a
                  ? (t.preventDefault(), o("Focus").set(i))
                  : ((!s && e === i) || !r("containsNode")(this.$3, e)) &&
                    (t.preventDefault(), o("Focus").set(a));
              }
            }
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
