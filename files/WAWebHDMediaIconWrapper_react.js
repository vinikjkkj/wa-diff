__d(
  "WAWebHDMediaIconWrapper.react",
  [
    "WAWebHDMediaUtils",
    "WAWebMediaGatingUtils",
    "WAWebMediaTypes",
    "WAWebMsgVideoIcon.react",
    "WAWebWdsIcHdFilledIcon.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(5),
        n = e.height,
        r = e.type,
        a = e.width,
        i = e.xstyle;
      e: switch (r) {
        case o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE: {
          if (
            o("WAWebHDMediaUtils").isHdPhoto(n, a) &&
            o("WAWebMediaGatingUtils").isReceiveHQPhotoEnabled()
          ) {
            var l;
            return (
              t[0] !== i
                ? ((l = s.jsx(
                    o("WAWebWdsIcHdFilledIcon.react").WdsIcHdFilledIcon,
                    { xstyle: i, iconXstyle: u.icon },
                  )),
                  (t[0] = i),
                  (t[1] = l))
                : (l = t[1]),
              l
            );
          }
          break e;
        }
        case o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO: {
          if (o("WAWebHDMediaUtils").isHdVideo(n, a)) {
            var c;
            return (
              t[2] !== i
                ? ((c = s.jsx(
                    o("WAWebWdsIcHdFilledIcon.react").WdsIcHdFilledIcon,
                    { xstyle: i, iconXstyle: u.icon },
                  )),
                  (t[2] = i),
                  (t[3] = c))
                : (c = t[3]),
              c
            );
          }
          var d;
          return (
            t[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = s.jsx(o("WAWebMsgVideoIcon.react").MsgVideoIcon, {})),
                (t[4] = d))
              : (d = t[4]),
            d
          );
        }
      }
      return null;
    }
    l.default = c;
  },
  98,
);
