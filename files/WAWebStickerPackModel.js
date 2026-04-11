__d(
  "WAWebStickerPackModel",
  [
    "Promise",
    "WALogger",
    "WAWebBaseModel",
    "WAWebMedia",
    "WAWebMediaData",
    "WAWebMediaTypes",
    "WAWebStickerPackStickerCollection",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "placeholder:",
      d = "image/png",
      m = function (t) {
        var e = t.index,
          n = t.page;
        return new _({ id: "" + c + e, index: e, page: n });
      },
      p = (function (t) {
        function a() {
          for (var e, n = arguments.length, i = new Array(n), l = 0; l < n; l++)
            i[l] = arguments[l];
          return (
            (e = t.call.apply(t, [this].concat(i)) || this),
            (e.id = o("WAWebBaseModel").prop()),
            (e.index = o("WAWebBaseModel").prop()),
            (e.name = o("WAWebBaseModel").prop()),
            (e.page = o("WAWebBaseModel").prop()),
            (e.url = o("WAWebBaseModel").prop()),
            (e.mimetype = o("WAWebBaseModel").prop(d)),
            (e.mediaData = o("WAWebBaseModel").session()),
            (e.mediaObject = o("WAWebBaseModel").prop()),
            (e.directPath = o("WAWebBaseModel").prop()),
            (e.filehash = o("WAWebBaseModel").prop()),
            (e.mediaKey = o("WAWebBaseModel").prop()),
            (e.mediaKeyTimestamp = o("WAWebBaseModel").prop()),
            (e.size = o("WAWebBaseModel").prop()),
            (e.type = o("WAWebBaseModel").prop(
              o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE,
            )),
            (e.encFilehash = o("WAWebBaseModel").prop()),
            (e.deprecatedMms3Url = o("WAWebBaseModel").derived(
              function () {
                return this.isFirstParty ? "" : this.url;
              },
              ["url", "isFirstParty"],
            )),
            (e.stickers = o("WAWebBaseModel").derived(
              function () {
                return (
                  (this.$StickerPack$p_1 =
                    this.$StickerPack$p_1 ||
                    new (r("WAWebStickerPackStickerCollection"))(
                      this.id.split("#")[0],
                      this.isFirstParty,
                    )),
                  this.$StickerPack$p_1
                );
              },
              ["id"],
            )),
            (e.isPlaceholder = o("WAWebBaseModel").derived(
              function () {
                return a.isPlaceholderId(this.id);
              },
              ["id"],
            )),
            (e.isFirstParty = o("WAWebBaseModel").derived(
              function () {
                return !!this.url && !this.mediaKey;
              },
              ["url", "mediaKey"],
            )),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.initialize = function () {
            (t.prototype.initialize.call(this),
              !this.isPlaceholder &&
                !this.isFirstParty &&
                (this.addChild(
                  "mediaData",
                  new (r("WAWebMediaData"))({ renderableUrl: "" }),
                ),
                o("WAWebMedia").registerStickerPackIcon(this)));
            var n = r("err")("StickerPackModel is not initialized");
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "StickerPackModel ",
                    "",
                  ])),
                n,
              )
              .sendLogs("used-legacy-sticker-pack");
          }),
          (i.downloadMedia = function () {
            var e = this;
            return this.isPlaceholder || this.isFirstParty
              ? (u || (u = n("Promise"))).resolve()
              : o("WAWebMedia")
                  .downloadStickerOrStickerPackIcon(this, "STICKER_PACK")
                  .catch(function (t) {
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "id: ",
                            ", error: ",
                            "",
                          ])),
                        e.id,
                        String(t.stack || t),
                      )
                      .sendLogs("sticker-panel:sticker-pack download failed");
                  });
          }),
          (i.delete = function () {
            (t.prototype.delete.call(this),
              o("WAWebMedia").deregisterStickerPackIcon(this));
          }),
          a
        );
      })(o("WAWebBaseModel").BaseModel);
    ((p.Proxy = "stickerPack"),
      (p.createPlaceholder = m),
      (p.isPlaceholderId = function (e) {
        return new RegExp("^" + c).test(e);
      }));
    var _ = o("WAWebBaseModel").defineModel(p);
    ((_.createPlaceholder = m),
      (_.isPlaceholderId = p.isPlaceholderId),
      (l.PRE_PLACEHOLDER_ID = c),
      (l.StickerPackModel = _));
  },
  98,
);
