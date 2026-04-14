__d(
  "WAWebEditImageModal.react",
  [
    "fbt",
    "WAWebEditImageDrawer.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.cropShape,
        n = e.img,
        r = e.onFinished,
        a = e.onRetake,
        i = e.theme,
        l = function () {
          o("WAWebModalManager").ModalManager.closeSupportOrModal();
        },
        c = function (t, n) {
          (r(t, n), o("WAWebModalManager").ModalManager.closeSupportOrModal());
        };
      return u.jsx(o("WAWebModal.react").Modal, {
        type: i,
        ariaLabel: s._(/*BTDS*/ "Drag the image to adjust"),
        testid: void 0,
        children: u.jsx(o("WAWebEditImageDrawer.react").EditImageDrawer, {
          onCancel: l,
          onFinished: c,
          onRetake: a,
          retryText: o("WAWebEditImageDrawer.react").RETRY_OPTIONS.RESTART,
          img: n,
          cropShape: t || void 0,
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
