__d(
  "WAWebBizBroadcastAudienceSection.react",
  [
    "fbt",
    "WAWebAudienceExpressionTypes",
    "WAWebBizAdCard.react",
    "WAWebBizBroadcastAudienceSectionButtonContextMenu.react",
    "WAWebBizBroadcastsAudienceUtils",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBizBroadcastsHomeStrings",
    "WAWebBizBroadcastsNewBroadcastAddButton.react",
    "WAWebBizGatingUtils",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebChatGroupUtils",
    "WAWebDefaultProfilePicture.react",
    "WAWebFlex.react",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSurfaceType",
    "WDSBanner.react",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "WDSIconIcEdit.react",
    "WDSText.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBizBroadcastOverlappingRecipients",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useRef,
      _ = {
        listItem: {
          alignItems: "x6s0dn4",
          rowGap: "x8a3fw1",
          columnGap: "x1aj3ljl",
          $$css: !0,
        },
        rowButtons: { columnGap: "x1trrmfo", $$css: !0 },
        textContainer: { flexGrow: "x1iyjqo2", $$css: !0 },
      };
    function f(e) {
      return e === o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD;
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.entryPoint,
        a = e.hasSelectedChats,
        i = e.onExistingAudiences,
        l = e.onImportAudience,
        s = e.onOpenUpsertAudience;
      if (
        f(n) ||
        (!o("WAWebBizGatingUtils").isBizBroadcastMultiAudienceSendEnabled() &&
          a)
      )
        return null;
      var c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = o(
            "WAWebBizBroadcastsAudienceUtils",
          ).getBroadcastChatsAsAudiences()),
          (t[0] = c))
        : (c = t[0]);
      var d = c.length > 0,
        m;
      t[1] !== n || t[2] !== i || t[3] !== l || t[4] !== s
        ? ((m = u.jsx(
            r("WAWebBizBroadcastAudienceSectionButtonContextMenu.react"),
            {
              entryPoint: n,
              onNewAudience: s,
              onImportAudience: l,
              onExistingAudiences: i,
              showExistingAudienceRow: d,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .BB_CAMPAIGN_DRAFT,
            },
          )),
          (t[1] = n),
          (t[2] = i),
          (t[3] = l),
          (t[4] = s),
          (t[5] = m))
        : (m = t[5]);
      var p = m,
        _;
      t[6] !== a
        ? ((_ = a
            ? o("WAWebBizBroadcastsCreationStrings").getAddAudienceLabel()
            : o("WAWebBizBroadcastsCreationStrings").getChooseAudienceLabel()),
          (t[6] = a),
          (t[7] = _))
        : (_ = t[7]);
      var g;
      t[8] !== n
        ? ((g = function () {
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.addAudienceButtonClicked(n);
          }),
          (t[8] = n),
          (t[9] = g))
        : (g = t[9]);
      var h;
      return (
        t[10] !== p || t[11] !== _ || t[12] !== g
          ? ((h = u.jsx(r("WAWebBizBroadcastsNewBroadcastAddButton.react"), {
              buttonLabel: _,
              contextMenu: p,
              onButtonClick: g,
              testid: void 0,
            })),
            (t[10] = p),
            (t[11] = _),
            (t[12] = g),
            (t[13] = h))
          : (h = t[13]),
        h
      );
    }
    function h(e) {
      var t,
        n = o("react-compiler-runtime").c(16),
        a = e.chat,
        i = e.entryPoint,
        l = e.handleDeleteAudience,
        c = e.handleEditAudience,
        d = (t = a.broadcastMetadata) == null ? void 0 : t.audienceExpression,
        m;
      n[0] !== d
        ? ((m =
            d != null
              ? o("WAWebAudienceExpressionTypes").getLabelIdsFromExpression(d)
              : []),
          (n[0] = d),
          (n[1] = m))
        : (m = n[1]);
      var p = m,
        g = p.length > 0,
        h = !g,
        y;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = o(
            "WAWebBizBroadcastsHomeStrings",
          ).getEditAudiencesWithListsLabel()),
          (n[2] = y))
        : (y = n[2]);
      var C;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Edit audience")), (n[3] = C))
        : (C = n[3]);
      var b;
      n[4] !== c || n[5] !== g
        ? ((b = u.jsx(r("WDSButton.react"), {
            "aria-label": C,
            variant: "borderless",
            size: "small",
            type: "default",
            Icon: r("WDSIconIcEdit.react"),
            onPress: c,
            disabled: g,
            testid: void 0,
          })),
          (n[4] = c),
          (n[5] = g),
          (n[6] = b))
        : (b = n[6]);
      var v;
      n[7] !== h || n[8] !== b
        ? ((v = u.jsx(r("WDSTooltip.react"), {
            disabled: h,
            label: y,
            children: b,
          })),
          (n[7] = h),
          (n[8] = b),
          (n[9] = v))
        : (v = n[9]);
      var S;
      n[10] !== i || n[11] !== l
        ? ((S =
            !f(i) &&
            u.jsx(r("WDSButton.react"), {
              "aria-label": s._(/*BTDS*/ "Remove audience"),
              variant: "borderless",
              size: "small",
              type: "default",
              Icon: r("WDSIconIcClose.react"),
              onPress: l,
              testid: void 0,
            })),
          (n[10] = i),
          (n[11] = l),
          (n[12] = S))
        : (S = n[12]);
      var R;
      return (
        n[13] !== v || n[14] !== S
          ? ((R = u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: _.rowButtons,
              children: [v, S],
            })),
            (n[13] = v),
            (n[14] = S),
            (n[15] = R))
          : (R = n[15]),
        R
      );
    }
    function y(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(21),
        i = e.chat,
        l = e.entryPoint,
        s = e.handleDeleteAudience,
        c = e.handleEditAudience,
        d;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = ["contact", "broadcastMetadata"]), (a[0] = d))
        : (d = a[0]);
      var m = o("useWAWebModelValues").useModelValues(i, d),
        p;
      a[1] !== i
        ? ((p = o("WAWebChatGroupUtils").getBroadcastChatTitle(i)),
          (a[1] = i),
          (a[2] = p))
        : (p = a[2]);
      var f = p,
        g =
          (t =
            (n = m.broadcastMetadata) == null ? void 0 : n.recipients.length) !=
          null
            ? t
            : 0,
        y;
      a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(o("WAWebFlex.react").FlexItem, {
            shrink: 0,
            children: u.jsx(r("WAWebDefaultProfilePicture.react"), {
              type: "business-broadcast",
              size: 40,
            }),
          })),
          (a[3] = y))
        : (y = a[3]);
      var C;
      a[4] !== f
        ? ((C = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDefault",
            testid: void 0,
            children: f,
          })),
          (a[4] = f),
          (a[5] = C))
        : (C = a[5]);
      var b;
      a[6] !== g
        ? ((b = o(
            "WAWebBizBroadcastsCreationStrings",
          ).getAudienceRecipientCountLabel(g)),
          (a[6] = g),
          (a[7] = b))
        : (b = a[7]);
      var v;
      a[8] !== b
        ? ((v = u.jsx(r("WDSText.react"), {
            type: "Body3",
            colorName: "contentDeemphasized",
            testid: void 0,
            children: b,
          })),
          (a[8] = b),
          (a[9] = v))
        : (v = a[9]);
      var S;
      a[10] !== C || a[11] !== v
        ? ((S = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: _.textContainer,
            children: [C, v],
          })),
          (a[10] = C),
          (a[11] = v),
          (a[12] = S))
        : (S = a[12]);
      var R;
      a[13] !== i || a[14] !== l || a[15] !== s || a[16] !== c
        ? ((R = u.jsx(h, {
            chat: i,
            entryPoint: l,
            handleDeleteAudience: s,
            handleEditAudience: c,
          })),
          (a[13] = i),
          (a[14] = l),
          (a[15] = s),
          (a[16] = c),
          (a[17] = R))
        : (R = a[17]);
      var L;
      return (
        a[18] !== S || a[19] !== R
          ? ((L = u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: _.listItem,
              children: [y, S, R],
            })),
            (a[18] = S),
            (a[19] = R),
            (a[20] = L))
          : (L = a[20]),
        L
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(29),
        n = e.entryPoint,
        a = e.onExistingAudiences,
        i = e.onImportAudience,
        l = e.onOpenUpsertAudience,
        c = e.selectedChats,
        d = e.setSelectedChats,
        _ = p(null),
        h = p(!1),
        C;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function () {
            if (h.current) {
              var e = _.current;
              if (e != null && !e.contains(document.activeElement)) {
                h.current = !1;
                var t = e.querySelector('button, [tabindex="0"]');
                t instanceof HTMLElement && t.focus();
              }
            }
          }),
          (t[0] = C))
        : (C = t[0]),
        m(C, void 0));
      var b;
      t[1] !== d
        ? ((b = function (t) {
            return function () {
              (d(function (e) {
                var n = new Set(e);
                return (n.delete(t), n);
              }),
                (h.current = !0));
            };
          }),
          (t[1] = d),
          (t[2] = b))
        : (b = t[2]);
      var v = b,
        S;
      t[3] !== a
        ? ((S = function () {
            ((h.current = !0), a == null || a());
          }),
          (t[3] = a),
          (t[4] = S))
        : (S = t[4]);
      var R = S,
        L = o(
          "useWAWebBizBroadcastOverlappingRecipients",
        ).useWAWebBizBroadcastOverlappingRecipients(c),
        E;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = { className: "x19aeb6u xh8yej3" }), (t[5] = E))
        : (E = t[5]);
      var k;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = o(
            "WAWebBizBroadcastsCreationStrings",
          ).getAudienceSectionTitle()),
          (t[6] = k))
        : (k = t[6]);
      var I;
      t[7] !== n
        ? ((I = f(n)
            ? null
            : o(
                "WAWebBizBroadcastsCreationStrings",
              ).getAudienceSectionSubtitle()),
          (t[7] = n),
          (t[8] = I))
        : (I = t[8]);
      var T = c.size > 0,
        D;
      t[9] !== l
        ? ((D = function () {
            return l(null);
          }),
          (t[9] = l),
          (t[10] = D))
        : (D = t[10]);
      var x;
      t[11] !== n || t[12] !== R || t[13] !== i || t[14] !== T || t[15] !== D
        ? ((x = u.jsx(g, {
            entryPoint: n,
            hasSelectedChats: T,
            onOpenUpsertAudience: D,
            onImportAudience: i,
            onExistingAudiences: R,
          })),
          (t[11] = n),
          (t[12] = R),
          (t[13] = i),
          (t[14] = T),
          (t[15] = D),
          (t[16] = x))
        : (x = t[16]);
      var $;
      t[17] !== n || t[18] !== v || t[19] !== l || t[20] !== c
        ? (($ =
            c.size > 0 &&
            u.jsx("div", {
              role: "list",
              "aria-label": s._(/*BTDS*/ "Selected audiences"),
              children: Array.from(c).map(function (e) {
                var t = function () {
                  return l(e);
                };
                return u.jsx(
                  "div",
                  {
                    role: "listitem",
                    "data-testid": void 0,
                    children: u.jsx(y, {
                      handleEditAudience: t,
                      chat: e,
                      entryPoint: n,
                      handleDeleteAudience: v(e),
                    }),
                  },
                  e.id.toString(),
                );
              }),
            })),
          (t[17] = n),
          (t[18] = v),
          (t[19] = l),
          (t[20] = c),
          (t[21] = $))
        : ($ = t[21]);
      var P;
      t[22] !== L
        ? ((P =
            o("WAWebBizGatingUtils").isBizBroadcastMultiAudienceSendEnabled() &&
            L > 0 &&
            u.jsx("div", {
              className: "x1380le5",
              children: u.jsx(r("WDSBanner.react"), {
                type: "warning",
                body: o(
                  "WAWebBizBroadcastsCreationStrings",
                ).getOverlappingRecipientsWarning(L),
                testid: void 0,
              }),
            })),
          (t[22] = L),
          (t[23] = P))
        : (P = t[23]);
      var N;
      return (
        t[24] !== P || t[25] !== I || t[26] !== x || t[27] !== $
          ? ((N = u.jsx(
              "div",
              babelHelpers.extends({ ref: _ }, E, {
                children: u.jsxs(r("WAWebBizAdCard.react"), {
                  header: k,
                  subtitle: I,
                  children: [x, $, P],
                }),
              }),
            )),
            (t[24] = P),
            (t[25] = I),
            (t[26] = x),
            (t[27] = $),
            (t[28] = N))
          : (N = t[28]),
        N
      );
    }
    l.default = C;
  },
  226,
);
