__d(
  "WAWebBizAiKnowledgeReivewDrawer.react",
  [
    "fbt",
    "WAWebBizAIKnowledgeEntry.react",
    "WAWebBizAiKnowledgeReviewCommitMutation",
    "WAWebBizAiKnowledgeReviewQuery",
    "WAWebBizAiKnowledgeReviewSummaryPageDescription.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebUISpacing",
    "WAWebWdsSmbAnimBookAiTeachLearningIcon.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = "";
    function _(e) {
      var t = e.biz_info_attribute,
        n = e.biz_info_value,
        r = e.faq_answer,
        o = e.faq_question,
        a = e.type,
        i = "",
        l = "";
      return (
        a === "FAQ" && o != null && r != null
          ? ((i = o), (l = r))
          : a === "BIZ_INFO" && t != null && n != null && ((i = f(t)), (l = n)),
        { title: i, content: l }
      );
    }
    function f(e) {
      switch (e.toUpperCase()) {
        case "ADDRESS":
          return "Business address";
        case "BUSINESS_HOURS":
          return "Business hours";
        case "DESCRIPTION":
          return "Description";
        case "CATALOG":
          return "Catalog";
        case "DISCOUNT_POLICY":
          return "Discounts";
        case "EMAIL":
          return "Email";
        case "PAYMENT_METHODS":
          return "Payment accepted";
        case "PURCHASE_INFO":
          return "How and where to purchase";
        case "RETURN_POLICY":
          return "Return and exchange policy";
        case "SHIPPING_POLICY":
          return "Shipping policy";
        case "WEBSITE":
          return "Website";
        default:
          return "";
      }
    }
    var g = { container: { width: "xh8yej3", $$css: !0 } };
    function h() {
      var e = function () {
          (o("WAWebBizAiKnowledgeReviewCommitMutation").commitPendingData(
            a.map(function (e) {
              var t;
              return (t = e.id) != null ? t : p;
            }),
          ),
            i([]),
            o("WAWebDrawerManager").DrawerManager.closeDrawerRight());
        },
        t = m([]),
        a = t[0],
        i = t[1],
        l = function (t) {
          i(function (e) {
            return e.filter(function (e) {
              return e.id !== t;
            });
          });
        };
      return (
        d(function () {
          function e() {
            return t.apply(this, arguments);
          }
          function t() {
            return (
              (t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = yield o(
                  "WAWebBizAiKnowledgeReviewQuery",
                ).getAllPendingKnowledge();
                i(e);
              })),
              t.apply(this, arguments)
            );
          }
          e();
        }, []),
        u.jsxs(r("WAWebDrawer.react"), {
          tsNavigationData: {
            surface: "unknown",
            viewName: "biz-ai-knowledge-review",
          },
          children: [
            u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: s._(/*BTDS*/ "Knowledge"),
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              rtlFixIfOnDarwin: !0,
              focusBackOrCancel: !0,
              onBack: e,
            }),
            u.jsx(r("WAWebDrawerBody.react"), {
              children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                padding: 8,
                children: [
                  u.jsx(o("WAWebFlex.react").FlexColumn, {
                    align: "center",
                    xstyle: [
                      o("WAWebUISpacing").uiPadding.top16,
                      o("WAWebUISpacing").uiMargin.bottom36,
                      g.container,
                    ],
                    children: u.jsx(
                      o("WAWebWdsSmbAnimBookAiTeachLearningIcon.react")
                        .WdsSmbAnimBookAiTeachLearningIcon,
                      {},
                    ),
                  }),
                  u.jsx(
                    r("WAWebBizAiKnowledgeReviewSummaryPageDescription.react"),
                    {},
                  ),
                  u.jsx(o("WAWebFlex.react").FlexColumn, {
                    xstyle: [o("WAWebUISpacing").uiMargin.top15, g.container],
                    children: a.map(function (e, t) {
                      var n,
                        o = _(e),
                        a = o.content,
                        i = o.title;
                      return u.jsx(
                        r("WAWebBizAIKnowledgeEntry.react"),
                        {
                          id: (n = e.id) != null ? n : p,
                          question: i,
                          answer: a,
                          onKnowledgeItemDeleted: l,
                        },
                        t,
                      );
                    }),
                  }),
                ],
              }),
            }),
          ],
        })
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
