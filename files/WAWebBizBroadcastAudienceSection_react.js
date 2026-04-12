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
      var t = e.entryPoint,
        n = e.hasSelectedChats,
        a = e.onExistingAudiences,
        i = e.onImportAudience,
        l = e.onOpenUpsertAudience;
      if (
        f(t) ||
        (!o("WAWebBizGatingUtils").isBizBroadcastMultiAudienceSendEnabled() &&
          n)
      )
        return null;
      var s =
          o("WAWebBizBroadcastsAudienceUtils").getBroadcastChatsAsAudiences()
            .length > 0,
        c = u.jsx(
          r("WAWebBizBroadcastAudienceSectionButtonContextMenu.react"),
          {
            entryPoint: t,
            onNewAudience: l,
            onImportAudience: i,
            onExistingAudiences: a,
            showExistingAudienceRow: s,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
              .BB_CAMPAIGN_DRAFT,
          },
        );
      return u.jsx(r("WAWebBizBroadcastsNewBroadcastAddButton.react"), {
        buttonLabel: n
          ? o("WAWebBizBroadcastsCreationStrings").getAddAudienceLabel()
          : o("WAWebBizBroadcastsCreationStrings").getChooseAudienceLabel(),
        contextMenu: c,
        onButtonClick: function () {
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.addAudienceButtonClicked(t);
        },
        testid: void 0,
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t,
        n = e.chat,
        a = e.entryPoint,
        i = e.handleDeleteAudience,
        l = e.handleEditAudience,
        c = (t = n.broadcastMetadata) == null ? void 0 : t.audienceExpression,
        d =
          c != null
            ? o("WAWebAudienceExpressionTypes").getLabelIdsFromExpression(c)
            : [],
        m = d.length > 0;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        xstyle: _.rowButtons,
        children: [
          u.jsx(r("WDSTooltip.react"), {
            disabled: !m,
            label: o(
              "WAWebBizBroadcastsHomeStrings",
            ).getEditAudiencesWithListsLabel(),
            children: u.jsx(r("WDSButton.react"), {
              "aria-label": s._(/*BTDS*/ "Edit audience"),
              variant: "borderless",
              size: "small",
              type: "default",
              Icon: r("WDSIconIcEdit.react"),
              onPress: l,
              disabled: m,
              testid: void 0,
            }),
          }),
          !f(a) &&
            u.jsx(r("WDSButton.react"), {
              "aria-label": s._(/*BTDS*/ "Remove audience"),
              variant: "borderless",
              size: "small",
              type: "default",
              Icon: r("WDSIconIcClose.react"),
              onPress: i,
              testid: void 0,
            }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t,
        n,
        a = e.chat,
        i = e.entryPoint,
        l = e.handleDeleteAudience,
        s = e.handleEditAudience,
        c = o("useWAWebModelValues").useModelValues(a, [
          "contact",
          "broadcastMetadata",
        ]),
        d = o("WAWebChatGroupUtils").getBroadcastChatTitle(a),
        m =
          (t =
            (n = c.broadcastMetadata) == null ? void 0 : n.recipients.length) !=
          null
            ? t
            : 0;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        xstyle: _.listItem,
        children: [
          u.jsx(o("WAWebFlex.react").FlexItem, {
            shrink: 0,
            children: u.jsx(r("WAWebDefaultProfilePicture.react"), {
              type: "business-broadcast",
              size: 40,
            }),
          }),
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: _.textContainer,
            children: [
              u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDefault",
                testid: void 0,
                children: d,
              }),
              u.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDeemphasized",
                testid: void 0,
                children: o(
                  "WAWebBizBroadcastsCreationStrings",
                ).getAudienceRecipientCountLabel(m),
              }),
            ],
          }),
          u.jsx(h, {
            chat: a,
            entryPoint: i,
            handleDeleteAudience: l,
            handleEditAudience: s,
          }),
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.entryPoint,
        n = e.onExistingAudiences,
        a = e.onImportAudience,
        i = e.onOpenUpsertAudience,
        l = e.selectedChats,
        c = e.setSelectedChats,
        _ = p(null),
        h = p(!1);
      m(
        function () {
          if (h.current) {
            var e = _.current;
            if (e != null && !e.contains(document.activeElement)) {
              h.current = !1;
              var t = e.querySelector('button, [tabindex="0"]');
              t instanceof HTMLElement && t.focus();
            }
          }
        },
        void 0,
      );
      var C = d(
          function (e) {
            return function () {
              (c(function (t) {
                var n = new Set(t);
                return (n.delete(e), n);
              }),
                (h.current = !0));
            };
          },
          [c],
        ),
        b = d(
          function () {
            ((h.current = !0), n == null || n());
          },
          [n],
        ),
        v = o(
          "useWAWebBizBroadcastOverlappingRecipients",
        ).useWAWebBizBroadcastOverlappingRecipients(l);
      return u.jsx("div", {
        ref: _,
        className: "x19aeb6u xh8yej3",
        children: u.jsxs(r("WAWebBizAdCard.react"), {
          header: o(
            "WAWebBizBroadcastsCreationStrings",
          ).getAudienceSectionTitle(),
          subtitle: f(t)
            ? null
            : o(
                "WAWebBizBroadcastsCreationStrings",
              ).getAudienceSectionSubtitle(),
          children: [
            u.jsx(g, {
              entryPoint: t,
              hasSelectedChats: l.size > 0,
              onOpenUpsertAudience: function () {
                return i(null);
              },
              onImportAudience: a,
              onExistingAudiences: b,
            }),
            l.size > 0 &&
              u.jsx("div", {
                role: "list",
                "aria-label": s._(/*BTDS*/ "Selected audiences"),
                children: Array.from(l).map(function (e) {
                  var n = function () {
                    return i(e);
                  };
                  return u.jsx(
                    "div",
                    {
                      role: "listitem",
                      "data-testid": void 0,
                      children: u.jsx(y, {
                        handleEditAudience: n,
                        chat: e,
                        entryPoint: t,
                        handleDeleteAudience: C(e),
                      }),
                    },
                    e.id.toString(),
                  );
                }),
              }),
            o("WAWebBizGatingUtils").isBizBroadcastMultiAudienceSendEnabled() &&
              v > 0 &&
              u.jsx("div", {
                className: "x1380le5",
                children: u.jsx(r("WDSBanner.react"), {
                  type: "warning",
                  body: o(
                    "WAWebBizBroadcastsCreationStrings",
                  ).getOverlappingRecipientsWarning(v),
                  testid: void 0,
                }),
              }),
          ],
        }),
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
