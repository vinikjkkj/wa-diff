__d(
  "WAWebHatchAboutManager",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.$1 = new Map()), (this.$2 = []));
        }
        var t = e.prototype;
        return (
          (t.subscribe = function (t) {
            var e = this;
            return (
              this.$2.push(t),
              function () {
                e.$2 = e.$2.filter(function (e) {
                  return e !== t;
                });
              }
            );
          }),
          (t.getAboutState = function (t) {
            var e;
            return (e = this.$1.get(t)) != null ? e : null;
          }),
          (t.feedUnifiedResponse = function (t, n) {
            var e = this.$3(n);
            if (e != null) {
              var r = e.isInProgress,
                o = e.title;
              (this.$1.set(t, { isInProgress: r, text: o }), this.$4(t, o, r));
            }
          }),
          (t.clearAboutText = function (t) {
            (this.$1.delete(t), this.$4(t, "", !1));
          }),
          (t.$3 = function (t) {
            var e = t.sections;
            if (e == null) return null;
            for (var n of e) {
              var r = n.view_model;
              if (r != null) {
                var o = r.primitives;
                if (o != null) {
                  for (var a of o)
                    if (a.__typename === "GenAIBotProgressStatusPrimitive")
                      return {
                        title: a.title,
                        isInProgress: a.is_in_progress === !0,
                      };
                }
              }
            }
            return null;
          }),
          (t.$4 = function (t, n, r) {
            for (var e of [].concat(this.$2)) e(t, n, r);
          }),
          e
        );
      })(),
      l = new e(),
      s = l;
    i.default = s;
  },
  66,
);
