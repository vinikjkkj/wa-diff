__d(
  "WAWebBizAIKnowledgeEntry.react",
  [
    "fbt",
    "WAWebBizAiKnowledgeItemDetailDrawer.react",
    "WAWebBizAiKnowledgeReviewDeleteMutation",
    "WAWebClickable.react",
    "WAWebDeleteRefreshedIcon.react",
    "WAWebDrawerManager",
    "WAWebDropdownItem.react",
    "WAWebFlex.react",
    "WAWebIcChevronDownMenuIcon.react",
    "WAWebText.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WDSIconIcVisibility.react",
    "asyncToGeneratorRuntime",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        hoverStyle: {
          ":hover_backgroundColor": "x1n67ipk",
          ":hover_borderStartStartRadius": "xwl5bvh",
          ":hover_borderStartEndRadius": "x1fvswcl",
          ":hover_borderEndEndRadius": "x1wsr4p6",
          ":hover_borderEndStartRadius": "xrzgb8j",
          $$css: !0,
        },
        knowledgeEntryQuestion: {
          fontFeatureSettings: "xxhqxmj",
          WebkitLineClamp: "x1h7i4cw",
          WebkitBoxOrient: "x1ua5tub",
          display: "x104kibb",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        knowledgeEntryAnswer: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          fontFeatureSettings: "xxhqxmj",
          textOverflow: "xlyipyv",
          letterSpacing: "x1p4m5qa",
          marginTop: "x1gslohp",
          WebkitLineClamp: "x1gzmk7r",
          WebkitBoxOrient: "x1ua5tub",
          display: "x104kibb",
          $$css: !0,
        },
        dropDownMenu: {
          position: "x10l6tqk",
          insetInlineEnd: "xdg88n9",
          left: null,
          right: null,
          $$css: !0,
        },
        paddingStart16: { paddingInlineStart: "xdx6fka", $$css: !0 },
        paddingEnd24: { paddingInlineEnd: "xyo0t3i", $$css: !0 },
        paddingTop12: { paddingTop: "x1xrf6ya", $$css: !0 },
        paddingBottom12: { paddingBottom: "xscbp6u", $$css: !0 },
      };
    function m(e) {
      r("vulture")("Nd7dNvYC2JyvepXqQqnlTmKPVSc=");
      var t = e.content,
        a = e.id,
        i = e.onKnowledgeItemDeleted,
        l = e.title,
        c = function () {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            u.jsx(r("WAWebBizAiKnowledgeItemDetailDrawer.react"), {
              id: a,
              title: l,
              content: t,
              onKnowledgeItemDeleted: i,
            }),
          );
        };
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              testid: void 0,
              action: c,
              icon: u.jsx(r("WDSIconIcVisibility.react"), {}),
              children: s._(/*BTDS*/ "View"),
            },
            "view",
          ),
          u.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              testid: void 0,
              action: n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  (yield o(
                    "WAWebBizAiKnowledgeReviewDeleteMutation",
                  ).deletePendingData(a),
                    i(a));
                },
              ),
              icon: u.jsx(
                o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
                {},
              ),
              theme: o("WAWebDropdownItem.react").DropdownItemThemeType
                .Negative,
              children: s._(/*BTDS*/ "Delete"),
            },
            "delete",
          ),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      r("vulture")("LLTN9Yk74nPh3ZqayRLTcu7rBc0=");
      var t = e.answer,
        n = e.id,
        a = e.onKnowledgeItemDeleted,
        i = e.question,
        l = c(!1),
        p = l[0],
        _ = l[1],
        f = c(null),
        g = f[0],
        h = f[1];
      function y() {
        _(!0);
      }
      function C() {
        _(!1);
      }
      function b(e) {
        (L && R(!S), h(e));
      }
      var v = c(!1),
        S = v[0],
        R = v[1],
        L = p || S;
      return u.jsx("div", {
        onMouseEnter: y,
        onMouseLeave: C,
        className: "xh8yej3",
        children: u.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          xstyle: [
            d.paddingStart16,
            d.paddingEnd24,
            d.paddingTop12,
            d.paddingBottom12,
            d.hoverStyle,
          ],
          children: [
            u.jsx(o("WAWebFlex.react").FlexItem, {
              children: u.jsxs(o("WAWebClickable.react").Clickable, {
                onClick: function () {
                  o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                    u.jsx(r("WAWebBizAiKnowledgeItemDetailDrawer.react"), {
                      title: i,
                      content: t,
                      id: n,
                      onKnowledgeItemDeleted: a,
                    }),
                  );
                },
                children: [
                  u.jsx(o("WAWebText.react").WAWebTextSmall, {
                    xstyle: d.knowledgeEntryQuestion,
                    children: s._(/*BTDS*/ "{question}", [
                      s._param("question", i),
                    ]),
                  }),
                  u.jsx(o("WAWebText.react").WAWebTextTitle, {
                    xstyle: d.knowledgeEntryAnswer,
                    children: s._(/*BTDS*/ "{answer}", [s._param("answer", t)]),
                  }),
                ],
              }),
            }),
            u.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: d.dropDownMenu,
              children: u.jsxs("div", {
                style: {
                  opacity: p ? 1 : 0,
                  transition: "opacity 0.2s ease-in-out",
                },
                children: [
                  u.jsx(o("WAWebClickable.react").Clickable, {
                    onClick: b,
                    tabIndex: 0,
                    children: u.jsx(
                      o("WAWebIcChevronDownMenuIcon.react")
                        .IcChevronDownMenuIcon,
                      {},
                    ),
                  }),
                  S &&
                    g != null &&
                    u.jsx(o("WAWebUimUie.react").UIE, {
                      displayName: "MsgContextMenu",
                      escapable: !0,
                      popable: !0,
                      dismissOnWindowResize: !0,
                      requestDismiss: function () {
                        return R(!1);
                      },
                      children: u.jsx(r("WAWebUimUieMenu.react"), {
                        contextMenu: {
                          menu: u.jsx(m, {
                            id: n,
                            onKnowledgeItemDeleted: a,
                            title: i,
                            content: t,
                          }),
                          anchor: g.target,
                        },
                      }),
                    }),
                ],
              }),
            }),
          ],
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
