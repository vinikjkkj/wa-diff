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
      var t,
        n = e.onDiscard,
        a = e.onDownload,
        i = function () {
          (n(), o("WAWebModalManager").ModalManager.closeSupportOrModal());
        },
        l = function () {
          (a(), o("WAWebModalManager").ModalManager.closeSupportOrModal());
        };
      return u.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.Small,
        onOverlayClick: m,
        children: u.jsxs((t = o("WAWebFlex.react")).FlexColumn, {
          xstyle: c.container,
          children: [
            u.jsx(t.FlexItem, {
              align: "center",
              xstyle: c.iconSpacing,
              children: u.jsx(
                o("WAWebWarningOutlineIcon.react").WarningOutlineIcon,
                { iconXstyle: c.iconColor },
              ),
            }),
            u.jsx(t.FlexItem, {
              align: "center",
              xstyle: c.titleSpacing,
              children: u.jsx(r("WDSText.react"), {
                type: "Headline1",
                colorName: "contentDefault",
                children: s._(/*BTDS*/ "Discard edited PDF?"),
              }),
            }),
            u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: s._(
                /*BTDS*/ "Your edits haven't been shared yet. If you close now, this edited version will be lost.",
              ),
            }),
            u.jsxs(t.FlexRow, {
              align: "center",
              xstyle: c.buttonRow,
              children: [
                u.jsx(r("WDSButton.react"), {
                  variant: "outline",
                  type: "default",
                  size: "medium",
                  label: s._(/*BTDS*/ "Download"),
                  onPress: l,
                  testid: void 0,
                }),
                u.jsx(o("WAWebFlex.react").FlexItem, { grow: 1 }),
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  xstyle: c.rightButtons,
                  children: [
                    u.jsx(r("WDSButton.react"), {
                      variant: "borderless",
                      type: "default",
                      size: "medium",
                      label: s._(/*BTDS*/ "Cancel"),
                      onPress: function () {
                        return o(
                          "WAWebModalManager",
                        ).ModalManager.closeSupportOrModal();
                      },
                      testid: void 0,
                    }),
                    u.jsx(r("WDSButton.react"), {
                      variant: "filled",
                      type: "destructive",
                      size: "medium",
                      label: s._(/*BTDS*/ "Discard"),
                      onPress: i,
                      testid: void 0,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      o("WAWebModalManager").ModalManager.closeSupportOrModal();
    }
    l.default = d;
  },
  226,
);
