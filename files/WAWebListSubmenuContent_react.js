__d(
  "WAWebListSubmenuContent.react",
  [
    "fbt",
    "WAWebBizLabelEditModal.react",
    "WAWebCreateOrEditListDrawer.react",
    "WAWebDrawerManager",
    "WAWebEditLabelAssociationBridge",
    "WAWebFbtCommon",
    "WAWebLabelCollection",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WAWebListsIntroPopupLoadable",
    "WAWebListsLogging",
    "WAWebListsUtil",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebSchemaLabel",
    "WAWebStateUtils",
    "WAWebWamEnumListAction",
    "WAWebWamEnumUpdateEntryPoint",
    "WDSIconIcAdd.react",
    "WDSIconIcLabelFilled.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "WDSToast.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebListener",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useRef,
      f = d.useState,
      g = {
        labelIconColor: function (t) {
          return [
            { color: t != null ? "x14rh7hd" : t, $$css: !0 },
            { "--x-color": t != null ? t : void 0 },
          ];
        },
        contentsWrapper: { display: "xjp7ctv", $$css: !0 },
        inheritColor: { color: "x1heor9g", $$css: !0 },
      };
    function h() {
      return o("WAWebLabelCollection").LabelCollection.filter(function (e) {
        return e.isActive === !1 || e.name == null || e.name === ""
          ? !1
          : e.type !== o("WAWebSchemaLabel").ListType.UNREAD &&
              e.type !== o("WAWebSchemaLabel").ListType.GROUPS &&
              e.type !== o("WAWebSchemaLabel").ListType.COMMUNITY &&
              e.type !== o("WAWebSchemaLabel").ListType.FAVORITES;
      });
    }
    function y(t) {
      var n = o("react-compiler-runtime").c(35),
        a = t.chat,
        i = t.chatLabels,
        l = t.entryPoint,
        u = r("useWAWebNux")(o("WAWebNux").NUX.ADD_TO_LISTS),
        d = u[0],
        m = u[1],
        y;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = o("WAWebListsGatingUtils").isListsEnabled()), (n[0] = y))
        : (y = n[0]);
      var v = y,
        S = o("WDSToast.react").useWDSToast(),
        R = S.showToast,
        L = f(b),
        E = L[0],
        k = L[1],
        I;
      n[1] !== i
        ? ((I = function () {
            var e = new Set();
            return (
              i != null &&
                i.forEach(function (t) {
                  return e.add(t);
                }),
              e
            );
          }),
          (n[1] = i),
          (n[2] = I))
        : (I = n[2]);
      var T = f(I),
        D = T[0],
        x = T[1],
        $;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = []), (n[3] = $))
        : ($ = n[3]);
      var P = _($),
        N = _(a),
        M = _(i),
        w,
        A;
      (n[4] !== R
        ? ((w = function () {
            var e = M.current,
              t = P.current,
              n = N.current;
            return function () {
              if (t.length !== 0) {
                var a = new Set(e != null ? e : []),
                  i = new Set(a),
                  l = new Map();
                for (var u of t)
                  (l.set(u.id, u.listType),
                    u.type === "add" ? i.add(u.id) : i.delete(u.id));
                var c = [];
                for (var d of i)
                  a.has(d) ||
                    c.push({ id: d, listType: l.get(d), type: "add" });
                for (var m of a)
                  i.has(m) ||
                    c.push({ id: m, listType: l.get(m), type: "remove" });
                if (c.length !== 0) {
                  var p = c.length,
                    _ = o("WAWebMobilePlatforms").isSMB()
                      ? s._(
                          /*BTDS*/ '_j{"*":"{number} labels changed","_1":"1 label changed"}',
                          [s._plural(p, "number")],
                        )
                      : s._(
                          /*BTDS*/ '_j{"*":"{number} lists changed","_1":"1 list changed"}',
                          [s._plural(p, "number")],
                        );
                  R({
                    type: "success",
                    message: _,
                    action: {
                      label: r("WAWebFbtCommon")("Undo"),
                      onPress: function () {
                        var e = c.map(C),
                          t = [o("WAWebStateUtils").unproxy(n)];
                        o("WAWebEditLabelAssociationBridge")
                          .editLabelAssociation(e, t)
                          .then(function () {
                            o(
                              "WAWebLabelCollection",
                            ).LabelCollection.addOrRemoveLabelsMD(e, t);
                          });
                      },
                    },
                  });
                }
              }
            };
          }),
          (A = [R]),
          (n[4] = R),
          (n[5] = w),
          (n[6] = A))
        : ((w = n[5]), (A = n[6])),
        p(w, A));
      var F;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = function () {
            k(h());
          }),
          (n[7] = F))
        : (F = n[7]);
      var O = F;
      o("useWAWebListener").useListener(
        o("WAWebLabelCollection").LabelCollection,
        "add remove change reorder",
        O,
      );
      var B;
      n[8] !== a || n[9] !== l || n[10] !== D
        ? ((B = function (t, n) {
            var e = D.has(t),
              r = !e;
            x(function (e) {
              var n = new Set(e);
              return (r ? n.add(t) : n.delete(t), n);
            });
            var i = {
                id: t,
                listType: n != null ? n : void 0,
                type: r ? "add" : "remove",
              },
              s = [o("WAWebStateUtils").unproxy(a)];
            (P.current.push(i),
              o("WAWebListsLogging").logListUpdate({
                listId: Number(t),
                listAction: o("WAWebWamEnumListAction").LIST_ACTION
                  .UPDATE_MEMBERS,
                entryPoint:
                  l != null
                    ? l
                    : o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                        .CHAT_LONG_PRESS_OPTIONS,
                addedChats: r ? [a] : [],
                removedChats: r ? [] : [a],
              }),
              o("WAWebEditLabelAssociationBridge")
                .editLabelAssociation([i], s)
                .then(function () {
                  o("WAWebLabelCollection").LabelCollection.addOrRemoveLabelsMD(
                    [i],
                    s,
                  );
                }));
          }),
          (n[8] = a),
          (n[9] = l),
          (n[10] = D),
          (n[11] = B))
        : (B = n[11]);
      var W = B,
        q;
      n[12] !== l
        ? ((q = function () {
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              c.jsx(r("WAWebCreateOrEditListDrawer.react"), {
                onBack: o("WAWebDrawerManager").closeDrawerLeft,
                onClose: o("WAWebDrawerManager").closeDrawerLeft,
                entryPoint:
                  l != null
                    ? l
                    : o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                        .CHAT_LONG_PRESS_OPTIONS,
              }),
            );
          }),
          (n[12] = l),
          (n[13] = q))
        : (q = n[13]);
      var U = q,
        V;
      n[14] !== U || n[15] !== d || n[16] !== m
        ? ((V = function () {
            if (o("WAWebMobilePlatforms").isSMB()) {
              o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebBizLabelEditModal.react"), { label: null }),
              );
              return;
            }
            if (o("WAWebListUtils").isListFlowMaxListsCountReached()) {
              o("WAWebListsUtil").showMaxListsModal(v);
              return;
            }
            d
              ? o("WAWebModalManager").ModalManager.open(
                  c.jsx(
                    o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable,
                    {
                      onContinue: function () {
                        (m(), U());
                      },
                    },
                  ),
                )
              : U();
          }),
          (n[14] = U),
          (n[15] = d),
          (n[16] = m),
          (n[17] = V))
        : (V = n[17]);
      var H = V,
        G;
      n[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = o("WAWebMobilePlatforms").isSMB()), (n[18] = G))
        : (G = n[18]);
      var z = G,
        j;
      if (n[19] !== H || n[20] !== W || n[21] !== E || n[22] !== D) {
        var K;
        if (
          (n[24] !== W || n[25] !== D
            ? ((K = function (n) {
                var t = D.has(n.id),
                  a =
                    z && n.colorIndex != null
                      ? o("WAWebListUtils").colorIndexToHex(n.colorIndex)
                      : null,
                  i = c.jsx(
                    r("WDSMenuItem.react"),
                    {
                      Icon:
                        a != null ? r("WDSIconIcLabelFilled.react") : void 0,
                      iconXstyle: a != null ? g.inheritColor : void 0,
                      title: n.name,
                      onPress: function () {
                        return W(n.id, n.type);
                      },
                      isToggleable: !0,
                      toggled: t,
                      closeMenuOnPress: !1,
                      testid: void 0,
                      truncateText: !0,
                    },
                    a != null ? void 0 : n.id,
                  );
                return a != null
                  ? c.jsx(
                      "span",
                      babelHelpers.extends(
                        {},
                        (e || (e = r("stylex"))).props(
                          g.contentsWrapper,
                          g.labelIconColor(a),
                        ),
                        { children: i },
                      ),
                      n.id,
                    )
                  : i;
              }),
              (n[24] = W),
              (n[25] = D),
              (n[26] = K))
            : (K = n[26]),
          (j = E.map(K)),
          E.length > 0)
        ) {
          var Q;
          (n[27] === Symbol.for("react.memo_cache_sentinel")
            ? ((Q = c.jsx(
                r("WDSMenuItem.react"),
                { type: "separator" },
                "separator",
              )),
              (n[27] = Q))
            : (Q = n[27]),
            j.push(Q));
        }
        var X;
        n[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((X = o("WAWebMobilePlatforms").isSMB()
              ? s._(/*BTDS*/ "New label")
              : s._(/*BTDS*/ "New list")),
            (n[28] = X))
          : (X = n[28]);
        var Y;
        (n[29] !== H
          ? ((Y = c.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcAdd.react"),
                title: X,
                onPress: H,
                testid: void 0,
                truncateText: !0,
              },
              "create-new-list-submenu-item",
            )),
            (n[29] = H),
            (n[30] = Y))
          : (Y = n[30]),
          j.push(Y),
          (n[19] = H),
          (n[20] = W),
          (n[21] = E),
          (n[22] = D),
          (n[23] = j));
      } else j = n[23];
      var J;
      n[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = Math.round(window.innerHeight * 0.96)), (n[31] = J))
        : (J = n[31]);
      var Z = J,
        ee;
      n[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = c.jsx("div", { className: "xqu0tyb" }, "bottom-spacer")),
          (n[32] = ee))
        : (ee = n[32]);
      var te;
      return (
        n[33] !== j
          ? ((te = c.jsxs(r("WDSMenu.react"), {
              maxHeight: Z,
              children: [j, ee],
            })),
            (n[33] = j),
            (n[34] = te))
          : (te = n[34]),
        te
      );
    }
    function C(e) {
      return {
        id: e.id,
        listType: e.listType,
        type: e.type === "add" ? "remove" : "add",
      };
    }
    function b() {
      return h();
    }
    l.default = y;
  },
  226,
);
