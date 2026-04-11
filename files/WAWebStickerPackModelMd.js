__d(
  "WAWebStickerPackModelMd",
  ["WAWebBaseModel", "WAWebStickerPackStickerCollection"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.index = o("WAWebBaseModel").prop()),
          (t.id = o("WAWebBaseModel").prop()),
          (t.name = o("WAWebBaseModel").prop()),
          (t.publisher = o("WAWebBaseModel").prop()),
          (t.description = o("WAWebBaseModel").prop()),
          (t.fileSize = o("WAWebBaseModel").prop()),
          (t.imageDataHash = o("WAWebBaseModel").prop()),
          (t.animated = o("WAWebBaseModel").prop()),
          (t.isLottie = o("WAWebBaseModel").prop()),
          (t.premium = o("WAWebBaseModel").prop()),
          (t.previewImageIds = o("WAWebBaseModel").prop()),
          (t.trayImageId = o("WAWebBaseModel").prop()),
          (t.trayImagePreview = o("WAWebBaseModel").prop()),
          (t.stickers = o("WAWebBaseModel").session()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.initialize = function () {
          e.prototype.initialize.call(this);
          var t = !0;
          this.stickers = new (r("WAWebStickerPackStickerCollection"))(
            this.id,
            t,
          );
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "stickerPackMd";
    var s = o("WAWebBaseModel").defineModel(e);
    ((l.StickerPack = e), (l.StickerPackModel = s));
  },
  98,
);
