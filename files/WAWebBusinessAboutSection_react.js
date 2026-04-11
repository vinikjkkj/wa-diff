__d(
  "WAWebBusinessAboutSection.react",
  [
    "fbt",
    "WAWebChatInfoDrawerBlock.react",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatStatus",
    "WAWebContactGetters",
    "WAWebCopyPasteSelectable.react",
    "WAWebFrontendContactGetters",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWidFormat",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.contact,
        a;
      t[0] !== n ? ((a = n.getStatus()), (t[0] = n), (t[1] = a)) : (a = t[1]);
      var i = a,
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            o("WAWebContactGetters").getId,
            o("WAWebFrontendContactGetters").getPhoneNumber,
          ]),
          (t[2] = l))
        : (l = t[2]);
      var c = o("useWAWebContactValues").useContactValues(n.id, l),
        d = c[0],
        m = c[1],
        p;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = ["status"]), (t[3] = p))
        : (p = t[3]);
      var _ = o("useWAWebModelValues").useModelValues(i, p),
        f = _.status,
        g;
      t[4] !== d || t[5] !== f
        ? ((g =
            f === ""
              ? null
              : u.jsx(r("WAWebChatInfoDrawerBlock.react"), {
                  multiline: !0,
                  children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                    as: "span",
                    children: u.jsx(o("WAWebChatStatus").StatusWrapper, {
                      id: d,
                    }),
                  }),
                })),
          (t[4] = d),
          (t[5] = f),
          (t[6] = g))
        : (g = t[6]);
      var h = g,
        y;
      d.isLid() ? m != null && (y = m) : (y = d);
      var C;
      t[7] !== y
        ? ((C = y
            ? u.jsx(r("WAWebChatInfoDrawerBlock.react"), {
                separator: !0,
                children: u.jsx(
                  o("WAWebCopyPasteSelectable.react").SelectableSpan,
                  {
                    dir: "auto",
                    selectable: !0,
                    children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                      as: "span",
                      children: o("WAWebWidFormat").widToFormattedUser(y),
                    }),
                  },
                ),
              })
            : null),
          (t[7] = y),
          (t[8] = C))
        : (C = t[8]);
      var b = C,
        v;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s._(/*BTDS*/ "About and phone number")), (t[9] = v))
        : (v = t[9]);
      var S = v,
        R;
      return (
        t[10] !== b || t[11] !== h
          ? ((R = u.jsxs(
              o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
              {
                xstyle: o("WAWebUISpacing").uiPadding.bottom0,
                titleTestId: "section-about-and-phone-number",
                title: S,
                children: [h, b],
              },
            )),
            (t[10] = b),
            (t[11] = h),
            (t[12] = R))
          : (R = t[12]),
        R
      );
    }
    l.default = c;
  },
  226,
);
