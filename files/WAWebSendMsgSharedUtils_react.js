__d(
  "WAWebSendMsgSharedUtils.react",
  [
    "WAAsConsumerApplication",
    "WAWebImageIcon.react",
    "WAWebVideoPlaceholderIcon.react",
    "WDSIconIcDescription.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        placeholderIcon: { width: "xh8yej3", height: "x5yr21d", $$css: !0 },
        documentIcon: { height: "xng8ra", width: "x1247r65", $$css: !0 },
        thumbContainer: {
          width: "x46vnbo",
          height: "x11daxxc",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x2ubtbe",
          borderInlineEndColor: "x1fwa7gd",
          borderBottomColor: "x1esgvb3",
          borderInlineStartColor: "x17vd3jm",
          $$css: !0,
        },
        thumb: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          backgroundRepeat: "xiy17q3",
          backgroundPosition: "x1xsqp64",
          backgroundSize: "x18d0r48",
          $$css: !0,
        },
        marginEnd8: { marginInlineEnd: "xqf2s3x", $$css: !0 },
      };
    function d(e) {
      var t = e.file,
        n = p(t) || _(t) ? c.placeholderIcon : c.documentIcon,
        a;
      return (
        p(t)
          ? (a = u.jsx(o("WAWebImageIcon.react").ImageIcon, { iconXstyle: n }))
          : _(t)
            ? (a = u.jsx(
                o("WAWebVideoPlaceholderIcon.react").VideoPlaceholderIcon,
                { iconXstyle: n },
              ))
            : (a = u.jsx(r("WDSIconIcDescription.react"), { iconXstyle: n })),
        u.jsx("div", {
          className: "x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d",
          children: a,
        })
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(t) {
      var n = t.file;
      if (p(n)) {
        var o = URL.createObjectURL(n);
        return u.jsx("div", {
          className: (e || (e = r("stylex")))([
            c.thumbContainer,
            c.thumb,
            c.marginEnd8,
          ]),
          style: { backgroundImage: "url(" + o + ")" },
        });
      }
      return u.jsx("div", {
        className: (e || (e = r("stylex")))([
          c.thumbContainer,
          c.thumb,
          c.marginEnd8,
        ]),
        children: u.jsx(d, { file: n }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      return e.type.startsWith(
        o("WAAsConsumerApplication").IMAGE_MIME_TYPE.split("/")[0] + "/",
      );
    }
    function _(e) {
      return e.type.startsWith(
        o("WAAsConsumerApplication").VIDEO_MIME_TYPE.split("/")[0] + "/",
      );
    }
    l.default = m;
  },
  98,
);
