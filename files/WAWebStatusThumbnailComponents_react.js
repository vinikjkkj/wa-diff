__d(
  "WAWebStatusThumbnailComponents.react",
  [
    "WAWebAudioWaveThumbIcon.react",
    "WAWebMediaThumbnail.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebStatusText.react",
    "WAWebWid",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        statusImage: {
          backgroundPosition: "x1xsqp64",
          backgroundRepeat: "xiy17q3",
          backgroundSize: "x18d0r48",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        statusImageFallbackBackground: {
          backgroundColor: "xkfcepe",
          $$css: !0,
        },
        textThumb: { position: "x1n2onr6", $$css: !0 },
        thumbContainer: { $$css: !0 },
        smallStatusImage: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        smallThumbContainer: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        smallSize: { height: "x1vqgdyp", width: "x100vrsf", $$css: !0 },
        largeStatusImage: {
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          $$css: !0,
        },
        largeThumbContainer: {
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          $$css: !0,
        },
        largeSize: { height: "x5yr21d", width: "xh8yej3", $$css: !0 },
      };
    function d(e) {
      return e === "small"
        ? {
            statusImageXstyle: c.smallStatusImage,
            thumbContainerXstyle: c.smallThumbContainer,
            sizeXstyle: c.smallSize,
          }
        : {
            statusImageXstyle: c.largeStatusImage,
            thumbContainerXstyle: c.largeThumbContainer,
            sizeXstyle: c.largeSize,
          };
    }
    function m(t) {
      var n = t.msg,
        a = t.size,
        i = t.thumbnailStyles,
        l = i.sizeXstyle,
        s = i.statusImageXstyle,
        d = a === "large" ? "status-carousel" : "status-thumbnail";
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(c.statusImage, s, l),
          {
            style: {
              backgroundColor: o("WAWebMsgGetters").getStatusCanvasColor(n),
            },
            children: u.jsx(
              "div",
              babelHelpers.extends({}, e.props(c.textThumb, l), {
                children: u.jsx(r("WAWebStatusText.react"), {
                  msg: n,
                  theme: d,
                }),
              }),
            ),
          },
        ),
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(t) {
      var n = t.msg,
        a = t.thumbnailStyles,
        i = a.sizeXstyle,
        l = a.statusImageXstyle;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(c.statusImage, l, i),
          {
            style: {
              backgroundColor: o("WAWebMsgGetters").getStatusCanvasColor(n),
            },
            children: u.jsx(
              o("WAWebAudioWaveThumbIcon.react").AudioWaveThumbIcon,
              { iconXstyle: i },
            ),
          },
        ),
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(t) {
      var n = t.msg,
        a = t.size,
        i = t.thumbnailPlaceholder,
        l = d(a),
        s = l.sizeXstyle,
        _ = l.statusImageXstyle,
        f = l.thumbContainerXstyle;
      if (n) {
        if (r("WAWebWid").isPSA(o("WAWebMsgGetters").getSender(n)))
          return u.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                c.thumbContainer,
                c.statusImageFallbackBackground,
                f,
                s,
              ),
              { children: i },
            ),
          );
        var g = u.jsx(r("WAWebMediaThumbnail.react"), {
          containerClassName: (e || (e = r("stylex")))(
            c.thumbContainer,
            c.statusImageFallbackBackground,
            f,
            s,
          ),
          childClassName: e(c.statusImage, _, s),
          msg: n,
          thumbnailPlaceholder: i,
        });
        switch (n.type) {
          case o("WAWebMsgType").MSG_TYPE.CHAT:
            return u.jsx(m, { msg: n, size: a, thumbnailStyles: l });
          case o("WAWebMsgType").MSG_TYPE.PTT:
          case o("WAWebMsgType").MSG_TYPE.AUDIO:
            return u.jsx(p, { msg: n, thumbnailStyles: l });
          default:
            return g;
        }
      }
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            c.statusImage,
            c.statusImageFallbackBackground,
            _,
            s,
          ),
        ),
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.StatusMsgThumbnail = _));
  },
  98,
);
