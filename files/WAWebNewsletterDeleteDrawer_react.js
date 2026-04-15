__d(
  "WAWebNewsletterDeleteDrawer.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebCommonNewsletterStrings",
    "WAWebDeleteIcon.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebEnforcementActionLogging",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebNewsletterDeleteModal.react",
    "WAWebNewsletterDrawerBodyParagraph.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterImageWithAction.react",
    "WAWebNewsletterWamoSubUtils",
    "WAWebText_DONOTUSE.react",
    "WAWebWamEnumInteractionSurface",
    "WDSIconIcHistory.react",
    "cr:640",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = {
        container: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          justifyContent: "x1nhvcw1",
          paddingTop: "xijc0j3",
          paddingInlineEnd: "x15zmtp0",
          paddingBottom: "xq1608w",
          paddingInlineStart: "x1oiqv2n",
          flexGrow: "x1iyjqo2",
          $$css: !0,
        },
        buttonContainer: { textAlign: "x2b8uid", $$css: !0 },
        header: { textAlign: "x2b8uid", lineHeight: "x1evy7pa", $$css: !0 },
        icon: { color: "xhslqc4", $$css: !0 },
        marginTop16: { marginTop: "x98l61r", $$css: !0 },
        marginBottom16: { marginBottom: "x1ua1l7f", $$css: !0 },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(43),
        a = e.chat,
        i = e.onBack,
        l = e.onCancel,
        c = e.ref,
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = ["newsletterMetadata", "contact"]), (t[0] = d))
        : (d = t[0]);
      var _ = o("useWAWebModelValues").useModelValues(a, d),
        h;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = ["id", "name"]), (t[1] = h))
        : (h = t[1]);
      var y = o("useWAWebModelValues").useModelValues(_.contact, h),
        C;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = ["suspended", "wamoSubPlanId"]), (t[2] = C))
        : (C = t[2]);
      var b = o("useWAWebModelValues").useOptionalModelValues(
          _.newsletterMetadata,
          C,
        ),
        v;
      (t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = []), (t[3] = v))
        : (v = t[3]),
        m(g, v));
      var S;
      t[4] !== y.name
        ? ((S = s._(/*BTDS*/ 'Delete "{channel-name}"?', [
            s._param(
              "channel-name",
              u.jsx(o("WAWebEmojiText.react").EmojiText, { text: y.name }),
            ),
          ])),
          (t[4] = y.name),
          (t[5] = S))
        : (S = t[5]);
      var R = S,
        L;
      if (t[6] !== b) {
        L = [];
        var E;
        if (
          (t[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((E = {
                title: s._(/*BTDS*/ "Channel will be permanently deleted"),
                description: s._(
                  /*BTDS*/ "You won't be able to recover the channel.",
                ),
                Icon: o("WAWebDeleteIcon.react").DeleteIcon,
                key: "channel-will-be-permanently-deleted",
              }),
              (t[8] = E))
            : (E = t[8]),
          L.push(E),
          n("cr:640") != null &&
            o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(
              b,
            ) &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isWamoSubCreatorExperienceSupported())
        ) {
          if ((b == null ? void 0 : b.suspended) !== !0) {
            var k;
            (t[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((k =
                  n(
                    "cr:640",
                  ).getNewsletterDeleteDialogSuspendedWamoSubWarningMessageContent()),
                (t[9] = k))
              : (k = t[9]),
              L.push(k));
          }
          var I;
          (t[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((I =
                n(
                  "cr:640",
                ).getNewsletterDeleteDialogWamoSubWarningMessageContent()),
              (t[10] = I))
            : (I = t[10]),
            L.push(I));
        } else if ((b == null ? void 0 : b.suspended) !== !0) {
          var T;
          (t[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((T = {
                title: s._(/*BTDS*/ "Followers can see past activity"),
                description: s._(
                  /*BTDS*/ "Past channel activity will stay on your followers' devices.",
                ),
                Icon: r("WDSIconIcHistory.react"),
                key: "followers-can-see-past-activity",
              }),
              (t[11] = T))
            : (T = t[11]),
            L.push(T));
        }
        ((t[6] = b), (t[7] = L));
      } else L = t[7];
      var D;
      t[12] !== a
        ? ((D = function () {
            (r("WAWebEnforcementActionLogging").isSessionStarted() &&
              r("WAWebEnforcementActionLogging").logDeleteChannelConfirmClick(),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebNewsletterDeleteModal.react"), { chat: a }),
              ));
          }),
          (t[12] = a),
          (t[13] = D))
        : (D = t[13]);
      var x = D,
        $;
      t[14] !== i
        ? (($ = function () {
            (r("WAWebEnforcementActionLogging").logBackClick(),
              i == null || i());
          }),
          (t[14] = i),
          (t[15] = $))
        : ($ = t[15]);
      var P = $,
        N;
      t[16] !== l
        ? ((N = function () {
            (r("WAWebEnforcementActionLogging").logDismissDrawerClick(),
              l == null || l());
          }),
          (t[16] = l),
          (t[17] = N))
        : (N = t[17]);
      var M = N,
        w;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = { surface: "unknown", viewName: "newsletter-delete" }),
          (t[18] = w))
        : (w = t[18]);
      var A;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = o("WAWebCommonNewsletterStrings").getDeleteChannelText()),
          (t[19] = A))
        : (A = t[19]);
      var F;
      t[20] !== P || t[21] !== M
        ? ((F = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: A,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: P,
            onCancel: M,
          })),
          (t[20] = P),
          (t[21] = M),
          (t[22] = F))
        : (F = t[22]);
      var O;
      t[23] !== a
        ? ((O = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: u.jsx(r("WAWebNewsletterImageWithAction.react"), {
              chat: a,
              actionTheme: "danger",
              Icon: o("WAWebDeleteIcon.react").DeleteIcon,
            }),
          })),
          (t[23] = a),
          (t[24] = O))
        : (O = t[24]);
      var B;
      t[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = [p.header, p.marginTop16, p.marginBottom16]), (t[25] = B))
        : (B = t[25]);
      var W;
      t[26] !== R
        ? ((W = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
              xstyle: B,
              size: "24",
              color: "dark",
              weight: "medium",
              children: R,
            }),
          })),
          (t[26] = R),
          (t[27] = W))
        : (W = t[27]);
      var q;
      t[28] !== L ? ((q = L.map(f)), (t[28] = L), (t[29] = q)) : (q = t[29]);
      var U;
      t[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = [p.buttonContainer, p.marginTop16]), (t[30] = U))
        : (U = t[30]);
      var V;
      t[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = s._(/*BTDS*/ "Delete")), (t[31] = V))
        : (V = t[31]);
      var H;
      t[32] !== x
        ? ((H = u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: U,
            children: u.jsx(o("WAWebButton.react").Button, {
              testid: void 0,
              type: "solid-warning",
              onClick: x,
              children: V,
            }),
          })),
          (t[32] = x),
          (t[33] = H))
        : (H = t[33]);
      var G;
      t[34] !== O || t[35] !== W || t[36] !== q || t[37] !== H
        ? ((G = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              xstyle: p.container,
              children: [O, W, q, H],
            }),
          })),
          (t[34] = O),
          (t[35] = W),
          (t[36] = q),
          (t[37] = H),
          (t[38] = G))
        : (G = t[38]);
      var z;
      return (
        t[39] !== c || t[40] !== F || t[41] !== G
          ? ((z = u.jsxs(r("WAWebDrawer.react"), {
              ref: c,
              testid: void 0,
              tsNavigationData: w,
              children: [F, G],
            })),
            (t[39] = c),
            (t[40] = F),
            (t[41] = G),
            (t[42] = z))
          : (z = t[42]),
        z
      );
    }
    function f(e) {
      var t = e.Icon,
        n = e.description,
        o = e.key,
        a = e.title;
      return u.jsx(
        r("WAWebNewsletterDrawerBodyParagraph.react"),
        {
          icon: u.jsx(t, { width: 24, height: 24, xstyle: p.icon }),
          title: a,
          description: n,
        },
        o,
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      r("WAWebEnforcementActionLogging").setSurface(
        o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
          .DELETE_CHANNEL_CONFIRMATION_SCREEN,
      );
    }
    l.default = _;
  },
  226,
);
