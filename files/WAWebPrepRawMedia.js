__d(
  "WAWebPrepRawMedia",
  [
    "Promise",
    "WALogger",
    "WAWebMediaPrep",
    "WAWebMediaTypes",
    "WAWebProcessRawMedia",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, r) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose(["Prepping raw media"])),
      );
      var a;
      r.isPtt === !0
        ? (a = o("WAWebMediaTypes").OUTWARD_TYPES.PTT)
        : r.asDocument === !0
          ? (a = o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT)
          : r.asGif === !0
            ? (a = o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO)
            : r.isAudio === !0
              ? (a = o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO)
              : r.asSticker === !0
                ? (a = o("WAWebMediaTypes").OUTWARD_TYPES.STICKER)
                : r.asStickerPack === !0
                  ? (a = o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK)
                  : (a = o("WAWebMediaTypes").OUTWARD_TYPES.UNKNOWN);
      var i = (s || (s = n("Promise"))).resolve(t).then(function (e) {
        return (
          e.autoreleaseWhenPromiseCompletes(i),
          o("WAWebProcessRawMedia").processRawMedia(e, r)
        );
      });
      return new (o("WAWebMediaPrep").MediaPrep)(a, i);
    }
    l.prepRawMedia = u;
  },
  98,
);
