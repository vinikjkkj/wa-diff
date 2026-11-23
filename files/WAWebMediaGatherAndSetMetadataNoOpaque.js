__d(
  "WAWebMediaGatherAndSetMetadataNoOpaque",
  [
    "WAFilteredCatch",
    "WAWebMediaDataUtils",
    "WAWebMediaLoad",
    "WAWebMediaLoadErrors",
    "WAWebMediaTypes",
    "WAWebStickerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebMediaLoad").videoWidthHeightDuration(e);
    }
    async function s(t, n) {
      var r = await Promise.resolve()
        .then(function () {
          switch (t.type) {
            case o("WAWebMediaTypes").TYPE.VIDEO:
            case o("WAWebMediaTypes").TYPE.PTV:
              return e(n).then(function (e) {
                return {
                  fullWidth: e.width,
                  fullHeight: e.height,
                  duration:
                    e.duration !== void 0 ? "" + Math.ceil(e.duration) : void 0,
                };
              });
            case o("WAWebMediaTypes").TYPE.IMAGE:
              return t.contentInfo.fullHeight != null &&
                t.contentInfo.fullWidth != null &&
                t.size === n.size
                ? null
                : o("WAWebMediaDataUtils")
                    .getImageWidthHeightNoOpaque(n)
                    .then(function (e) {
                      return {
                        fullWidth: e.width,
                        fullHeight: e.height,
                        size: n.size,
                      };
                    });
            case o("WAWebMediaTypes").TYPE.STICKER:
              return o("WAWebStickerUtils").parseStickerMetadata(n, t);
            case o("WAWebMediaTypes").TYPE.AUDIO:
              return {};
            default:
              return {};
          }
        })
        .catch(
          o("WAFilteredCatch").filteredCatch(
            o("WAWebMediaLoadErrors").MediaUnsupportedError,
            function (e) {
              throw (t.consolidate({}), e);
            },
          ),
        );
      r != null && t.consolidate(babelHelpers.extends({}, r));
    }
    l.gatherAndSetMetadataNoOpaque = s;
  },
  98,
);
