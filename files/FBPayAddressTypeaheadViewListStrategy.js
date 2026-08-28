__d(
  "FBPayAddressTypeaheadViewListStrategy",
  [
    "fbt",
    "CometColumn.react",
    "CometColumnItem.react",
    "CometImage.react",
    "CometPressable.react",
    "CometTypeaheadViewList.react",
    "FBPayAddressTypeaheadViewItem",
    "FBPayAddressTypeaheadViewListStrategyUtils",
    "FBPayECPAddressTypeaheadConstantsUtils",
    "FBPayECPText.react",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
    "useBaseTypeaheadLayoutContextualStrategyStateContext",
    "useCurrentDisplayMode",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = [
        "ariaProps",
        "attributionIconNeeded",
        "darkIconUri",
        "entries",
        "extraViewProps",
        "highlightedEntry",
        "isDesktop",
        "isLoading",
        "lastSuggestedEntries",
        "lightIconUri",
        "logger",
        "onAbandonTypeahead_DO_NOT_USE",
        "onPressEnterManually",
        "queryString",
        "setAttributionIconUsabilityAndUri",
        "setAutoCompleteState",
        "setLastSuggestedEntries",
        "shouldDisableTypeahead",
      ],
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        desktopLogo: {
          bottom: "x1w99lxo",
          insetInlineEnd: "x1x3l4f1",
          left: null,
          right: null,
          position: "xixxii4",
          $$css: !0,
        },
        dialogWrapper: {
          alignItems: "x1cy8zhl",
          opacity: "x1ks1olk",
          paddingInlineStart: "x1pixwil",
          $$css: !0,
        },
        headline: {
          alignItems: "x1cy8zhl",
          paddingInlineStart: "x1pixwil",
          $$css: !0,
        },
        mSiteLogo: {
          bottom: "x1w99lxo",
          insetInlineEnd: "xvd704i",
          left: null,
          right: null,
          position: "xixxii4",
          $$css: !0,
        },
        pressable: {
          borderTopColor: "x6zyg47",
          borderInlineEndColor: "x1lu4ftm",
          borderBottomColor: "xpn8fn3",
          borderInlineStartColor: "x114g2xr",
          marginBottom: "xjpr12u",
          marginTop: "xr9ek0c",
          paddingTop: "xyamay9",
          paddingInlineEnd: "xv54qhq",
          paddingBottom: "x1l90r2v",
          paddingInlineStart: "xf7dkkf",
          $$css: !0,
        },
      };
    function p(t) {
      var n,
        a = o("react-compiler-runtime").c(51),
        i,
        l,
        u,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E;
      if (a[0] !== t) {
        var k = t.ariaProps,
          I = t.attributionIconNeeded,
          T = t.darkIconUri,
          D = t.entries,
          x = t.extraViewProps,
          $ = t.highlightedEntry,
          P = t.isDesktop,
          N = t.isLoading,
          M = t.lastSuggestedEntries,
          w = t.lightIconUri,
          A = t.logger,
          F = t.onAbandonTypeahead_DO_NOT_USE,
          O = t.onPressEnterManually,
          B = t.queryString,
          W = t.setAttributionIconUsabilityAndUri,
          q = t.setAutoCompleteState,
          U = t.setLastSuggestedEntries,
          V = t.shouldDisableTypeahead,
          H = babelHelpers.objectWithoutPropertiesLoose(t, e);
        ((i = k),
          (l = I),
          (u = T),
          (p = D),
          (_ = $),
          (f = P),
          (g = M),
          (h = w),
          (y = A),
          (C = O),
          (b = B),
          (v = W),
          (S = q),
          (R = U),
          (L = V),
          (E = H),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l),
          (a[3] = u),
          (a[4] = p),
          (a[5] = _),
          (a[6] = f),
          (a[7] = g),
          (a[8] = h),
          (a[9] = y),
          (a[10] = C),
          (a[11] = b),
          (a[12] = v),
          (a[13] = S),
          (a[14] = R),
          (a[15] = L),
          (a[16] = E));
      } else
        ((i = a[1]),
          (l = a[2]),
          (u = a[3]),
          (p = a[4]),
          (_ = a[5]),
          (f = a[6]),
          (g = a[7]),
          (h = a[8]),
          (y = a[9]),
          (C = a[10]),
          (b = a[11]),
          (v = a[12]),
          (S = a[13]),
          (R = a[14]),
          (L = a[15]),
          (E = a[16]));
      var G = r("useBaseTypeaheadLayoutContextualStrategyStateContext")(),
        z = G.dispatchIsOpened,
        j = d(!1),
        K = j[0],
        Q = j[1],
        X = r("useCurrentDisplayMode")() === "light",
        Y;
      a[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = o(
            "FBPayAddressTypeaheadViewListStrategyUtils",
          ).getPlatformType()),
          (a[17] = Y))
        : (Y = a[17]);
      var J = Y === "native";
      if (((n = p) == null ? void 0 : n.length) !== 0 && l == null) {
        var Z,
          ee,
          te,
          ne = (Z = p[0]) == null ? void 0 : Z.rawData.suggestions.address_id,
          re =
            (ee = p[0]) == null || (ee = ee.rawData.attribution) == null
              ? void 0
              : ee.icon_path_light,
          oe =
            (te = p[0]) == null || (te = te.rawData.attribution) == null
              ? void 0
              : te.icon_path_dark;
        (v(ne != null, re, oe),
          S(
            o(
              "FBPayAddressTypeaheadViewListStrategyUtils",
            ).getAutoCompleteStateOffType(),
          ));
      }
      if (
        o(
          "FBPayAddressTypeaheadViewListStrategyUtils",
        ).getShouldDisableTypeaheadCheck(L)
      ) {
        var ae;
        return (
          a[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((ae = c.jsx(o("react-strict-dom").html.div, {})), (a[18] = ae))
            : (ae = a[18]),
          ae
        );
      }
      var ie;
      a[19] !== z || a[20] !== C
        ? ((ie = function () {
            (z(!1), C(!0));
          }),
          (a[19] = z),
          (a[20] = C),
          (a[21] = ie))
        : (ie = a[21]);
      var le = ie,
        se = K ? m.dialogWrapper : m.headline,
        ue,
        ce;
      a[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((ue = function () {
            return Q(!0);
          }),
          (ce = function () {
            return Q(!1);
          }),
          (a[22] = ue),
          (a[23] = ce))
        : ((ue = a[22]), (ce = a[23]));
      var de;
      a[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((de = { color: "blueLink", textStyle: "secondaryLabel" }),
          (a[24] = de))
        : (de = a[24]);
      var me;
      a[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((me = c.jsx(r("FBPayECPText.react"), {
            cdsText: de,
            fbColor: "highlight",
            fbType: "headline4",
            children: s._(/*BTDS*/ "Enter address manually"),
          })),
          (a[25] = me))
        : (me = a[25]);
      var pe;
      a[26] !== le
        ? ((pe = c.jsx(r("CometPressable.react"), {
            expanding: !0,
            onHoverIn: ue,
            onHoverOut: ce,
            onPress: le,
            overlayDisabled: !0,
            xstyle: m.pressable,
            children: me,
          })),
          (a[26] = le),
          (a[27] = pe))
        : (pe = a[27]);
      var _e;
      a[28] !== se || a[29] !== pe
        ? ((_e = c.jsx(o("react-strict-dom").html.div, {
            style: se,
            children: pe,
          })),
          (a[28] = se),
          (a[29] = pe),
          (a[30] = _e))
        : (_e = a[30]);
      var fe;
      a[31] !== l || a[32] !== u || a[33] !== f || a[34] !== h || a[35] !== X
        ? ((fe =
            l === !0 &&
            c.jsx(o("react-strict-dom").html.div, {
              children: c.jsx(r("CometColumn.react"), {
                align: "center",
                children: c.jsx(r("CometColumnItem.react"), {
                  align: "center",
                  paddingTop: 16,
                  testid: void 0,
                  children: c.jsx(r("CometImage.react"), {
                    alt: s._(/*BTDS*/ "Google"),
                    height: 16,
                    src: X ? (h != null ? h : "") : u != null ? u : "",
                    width: 125,
                    xstyle: f ? m.desktopLogo : m.mSiteLogo,
                  }),
                }),
              }),
            })),
          (a[31] = l),
          (a[32] = u),
          (a[33] = f),
          (a[34] = h),
          (a[35] = X),
          (a[36] = fe))
        : (fe = a[36]);
      var ge;
      a[37] !== fe || a[38] !== _e
        ? ((ge = c.jsxs(o("react-strict-dom").html.div, {
            children: [_e, fe],
          })),
          (a[37] = fe),
          (a[38] = _e),
          (a[39] = ge))
        : (ge = a[39]);
      var he = ge;
      p != null &&
        p.length !== 0 &&
        p !== g &&
        (R(p), y.logClientLoadEcpAddresstypeaheadSuccess());
      var ye;
      a[40] !== i ||
      a[41] !== he ||
      a[42] !== _ ||
      a[43] !== g ||
      a[44] !== y ||
      a[45] !== b ||
      a[46] !== E
        ? ((ye =
            b.length > 0 &&
            g.length > 0 &&
            g[0].key !==
              o("FBPayECPAddressTypeaheadConstantsUtils")
                .NO_TYPEAHEAD_SUGGESTION_AVAILABLE &&
            c.jsxs(o("react-strict-dom").html.div, {
              children: [
                c.jsx(o("react-strict-dom").html.div, {
                  children: c.jsx(r("CometTypeaheadViewList.react"), {
                    ariaProps: i,
                    entries: g,
                    highlightedEntry: _,
                    children: function (t) {
                      var e = t.entry,
                        n = t.isActive,
                        o = t.itemRole;
                      return c.createElement(
                        r("FBPayAddressTypeaheadViewItem"),
                        babelHelpers.extends({}, E, {
                          entry: e,
                          isActive: n,
                          key: e.key,
                          logger: y,
                          queryString: b,
                          role: o,
                        }),
                      );
                    },
                  }),
                }),
                !J && he,
              ],
            })),
          (a[40] = i),
          (a[41] = he),
          (a[42] = _),
          (a[43] = g),
          (a[44] = y),
          (a[45] = b),
          (a[46] = E),
          (a[47] = ye))
        : (ye = a[47]);
      var Ce = J && he,
        be;
      return (
        a[48] !== ye || a[49] !== Ce
          ? ((be = c.jsxs(o("react-strict-dom").html.div, {
              children: [ye, Ce],
            })),
            (a[48] = ye),
            (a[49] = Ce),
            (a[50] = be))
          : (be = a[50]),
        be
      );
    }
    l.default = p;
  },
  226,
);
