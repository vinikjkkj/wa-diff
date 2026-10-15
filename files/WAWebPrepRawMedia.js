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
    function u(t, a) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose(["Prepping raw media"])),
      );
      var i;
      a.isPtt === !0
        ? (i = o("WAWebMediaTypes").OUTWARD_TYPES.PTT)
        : a.asDocument === !0
          ? (i = o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT)
          : a.asGif === !0
            ? (i = o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO)
            : a.isAudio === !0
              ? (i = o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO)
              : a.asSticker === !0
                ? (i = o("WAWebMediaTypes").OUTWARD_TYPES.STICKER)
                : a.asStickerPack === !0
                  ? (i = o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK)
                  : (i = o("WAWebMediaTypes").OUTWARD_TYPES.UNKNOWN);
      var l = (s || (s = n("Promise"))).resolve(t).then(function (e) {
        return (
          e.autoreleaseWhenPromiseCompletes(l),
          o("WAWebProcessRawMedia").processRawMedia(e, a)
        );
      });
      return new (r("WAWebMediaPrep"))(i, l);
    }
    l.prepRawMedia = u;
  },
  98,
);
