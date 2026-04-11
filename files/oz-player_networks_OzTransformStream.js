__d(
  "oz-player/networks/OzTransformStream",
  [
    "oz-player/shims/OzEventEmitter",
    "oz-player/shims/OzStreams",
    "oz-player/utils/OzErrorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n, r;
        r = e.call(this) || this;
        var a =
            (n = t == null ? void 0 : t.errorTransform) != null
              ? n
              : function (e) {
                  return e;
                },
          i,
          l;
        return (
          (r.writable = new (o("oz-player/shims/OzStreams").OzWritableStream)({
            start: function (t) {
              l = t;
            },
            write: function (t) {
              r.emit("writableWrite", t);
              try {
                r.onDataWritten(t);
              } catch (e) {
                i.error(
                  o("oz-player/utils/OzErrorUtils").createOzError({
                    type: "OZ_STREAM",
                    description:
                      "Error from write handler: " + r.constructor.name,
                    extra: { code: "OZ_S-0", originalError: e },
                  }),
                );
              }
              i.enqueue(t);
            },
            close: function () {
              r.emit("writableClose");
              try {
                r.onClose();
              } catch (e) {
                i.error(
                  o("oz-player/utils/OzErrorUtils").createOzError({
                    type: "OZ_STREAM",
                    description:
                      "Error from close handler: " + r.constructor.name,
                    extra: { code: "OZ_S-1", originalError: e },
                  }),
                );
              }
              i.close();
            },
            abort: function (t) {
              var e = a(t);
              i.error(e);
            },
          })),
          (r.readable = new (o("oz-player/shims/OzStreams").OzReadableStream)({
            start: function (t) {
              i = t;
            },
            cancel: function (t) {
              (r.emit("readableCancel", t), l.error(t));
            },
          })),
          r
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.onDataWritten = function (t) {}),
        (n.onClose = function () {}),
        t
      );
    })(r("oz-player/shims/OzEventEmitter"));
    l.default = e;
  },
  98,
);
