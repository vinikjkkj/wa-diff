__d(
  "WAWebCommunityTransferOwnershipConfirmationDrawer.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebCmd",
    "WAWebCommunityInformationCell.react",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebNetworkStatus",
    "WAWebSpinner.react",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebTransferCommunityOwnershipAction",
    "WAWebUISpacing",
    "WAWebUserShieldIcon.react",
    "WAWebWarningIcon.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useRef,
      m = c.useState,
      p = {
        container: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        buttonContainer: { textAlign: "x2b8uid", $$css: !0 },
        header: { textAlign: "x2b8uid", lineHeight: "x1evy7pa", $$css: !0 },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(33),
        a = e.chat,
        i = e.newOwner,
        l = e.onBack,
        c = e.ref,
        _ = d(),
        g = m(!1),
        h = g[0],
        y = g[1],
        C;
      if (t[0] !== i) {
        var b = o("WAWebFrontendContactGetters").getFormattedName(i),
          v;
        (t[2] !== b
          ? ((v = u.jsx(o("WAWebEmojiText.react").EmojiText, { text: b })),
            (t[2] = b),
            (t[3] = v))
          : (v = t[3]),
          (C = s._(/*BTDS*/ "Assign {contact_name} as the new owner", [
            s._param("contact_name", v),
          ])),
          (t[0] = i),
          (t[1] = C));
      } else C = t[1];
      var S = C,
        R;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = [
            {
              title: s._(/*BTDS*/ "You'll no longer be an owner"),
              description: s._(
                /*BTDS*/ "Only the owner can deactivate the community.",
              ),
              Icon: o("WAWebWarningIcon.react").WarningIcon,
              key: "no-longer-owner",
            },
            {
              title: s._(/*BTDS*/ "You'll remain a community admin"),
              description: s._(
                /*BTDS*/ "Another admin can demote you or remove you from the community.",
              ),
              Icon: o("WAWebUserShieldIcon.react").UserShieldIcon,
              key: "remain-admin",
            },
          ]),
          (t[4] = R))
        : (R = t[4]);
      var L = R,
        E;
      t[5] !== h
        ? ((E = h
            ? u.jsx(o("WAWebSpinner.react").Spinner, { size: 18 })
            : s._(/*BTDS*/ "Confirm")),
          (t[5] = h),
          (t[6] = E))
        : (E = t[6]);
      var k = E,
        I;
      t[7] !== a || t[8] !== i
        ? ((I = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (!r("WAWebNetworkStatus").online) {
                o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(
                      /*BTDS*/ "Check your internet connection and try again.",
                    ),
                  }),
                );
                return;
              }
              (y(!0),
                o("WAWebTransferCommunityOwnershipAction")
                  .transferCommunityOwnershipAction(a, i)
                  .then(function () {
                    o("WAWebCmd").Cmd.openCommunityTabbedInfo(
                      a.id,
                      void 0,
                      !1,
                      !0,
                    );
                  })
                  .catch(function () {
                    (y(!1),
                      o("WAWebDrawerManager").DrawerManager.closeDrawerRight());
                  }));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[7] = a),
          (t[8] = i),
          (t[9] = I))
        : (I = t[9]);
      var T = I,
        D;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = {
            surface: "unknown",
            viewName: "community-transfer-confirmation",
          }),
          (t[10] = D))
        : (D = t[10]);
      var x;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = s._(/*BTDS*/ "Assign new owner")), (t[11] = x))
        : (x = t[11]);
      var $;
      t[12] !== l
        ? (($ = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: x,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: l,
          })),
          (t[12] = l),
          (t[13] = $))
        : ($ = t[13]);
      var P;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = [
            p.container,
            o("WAWebUISpacing").uiPadding.top32,
            o("WAWebUISpacing").uiPadding.horiz48,
            o("WAWebUISpacing").uiPadding.bottom48,
          ]),
          (t[14] = P))
        : (P = t[14]);
      var N;
      t[15] !== a.id
        ? ((N = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: a.id,
              size: 104,
              quality: o("WAWebDetailImage.react").DetailImageQuality.High,
              shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
            }),
          })),
          (t[15] = a.id),
          (t[16] = N))
        : (N = t[16]);
      var M;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = [p.header, o("WAWebUISpacing").uiMargin.vert16]), (t[17] = M))
        : (M = t[17]);
      var w;
      t[18] !== S
        ? ((w = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
              weight: "bold",
              xstyle: M,
              children: S,
            }),
          })),
          (t[18] = S),
          (t[19] = w))
        : (w = t[19]);
      var A;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = L.map(f)), (t[20] = A))
        : (A = t[20]);
      var F;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = [p.buttonContainer, o("WAWebUISpacing").uiMargin.top16]),
          (t[21] = F))
        : (F = t[21]);
      var O;
      t[22] !== k || t[23] !== T
        ? ((O = u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: F,
            children: u.jsx(o("WAWebButton.react").Button, {
              testid: void 0,
              type: "primary",
              onClick: T,
              children: k,
            }),
          })),
          (t[22] = k),
          (t[23] = T),
          (t[24] = O))
        : (O = t[24]);
      var B;
      t[25] !== w || t[26] !== O || t[27] !== N
        ? ((B = u.jsx(r("WAWebDrawerBody.react"), {
            ref: _,
            tabIndex: "-1",
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              xstyle: P,
              children: [N, w, A, O],
            }),
          })),
          (t[25] = w),
          (t[26] = O),
          (t[27] = N),
          (t[28] = B))
        : (B = t[28]);
      var W;
      return (
        t[29] !== c || t[30] !== B || t[31] !== $
          ? ((W = u.jsxs(r("WAWebDrawer.react"), {
              ref: c,
              testid: void 0,
              tsNavigationData: D,
              children: [$, B],
            })),
            (t[29] = c),
            (t[30] = B),
            (t[31] = $),
            (t[32] = W))
          : (W = t[32]),
        W
      );
    }
    function f(e) {
      var t = e.Icon,
        n = e.description,
        o = e.key,
        a = e.title;
      return u.jsx(
        r("WAWebCommunityInformationCell.react"),
        { Icon: t, title: a, description: n },
        o,
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
