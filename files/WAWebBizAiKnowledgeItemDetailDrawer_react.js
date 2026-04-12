__d(
  "WAWebBizAiKnowledgeItemDetailDrawer.react",
  [
    "fbt",
    "WAWebBizAiKnowledgeReivewDrawer.react",
    "WAWebBizAiKnowledgeReviewDeleteMutation",
    "WAWebDeleteIcon.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebMenuBar.react",
    "WAWebText.react",
    "asyncToGeneratorRuntime",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        marginTop8: { marginTop: "x1380le5", $$css: !0 },
        paddingStart20: { paddingInlineStart: "x1phvje8", $$css: !0 },
        paddingEnd20: { paddingInlineEnd: "xcldk2z", $$css: !0 },
      };
    function d(e) {
      r("vulture")("8pvYFoEjEOU-R8RMR59psjAfSAU=");
      var t = e.content,
        a = e.id,
        i = e.onKnowledgeItemDeleted,
        l = e.title,
        d = function () {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            u.jsx(r("WAWebBizAiKnowledgeReivewDrawer.react"), {}),
          );
        },
        m = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            (yield o(
              "WAWebBizAiKnowledgeReviewDeleteMutation",
            ).deletePendingData(e),
              i(e),
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                u.jsx(r("WAWebBizAiKnowledgeReivewDrawer.react"), {}),
              ));
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        p = u.jsx(o("WAWebMenuBar.react").MenuBarItem, {
          icon: u.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {}),
          onClick: function () {
            return m(a);
          },
          title: "",
        });
      return u.jsxs(r("WAWebDrawer.react"), {
        tsNavigationData: {
          surface: "unknown",
          viewName: "biz-ai-knowledge-detail",
        },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Details"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            rtlFixIfOnDarwin: !0,
            focusBackOrCancel: !0,
            onBack: d,
            menu: p,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: [c.paddingStart20, c.paddingEnd20],
              children: [
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                    children: s._(/*BTDS*/ "{title}", [s._param("title", l)]),
                  }),
                }),
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: c.marginTop8,
                  children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    children: s._(/*BTDS*/ "{content}", [
                      s._param("content", t),
                    ]),
                  }),
                }),
              ],
            }),
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
