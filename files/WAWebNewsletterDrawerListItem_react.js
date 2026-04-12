__d(
  "WAWebNewsletterDrawerListItem.react",
  [
    "fbt",
    "WAWebChatEntryPoint",
    "WAWebDrawerSection.react",
    "WAWebEmptyState.react",
    "WAWebEnforcementActionLogging",
    "WAWebNewsletterChatCell.react",
    "WAWebNewsletterDirectoryCell.react",
    "WAWebNewsletterFooterWithActionLink.react",
    "WAWebSectionHeader.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWamEnumChannelDirectoryEntryPoint",
    "WAWebWamEnumTsSurface",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useCallback,
      m = {
        myChannelsFooter: {
          borderTopColor: "xx42vgk",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          height: "xjm9jq1",
          $$css: !0,
        },
      },
      p = {
        NEWSLETTER_CHAT_CELL: "NEWSLETTER_CHAT_CELL",
        NEWSLETTER_DIRECTORY_CELL: "NEWSLETTER_DIRECTORY_CELL",
        NEWSLETTER_DIRECTORY_NO_RESULTS: "NEWSLETTER_DIRECTORY_NO_RESULTS",
        NEWSLETTER_CELL_HEADER: "NEWSLETTER_CELL_HEADER",
        SEARCH_FOOTER: "SEARCH_FOOTER",
      };
    function _(t) {
      var n = t.bottomDirectoryIndex,
        a = t.data,
        i = t.firstCellInList,
        l = t.index,
        u = t.loading,
        _ = t.onNewsletterDirectorySearch,
        f = t.onSelect,
        g = t.searchQuery,
        h = t.selectionRef,
        y = t.subscribedNewslettersCount,
        C = d(
          function () {
            (f(a), r("WAWebEnforcementActionLogging").resetSession());
          },
          [f, a],
        ),
        b = y > 0 ? y + 2 : 1;
      switch (a.type) {
        case p.NEWSLETTER_CHAT_CELL:
          return c.jsx(r("WAWebDrawerSection.react"), {
            animation: !1,
            children: c.jsx(r("WAWebNewsletterChatCell.react"), {
              searchQuery: g,
              newsletter: a.newsletter,
              active: h,
              onSelect: C,
              chatEntryPoint: a.chatEntryPoint,
              firstCellInList: i,
            }),
          });
        case p.NEWSLETTER_DIRECTORY_CELL:
          return c.jsx(r("WAWebDrawerSection.react"), {
            animation: !1,
            children: c.jsx(r("WAWebNewsletterDirectoryCell.react"), {
              active: h,
              newsletter: a.newsletter,
              onSelect: C,
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                .NewsletterUpdatesTabSearch,
              index: l - b,
              highlightText: g.query,
              directoryFunnelLogger: a.directoryFunnelLogger,
              bottomItem: l === n,
              discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                .CHANNEL_UPDATES_HOME_SEARCH,
            }),
          });
        case p.NEWSLETTER_CELL_HEADER: {
          var v = c.jsx("div", {
            className: "xwa7hi x6ikm8r x10wlt62",
            children: c.jsx(r("WAWebSectionHeader.react"), {
              header: a.title,
              xstyle: a.xstyle,
            }),
          });
          return a.hasTopBorder
            ? c.jsxs(c.Fragment, {
                children: [
                  c.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(
                        m.myChannelsFooter,
                        o("WAWebUISpacing").uiMargin.horiz13,
                      ),
                    ),
                  ),
                  v,
                ],
              })
            : v;
        }
        case p.SEARCH_FOOTER:
          return c.jsx(
            o("WAWebNewsletterFooterWithActionLink.react")
              .NewsletterFooterWithActionLink,
            {
              showBorder: !0,
              text: s._(
                /*BTDS*/ "Don't see the channel that you're looking for? Find more in the {=m1}",
                [
                  s._implicitParam(
                    "=m1",
                    c.jsx(o("WAWebText.react").WAWebClickableText, {
                      color: "teal",
                      xstyle: o("WAWebNewsletterFooterWithActionLink.react")
                        .footerTextStyles.semiBold,
                      onClick: function () {
                        return _(
                          o("WAWebWamEnumChannelDirectoryEntryPoint")
                            .CHANNEL_DIRECTORY_ENTRY_POINT.UPDATES_TAB_SEARCH,
                        );
                      },
                      children: s._(/*BTDS*/ "channels directory"),
                    }),
                  ),
                ],
              ),
            },
          );
        case p.NEWSLETTER_DIRECTORY_NO_RESULTS:
          return c.jsx(o("WAWebEmptyState.react").NoSearchResults, {
            center: !0,
          });
        default:
          a.type;
      }
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.TabCellDataType = p),
      (l.NewsletterDrawerListItem = _));
  },
  226,
);
