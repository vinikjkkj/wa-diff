__d(
  "VideoUploadFile",
  ["VideoUploadFeatureDetector", "fileSlice", "md5"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t, n, r) {
        ((this.$1 = e),
          (this.$2 = t),
          (this.$3 = n),
          (this.$4 = r == null ? void 0 : r.toLowerCase()));
      }
      ((e.fromBlob = function (n) {
        var t =
            n.type.indexOf("/") !== -1
              ? "." + n.type.split("/").pop().toLowerCase()
              : "",
          r = "blob" + t,
          o = new File([n], r, { type: n.type });
        return e.fromFile(o);
      }),
        (e.fromFile = function (n) {
          var t = e.getExtensionFromFileName(n.name);
          return new this(null, n, n.size, t);
        }),
        (e.fromFileInput = function (n) {
          var t = null,
            r = null,
            a = e.getExtensionFromFileInput(n);
          return (
            o("VideoUploadFeatureDetector").supportsFileAPI() &&
              n.files.length &&
              ((t = n.files[0]), (r = t.size)),
            new this(n, t, r, a)
          );
        }));
      var t = e.prototype;
      return (
        (t.getFileInput = function () {
          return this.$1;
        }),
        (t.getFile = function () {
          return this.$2;
        }),
        (t.getSize = function () {
          return this.$3;
        }),
        (t.getExtension = function () {
          return this.$4;
        }),
        (t.getCreatorProduct = function () {
          return this.$4 === "gif" ? 4 : 2;
        }),
        (t.getChunk = function (t, n) {
          return this.$2 != null ? r("fileSlice").call(this.$2, t, n) : null;
        }),
        (t.getFilePath = function () {
          var e;
          return (e = this.$2) == null ? void 0 : e.name;
        }),
        (t.getStableAssetID = function () {
          var e;
          return (e = r("md5")(this.getFilePath())) != null ? e : "unknown";
        }),
        (e.getExtensionFromFileInput = function (t) {
          return this.getExtensionFromFileName(t.value);
        }),
        (e.getExtensionFromFileName = function (t) {
          return t != null && t.indexOf(".") !== -1
            ? t.split(".").pop().toLowerCase()
            : "";
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
