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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(23),
        t = function () {
          (o("WAWebBizAiKnowledgeReviewCommitMutation").commitPendingData(
            f.map(y),
          ),
            h([]),
            o("WAWebDrawerManager").DrawerManager.closeDrawerRight());
        },
        a;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = []), (e[0] = a))
        : (a = e[0]);
      var i = m(a),
        l = i[0],
        c = i[1],
        f = l,
        h = c,
        C;
      e[1] !== h
        ? ((C = function (t) {
            h(function (e) {
              return e.filter(function (e) {
                return e.id !== t;
              });
            });
          }),
          (e[1] = h),
          (e[2] = C))
        : (C = e[2]);
      var b = C,
        v;
      e[3] !== h
        ? ((v = function () {
            var e = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e = yield o(
                    "WAWebBizAiKnowledgeReviewQuery",
                  ).getAllPendingKnowledge();
                  h(e);
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })();
            e();
          }),
          (e[3] = h),
          (e[4] = v))
        : (v = e[4]);
      var S;
      (e[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = []), (e[5] = S))
        : (S = e[5]),
        d(v, S));
      var R;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = { surface: "unknown", viewName: "biz-ai-knowledge-review" }),
          (e[6] = R))
        : (R = e[6]);
      var L;
      e[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(/*BTDS*/ "Knowledge")), (e[7] = L))
        : (L = e[7]);
      var E;
      e[8] !== t
        ? ((E = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: L,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            rtlFixIfOnDarwin: !0,
            focusBackOrCancel: !0,
            onBack: t,
          })),
          (e[8] = t),
          (e[9] = E))
        : (E = e[9]);
      var k, I;
      e[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = u.jsx(o("WAWebFlex.react").FlexColumn, {
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
          })),
          (k = u.jsx(
            r("WAWebBizAiKnowledgeReviewSummaryPageDescription.react"),
            {},
          )),
          (e[10] = k),
          (e[11] = I))
        : ((k = e[10]), (I = e[11]));
      var T;
      e[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = [o("WAWebUISpacing").uiMargin.top15, g.container]), (e[12] = T))
        : (T = e[12]);
      var D;
      if (e[13] !== b || e[14] !== f) {
        var x;
        (e[16] !== b
          ? ((x = function (t, n) {
              var e,
                o = _(t),
                a = o.content,
                i = o.title;
              return u.jsx(
                r("WAWebBizAIKnowledgeEntry.react"),
                {
                  id: (e = t.id) != null ? e : p,
                  question: i,
                  answer: a,
                  onKnowledgeItemDeleted: b,
                },
                n,
              );
            }),
            (e[16] = b),
            (e[17] = x))
          : (x = e[17]),
          (D = f.map(x)),
          (e[13] = b),
          (e[14] = f),
          (e[15] = D));
      } else D = e[15];
      var $;
      e[18] !== D
        ? (($ = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              padding: 8,
              children: [
                I,
                k,
                u.jsx(o("WAWebFlex.react").FlexColumn, {
                  xstyle: T,
                  children: D,
                }),
              ],
            }),
          })),
          (e[18] = D),
          (e[19] = $))
        : ($ = e[19]);
      var P;
      return (
        e[20] !== $ || e[21] !== E
          ? ((P = u.jsxs(r("WAWebDrawer.react"), {
              tsNavigationData: R,
              children: [E, $],
            })),
            (e[20] = $),
            (e[21] = E),
            (e[22] = P))
          : (P = e[22]),
        P
      );
    }
    function y(e) {
      var t;
      return (t = e.id) != null ? t : p;
    }
    l.default = h;
  },
  226,
);
