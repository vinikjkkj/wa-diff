__d(
  "WAWebNewChatFlowBroadcastAudienceDrawer.react",
  [
    "Promise",
    "WAWebBizBroadcastTos",
    "WAWebBizBroadcastTosModal.react",
    "WAWebBizBroadcastsAudienceStrings",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBizBroadcastsRecipientUtils",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCellV2.react",
    "WAWebDefaultProfilePicture.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerViewType",
    "WAWebModalManager",
    "WAWebShapeIcon.react",
    "WAWebSuggestedAudienceCards",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSurfaceType",
    "WDSFlex.stylex",
    "WDSIconIcAdd.react",
    "WDSIconIcUpload.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useEffect,
      f = m.useState,
      g = {
        audienceItem: {
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        pinnedItem: { paddingInlineStart: "x1c1uobl", $$css: !0 },
        suggestedIconBackground: { backgroundColor: "x1od0jb8", $$css: !0 },
        suggestedIconForeground: { color: "xhslqc4", $$css: !0 },
      };
    function h(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.icon,
        a = e.label,
        i = e.onClick,
        l = e.testid,
        s;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (u || (u = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flex,
            g.pinnedItem,
          )),
          (t[0] = s))
        : (s = t[0]);
      var c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = {
            className:
              "x6s0dn4 x3l9nec x1c9tyrk xeusxvb x1pahc9y x1ertn4p x78zum5 x112a4uq xl56j7k x15jighw",
          }),
          (t[1] = c))
        : (c = t[1]);
      var m;
      t[2] !== n
        ? ((m = d.jsx("div", babelHelpers.extends({}, c, { children: n }))),
          (t[2] = n),
          (t[3] = m))
        : (m = t[3]);
      var p;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = [o("WAWebUISpacing").uiPadding.start13]), (t[4] = p))
        : (p = t[4]);
      var _;
      t[5] !== a
        ? ((_ = d.jsx(o("WAWebText.react").WAWebTextTitle, { children: a })),
          (t[5] = a),
          (t[6] = _))
        : (_ = t[6]);
      var f;
      return (
        t[7] !== i || t[8] !== m || t[9] !== _ || t[10] !== l
          ? ((f = d.jsx(
              "div",
              babelHelpers.extends({}, s, {
                children: d.jsx(r("WAWebCellV2.react"), {
                  size: "medium",
                  material: !0,
                  onClick: i,
                  testid: void 0,
                  detailLeft: m,
                  detailLeftXStyle: p,
                  primary: _,
                }),
              }),
            )),
            (t[7] = i),
            (t[8] = m),
            (t[9] = _),
            (t[10] = l),
            (t[11] = f))
          : (f = t[11]),
        f
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.card,
        a = e.onPress,
        i;
      t[0] !== n || t[1] !== a
        ? ((i = function () {
            a(n);
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        s;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (u || (u = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flex,
            g.audienceItem,
          )),
          (t[3] = s))
        : (s = t[3]);
      var c = "suggested-audience-item-" + n.id,
        m;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = [g.suggestedIconBackground]), (t[4] = m))
        : (m = t[4]);
      var p;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = [g.suggestedIconForeground]), (t[5] = p))
        : (p = t[5]);
      var _;
      t[6] !== n.icon
        ? ((_ = d.jsx(o("WAWebShapeIcon.react").ShapeIcon, {
            theme: o("WAWebShapeIcon.react").ShapeIconTheme.Muted,
            backgroundStyles: m,
            size: 48,
            shape: "circle",
            Icon: n.icon,
            iconStyles: p,
          })),
          (t[6] = n.icon),
          (t[7] = _))
        : (_ = t[7]);
      var f;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = [o("WAWebUISpacing").uiPadding.start13]), (t[8] = f))
        : (f = t[8]);
      var h;
      t[9] !== n ? ((h = n.title()), (t[9] = n), (t[10] = h)) : (h = t[10]);
      var y;
      t[11] !== h
        ? ((y = d.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDefault",
            children: h,
          })),
          (t[11] = h),
          (t[12] = y))
        : (y = t[12]);
      var C;
      t[13] !== n
        ? ((C = n.description()), (t[13] = n), (t[14] = C))
        : (C = t[14]);
      var b;
      t[15] !== C
        ? ((b = d.jsx(r("WDSText.react"), {
            type: "Body3",
            colorName: "contentDeemphasized",
            children: C,
          })),
          (t[15] = C),
          (t[16] = b))
        : (b = t[16]);
      var v;
      return (
        t[17] !== l || t[18] !== b || t[19] !== c || t[20] !== _ || t[21] !== y
          ? ((v = d.jsx(
              "div",
              babelHelpers.extends({}, s, {
                children: d.jsx(r("WAWebCellV2.react"), {
                  size: "medium",
                  material: !0,
                  onClick: l,
                  testid: void 0,
                  detailLeft: _,
                  detailLeftXStyle: f,
                  primary: y,
                  secondary: b,
                }),
              }),
            )),
            (t[17] = l),
            (t[18] = b),
            (t[19] = c),
            (t[20] = _),
            (t[21] = y),
            (t[22] = v))
          : (v = t[22]),
        v
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(14),
        a = e.onCardPress,
        i = f(null),
        l = i[0],
        u = i[1],
        c,
        m;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = function () {
            var e = !1;
            return (
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield (s || (s = n("Promise"))).all(
                  o("WAWebSuggestedAudienceCards").SUGGESTED_AUDIENCE_CARDS.map(
                    S,
                  ),
                );
                e || u(new Set(t.filter(v).map(b)));
              })(),
              function () {
                e = !0;
              }
            );
          }),
          (m = []),
          (t[0] = c),
          (t[1] = m))
        : ((c = t[0]), (m = t[1])),
        _(c, m));
      var p, g;
      if (
        (t[2] !== l
          ? ((p = function () {
              l != null &&
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.suggestedAudienceCardsViewed(
                  l.size,
                  o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
                  o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
                );
            }),
            (g = [l]),
            (t[2] = l),
            (t[3] = p),
            (t[4] = g))
          : ((p = t[3]), (g = t[4])),
        _(p, g),
        l == null || l.size === 0)
      )
        return null;
      var h;
      if (t[5] !== l || t[6] !== a) {
        var C;
        t[8] !== l
          ? ((C = function (t) {
              return l.has(t.id);
            }),
            (t[8] = l),
            (t[9] = C))
          : (C = t[9]);
        var R = o(
            "WAWebSuggestedAudienceCards",
          ).SUGGESTED_AUDIENCE_CARDS.filter(C),
          L;
        t[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = { className: "x16ovd2e x12xbjc7 x1iw51ew xde1mab" }),
            (t[10] = L))
          : (L = t[10]);
        var E;
        t[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = d.jsx(
              "div",
              babelHelpers.extends({}, L, {
                children: d.jsx(r("WDSText.react"), {
                  type: "Body2Emphasized",
                  colorName: "contentDeemphasized",
                  children: o(
                    "WAWebBizBroadcastsAudienceStrings",
                  ).getSuggestedAudiencesSectionTitle(),
                }),
              }),
            )),
            (t[11] = E))
          : (E = t[11]);
        var k;
        (t[12] !== a
          ? ((k = function (t) {
              return d.jsx(y, { card: t, onPress: a }, t.id);
            }),
            (t[12] = a),
            (t[13] = k))
          : (k = t[13]),
          (h = d.jsxs(d.Fragment, { children: [E, R.map(k)] })),
          (t[5] = l),
          (t[6] = a),
          (t[7] = h));
      } else h = t[7];
      return h;
    }
    function b(e) {
      return e.id;
    }
    function v(e) {
      return e.eligible;
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSuggestedAudienceCards").resolveCardExpression(
              e,
            ),
            n = yield o(
              "WAWebBizBroadcastsRecipientUtils",
            ).isPredicateEligibleForSuggestedCard(t);
          return { eligible: n, id: e.id };
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.audience,
        a = e.onSelect,
        i;
      t[0] !== n || t[1] !== a
        ? ((i = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.newChatFlowAudienceListItemClicked(
              n.broadcastJid,
            ),
              a(n));
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        s;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (u || (u = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flex,
            g.audienceItem,
          )),
          (t[3] = s))
        : (s = t[3]);
      var c = "audience-item-" + n.broadcastJid,
        m,
        p;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = d.jsx(r("WAWebDefaultProfilePicture.react"), {
            type: "business-broadcast",
            size: 48,
          })),
          (p = [o("WAWebUISpacing").uiPadding.start13]),
          (t[4] = m),
          (t[5] = p))
        : ((m = t[4]), (p = t[5]));
      var _;
      t[6] !== n.name
        ? ((_ = d.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDefault",
            children: n.name,
          })),
          (t[6] = n.name),
          (t[7] = _))
        : (_ = t[7]);
      var f;
      t[8] !== n.recipientCount
        ? ((f = o(
            "WAWebBizBroadcastsCreationStrings",
          ).getExistingAudienceRecipientsLabel(n.recipientCount)),
          (t[8] = n.recipientCount),
          (t[9] = f))
        : (f = t[9]);
      var h;
      t[10] !== f
        ? ((h = d.jsx(r("WDSText.react"), {
            type: "Body3",
            colorName: "contentDeemphasized",
            children: f,
          })),
          (t[10] = f),
          (t[11] = h))
        : (h = t[11]);
      var y;
      return (
        t[12] !== l || t[13] !== c || t[14] !== _ || t[15] !== h
          ? ((y = d.jsx(
              "div",
              babelHelpers.extends({}, s, {
                children: d.jsx(r("WAWebCellV2.react"), {
                  size: "medium",
                  material: !0,
                  onClick: l,
                  testid: void 0,
                  detailLeft: m,
                  detailLeftXStyle: p,
                  primary: _,
                  secondary: h,
                }),
              }),
            )),
            (t[12] = l),
            (t[13] = c),
            (t[14] = _),
            (t[15] = h),
            (t[16] = y))
          : (y = t[16]),
        y
      );
    }
    function E(t) {
      var n = o("react-compiler-runtime").c(38),
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
        s = l.audiences,
        u = l.onBack,
        c = l.onCancel,
        m = l.onCreateAudience,
        p = l.onImportAudience,
        f = l.onSelectAudience,
        g = l.onSuggestedCardPress,
        y = l.suggestedAudiencesEnabled,
        b = l.viewType,
        v,
        S;
      (n[3] !== u
        ? ((v = function () {
            o("WAWebBizBroadcastTos").isBizBroadcastTosAccepted() ||
              o("WAWebModalManager").ModalManager.openSupportModal(
                d.jsx(r("WAWebBizBroadcastTosModal.react"), {
                  entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
                  onAccept: k,
                  onDismiss: function () {
                    (o("WAWebModalManager").ModalManager.closeSupportOrModal(),
                      u());
                  },
                }),
              );
          }),
          (S = [u]),
          (n[3] = u),
          (n[4] = v),
          (n[5] = S))
        : ((v = n[4]), (S = n[5])),
        _(v, S));
      var R =
          b === r("WAWebDrawerViewType").FLYOUT
            ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.FLYOUT
            : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
        E;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = o(
            "WAWebBizBroadcastsCreationStrings",
          ).getCreateBroadcastDrawerTitle()),
          (n[6] = E))
        : (E = n[6]);
      var I = b === r("WAWebDrawerViewType").FLYOUT ? void 0 : u,
        T;
      n[7] !== R || n[8] !== c || n[9] !== I
        ? ((T = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: E,
            type: R,
            onBack: I,
            onCancel: c,
          })),
          (n[7] = R),
          (n[8] = c),
          (n[9] = I),
          (n[10] = T))
        : (T = n[10]);
      var D;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = { className: "x1xrf6ya xde1mab xscbp6u x1iw51ew" }),
          (n[11] = D))
        : (D = n[11]);
      var x, $;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = d.jsx(r("WDSIconIcAdd.react"), {
            colorName: "contentInverse",
          })),
          ($ = o("WAWebBizBroadcastsCreationStrings").getCreateAudienceLabel()),
          (n[12] = x),
          (n[13] = $))
        : ((x = n[12]), ($ = n[13]));
      var P;
      n[14] !== m
        ? ((P = d.jsx(h, {
            icon: x,
            label: $,
            onClick: function () {
              (o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.createAudienceButtonClicked(
                o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
                o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
              ),
                m());
            },
            testid: void 0,
          })),
          (n[14] = m),
          (n[15] = P))
        : (P = n[15]);
      var N, M;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = d.jsx(r("WDSIconIcUpload.react"), {
            colorName: "contentInverse",
          })),
          (M = o("WAWebBizBroadcastsCreationStrings").getImportAudienceLabel()),
          (n[16] = N),
          (n[17] = M))
        : ((N = n[16]), (M = n[17]));
      var w;
      n[18] !== p
        ? ((w = d.jsx(h, {
            icon: N,
            label: M,
            onClick: function () {
              (o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.importAudienceButtonClicked(
                o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
                o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
              ),
                p());
            },
            testid: void 0,
          })),
          (n[18] = p),
          (n[19] = w))
        : (w = n[19]);
      var A;
      n[20] !== w || n[21] !== P
        ? ((A = d.jsxs(
            "div",
            babelHelpers.extends({}, D, { children: [P, w] }),
          )),
          (n[20] = w),
          (n[21] = P),
          (n[22] = A))
        : (A = n[22]);
      var F;
      n[23] !== g || n[24] !== y
        ? ((F = y === !0 && g != null && d.jsx(C, { onCardPress: g })),
          (n[23] = g),
          (n[24] = y),
          (n[25] = F))
        : (F = n[25]);
      var O;
      n[26] !== s || n[27] !== f
        ? ((O =
            s.length > 0 &&
            d.jsxs(d.Fragment, {
              children: [
                d.jsx("div", {
                  className: "x16ovd2e x12xbjc7 x1iw51ew xde1mab",
                  children: d.jsx(r("WDSText.react"), {
                    type: "Body2Emphasized",
                    colorName: "contentDeemphasized",
                    children: o(
                      "WAWebBizBroadcastsCreationStrings",
                    ).getExistingAudiencesLabel(),
                  }),
                }),
                s.map(function (e) {
                  return d.jsx(L, { audience: e, onSelect: f }, e.broadcastJid);
                }),
              ],
            })),
          (n[26] = s),
          (n[27] = f),
          (n[28] = O))
        : (O = n[28]);
      var B;
      n[29] !== A || n[30] !== F || n[31] !== O
        ? ((B = d.jsxs(r("WAWebDrawerBody.react"), { children: [A, F, O] })),
          (n[29] = A),
          (n[30] = F),
          (n[31] = O),
          (n[32] = B))
        : (B = n[32]);
      var W;
      return (
        n[33] !== i || n[34] !== B || n[35] !== T || n[36] !== b
          ? ((W = d.jsxs(r("WAWebDrawer.react"), {
              ref: i,
              testid: void 0,
              viewType: b,
              children: [T, B],
            })),
            (n[33] = i),
            (n[34] = B),
            (n[35] = T),
            (n[36] = b),
            (n[37] = W))
          : (W = n[37]),
        W
      );
    }
    function k() {
      o("WAWebModalManager").ModalManager.closeSupportOrModal();
    }
    l.default = E;
  },
  98,
);
