__d(
  "WAWebMultiSearchModal.react",
  [
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebSTWGatingUtils",
    "WAWebSearchTheWebCommonUtils",
    "WAWebSearchTheWebEventLogger",
    "WAWebText.react",
    "WAWebWamEnumStwInteraction",
    "WAWebWdsPictoWebsearchIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        marginTop16: { marginTop: "x98l61r", $$css: !0 },
        marginTop12: { marginTop: "x1de0gy", $$css: !0 },
        marginBottom20: { marginBottom: "xdqhqc9", $$css: !0 },
      };
    function c(e) {
      var t,
        n = e.entryPoint,
        a = e.isNewsletter,
        i = e.messageType,
        l = e.searchOptions,
        c = e.stwFormat,
        d = l.get((t = o("WAWebSearchTheWebCommonUtils")).SearchType.TEXT),
        m = l.get(t.SearchType.IMAGE),
        p = l.get(t.SearchType.URL),
        _ = t.getModalHeaderText(a, n, c, i),
        f = t.getModalHeaderSubtext(),
        g = function () {
          (o("WAWebSearchTheWebEventLogger").logSTWEvent({
            stwEntryPoint: n,
            stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION
              .STW_DISMISSED,
            stwFormat: c,
            messageType: i,
          }),
            o("WAWebModalManager").ModalManager.close());
        },
        h = [];
      return (
        p != null &&
          h.push(
            s.jsx(
              o("WAWebSearchTheWebCommonUtils").SearchModalRow,
              {
                onSearchClick: function () {
                  p.handleSearchAction({
                    stwEntryPoint: n,
                    stwInteraction: o("WAWebWamEnumStwInteraction")
                      .STW_INTERACTION.LINK_SEARCH_CLICKED,
                    stwFormat: c,
                    messageType: i,
                  });
                },
                searchType: o("WAWebSearchTheWebCommonUtils").SearchType.URL,
              },
              "stw-url-search",
            ),
          ),
        m != null &&
          h.push(
            s.jsx(
              o("WAWebSearchTheWebCommonUtils").SearchModalRow,
              {
                onSearchClick: function () {
                  m.handleSearchAction({
                    stwEntryPoint: n,
                    stwFormat: c,
                    stwInteraction: o("WAWebWamEnumStwInteraction")
                      .STW_INTERACTION.IMAGE_SEARCH_CLICKED,
                    messageType: i,
                  });
                },
                searchType: o("WAWebSearchTheWebCommonUtils").SearchType.IMAGE,
              },
              "stw-image-search",
            ),
          ),
        d != null &&
          h.push(
            s.jsx(
              o("WAWebSearchTheWebCommonUtils").SearchModalRow,
              {
                onSearchClick: function () {
                  d.handleSearchAction({
                    stwEntryPoint: n,
                    stwInteraction: o("WAWebWamEnumStwInteraction")
                      .STW_INTERACTION.TEXT_SEARCH_CLICKED,
                    stwFormat: c,
                    messageType: i,
                  });
                },
                searchType: o("WAWebSearchTheWebCommonUtils").SearchType.TEXT,
              },
              "stw-text-search",
            ),
          ),
        o("WAWebSTWGatingUtils").isSearchTheWebDesignExperimentV1Enabled()
          ? s.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "multi-search",
              },
              cancelText: r("WAWebFbtCommon")("Cancel"),
              onCancel: g,
              children: [
                s.jsxs(o("WAWebFlex.react").FlexColumn, {
                  justify: "center",
                  align: "center",
                  children: [
                    s.jsx(
                      o("WAWebWdsPictoWebsearchIcon.react")
                        .WdsPictoWebsearchIcon,
                      { height: 80, width: 120 },
                    ),
                    s.jsx(o("WAWebText.react").WAWebTextLarge, {
                      xstyle: u.marginTop16,
                      children: o(
                        "WAWebSearchTheWebCommonUtils",
                      ).getModalTitleText(),
                    }),
                    s.jsx(o("WAWebText.react").WAWebTextTitle, {
                      textAlign: "center",
                      xstyle: u.marginTop16,
                      children: _,
                    }),
                    f != null &&
                      s.jsx(o("WAWebText.react").WAWebTextMuted, {
                        xstyle: [u.marginTop12, u.marginBottom20],
                        children: f,
                      }),
                  ],
                }),
                h,
              ],
            })
          : s.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "multi-search",
              },
              title: o("WAWebSearchTheWebCommonUtils").getModalTitleText(),
              cancelText: r("WAWebFbtCommon")("Cancel"),
              cancelButtonType: "secondary",
              onCancel: g,
              children: [
                s.jsx(o("WAWebText.react").WAWebTextTitle, {
                  paddingBottom: 8,
                  children: _,
                }),
                !a &&
                  s.jsx(o("WAWebText.react").WAWebTextMuted, { children: f }),
                h,
              ],
            })
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
