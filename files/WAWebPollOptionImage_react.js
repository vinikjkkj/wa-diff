__d(
  "WAWebPollOptionImage.react",
  [
    "WAWebImg.react",
    "WAWebMediaDataUtils",
    "WAWebMediaUrlProvider",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumWebcRmrReasonCode",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        thumbContainer: {
          borderStartStartRadius: "xr9w4p7",
          borderStartEndRadius: "x7f0h72",
          borderEndEndRadius: "x1nug9m2",
          borderEndStartRadius: "x18qtlnh",
          $$css: !0,
        },
        small: { width: "x100vrsf", height: "x1vqgdyp", $$css: !0 },
        large: { width: "x15yg21f", height: "xnnlda6", $$css: !0 },
        thumb: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          backgroundRepeat: "xiy17q3",
          backgroundPosition: "x1xsqp64",
          backgroundSize: "x18d0r48",
          objectFit: "xl1xv1r",
          $$css: !0,
        },
        placeholderIcon: { width: "xh8yej3", height: "x5yr21d", $$css: !0 },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(5),
        a = t.src,
        i = t.xstyle,
        l;
      n[0] !== i
        ? ((l = (e || (e = r("stylex")))(i)), (n[0] = i), (n[1] = l))
        : (l = n[1]);
      var s;
      return (
        n[2] !== a || n[3] !== l
          ? ((s = u.jsx(r("WAWebImg.react"), {
              className: l,
              src: a,
              disableContextMenu: !0,
            })),
            (n[2] = a),
            (n[3] = l),
            (n[4] = s))
          : (s = n[4]),
        s
      );
    }
    function m(t) {
      var n = o("react-compiler-runtime").c(7),
        a = t.mediaData,
        i = t.xstyle,
        l;
      n[0] !== i
        ? ((l = (e || (e = r("stylex")))(i)), (n[0] = i), (n[1] = l))
        : (l = n[1]);
      var s;
      if (n[2] !== a) {
        var c;
        ((s =
          (c = o("WAWebMediaDataUtils").getHighestQualityThumbnailUrl(a)) !=
          null
            ? c
            : ""),
          (n[2] = a),
          (n[3] = s));
      } else s = n[3];
      var d;
      return (
        n[4] !== l || n[5] !== s
          ? ((d = u.jsx(r("WAWebImg.react"), { className: l, src: s })),
            (n[4] = l),
            (n[5] = s),
            (n[6] = d))
          : (d = n[6]),
        d
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.msg,
        a = e.onClick,
        i = e.size,
        l = n.mediaData,
        s = i === "small" ? c.small : c.large,
        p;
      t[0] !== n
        ? ((p = function () {
            return n.downloadMedia({
              downloadEvenIfExpensive: !0,
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .MSG_RENDER,
              isUserInitiated: !0,
            });
          }),
          (t[0] = n),
          (t[1] = p))
        : (p = t[1]);
      var _ = p,
        f;
      t[2] !== l || t[3] !== s
        ? ((f = function () {
            return u.jsx(m, {
              xstyle: [c.thumbContainer, s, c.thumb, c.placeholderIcon],
              mediaData: l,
            });
          }),
          (t[2] = l),
          (t[3] = s),
          (t[4] = f))
        : (f = t[4]);
      var g;
      t[5] !== s
        ? ((g = function (t) {
            return u.jsx(d, { xstyle: [c.thumbContainer, s, c.thumb], src: t });
          }),
          (t[5] = s),
          (t[6] = g))
        : (g = t[6]);
      var h;
      t[7] !== _ || t[8] !== l || t[9] !== f || t[10] !== g
        ? ((h = u.jsx(r("WAWebMediaUrlProvider"), {
            mediaData: l,
            placeholderRenderer: f,
            downloadMedia: _,
            renderProgressively: !0,
            children: g,
          })),
          (t[7] = _),
          (t[8] = l),
          (t[9] = f),
          (t[10] = g),
          (t[11] = h))
        : (h = t[11]);
      var y;
      return (
        t[12] !== a || t[13] !== s || t[14] !== h
          ? ((y = u.jsx(r("WAWebUnstyledButton.react"), {
              xstyle: s,
              onClick: a,
              children: h,
            })),
            (t[12] = a),
            (t[13] = s),
            (t[14] = h),
            (t[15] = y))
          : (y = t[15]),
        y
      );
    }
    l.default = p;
  },
  98,
);
