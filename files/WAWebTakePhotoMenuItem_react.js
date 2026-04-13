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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.editCropShape,
        r = e.icon,
        a = e.modalTheme,
        i = e.onImageTake,
        l;
      t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== e
        ? ((l = function (r) {
            (e.action != null && e.action(r),
              o("WAWebModalManager").ModalManager.openSupportModal(
                u.jsx(
                  o("WAWebEditCaptureFlowLoadable").EditCaptureFlowLoadable,
                  {
                    onFinished: i,
                    editCropShape:
                      n || o("WAWebProfileCropTool.react").CropShapeType.CIRCLE,
                    modalTheme: a || o("WAWebModal.react").ModalTheme.Box,
                  },
                ),
              ));
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = e),
          (t[4] = l))
        : (l = t[4]);
      var c = l,
        d = e.disabled,
        m;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Take photo")), (t[5] = m))
        : (m = t[5]);
      var p;
      return (
        t[6] !== c || t[7] !== r || t[8] !== e.disabled
          ? ((p = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
              action: c,
              testid: void 0,
              disabled: d,
              icon: r,
              children: m,
            })),
            (t[6] = c),
            (t[7] = r),
            (t[8] = e.disabled),
            (t[9] = p))
          : (p = t[9]),
        p
      );
    }
    l.default = c;
  },
  226,
);
