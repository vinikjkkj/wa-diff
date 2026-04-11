__d(
  "WAWebProductCollectionCollectionManageListItem.react",
  [
    "fbt",
    "WAWebChatCell.react",
    "WAWebCollectionRefreshedIcon.react",
    "WAWebDeleteRefreshedIcon.react",
    "WAWebDraggableItemIcon.react",
    "WAWebDropdownItem.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebLinkedCatalogHelper",
    "WAWebPencilRefreshedIcon.react",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: o("WAWebUISpacing").uiMargin.end15,
              justify: "center",
              align: "center",
              children: u.jsx(
                o("WAWebDraggableItemIcon.react").DraggableItemIcon,
                {},
              ),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(39),
        n = e.canManage,
        a = e.collection,
        i = e.isReorder,
        l = e.onDelete,
        m = e.onEdit,
        p = e.onSeeCollection,
        _ = e.theme,
        f = c(null),
        g = f[0],
        h = f[1],
        y;
      t[0] !== a || t[1] !== l
        ? ((y = function (t) {
            (t.preventDefault(), t.stopPropagation(), l && l(a));
          }),
          (t[0] = a),
          (t[1] = l),
          (t[2] = y))
        : (y = t[2]);
      var C = y,
        b;
      t[3] !== a || t[4] !== m
        ? ((b = function (t) {
            (t.preventDefault(), t.stopPropagation(), m && m(a));
          }),
          (t[3] = a),
          (t[4] = m),
          (t[5] = b))
        : (b = t[5]);
      var v = b,
        S;
      t[6] !== a || t[7] !== i || t[8] !== p
        ? ((S = function (t) {
            (t.preventDefault(), t.stopPropagation(), !i && p && p(a));
          }),
          (t[6] = a),
          (t[7] = i),
          (t[8] = p),
          (t[9] = S))
        : (S = t[9]);
      var R = S,
        L;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function () {
            h(null);
          }),
          (t[10] = L))
        : (L = t[10]);
      var E = L,
        k;
      t[11] !== n || t[12] !== g || t[13] !== C || t[14] !== v
        ? ((k = function (t) {
            if (g) {
              h(null);
              return;
            }
            var e = [];
            (n &&
              !o(
                "WAWebLinkedCatalogHelper",
              ).shouldHideComponentForSMBLinkedCatalog() &&
              (e.push(
                u.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  {
                    testid: void 0,
                    action: v,
                    icon: u.jsx(
                      o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
                      {},
                    ),
                    children: s._(/*BTDS*/ "Edit"),
                  },
                  "EditLabel",
                ),
              ),
              e.push(
                u.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  {
                    testid: void 0,
                    action: C,
                    icon: u.jsx(
                      o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
                      {},
                    ),
                    theme: o("WAWebDropdownItem.react").DropdownItemThemeType
                      .Negative,
                    children: s._(/*BTDS*/ "Delete"),
                  },
                  "DeleteLabel",
                ),
              )),
              h({ menu: e, event: t.event, anchor: t.anchor }));
          }),
          (t[11] = n),
          (t[12] = g),
          (t[13] = C),
          (t[14] = v),
          (t[15] = k))
        : (k = t[15]);
      var I = k,
        T;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = u.jsx("div", {
            className:
              "xupqr0c x78zum5 x6s0dn4 xl56j7k x1dmp6jm x1xmf6yo xjx09e3 x1e56ztr x1lziwak x1xcyms6 x47corl xso2hbu xal68kn x51dqfy x1w4cqa3 x1byqp33",
            children: u.jsx("div", {
              className: "xhkc9bb",
              children: u.jsx(
                o("WAWebCollectionRefreshedIcon.react").CollectionRefreshedIcon,
                {},
              ),
            }),
          })),
          (t[16] = T))
        : (T = t[16]);
      var D = T,
        x;
      t[17] !== a.name
        ? ((x = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: a.name,
            ellipsify: !0,
            titlify: !0,
          })),
          (t[17] = a.name),
          (t[18] = x))
        : (x = t[18]);
      var $ = x,
        P;
      if (g) {
        var N;
        (t[19] !== g
          ? ((N = u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "CollectionContextMenu",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: E,
              children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: g }),
            })),
            (t[19] = g),
            (t[20] = N))
          : (N = t[20]),
          (P = N));
      }
      var M;
      t[21] !== a.id
        ? ((M = a.id.toString()), (t[21] = a.id), (t[22] = M))
        : (M = t[22]);
      var w;
      t[23] !== i
        ? ((w = i ? u.jsx(d, {}) : void 0), (t[23] = i), (t[24] = w))
        : (w = t[24]);
      var A;
      t[25] !== n || t[26] !== i
        ? ((A = function () {
            return (
              n &&
              !i &&
              !o(
                "WAWebLinkedCatalogHelper",
              ).shouldHideComponentForSMBLinkedCatalog()
            );
          }),
          (t[25] = n),
          (t[26] = i),
          (t[27] = A))
        : (A = t[27]);
      var F;
      t[28] !== I ||
      t[29] !== R ||
      t[30] !== $ ||
      t[31] !== A ||
      t[32] !== M ||
      t[33] !== w ||
      t[34] !== _
        ? ((F = u.jsx(
            r("WAWebChatCell.react"),
            {
              customImage: !0,
              image: D,
              primary: $,
              theme: _,
              detail: w,
              active: !1,
              contextEnabled: A,
              onContext: I,
              onClick: R,
            },
            M,
          )),
          (t[28] = I),
          (t[29] = R),
          (t[30] = $),
          (t[31] = A),
          (t[32] = M),
          (t[33] = w),
          (t[34] = _),
          (t[35] = F))
        : (F = t[35]);
      var O;
      return (
        t[36] !== F || t[37] !== P
          ? ((O = u.jsxs(u.Fragment, { children: [F, P] })),
            (t[36] = F),
            (t[37] = P),
            (t[38] = O))
          : (O = t[38]),
        O
      );
    }
    l.default = m;
  },
  226,
);
