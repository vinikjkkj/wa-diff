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
      var t = e.chat,
        n = e.onRequestReopen,
        a = o("WAWebListsGatingUtils").isListsEnabled(),
        i = p(
          function () {
            var e = o("WAWebLabelCollection").LabelCollection.filter(
              function (e) {
                return e.name
                  ? a
                    ? e.isActive !== !1 &&
                      e.type !== o("WAWebSchemaLabel").ListType.UNREAD &&
                      e.type !== o("WAWebSchemaLabel").ListType.GROUPS &&
                      e.type !== o("WAWebSchemaLabel").ListType.COMMUNITY &&
                      e.type !== o("WAWebSchemaLabel").ListType.FAVORITES
                    : !o("WAWebListUtils").isBuiltInList(e.type)
                  : !1;
              },
            );
            return (o("WAWebListUtils").sortLabels(e), e);
          },
          [a],
        ),
        l = p(
          function () {
            var e = new Set(t.labels || []),
              n = {};
            return (
              i.forEach(function (t) {
                n[t.id] = e.has(t.id);
              }),
              n
            );
          },
          [t.labels, i],
        ),
        c = f(l),
        h = c[0],
        y = c[1],
        C =
          o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() ===
          o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true,
        b = _(l),
        v = _(h),
        S = _(new Set());
      (m(
        function () {
          v.current = h;
        },
        [h],
      ),
        m(
          function () {
            var e = b.current,
              n = S.current;
            return function () {
              var a = [],
                i = new Set([].concat(Object.keys(e), Object.keys(v.current)));
              if (
                (i.forEach(function (t) {
                  var n = e[t] || !1,
                    r = v.current[t] || !1;
                  n !== r && a.push({ id: t, type: r ? "add" : "remove" });
                }),
                a.length > 0 &&
                  o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(
                    a,
                    [t],
                  ),
                a.length > 0)
              ) {
                var l = r(
                    "WAWebCommonCTWADataSharing",
                  ).getCTWAEligibilityFromChat(t),
                  s = r("countWhere")(Object.keys(e), function (t) {
                    return e[t];
                  }),
                  u = r("countWhere")(a, function (e) {
                    var t = e.type;
                    return t === "add";
                  }),
                  c = r("countWhere")(a, function (e) {
                    var t = e.type;
                    return t === "remove";
                  }),
                  d = s + u - c,
                  m = l != null ? "ctwa_ad" : void 0;
                o("WAWebChatThreadLogging")
                  .getChatThreadIDHMAC(t.id.toString())
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
              if (n.size > 0) {
                var p = Array.from(n);
                (o("WAWebSmbMarkAsXLabelAction").logLabelSignalForModels(
                  [t],
                  p,
                  C,
                ),
                  o(
                    "WAWebSmb3pdConversionSignalAction",
                  ).log3pdConversionSignalForChats([t], p, C),
                  o(
                    "WAWebCustomLabels3pdSignalUtils",
                  ).processCustomLabels3pdSignals(p, [t], C));
              }
            };
          },
          [t, C],
        ));
      var R = d(
          function (e) {
            var n = h[e] || !1,
              r = !n;
            y(function (t) {
              var n;
              return babelHelpers.extends({}, t, ((n = {}), (n[e] = r), n));
            });
            var a = [{ id: e, type: r ? "add" : "remove" }];
            (o("WAWebLabelCollection").LabelCollection.addOrRemoveLabelsMD(a, [
              t,
            ]),
              r ? S.current.add(e) : S.current.delete(e));
          },
          [h, t],
        ),
        L = d(
          function (e) {
            if ((o("WAWebDrawerManager").closeDrawerLeft(), e != null)) {
              var r = [{ id: e, type: "add" }];
              o("WAWebLabelCollection").LabelCollection.addOrRemoveLabelsMD(r, [
                t,
              ]);
            }
            n == null || n();
          },
          [n, t],
        ),
        E = d(
          function () {
            if (o("WAWebListUtils").isListFlowMaxListsCountReached()) {
              o("WAWebListsUtil").showMaxListsModal(a);
              return;
            }
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              u.jsx(r("WAWebCreateOrEditListDrawer.react"), {
                onBack: L,
                onClose: L,
                entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                  .ADD_LIST_FILTER,
              }),
            );
          },
          [a, L],
        ),
        k = d(function () {
          o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
            u.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
              isInitialStep: !0,
            }),
          );
        }, []),
        I = i.map(function (e) {
          var t = h[e.id] || !1;
          return u.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              testid: void 0,
              action: function () {
                return (R(e.id), !1);
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
                      isListsFeatureEnabled: a,
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
        });
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx("div", { className: "xuyqlj2 x1odjw0f", children: I }),
          a &&
            u.jsxs(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: {},
                  1: {
                    className: "x13fuv20 x178xt8z xx42vgk x1380le5 x16ovd2e",
                  },
                }[(i.length > 0) << 0],
                {
                  children: [
                    u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
                      action: E,
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
                      action: k,
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
            ),
        ],
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
