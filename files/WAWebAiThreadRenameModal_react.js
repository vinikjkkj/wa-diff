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
    "react-compiler-runtime",
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
        n = o("react-compiler-runtime").c(20),
        a = e.aiThread,
        i = e.chatId,
        l = c((t = a.title) != null ? t : ""),
        m = l[0],
        p = l[1],
        _ = c(!1),
        f = _[0],
        g = _[1],
        h;
      n[0] !== a || n[1] !== i || n[2] !== m
        ? ((h = function () {
            (g(!0),
              o("WAWebRenameAiThreadAction")
                .renameAiThreadAction(a, m, i)
                .then(o("WAWebModalManager").closeModalManager)
                .catch(function (e) {
                  g(!1);
                }));
          }),
          (n[0] = a),
          (n[1] = i),
          (n[2] = m),
          (n[3] = h))
        : (h = n[3]);
      var y = h,
        C;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Save")), (n[4] = C))
        : (C = n[4]);
      var b;
      n[5] !== a.title || n[6] !== m || n[7] !== f
        ? ((b = f || m.trim() === "" || m === a.title || m.length > 120),
          (n[5] = a.title),
          (n[6] = m),
          (n[7] = f),
          (n[8] = b))
        : (b = n[8]);
      var v;
      n[9] !== y || n[10] !== b
        ? ((v = u.jsx(r("WDSButton.react"), {
            label: C,
            onPress: y,
            size: "medium",
            variant: "filled",
            xstyle: d.saveButton,
            disabled: b,
          })),
          (n[9] = y),
          (n[10] = b),
          (n[11] = v))
        : (v = n[11]);
      var S = v,
        R;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = u.jsx(r("WDSButton.react"), {
            Icon: o("WAWebCloseRefreshedIcon.react").CloseRefreshedIcon,
            onPress: o("WAWebModalManager").closeModalManager,
            variant: "borderless",
          })),
          (n[12] = R))
        : (R = n[12]);
      var L;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: d.headerRow,
            align: "center",
            children: [
              R,
              u.jsx(o("WAWebFlex.react").FlexRow, {
                grow: 1,
                children: u.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDefault",
                  children: s._(/*BTDS*/ "Rename chat"),
                }),
              }),
            ],
          })),
          (n[13] = L))
        : (L = n[13]);
      var E;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = { className: "xh8yej3" }), (n[14] = E))
        : (E = n[14]);
      var k;
      n[15] !== m
        ? ((k = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: d.modalWrapper,
            align: "stretch",
            children: [
              L,
              u.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: d.textFieldContainer,
                children: u.jsx(
                  "div",
                  babelHelpers.extends({}, E, {
                    children: u.jsx(r("WDSTextField.react"), {
                      label: "Name",
                      maxCharacterCount: 120,
                      value: m,
                      onValueChange: p,
                    }),
                  }),
                ),
              }),
            ],
          })),
          (n[15] = m),
          (n[16] = k))
        : (k = n[16]);
      var I;
      return (
        n[17] !== S || n[18] !== k
          ? ((I = u.jsx(o("WAWebModal.react").Modal, {
              actions: S,
              type: o("WAWebModal.react").ModalTheme.Auto,
              children: k,
            })),
            (n[17] = S),
            (n[18] = k),
            (n[19] = I))
          : (I = n[19]),
        I
      );
    }
    l.AiThreadRenameModal = m;
  },
  226,
);
