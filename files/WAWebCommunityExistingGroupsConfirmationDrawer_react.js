__d(
  "WAWebCommunityExistingGroupsConfirmationDrawer.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebChat.react",
    "WAWebChatCollection",
    "WAWebCommunityAddGroupConfirmationPopup.react",
    "WAWebCommunityExistingGroupConfirmationPopup.react",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebModalManager",
    "WAWebSettingsIcon.react",
    "WAWebText.react",
    "WAWebToastbar.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = {
        header: {
          maxWidth: "x55n99s",
          textAlign: "x2b8uid",
          lineHeight: "x1evy7pa",
          $$css: !0,
        },
        section: { maxWidth: "x13qrzjo", $$css: !0 },
        disclaimerText: {
          textAlign: "x2b8uid",
          lineHeight: "x16h55sf",
          $$css: !0,
        },
        toastbar: { position: "xixxii4", justifyContent: "xl56j7k", $$css: !0 },
        row: { width: "xh8yej3", justifyContent: "x1qughib", $$css: !0 },
        column: { width: "xh8yej3", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.onClick,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Add to community")), (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n
          ? ((i = c.jsx(r("WAWebToastbar.react"), {
              dismissible: !1,
              wrapperXstyle: d.toastbar,
              children: c.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
                onClick: n,
                testid: void 0,
                children: a,
              }),
            })),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.isCommunityAdmin,
        a = e.selectedGroups,
        i;
      if (n) {
        var l;
        (t[0] !== a.length
          ? ((l =
              a.length === 1
                ? s._(
                    /*BTDS*/ "People in this group will become community members and can join other community groups. You can review group permissions:",
                  )
                : s._(
                    /*BTDS*/ "People in these groups will become community members and can join other community groups. You can review group permissions:",
                  )),
            (t[0] = a.length),
            (t[1] = l))
          : (l = t[1]),
          (i = l));
      } else {
        var u;
        (t[2] !== a.length
          ? ((u =
              a.length === 1
                ? s._(
                    /*BTDS*/ "If approved by community admins, people in this group will become community members and can join other community groups. You can review group permissions:",
                  )
                : s._(
                    /*BTDS*/ "If approved by community admins, people in these groups will become community members and can join other community groups. You can review group permissions:",
                  )),
            (t[2] = a.length),
            (t[3] = u))
          : (u = t[3]),
          (i = u));
      }
      var m;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = [
            d.section,
            o("WAWebUISpacing").uiMargin.top8,
            o("WAWebUISpacing").uiPadding.bottom30,
            o("WAWebUISpacing").uiPadding.top10,
          ]),
          (t[4] = m))
        : (m = t[4]);
      var p;
      return (
        t[5] !== i
          ? ((p = c.jsx(r("WAWebFlexItem.react"), {
              align: "center",
              xstyle: m,
              children: c.jsxs(o("WAWebText.react").WAWebTextSmall, {
                color: "secondary",
                xstyle: d.disclaimerText,
                children: [i, " "],
              }),
            })),
            (t[5] = i),
            (t[6] = p))
          : (p = t[6]),
        p
      );
    }
    function _(t) {
      var n = o("react-compiler-runtime").c(46),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        u = l.communityName,
        _ = l.isCommunityAdmin,
        f = l.isParentGroupClosed,
        g = l.onBack,
        h = l.onGroupPermissions,
        y = l.onSubmit,
        C = l.parentGroupId,
        b = l.selectedGroups,
        v;
      n[3] !== h || n[4] !== b
        ? ((v = function () {
            return c.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "start",
              xstyle: [o("WAWebUISpacing").uiMargin.bottom16, d.column],
              children: b.map(function (e) {
                return c.jsxs(
                  o("WAWebFlex.react").FlexRow,
                  {
                    xstyle: d.row,
                    align: "center",
                    children: [
                      c.jsx(r("WAWebFlexItem.react"), {
                        grow: 0,
                        children: c.jsx(o("WAWebChat.react").ChatOrContact, {
                          theme: "plain",
                          chat: o(
                            "WAWebChatCollection",
                          ).ChatCollection.assertGet(e.id),
                          mode: o("WAWebChat.react").Mode.INFO,
                          noContext: !0,
                          doNotBoldUnread: !0,
                        }),
                      }),
                      c.jsx(o("WAWebButton.react").WAWebButtonPlainWhite, {
                        icon: o("WAWebSettingsIcon.react").SettingsIcon,
                        onClick: function () {
                          return h(e.id);
                        },
                        ariaLabel: s._(
                          /*BTDS*/ "Edit group permissions button",
                        ),
                      }),
                    ],
                  },
                  e.id.toString(),
                );
              }),
            });
          }),
          (n[3] = h),
          (n[4] = b),
          (n[5] = v))
        : (v = n[5]);
      var S = v,
        R;
      n[6] !== y || n[7] !== b
        ? ((R = function () {
            y(b);
          }),
          (n[6] = y),
          (n[7] = b),
          (n[8] = R))
        : (R = n[8]);
      var L = R,
        E;
      n[9] !== u || n[10] !== L || n[11] !== _ || n[12] !== f || n[13] !== b
        ? ((E = function () {
            _
              ? f
                ? L()
                : o("WAWebModalManager").ModalManager.open(
                    c.jsx(
                      r("WAWebCommunityExistingGroupConfirmationPopup.react"),
                      { onContinue: L, communityName: u, groupCount: b.length },
                    ),
                  )
              : o("WAWebModalManager").ModalManager.open(
                  c.jsx(r("WAWebCommunityAddGroupConfirmationPopup.react"), {
                    selectedGroups: b,
                    onOK: function () {
                      (o("WAWebModalManager").ModalManager.close(), L());
                    },
                    onCancel: o("WAWebModalManager").closeModalManager,
                  }),
                );
          }),
          (n[9] = u),
          (n[10] = L),
          (n[11] = _),
          (n[12] = f),
          (n[13] = b),
          (n[14] = E))
        : (E = n[14]);
      var k = E,
        I;
      n[15] !== u || n[16] !== b.length
        ? ((I = s._(
            /*BTDS*/ '_j{"*":"Add {group-count} groups to \\u201c{community-name}\\u201d?","_1":"Add 1 group to \\u201c{community-name}\\u201d?"}',
            [s._plural(b.length, "group-count"), s._param("community-name", u)],
          )),
          (n[15] = u),
          (n[16] = b.length),
          (n[17] = I))
        : (I = n[17]);
      var T = I,
        D;
      n[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = {
            surface: "unknown",
            viewName: "community-existing-groups-confirmation",
          }),
          (n[18] = D))
        : (D = n[18]);
      var x;
      n[19] !== g
        ? ((x = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: g,
          })),
          (n[19] = g),
          (n[20] = x))
        : (x = n[20]);
      var $;
      n[21] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = [
            o("WAWebUISpacing").uiMargin.horiz40,
            o("WAWebUISpacing").uiMargin.bottom40,
          ]),
          (n[21] = $))
        : ($ = n[21]);
      var P;
      n[22] !== C
        ? ((P = c.jsx(r("WAWebFlexItem.react"), {
            align: "center",
            xstyle: o("WAWebUISpacing").uiMargin.top30,
            children: c.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: C,
              size: 104,
              quality: o("WAWebDetailImage.react").DetailImageQuality.High,
              shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
            }),
          })),
          (n[22] = C),
          (n[23] = P))
        : (P = n[23]);
      var N;
      n[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = [
            o("WAWebUISpacing").uiMargin.top20,
            o("WAWebUISpacing").uiMargin.horizAuto,
            o("WAWebUISpacing").uiMargin.bottom0,
            d.header,
          ]),
          (n[24] = N))
        : (N = n[24]);
      var M;
      n[25] !== T
        ? ((M = c.jsx(o("WAWebText.react").WAWebTextLarge, {
            xstyle: N,
            children: T,
          })),
          (n[25] = T),
          (n[26] = M))
        : (M = n[26]);
      var w;
      n[27] !== _ || n[28] !== b
        ? ((w = c.jsx(p, { isCommunityAdmin: _, selectedGroups: b })),
          (n[27] = _),
          (n[28] = b),
          (n[29] = w))
        : (w = n[29]);
      var A;
      n[30] !== S ? ((A = S()), (n[30] = S), (n[31] = A)) : (A = n[31]);
      var F;
      n[32] !== M || n[33] !== w || n[34] !== A || n[35] !== P
        ? ((F = c.jsx(r("WAWebDrawerSection.react"), {
            animation: !1,
            theme: "full-height",
            children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: $,
              children: [P, M, w, A],
            }),
          })),
          (n[32] = M),
          (n[33] = w),
          (n[34] = A),
          (n[35] = P),
          (n[36] = F))
        : (F = n[36]);
      var O;
      n[37] !== i || n[38] !== F
        ? ((O = c.jsx(r("WAWebDrawerBody.react"), { ref: i, children: F })),
          (n[37] = i),
          (n[38] = F),
          (n[39] = O))
        : (O = n[39]);
      var B;
      n[40] !== k
        ? ((B = c.jsx(m, { onClick: k })), (n[40] = k), (n[41] = B))
        : (B = n[41]);
      var W;
      return (
        n[42] !== O || n[43] !== B || n[44] !== x
          ? ((W = c.jsxs(r("WAWebDrawer.react"), {
              tsNavigationData: D,
              children: [x, O, B],
            })),
            (n[42] = O),
            (n[43] = B),
            (n[44] = x),
            (n[45] = W))
          : (W = n[45]),
        W
      );
    }
    l.default = _;
  },
  226,
);
