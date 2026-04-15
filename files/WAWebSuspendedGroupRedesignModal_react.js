__d(
  "WAWebSuspendedGroupRedesignModal.react",
  [
    "fbt",
    "WAWebCxtUrl",
    "WAWebDeactivateCommunityDrawerLoadable",
    "WAWebDrawerManager",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebLeaveCommunityModal.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebSuspendedGroupUtils",
    "WDSButton.react",
    "WDSButtonGroup.react",
    "WDSIconIcBlock.react",
    "WDSIconIcCheck.react",
    "WDSIconIcClose.react",
    "WDSIconIcGppMaybe.react",
    "WDSIllustrationWdsPictoCommunitiesBlockFeedbackNegative.react",
    "WDSIllustrationWdsPictoGroupBlockFeedbackNegative.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        icon: { color: "xhslqc4", $$css: !0 },
        title: { paddingTop: "x9orja2", paddingBottom: "xwib8y2", $$css: !0 },
        bodyRow: {
          paddingTop: "xyinxu5",
          paddingInlineStart: "x1g0dm76",
          paddingInlineEnd: "xyri2b",
          columnGap: "x1qgv0r9",
          $$css: !0,
        },
        buttons: {
          paddingTop: "x1p5oq8j",
          paddingBottom: "xsag5q8",
          alignSelf: "xpvyfi4",
          $$css: !0,
        },
      };
    function d(e) {
      var t,
        n = o("react-compiler-runtime").c(60),
        a = e.chat,
        i = e.isCommunity,
        l;
      if (n[0] !== ((t = a.groupMetadata) == null ? void 0 : t.participants)) {
        var d, p;
        ((l =
          (d = a.groupMetadata) == null ? void 0 : d.participants.iAmAdmin()),
          (n[0] = (p = a.groupMetadata) == null ? void 0 : p.participants),
          (n[1] = l));
      } else l = n[1];
      var _ = l === !0,
        f;
      n[2] !== a.id
        ? ((f = function () {
            (o("WAWebModalManager").closeModalManager(),
              o("WAWebSuspendedGroupUtils").openGroupSuspensionAppealModal(
                a.id,
              ));
          }),
          (n[2] = a.id),
          (n[3] = f))
        : (f = n[3]);
      var g = f,
        h = m,
        y,
        C;
      if (i)
        if (_) {
          var S;
          (n[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((S = s._(/*BTDS*/ "Deactivate community")), (n[7] = S))
            : (S = n[7]),
            (y = S));
          var R;
          (n[8] !== a
            ? ((R = function () {
                (o("WAWebModalManager").ModalManager.close(),
                  o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                    u.jsx(
                      o("WAWebDeactivateCommunityDrawerLoadable")
                        .DeactivateCommunityDrawerLoadable,
                      {
                        onBack: o("WAWebDrawerManager").closeDrawerRight,
                        chat: a,
                      },
                    ),
                  ));
              }),
              (n[8] = a),
              (n[9] = R))
            : (R = n[9]),
            (C = R));
        } else {
          var L;
          (n[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((L = s._(/*BTDS*/ "Exit community")), (n[10] = L))
            : (L = n[10]),
            (y = L));
          var E;
          (n[11] !== a
            ? ((E = function () {
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebLeaveCommunityModal.react"), { chat: a }),
                  { transition: "modal-flow" },
                );
              }),
              (n[11] = a),
              (n[12] = E))
            : (E = n[12]),
            (C = E));
        }
      else {
        var b;
        (n[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = s._(/*BTDS*/ "Delete group")), (n[4] = b))
          : (b = n[4]),
          (y = b));
        var v;
        (n[5] !== a
          ? ((v = function () {
              o("WAWebSuspendedGroupUtils").openExitAndDeleteGroupModal(a);
            }),
            (n[5] = a),
            (n[6] = v))
          : (v = n[6]),
          (C = v));
      }
      var k;
      if (_) {
        var I;
        (n[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = s._(
              /*BTDS*/ "You can request a review if you think there has been a mistake.",
            )),
            (n[13] = I))
          : (I = n[13]),
          (k = I));
      } else if (i) {
        var T;
        (n[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = s._(/*BTDS*/ "Only community admins can request a review.")),
            (n[14] = T))
          : (T = n[14]),
          (k = T));
      } else {
        var D;
        (n[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = s._(/*BTDS*/ "Only group admins can request a review.")),
            (n[15] = D))
          : (D = n[15]),
          (k = D));
      }
      var x;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "start",
            children: u.jsx(r("WDSButton.react"), {
              Icon: r("WDSIconIcClose.react"),
              onPress: h,
              variant: "borderless",
              size: "medium",
              "aria-label": s._(/*BTDS*/ "Close"),
            }),
          })),
          (n[16] = x))
        : (x = n[16]);
      var $;
      n[17] !== i
        ? (($ = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            children: i
              ? u.jsx(
                  r(
                    "WDSIllustrationWdsPictoCommunitiesBlockFeedbackNegative.react",
                  ),
                  {},
                )
              : u.jsx(
                  r("WDSIllustrationWdsPictoGroupBlockFeedbackNegative.react"),
                  {},
                ),
          })),
          (n[17] = i),
          (n[18] = $))
        : ($ = n[18]);
      var P;
      n[19] !== i
        ? ((P = i
            ? s._(/*BTDS*/ "Community activity suspended")
            : s._(/*BTDS*/ "This group is suspended")),
          (n[19] = i),
          (n[20] = P))
        : (P = n[20]);
      var N;
      n[21] !== P
        ? ((N = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            xstyle: c.title,
            children: u.jsx(r("WDSText.react"), {
              type: "Headline1",
              colorName: "contentDefault",
              children: P,
            }),
          })),
          (n[21] = P),
          (n[22] = N))
        : (N = n[22]);
      var M;
      n[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = u.jsx(r("WDSIconIcGppMaybe.react"), { xstyle: c.icon })),
          (n[23] = M))
        : (M = n[23]);
      var w;
      n[24] !== i
        ? ((w = i
            ? s._(
                /*BTDS*/ "Some activity in this community may be a sign of spam or scams, or be harmful to others.",
              )
            : s._(
                /*BTDS*/ "Some activity in this group may be a sign of spam or scams, or be harmful to others.",
              )),
          (n[24] = i),
          (n[25] = w))
        : (w = n[25]);
      var A;
      n[26] !== i
        ? ((A = i
            ? o("WAWebCxtUrl").getCommunityNotAvailableFaqUrl()
            : o("WAWebSuspendedGroupUtils").getSuspendedFaqUrl()),
          (n[26] = i),
          (n[27] = A))
        : (A = n[27]);
      var F;
      n[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = s._(/*BTDS*/ "Learn more")), (n[28] = F))
        : (F = n[28]);
      var O;
      n[29] !== A
        ? ((O = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: A,
            children: F,
          })),
          (n[29] = A),
          (n[30] = O))
        : (O = n[30]);
      var B;
      n[31] !== O || n[32] !== w
        ? ((B = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: c.bodyRow,
            children: [
              M,
              u.jsxs(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                children: [w, " ", O],
              }),
            ],
          })),
          (n[31] = O),
          (n[32] = w),
          (n[33] = B))
        : (B = n[33]);
      var W;
      n[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = u.jsx(r("WDSIconIcBlock.react"), { xstyle: c.icon })),
          (n[34] = W))
        : (W = n[34]);
      var q;
      n[35] !== i
        ? ((q = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: c.bodyRow,
            children: [
              W,
              u.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                children: i
                  ? s._(
                      /*BTDS*/ "No one in this community can send messages, add members or groups, download or forward media.",
                    )
                  : s._(
                      /*BTDS*/ "No one in this group can send messages, add members, download or forward media.",
                    ),
              }),
            ],
          })),
          (n[35] = i),
          (n[36] = q))
        : (q = n[36]);
      var U;
      n[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = u.jsx(r("WDSIconIcCheck.react"), { xstyle: c.icon })),
          (n[37] = U))
        : (U = n[37]);
      var V;
      n[38] !== k
        ? ((V = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: c.bodyRow,
            children: [
              U,
              u.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                children: k,
              }),
            ],
          })),
          (n[38] = k),
          (n[39] = V))
        : (V = n[39]);
      var H;
      n[40] !== B || n[41] !== q || n[42] !== V
        ? ((H = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            children: [B, q, V],
          })),
          (n[40] = B),
          (n[41] = q),
          (n[42] = V),
          (n[43] = H))
        : (H = n[43]);
      var G = _ ? g : h,
        z;
      n[44] !== _
        ? ((z = _ ? s._(/*BTDS*/ "Request review") : s._(/*BTDS*/ "OK")),
          (n[44] = _),
          (n[45] = z))
        : (z = n[45]);
      var j;
      n[46] !== G || n[47] !== z
        ? ((j = { variant: "filled", onPress: G, size: "medium", label: z }),
          (n[46] = G),
          (n[47] = z),
          (n[48] = j))
        : (j = n[48]);
      var K;
      n[49] !== y || n[50] !== C
        ? ((K = {
            variant: "borderless",
            type: "destructive",
            onPress: C,
            size: "medium",
            label: y,
          }),
          (n[49] = y),
          (n[50] = C),
          (n[51] = K))
        : (K = n[51]);
      var Q;
      n[52] !== j || n[53] !== K
        ? ((Q = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: c.buttons,
            children: u.jsx(r("WDSButtonGroup.react"), {
              orientation: "horizontal",
              primaryButtonProps: j,
              secondaryButtonProps: K,
            }),
          })),
          (n[52] = j),
          (n[53] = K),
          (n[54] = Q))
        : (Q = n[54]);
      var X;
      return (
        n[55] !== H || n[56] !== Q || n[57] !== $ || n[58] !== N
          ? ((X = u.jsx(o("WAWebModal.react").Modal, {
              onOverlayClick: h,
              children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                children: [x, $, N, H, Q],
              }),
            })),
            (n[55] = H),
            (n[56] = Q),
            (n[57] = $),
            (n[58] = N),
            (n[59] = X))
          : (X = n[59]),
        X
      );
    }
    function m() {
      o("WAWebModalManager").closeModalManager();
    }
    l.default = d;
  },
  226,
);
