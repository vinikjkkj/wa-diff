__d(
  "WAWebAttachMenuPopupItemCamera.react",
  [
    "WAWebAttachMenuPopupItem.react",
    "WAWebAttachMenuStrings",
    "WAWebAttachmentMenuLogger",
    "WDSIconIcPhotoCameraFilled.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { refreshedIcon: { color: "x1cbnkk4", $$css: !0 } };
    function c(e) {
      var t = e.chat,
        n = e.onCaptureClick,
        a = function () {
          (n(),
            o(
              "WAWebAttachmentMenuLogger",
            ).AttachmentMenuLogger.logAttachMenuClick(
              t,
              o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CAMERA,
            ));
        },
        i = function () {
          return (a(), !0);
        };
      return s.jsx(r("WAWebAttachMenuPopupItem.react"), {
        testid: void 0,
        action: i,
        onPress: a,
        Icon: r("WDSIconIcPhotoCameraFilled.react"),
        iconXstyle: u.refreshedIcon,
        text: o("WAWebAttachMenuStrings").CameraText(),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
