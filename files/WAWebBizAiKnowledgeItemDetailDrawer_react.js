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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(25);
      r("vulture")("8pvYFoEjEOU-R8RMR59psjAfSAU=");
      var a = e.content,
        i = e.id,
        l = e.onKnowledgeItemDeleted,
        d = e.title,
        p = m,
        _;
      t[0] !== l
        ? ((_ = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (yield o(
                  "WAWebBizAiKnowledgeReviewDeleteMutation",
                ).deletePendingData(e),
                  l(e),
                  o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                    u.jsx(r("WAWebBizAiKnowledgeReivewDrawer.react"), {}),
                  ));
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (t[0] = l),
          (t[1] = _))
        : (_ = t[1]);
      var f = _,
        g;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = u.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {})), (t[2] = g))
        : (g = t[2]);
      var h;
      t[3] !== f || t[4] !== i
        ? ((h = u.jsx(o("WAWebMenuBar.react").MenuBarItem, {
            icon: g,
            onClick: function () {
              return f(i);
            },
            title: "",
          })),
          (t[3] = f),
          (t[4] = i),
          (t[5] = h))
        : (h = t[5]);
      var y = h,
        C;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = { surface: "unknown", viewName: "biz-ai-knowledge-detail" }),
          (t[6] = C))
        : (C = t[6]);
      var b;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "Details")), (t[7] = b))
        : (b = t[7]);
      var v;
      t[8] !== y
        ? ((v = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: b,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            rtlFixIfOnDarwin: !0,
            focusBackOrCancel: !0,
            onBack: p,
            menu: y,
          })),
          (t[8] = y),
          (t[9] = v))
        : (v = t[9]);
      var S;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = [c.paddingStart20, c.paddingEnd20]), (t[10] = S))
        : (S = t[10]);
      var R;
      t[11] !== d
        ? ((R = s._(/*BTDS*/ "{title}", [s._param("title", d)])),
          (t[11] = d),
          (t[12] = R))
        : (R = t[12]);
      var L;
      t[13] !== R
        ? ((L = u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
              children: R,
            }),
          })),
          (t[13] = R),
          (t[14] = L))
        : (L = t[14]);
      var E;
      t[15] !== a
        ? ((E = s._(/*BTDS*/ "{content}", [s._param("content", a)])),
          (t[15] = a),
          (t[16] = E))
        : (E = t[16]);
      var k;
      t[17] !== E
        ? ((k = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: c.marginTop8,
            children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
              children: E,
            }),
          })),
          (t[17] = E),
          (t[18] = k))
        : (k = t[18]);
      var I;
      t[19] !== k || t[20] !== L
        ? ((I = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: S,
              children: [L, k],
            }),
          })),
          (t[19] = k),
          (t[20] = L),
          (t[21] = I))
        : (I = t[21]);
      var T;
      return (
        t[22] !== I || t[23] !== v
          ? ((T = u.jsxs(r("WAWebDrawer.react"), {
              tsNavigationData: C,
              children: [v, I],
            })),
            (t[22] = I),
            (t[23] = v),
            (t[24] = T))
          : (T = t[24]),
        T
      );
    }
    function m() {
      o("WAWebDrawerManager").DrawerManager.openDrawerRight(
        u.jsx(r("WAWebBizAiKnowledgeReivewDrawer.react"), {}),
      );
    }
    l.default = d;
  },
  226,
);
