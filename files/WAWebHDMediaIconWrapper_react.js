__d(
  "WAWebHDMediaIconWrapper.react",
  [
    "WAWebHDMediaUtils",
    "WAWebMediaGatingUtils",
    "WAWebMediaTypes",
    "WAWebMsgVideoIcon.react",
    "WAWebWdsIcHdFilledIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        icon: {
          color: "xlikyye",
          width: "xw4jnvo",
          height: "x1qx5ct2",
          opacity: "x1iy03kw",
          $$css: !0,
        },
      };
    function c(e) {
      var t = e.height,
        n = e.type,
        r = e.width,
        a = e.xstyle;
      switch (n) {
        case o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE: {
          if (
            o("WAWebHDMediaUtils").isHdPhoto(t, r) &&
            o("WAWebMediaGatingUtils").isReceiveHQPhotoEnabled()
          )
            return s.jsx(o("WAWebWdsIcHdFilledIcon.react").WdsIcHdFilledIcon, {
              xstyle: a,
              iconXstyle: u.icon,
            });
          break;
        }
        case o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO:
          return o("WAWebHDMediaUtils").isHdVideo(t, r)
            ? s.jsx(o("WAWebWdsIcHdFilledIcon.react").WdsIcHdFilledIcon, {
                xstyle: a,
                iconXstyle: u.icon,
              })
            : s.jsx(o("WAWebMsgVideoIcon.react").MsgVideoIcon, {});
      }
      return null;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
