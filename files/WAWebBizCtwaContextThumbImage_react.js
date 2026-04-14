__d(
  "WAWebBizCtwaContextThumbImage.react",
  ["WAWebBizGatingUtils", "WAWebClassnames", "WDSIconIcLink.react", "react"],
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
      var t = e.className,
        n = e.context,
        a = u(!1),
        i = a[0],
        l = a[1],
        p =
          (n == null ? void 0 : n.isSuspiciousLink) === !0 ||
          ((n == null ? void 0 : n.thumbnailUrl) == null &&
            (n == null ? void 0 : n.thumbnail) == null),
        _ = function () {
          return l(!0);
        },
        f = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          {
            0: "x1c4vz4f x2lah0s xdl72j9 x1hcvz70 x1v6ow93 xkzwgj6 x1e2x2q",
            1: "x1c4vz4f x2lah0s xdl72j9 x1hcvz70 x1v6ow93 xkzwgj6 x1e2x2q x14tgpju",
          }[!!(i || (n == null ? void 0 : n.thumbnailUrl) == null) << 0],
          t,
        ),
        g = i ? d(n) : m(n);
      if (p || !g) {
        var h = {
          0: "x1n2onr6 x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k x1hcvz70 xkzwgj6 x1280gxy x1ypdohk",
          1: "x1n2onr6 x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k xkzwgj6 x1280gxy x1ypdohk xh8yej3",
        }[!!o("WAWebBizGatingUtils").isAdsAttributionEnabled() << 0];
        return s.jsx("div", {
          className: h,
          children: s.jsx(r("WDSIconIcLink.react"), {
            testid: void 0,
            xstyle: c.noThumbIcon,
          }),
        });
      }
      return s.jsx("img", { onError: _, alt: "", className: f, src: g });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.generateThumbSrcFromData = d),
      (l.getInitialThumbSource = m),
      (l.CtwaContextThumbImage = p));
  },
  98,
);
