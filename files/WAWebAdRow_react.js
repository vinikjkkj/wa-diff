__d(
  "WAWebAdRow.react",
  [
    "fbt",
    "WAWebAdBoostingStatus.react",
    "WAWebBizGatingUtils",
    "WAWebBusinessAdCreationUtils",
    "WAWebButton.react",
    "WAWebChatCell.react",
    "WAWebCommonAdsTypes",
    "WAWebDropdownItem.react",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebImg.react",
    "WAWebText.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUserPrefsCTWA",
    "WAWebWarningIcon.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        thumbnail: {
          height: "xnnlda6",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          alignSelf: "xamitd3",
          $$css: !0,
        },
        adRowWithNavBarRedesign: {
          borderBottomStyle: "x1q0q8m5",
          borderBottomWidth: "xso031l",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
        marginVert24: {
          marginTop: "x9u28bd",
          marginBottom: "x14mdic9",
          $$css: !0,
        },
        marginEnd24: { marginInlineEnd: "x7vsco6", $$css: !0 },
        marginHoriz24: {
          marginInlineStart: "xyxtwap",
          marginInlineEnd: "x7vsco6",
          $$css: !0,
        },
        paddingHoriz12: {
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(63),
        a = t.ad,
        i = t.isLast,
        l = a.ad,
        u = l.adId,
        p = l.boostingStatus,
        _ = l.budget,
        f = l.conversations,
        g = l.creativeText,
        h = l.reach,
        y = l.thumbnailUrl,
        C = d(null),
        b = C[0],
        v = C[1],
        S;
      n[0] !== g
        ? ((S =
            g != null
              ? c.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: g,
                  ellipsify: !0,
                  titlify: !0,
                })
              : s._(/*BTDS*/ "Your ad")),
          (n[0] = g),
          (n[1] = S))
        : (S = n[1]);
      var R = S,
        L;
      n[2] !== p
        ? ((L = c.jsx(r("WAWebAdBoostingStatus.react"), { boostingStatus: p })),
          (n[2] = p),
          (n[3] = L))
        : (L = n[3]);
      var E = L,
        k;
      n[4] !== u
        ? ((k = function () {
            o("WAWebExternalLink.react").openExternalLink(
              o("WAWebBusinessAdCreationUtils").getWhatsappViewAdDetailsUrl(u),
            );
          }),
          (n[4] = u),
          (n[5] = k))
        : (k = n[5]);
      var I = k,
        T,
        D;
      e: switch (p) {
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.ACTIVE:
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.NOT_DELIVERING:
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.PAUSED: {
          if (o("WAWebBizGatingUtils").adManagementMetricsDisplayingEnabled()) {
            var x;
            if (f > 0) {
              var $;
              (n[6] !== f
                ? (($ = s._(
                    /*BTDS*/ '_j{"*":"{messages} messages","_1":"1 message"}',
                    [s._plural(f, "messages")],
                  )),
                  (n[6] = f),
                  (n[7] = $))
                : ($ = n[7]),
                (x = $));
            } else {
              var P;
              (n[8] !== h
                ? ((P = s._(/*BTDS*/ "Seen by {reach}", [
                    s._param("reach", h),
                  ])),
                  (n[8] = h),
                  (n[9] = P))
                : (P = n[9]),
                (x = P));
            }
            var N;
            (n[10] !== x || n[11] !== E
              ? ((N = c.jsxs("span", { children: [E, " \xB7 ", x] })),
                (n[10] = x),
                (n[11] = E),
                (n[12] = N))
              : (N = n[12]),
              (T = N));
          } else {
            var M;
            (n[13] !== E
              ? ((M = c.jsx("span", { children: E })), (n[13] = E), (n[14] = M))
              : (M = n[14]),
              (T = M));
          }
          break e;
        }
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.EXTENDABLE:
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.FINISHED: {
          if (o("WAWebBizGatingUtils").adManagementMetricsDisplayingEnabled()) {
            var w;
            n[15] !== _
              ? ((w = s._(/*BTDS*/ "{budget} spent", [s._param("budget", _)])),
                (n[15] = _),
                (n[16] = w))
              : (w = n[16]);
            var A = w,
              F;
            (n[17] !== A || n[18] !== E
              ? ((F = c.jsxs("span", { children: [E, " \xB7 ", A] })),
                (n[17] = A),
                (n[18] = E),
                (n[19] = F))
              : (F = n[19]),
              (T = F));
          } else {
            var O;
            (n[20] !== E
              ? ((O = c.jsx("span", { children: E })), (n[20] = E), (n[21] = O))
              : (O = n[21]),
              (T = O));
          }
          break e;
        }
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.PENDING: {
          T = E;
          var B;
          (n[22] === Symbol.for("react.memo_cache_sentinel")
            ? ((B = c.jsx(o("WAWebText.react").WAWebTextSmall, {
                xstyle: m.paddingHoriz12,
                children: c.jsx("div", {
                  children: s._(
                    /*BTDS*/ "Ad reviews typically take 24 hours. You'll be notified when the review is completed.",
                  ),
                }),
              })),
              (n[22] = B))
            : (B = n[22]),
            (D = B));
          break e;
        }
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.LIMITED_DELIVERY: {
          var W, q;
          n[23] === Symbol.for("react.memo_cache_sentinel")
            ? ((W = { className: "x78zum5 x6s0dn4 x1trrmfo x129bwdz" }),
              (q = c.jsx(o("WAWebWarningIcon.react").WarningIcon, {
                height: 12,
              })),
              (n[23] = W),
              (n[24] = q))
            : ((W = n[23]), (q = n[24]));
          var U;
          (n[25] !== E
            ? ((U = c.jsxs(
                "span",
                babelHelpers.extends({}, W, { children: [q, " ", E] }),
              )),
              (n[25] = E),
              (n[26] = U))
            : (U = n[26]),
            (T = U));
          var V;
          n[27] === Symbol.for("react.memo_cache_sentinel")
            ? ((V = { className: "x1iw51ew xde1mab x12xbjc7" }), (n[27] = V))
            : (V = n[27]);
          var H;
          n[28] === Symbol.for("react.memo_cache_sentinel")
            ? ((H = s._(/*BTDS*/ "Review ad details")), (n[28] = H))
            : (H = n[28]);
          var G;
          n[29] !== I
            ? ((G = c.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
                stretch: !0,
                onClick: I,
                children: H,
              })),
              (n[29] = I),
              (n[30] = G))
            : (G = n[30]);
          var z;
          (n[31] !== V || n[32] !== G
            ? ((z = c.jsx("div", babelHelpers.extends({}, V, { children: G }))),
              (n[31] = V),
              (n[32] = G),
              (n[33] = z))
            : (z = n[33]),
            (D = z));
          break e;
        }
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.CREATING:
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.ERROR:
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.REJECTED:
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.SCHEDULED:
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.UNKNOWN:
          T = E;
      }
      var j = g != null ? g : "",
        K;
      n[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = (e || (e = r("stylex")))([
            m.thumbnail,
            m.marginVert24,
            m.marginEnd24,
          ])),
          (n[34] = K))
        : (K = n[34]);
      var Q;
      n[35] !== j || n[36] !== y
        ? ((Q = c.jsx(r("WAWebImg.react"), { alt: j, className: K, src: y })),
          (n[35] = j),
          (n[36] = y),
          (n[37] = Q))
        : (Q = n[37]);
      var X = Q,
        Y;
      n[38] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = o(
            "WAWebBizGatingUtils",
          ).adManagementActionsDisplayingEnabled()),
          (n[38] = Y))
        : (Y = n[38]);
      var J = Y,
        Z;
      n[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = function () {
            return J;
          }),
          (n[39] = Z))
        : (Z = n[39]);
      var ee = Z,
        te;
      n[40] !== a.ad || n[41] !== u || n[42] !== p || n[43] !== b || n[44] !== I
        ? ((te = J
            ? function (e) {
                if (b != null) {
                  v(null);
                  return;
                }
                var t = function () {
                    var e = o("WAWebUserPrefsCTWA").generateAdCreationFlowId();
                    o("WAWebExternalLink.react").openExternalLink(
                      o("WAWebBusinessAdCreationUtils").getWhatsappEditAdUrl(
                        u,
                        e,
                      ),
                    );
                  },
                  n = [];
                if (
                  (n.push(
                    c.jsx(
                      o("WAWebDropdownItem.react").DropdownItem,
                      { action: I, children: s._(/*BTDS*/ "View details") },
                      "mi-view-ad-details",
                    ),
                  ),
                  n.push(
                    c.jsx(
                      o("WAWebDropdownItem.react").DropdownItem,
                      { action: t, children: s._(/*BTDS*/ "Edit") },
                      "mi-edit-ad",
                    ),
                  ),
                  p === o("WAWebCommonAdsTypes").BoostingStatusEnum.FINISHED ||
                    p ===
                      o("WAWebCommonAdsTypes").BoostingStatusEnum.EXTENDABLE)
                ) {
                  var r = a.ad.campaignGroupId,
                    i = function () {
                      o("WAWebExternalLink.react").openExternalLink(
                        o(
                          "WAWebBusinessAdCreationUtils",
                        ).getWhatsappRecreateAdUrl(r),
                      );
                    };
                  n.push(
                    c.jsx(
                      o("WAWebDropdownItem.react").DropdownItem,
                      { action: i, children: s._(/*BTDS*/ "Promote again") },
                      "mi-recreate-ad",
                    ),
                  );
                }
                v({ menu: n, event: e.event, anchor: e.anchor });
              }
            : void 0),
          (n[40] = a.ad),
          (n[41] = u),
          (n[42] = p),
          (n[43] = b),
          (n[44] = I),
          (n[45] = te))
        : (te = n[45]);
      var ne = te,
        re;
      n[46] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = function () {
            v(null);
          }),
          (n[46] = re))
        : (re = n[46]);
      var oe = re,
        ae;
      n[47] !== b
        ? ((ae =
            b != null
              ? c.jsx(o("WAWebUimUie.react").UIE, {
                  displayName: "AdRowContextMenu",
                  escapable: !0,
                  popable: !0,
                  dismissOnWindowResize: !0,
                  requestDismiss: oe,
                  children: c.jsx(r("WAWebUimUieMenu.react"), {
                    contextMenu: b,
                  }),
                })
              : null),
          (n[47] = b),
          (n[48] = ae))
        : (ae = n[48]);
      var ie = ae,
        le;
      n[49] === Symbol.for("react.memo_cache_sentinel")
        ? ((le = { className: "x17gydlx x1277o0a" }), (n[49] = le))
        : (le = n[49]);
      var se;
      n[50] !== i
        ? ((se = (e || (e = r("stylex")))([
            m.marginHoriz24,
            !i && m.adRowWithNavBarRedesign,
          ])),
          (n[50] = i),
          (n[51] = se))
        : (se = n[51]);
      var ue = J ? void 0 : I,
        ce;
      n[52] !== ne ||
      n[53] !== X ||
      n[54] !== R ||
      n[55] !== T ||
      n[56] !== se ||
      n[57] !== ue
        ? ((ce = c.jsx(r("WAWebChatCell.react"), {
            className: se,
            primary: R,
            secondary: T,
            image: X,
            contextEnabled: ee,
            onContext: ne,
            onClick: ue,
            theme: "ads-list",
            customImage: !0,
          })),
          (n[52] = ne),
          (n[53] = X),
          (n[54] = R),
          (n[55] = T),
          (n[56] = se),
          (n[57] = ue),
          (n[58] = ce))
        : (ce = n[58]);
      var de;
      return (
        n[59] !== ce || n[60] !== ie || n[61] !== D
          ? ((de = c.jsxs(
              "div",
              babelHelpers.extends({}, le, { children: [ce, ie, D] }),
            )),
            (n[59] = ce),
            (n[60] = ie),
            (n[61] = D),
            (n[62] = de))
          : (de = n[62]),
        de
      );
    }
    l.default = p;
  },
  226,
);
