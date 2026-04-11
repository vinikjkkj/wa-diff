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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(28),
        a;
      if (n[0] !== t) {
        a = Symbol.for("react.early_return_sentinel");
        e: {
          var i = t.bottomDirectoryIndex,
            l = t.data,
            u = t.firstCellInList,
            d = t.index,
            _ = t.onNewsletterDirectorySearch,
            f = t.onSelect,
            g = t.searchQuery,
            h = t.selectionRef,
            y = t.subscribedNewslettersCount,
            C;
          n[2] !== l || n[3] !== f
            ? ((C = function () {
                (f(l), r("WAWebEnforcementActionLogging").resetSession());
              }),
              (n[2] = l),
              (n[3] = f),
              (n[4] = C))
            : (C = n[4]);
          var b = C,
            v = y > 0 ? y + 2 : 1;
          switch (l.type) {
            case p.NEWSLETTER_CHAT_CELL: {
              var S;
              (n[5] !== l.chatEntryPoint ||
              n[6] !== l.newsletter ||
              n[7] !== u ||
              n[8] !== b ||
              n[9] !== g ||
              n[10] !== h
                ? ((S = c.jsx(r("WAWebDrawerSection.react"), {
                    animation: !1,
                    children: c.jsx(r("WAWebNewsletterChatCell.react"), {
                      searchQuery: g,
                      newsletter: l.newsletter,
                      active: h,
                      onSelect: b,
                      chatEntryPoint: l.chatEntryPoint,
                      firstCellInList: u,
                    }),
                  })),
                  (n[5] = l.chatEntryPoint),
                  (n[6] = l.newsletter),
                  (n[7] = u),
                  (n[8] = b),
                  (n[9] = g),
                  (n[10] = h),
                  (n[11] = S))
                : (S = n[11]),
                (a = S));
              break e;
            }
            case p.NEWSLETTER_DIRECTORY_CELL: {
              var R = d - v,
                L = d === i,
                E;
              (n[12] !== l.directoryFunnelLogger ||
              n[13] !== l.newsletter ||
              n[14] !== b ||
              n[15] !== g.query ||
              n[16] !== h ||
              n[17] !== R ||
              n[18] !== L
                ? ((E = c.jsx(r("WAWebDrawerSection.react"), {
                    animation: !1,
                    children: c.jsx(r("WAWebNewsletterDirectoryCell.react"), {
                      active: h,
                      newsletter: l.newsletter,
                      onSelect: b,
                      chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                        .NewsletterUpdatesTabSearch,
                      index: R,
                      highlightText: g.query,
                      directoryFunnelLogger: l.directoryFunnelLogger,
                      bottomItem: L,
                      discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                        .CHANNEL_UPDATES_HOME_SEARCH,
                    }),
                  })),
                  (n[12] = l.directoryFunnelLogger),
                  (n[13] = l.newsletter),
                  (n[14] = b),
                  (n[15] = g.query),
                  (n[16] = h),
                  (n[17] = R),
                  (n[18] = L),
                  (n[19] = E))
                : (E = n[19]),
                (a = E));
              break e;
            }
            case p.NEWSLETTER_CELL_HEADER: {
              var k;
              n[20] === Symbol.for("react.memo_cache_sentinel")
                ? ((k = { className: "xwa7hi x6ikm8r x10wlt62" }), (n[20] = k))
                : (k = n[20]);
              var I;
              n[21] !== l.title || n[22] !== l.xstyle
                ? ((I = c.jsx(
                    "div",
                    babelHelpers.extends({}, k, {
                      children: c.jsx(r("WAWebSectionHeader.react"), {
                        header: l.title,
                        xstyle: l.xstyle,
                      }),
                    }),
                  )),
                  (n[21] = l.title),
                  (n[22] = l.xstyle),
                  (n[23] = I))
                : (I = n[23]);
              var T = I,
                D;
              (n[24] !== l.hasTopBorder || n[25] !== T
                ? ((D = l.hasTopBorder
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
                          T,
                        ],
                      })
                    : T),
                  (n[24] = l.hasTopBorder),
                  (n[25] = T),
                  (n[26] = D))
                : (D = n[26]),
                (a = D));
              break e;
            }
            case p.SEARCH_FOOTER: {
              a = c.jsx(
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
                                .CHANNEL_DIRECTORY_ENTRY_POINT
                                .UPDATES_TAB_SEARCH,
                            );
                          },
                          children: s._(/*BTDS*/ "channels directory"),
                        }),
                      ),
                    ],
                  ),
                },
              );
              break e;
            }
            case p.NEWSLETTER_DIRECTORY_NO_RESULTS: {
              var x;
              (n[27] === Symbol.for("react.memo_cache_sentinel")
                ? ((x = c.jsx(o("WAWebEmptyState.react").NoSearchResults, {
                    center: !0,
                  })),
                  (n[27] = x))
                : (x = n[27]),
                (a = x));
              break e;
            }
            default:
          }
        }
        ((n[0] = t), (n[1] = a));
      } else a = n[1];
      if (a !== Symbol.for("react.early_return_sentinel")) return a;
    }
    ((l.TabCellDataType = p), (l.NewsletterDrawerListItem = _));
  },
  226,
);
