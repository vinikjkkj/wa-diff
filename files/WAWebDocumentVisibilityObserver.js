__d(
  "WAWebDocumentVisibilityObserver",
  [],
  function (t, n, r, o, a, i) {
    var e = 6e4,
      l = (function () {
        function t() {
          ((this.$1 = !document.hidden),
            (this.$2 = !document.hidden),
            (this.$3 = document.hidden ? null : 0),
            (this.$4 = []));
        }
        var n = t.prototype;
        return (
          (n.isDocumentVisible = function () {
            return this.$1;
          }),
          (n.isWindowInFocus = function () {
            return this.$2;
          }),
          (n.getDocumentVisibilityDuration = function (t) {
            var e = t.end,
              n = t.start,
              r = 0,
              o = window.performance.now();
            this.$3 != null &&
              (this.$4.push({ start: this.$3, end: o }), (this.$3 = o));
            for (var a of this.$4)
              if (!(a.end < n || a.start > e)) {
                if (a.start <= n && a.end <= e) {
                  r += a.end - n;
                  continue;
                }
                if (a.start <= n && a.end > e) {
                  r += e - n;
                  continue;
                }
                if (a.start >= n && a.end <= e) {
                  r += a.end - a.start;
                  continue;
                }
                if (a.start >= n && a.end > e) {
                  r += e - a.start;
                  continue;
                }
              }
            return r;
          }),
          (n.observe = function () {
            var t = this,
              n = function (r, o) {
                o !== t.$1 &&
                  ((t.$1 = o),
                  o
                    ? (t.$3 = r.timeStamp)
                    : t.$3 != null &&
                      (t.$4.push({ start: t.$3, end: r.timeStamp }),
                      (t.$3 = null)),
                  (t.$4 = t.$4.filter(function (t) {
                    return t.end >= r.timeStamp - e;
                  })));
              },
              r = function (t) {
                n(t, !document.hidden);
              },
              o = function () {
                t.$2 = !0;
              },
              a = function () {
                t.$2 = !1;
              };
            return (
              document.addEventListener("visibilitychange", r),
              window.addEventListener("focus", o),
              window.addEventListener("blur", a),
              function () {
                (document.removeEventListener("visibilitychange", r),
                  window.removeEventListener("focus", o),
                  window.removeEventListener("blur", a));
              }
            );
          }),
          t
        );
      })();
    i.WAWebDocumentVisibilityObserver = l;
  },
  66,
);
