__d(
  "GeoGridTypes",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = [],
        n = [];
      return typeof e == "string" || typeof e == "number"
        ? e.toString()
        : (e.forEach(function (r, o) {
            r instanceof m
              ? (n.push(r.getName()), o === e.length - 1 && t.push(l(n)))
              : (n.length > 0 && (t.push(l(n)), (n = [])), t.push(r));
          }),
          t.join(" "));
    }
    function l(e) {
      return "[" + e.join(" ") + "]";
    }
    function s(e, t) {
      return "minmax(" + e.toString() + ", " + t.toString() + ")";
    }
    function u(e, t) {
      return "repeat(" + e + ", " + t + ")";
    }
    function c(e) {
      return typeof e == "string" || typeof e == "number";
    }
    var d = (function () {
      function e() {}
      return (
        (e.flex = function (t) {
          return t + "fr";
        }),
        (e.len = function (t, n) {
          return "" + t + n;
        }),
        (e.inflexibleMinTrackMax = function (t, n) {
          return s(t, n);
        }),
        (e.fixedMinTrackMax = function (t, n) {
          return s(t, n);
        }),
        (e.inflexibleMinFixedMax = function (t, n) {
          return s(t, n);
        }),
        (e.fitContent = function (t) {
          return "fit-content(" + t + ")";
        }),
        e
      );
    })();
    ((d.auto = "auto"),
      (d.maxContent = "max-content"),
      (d.minContent = "min-content"));
    var m = (function () {
        function e(e) {
          this.name = e;
        }
        var t = e.prototype;
        return (
          (t.getName = function () {
            return this.name;
          }),
          e
        );
      })(),
      p = (function () {
        function e(e) {
          this.name = e;
        }
        var t = e.prototype;
        return (
          (t.getName = function () {
            return this.name;
          }),
          e
        );
      })(),
      _ = (function () {
        function e() {}
        return (
          (e.span = function (t) {
            return "span " + t.toString();
          }),
          (e.columnOrRow = function (t, n) {
            var e = t instanceof m ? t.getName() : t.toString(),
              r =
                n instanceof m
                  ? n.getName()
                  : n == null
                    ? void 0
                    : n.toString();
            return r != null ? e + " / " + r : e;
          }),
          e
        );
      })();
    _.auto = "auto";
    var f = (function () {
        function e() {
          var e = this;
          this.areas = [];
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          n.forEach(function (t) {
            t instanceof p ? e.addRow(t) : e.addRow.apply(e, t);
          });
        }
        var t = e.prototype;
        return (
          (t.addRow = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            t != null && this.areas.push(t);
          }),
          (t.getRows = function () {
            return this.areas.map(function (e) {
              return e instanceof p
                ? e.getName()
                : e
                    .map(function (e) {
                      return e.getName();
                    })
                    .join(" ");
            });
          }),
          (t.getAreas = function () {
            var e,
              t = this.getRows();
            return (
              '"' +
              ((e = t == null ? void 0 : t.join('" "')) != null ? e : "") +
              '"'
            );
          }),
          e
        );
      })(),
      g = (function () {
        function e() {}
        return (
          (e.auto = function (t, n) {
            return u(t, n);
          }),
          (e.fixed = function (t, n) {
            return u(t, n);
          }),
          (e.track = function (t, n) {
            return u(t, n);
          }),
          e
        );
      })(),
      h = (function () {
        function t() {}
        return (
          (t.autoTrack = function (n) {
            var t,
              r =
                typeof n == "string"
                  ? null
                  : n == null
                    ? void 0
                    : n.beforeTracks,
              o =
                typeof n == "string"
                  ? null
                  : n == null
                    ? void 0
                    : n.afterTracks,
              a =
                typeof n == "string"
                  ? n
                  : (t = n == null ? void 0 : n.autoRepeat) != null
                    ? t
                    : n;
            if (r != null && o != null) {
              var i = c(r) ? (r != null ? r : "") : e(r),
                l = c(o) ? (o != null ? o : "") : e(o);
              return (i + " " + a + " " + l).trim();
            }
            return a;
          }),
          (t.fixedSize = function (n) {
            return e(n);
          }),
          (t.fixedSizeOrRepeat = function (n) {
            return e(n);
          }),
          (t.trackSize = function (n) {
            return e(n);
          }),
          (t.trackSizeOrRepeat = function (n) {
            return e(n);
          }),
          t
        );
      })();
    ((i.GridSize = d),
      (i.GridLine = m),
      (i.GridArea = p),
      (i.GridItem = _),
      (i.GridTemplateAreas = f),
      (i.GridRepeat = g),
      (i.GridList = h));
  },
  66,
);
