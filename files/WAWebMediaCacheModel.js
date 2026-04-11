__d(
  "WAWebMediaCacheModel",
  ["WAWebBaseModel", "WAWebODS", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { DATA_URL: 1, BLOB: 2, CANVAS: 4 },
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.key = o("WAWebBaseModel").session()),
            (t.value = o("WAWebBaseModel").session()),
            (t.id = o("WAWebBaseModel").session()),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        (babelHelpers.inheritsLoose(t, e),
          (t.getStringKey = function (t) {
            throw r("err")("Not implemented");
          }));
        var n = t.prototype;
        return (
          (n.isKeyEqual = function (n) {
            return t.getStringKey(n) === t.getStringKey(this.key);
          }),
          (n.toString = function () {
            return t.getStringKey(this.key);
          }),
          t
        );
      })(o("WAWebBaseModel").BaseModel),
      u = o("WAWebBaseModel").defineModel(s),
      c = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        (babelHelpers.inheritsLoose(t, e),
          (t.getStringKey = function (t) {
            var e = t.file,
              n = e.name + "-" + e.size + "-" + e.lastModified;
            return n;
          }));
        var n = t.prototype;
        return (
          (n.isMaxDimensionSame = function (t) {
            return this.key.maxDimension === t.maxDimension;
          }),
          (n.isOutputTypeSame = function (t) {
            return (this.key.outputType & t.outputType) === t.outputType;
          }),
          (n.isOptsSame = function (t) {
            var e = this.key.opts,
              n = t.opts;
            return (
              (e == null ? void 0 : e.fitToSquare) ===
                (n == null ? void 0 : n.fitToSquare) &&
              (e == null ? void 0 : e.minDimension) ===
                (n == null ? void 0 : n.minDimension) &&
              (e == null ? void 0 : e.transparency) ===
                (n == null ? void 0 : n.transparency)
            );
          }),
          (n.isKeyEqual = function (n) {
            var e = t.getStringKey(n) === t.getStringKey(this.key);
            if (!e) return !1;
            var o = this.isMaxDimensionSame(n),
              a = this.isOutputTypeSame(n),
              i = this.isOptsSame(n),
              l = o && a && i;
            return l
              ? (r("WAWebODS").incr(
                  "web.app.resizeRotateMediaCache.sameFileSameOption",
                ),
                !0)
              : (r("WAWebODS").incr(
                  "web.app.resizeRotateMediaCache.sameFileDifferentOption",
                ),
                !1);
          }),
          t
        );
      })(s),
      d = o("WAWebBaseModel").defineModel(c);
    ((l.ImageOutputTypes = e),
      (l.MediaCache = u),
      (l.ResizeRotateMediaCacheImpl = c),
      (l.ResizeRotateMediaCache = d));
  },
  98,
);
