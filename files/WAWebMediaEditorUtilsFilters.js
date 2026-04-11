__d(
  "WAWebMediaEditorUtilsFilters",
  ["fbt", "$InternalEnum", "konva"],
  function (t, n, r, o, a, i, l, s) {
    var e = 48,
      u = n("$InternalEnum").Mirrored([
        "NONE",
        "POP",
        "BW",
        "COOL",
        "CHROME",
        "FILM",
      ]);
    function c() {
      return Array.from(u.members());
    }
    function d(e) {
      switch (e) {
        case u.NONE:
          return s._(/*BTDS*/ "None");
        case u.POP:
          return s._(/*BTDS*/ "Pop");
        case u.BW:
          return s._(/*BTDS*/ "B&W");
        case u.COOL:
          return s._(/*BTDS*/ "Cool");
        case u.CHROME:
          return s._(/*BTDS*/ "Chrome");
        case u.FILM:
          return s._(/*BTDS*/ "Film");
      }
    }
    function m(e) {
      switch (e) {
        case u.NONE:
        case u.POP:
        case u.CHROME:
        case u.FILM:
          return [
            r("konva").Filters.Brighten,
            r("konva").Filters.Contrast,
            r("konva").Filters.Enhance,
          ];
        case u.BW:
          return [
            r("konva").Filters.Brighten,
            r("konva").Filters.Contrast,
            r("konva").Filters.Enhance,
            r("konva").Filters.Grayscale,
          ];
        case u.COOL:
          return [
            r("konva").Filters.Brighten,
            r("konva").Filters.Contrast,
            r("konva").Filters.Enhance,
            r("konva").Filters.HSV,
            r("konva").Filters.RGBA,
          ];
      }
    }
    function p(e) {
      switch (e) {
        case u.NONE:
          return { brightness: 0, contrast: 0, enhance: 0 };
        case u.POP:
          return { brightness: 0.1, contrast: 4, enhance: 0.5 };
        case u.BW:
          return { brightness: 0.1, contrast: 0.1, enhance: 0.1 };
        case u.COOL:
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
        case u.CHROME:
          return {
            brightness: 0.1,
            contrast: 15,
            enhance: 0.1,
            overlay: "#11053b",
            composition: "screen",
          };
        case u.FILM:
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
      (l.FilterType = u),
      (l.getAllFilters = c),
      (l.getFilterValue = d),
      (l.getKonvaFilters = m),
      (l.getFilterPresets = p));
  },
  226,
);
