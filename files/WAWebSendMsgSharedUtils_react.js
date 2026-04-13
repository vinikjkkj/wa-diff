__d(
  "WAWebSendMsgSharedUtils.react",
  [
    "WAAsConsumerApplication",
    "WAWebImageIcon.react",
    "WAWebVideoPlaceholderIcon.react",
    "WDSIconIcDescription.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(9),
        n = e.file,
        a = p(n) || _(n) ? c.placeholderIcon : c.documentIcon,
        i;
      if (p(n)) {
        var l;
        (t[0] !== a
          ? ((l = u.jsx(o("WAWebImageIcon.react").ImageIcon, {
              iconXstyle: a,
            })),
            (t[0] = a),
            (t[1] = l))
          : (l = t[1]),
          (i = l));
      } else if (_(n)) {
        var s;
        (t[2] !== a
          ? ((s = u.jsx(
              o("WAWebVideoPlaceholderIcon.react").VideoPlaceholderIcon,
              { iconXstyle: a },
            )),
            (t[2] = a),
            (t[3] = s))
          : (s = t[3]),
          (i = s));
      } else {
        var d;
        (t[4] !== a
          ? ((d = u.jsx(r("WDSIconIcDescription.react"), { iconXstyle: a })),
            (t[4] = a),
            (t[5] = d))
          : (d = t[5]),
          (i = d));
      }
      var m;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = { className: "x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d" }),
          (t[6] = m))
        : (m = t[6]);
      var f;
      return (
        t[7] !== i
          ? ((f = u.jsx("div", babelHelpers.extends({}, m, { children: i }))),
            (t[7] = i),
            (t[8] = f))
          : (f = t[8]),
        f
      );
    }
    function m(t) {
      var n = o("react-compiler-runtime").c(14),
        a = t.file;
      if (p(a)) {
        var i;
        n[0] !== a
          ? ((i = URL.createObjectURL(a)), (n[0] = a), (n[1] = i))
          : (i = n[1]);
        var l = i,
          s;
        n[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (e || (e = r("stylex")))([
              c.thumbContainer,
              c.thumb,
              c.marginEnd8,
            ])),
            (n[2] = s))
          : (s = n[2]);
        var m = "url(" + l + ")",
          _;
        n[3] !== m
          ? ((_ = { backgroundImage: m }), (n[3] = m), (n[4] = _))
          : (_ = n[4]);
        var f;
        return (
          n[5] !== s || n[6] !== _
            ? ((f = u.jsx("div", { className: s, style: _ })),
              (n[5] = s),
              (n[6] = _),
              (n[7] = f))
            : (f = n[7]),
          f
        );
      }
      var g;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (e || (e = r("stylex")))([
            c.thumbContainer,
            c.thumb,
            c.marginEnd8,
          ])),
          (n[8] = g))
        : (g = n[8]);
      var h;
      n[9] !== a
        ? ((h = u.jsx(d, { file: a })), (n[9] = a), (n[10] = h))
        : (h = n[10]);
      var y;
      return (
        n[11] !== g || n[12] !== h
          ? ((y = u.jsx("div", { className: g, children: h })),
            (n[11] = g),
            (n[12] = h),
            (n[13] = y))
          : (y = n[13]),
        y
      );
    }
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
