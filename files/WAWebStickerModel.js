__d(
  "WAWebStickerModel",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBaseModel",
    "WAWebMedia",
    "WAWebMediaData",
    "WAWebMediaTypes",
    "once",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("once")(function () {
        return new d({ id: "placeholder", isPlaceholder: !0 });
      }),
      u = r("once")(function () {
        return new d({ id: "createButton", isCreateButton: !0 });
      }),
      c = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.id = o("WAWebBaseModel").prop()),
            (e.mediaData = o("WAWebBaseModel").session()),
            (e.mediaObject = o("WAWebBaseModel").prop()),
            (e.deprecatedMms3Url = o("WAWebBaseModel").prop()),
            (e.directPath = o("WAWebBaseModel").prop()),
            (e.filehash = o("WAWebBaseModel").prop()),
            (e.height = o("WAWebBaseModel").prop()),
            (e.index = o("WAWebBaseModel").prop()),
            (e.mediaKey = o("WAWebBaseModel").prop()),
            (e.mediaKeyTimestamp = o("WAWebBaseModel").prop()),
            (e.mimetype = o("WAWebBaseModel").prop()),
            (e.size = o("WAWebBaseModel").prop()),
            (e.type = o("WAWebBaseModel").prop(
              o("WAWebMediaTypes").OUTWARD_TYPES.STICKER,
            )),
            (e.encFilehash = o("WAWebBaseModel").prop()),
            (e.width = o("WAWebBaseModel").prop()),
            (e.weight = o("WAWebBaseModel").prop()),
            (e.stickerPackId = o("WAWebBaseModel").prop()),
            (e.stickerPackName = o("WAWebBaseModel").prop()),
            (e.stickerPackPublisher = o("WAWebBaseModel").prop()),
            (e.isPlaceholder = o("WAWebBaseModel").prop()),
            (e.isCreateButton = o("WAWebBaseModel").prop()),
            (e.isAvatar = o("WAWebBaseModel").prop()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.initialize = function () {
            var e = this;
            t.prototype.initialize.call(this);
            var n = new (r("WAWebMediaData"))();
            (this.addChild("mediaData", n),
              o("WAWebABProps").getABPropConfigValue(
                "web_sticker_suggestions_enable",
              ) &&
                this.listenTo(n, "change:emojis", function (t) {
                  t.emojis != null &&
                    (t.emojis.length &&
                      e.trigger("sticker_mediaData_emojis_updated"),
                    e.stopListening(n, "change:emojis"));
                }),
              !this.isPlaceholder &&
                !this.isCreateButton &&
                o("WAWebMedia").registerSticker(this));
          }),
          (a.downloadMedia = function (n) {
            var t = this;
            return o("WAWebMedia")
              .downloadStickerOrStickerPackIcon(this, "STICKER", n)
              .catch(function (n) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "id: ",
                        ", error: ",
                        "",
                      ])),
                    t.id,
                    String(n.stack || n),
                  )
                  .tags("non-sad")
                  .sendLogs("sticker-panel:sticker download failed");
              });
          }),
          (a.toDbData = function () {
            return {
              id: this.id || this.filehash,
              index: this.index || 0,
              width: this.width,
              height: this.height,
              size: this.size,
              mimetype: this.mimetype,
              filehash: this.filehash,
              directPath: this.directPath,
              mediaKey: this.mediaKey,
              mediaKeyTimestamp:
                this.mediaKeyTimestamp != null
                  ? this.mediaKeyTimestamp
                  : o("WATimeUtils").unixTime(),
              encFilehash: this.encFilehash,
              deprecatedMms3Url: this.deprecatedMms3Url,
              isAvatar: this.isAvatar,
              type: o("WAWebMediaTypes").OUTWARD_TYPES.STICKER,
              weight: this.weight,
            };
          }),
          (a.delete = function () {
            (t.prototype.delete.call(this),
              o("WAWebMedia").deregisterSticker(this));
          }),
          n
        );
      })(o("WAWebBaseModel").BaseModel);
    ((c.Proxy = "sticker"), (c.getPlaceholder = s), (c.getCreateButton = u));
    var d = o("WAWebBaseModel").defineModel(c);
    ((d.getPlaceholder = s), (l.Sticker = c), (l.StickerModel = d));
  },
  98,
);
