__d(
  "CanvasVideoThumbnail",
  [
    "EventListener",
    "Promise",
    "VideoThumbnail_UNTYPED",
    "canvasToBlob",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function o(e, n, r, o, a, i, l) {
          var s;
          return (
            o === void 0 && (o = null),
            a === void 0 && (a = null),
            i === void 0 && (i = 0),
            l === void 0 && (l = 0),
            (s = t.call(this, null) || this),
            (s.$CanvasVideoThumbnail$p_1 = e),
            (s.$CanvasVideoThumbnail$p_2 = n),
            (s.$CanvasVideoThumbnail$p_3 = r),
            (s.$CanvasVideoThumbnail$p_4 = o),
            (s.$CanvasVideoThumbnail$p_5 = a),
            (s.$CanvasVideoThumbnail$p_6 = i),
            (s.$CanvasVideoThumbnail$p_7 = l),
            (s.$CanvasVideoThumbnail$p_8 =
              s.$CanvasVideoThumbnail$p_1.toDataURL("image/jpeg")),
            s
          );
        }
        babelHelpers.inheritsLoose(o, t);
        var a = o.prototype;
        return (
          (a.getCanvas = function () {
            return this.$CanvasVideoThumbnail$p_1;
          }),
          (a.getTime = function () {
            return this.$CanvasVideoThumbnail$p_3
              ? this.$CanvasVideoThumbnail$p_3
              : 0;
          }),
          (a.getURL = function () {
            return (
              this.$CanvasVideoThumbnail$p_8 == null &&
                (this.$CanvasVideoThumbnail$p_8 =
                  this.$CanvasVideoThumbnail$p_1.toDataURL("image/jpeg")),
              this.$CanvasVideoThumbnail$p_8
            );
          }),
          (a.getData = function () {
            var t = this,
              o = document.createElement("canvas"),
              a = o.getContext("2d"),
              i = this.$CanvasVideoThumbnail$p_2;
            return new (e || (e = n("Promise")))(function (e, n) {
              var l = r("EventListener").listen(i, "seeked", function () {
                (l.remove(),
                  t.$CanvasVideoThumbnail$p_9(o, a),
                  r("promiseDone")(
                    r("canvasToBlob")(o, "image/jpeg").then(e, n),
                  ));
              });
              i.currentTime = t.$CanvasVideoThumbnail$p_3;
            });
          }),
          (a.getDataWithText = function (o, a, i, l, s, u, c, d) {
            var t = this,
              m = document.createElement("canvas"),
              p = m.getContext("2d"),
              _ = this.$CanvasVideoThumbnail$p_2;
            return new (e || (e = n("Promise")))(function (e, n) {
              var f = r("EventListener").listen(_, "seeked", function () {
                (f.remove(),
                  (p.fillStyle = c),
                  (p.textAlign = d),
                  t.$CanvasVideoThumbnail$p_9(m, p),
                  (p = r("VideoThumbnail_UNTYPED").addTextToCanvasContext(
                    p,
                    o,
                    a,
                    i,
                    l,
                    s,
                    u,
                    c,
                    d,
                  )),
                  r("promiseDone")(
                    r("canvasToBlob")(m, "image/jpeg").then(e, n),
                  ));
              });
              _.currentTime = t.$CanvasVideoThumbnail$p_3;
            });
          }),
          (a.$CanvasVideoThumbnail$p_9 = function (t, n) {
            var e = this.$CanvasVideoThumbnail$p_2;
            if (
              this.$CanvasVideoThumbnail$p_4 != null ||
              this.$CanvasVideoThumbnail$p_5 != null
            ) {
              var r, o;
              ((t.width =
                (r = this.$CanvasVideoThumbnail$p_4) != null
                  ? r
                  : e.videoWidth),
                (t.height =
                  (o = this.$CanvasVideoThumbnail$p_5) != null
                    ? o
                    : e.videoHeight),
                this.$CanvasVideoThumbnail$p_10(t, n));
            } else
              ((t.width = e.videoWidth),
                (t.height = e.videoHeight),
                n.drawImage(e, 0, 0, t.width, t.height));
          }),
          (a.$CanvasVideoThumbnail$p_10 = function (t, n) {
            var e,
              r,
              o = this.$CanvasVideoThumbnail$p_2,
              a = this.$CanvasVideoThumbnail$p_6,
              i = this.$CanvasVideoThumbnail$p_7,
              l = (e = this.$CanvasVideoThumbnail$p_4) != null ? e : t.width,
              s = (r = this.$CanvasVideoThumbnail$p_5) != null ? r : t.height;
            n.drawImage(o, a, i, l, s, 0, 0, t.width, t.height);
          }),
          o
        );
      })(r("VideoThumbnail_UNTYPED"));
    l.default = s;
  },
  98,
);
