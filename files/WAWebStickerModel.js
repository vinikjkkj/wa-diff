__d(
  "WAWebStickerModel",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBaseModel",
    "WAWebMediaData",
    "WAWebMediaStickers",
    "WAWebMediaTypes",
    "WAWebStickerGetters",
    "err",
    "getErrorSafe",
    "once",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("JSResourceForInteraction")(
        "WAWebDownloadExternalStickerAction",
      ).__setRef("WAWebStickerModel"),
      d = r("once")(function () {
        return new f({ id: "placeholder", isPlaceholder: !0 });
      }),
      m = r("once")(function () {
        return new f({ id: "createButton", actionTile: "create" });
      }),
      p = r("once")(function () {
        return new f({ id: "sendMusicButton", actionTile: "send_music" });
      }),
      _ = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.id = o("WAWebBaseModel").prop()),
            (e.mediaData = o("WAWebBaseModel").session()),
            (e.mediaObject = o("WAWebBaseModel").prop()),
            (e.externalUrl = o("WAWebBaseModel").session()),
            (e.$Sticker$p_1 = null),
            (e.$Sticker$p_2 = null),
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
            (e.actionTile = o("WAWebBaseModel").prop()),
            (e.isAvatar = o("WAWebBaseModel").prop()),
            (e.stickerAudio = o("WAWebBaseModel").prop()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.initialize = function () {
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
              this.externalUrl != null
                ? (this.filehash &&
                    o("WAWebMediaStickers").registerSticker(this),
                  n.set({
                    type: o("WAWebMediaTypes").OUTWARD_TYPES.STICKER,
                    mimetype: this.mimetype,
                    fullWidth: this.width,
                    fullHeight: this.height,
                  }))
                : !this.isPlaceholder &&
                  this.actionTile == null &&
                  o("WAWebMediaStickers").registerSticker(this));
          }),
          (i.downloadMedia = function (a) {
            var t = this;
            if (this.externalUrl != null) {
              var i, l, d;
              if ((i = this.$Sticker$p_2) != null && i.signal.aborted) {
                var m = this.$Sticker$p_1,
                  p = function () {
                    return (
                      t.$Sticker$p_1 === m &&
                        ((t.$Sticker$p_1 = null), (t.$Sticker$p_2 = null)),
                      t.downloadMedia(a)
                    );
                  };
                return (u || (u = n("Promise"))).resolve(m).then(p, p);
              }
              var _ =
                (l = this.$Sticker$p_2) != null ? l : new AbortController();
              this.$Sticker$p_2 = _;
              var f =
                (d = this.$Sticker$p_1) != null
                  ? d
                  : c.load().then(function (e) {
                      var n = e.downloadExternalSticker;
                      return (_.signal.throwIfAborted(), n(t, _.signal));
                    });
              return (
                (this.$Sticker$p_1 = f),
                f
                  .catch(function (n) {
                    if (_.signal.aborted) {
                      if (
                        (t.$Sticker$p_2 === _ &&
                          (t.mediaData.mediaStage =
                            o("WAWebMediaTypes").MediaDataStage.INIT),
                        a === !0)
                      )
                        throw r("err")("External sticker download cancelled");
                      return;
                    }
                    if (
                      ((t.mediaData.mediaStage =
                        o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING),
                      o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "External sticker download failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(n))
                        .sendLogs("external-sticker-download-failed"),
                      a === !0)
                    )
                      throw r("err")("External sticker download failed");
                  })
                  .finally(function () {
                    t.$Sticker$p_1 === f &&
                      ((t.$Sticker$p_1 = null), (t.$Sticker$p_2 = null));
                  })
              );
            }
            return o("WAWebMediaStickers")
              .downloadStickerOrStickerPackIcon({
                shouldThrow: a,
                sticker: this,
                type: "STICKER",
              })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "id: ",
                        ", error",
                      ])),
                    t.id,
                  )
                  .catching(r("getErrorSafe")(e))
                  .tags("non-sad")
                  .sendLogs("sticker-panel:sticker download failed");
              });
          }),
          (i.toDbData = function () {
            return {
              id:
                this.externalUrl != null
                  ? this.filehash || this.id
                  : this.id || this.filehash,
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
              stickerAudio: this.stickerAudio,
            };
          }),
          (i.delete = function () {
            var e;
            ((e = this.$Sticker$p_2) == null || e.abort(),
              t.prototype.delete.call(this),
              o("WAWebStickerGetters").clearStickerGetterCacheFor(this),
              o("WAWebMediaStickers").deregisterSticker(this));
          }),
          a
        );
      })(o("WAWebBaseModel").BaseModel);
    ((_.Proxy = "sticker"),
      (_.getPlaceholder = d),
      (_.getCreateButton = m),
      (_.getSendMusicButton = p));
    var f = o("WAWebBaseModel").defineModel(_);
    ((f.getPlaceholder = d), (l.Sticker = _), (l.StickerModel = f));
  },
  98,
);
