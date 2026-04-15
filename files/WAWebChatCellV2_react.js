__d(
  "WAWebChatCellV2.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebCellV2.react",
    "WAWebChatGetters",
    "WAWebChatIcons.react",
    "WAWebChatTimestamp.react",
    "WAWebChatstateInfo.react",
    "WAWebChevronCustomIcons",
    "WAWebCommunityGatingUtils",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebErrorBoundary.react",
    "WAWebFlexBox.react",
    "WAWebFocusTracer",
    "WAWebGroupChatImage.react",
    "WAWebName.react",
    "WAWebPopoverContext.react",
    "WAWebSettingsModel",
    "WAWebStackedCirclesImage.react",
    "WAWebText.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebVelocityTransition",
    "WDSFocusStateStyles",
    "WDSFontTokenStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
    "useWAWebHover",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["chat", "ref"],
      u = [
        "contextMenuItems",
        "forceActive",
        "hideArchivedIcon",
        "hideMuteIcon",
        "onContextMenuToggle",
        "showCommunityInfo",
        "showMessageYourselfName",
        "showSpeakerForCag",
        "useShortName",
      ],
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useRef,
      g = p.useState,
      h = {
        mutedTextColor: { color: "xhslqc4", $$css: !0 },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
      };
    function y(t) {
      var n = o("react-compiler-runtime").c(90),
        a,
        i,
        l;
      n[0] !== t
        ? ((a = t.chat),
          (l = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l))
        : ((a = n[1]), (i = n[2]), (l = n[3]));
      var d, p, y, C, b, v, S, R, L, E;
      if (n[4] !== i) {
        var k = i;
        ((p = k.contextMenuItems),
          (y = k.forceActive),
          (b = k.hideArchivedIcon),
          (v = k.hideMuteIcon),
          (C = k.onContextMenuToggle),
          (S = k.showCommunityInfo),
          (R = k.showMessageYourselfName),
          (L = k.showSpeakerForCag),
          (E = k.useShortName),
          (d = babelHelpers.objectWithoutPropertiesLoose(k, u)),
          (n[4] = i),
          (n[5] = d),
          (n[6] = p),
          (n[7] = y),
          (n[8] = C),
          (n[9] = b),
          (n[10] = v),
          (n[11] = S),
          (n[12] = R),
          (n[13] = L),
          (n[14] = E));
      } else
        ((d = n[5]),
          (p = n[6]),
          (y = n[7]),
          (C = n[8]),
          (b = n[9]),
          (v = n[10]),
          (S = n[11]),
          (R = n[12]),
          (L = n[13]),
          (E = n[14]));
      var I = b === void 0 ? !1 : b,
        T = v === void 0 ? !1 : v,
        D = S === void 0 ? !1 : S,
        x = R === void 0 ? !1 : R,
        $ = L === void 0 ? !1 : L,
        P;
      (n[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = ["unreadCount"]), (n[15] = P))
        : (P = n[15]),
        o("useWAWebModelValues").useModelValues(a, P));
      var N = f(null),
        M = r("useMergeRefs")(l, N),
        w = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(),
        A = o("useWAWebHover").useWAWebHover(N),
        F = g(null),
        O = F[0],
        B = F[1],
        W = y === !0 || d.active,
        q = f(!1),
        U,
        V;
      (n[16] !== O || n[17] !== C
        ? ((U = function () {
            C == null || C(O != null);
          }),
          (V = [O, C]),
          (n[16] = O),
          (n[17] = C),
          (n[18] = U),
          (n[19] = V))
        : ((U = n[18]), (V = n[19])),
        _(U, V));
      var H;
      n[20] !== p
        ? ((H = function (t) {
            B({ anchor: t.anchor, event: t.event, menu: p != null ? p : [] });
          }),
          (n[20] = p),
          (n[21] = H))
        : (H = n[21]);
      var G = H,
        z;
      if (n[22] === Symbol.for("react.memo_cache_sentinel")) {
        z = function () {
          (B(null), j());
        };
        var j = function () {
          q.current &&
            ((q.current = !1), r("WAWebFocusTracer").focus(ke.current));
        };
        n[22] = z;
      } else z = n[22];
      var K;
      n[23] !== w || n[24] !== G
        ? ((K = function (t) {
            if (t.key === "Enter") {
              var e;
              (t.preventDefault(),
                t.stopPropagation(),
                G({ anchor: ke.current }),
                (q.current = !0),
                (e = w.current) == null || e.showPopover());
            }
          }),
          (n[23] = w),
          (n[24] = G),
          (n[25] = K))
        : (K = n[25]);
      var Q = K,
        X;
      n[26] !== G
        ? ((X = function (t) {
            (t.preventDefault(),
              t.stopPropagation(),
              G({ event: t, anchor: ke.current }));
          }),
          (n[26] = G),
          (n[27] = X))
        : (X = n[27]);
      var Y = X,
        J;
      n[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = o("WAWebBizGatingUtils").canDisplayLabel()), (n[28] = J))
        : (J = n[28]);
      var Z = J,
        ee;
      if (o("WAWebChatGetters").getIsGroup(a)) {
        var te;
        (n[29] !== a || n[30] !== x || n[31] !== E
          ? ((te = m.jsx(o("WAWebName.react").Name, {
              chat: a,
              ellipsify: !0,
              showLabelIcon: Z,
              showMessageYourselfName: x,
              titlify: !0,
              useShortName: E,
            })),
            (n[29] = a),
            (n[30] = x),
            (n[31] = E),
            (n[32] = te))
          : (te = n[32]),
          (ee = te));
      } else {
        var ne = a.contact,
          re;
        n[33] !== a.contact
          ? ((re = o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary(
              a.contact,
            )),
            (n[33] = a.contact),
            (n[34] = re))
          : (re = n[34]);
        var oe;
        (n[35] !== a.contact || n[36] !== x || n[37] !== re || n[38] !== E
          ? ((oe = m.jsx(o("WAWebName.react").Name, {
              contact: ne,
              ellipsify: !0,
              showBusinessCheckmark: re,
              showLabelIcon: Z,
              showMessageYourselfName: x,
              titlify: !0,
              useShortName: E,
              you: !0,
            })),
            (n[35] = a.contact),
            (n[36] = x),
            (n[37] = re),
            (n[38] = E),
            (n[39] = oe))
          : (oe = n[39]),
          (ee = oe));
      }
      var ae,
        ie =
          D === !0 &&
          o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(
            a.groupMetadata,
          );
      if (ie) {
        var le;
        if (n[40] !== a.groupMetadata) {
          var se;
          ((le =
            (se = a.groupMetadata) == null ? void 0 : se.getParentGroupChat()),
            (n[40] = a.groupMetadata),
            (n[41] = le));
        } else le = n[41];
        var ue = le;
        if (ue != null) {
          var ce;
          n[42] === Symbol.for("react.memo_cache_sentinel")
            ? ((ce = (c || (c = r("stylex"))).props(
                h.mutedTextColor,
                o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
              )),
              (n[42] = ce))
            : (ce = n[42]);
          var de;
          (n[43] !== ue
            ? ((de = m.jsx(
                "span",
                babelHelpers.extends({}, ce, {
                  children: m.jsx(o("WAWebName.react").Name, {
                    chat: ue,
                    ellipsify: !0,
                    titlify: !0,
                  }),
                }),
              )),
              (n[43] = ue),
              (n[44] = de))
            : (de = n[44]),
            (ae = de));
        }
      }
      var me;
      n[45] !== ee
        ? ((me = m.jsx(o("WAWebText.react").WAWebTextTitle, { children: ee })),
          (n[45] = ee),
          (n[46] = me))
        : (me = n[46]);
      var pe = me,
        _e;
      n[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((_e = (c || (c = r("stylex"))).props(
            h.mutedTextColor,
            o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
          )),
          (n[47] = _e))
        : (_e = n[47]);
      var fe;
      n[48] !== a
        ? ((fe = m.jsx(
            "span",
            babelHelpers.extends({}, _e, {
              children: m.jsx(r("WAWebChatstateInfo.react"), { chat: a }),
            }),
          )),
          (n[48] = a),
          (n[49] = fe))
        : (fe = n[49]);
      var ge = fe,
        he;
      n[50] !== a.id
        ? ((he = m.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: a.id,
            size: 40,
            waitIdle: !0,
          })),
          (n[50] = a.id),
          (n[51] = he))
        : (he = n[51]);
      var ye = he,
        Ce;
      if (
        n[52] !== a ||
        n[53] !== ye ||
        n[54] !== A ||
        n[55] !== D ||
        n[56] !== $
      ) {
        var be = o("WAWebChatGetters").getIsGroup(a)
          ? m.jsx(r("WAWebGroupChatImage.react"), {
              chat: a,
              isHovered: A,
              regularChatImage: ye,
              showCommunityInfo: D,
              showSpeakerForCag: $,
              size: 40,
              theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme
                .CHAT_LIST,
            })
          : ye;
        ((Ce = m.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
          name: "chat-cell-image",
          children: be,
        })),
          (n[52] = a),
          (n[53] = ye),
          (n[54] = A),
          (n[55] = D),
          (n[56] = $),
          (n[57] = Ce));
      } else Ce = n[57];
      var ve = Ce,
        Se = a.unreadCount ? "teal" : null,
        Re;
      n[58] !== a
        ? ((Re = m.jsx(r("WAWebChatTimestamp.react"), { chat: a })),
          (n[58] = a),
          (n[59] = Re))
        : (Re = n[59]);
      var Le;
      n[60] !== Se || n[61] !== Re
        ? ((Le = m.jsx(o("WAWebText.react").WAWebTextSmall, {
            color: Se,
            children: Re,
          })),
          (n[60] = Se),
          (n[61] = Re),
          (n[62] = Le))
        : (Le = n[62]);
      var Ee = Le,
        ke = f(null),
        Ie;
      if (O) {
        var Te;
        (n[63] !== O
          ? ((Te = m.jsx(o("WAWebUimUie.react").UIE, {
              dismissOnWindowResize: !0,
              displayName: "ChatContextMenu",
              escapable: !0,
              popable: !0,
              requestDismiss: z,
              children: m.jsx(r("WAWebUimUieMenu.react"), { contextMenu: O }),
            })),
            (n[63] = O),
            (n[64] = Te))
          : (Te = n[64]),
          (Ie = Te));
      }
      var De = O != null || A || d.active === !0,
        xe;
      n[65] !== a || n[66] !== I || n[67] !== T
        ? ((xe = m.jsx(o("WAWebChatIcons.react").Icons, {
            chat: a,
            hideArchivedIcon: I,
            hideMuteIcon: T,
            mute: a.mute,
            settings: r("WAWebSettingsModel"),
            unreadCount: a.unreadCount,
            unreadMentionIcon: a.hasUnreadMention,
          })),
          (n[65] = a),
          (n[66] = I),
          (n[67] = T),
          (n[68] = xe))
        : (xe = n[68]);
      var $e;
      n[69] !== p || n[70] !== Y || n[71] !== Q || n[72] !== De || n[73] !== Ie
        ? (($e =
            p != null &&
            m.jsx(r("WAWebVelocityTransition"), {
              appear: !0,
              in: De,
              mountOnEnter: !0,
              nodeRef: ke,
              transitionName: "pop-fast-chat",
              unmountOnExit: !0,
              children: m.jsxs(
                "button",
                babelHelpers.extends(
                  { "data-testid": void 0, onClick: Y, onKeyDown: Q, ref: ke },
                  (c || (c = r("stylex"))).props(
                    o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
                  ),
                  {
                    "aria-label": s._(/*BTDS*/ "Open chat context menu"),
                    children: [
                      m.jsx(
                        o("WAWebChevronCustomIcons").ChevronDownCustomIcon,
                        { iconXstyle: h.secondaryColor, height: 24 },
                      ),
                      Ie,
                    ],
                  },
                ),
              ),
            })),
          (n[69] = p),
          (n[70] = Y),
          (n[71] = Q),
          (n[72] = De),
          (n[73] = Ie),
          (n[74] = $e))
        : ($e = n[74]);
      var Pe;
      n[75] !== xe || n[76] !== $e
        ? ((Pe = m.jsxs(o("WAWebFlexBox.react").FlexRow, {
            align: "center",
            gap: 8,
            children: [xe, $e],
          })),
          (n[75] = xe),
          (n[76] = $e),
          (n[77] = Pe))
        : (Pe = n[77]);
      var Ne = Pe,
        Me,
        we,
        Ae;
      ae != null
        ? ((Me = Ee), (we = Ne), (Ae = null))
        : ((Me = null), (we = Ee), (Ae = Ne));
      var Fe;
      return (
        n[78] !== W ||
        n[79] !== d ||
        n[80] !== ve ||
        n[81] !== ae ||
        n[82] !== Me ||
        n[83] !== M ||
        n[84] !== G ||
        n[85] !== pe ||
        n[86] !== we ||
        n[87] !== ge ||
        n[88] !== Ae
          ? ((Fe = m.jsx(
              r("WAWebCellV2.react"),
              babelHelpers.extends({ ref: M }, d, {
                active: W,
                alignPrimary: "start",
                detailLeft: ve,
                detailTop: ae,
                detailTopRight: Me,
                onContextMenu: G,
                primary: pe,
                primaryRight: we,
                secondary: ge,
                secondaryRight: Ae,
              }),
            )),
            (n[78] = W),
            (n[79] = d),
            (n[80] = ve),
            (n[81] = ae),
            (n[82] = Me),
            (n[83] = M),
            (n[84] = G),
            (n[85] = pe),
            (n[86] = we),
            (n[87] = ge),
            (n[88] = Ae),
            (n[89] = Fe))
          : (Fe = n[89]),
        Fe
      );
    }
    l.default = y;
  },
  226,
);
