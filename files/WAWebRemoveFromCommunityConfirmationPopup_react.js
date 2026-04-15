__d(
  "WAWebRemoveFromCommunityConfirmationPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebContactGetters",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebRemoveFromCommunityAction",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebFocusOnMount",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.contact,
        a = r("useWAWebFocusOnMount")(),
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebContactGetters").getId,
            o("WAWebFrontendContactGetters").getFormattedName,
          ]),
          (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebContactValues").useContactValues(n.id, i),
        c = l[1],
        d;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = ["id", "formattedTitle"]), (t[1] = d))
        : (d = t[1]);
      var m = o("useWAWebModelValues").useModelValues(e.parentGroupChat, d),
        p;
      t[2] !== c
        ? ((p = s._(
            /*BTDS*/ "Remove {contact-name} from community and groups?",
            [
              s._param(
                "contact-name",
                u.jsx(o("WAWebEmojiText.react").EmojiText, {
                  direction: "auto",
                  text: c,
                }),
              ),
            ],
          )),
          (t[2] = c),
          (t[3] = p))
        : (p = t[3]);
      var _ = p,
        f;
      t[4] !== c
        ? ((f = s._(
            /*BTDS*/ "Remove {contact-name} from community and groups?",
            [s._param("contact-name", c)],
          )),
          (t[4] = c),
          (t[5] = f))
        : (f = t[5]);
      var g = f,
        h;
      if (t[6] !== c || t[7] !== m.formattedTitle) {
        var y;
        t[9] !== c
          ? ((y = u.jsx(o("WAWebEmojiText.react").EmojiText, {
              direction: "auto",
              text: c,
            })),
            (t[9] = c),
            (t[10] = y))
          : (y = t[10]);
        var C;
        (t[11] !== m.formattedTitle
          ? ((C = u.jsx(o("WAWebEmojiText.react").EmojiText, {
              direction: "auto",
              text: m.formattedTitle,
            })),
            (t[11] = m.formattedTitle),
            (t[12] = C))
          : (C = t[12]),
          (h = s._(
            /*BTDS*/ 'By removing {contact-name} from "{community-name}" they will exit and lose access to all groups that they belong to in this community, including those they created. {=m7}',
            [
              s._param("contact-name", y),
              s._param("community-name", C),
              s._implicitParam(
                "=m7",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getRemoveFromCommunityFaqUrl(),
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          )),
          (t[6] = c),
          (t[7] = m.formattedTitle),
          (t[8] = h));
      } else h = t[8];
      var b = h,
        v;
      t[13] !== n || t[14] !== m
        ? ((v = function () {
            (r("WAWebRemoveFromCommunityAction")(m, n),
              o("WAWebModalManager").ModalManager.close());
          }),
          (t[13] = n),
          (t[14] = m),
          (t[15] = v))
        : (v = t[15]);
      var S = v,
        R;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Remove")), (t[16] = R))
        : (R = t[16]);
      var L;
      return (
        t[17] !== b || t[18] !== a || t[19] !== S || t[20] !== _ || t[21] !== g
          ? ((L = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              ref: a,
              title: _,
              onOK: S,
              onCancel: o("WAWebModalManager").closeModalManager,
              okText: R,
              okButtonType: "solid-warning",
              ariaLabel: g,
              children: b,
            })),
            (t[17] = b),
            (t[18] = a),
            (t[19] = S),
            (t[20] = _),
            (t[21] = g),
            (t[22] = L))
          : (L = t[22]),
        L
      );
    }
    l.default = c;
  },
  226,
);
