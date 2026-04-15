__d(
  "WAWebContactInfoAboutSection",
  [
    "fbt",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatStatus",
    "WAWebChatTextStatusWrapper",
    "WAWebExternalLink.react",
    "WAWebMiscGatingUtils",
    "WAWebText.react",
    "WAWebTextStatusGatingUtils",
    "WAWebUISpacing",
    "WAWebUseAboutDisplayStatus",
    "WAWebWid",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { whatsapp_url: { color: "x14qam3d", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.contact,
        a = o("WAWebUseAboutDisplayStatus").useAboutDisplayStatus(n),
        i = a.hasContent;
      if (r("WAWebWid").isPSA(n.id)) {
        var l;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = o("WAWebMiscGatingUtils").isBlueEnabled()
              ? s
                  ._(
                    /*BTDS*/ "Official chats from WhatsApp will always have a blue verified badge. And we'll never ask for your personal information.",
                  )
                  .toString()
              : s
                  ._(
                    /*BTDS*/ 'Official chats from WhatsApp will always have a green "verified" checkmark. And we\'ll never ask for your personal information.',
                  )
                  .toString()),
            (t[0] = l))
          : (l = t[0]);
        var d = l,
          m;
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = s._(/*BTDS*/ "Hi! Welcome to this official WhatsApp chat.")),
            (t[1] = m))
          : (m = t[1]);
        var p = m,
          _;
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = s
              ._(
                /*BTDS*/ "This is where you can get tips, see announcements, and hear about the newest features. Straight from us.",
              )
              .toString()),
            (t[2] = _))
          : (_ = t[2]);
        var f = _,
          g;
        t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = u.jsx("br", {})), (t[3] = g))
          : (g = t[3]);
        var h;
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = u.jsx("br", {})), (t[4] = h))
          : (h = t[4]);
        var y;
        t[5] !== f
          ? ((y = u.jsxs(o("WAWebText.react").WAWebTextTitleRefreshed, {
              as: "span",
              children: [p, g, f, h, d],
            })),
            (t[5] = f),
            (t[6] = y))
          : (y = t[6]);
        var C, b;
        t[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = u.jsx("br", {})),
            (b = u.jsx("br", {})),
            (t[7] = C),
            (t[8] = b))
          : ((C = t[7]), (b = t[8]));
        var v;
        t[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: "https://whatsapp.com/",
              xstyle: c.whatsapp_url,
              children: s._(/*BTDS*/ "https:\/\/whatsapp.com\/"),
            })),
            (t[9] = v))
          : (v = t[9]);
        var S;
        return (
          t[10] !== y
            ? ((S = u.jsxs(
                o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
                {
                  titleTestId: "section-about",
                  title: "",
                  children: [y, C, b, v],
                },
              )),
              (t[10] = y),
              (t[11] = S))
            : (S = t[11]),
          S
        );
      }
      if (!i) return null;
      var R;
      t[12] !== n.id
        ? ((R = o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
            ? u.jsx(o("WAWebChatTextStatusWrapper").TextStatus, {
                contactId: n.id,
              })
            : u.jsx(o("WAWebChatStatus").StatusWrapper, { id: n.id })),
          (t[12] = n.id),
          (t[13] = R))
        : (R = t[13]);
      var L = R,
        E;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = s._(/*BTDS*/ "About")), (t[14] = E))
        : (E = t[14]);
      var k;
      return (
        t[15] !== L
          ? ((k = u.jsx(
              o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
              {
                titleTestId: "section-about",
                title: E,
                titleXStyle: o("WAWebUISpacing").uiPadding.all0,
                children: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
                  color: "wdsContentDefault",
                  xstyle: o("WAWebUISpacing").uiMargin.top4,
                  children: L,
                }),
              },
            )),
            (t[15] = L),
            (t[16] = k))
          : (k = t[16]),
        k
      );
    }
    l.default = d;
  },
  226,
);
