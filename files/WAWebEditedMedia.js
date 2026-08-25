__d(
  "WAWebEditedMedia",
  ["WAWebCreateFile", "WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    var e = function e(t) {
      var n = this,
        a = t.editData,
        i = t.media,
        l = t.originalImage,
        s = t.previous;
      ((this.updateEditData = function (e) {
        (n.saveEdits(), (n.editData = babelHelpers.extends({}, n.editData, e)));
      }),
        (this.updateEditItems = function (e, t) {
          n.saveEdits();
          var r = [];
          (n.editData.items &&
            n.editData.items.forEach(function (e) {
              e !== t && r.push(e);
            }),
            r.push(e),
            (n.editData.items = r));
        }),
        (this.saveEdits = function () {
          var t = new e({
            editData: n.editData,
            media: n.media,
            originalImage: n.originalImage,
            previous: n.previous,
          });
          n.previous = t;
        }),
        (this.revertEdit = function () {
          n.previous &&
            ((n.editData = n.previous.editData),
            (n.previous = n.previous.previous));
        }),
        (this.saveEditsFromCanvas = function (e) {
          var t = e.toDataURL();
          (n.editedImage || (n.editedImage = new Image()),
            (n.editedImage.src = t));
        }),
        (this.exportEditedMedia = function () {
          if (n.hasEdits() && n.editedImage) {
            var e = n.editedImage.src;
            return r("WAWebURLUtils").dataURLtoFile(e);
          } else if (n.media instanceof File) return n.media;
          return o("WAWebCreateFile").createFile([n.media], "", {
            type: n.media.type,
          });
        }),
        (this.hasEdits = function () {
          return !!n.previous && n.editedImage;
        }),
        (this.cleanUp = function () {
          window.URL.revokeObjectURL(n.originalImage.src);
        }),
        (this.media = i),
        l
          ? (this.originalImage = l)
          : ((this.originalImage = new Image()),
            (this.originalImage.src = window.URL.createObjectURL(i))),
        (this.previous = s),
        (this.editData = babelHelpers.extends(
          {
            height: 0,
            width: 0,
            offsetX: 0,
            offsetY: 0,
            rotation: 0,
            scale: 1,
            items: [],
            baseItem: null,
          },
          a != null ? a : {},
        )));
    };
    l.default = e;
  },
  98,
);
