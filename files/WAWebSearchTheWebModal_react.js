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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(33),
        a = e.entryPoint,
        i = e.message,
        l = e.stwFormat,
        c = u(!1),
        m = c[0],
        p = c[1],
        _;
      t[0] !== i
        ? ((_ = o("WAWebSearchTheWebCommonUtils").getSupportedSearchOptions(i)),
          (t[0] = i),
          (t[1] = _))
        : (_ = t[1]);
      var f = _;
      if (f.size < 1) return null;
      var g;
      t[2] !== a || t[3] !== i || t[4] !== l
        ? ((g = function () {
            (o("WAWebSearchTheWebEventLogger").logSTWEvent({
              stwEntryPoint: a,
              stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION
                .STW_DISMISSED,
              stwFormat: l,
              messageType: o("WAWebWamMsgUtils").getWamMessageType(i),
            }),
              o("WAWebModalManager").ModalManager.close());
          }),
          (t[2] = a),
          (t[3] = i),
          (t[4] = l),
          (t[5] = g))
        : (g = t[5]);
      var h = g,
        y;
      t[6] !== a || t[7] !== i || t[8] !== f || t[9] !== l
        ? ((y = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (!r("WAWebNetworkStatus").online)
                o("WAWebSearchTheWebCommonUtils").showSearchFailureToast(
                  o("WAWebSearchTheWebCommonUtils").getNoInternetToastMsg(),
                );
              else {
                var e;
                (p(!0),
                  yield (e = f.values().next().value) == null
                    ? void 0
                    : e.handleSearchAction({
                        stwEntryPoint: a,
                        stwInteraction: o("WAWebWamEnumStwInteraction")
                          .STW_INTERACTION.SEARCH_CLICKED,
                        stwFormat: l,
                        messageType: o("WAWebWamMsgUtils").getWamMessageType(i),
                      }),
                  p(!1),
                  new (o(
                    "WAWebHfmTextSearchCompleteWamEvent",
                  ).HfmTextSearchCompleteWamEvent)().commit(),
                  o("WAWebModalManager").ModalManager.close());
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[6] = a),
          (t[7] = i),
          (t[8] = f),
          (t[9] = l),
          (t[10] = y))
        : (y = t[10]);
      var C = y,
        b,
        v,
        S,
        R,
        L,
        E;
      if (
        t[11] !== a ||
        t[12] !== h ||
        t[13] !== C ||
        t[14] !== m ||
        t[15] !== i ||
        t[16] !== f ||
        t[17] !== l
      ) {
        var k = o("WAWebFrontendMsgGetters").getChat(i),
          I = o("WAWebSearchTheWebCommonUtils").getModalHeaderText(
            o("WAWebChatGetters").getIsNewsletter(k),
            a,
            l,
            o("WAWebWamMsgUtils").getWamMessageType(i),
          ),
          T = o("WAWebChatGetters").getIsNewsletter(k)
            ? null
            : o("WAWebSearchTheWebCommonUtils").getModalHeaderSubtext();
        ((v = s.jsx(d, {
          onCancel: h,
          onOk: C,
          isSearching: m,
          headerText: I,
          headerSubText: T,
        })),
          (b = r("WAWebMultiSearchModal.react")),
          (S = f),
          (R = a),
          (L = l),
          (E = o("WAWebChatGetters").getIsNewsletter(k)),
          (t[11] = a),
          (t[12] = h),
          (t[13] = C),
          (t[14] = m),
          (t[15] = i),
          (t[16] = f),
          (t[17] = l),
          (t[18] = b),
          (t[19] = v),
          (t[20] = S),
          (t[21] = R),
          (t[22] = L),
          (t[23] = E));
      } else
        ((b = t[18]),
          (v = t[19]),
          (S = t[20]),
          (R = t[21]),
          (L = t[22]),
          (E = t[23]));
      var D;
      t[24] !== i
        ? ((D = o("WAWebWamMsgUtils").getWamMessageType(i)),
          (t[24] = i),
          (t[25] = D))
        : (D = t[25]);
      var x;
      t[26] !== b ||
      t[27] !== S ||
      t[28] !== R ||
      t[29] !== L ||
      t[30] !== E ||
      t[31] !== D
        ? ((x = s.jsx(b, {
            searchOptions: S,
            entryPoint: R,
            stwFormat: L,
            isNewsletter: E,
            messageType: D,
          })),
          (t[26] = b),
          (t[27] = S),
          (t[28] = R),
          (t[29] = L),
          (t[30] = E),
          (t[31] = D),
          (t[32] = x))
        : (x = t[32]);
      var $ = x;
      return f.size === 1 ? v : $;
    }
    l.default = m;
  },
  98,
);
