__d(
  "WAWebLabelsLabelListNewLabel.react",
  [
    "fbt",
    "WAWebCellFrame.react",
    "WAWebLabelEditInput.react",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WAWebListsUtil",
    "WAWebMobilePlatforms",
    "WAWebPlusIcon.react",
    "WAWebSuggestedLists.react",
    "WAWebWamEnumLabelOperations",
    "WAWebWamSmbListEventReporter",
    "WDSIconIcAdd.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(47),
        n = e.entryPoint,
        a = e.onEditingChange,
        i = e.onNewLabelAdded,
        l = c(!1),
        d = l[0],
        p = l[1],
        _ = c(""),
        f = _[0],
        g = _[1],
        h = c(0),
        y = h[0],
        C = h[1],
        b = c(!1),
        v = b[0],
        S = b[1],
        R = c(null),
        L = R[0],
        E = R[1],
        k,
        I,
        T,
        D,
        x,
        $,
        P,
        N;
      if (
        t[0] !== y ||
        t[1] !== n ||
        t[2] !== (L == null ? void 0 : L.colorIndex) ||
        t[3] !== (L == null ? void 0 : L.name) ||
        t[4] !== f ||
        t[5] !== d ||
        t[6] !== a ||
        t[7] !== i ||
        t[8] !== v
      ) {
        P = Symbol.for("react.early_return_sentinel");
        e: {
          var M = o("WAWebListsGatingUtils").isListsEnabled(),
            w;
          t[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = o("WAWebMobilePlatforms").isSMB()), (t[17] = w))
            : (w = t[17]);
          var A = w,
            F;
          t[18] !== a
            ? ((F = function () {
                (p(!1), g(""), E(null), S(!1), a == null || a(!1));
              }),
              (t[18] = a),
              (t[19] = F))
            : (F = t[19]);
          var O = F;
          if (d) {
            var B;
            t[20] !== i || t[21] !== O
              ? ((B = function (t) {
                  (O(), i == null || i(t));
                }),
                (t[20] = i),
                (t[21] = O),
                (t[22] = B))
              : (B = t[22]);
            var W = B,
              q;
            t[23] !== (L == null ? void 0 : L.name) || t[24] !== v
              ? ((q = function (t) {
                  (g(t),
                    v &&
                      t !== (L == null ? void 0 : L.name) &&
                      (S(!1), E(null)));
                }),
                (t[23] = L == null ? void 0 : L.name),
                (t[24] = v),
                (t[25] = q))
              : (q = t[25]);
            var U = q,
              V;
            t[26] !== n
              ? ((V = function (t) {
                  (E({ name: t.name, colorIndex: t.colorIndex }),
                    C(m),
                    g(t.name),
                    S(!0),
                    o("WAWebWamSmbListEventReporter").logSmbListEvent({
                      labelOperation: o("WAWebWamEnumLabelOperations")
                        .LABEL_OPERATIONS.SUGGESTION_CLICKED,
                      updateEntryPoint: n != null ? n : void 0,
                      predefinedId: t.predefinedId,
                    }));
                }),
                (t[26] = n),
                (t[27] = V))
              : (V = t[27]);
            var H = V,
              G;
            M
              ? (G = A ? "create-new-list-smb" : "create-new-list-consumer")
              : (G = "label-selection-new-label");
            var z = L == null ? void 0 : L.name,
              j = L == null ? void 0 : L.colorIndex,
              K;
            (t[28] !== y ||
            t[29] !== n ||
            t[30] !== W ||
            t[31] !== U ||
            t[32] !== O ||
            t[33] !== G ||
            t[34] !== z ||
            t[35] !== j
              ? ((K = u.jsx(
                  r("WAWebLabelEditInput.react"),
                  {
                    label: null,
                    initialName: z,
                    initialColorIndex: j,
                    onSave: W,
                    onCancel: O,
                    onTextChange: U,
                    rowTheme: G,
                    entryPoint: n,
                  },
                  y,
                )),
                (t[28] = y),
                (t[29] = n),
                (t[30] = W),
                (t[31] = U),
                (t[32] = O),
                (t[33] = G),
                (t[34] = z),
                (t[35] = j),
                (t[36] = K))
              : (K = t[36]),
              (P = u.jsxs(u.Fragment, {
                children: [
                  u.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      {
                        0: { className: "xh8yej3 xuzvuw4" },
                        1: { className: "xh8yej3 xnnlda6 xjkvuk6" },
                      }[!!M << 0],
                      { children: K },
                    ),
                  ),
                  M &&
                    A &&
                    !v &&
                    u.jsx(r("WAWebSuggestedLists.react"), {
                      filterText: f,
                      onSelect: H,
                      suggestedListTheme: "list-assign-inline-edit",
                    }),
                ],
              })));
            break e;
          }
          k = function () {
            if (o("WAWebListUtils").isListFlowMaxListsCountReached()) {
              o("WAWebListsUtil").showMaxListsModal(M);
              return;
            }
            (p(!0), a == null || a(!0));
          };
          var Q = M
            ? u.jsx(r("WDSIconIcAdd.react"), {
                viewBox: { x: 3, y: 3, width: 18, height: 18 },
              })
            : u.jsx(o("WAWebPlusIcon.react").PlusIcon, {});
          ((I = u.jsx(
            "div",
            babelHelpers.extends(
              {},
              {
                0: {
                  className:
                    "x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp x1c9tyrk xeusxvb x1pahc9y x1ertn4p x111a3t xhyrrhw",
                },
                1: {
                  className:
                    "x78zum5 x6s0dn4 xl56j7k x100vrsf x16wdlz0 xt8t1vi x1xc408v x129tdwq x15urzxu xfn3atn x1pse0pq x1m2oepg",
                },
              }[!!M << 0],
              { "data-testid": void 0, children: Q },
            ),
          )),
            (T = M ? s._(/*BTDS*/ "New list") : s._(/*BTDS*/ "New label")),
            (N = M ? "lists-assign-modal" : "label-selection-new-label"),
            (D = "button"),
            (x = 0),
            ($ = {
              0: { className: "xh8yej3 xuzvuw4 x1ypdohk" },
              1: { className: "xh8yej3 x1ypdohk xnnlda6 xjkvuk6" },
            }[!!M << 0]));
        }
        ((t[0] = y),
          (t[1] = n),
          (t[2] = L == null ? void 0 : L.colorIndex),
          (t[3] = L == null ? void 0 : L.name),
          (t[4] = f),
          (t[5] = d),
          (t[6] = a),
          (t[7] = i),
          (t[8] = v),
          (t[9] = k),
          (t[10] = I),
          (t[11] = T),
          (t[12] = D),
          (t[13] = x),
          (t[14] = $),
          (t[15] = P),
          (t[16] = N));
      } else
        ((k = t[9]),
          (I = t[10]),
          (T = t[11]),
          (D = t[12]),
          (x = t[13]),
          ($ = t[14]),
          (P = t[15]),
          (N = t[16]));
      if (P !== Symbol.for("react.early_return_sentinel")) return P;
      var X;
      t[37] !== I || t[38] !== T || t[39] !== N
        ? ((X = u.jsx(r("WAWebCellFrame.react"), {
            theme: N,
            image: I,
            primary: T,
          })),
          (t[37] = I),
          (t[38] = T),
          (t[39] = N),
          (t[40] = X))
        : (X = t[40]);
      var Y;
      return (
        t[41] !== k || t[42] !== D || t[43] !== x || t[44] !== $ || t[45] !== X
          ? ((Y = u.jsx(
              "div",
              babelHelpers.extends({ role: D, tabIndex: x }, $, {
                onKeyDown: k,
                onClick: k,
                children: X,
              }),
            )),
            (t[41] = k),
            (t[42] = D),
            (t[43] = x),
            (t[44] = $),
            (t[45] = X),
            (t[46] = Y))
          : (Y = t[46]),
        Y
      );
    }
    function m(e) {
      return e + 1;
    }
    l.default = d;
  },
  226,
);
