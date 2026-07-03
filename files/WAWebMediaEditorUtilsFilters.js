__d(
  "WAWebMediaEditorUtilsFilters",
  ["fbt", "WAWebMediaEditorUtilsFilterType", "konva"],
  function (t, n, r, o, a, i, l, s) {
    var e = 48;
    function u() {
      return Array.from(
        o("WAWebMediaEditorUtilsFilterType").FilterType.members(),
      );
    }
    function c(e) {
      switch (e) {
        case o("WAWebMediaEditorUtilsFilterType").FilterType.NONE:
          return s._(/*BTDS*/ "None");
        case o("WAWebMediaEditorUtilsFilterType").FilterType.POP:
          return s._(/*BTDS*/ "Pop");
        case o("WAWebMediaEditorUtilsFilterType").FilterType.BW:
          return s._(/*BTDS*/ "B&W");
        case o("WAWebMediaEditorUtilsFilterType").FilterType.COOL:
          return s._(/*BTDS*/ "Cool");
        case o("WAWebMediaEditorUtilsFilterType").FilterType.CHROME:
          return s._(/*BTDS*/ "Chrome");
        case o("WAWebMediaEditorUtilsFilterType").FilterType.FILM:
          return s._(/*BTDS*/ "Film");
      }
    }
    function d(e) {
      switch (e) {
        case o("WAWebMediaEditorUtilsFilterType").FilterType.NONE:
        case o("WAWebMediaEditorUtilsFilterType").FilterType.POP:
        case o("WAWebMediaEditorUtilsFilterType").FilterType.CHROME:
        case o("WAWebMediaEditorUtilsFilterType").FilterType.FILM:
          return [
            r("konva").Filters.Brighten,
            r("konva").Filters.Contrast,
            r("konva").Filters.Enhance,
          ];
        case o("WAWebMediaEditorUtilsFilterType").FilterType.BW:
          return [
            r("konva").Filters.Brighten,
            r("konva").Filters.Contrast,
            r("konva").Filters.Enhance,
            r("konva").Filters.Grayscale,
          ];
        case o("WAWebMediaEditorUtilsFilterType").FilterType.COOL:
          return [
            r("konva").Filters.Brighten,
            r("konva").Filters.Contrast,
            r("konva").Filters.Enhance,
            r("konva").Filters.HSV,
            r("konva").Filters.RGBA,
          ];
      }
    }
    function m(e) {
      switch (e) {
        case o("WAWebMediaEditorUtilsFilterType").FilterType.NONE:
          return { brightness: 0, contrast: 0, enhance: 0 };
        case o("WAWebMediaEditorUtilsFilterType").FilterType.POP:
          return { brightness: 0.1, contrast: 4, enhance: 0.5 };
        case o("WAWebMediaEditorUtilsFilterType").FilterType.BW:
          return { brightness: 0.1, contrast: 0.1, enhance: 0.1 };
        case o("WAWebMediaEditorUtilsFilterType").FilterType.COOL:
          return {
            brightness: -0.1,
            contrast: -5,
            enhance: 1,
            saturation: -0.5,
            value: 0.1,
            red: 50,
            green: 160,
            blue: 255,
            alpha: 0.2,
          };
        case o("WAWebMediaEditorUtilsFilterType").FilterType.CHROME:
          return {
            brightness: 0.1,
            contrast: 15,
            enhance: 0.1,
            overlay: "#11053b",
            composition: "screen",
          };
        case o("WAWebMediaEditorUtilsFilterType").FilterType.FILM:
          return {
            brightness: 0.1,
            contrast: 4,
            enhance: 0.5,
            overlay: "#002e7a",
            composition: "screen",
          };
      }
    }
    ((l.IMAGE_DIMENSION = e),
      (l.getAllFilters = u),
      (l.getFilterValue = c),
      (l.getKonvaFilters = d),
      (l.getFilterPresets = m));
  },
  226,
);
