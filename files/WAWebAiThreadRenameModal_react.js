__d(
  "WAWebAiThreadRenameModal.react",
  [
    "fbt",
    "WAWebCloseRefreshedIcon.react",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebRenameAiThreadAction",
    "WDSButton.react",
    "WDSText.react",
    "WDSTextField.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        headerRow: {
          boxSizing: "x9f619",
          columnGap: "x1aj3ljl",
          height: "x1peatla",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          $$css: !0,
        },
        modalWrapper: { boxSizing: "x9f619", width: "x1czfd9k", $$css: !0 },
        saveButton: {
          marginTop: "x1nmyh1g",
          marginInlineEnd: "xd6izgl",
          marginBottom: "xdqhqc9",
          marginInlineStart: "x6pxu1d",
          $$css: !0,
        },
        textFieldContainer: {
          paddingBottom: "xwib8y2",
          paddingTop: "xyamay9",
          paddingInlineEnd: "x1xnnf8n",
          paddingInlineStart: "x106a9eq",
          $$css: !0,
        },
      };
    function m(e) {
      var t,
        n = e.aiThread,
        a = e.chatId,
        i = c((t = n.title) != null ? t : ""),
        l = i[0],
        m = i[1],
        p = c(!1),
        _ = p[0],
        f = p[1],
        g = function () {
          (f(!0),
            o("WAWebRenameAiThreadAction")
              .renameAiThreadAction(n, l, a)
              .then(o("WAWebModalManager").closeModalManager)
              .catch(function (e) {
                f(!1);
              }));
        },
        h = u.jsx(r("WDSButton.react"), {
          label: s._(/*BTDS*/ "Save"),
          onPress: g,
          size: "medium",
          variant: "filled",
          xstyle: d.saveButton,
          disabled: _ || l.trim() === "" || l === n.title || l.length > 120,
        });
      return u.jsx(o("WAWebModal.react").Modal, {
        actions: h,
        type: o("WAWebModal.react").ModalTheme.Auto,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          xstyle: d.modalWrapper,
          align: "stretch",
          children: [
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: d.headerRow,
              align: "center",
              children: [
                u.jsx(r("WDSButton.react"), {
                  Icon: o("WAWebCloseRefreshedIcon.react").CloseRefreshedIcon,
                  onPress: o("WAWebModalManager").closeModalManager,
                  variant: "borderless",
                }),
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  grow: 1,
                  children: u.jsx(r("WDSText.react"), {
                    type: "Body1",
                    colorName: "contentDefault",
                    children: s._(/*BTDS*/ "Rename chat"),
                  }),
                }),
              ],
            }),
            u.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: d.textFieldContainer,
              children: u.jsx("div", {
                className: "xh8yej3",
                children: u.jsx(r("WDSTextField.react"), {
                  label: "Name",
                  maxCharacterCount: 120,
                  value: l,
                  onValueChange: m,
                }),
              }),
            }),
          ],
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.AiThreadRenameModal = m));
  },
  226,
);
