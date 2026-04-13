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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(19),
        a = t.msg,
        i = t.size,
        l = t.thumbnailStyles,
        s = l.sizeXstyle,
        d = l.statusImageXstyle,
        m = i === "large" ? "status-carousel" : "status-thumbnail",
        p;
      n[0] !== s || n[1] !== d
        ? ((p = (e || (e = r("stylex"))).props(c.statusImage, d, s)),
          (n[0] = s),
          (n[1] = d),
          (n[2] = p))
        : (p = n[2]);
      var _;
      n[3] !== a
        ? ((_ = o("WAWebMsgGetters").getStatusCanvasColor(a)),
          (n[3] = a),
          (n[4] = _))
        : (_ = n[4]);
      var f;
      n[5] !== _
        ? ((f = { backgroundColor: _ }), (n[5] = _), (n[6] = f))
        : (f = n[6]);
      var g;
      n[7] !== s
        ? ((g = (e || (e = r("stylex"))).props(c.textThumb, s)),
          (n[7] = s),
          (n[8] = g))
        : (g = n[8]);
      var h;
      n[9] !== a || n[10] !== m
        ? ((h = u.jsx(r("WAWebStatusText.react"), { msg: a, theme: m })),
          (n[9] = a),
          (n[10] = m),
          (n[11] = h))
        : (h = n[11]);
      var y;
      n[12] !== g || n[13] !== h
        ? ((y = u.jsx("div", babelHelpers.extends({}, g, { children: h }))),
          (n[12] = g),
          (n[13] = h),
          (n[14] = y))
        : (y = n[14]);
      var C;
      return (
        n[15] !== p || n[16] !== f || n[17] !== y
          ? ((C = u.jsx(
              "div",
              babelHelpers.extends({}, p, { style: f, children: y }),
            )),
            (n[15] = p),
            (n[16] = f),
            (n[17] = y),
            (n[18] = C))
          : (C = n[18]),
        C
      );
    }
    function p(t) {
      var n = o("react-compiler-runtime").c(13),
        a = t.msg,
        i = t.thumbnailStyles,
        l = i.sizeXstyle,
        s = i.statusImageXstyle,
        d;
      n[0] !== l || n[1] !== s
        ? ((d = (e || (e = r("stylex"))).props(c.statusImage, s, l)),
          (n[0] = l),
          (n[1] = s),
          (n[2] = d))
        : (d = n[2]);
      var m;
      n[3] !== a
        ? ((m = o("WAWebMsgGetters").getStatusCanvasColor(a)),
          (n[3] = a),
          (n[4] = m))
        : (m = n[4]);
      var p;
      n[5] !== m
        ? ((p = { backgroundColor: m }), (n[5] = m), (n[6] = p))
        : (p = n[6]);
      var _;
      n[7] !== l
        ? ((_ = u.jsx(o("WAWebAudioWaveThumbIcon.react").AudioWaveThumbIcon, {
            iconXstyle: l,
          })),
          (n[7] = l),
          (n[8] = _))
        : (_ = n[8]);
      var f;
      return (
        n[9] !== d || n[10] !== p || n[11] !== _
          ? ((f = u.jsx(
              "div",
              babelHelpers.extends({}, d, { style: p, children: _ }),
            )),
            (n[9] = d),
            (n[10] = p),
            (n[11] = _),
            (n[12] = f))
          : (f = n[12]),
        f
      );
    }
    function _(t) {
      var n = o("react-compiler-runtime").c(7),
        a = t.msg,
        i = t.size,
        l = t.thumbnailPlaceholder,
        s,
        _;
      if (n[0] !== a || n[1] !== i || n[2] !== l) {
        _ = Symbol.for("react.early_return_sentinel");
        e: {
          var f = d(i),
            g = f.sizeXstyle,
            h = f.statusImageXstyle,
            y = f.thumbContainerXstyle;
          if (a) {
            if (r("WAWebWid").isPSA(o("WAWebMsgGetters").getSender(a))) {
              _ = u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    c.thumbContainer,
                    c.statusImageFallbackBackground,
                    y,
                    g,
                  ),
                  { children: l },
                ),
              );
              break e;
            }
            var C = u.jsx(r("WAWebMediaThumbnail.react"), {
              containerClassName: (e || (e = r("stylex")))(
                c.thumbContainer,
                c.statusImageFallbackBackground,
                y,
                g,
              ),
              childClassName: e(c.statusImage, h, g),
              msg: a,
              thumbnailPlaceholder: l,
            });
            switch (a.type) {
              case o("WAWebMsgType").MSG_TYPE.CHAT: {
                _ = u.jsx(m, { msg: a, size: i, thumbnailStyles: f });
                break e;
              }
              case o("WAWebMsgType").MSG_TYPE.PTT:
              case o("WAWebMsgType").MSG_TYPE.AUDIO: {
                _ = u.jsx(p, { msg: a, thumbnailStyles: f });
                break e;
              }
              default: {
                _ = C;
                break e;
              }
            }
          }
          s = (e || (e = r("stylex"))).props(
            c.statusImage,
            c.statusImageFallbackBackground,
            h,
            g,
          );
        }
        ((n[0] = a), (n[1] = i), (n[2] = l), (n[3] = s), (n[4] = _));
      } else ((s = n[3]), (_ = n[4]));
      if (_ !== Symbol.for("react.early_return_sentinel")) return _;
      var b;
      return (
        n[5] !== s
          ? ((b = u.jsx("div", babelHelpers.extends({}, s))),
            (n[5] = s),
            (n[6] = b))
          : (b = n[6]),
        b
      );
    }
    l.StatusMsgThumbnail = _;
  },
  98,
);
