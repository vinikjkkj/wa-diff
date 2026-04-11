__d(
  "WAWebStatusMuteContactPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebModal.react",
    "WAWebStatusGatingUtils",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { marginBottom32: { marginBottom: "xg6s713", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.contact,
        r = e.onCancel,
        a = e.onMute,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [o("WAWebFrontendContactGetters").getFormattedName]),
          (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebContactValues").useContactValues(n.id, i),
        d = l[0],
        m;
      t[1] !== d
        ? ((m = s._(
            /*BTDS*/ "Mute {name-of-contact-being-muted} 's status updates?",
            [s._param("name-of-contact-being-muted", d)],
          )),
          (t[1] = d),
          (t[2] = m))
        : (m = t[2]);
      var p = m,
        _;
      t[3] !== d
        ? ((_ = s._(
            /*BTDS*/ "Hide {name-of-contact-being-hidden} 's status updates?",
            [s._param("name-of-contact-being-hidden", d)],
          )),
          (t[3] = d),
          (t[4] = _))
        : (_ = t[4]);
      var f = _,
        g;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Mute")), (t[5] = g))
        : (g = t[5]);
      var h = g,
        y;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "Hide")), (t[6] = y))
        : (y = t[6]);
      var C = y,
        b;
      t[7] !== d
        ? ((b = o(
            "WAWebStatusGatingUtils",
          ).isStatusPrivateMentionsReceiveEnabled()
            ? s._(
                /*BTDS*/ "You won't be notified of mentions from this contact. Their new status updates also won't appear at the top of the status list anymore.",
              )
            : s._(
                /*BTDS*/ "New status updates from {name-of-contact-being-muted} won't appear at the top of the status list anymore.",
                [s._param("name-of-contact-being-muted", d)],
              )),
          (t[7] = d),
          (t[8] = b))
        : (b = t[8]);
      var v = b,
        S =
          o("WAWebStatusGatingUtils").isUpdatesTabInNavigationBarEnabled() ||
          o("WAWebStatusGatingUtils").isStatusHideStringEnabled(),
        R = S ? f : p,
        L;
      t[9] !== R
        ? ((L = u.jsx(o("WAWebEmojiText.react").EmojiText, { text: R })),
          (t[9] = R),
          (t[10] = L))
        : (L = t[10]);
      var E;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = s._(/*BTDS*/ "Cancel")), (t[11] = E))
        : (E = t[11]);
      var k;
      t[12] !== v
        ? ((k = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
              xstyle: c.marginBottom32,
              children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: v }),
            }),
          })),
          (t[12] = v),
          (t[13] = k))
        : (k = t[13]);
      var I;
      return (
        t[14] !== r || t[15] !== a || t[16] !== L || t[17] !== k
          ? ((I = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              type: o("WAWebModal.react").ModalTheme.StatusReport,
              title: L,
              okText: S ? C : h,
              onOK: a,
              cancelText: E,
              onCancel: r,
              children: k,
            })),
            (t[14] = r),
            (t[15] = a),
            (t[16] = L),
            (t[17] = k),
            (t[18] = I))
          : (I = t[18]),
        I
      );
    }
    l.default = d;
  },
  226,
);
