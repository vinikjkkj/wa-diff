__d(
  "WAWebCommunitySubgroupSuggestionsDrawer.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebCellBorder.react",
    "WAWebCellRequestState",
    "WAWebCommunitySubgroupSuggestion.react",
    "WAWebConfirmPopup.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebSectionHeader.react",
    "WAWebSubgroupSuggestionAction",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "WDSTextualLink.react",
    "react",
    "useWAWebFocusOnMount",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useMemo,
      p = d.useState,
      _ = {
        disclaimer: {
          textAlign: "x2b8uid",
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
        footer: {
          position: "x7wzq59",
          bottom: "x1ey2m1c",
          flexGrow: "x1iyjqo2",
          display: "x78zum5",
          alignItems: "xuk3077",
          $$css: !0,
        },
        footerRow: { width: "xh8yej3", $$css: !0 },
        disclaimerText: {
          textAlign: "x2b8uid",
          lineHeight: "x16h55sf",
          $$css: !0,
        },
        emptyStateTitle: {
          textAlign: "x2b8uid",
          lineHeight: "x37zpob",
          $$css: !0,
        },
        empty: { height: "x5yr21d", $$css: !0 },
        sectionTitle: { color: "xhslqc4", $$css: !0 },
      };
    function f(e) {
      var t,
        n = e.isAdmin,
        a = e.onSubgroupSuggestionAction,
        i = e.suggestions,
        l = e.title;
      return c.jsxs(r("WAWebDrawerSection.react"), {
        xstyle: (t = o("WAWebUISpacing")).uiMargin.bottom16,
        children: [
          c.jsx(r("WAWebSectionHeader.react"), {
            header: l,
            xstyle: [
              _.sectionTitle,
              t.uiPadding.horiz24,
              t.uiPadding.top16,
              t.uiPadding.bottom12,
            ],
          }),
          i == null
            ? void 0
            : i.map(function (e) {
                return c.jsx(
                  r("WAWebCommunitySubgroupSuggestion.react"),
                  {
                    subgroupSuggestion: e,
                    isAdmin: n,
                    onSubgroupSuggestionAction: a,
                  },
                  e.id,
                );
              }),
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.callbacks,
        u = i.chat,
        d = r("useWAWebFocusOnMount")(),
        g = p(!1),
        h = g[0],
        y = g[1],
        C = m(
          function () {
            var e;
            return !!(
              !(u == null || (e = u.groupMetadata) == null) &&
              e.participants.iAmAdmin()
            );
          },
          [
            u == null || (n = u.groupMetadata) == null
              ? void 0
              : n.participants,
          ],
        ),
        b = m(
          function () {
            var e;
            return (
              ((e = u.groupMetadata) == null
                ? void 0
                : e.getSubgroupSuggestions()) || []
            );
          },
          [u.groupMetadata],
        ),
        v = function (t, n) {
          var e, r;
          switch (n) {
            case o("WAWebCellRequestState").State.Approved:
              r = o("WAWebSubgroupSuggestionAction").approveSubgroupSuggestions(
                u,
                [t],
                l.onManageCommunityGroupsClick,
              );
              break;
            case o("WAWebCellRequestState").State.Rejected:
              r = o("WAWebSubgroupSuggestionAction").rejectSubgroupSuggestions(
                u,
                [t],
              );
              break;
            case o("WAWebCellRequestState").State.Canceled:
              r = o("WAWebSubgroupSuggestionAction").cancelSubgroupSuggestions(
                u,
                [t],
              );
              break;
            default:
              break;
          }
          (e = r) == null ||
            e.then(
              y(
                !b.some(function (e) {
                  var t = e.currentState;
                  return t === o("WAWebCellRequestState").State.Pending;
                }),
              ),
            );
        },
        S = function () {
          var e = b.filter(function (e) {
            return e.currentState === o("WAWebCellRequestState").State.Pending;
          });
          e != null &&
            e.length &&
            o("WAWebSubgroupSuggestionAction")
              .approveSubgroupSuggestions(u, e, l.onManageCommunityGroupsClick)
              .then(function () {
                return y(!0);
              });
        },
        R = function () {
          var e = function () {
              o("WAWebModalManager").ModalManager.close();
              var e = b.filter(function (e) {
                return (
                  e.currentState === o("WAWebCellRequestState").State.Pending
                );
              });
              e != null &&
                e.length &&
                o("WAWebSubgroupSuggestionAction")
                  .rejectSubgroupSuggestions(u, e)
                  .then(function () {
                    return y(!0);
                  });
            },
            t = s._(/*BTDS*/ "Reject all group suggestions?"),
            n = s._(
              /*BTDS*/ "The suggestions will not be added to the community.",
            );
          o("WAWebModalManager").ModalManager.open(
            c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: e,
              okText: s._(/*BTDS*/ "Reject all"),
              okButtonType: "solid-warning",
              onCancel: o("WAWebModalManager").closeModalManager,
              title: t,
              tsNavigationData: {
                surface: "unknown",
                viewName: "community-subgroup-suggestions",
              },
              children: n,
            }),
          );
        };
      r("useWAWebOnUnmount")(function () {
        b.forEach(function (e) {
          e.resetState();
        });
      });
      var L = s._(/*BTDS*/ "Pending groups"),
        E;
      if (b.length > 0) {
        var k = c.jsx(r("WAWebDrawerSection.react"), {
            xstyle: [
              _.disclaimer,
              o("WAWebUISpacing").uiPadding.horiz24,
              o("WAWebUISpacing").uiPadding.top24,
              o("WAWebUISpacing").uiPadding.bottom16,
            ],
            children: c.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              align: "center",
              children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                children: C
                  ? s._(
                      /*BTDS*/ "Group suggestions from members need admin approval. Change in {=m2}",
                      [
                        s._implicitParam(
                          "=m2",
                          c.jsx(r("WDSTextualLink.react"), {
                            onClick: l.onCommunitySettingsClick,
                            children: s._(/*BTDS*/ "community settings"),
                          }),
                        ),
                      ],
                    )
                  : s._(
                      /*BTDS*/ "Manage your group suggestions that are pending community admin approval",
                    ),
              }),
            }),
          }),
          I = [],
          T = [];
        b.forEach(function (e) {
          e.isExistingGroup ? I.push(e) : T.push(e);
        });
        var D = [
            {
              sectionTitle: s._(
                /*BTDS*/ '_j{"*":"Suggested existing groups ({suggested-existing-groups-count})"}',
                [s._param("suggested-existing-groups-count", I.length, [0])],
              ),
              suggestions: I,
            },
            {
              sectionTitle: s._(
                /*BTDS*/ '_j{"*":"Suggested new groups ({suggested-new-groups-count})"}',
                [s._param("suggested-new-groups-count", T.length, [0])],
              ),
              suggestions: T,
            },
          ],
          x = D.map(function (e, t) {
            var n = e.sectionTitle,
              o = e.suggestions;
            return o.length
              ? c.jsxs(
                  "section",
                  {
                    children: [
                      c.jsx(f, {
                        title: n,
                        suggestions: o,
                        isAdmin: C,
                        onSubgroupSuggestionAction: v,
                      }),
                      t === 0 && T.length
                        ? c.jsx(r("WAWebCellBorder.react"), { noMargin: !0 })
                        : null,
                    ],
                  },
                  t,
                )
              : null;
          }),
          $ = C
            ? c.jsx(r("WAWebDrawerSection.react"), {
                xstyle: [
                  _.footer,
                  o("WAWebUISpacing").uiPadding.all16,
                  o("WAWebUISpacing").uiPadding.bottom6,
                ],
                children: c.jsxs(o("WAWebFlex.react").FlexRow, {
                  justify: "center",
                  gap: 8,
                  xstyle: _.footerRow,
                  children: [
                    c.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
                      onClick: R,
                      disabled: h,
                      stretch: !0,
                      children: s._(/*BTDS*/ "Reject all"),
                    }),
                    c.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
                      onClick: S,
                      disabled: h,
                      stretch: !0,
                      children: s._(/*BTDS*/ "Approve all"),
                    }),
                  ],
                }),
              })
            : null;
        E = c.jsxs(c.Fragment, { children: [k, x, $] });
      } else
        E = c.jsxs(o("WAWebFlex.react").FlexColumn, {
          xstyle: [_.empty, o("WAWebUISpacing").uiPadding.horiz24],
          justify: "center",
          align: "center",
          children: [
            c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "20",
              color: "secondary",
              xstyle: [
                _.emptyStateTitle,
                o("WAWebUISpacing").uiPadding.bottom14,
              ],
              children: s._(/*BTDS*/ "No pending group suggestions"),
            }),
            c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "14",
              color: "secondary",
              xstyle: _.disclaimerText,
              children: s._(
                /*BTDS*/ "Groups that members have suggested to add to the community and are waiting to be be approved will appear here.",
              ),
            }),
          ],
        });
      return c.jsx("div", {
        role: "complementary",
        ref: d,
        tabIndex: -1,
        "aria-label": L,
        children: c.jsxs(r("WAWebDrawer.react"), {
          ref: a,
          testid: void 0,
          theme: "invite",
          tsNavigationData: {
            surface: "unknown",
            viewName: "community-subgroup-suggestions",
          },
          children: [
            c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: L,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              onBack: i.onBack,
            }),
            c.jsx(r("WAWebDrawerBody.react"), { children: E }),
          ],
        }),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
