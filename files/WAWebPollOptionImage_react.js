__d(
  "WAWebPollOptionImage.react",
  [
    "WAWebImg.react",
    "WAWebMediaDataUtils",
    "WAWebMediaUrlProvider",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumWebcRmrReasonCode",
    "react",
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
      var n = t.src,
        o = t.xstyle;
      return u.jsx(r("WAWebImg.react"), {
        className: (e || (e = r("stylex")))(o),
        src: n,
        disableContextMenu: !0,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(t) {
      var n,
        a = t.mediaData,
        i = t.xstyle;
      return u.jsx(r("WAWebImg.react"), {
        className: (e || (e = r("stylex")))(i),
        src:
          (n = o("WAWebMediaDataUtils").getHighestQualityThumbnailUrl(a)) !=
          null
            ? n
            : "",
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.msg,
        n = e.onClick,
        a = e.size,
        i = t.mediaData,
        l = a === "small" ? c.small : c.large,
        s = function () {
          return t.downloadMedia({
            downloadEvenIfExpensive: !0,
            rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
              .MSG_RENDER,
            isUserInitiated: !0,
          });
        };
      return u.jsx(r("WAWebUnstyledButton.react"), {
        xstyle: l,
        onClick: n,
        children: u.jsx(r("WAWebMediaUrlProvider"), {
          mediaData: i,
          placeholderRenderer: function () {
            return u.jsx(m, {
              xstyle: [c.thumbContainer, l, c.thumb, c.placeholderIcon],
              mediaData: i,
            });
          },
          downloadMedia: s,
          renderProgressively: !0,
          children: function (t) {
            return u.jsx(d, { xstyle: [c.thumbContainer, l, c.thumb], src: t });
          },
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
