__d(
  "WAWebFacePile.react",
  [
    "WAWebChatCollection",
    "WAWebChatParticipantColor",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebProfileImage.react",
    "WAWebQuotedMessageUserJourneyLogger",
    "WAWebWid",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        hiddenBehind: { marginInlineStart: "x2459kn", $$css: !0 },
        border: {
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          $$css: !0,
        },
        defaultBorderColor: {
          borderTopColor: null,
          borderInlineEndColor: null,
          borderBottomColor: null,
          borderInlineStartColor: null,
          $$css: !0,
        },
        defaultBorderWidth: {
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          $$css: !0,
        },
        urlImage: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
      },
      c = 24;
    function d(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.borderColor,
        a = e.borderWidth,
        i = e.chatWid,
        l = e.faceSize,
        c = e.idOrUrl,
        d = e.isFirst,
        m = e.theme,
        p = e.zIndex,
        _;
      if (t[0] !== i || t[1] !== c) {
        var f,
          g = i ? o("WAWebChatCollection").ChatCollection.get(i) : null;
        ((_ =
          g && c instanceof r("WAWebWid")
            ? o("WAWebChatParticipantColor").getAssignedColor(
                g,
                c,
                "WAWebFacePile-" +
                  ((f = o("WAWebQuotedMessageUserJourneyLogger").getChatType(
                    g.id,
                  )) != null
                    ? f
                    : ""),
              )
            : 1),
          (t[0] = i),
          (t[1] = c),
          (t[2] = _));
      } else _ = t[2];
      var h = _,
        y;
      t[3] !== p ? ((y = { zIndex: p }), (t[3] = p), (t[4] = y)) : (y = t[4]);
      var C;
      t[5] !== h ||
      t[6] !== n ||
      t[7] !== a ||
      t[8] !== l ||
      t[9] !== c ||
      t[10] !== d ||
      t[11] !== m
        ? ((C =
            c instanceof r("WAWebWid")
              ? s.jsx(
                  o("WAWebDetailImage.react").DetailImage,
                  babelHelpers.extends(
                    {
                      id: c,
                      size: l,
                      xstyle: [
                        !d && u.hiddenBehind,
                        u.border,
                        n != null ? n : u.defaultBorderColor,
                        a != null ? a : u.defaultBorderWidth,
                      ],
                      authorColor: h,
                      theme: m,
                    },
                    m === "typing_indicator" ? { loadAnimation: !1 } : {},
                  ),
                )
              : s.jsx(o("WAWebFlex.react").FlexRow, {
                  xstyle: [
                    !d && u.hiddenBehind,
                    u.border,
                    n != null ? n : u.defaultBorderColor,
                    u.urlImage,
                  ],
                  children: s.jsx(r("WAWebProfileImage.react"), {
                    thumb: c,
                    size: l,
                  }),
                })),
          (t[5] = h),
          (t[6] = n),
          (t[7] = a),
          (t[8] = l),
          (t[9] = c),
          (t[10] = d),
          (t[11] = m),
          (t[12] = C))
        : (C = t[12]);
      var b;
      return (
        t[13] !== y || t[14] !== C
          ? ((b = s.jsx("div", { style: y, children: C })),
            (t[13] = y),
            (t[14] = C),
            (t[15] = b))
          : (b = t[15]),
        b
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.borderColor,
        r = e.borderWidth,
        a = e.chatWid,
        i = e.faceSize,
        l = e.idsOrUrls,
        u = e.keyName,
        m = e.theme,
        p = e.xstyle,
        _;
      if (
        t[0] !== n ||
        t[1] !== r ||
        t[2] !== a ||
        t[3] !== i ||
        t[4] !== l ||
        t[5] !== u ||
        t[6] !== m
      ) {
        var f;
        (t[8] !== n ||
        t[9] !== r ||
        t[10] !== a ||
        t[11] !== i ||
        t[12] !== l.length ||
        t[13] !== u ||
        t[14] !== m
          ? ((f = function (t, o) {
              return s.jsx(
                d,
                {
                  idOrUrl: t,
                  isFirst: o === 0,
                  zIndex: l.length - o,
                  borderColor: n,
                  faceSize: i != null ? i : c,
                  chatWid: a,
                  theme: m,
                  borderWidth: r,
                },
                t.toString() + "-" + o + "-" + (u != null ? u : ""),
              );
            }),
            (t[8] = n),
            (t[9] = r),
            (t[10] = a),
            (t[11] = i),
            (t[12] = l.length),
            (t[13] = u),
            (t[14] = m),
            (t[15] = f))
          : (f = t[15]),
          (_ = l.map(f)),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a),
          (t[3] = i),
          (t[4] = l),
          (t[5] = u),
          (t[6] = m),
          (t[7] = _));
      } else _ = t[7];
      var g;
      return (
        t[16] !== _ || t[17] !== p
          ? ((g = s.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "end",
              xstyle: p,
              children: _,
            })),
            (t[16] = _),
            (t[17] = p),
            (t[18] = g))
          : (g = t[18]),
        g
      );
    }
    l.default = m;
  },
  98,
);
