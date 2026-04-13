__d(
  "WAWebBizCtwaContextThumbImage.react",
  [
    "WAWebBizGatingUtils",
    "WAWebClassnames",
    "WDSIconIcLink.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = { noThumbIcon: { color: "xqa0p2g", $$css: !0 } },
      d = function (t) {
        return (t == null ? void 0 : t.thumbnail) != null
          ? "data:image/jpeg;base64," + t.thumbnail
          : "";
      },
      m = function (t) {
        if (t) {
          if (t.thumbnailUrl != null) return t.thumbnailUrl;
        } else return "";
        return d(t);
      };
    function p(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.className,
        a = e.context,
        i = u(!1),
        l = i[0],
        p = i[1],
        _ =
          (a == null ? void 0 : a.isSuspiciousLink) === !0 ||
          ((a == null ? void 0 : a.thumbnailUrl) == null &&
            (a == null ? void 0 : a.thumbnail) == null),
        f;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function () {
            return p(!0);
          }),
          (t[0] = f))
        : (f = t[0]);
      var g = f,
        h;
      t[1] !== n || t[2] !== (a == null ? void 0 : a.thumbnailUrl) || t[3] !== l
        ? ((h = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            {
              0: "x1c4vz4f x2lah0s xdl72j9 x1hcvz70 x1v6ow93 xkzwgj6 x1e2x2q",
              1: "x1c4vz4f x2lah0s xdl72j9 x1hcvz70 x1v6ow93 xkzwgj6 x1e2x2q x14tgpju",
            }[!!(l || (a == null ? void 0 : a.thumbnailUrl) == null) << 0],
            n,
          )),
          (t[1] = n),
          (t[2] = a == null ? void 0 : a.thumbnailUrl),
          (t[3] = l),
          (t[4] = h))
        : (h = t[4]);
      var y = h,
        C;
      t[5] !== a || t[6] !== l
        ? ((C = l ? d(a) : m(a)), (t[5] = a), (t[6] = l), (t[7] = C))
        : (C = t[7]);
      var b = C;
      if (_ || !b) {
        var v;
        t[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = {
              0: "x1n2onr6 x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k x1hcvz70 xkzwgj6 x1280gxy x1ypdohk",
              1: "x1n2onr6 x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k xkzwgj6 x1280gxy x1ypdohk xh8yej3",
            }[!!o("WAWebBizGatingUtils").isAdsAttributionEnabled() << 0]),
            (t[8] = v))
          : (v = t[8]);
        var S = v,
          R;
        t[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = s.jsx(r("WDSIconIcLink.react"), {
              testid: void 0,
              xstyle: c.noThumbIcon,
            })),
            (t[9] = R))
          : (R = t[9]);
        var L;
        return (
          t[10] !== S
            ? ((L = s.jsx("div", { className: S, children: R })),
              (t[10] = S),
              (t[11] = L))
            : (L = t[11]),
          L
        );
      }
      var E;
      return (
        t[12] !== y || t[13] !== b
          ? ((E = s.jsx("img", { onError: g, alt: "", className: y, src: b })),
            (t[12] = y),
            (t[13] = b),
            (t[14] = E))
          : (E = t[14]),
        E
      );
    }
    ((l.generateThumbSrcFromData = d),
      (l.getInitialThumbSource = m),
      (l.CtwaContextThumbImage = p));
  },
  98,
);
