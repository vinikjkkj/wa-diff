__d(
  "WAWebTPDiscardEditPdfPopup.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebWarningOutlineIcon.react",
    "WDSButton.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        container: {
          borderStartStartRadius: "xuqqiot",
          borderStartEndRadius: "x1lkg3h2",
          borderEndEndRadius: "x17mbzc4",
          borderEndStartRadius: "xcouhex",
          $$css: !0,
        },
        iconColor: { color: "xhslqc4", $$css: !0 },
        iconSpacing: { paddingBottom: "xvpt6g3", $$css: !0 },
        titleSpacing: { paddingBottom: "xvpt6g3", $$css: !0 },
        buttonRow: { width: "xh8yej3", paddingTop: "xl7twdi", $$css: !0 },
        rightButtons: { columnGap: "x1s70e7g", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.onDiscard,
        a = e.onDownload,
        i;
      t[0] !== n
        ? ((i = function () {
            (n(), o("WAWebModalManager").ModalManager.closeSupportOrModal());
          }),
          (t[0] = n),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        d;
      t[2] !== a
        ? ((d = function () {
            (a(), o("WAWebModalManager").ModalManager.closeSupportOrModal());
          }),
          (t[2] = a),
          (t[3] = d))
        : (d = t[3]);
      var _ = d,
        f;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            xstyle: c.iconSpacing,
            children: u.jsx(
              o("WAWebWarningOutlineIcon.react").WarningOutlineIcon,
              { iconXstyle: c.iconColor },
            ),
          })),
          (t[4] = f))
        : (f = t[4]);
      var g;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            xstyle: c.titleSpacing,
            children: u.jsx(r("WDSText.react"), {
              type: "Headline1",
              colorName: "contentDefault",
              children: s._(/*BTDS*/ "Discard edited PDF?"),
            }),
          })),
          (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: s._(
              /*BTDS*/ "Your edits haven't been shared yet. If you close now, this edited version will be lost.",
            ),
          })),
          (t[6] = h))
        : (h = t[6]);
      var y;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "Download")), (t[7] = y))
        : (y = t[7]);
      var C;
      t[8] !== _
        ? ((C = u.jsx(r("WDSButton.react"), {
            variant: "outline",
            type: "default",
            size: "medium",
            label: y,
            onPress: _,
            testid: void 0,
          })),
          (t[8] = _),
          (t[9] = C))
        : (C = t[9]);
      var b;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = u.jsx(o("WAWebFlex.react").FlexItem, { grow: 1 })), (t[10] = b))
        : (b = t[10]);
      var v;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = u.jsx(r("WDSButton.react"), {
            variant: "borderless",
            type: "default",
            size: "medium",
            label: s._(/*BTDS*/ "Cancel"),
            onPress: m,
            testid: void 0,
          })),
          (t[11] = v))
        : (v = t[11]);
      var S;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s._(/*BTDS*/ "Discard")), (t[12] = S))
        : (S = t[12]);
      var R;
      t[13] !== l
        ? ((R = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: c.rightButtons,
            children: [
              v,
              u.jsx(r("WDSButton.react"), {
                variant: "filled",
                type: "destructive",
                size: "medium",
                label: S,
                onPress: l,
                testid: void 0,
              }),
            ],
          })),
          (t[13] = l),
          (t[14] = R))
        : (R = t[14]);
      var L;
      return (
        t[15] !== R || t[16] !== C
          ? ((L = u.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.Small,
              onOverlayClick: p,
              children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                xstyle: c.container,
                children: [
                  f,
                  g,
                  h,
                  u.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    xstyle: c.buttonRow,
                    children: [C, b, R],
                  }),
                ],
              }),
            })),
            (t[15] = R),
            (t[16] = C),
            (t[17] = L))
          : (L = t[17]),
        L
      );
    }
    function m() {
      return o("WAWebModalManager").ModalManager.closeSupportOrModal();
    }
    function p() {
      o("WAWebModalManager").ModalManager.closeSupportOrModal();
    }
    l.default = d;
  },
  226,
);
