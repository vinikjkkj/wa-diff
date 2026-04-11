__d(
  "WAWebEditedMedia",
  ["WAWebFileUtils", "WAWebURLUtils", "lodash"],
  function (t, n, r, o, a, i, l) {
    var e = function e(t, n, a, i) {
      var l = this;
      ((this.updateEditData = function (e) {
        (l.saveEdits(), (l.editData = r("lodash").merge({}, l.editData, e)));
      }),
        (this.updateEditItems = function (e, t) {
          l.saveEdits();
          var n = [];
          (l.editData.items &&
            l.editData.items.forEach(function (e) {
              e !== t && n.push(e);
            }),
            n.push(e),
            (l.editData.items = n));
        }),
        (this.saveEdits = function () {
          var t = new e(l.media, l.originalImage, l.editData, l.previous);
          l.previous = t;
        }),
        (this.revertEdit = function () {
          l.previous &&
            ((l.editData = l.previous.editData),
            (l.previous = l.previous.previous));
        }),
        (this.saveEditsFromCanvas = function (e) {
          var t = e.toDataURL();
          (l.editedImage || (l.editedImage = new Image()),
            (l.editedImage.src = t));
        }),
        (this.exportEditedMedia = function () {
          if (l.hasEdits() && l.editedImage) {
            var e = l.editedImage.src;
            return r("WAWebURLUtils").dataURLtoFile(e);
          } else if (l.media instanceof File) return l.media;
          return o("WAWebFileUtils").createFile([l.media], "", {
            type: l.media.type,
          });
        }),
        (this.hasEdits = function () {
          return !!l.previous && l.editedImage;
        }),
        (this.cleanUp = function () {
          window.URL.revokeObjectURL(l.originalImage.src);
        }),
        (this.media = t),
        n
          ? (this.originalImage = n)
          : ((this.originalImage = new Image()),
            (this.originalImage.src = window.URL.createObjectURL(t))),
        (this.previous = i),
        (this.editData = {
          height: 0,
          width: 0,
          offsetX: 0,
          offsetY: 0,
          rotation: 0,
          scale: 1,
          items: [],
          baseItem: null,
        }),
        r("lodash").merge(this.editData, a));
    };
    l.default = e;
  },
  98,
);
