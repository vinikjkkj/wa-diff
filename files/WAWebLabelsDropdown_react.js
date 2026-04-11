__d(
  "WAWebLabelsDropdown.react",
  [
    "fbt",
    "WASmaxInBizSettingsEnums",
    "WAWebCTWADataSharingModel",
    "WAWebChatThreadLogging",
    "WAWebCheckBox.react",
    "WAWebCommonCTWADataSharing",
    "WAWebCreateOrEditListDrawer.react",
    "WAWebCustomLabels3pdSignalUtils",
    "WAWebDrawerManager",
    "WAWebDropdownItem.react",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebLabelFlowLoadable",
    "WAWebLabels.react",
    "WAWebListPeopleIcon.react",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WAWebListsUtil",
    "WAWebNoop",
    "WAWebSchemaLabel",
    "WAWebSmb3pdConversionSignalAction",
    "WAWebSmbMarkAsXLabelAction",
    "WAWebWamEnumLabelOperations",
    "WAWebWamEnumLabelTargets",
    "WAWebWamEnumUpdateEntryPoint",
    "WAWebWamLabelEventReporter",
    "WDSIconIcAdd.react",
    "countWhere",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useRef,
      f = c.useState,
      g = {
        labelIcon: {
          height: "xxk0z11",
          width: "xvy4d1p",
          marginTop: "xav9cv8",
          $$css: !0,
        },
        footerIconSize: { height: "xmix8c7", width: "x1xp8n7a", $$css: !0 },
      };
    function h(e) {
      var t = o("react-compiler-runtime").c(35),
        n = e.chat,
        a = e.onRequestReopen,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = o("WAWebListsGatingUtils").isListsEnabled()), (t[0] = i))
        : (i = t[0]);
      var l = i,
        c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = o("WAWebLabelCollection").LabelCollection.filter(function (e) {
            return e.name
              ? l
                ? e.isActive !== !1 &&
                  e.type !== o("WAWebSchemaLabel").ListType.UNREAD &&
                  e.type !== o("WAWebSchemaLabel").ListType.GROUPS &&
                  e.type !== o("WAWebSchemaLabel").ListType.COMMUNITY &&
                  e.type !== o("WAWebSchemaLabel").ListType.FAVORITES
                : !o("WAWebListUtils").isBuiltInList(e.type)
              : !1;
          })),
          o("WAWebListUtils").sortLabels(c),
          (t[1] = c))
        : (c = t[1]);
      var d = c,
        p;
      t[2] !== n.labels
        ? ((p = n.labels || []), (t[2] = n.labels), (t[3] = p))
        : (p = t[3]);
      var h;
      t[4] !== p ? ((h = new Set(p)), (t[4] = p), (t[5] = h)) : (h = t[5]);
      var v = h,
        S;
      t[6] !== v
        ? ((S = {}),
          d.forEach(function (e) {
            S[e.id] = v.has(e.id);
          }),
          (t[6] = v),
          (t[7] = S))
        : (S = t[7]);
      var R = S,
        L = f(R),
        E = L[0],
        k = L[1],
        I;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue()),
          (t[8] = I))
        : (I = t[8]);
      var T = I === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true,
        D = _(R),
        x = _(E),
        $;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = new Set()), (t[9] = $))
        : ($ = t[9]);
      var P = _($),
        N,
        M;
      (t[10] !== E
        ? ((N = function () {
            x.current = E;
          }),
          (M = [E]),
          (t[10] = E),
          (t[11] = N),
          (t[12] = M))
        : ((N = t[11]), (M = t[12])),
        m(N, M));
      var w, A;
      (t[13] !== n
        ? ((w = function () {
            var e = D.current,
              t = P.current;
            return function () {
              var a = [],
                i = new Set([].concat(Object.keys(e), Object.keys(x.current)));
              if (
                (i.forEach(function (t) {
                  var n = e[t] || !1,
                    r = x.current[t] || !1;
                  n !== r && a.push({ id: t, type: r ? "add" : "remove" });
                }),
                a.length > 0 &&
                  o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(
                    a,
                    [n],
                  ),
                a.length > 0)
              ) {
                var l = r(
                    "WAWebCommonCTWADataSharing",
                  ).getCTWAEligibilityFromChat(n),
                  s = r("countWhere")(Object.keys(e), function (t) {
                    return e[t];
                  }),
                  u = r("countWhere")(a, b),
                  c = r("countWhere")(a, C),
                  d = s + u - c,
                  m = l != null ? "ctwa_ad" : void 0;
                o("WAWebChatThreadLogging")
                  .getChatThreadIDHMAC(n.id.toString())
                  .then(function (e) {
                    (a.forEach(function (t) {
                      var n = t.id,
                        r = t.type,
                        a = o("WAWebLabelCollection").LabelCollection.get(n);
                      if (a) {
                        var i = o(
                            "WAWebLabelConstants",
                          ).mapLabelNameToPredefinedId(a.name),
                          l = i != null ? i : a.predefinedId;
                        o("WAWebWamLabelEventReporter").logLabelOperationEvent(
                          r === "add"
                            ? o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS
                                .ADD
                            : o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS
                                .DELETE,
                          void 0,
                          o("WAWebWamEnumLabelTargets").LABEL_TARGETS.CONTACT,
                          e != null ? e : void 0,
                          l != null ? l : void 0,
                          l != null ? void 0 : a.name,
                          m,
                          o("WAWebWamLabelEventReporter")
                            .LabelOperationEntryPoints.CHAT_HEADER,
                        );
                      }
                    }),
                      o("WAWebWamLabelEventReporter").logLabelOperationEvent(
                        o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS
                          .UPDATE_LABEL_COUNT,
                        d,
                        o("WAWebWamEnumLabelTargets").LABEL_TARGETS.CONTACT,
                        e != null ? e : void 0,
                        void 0,
                        void 0,
                        m,
                        o("WAWebWamLabelEventReporter")
                          .LabelOperationEntryPoints.CHAT_HEADER,
                      ));
                  });
              }
              if (t.size > 0) {
                var p = Array.from(t);
                (o("WAWebSmbMarkAsXLabelAction").logLabelSignalForModels(
                  [n],
                  p,
                  T,
                ),
                  o(
                    "WAWebSmb3pdConversionSignalAction",
                  ).log3pdConversionSignalForChats([n], p, T),
                  o(
                    "WAWebCustomLabels3pdSignalUtils",
                  ).processCustomLabels3pdSignals(p, [n], T));
              }
            };
          }),
          (A = [n, T]),
          (t[13] = n),
          (t[14] = w),
          (t[15] = A))
        : ((w = t[14]), (A = t[15])),
        m(w, A));
      var F;
      t[16] !== n || t[17] !== E
        ? ((F = function (t) {
            var e = E[t] || !1,
              r = !e;
            k(function (e) {
              var n;
              return babelHelpers.extends({}, e, ((n = {}), (n[t] = r), n));
            });
            var a = [{ id: t, type: r ? "add" : "remove" }];
            (o("WAWebLabelCollection").LabelCollection.addOrRemoveLabelsMD(a, [
              n,
            ]),
              r ? P.current.add(t) : P.current.delete(t));
          }),
          (t[16] = n),
          (t[17] = E),
          (t[18] = F))
        : (F = t[18]);
      var O = F,
        B;
      t[19] !== n || t[20] !== a
        ? ((B = function (t) {
            if ((o("WAWebDrawerManager").closeDrawerLeft(), t != null)) {
              var e = [{ id: t, type: "add" }];
              o("WAWebLabelCollection").LabelCollection.addOrRemoveLabelsMD(e, [
                n,
              ]);
            }
            a == null || a();
          }),
          (t[19] = n),
          (t[20] = a),
          (t[21] = B))
        : (B = t[21]);
      var W = B,
        q;
      t[22] !== W
        ? ((q = function () {
            if (o("WAWebListUtils").isListFlowMaxListsCountReached()) {
              o("WAWebListsUtil").showMaxListsModal(l);
              return;
            }
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              u.jsx(r("WAWebCreateOrEditListDrawer.react"), {
                onBack: W,
                onClose: W,
                entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                  .ADD_LIST_FILTER,
              }),
            );
          }),
          (t[22] = W),
          (t[23] = q))
        : (q = t[23]);
      var U = q,
        V = y,
        H;
      t[24] !== O || t[25] !== E
        ? ((H = d.map(function (e) {
            var t = E[e.id] || !1;
            return u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                action: function () {
                  return (O(e.id), !1);
                },
                children: u.jsxs("div", {
                  className:
                    "x6s0dn4 x9f619 x78zum5 x193iq5w x6ikm8r x10wlt62 x16ovd2e xde1mab x12xbjc7 x1iw51ew",
                  children: [
                    u.jsx("div", {
                      className:
                        "x2i0jwv x6ikm8r x10wlt62 x1jchvi3 xjb2p0i xo1l8bm x17mssa0 x1ic7a3i xav9cv8",
                      children: u.jsx(o("WAWebLabels.react").Labels, {
                        labels: [e.id],
                        showName: !0,
                        theme: "label-filter",
                        iconXstyle: g.labelIcon,
                        isListsFeatureEnabled: l,
                      }),
                    }),
                    u.jsx("div", {
                      className: "x1uvdrpn",
                      children: u.jsx(o("WAWebCheckBox.react").CheckBox, {
                        checked: t,
                        onChange: r("WAWebNoop"),
                      }),
                    }),
                  ],
                }),
              },
              "label_item_" + e.id,
            );
          })),
          (t[24] = O),
          (t[25] = E),
          (t[26] = H))
        : (H = t[26]);
      var G = H,
        z;
      t[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = { className: "xuyqlj2 x1odjw0f" }), (t[27] = z))
        : (z = t[27]);
      var j;
      t[28] !== G
        ? ((j = u.jsx("div", babelHelpers.extends({}, z, { children: G }))),
          (t[28] = G),
          (t[29] = j))
        : (j = t[29]);
      var K;
      t[30] !== U
        ? ((K =
            l &&
            u.jsxs(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: {},
                  1: {
                    className: "x13fuv20 x178xt8z xx42vgk x1380le5 x16ovd2e",
                  },
                }[(d.length > 0) << 0],
                {
                  children: [
                    u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
                      action: U,
                      testid: void 0,
                      children: u.jsxs("div", {
                        className:
                          "x6s0dn4 x9f619 x78zum5 x193iq5w x6ikm8r x10wlt62 x16ovd2e xde1mab x12xbjc7 x1iw51ew",
                        children: [
                          u.jsx("div", {
                            className:
                              "x14ug900 x78zum5 x6s0dn4 xl56j7k xvy4d1p xxk0z11 x2lah0s x1sbwfh8 x16q7b9a",
                            children: u.jsx(r("WDSIconIcAdd.react"), {
                              iconXstyle: g.footerIconSize,
                            }),
                          }),
                          u.jsx("span", {
                            className: "x1f6kntn xggjnk3 x14ug900 x1wbi8v6",
                            children: s._(/*BTDS*/ "New list"),
                          }),
                        ],
                      }),
                    }),
                    u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
                      action: V,
                      testid: void 0,
                      children: u.jsxs("div", {
                        className:
                          "x6s0dn4 x9f619 x78zum5 x193iq5w x6ikm8r x10wlt62 x16ovd2e xde1mab x12xbjc7 x1iw51ew",
                        children: [
                          u.jsx("div", {
                            className:
                              "x14ug900 x78zum5 x6s0dn4 xl56j7k xvy4d1p xxk0z11 x2lah0s x1sbwfh8 x16q7b9a",
                            children: u.jsx(
                              o("WAWebListPeopleIcon.react").ListPeopleIcon,
                              { iconXstyle: g.footerIconSize },
                            ),
                          }),
                          u.jsx("span", {
                            className: "x1f6kntn xggjnk3 x14ug900 x1wbi8v6",
                            children: s._(/*BTDS*/ "Manage lists"),
                          }),
                        ],
                      }),
                    }),
                  ],
                },
              ),
            )),
          (t[30] = U),
          (t[31] = K))
        : (K = t[31]);
      var Q;
      return (
        t[32] !== j || t[33] !== K
          ? ((Q = u.jsxs(u.Fragment, { children: [j, K] })),
            (t[32] = j),
            (t[33] = K),
            (t[34] = Q))
          : (Q = t[34]),
        Q
      );
    }
    function y() {
      o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
        u.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
          isInitialStep: !0,
        }),
      );
    }
    function C(e) {
      var t = e.type;
      return t === "remove";
    }
    function b(e) {
      var t = e.type;
      return t === "add";
    }
    l.default = h;
  },
  226,
);
