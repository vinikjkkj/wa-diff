__d(
  "WAWebLabelChatHeaderButton.react",
  [
    "fbt",
    "WAWebCommonCTWADataSharing",
    "WAWebHeader.react",
    "WAWebIcLabelFilledIcon.react",
    "WAWebLabelCollection",
    "WAWebLabelGetters",
    "WAWebLabelOutlineIcon.react",
    "WAWebLabelStackIcon.react",
    "WAWebLabels.react",
    "WAWebListIconStacked.react",
    "WAWebListPeopleIcon.react",
    "WAWebListsGatingUtils",
    "WAWebListsIntroPopupLoadable",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebNux",
    "WAWebSMBListsIntroPopupLoadable",
    "WAWebScreenWidthThresholds",
    "WAWebSmbDataSharingOptInModalDialog",
    "WAWebTabOrder",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WDSIconIcArrowDropDown.react",
    "WDSText.react",
    "react",
    "useWAWebListener",
    "useWAWebNux",
    "useWAWebWindowSize",
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
        button: {
          alignItems: "x6s0dn4",
          backgroundColor: "x1280gxy",
          borderTopColor: "xnj1f2r",
          borderInlineEndColor: "x2uibgs",
          borderBottomColor: "xkveyfu",
          borderInlineStartColor: "x12llq9",
          borderStartStartRadius: "xhpystz",
          borderStartEndRadius: "xhmftvz",
          borderEndEndRadius: "x11v37me",
          borderEndStartRadius: "x1tw5c3r",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          cursor: "x1ypdohk",
          display: "x78zum5",
          columnGap: "x1s70e7g",
          height: "x10kmny3",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          ":hover_backgroundColor": "x1ubxc9n",
          $$css: !0,
        },
        icon: {
          color: "x14ug900",
          height: "x8lyb6r",
          width: "x1mzsije",
          $$css: !0,
        },
        listPeopleIcon: {
          color: "x14ug900",
          height: "x8lyb6r",
          marginInlineStart: "x150mmf0",
          width: "x1mzsije",
          $$css: !0,
        },
        labelStackIcon: { position: "x10l6tqk", top: "x16xtl6x", $$css: !0 },
      };
    function h(e) {
      if (e.length === 0) return { primaryLabel: null, secondaryLabel: null };
      var t = e
          .map(function (e) {
            return parseInt(e, 10);
          })
          .filter(function (e) {
            return !Number.isNaN(e);
          }),
        n;
      t.length >= 2
        ? (t.sort(function (e, t) {
            return t - e;
          }),
          (n = t.map(function (e) {
            return e.toString();
          })))
        : (n = e);
      var r = n[0],
        a = o("WAWebLabelCollection").LabelCollection.get(r),
        i = {
          id: r,
          model: a,
          color: a ? o("WAWebLabelGetters").getHexColor(a) : null,
        },
        l = null;
      if (n.length >= 2) {
        var s = n[1],
          u = o("WAWebLabelCollection").LabelCollection.get(s);
        l = {
          id: s,
          model: u,
          color: u ? o("WAWebLabelGetters").getHexColor(u) : null,
        };
      }
      return { primaryLabel: i, secondaryLabel: l };
    }
    function y(e) {
      var t = e.chat,
        n = _(null),
        a = f(null),
        i = a[0],
        l = a[1],
        c = f(null),
        y = c[0],
        C = c[1],
        b = r("useWAWebWindowSize")(),
        v = b.width < o("WAWebScreenWidthThresholds").NARROW_SCREEN_THRESHOLD,
        S = o("WAWebListsGatingUtils").isListsEnabled(),
        R = o("WAWebMobilePlatforms").isSMB()
          ? o("WAWebNux").NUX.SMB_LISTS_INTRO
          : o("WAWebNux").NUX.ADD_TO_LISTS,
        L = r("useWAWebNux")(R),
        E = L[0],
        k = L[1],
        I = f(0),
        T = I[0],
        D = I[1];
      o("useWAWebListener").useListener(
        o("WAWebLabelCollection").LabelCollection,
        "all",
        function () {
          D(function (e) {
            return e + 1;
          });
        },
      );
      var x = p(
          function () {
            if (!t.labels || t.labels.length === 0) return null;
            if (t.labels.length === 1) {
              var e = t.labels[0],
                n = o("WAWebLabelCollection").LabelCollection.get(e);
              return n ? { name: n.name, labelId: e } : null;
            }
            return { count: t.labels.length };
          },
          [t.labels],
        ),
        $ = function (t) {
          var e = h(t),
            n = e.primaryLabel,
            a = e.secondaryLabel,
            i = [
              n == null ? void 0 : n.color,
              a == null ? void 0 : a.color,
            ].filter(Boolean);
          return u.jsx(
            "div",
            babelHelpers.extends(
              {},
              {
                0: { className: "x8lyb6r x1n2onr6 x1mzsije x7g7pl8 x1qfufaz" },
                1: {
                  className:
                    "x6s0dn4 x78zum5 x8lyb6r x150mmf0 x1n2onr6 x1mzsije",
                },
              }[!!S << 0],
              {
                children: S
                  ? u.jsx(r("WAWebListIconStacked.react"), { colors: i })
                  : u.jsxs(u.Fragment, {
                      children: [
                        u.jsx(
                          o("WAWebIcLabelFilledIcon.react").IcLabelFilledIcon,
                          {
                            width: 18,
                            height: 18,
                            style:
                              (n == null ? void 0 : n.color) != null
                                ? { color: n.color }
                                : {},
                            xstyle: g.labelStackIcon,
                          },
                        ),
                        u.jsx(o("WAWebLabelStackIcon.react").LabelStackIcon, {
                          width: 18,
                          height: 18,
                          style:
                            (a == null ? void 0 : a.color) != null
                              ? { color: a.color }
                              : {},
                          xstyle: g.labelStackIcon,
                        }),
                      ],
                    }),
              },
            ),
          );
        },
        P = function () {
          return v
            ? null
            : (x == null ? void 0 : x.name) != null
              ? x.name
              : (x == null ? void 0 : x.count) != null
                ? s._(/*BTDS*/ "{labelCount} selected", [
                    s._param("labelCount", x.count),
                  ])
                : S
                  ? s._(/*BTDS*/ "Add to list")
                  : s._(/*BTDS*/ "Label chat");
        },
        N = function () {
          return (x == null ? void 0 : x.labelId) != null
            ? u.jsx(o("WAWebLabels.react").Labels, {
                labels: [x.labelId],
                showName: !1,
                isListsFeatureEnabled: S,
              })
            : (x == null ? void 0 : x.count) != null && t.labels != null
              ? $(t.labels)
              : S
                ? u.jsx(o("WAWebListPeopleIcon.react").ListPeopleIcon, {
                    iconXstyle: g.listPeopleIcon,
                  })
                : u.jsx(o("WAWebLabelOutlineIcon.react").LabelOutlineIcon, {
                    iconXstyle: g.icon,
                  });
        },
        M = function () {
          C(null);
        },
        w = _(r("WAWebNoop")),
        A = d(
          function () {
            var e = babelHelpers.extends(
              {},
              o("WAWebHeader.react").createLabelsDropdownMenu(t, function () {
                return w.current();
              }),
              { anchor: i, anchorRef: n },
            );
            C(e);
          },
          [t, i],
        );
      m(
        function () {
          w.current = A;
        },
        [A],
      );
      var F = function (n) {
          if ((n.preventDefault(), n.stopPropagation(), t))
            if (y != null) M();
            else if (E && S) {
              var e = o("WAWebMobilePlatforms").isSMB()
                ? o("WAWebSMBListsIntroPopupLoadable")
                    .SMBListsIntroPopupLoadable
                : o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable;
              o("WAWebModalManager").ModalManager.open(
                u.jsx(e, {
                  onContinue: function () {
                    (k(),
                      r(
                        "WAWebSmbDataSharingOptInModalDialog",
                      ).maybeShowLabelDataSharingDialog(
                        [t],
                        r("WAWebCommonCTWADataSharing")
                          .SmbDataSharingLabelTargetValues.CHAT,
                        function () {
                          A();
                        },
                        o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
                          .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT
                          .LABEL_CHAT,
                      ));
                  },
                }),
              );
            } else
              r(
                "WAWebSmbDataSharingOptInModalDialog",
              ).maybeShowLabelDataSharingDialog(
                [t],
                r("WAWebCommonCTWADataSharing").SmbDataSharingLabelTargetValues
                  .CHAT,
                function () {
                  A();
                },
                o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
                  .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT,
              );
        },
        O;
      return (
        y != null &&
          (O = u.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "LabelChatDropdownMenu",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: M,
            children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: y }),
          })),
        u.jsxs(u.Fragment, {
          children: [
            u.jsx("div", {
              ref: l,
              className: "x150mmf0",
              children: u.jsxs(r("WAWebUnstyledButton.react"), {
                ref: n,
                dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
                xstyle: g.button,
                onClick: F,
                "aria-label": s._(/*BTDS*/ "Label chat"),
                children: [
                  N(),
                  !v &&
                    u.jsx(r("WDSText.react"), {
                      type: "Body2Emphasized",
                      textAlign: "center",
                      colorName: "contentDefault",
                      children: P(),
                    }),
                  u.jsx(r("WDSIconIcArrowDropDown.react"), {
                    iconXstyle: g.icon,
                  }),
                ],
              }),
            }),
            O,
          ],
        })
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.getLabelStackInfo = h),
      (l.LabelChatHeaderButton = y));
  },
  226,
);
