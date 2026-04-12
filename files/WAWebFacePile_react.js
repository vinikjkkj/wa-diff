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
      var t,
        n = e.borderColor,
        a = e.borderWidth,
        i = e.chatWid,
        l = e.faceSize,
        c = e.idOrUrl,
        d = e.isFirst,
        m = e.theme,
        p = e.zIndex,
        _ = i ? o("WAWebChatCollection").ChatCollection.get(i) : null,
        f =
          _ && c instanceof r("WAWebWid")
            ? o("WAWebChatParticipantColor").getAssignedColor(
                _,
                c,
                "WAWebFacePile-" +
                  ((t = o("WAWebQuotedMessageUserJourneyLogger").getChatType(
                    _.id,
                  )) != null
                    ? t
                    : ""),
              )
            : 1;
      return s.jsx("div", {
        style: { zIndex: p },
        children:
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
                    authorColor: f,
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
              }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.borderColor,
        n = e.borderWidth,
        r = e.chatWid,
        a = e.faceSize,
        i = e.idsOrUrls,
        l = e.keyName,
        u = e.theme,
        m = e.xstyle;
      return s.jsx(o("WAWebFlex.react").FlexRow, {
        justify: "end",
        xstyle: m,
        children: i.map(function (e, o) {
          return s.jsx(
            d,
            {
              idOrUrl: e,
              isFirst: o === 0,
              zIndex: i.length - o,
              borderColor: t,
              faceSize: a != null ? a : c,
              chatWid: r,
              theme: u,
              borderWidth: n,
            },
            e.toString() + "-" + o + "-" + (l != null ? l : ""),
          );
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
