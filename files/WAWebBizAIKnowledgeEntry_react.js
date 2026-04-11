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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(19);
      r("vulture")("Nd7dNvYC2JyvepXqQqnlTmKPVSc=");
      var a = e.content,
        i = e.id,
        l = e.onKnowledgeItemDeleted,
        c = e.title,
        d;
      t[0] !== a || t[1] !== i || t[2] !== l || t[3] !== c
        ? ((d = function () {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              u.jsx(r("WAWebBizAiKnowledgeItemDetailDrawer.react"), {
                id: i,
                title: c,
                content: a,
                onKnowledgeItemDeleted: l,
              }),
            );
          }),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l),
          (t[3] = c),
          (t[4] = d))
        : (d = t[4]);
      var m = d,
        p,
        _;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsx(r("WDSIconIcVisibility.react"), {})),
          (_ = s._(/*BTDS*/ "View")),
          (t[5] = p),
          (t[6] = _))
        : ((p = t[5]), (_ = t[6]));
      var f;
      t[7] !== m
        ? ((f = u.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            { testid: void 0, action: m, icon: p, children: _ },
            "view",
          )),
          (t[7] = m),
          (t[8] = f))
        : (f = t[8]);
      var g;
      t[9] !== i || t[10] !== l
        ? ((g = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield o(
                "WAWebBizAiKnowledgeReviewDeleteMutation",
              ).deletePendingData(i),
                l(i));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[9] = i),
          (t[10] = l),
          (t[11] = g))
        : (g = t[11]);
      var h;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx(
            o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
            {},
          )),
          (t[12] = h))
        : (h = t[12]);
      var y;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "Delete")), (t[13] = y))
        : (y = t[13]);
      var C;
      t[14] !== g
        ? ((C = u.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              testid: void 0,
              action: g,
              icon: h,
              theme: o("WAWebDropdownItem.react").DropdownItemThemeType
                .Negative,
              children: y,
            },
            "delete",
          )),
          (t[14] = g),
          (t[15] = C))
        : (C = t[15]);
      var b;
      return (
        t[16] !== f || t[17] !== C
          ? ((b = u.jsxs(u.Fragment, { children: [f, C] })),
            (t[16] = f),
            (t[17] = C),
            (t[18] = b))
          : (b = t[18]),
        b
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(41);
      r("vulture")("LLTN9Yk74nPh3ZqayRLTcu7rBc0=");
      var n = e.answer,
        a = e.id,
        i = e.onKnowledgeItemDeleted,
        l = e.question,
        p = c(!1),
        _ = p[0],
        f = p[1],
        g = c(null),
        h = g[0],
        y = g[1],
        C;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function () {
            f(!0);
          }),
          (t[0] = C))
        : (C = t[0]);
      var b = C,
        v;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function () {
            f(!1);
          }),
          (t[1] = v))
        : (v = t[1]);
      var S = v,
        R = function (t) {
          (D && T(!I), y(t));
        },
        L = c(!1),
        E = L[0],
        k = L[1],
        I = E,
        T = k,
        D = _ || I,
        x;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = { className: "xh8yej3" }), (t[2] = x))
        : (x = t[2]);
      var $;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = [
            d.paddingStart16,
            d.paddingEnd24,
            d.paddingTop12,
            d.paddingBottom12,
            d.hoverStyle,
          ]),
          (t[3] = $))
        : ($ = t[3]);
      var P;
      t[4] !== n || t[5] !== a || t[6] !== i || t[7] !== l
        ? ((P = function () {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              u.jsx(r("WAWebBizAiKnowledgeItemDetailDrawer.react"), {
                title: l,
                content: n,
                id: a,
                onKnowledgeItemDeleted: i,
              }),
            );
          }),
          (t[4] = n),
          (t[5] = a),
          (t[6] = i),
          (t[7] = l),
          (t[8] = P))
        : (P = t[8]);
      var N;
      t[9] !== l
        ? ((N = s._(/*BTDS*/ "{question}", [s._param("question", l)])),
          (t[9] = l),
          (t[10] = N))
        : (N = t[10]);
      var M;
      t[11] !== N
        ? ((M = u.jsx(o("WAWebText.react").WAWebTextSmall, {
            xstyle: d.knowledgeEntryQuestion,
            children: N,
          })),
          (t[11] = N),
          (t[12] = M))
        : (M = t[12]);
      var w;
      t[13] !== n
        ? ((w = s._(/*BTDS*/ "{answer}", [s._param("answer", n)])),
          (t[13] = n),
          (t[14] = w))
        : (w = t[14]);
      var A;
      t[15] !== w
        ? ((A = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            xstyle: d.knowledgeEntryAnswer,
            children: w,
          })),
          (t[15] = w),
          (t[16] = A))
        : (A = t[16]);
      var F;
      t[17] !== A || t[18] !== P || t[19] !== M
        ? ((F = u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsxs(o("WAWebClickable.react").Clickable, {
              onClick: P,
              children: [M, A],
            }),
          })),
          (t[17] = A),
          (t[18] = P),
          (t[19] = M),
          (t[20] = F))
        : (F = t[20]);
      var O = _ ? 1 : 0,
        B;
      t[21] !== O
        ? ((B = { opacity: O, transition: "opacity 0.2s ease-in-out" }),
          (t[21] = O),
          (t[22] = B))
        : (B = t[22]);
      var W;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = u.jsx(
            o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon,
            {},
          )),
          (t[23] = W))
        : (W = t[23]);
      var q;
      t[24] !== R
        ? ((q = u.jsx(o("WAWebClickable.react").Clickable, {
            onClick: R,
            tabIndex: 0,
            children: W,
          })),
          (t[24] = R),
          (t[25] = q))
        : (q = t[25]);
      var U;
      t[26] !== n ||
      t[27] !== h ||
      t[28] !== a ||
      t[29] !== I ||
      t[30] !== i ||
      t[31] !== l ||
      t[32] !== T
        ? ((U =
            I &&
            h != null &&
            u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "MsgContextMenu",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: function () {
                return T(!1);
              },
              children: u.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: {
                  menu: u.jsx(m, {
                    id: a,
                    onKnowledgeItemDeleted: i,
                    title: l,
                    content: n,
                  }),
                  anchor: h.target,
                },
              }),
            })),
          (t[26] = n),
          (t[27] = h),
          (t[28] = a),
          (t[29] = I),
          (t[30] = i),
          (t[31] = l),
          (t[32] = T),
          (t[33] = U))
        : (U = t[33]);
      var V;
      t[34] !== B || t[35] !== q || t[36] !== U
        ? ((V = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: d.dropDownMenu,
            children: u.jsxs("div", { style: B, children: [q, U] }),
          })),
          (t[34] = B),
          (t[35] = q),
          (t[36] = U),
          (t[37] = V))
        : (V = t[37]);
      var H;
      return (
        t[38] !== F || t[39] !== V
          ? ((H = u.jsx(
              "div",
              babelHelpers.extends({ onMouseEnter: b, onMouseLeave: S }, x, {
                children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  xstyle: $,
                  children: [F, V],
                }),
              }),
            )),
            (t[38] = F),
            (t[39] = V),
            (t[40] = H))
          : (H = t[40]),
        H
      );
    }
    l.default = p;
  },
  226,
);
