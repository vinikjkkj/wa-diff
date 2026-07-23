__d(
  "WAWebMediaGatherAndSetMetadataNoOpaque",
  [
    "Promise",
    "WAFilteredCatch",
    "WAWebMediaDataUtils",
    "WAWebMediaLoad",
    "WAWebMediaLoadErrors",
    "WAWebMediaTypes",
    "WAWebStickerUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return o("WAWebMediaLoad").videoWidthHeightDuration(e);
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = yield (e || (e = n("Promise")))
            .resolve()
            .then(function () {
              switch (t.type) {
                case o("WAWebMediaTypes").TYPE.VIDEO:
                case o("WAWebMediaTypes").TYPE.PTV:
                  return s(r).then(function (e) {
                    return {
                      fullWidth: e.width,
                      fullHeight: e.height,
                      duration:
                        e.duration !== void 0
                          ? "" + Math.ceil(e.duration)
                          : void 0,
                    };
                  });
                case o("WAWebMediaTypes").TYPE.IMAGE:
                  return t.contentInfo.fullHeight != null &&
                    t.contentInfo.fullWidth != null &&
                    t.size === r.size
                    ? null
                    : o("WAWebMediaDataUtils")
                        .getImageWidthHeightNoOpaque(r)
                        .then(function (e) {
                          return {
                            fullWidth: e.width,
                            fullHeight: e.height,
                            size: r.size,
                          };
                        });
                case o("WAWebMediaTypes").TYPE.STICKER:
                  return o("WAWebStickerUtils").parseStickerMetadata(r, t);
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
          a != null && t.consolidate(a);
        })),
        c.apply(this, arguments)
      );
    }
    l.gatherAndSetMetadataNoOpaque = u;
  },
  98,
);
