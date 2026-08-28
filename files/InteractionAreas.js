__d(
  "InteractionAreas",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.$1 = []),
            this.addArea("uicontextuallayer", "contextual_layer"),
            this.addArea("uilayer", "layer"),
            this.addAreaByID(
              "bizBlackBar",
              "unified_nav_blackbar",
              "ads_unified_nav",
            ));
        }
        var t = e.prototype;
        return (
          (t.addArea = function (t, n, r) {
            var e = new RegExp(" " + t + " ", "i");
            return (this.$1.push({ name: n, pattern: e, surfaceName: r }), t);
          }),
          (t.addAreaByID = function (t, n, r) {
            var e = new RegExp("#" + t + " ", "i");
            return (this.$1.push({ name: n, pattern: e, surfaceName: r }), e);
          }),
          (t.$2 = function (t, n) {
            return t.pattern.test(n + " ");
          }),
          (t.match = function (t) {
            var e = null,
              n = null;
            e: for (var r = t.length - 1; r >= 0; r--)
              for (var o = t[r], a = this.$1.length - 1; a >= 0; a--) {
                var i = this.$1[a];
                if (
                  this.$2(i, o) &&
                  ((e = e != null ? e : i.name),
                  (n = n != null ? n : i.surfaceName),
                  e != null && n != null)
                )
                  break e;
              }
            return { name: e, surfaceName: n };
          }),
          (t.inSurface = function (t, n) {
            var e = this,
              r = this.$1.filter(function (e) {
                return e.surfaceName === n;
              });
            if (r.length === 0) return !1;
            for (
              var o = function () {
                  var n = t[i];
                  if (
                    r.some(function (t) {
                      return e.$2(t, n);
                    })
                  )
                    return { v: !0 };
                },
                a,
                i = 0;
              i < t.length;
              i++
            )
              if (((a = o()), a)) return a.v;
            return !1;
          }),
          e
        );
      })(),
      l = new e();
    i.default = l;
  },
  66,
);
