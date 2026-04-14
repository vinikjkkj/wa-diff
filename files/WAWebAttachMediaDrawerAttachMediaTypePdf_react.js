__d(
  "WAWebAttachMediaDrawerAttachMediaTypePdf.react",
  [
    "fbt",
    "WAWebAttachMediaDrawerAttachMediaTypeFile.react",
    "WAWebObjectFit.react",
    "fbs",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.filename,
        n = e.fullPreview,
        o = e.fullPreviewSize,
        a = e.mimeType,
        i = e.pageCount,
        l = e.showBorder,
        c = l === void 0 ? !1 : l,
        d = e.showPageCount,
        m = d === void 0 ? !0 : d;
      if (n != null && o != null && i != null && i > 0) {
        var p = s._(/*BTDS*/ '_j{"*":"{number} pages","_1":"1 page"}', [
          s._plural(i, "number"),
        ]);
        return u.jsxs("div", {
          className:
            "x9f619 x78zum5 xdt5ytf xh8yej3 x5yr21d x1h678fw xcldk2z xv6tirj x1phvje8",
          "data-js-attach-preview": !0,
          children: [
            u.jsx("div", {
              className: "x1n2onr6 x1gebrk9",
              children: u.jsx(r("WAWebObjectFit.react"), {
                type: "scaleDown",
                size: o,
                children: u.jsx(
                  "img",
                  babelHelpers.extends(
                    { alt: r("fbs")._(/*BTDS*/ "Preview"), src: n },
                    {
                      0: { className: "xhtitgo xh8yej3 x5yr21d" },
                      1: {
                        className:
                          "x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xohxato x1of651i x1lcapj5 xeiadmc xyi3aci xwf5gio x1p453bz x1suzm8a x1it3r9l xhtitgo xh8yej3 x5yr21d",
                      },
                    }[!!c << 0],
                  ),
                ),
              }),
            }),
            m &&
              u.jsx("div", {
                className: "x1okw0bk x2b8uid x1nmyh1g",
                children: p,
              }),
          ],
        });
      }
      return u.jsx(r("WAWebAttachMediaDrawerAttachMediaTypeFile.react"), {
        mimeType: a,
        filename: t,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
