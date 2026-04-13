__d(
  "WAWebMemberLabelContactInfo.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebGroupMemberTagUpdateLogger",
    "WAWebMemberLabelCreateUpdateModal.react",
    "WAWebMemberLabelGating",
    "WAWebMemberLabelHooks",
    "WAWebMemberLabelRenderer.react",
    "WAWebMemberLabelsFrontendUtils",
    "WAWebModalManager",
    "WAWebUnstyledButton.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { memberLabelRow: { columnGap: "x1trrmfo", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.chat,
        a = e.contact,
        i = a.id,
        l = o("WAWebMemberLabelHooks").useHasSelfMemberLabelForChat(n),
        d;
      t[0] !== n || t[1] !== i
        ? ((d = { from: "chat_and_member", chat: n, member: i }),
          (t[0] = n),
          (t[1] = i),
          (t[2] = d))
        : (d = t[2]);
      var m = d;
      if (
        !(
          !n ||
          !o("WAWebMemberLabelsFrontendUtils").shouldShowMemberLabelForChat(n)
        )
      ) {
        var p;
        t[3] !== m
          ? ((p = u.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              children: u.jsx(r("WAWebMemberLabelRenderer.react"), {
                memberLabelArgs: m,
                type: "Body2",
              }),
            })),
            (t[3] = m),
            (t[4] = p))
          : (p = t[4]);
        var _ = p;
        if (o("WAWebMemberLabelsFrontendUtils").canEditMemberLabel(a, n)) {
          var f;
          t[5] !== n
            ? ((f = function () {
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(
                    o("WAWebMemberLabelCreateUpdateModal.react")
                      .MemberLabelCreateUpdateModal,
                    {
                      chat: n,
                      entryPoint: o("WAWebGroupMemberTagUpdateLogger")
                        .GroupMemberTagUpdateLogger.ENTRY_POINT.CONTACT_CARD,
                    },
                  ),
                );
              }),
              (t[5] = n),
              (t[6] = f))
            : (f = t[6]);
          var g;
          t[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = u.jsx(r("WDSText.react"), {
                type: "Body2Emphasized",
                colorName: "contentActionEmphasized",
                children: s._(/*BTDS*/ "Edit your member tag"),
              })),
              (t[7] = g))
            : (g = t[7]);
          var h;
          t[8] !== f
            ? ((h = u.jsx(r("WAWebUnstyledButton.react"), {
                onClick: f,
                children: g,
              })),
              (t[8] = f),
              (t[9] = h))
            : (h = t[9]);
          var y;
          (t[10] !== _ || t[11] !== h
            ? ((y = u.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                children: [_, h],
              })),
              (t[10] = _),
              (t[11] = h),
              (t[12] = y))
            : (y = t[12]),
            (_ = y));
        } else if (
          o("WAWebMemberLabelsFrontendUtils").memberLabelExists(m) &&
          !l &&
          o("WAWebMemberLabelGating").isMemberLabelSenderEnabled()
        ) {
          var C;
          t[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: "\xB7",
              })),
              (t[13] = C))
            : (C = t[13]);
          var b;
          t[14] !== n
            ? ((b = function () {
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(
                    o("WAWebMemberLabelCreateUpdateModal.react")
                      .MemberLabelCreateUpdateModal,
                    {
                      chat: n,
                      entryPoint: o("WAWebGroupMemberTagUpdateLogger")
                        .GroupMemberTagUpdateLogger.ENTRY_POINT.CONTACT_CARD,
                    },
                  ),
                );
              }),
              (t[14] = n),
              (t[15] = b))
            : (b = t[15]);
          var v;
          t[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = u.jsx(r("WDSText.react"), {
                type: "Body2Emphasized",
                colorName: "contentActionEmphasized",
                children: s._(/*BTDS*/ "Add your member tag"),
              })),
              (t[16] = v))
            : (v = t[16]);
          var S;
          t[17] !== b
            ? ((S = u.jsx(r("WAWebUnstyledButton.react"), {
                onClick: b,
                children: v,
              })),
              (t[17] = b),
              (t[18] = S))
            : (S = t[18]);
          var R;
          (t[19] !== _ || t[20] !== S
            ? ((R = u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                justify: "center",
                xstyle: c.memberLabelRow,
                children: [_, C, S],
              })),
              (t[19] = _),
              (t[20] = S),
              (t[21] = R))
            : (R = t[21]),
            (_ = R));
        }
        var L;
        t[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = { className: "x1anpbxc xyorhqc" }), (t[22] = L))
          : (L = t[22]);
        var E;
        return (
          t[23] !== _
            ? ((E = u.jsx("div", babelHelpers.extends({}, L, { children: _ }))),
              (t[23] = _),
              (t[24] = E))
            : (E = t[24]),
          E
        );
      }
    }
    l.MemberLabelContactInfo = d;
  },
  226,
);
