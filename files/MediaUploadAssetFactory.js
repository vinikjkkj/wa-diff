__d(
  "MediaUploadAssetFactory",
  ["MediaUploadAsset", "MediaUploadMediaType", "MediaUploadTime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null) return null;
      var t = /\.([^.]+)$/.exec(e);
      return t == null || t.length < 2 ? null : t[1];
    }
    var s = (function () {
      function t(e) {
        var t = e.features;
        this.$1 = t;
      }
      var n = t.prototype;
      return (
        (n.$2 = function (n) {
          return {
            mode: "File",
            file: n,
            lastModified: o("MediaUploadTime").millisecondsToTime(
              n.lastModified,
            ),
            name: n.name,
            size: n.size,
            mimeType: n.type,
            extension: e(n.name),
          };
        }),
        (n.$3 = function (n) {
          return {
            mode: "HTMLInput",
            inputElement: n,
            name: n.value,
            extension: e(n.value),
          };
        }),
        (n.createFromFile = function (t, n) {
          return (
            n === void 0 && (n = r("MediaUploadMediaType").VIDEO),
            new (r("MediaUploadAsset"))({ mediaType: n, data: this.$2(t) })
          );
        }),
        (n.createFromHTMLInput = function (t, n) {
          n === void 0 && (n = r("MediaUploadMediaType").VIDEO);
          var e,
            o = t.files;
          if (this.$1.supportFileFromHTML && o != null && o.length > 0) {
            var a = o[0];
            e = this.$2(a);
          } else e = this.$3(t);
          return new (r("MediaUploadAsset"))({ mediaType: n, data: e });
        }),
        t
      );
    })();
    l.default = s;
  },
  98,
);
