__d(
  "WAWebCommunitySettingsDrawer.react",
  [
    "fbt",
    "Promise",
    "WANullthrows",
    "WAWebCommunityGatingUtils",
    "WAWebCommunitySubgroupSuggestionsModals.react",
    "WAWebConfirmPopup.react",
    "WAWebDrawer.react",
    "WAWebDrawerBlock.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebGroupConstants",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebSetPropertyGroupAction",
    "WAWebSettingsPopup.react",
    "WAWebText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebFocusOnMount",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c.useMemo,
      p = { paddingTop20: { paddingTop: "x1h678fw", $$css: !0 } };
    function _(e) {
      var t = o("react-compiler-runtime").c(21),
        a = e.settingType,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["id"]), (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebModelValues").useModelValues(e.chat, i),
        u;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = [
            "allowNonAdminSubGroupCreation",
            "subgroupSuggestions",
            "joinedSubgroups",
            "unjoinedSubgroups",
          ]),
          (t[1] = u))
        : (u = t[1]);
      var c = o("useWAWebModelValues").useModelValues(e.groupMetadata, u),
        m;
      e: switch (a) {
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE
          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION: {
          var p;
          (t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = [
                {
                  label: s._(/*BTDS*/ "Everyone"),
                  secondaryLabel: s._(
                    /*BTDS*/ "All community members can add new groups directly.",
                  ),
                  value: 1,
                },
                {
                  label: s._(/*BTDS*/ "Only community admins"),
                  secondaryLabel: s._(
                    /*BTDS*/ "Only community admins can add new groups directly.",
                  ),
                  value: 0,
                },
              ]),
              (t[2] = p))
            : (p = t[2]),
            (m = p));
          break e;
        }
        default: {
          var _;
          (t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = []), (t[3] = _))
            : (_ = t[3]),
            (m = _));
        }
      }
      var h = m,
        y;
      e: {
        var C = c.allowNonAdminSubGroupCreation;
        switch (a) {
          case o("WAWebGroupConstants").GROUP_SETTING_TYPE
            .ALLOW_NON_ADMIN_SUB_GROUP_CREATION: {
            y = C === !0 ? 1 : 0;
            break e;
          }
          default:
            y = 0;
        }
      }
      var b = y,
        v;
      e: switch (a) {
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE
          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION: {
          var S;
          (t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((S = s._(/*BTDS*/ "Who can add new groups")), (t[4] = S))
            : (S = t[4]),
            (v = S));
          break e;
        }
        default:
          v = "";
      }
      var R = v,
        L;
      e: {
        if (
          a ===
          o("WAWebGroupConstants").GROUP_SETTING_TYPE
            .ALLOW_NON_ADMIN_SUB_GROUP_CREATION
        ) {
          var E;
          (t[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((E = s._(
                /*BTDS*/ "Members can always suggest groups for admin approval. Community admins can remove any group. {=m1}",
                [
                  s._implicitParam(
                    "=m1",
                    d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getMemberAddedGroupsUrl(),
                      children: s._(/*BTDS*/ "Learn more"),
                    }),
                  ),
                ],
              )),
              (t[5] = E))
            : (E = t[5]),
            (L = E));
          break e;
        }
        L = null;
      }
      var k = L,
        I;
      t[6] !== l ||
      t[7] !== c.joinedSubgroups ||
      t[8] !== c.subgroupSuggestions ||
      t[9] !== c.unjoinedSubgroups ||
      t[10] !== b ||
      t[11] !== a
        ? ((I = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (e === b) {
                  o("WAWebModalManager").ModalManager.close();
                  return;
                }
                var t = function () {
                  o("WAWebSetPropertyGroupAction")
                    .setGroupProperty(l, a, e)
                    .catch(f);
                };
                e: switch (a) {
                  case o("WAWebGroupConstants").GROUP_SETTING_TYPE
                    .ALLOW_NON_ADMIN_SUB_GROUP_CREATION: {
                    var n = c.subgroupSuggestions.length;
                    if (e === 1 && n > 0) {
                      if (!(yield g())) break e;
                      var r =
                          c.joinedSubgroups.length + c.unjoinedSubgroups.length,
                        i =
                          o(
                            "WAWebCommunityGatingUtils",
                          ).getParentGroupLinkLimit() - r;
                      if (
                        n > i &&
                        !(yield o(
                          "WAWebCommunitySubgroupSuggestionsModals.react",
                        ).confirmCommunityFull(i, n))
                      )
                        break e;
                    }
                    t();
                    break e;
                  }
                  default:
                    t();
                }
                o("WAWebModalManager").ModalManager.close();
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (t[6] = l),
          (t[7] = c.joinedSubgroups),
          (t[8] = c.subgroupSuggestions),
          (t[9] = c.unjoinedSubgroups),
          (t[10] = b),
          (t[11] = a),
          (t[12] = I))
        : (I = t[12]);
      var T = I,
        D;
      t[13] !== T
        ? ((D = function (t) {
            T(t);
          }),
          (t[13] = T),
          (t[14] = D))
        : (D = t[14]);
      var x;
      return (
        t[15] !== k || t[16] !== b || t[17] !== h || t[18] !== R || t[19] !== D
          ? ((x = d.jsx(r("WAWebSettingsPopup.react"), {
              options: h,
              initialValue: b,
              title: R,
              onSelect: D,
              explanation: k,
            })),
            (t[15] = k),
            (t[16] = b),
            (t[17] = h),
            (t[18] = R),
            (t[19] = D),
            (t[20] = x))
          : (x = t[20]),
        x
      );
    }
    function f() {
      return r("WAWebNoop");
    }
    function g() {
      return new (u || (u = n("Promise")))(function (e) {
        o("WAWebModalManager").ModalManager.open(
          d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            title: s._(/*BTDS*/ "Approve all pending group suggestions?"),
            okText: s._(/*BTDS*/ "Approve"),
            onOK: function () {
              return e(!0);
            },
            onCancel: function () {
              return e(!1);
            },
            tsNavigationData: {
              surface: "unknown",
              viewName: "community-settings",
            },
            children: s._(
              /*BTDS*/ 'If this setting is changed to "Everyone," all pending group suggestions will be approved.',
            ),
          }),
        );
      });
    }
    function h(t) {
      var n = o("react-compiler-runtime").c(22),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        u = l.chat,
        c = l.onBack,
        m;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = ["allowNonAdminSubGroupCreation"]), (n[3] = m))
        : (m = n[3]);
      var f = o("useWAWebModelValues").useOptionalModelValues(
          a.chat.groupMetadata,
          m,
        ),
        g = r("useWAWebFocusOnMount")(),
        h;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = { surface: "unknown", viewName: "community-settings" }),
          (n[4] = h))
        : (h = n[4]);
      var C;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Community settings")), (n[5] = C))
        : (C = n[5]);
      var b;
      n[6] !== c
        ? ((b = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: C,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: c,
          })),
          (n[6] = c),
          (n[7] = b))
        : (b = n[7]);
      var v;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s._(/*BTDS*/ "Community settings drawer")), (n[8] = v))
        : (v = n[8]);
      var S;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s._(/*BTDS*/ "Community permissions")), (n[9] = S))
        : (S = n[9]);
      var R = !!(f != null && f.allowNonAdminSubGroupCreation),
        L;
      n[10] !== u
        ? ((L = function () {
            o("WAWebModalManager").ModalManager.open(
              d.jsx(_, {
                settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                  .ALLOW_NON_ADMIN_SUB_GROUP_CREATION,
                chat: u,
                groupMetadata: r("WANullthrows")(u.groupMetadata),
              }),
              { transition: "modal" },
            );
          }),
          (n[10] = u),
          (n[11] = L))
        : (L = n[11]);
      var E;
      n[12] !== R || n[13] !== L
        ? ((E = d.jsx(r("WAWebDrawerBody.react"), {
            children: d.jsx(r("WAWebDrawerSection.react"), {
              title: S,
              titleXStyle: p.paddingTop20,
              children: d.jsx(y, { isEnabled: R, onClick: L }),
            }),
          })),
          (n[12] = R),
          (n[13] = L),
          (n[14] = E))
        : (E = n[14]);
      var k;
      n[15] !== g || n[16] !== E
        ? ((k = d.jsx("div", {
            role: "complementary",
            ref: g,
            tabIndex: -1,
            "aria-label": v,
            children: E,
          })),
          (n[15] = g),
          (n[16] = E),
          (n[17] = k))
        : (k = n[17]);
      var I;
      return (
        n[18] !== i || n[19] !== k || n[20] !== b
          ? ((I = d.jsxs(r("WAWebDrawer.react"), {
              ref: i,
              testid: void 0,
              tsNavigationData: h,
              children: [b, k],
            })),
            (n[18] = i),
            (n[19] = k),
            (n[20] = b),
            (n[21] = I))
          : (I = n[21]),
        I
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.isEnabled,
        a = e.onClick,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Who can add new groups")), (t[0] = i))
        : (i = t[0]);
      var l = i,
        u;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = d.jsx("div", {
            className: "x13m54ha",
            children: d.jsx(o("WAWebText.react").WAWebTextTitle, {
              children: l,
            }),
          })),
          (t[1] = u))
        : (u = t[1]);
      var c;
      t[2] !== n
        ? ((c = d.jsx(o("WAWebText.react").WAWebTextMuted, {
            testid: void 0,
            children: n
              ? s._(/*BTDS*/ "Everyone")
              : s._(/*BTDS*/ "Only community admins"),
          })),
          (t[2] = n),
          (t[3] = c))
        : (c = t[3]);
      var m;
      return (
        t[4] !== a || t[5] !== c
          ? ((m = d.jsxs(r("WAWebDrawerBlock.react"), {
              onClick: a,
              multiline: !0,
              testid: void 0,
              ariaLabel: l,
              children: [u, c],
            })),
            (t[4] = a),
            (t[5] = c),
            (t[6] = m))
          : (m = t[6]),
        m
      );
    }
    l.default = h;
  },
  226,
);
