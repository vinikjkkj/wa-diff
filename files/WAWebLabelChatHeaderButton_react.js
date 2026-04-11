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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(46),
        n = e.chat,
        a = _(null),
        i = f(null),
        l = i[0],
        c = i[1],
        d = f(null),
        p = d[0],
        y = d[1],
        b = r("useWAWebWindowSize")(),
        v = b.width < o("WAWebScreenWidthThresholds").NARROW_SCREEN_THRESHOLD,
        S;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = o("WAWebListsGatingUtils").isListsEnabled()), (t[0] = S))
        : (S = t[0]);
      var R = S,
        L = o("WAWebMobilePlatforms").isSMB()
          ? o("WAWebNux").NUX.SMB_LISTS_INTRO
          : o("WAWebNux").NUX.ADD_TO_LISTS,
        E = r("useWAWebNux")(L),
        k = E[0],
        I = E[1],
        T = f(0),
        D = T[1],
        x;
      (t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = function () {
            D(C);
          }),
          (t[1] = x))
        : (x = t[1]),
        o("useWAWebListener").useListener(
          o("WAWebLabelCollection").LabelCollection,
          "all",
          x,
        ));
      var $;
      e: {
        if (!n.labels || n.labels.length === 0) {
          $ = null;
          break e;
        }
        if (n.labels.length === 1) {
          var P = n.labels[0],
            N;
          t[2] !== P
            ? ((N = o("WAWebLabelCollection").LabelCollection.get(P)),
              (t[2] = P),
              (t[3] = N))
            : (N = t[3]);
          var M = N;
          if (!M) {
            $ = null;
            break e;
          }
          var w;
          (t[4] !== P || t[5] !== M.name
            ? ((w = { name: M.name, labelId: P }),
              (t[4] = P),
              (t[5] = M.name),
              (t[6] = w))
            : (w = t[6]),
            ($ = w));
          break e;
        }
        var A;
        (t[7] !== n.labels.length
          ? ((A = { count: n.labels.length }),
            (t[7] = n.labels.length),
            (t[8] = A))
          : (A = t[8]),
          ($ = A));
      }
      var F = $,
        O;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = function (t) {
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
                  0: {
                    className: "x8lyb6r x1n2onr6 x1mzsije x7g7pl8 x1qfufaz",
                  },
                  1: {
                    className:
                      "x6s0dn4 x78zum5 x8lyb6r x150mmf0 x1n2onr6 x1mzsije",
                  },
                }[!!R << 0],
                {
                  children: R
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
          }),
          (t[9] = O))
        : (O = t[9]);
      var B = O,
        W;
      t[10] !== F || t[11] !== v
        ? ((W = function () {
            return v
              ? null
              : (F == null ? void 0 : F.name) != null
                ? F.name
                : (F == null ? void 0 : F.count) != null
                  ? s._(/*BTDS*/ "{labelCount} selected", [
                      s._param("labelCount", F.count),
                    ])
                  : R
                    ? s._(/*BTDS*/ "Add to list")
                    : s._(/*BTDS*/ "Label chat");
          }),
          (t[10] = F),
          (t[11] = v),
          (t[12] = W))
        : (W = t[12]);
      var q = W,
        U;
      t[13] !== n.labels || t[14] !== F
        ? ((U = function () {
            return (F == null ? void 0 : F.labelId) != null
              ? u.jsx(o("WAWebLabels.react").Labels, {
                  labels: [F.labelId],
                  showName: !1,
                  isListsFeatureEnabled: R,
                })
              : (F == null ? void 0 : F.count) != null && n.labels != null
                ? B(n.labels)
                : R
                  ? u.jsx(o("WAWebListPeopleIcon.react").ListPeopleIcon, {
                      iconXstyle: g.listPeopleIcon,
                    })
                  : u.jsx(o("WAWebLabelOutlineIcon.react").LabelOutlineIcon, {
                      iconXstyle: g.icon,
                    });
          }),
          (t[13] = n.labels),
          (t[14] = F),
          (t[15] = U))
        : (U = t[15]);
      var V = U,
        H;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = function () {
            y(null);
          }),
          (t[16] = H))
        : (H = t[16]);
      var G = H,
        z = _(r("WAWebNoop")),
        j;
      t[17] !== n || t[18] !== l
        ? ((j = function () {
            var e = babelHelpers.extends(
              {},
              o("WAWebHeader.react").createLabelsDropdownMenu(n, function () {
                return z.current();
              }),
              { anchor: l, anchorRef: a },
            );
            y(e);
          }),
          (t[17] = n),
          (t[18] = l),
          (t[19] = j))
        : (j = t[19]);
      var K = j,
        Q,
        X;
      (t[20] !== K
        ? ((X = function () {
            z.current = K;
          }),
          (Q = [K]),
          (t[20] = K),
          (t[21] = Q),
          (t[22] = X))
        : ((Q = t[21]), (X = t[22])),
        m(X, Q));
      var Y;
      t[23] !== n || t[24] !== p || t[25] !== K || t[26] !== k || t[27] !== I
        ? ((Y = function (t) {
            if ((t.preventDefault(), t.stopPropagation(), n))
              if (p != null) G();
              else if (k && R) {
                var e = o("WAWebMobilePlatforms").isSMB()
                  ? o("WAWebSMBListsIntroPopupLoadable")
                      .SMBListsIntroPopupLoadable
                  : o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable;
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(e, {
                    onContinue: function () {
                      (I(),
                        r(
                          "WAWebSmbDataSharingOptInModalDialog",
                        ).maybeShowLabelDataSharingDialog(
                          [n],
                          r("WAWebCommonCTWADataSharing")
                            .SmbDataSharingLabelTargetValues.CHAT,
                          function () {
                            K();
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
                  [n],
                  r("WAWebCommonCTWADataSharing")
                    .SmbDataSharingLabelTargetValues.CHAT,
                  function () {
                    K();
                  },
                  o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
                    .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT,
                );
          }),
          (t[23] = n),
          (t[24] = p),
          (t[25] = K),
          (t[26] = k),
          (t[27] = I),
          (t[28] = Y))
        : (Y = t[28]);
      var J = Y,
        Z;
      if (p != null) {
        var ee;
        (t[29] !== p
          ? ((ee = u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "LabelChatDropdownMenu",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: G,
              children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: p }),
            })),
            (t[29] = p),
            (t[30] = ee))
          : (ee = t[30]),
          (Z = ee));
      }
      var te;
      t[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((te = { className: "x150mmf0" }), (t[31] = te))
        : (te = t[31]);
      var ne;
      t[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = s._(/*BTDS*/ "Label chat")), (t[32] = ne))
        : (ne = t[32]);
      var re;
      t[33] !== V ? ((re = V()), (t[33] = V), (t[34] = re)) : (re = t[34]);
      var oe;
      t[35] !== q || t[36] !== v
        ? ((oe =
            !v &&
            u.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              textAlign: "center",
              colorName: "contentDefault",
              children: q(),
            })),
          (t[35] = q),
          (t[36] = v),
          (t[37] = oe))
        : (oe = t[37]);
      var ae;
      t[38] === Symbol.for("react.memo_cache_sentinel")
        ? ((ae = u.jsx(r("WDSIconIcArrowDropDown.react"), {
            iconXstyle: g.icon,
          })),
          (t[38] = ae))
        : (ae = t[38]);
      var ie;
      t[39] !== J || t[40] !== re || t[41] !== oe
        ? ((ie = u.jsx(
            "div",
            babelHelpers.extends({ ref: c }, te, {
              children: u.jsxs(r("WAWebUnstyledButton.react"), {
                ref: a,
                dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
                xstyle: g.button,
                onClick: J,
                "aria-label": ne,
                children: [re, oe, ae],
              }),
            }),
          )),
          (t[39] = J),
          (t[40] = re),
          (t[41] = oe),
          (t[42] = ie))
        : (ie = t[42]);
      var le;
      return (
        t[43] !== ie || t[44] !== Z
          ? ((le = u.jsxs(u.Fragment, { children: [ie, Z] })),
            (t[43] = ie),
            (t[44] = Z),
            (t[45] = le))
          : (le = t[45]),
        le
      );
    }
    function C(e) {
      return e + 1;
    }
    ((l.getLabelStackInfo = h), (l.LabelChatHeaderButton = y));
  },
  226,
);
