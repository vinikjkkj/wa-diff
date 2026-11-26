__d(
  "WAWebMediaEditorCompositeCanvas",
  [],
  function (t, n, r, o, a, i) {
    var e = "media-editor-emoji-placeholder";
    function l(e, t) {
      return e.toCanvas({
        pixelRatio: t,
        x: 0,
        y: 0,
        width: e.width(),
        height: e.height(),
      });
    }
    function s(e, t) {
      return e / t.x;
    }
    function u(t) {
      return (
        t.find("." + e).length === 0 &&
        t.find("Image").every(function (e) {
          return !c(e) || e.isCached();
        })
      );
    }
    function c(e) {
      var t = e.attrs.filters;
      return Array.isArray(t) && t.length > 0;
    }
    ((i.EMOJI_PLACEHOLDER_NAME = e),
      (i.getStageCompositeCanvas = l),
      (i.getExportPixelRatio = s),
      (i.isStageReadyToExport = u));
  },
  66,
);
