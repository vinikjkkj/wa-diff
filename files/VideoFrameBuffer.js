__d(
  "VideoFrameBuffer",
  ["HTMLMediaElementReadyStates", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t, n, r, o, a, i) {
        (r === void 0 && (r = null),
          o === void 0 && (o = null),
          a === void 0 && (a = null),
          i === void 0 && (i = null),
          (this.$2 = t),
          (this.$1 = e),
          (this.$3 = n || "contain"),
          (this.$6 = r),
          (this.$7 = o),
          (this.$8 = a),
          (this.$9 = i));
      }
      var t = e.prototype;
      return (
        (t.updateFrameBuffer = function () {
          if (
            (this.$4 != null && ((this.$1.width = this.$4), (this.$4 = null)),
            this.$5 != null && ((this.$1.height = this.$5), (this.$5 = null)),
            !(
              this.$2.readyState <
              r("HTMLMediaElementReadyStates").HAVE_CURRENT_DATA
            ))
          ) {
            var e = this.$1.clientWidth || this.$1.width,
              t = this.$1.clientHeight || this.$1.height,
              n = e,
              o = t,
              a = this.$2.videoWidth / this.$2.videoHeight,
              i = n / o;
            (this.$3 === "cover" && ((i *= -1), (a *= -1)),
              i > a ? (n = o * a) : i < a && (o = n / a));
            var l = this.$1.getContext("2d");
            if (l instanceof window.CanvasRenderingContext2D)
              try {
                if (this.$6 != null || this.$7 != null) {
                  var s, u, c, d;
                  l.drawImage(
                    this.$2,
                    (s = this.$8) != null ? s : 0,
                    (u = this.$9) != null ? u : 0,
                    (c = this.$6) != null ? c : e,
                    (d = this.$7) != null ? d : t,
                    0,
                    0,
                    e,
                    t,
                  );
                } else l.drawImage(this.$2, (e - n) / 2, (t - o) / 2, n, o);
              } catch (e) {
                var m = r("getErrorSafe")(e);
                if (m.name !== "NS_ERROR_NOT_AVAILABLE") throw m;
              }
          }
        }),
        (t.getDOMNode = function () {
          return this.$1;
        }),
        (t.updateDimensions = function (t, n) {
          ((this.$4 = t), (this.$5 = n));
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
