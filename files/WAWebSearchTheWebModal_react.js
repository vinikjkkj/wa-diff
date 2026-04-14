__d(
  "WAWebSearchTheWebModal.react",
  [
    "WAWebChatGetters",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebHfmTextSearchCompleteWamEvent",
    "WAWebModalManager",
    "WAWebMultiSearchModal.react",
    "WAWebNetworkStatus",
    "WAWebSTWGatingUtils",
    "WAWebSearchTheWebCommonUtils",
    "WAWebSearchTheWebEventLogger",
    "WAWebText.react",
    "WAWebWamEnumStwInteraction",
    "WAWebWamMsgUtils",
    "WAWebWdsPictoWebsearchIcon.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = {
        marginTop16: { marginTop: "x98l61r", $$css: !0 },
        marginTop12: { marginTop: "x1de0gy", $$css: !0 },
      };
    function d(e) {
      var t = e.headerSubText,
        n = e.headerText,
        a = e.isSearching,
        i = e.onCancel,
        l = e.onOk;
      return o("WAWebSTWGatingUtils").isSearchTheWebDesignExperimentV1Enabled()
        ? s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            tsNavigationData: {
              surface: "unknown",
              viewName: "search-the-web",
            },
            cancelText: r("WAWebFbtCommon")("Cancel"),
            onCancel: i,
            okText: o(
              "WAWebSearchTheWebCommonUtils",
            ).getModalSearchActionText(),
            okSpinner: a,
            okDisabled: a,
            onOK: l,
            children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
              justify: "center",
              align: "center",
              children: [
                s.jsx(
                  o("WAWebWdsPictoWebsearchIcon.react").WdsPictoWebsearchIcon,
                  { height: 80, width: 120 },
                ),
                s.jsx(o("WAWebText.react").WAWebTextLarge, {
                  xstyle: c.marginTop16,
                  children: o(
                    "WAWebSearchTheWebCommonUtils",
                  ).getModalTitleText(),
                }),
                s.jsx(o("WAWebText.react").WAWebTextTitle, {
                  textAlign: "center",
                  xstyle: c.marginTop16,
                  children: n,
                }),
                t != null &&
                  s.jsx(o("WAWebText.react").WAWebTextMuted, {
                    xstyle: c.marginTop12,
                    children: t,
                  }),
              ],
            }),
          })
        : s.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
            tsNavigationData: {
              surface: "unknown",
              viewName: "search-the-web",
            },
            title: o("WAWebSearchTheWebCommonUtils").getModalTitleText(),
            cancelText: r("WAWebFbtCommon")("Cancel"),
            onCancel: i,
            okText: o(
              "WAWebSearchTheWebCommonUtils",
            ).getModalSearchActionText(),
            okSpinner: a,
            okDisabled: a,
            onOK: l,
            children: [
              n,
              t != null &&
                s.jsx(o("WAWebText.react").WAWebTextMuted, { children: t }),
            ],
          });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.entryPoint,
        a = e.message,
        i = e.stwFormat,
        l = u(!1),
        c = l[0],
        m = l[1],
        p = o("WAWebSearchTheWebCommonUtils").getSupportedSearchOptions(a);
      if (p.size < 1) return null;
      var _ = function () {
          (o("WAWebSearchTheWebEventLogger").logSTWEvent({
            stwEntryPoint: t,
            stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION
              .STW_DISMISSED,
            stwFormat: i,
            messageType: o("WAWebWamMsgUtils").getWamMessageType(a),
          }),
            o("WAWebModalManager").ModalManager.close());
        },
        f = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (!r("WAWebNetworkStatus").online)
              o("WAWebSearchTheWebCommonUtils").showSearchFailureToast(
                o("WAWebSearchTheWebCommonUtils").getNoInternetToastMsg(),
              );
            else {
              var e;
              (m(!0),
                yield (e = p.values().next().value) == null
                  ? void 0
                  : e.handleSearchAction({
                      stwEntryPoint: t,
                      stwInteraction: o("WAWebWamEnumStwInteraction")
                        .STW_INTERACTION.SEARCH_CLICKED,
                      stwFormat: i,
                      messageType: o("WAWebWamMsgUtils").getWamMessageType(a),
                    }),
                m(!1),
                new (o(
                  "WAWebHfmTextSearchCompleteWamEvent",
                ).HfmTextSearchCompleteWamEvent)().commit(),
                o("WAWebModalManager").ModalManager.close());
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        g = o("WAWebFrontendMsgGetters").getChat(a),
        h = o("WAWebSearchTheWebCommonUtils").getModalHeaderText(
          o("WAWebChatGetters").getIsNewsletter(g),
          t,
          i,
          o("WAWebWamMsgUtils").getWamMessageType(a),
        ),
        y = o("WAWebChatGetters").getIsNewsletter(g)
          ? null
          : o("WAWebSearchTheWebCommonUtils").getModalHeaderSubtext(),
        C = s.jsx(d, {
          onCancel: _,
          onOk: f,
          isSearching: c,
          headerText: h,
          headerSubText: y,
        }),
        b = s.jsx(r("WAWebMultiSearchModal.react"), {
          searchOptions: p,
          entryPoint: t,
          stwFormat: i,
          isNewsletter: o("WAWebChatGetters").getIsNewsletter(g),
          messageType: o("WAWebWamMsgUtils").getWamMessageType(a),
        });
      return p.size === 1 ? C : b;
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
