__d(
  "WAWebBusinessAboutSection.react",
  [
    "fbt",
    "WAWebChatInfoDrawerBlock.react",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatStatus",
    "WAWebChatTextStatusWrapper",
    "WAWebContactGetters",
    "WAWebCopyPasteSelectable.react",
    "WAWebFrontendContactGetters",
    "WAWebText.react",
    "WAWebTextStatusGatingUtils",
    "WAWebUISpacing",
    "WAWebUseAboutDisplayStatus",
    "WAWebWidFormat",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.contact,
        a = o("WAWebUseAboutDisplayStatus").useAboutDisplayStatus(n),
        i = a.hasContent,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            o("WAWebContactGetters").getId,
            o("WAWebFrontendContactGetters").getPhoneNumber,
          ]),
          (t[0] = l))
        : (l = t[0]);
      var c = o("useWAWebContactValues").useContactValues(n.id, l),
        d = c[0],
        m = c[1],
        p;
      if (i) {
        var _;
        t[1] !== n.id || t[2] !== d
          ? ((_ = o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
              ? u.jsx(o("WAWebChatTextStatusWrapper").TextStatus, {
                  contactId: n.id,
                })
              : u.jsx(o("WAWebChatStatus").StatusWrapper, { id: d })),
            (t[1] = n.id),
            (t[2] = d),
            (t[3] = _))
          : (_ = t[3]);
        var f = _,
          g;
        (t[4] !== f
          ? ((g = u.jsx(r("WAWebChatInfoDrawerBlock.react"), {
              multiline: !0,
              children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                as: "span",
                children: f,
              }),
            })),
            (t[4] = f),
            (t[5] = g))
          : (g = t[5]),
          (p = g));
      } else p = null;
      var h;
      d.isLid() ? m != null && (h = m) : (h = d);
      var y;
      t[6] !== h
        ? ((y = h
            ? u.jsx(r("WAWebChatInfoDrawerBlock.react"), {
                separator: !0,
                children: u.jsx(
                  o("WAWebCopyPasteSelectable.react").SelectableSpan,
                  {
                    dir: "auto",
                    selectable: !0,
                    children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                      as: "span",
                      children: o("WAWebWidFormat").widToFormattedUser(h),
                    }),
                  },
                ),
              })
            : null),
          (t[6] = h),
          (t[7] = y))
        : (y = t[7]);
      var C = y,
        b;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "About and phone number")), (t[8] = b))
        : (b = t[8]);
      var v = b,
        S;
      return (
        t[9] !== C || t[10] !== p
          ? ((S = u.jsxs(
              o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
              {
                xstyle: o("WAWebUISpacing").uiPadding.bottom0,
                titleTestId: "section-about-and-phone-number",
                title: v,
                children: [p, C],
              },
            )),
            (t[9] = C),
            (t[10] = p),
            (t[11] = S))
          : (S = t[11]),
        S
      );
    }
    l.default = c;
  },
  226,
);
