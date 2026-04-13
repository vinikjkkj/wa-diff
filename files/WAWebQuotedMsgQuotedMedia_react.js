__d(
  "WAWebQuotedMsgQuotedMedia.react",
  [
    "cx",
    "WAWebClassnames",
    "WAWebMessagePluginQuotedMsgThumbnailIcon",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["msg", "rootMsg"],
      u,
      c = u || (u = o("react"));
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.source,
        r = "url(data:image/jpeg;base64," + n + ")",
        a;
      t[0] !== r
        ? ((a = { backgroundImage: r }), (t[0] = r), (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = "xh8yej3 x5yr21d x1xsqp64 x18d0r48"), (t[2] = i))
        : (i = t[2]);
      var l;
      return (
        t[3] !== a
          ? ((l = c.jsx("div", {
              "data-testid": void 0,
              style: a,
              className: i,
            })),
            (t[3] = a),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    function m(t) {
      var n = o("react-compiler-runtime").c(10),
        r,
        a,
        i;
      n[0] !== t
        ? ((r = t.msg),
          (i = t.rootMsg),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a),
          (n[3] = i))
        : ((r = n[1]), (a = n[2]), (i = n[3]));
      var l = t.msg;
      if (
        i != null &&
        i.selectedCarouselCardIndex != null &&
        r.carouselCards != null
      )
        if (n[4] !== r.carouselCards || n[5] !== i.selectedCarouselCardIndex) {
          var s = r.carouselCards.at(i.selectedCarouselCardIndex);
          (s != null && (l = s.unsafe()),
            (n[4] = r.carouselCards),
            (n[5] = i.selectedCarouselCardIndex),
            (n[6] = l));
        } else l = n[6];
      if (o("WAWebMsgCollection").MsgCollection.get(l.id) == null) return null;
      var u;
      return (
        n[7] !== a || n[8] !== l
          ? ((u = c.jsx(p, babelHelpers.extends({ msg: l }, a))),
            (n[7] = a),
            (n[8] = l),
            (n[9] = u))
          : (u = n[9]),
        u
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.msg,
        r = e.theme;
      if (n.isViewOnce) return null;
      var a;
      t[0] !== n
        ? ((a = o(
            "WAWebMessagePluginQuotedMsgThumbnailIcon",
          ).quotedMsgThumbailIconComponent(n)),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l = r === "composeBox",
        s = r === "status",
        u = n.type === o("WAWebMsgType").MSG_TYPE.PAYMENT,
        d = n.type === o("WAWebMsgType").MSG_TYPE.PTV,
        m;
      if (t[2] !== l || t[3] !== s || t[4] !== u || t[5] !== d) {
        var p;
        ((m = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((p = {}),
          (p._agto = l),
          (p._ar58 = s),
          (p._agtq = u),
          (p._agtm = !0),
          (p._amii = d),
          p),
        )),
          (t[2] = l),
          (t[3] = s),
          (t[4] = u),
          (t[5] = d),
          (t[6] = m));
      } else m = t[6];
      var _ = m,
        f;
      if (t[7] !== i || t[8] !== n || t[9] !== r || t[10] !== _) {
        var g;
        ((f = i
          ? c.jsx("div", {
              className: _,
              children: c.jsx("div", {
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease(
                  ((g = {}), (g._agtn = !0), g),
                ),
                children: c.jsx(i, { msg: n, theme: r }),
              }),
            })
          : null),
          (t[7] = i),
          (t[8] = n),
          (t[9] = r),
          (t[10] = _),
          (t[11] = f));
      } else f = t[11];
      return f;
    }
    ((l.Base64BackgroundImage = d), (l.QuotedMediaUnsafe = m));
  },
  98,
);
