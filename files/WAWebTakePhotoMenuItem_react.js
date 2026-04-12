__d(
  "WAWebTakePhotoMenuItem.react",
  [
    "fbt",
    "WAWebDropdownItem.react",
    "WAWebEditCaptureFlowLoadable",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebProfileCropTool.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.editCropShape,
        n = e.icon,
        r = e.modalTheme,
        a = e.onImageTake,
        i = function (i) {
          (e.action != null && e.action(i),
            o("WAWebModalManager").ModalManager.openSupportModal(
              u.jsx(o("WAWebEditCaptureFlowLoadable").EditCaptureFlowLoadable, {
                onFinished: a,
                editCropShape:
                  t || o("WAWebProfileCropTool.react").CropShapeType.CIRCLE,
                modalTheme: r || o("WAWebModal.react").ModalTheme.Box,
              }),
            ));
        };
      return u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
        action: i,
        testid: void 0,
        disabled: e.disabled,
        icon: n,
        children: s._(/*BTDS*/ "Take photo"),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
