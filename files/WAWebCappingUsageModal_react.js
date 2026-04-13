__d(
  "WAWebCappingUsageModal.react",
  [
    "fbt",
    "WAWebBusinessIcon.react",
    "WAWebCappingOTERequestModalLoadable.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebIndividualNewChatMessageCappingLogEvents",
    "WAWebMobilePlatforms",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebProgressBar.react",
    "WAWebWamEnumSurfaceType",
    "WDSIconIcBlock.react",
    "WDSIconIcChat.react",
    "WDSIconIcCheckCircle.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        bulletIcon: { color: "xhslqc4", $$css: !0 },
        bulletIconContainer: { width: "xvy4d1p", $$css: !0 },
      };
    function m() {
      var e,
        t,
        n = o("react-compiler-runtime").c(51),
        a = o(
          "WAWebIndividualNewChatMessageCappingLimitUtils",
        ).getCappingData(),
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = o(
            "WAWebIndividualNewChatMessageCappingLimitUtils",
          ).getUsagePercentage()),
          (n[0] = i))
        : (i = n[0]);
      var l = i,
        m;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = o(
            "WAWebIndividualNewChatMessageCappingLimitUtils",
          ).isOTEEligible()),
          (n[1] = m))
        : (m = n[1]);
      var h = m,
        y;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = o("WAWebMobilePlatforms").isSMB()), (n[2] = y))
        : (y = n[2]);
      var C = y,
        b;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = o(
            "WAWebIndividualNewChatMessageCappingLimitUtils",
          ).isUserCapped()),
          (n[3] = b))
        : (b = n[3]);
      var v = b,
        S;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = o(
            "WAWebIndividualNewChatMessageCappingLimitUtils",
          ).getCycleEndDateFormatted()),
          (n[4] = S))
        : (S = n[4]);
      var R = S,
        L;
      (n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = []), (n[5] = L))
        : (L = n[5]),
        c(g, L));
      var E = (e = a == null ? void 0 : a.used_quota) != null ? e : 0,
        k = (t = a == null ? void 0 : a.total_quota) != null ? t : 0,
        I = f,
        T =
          (a == null ? void 0 : a.cycle_start_timestamp) != null
            ? I(a.cycle_start_timestamp)
            : "",
        D =
          (a == null ? void 0 : a.cycle_end_timestamp) != null
            ? I(a.cycle_end_timestamp)
            : "",
        x = _,
        $;
      n[6] !== a
        ? (($ = function () {
            (o("WAWebIndividualNewChatMessageCappingLogEvents").logClick(
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .MESSAGE_CAPPING_USAGE_STATS,
              "request_ote",
              JSON.stringify(a || {}),
            ),
              o("WAWebModalManager").closeModalManager(),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(
                  o("WAWebCappingOTERequestModalLoadable.react")
                    .CappingOTERequestModalLoadable,
                  {},
                ),
              ));
          }),
          (n[6] = a),
          (n[7] = $))
        : ($ = n[7]);
      var P = $,
        N;
      n[8] !== C
        ? ((N = s._(
            /*BTDS*/ "To help manage how many messages people get, there's a monthly limit on new chats you can start with people who haven't responded to you. {=m2}",
            [
              s._implicitParam(
                "=m2",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: C
                    ? o(
                        "WAWebFaqUrl",
                      ).getSMBIndividualNewChatMessageCappingHCAUrl()
                    : o(
                        "WAWebFaqUrl",
                      ).getConsumerIndividualNewChatMessageCappingHCAUrl(),
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          )),
          (n[8] = C),
          (n[9] = N))
        : (N = n[9]);
      var M = N,
        w;
      if (n[10] !== R || n[11] !== v || n[12] !== C || n[13] !== h) {
        if (((w = []), v)) {
          var A;
          n[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((A = u.jsx(r("WDSIconIcBlock.react"), {
                width: 24,
                height: 24,
                iconXstyle: d.bulletIcon,
              })),
              (n[15] = A))
            : (A = n[15]);
          var F;
          (n[16] !== R
            ? ((F = {
                icon: A,
                text:
                  R !== ""
                    ? s._(
                        /*BTDS*/ "You can't start any more new chats until {date}.",
                        [
                          s._param(
                            "date",
                            u.jsx(r("WDSText.react"), {
                              type: "Body2Emphasized",
                              colorName: "contentDefault",
                              children: R,
                            }),
                          ),
                        ],
                      )
                    : s._(
                        /*BTDS*/ "You can't start any more new chats until your limit resets.",
                      ),
                testid: "capping-usage-modal-bullet-block",
              }),
              (n[16] = R),
              (n[17] = F))
            : (F = n[17]),
            w.push(F));
        }
        var O;
        if (
          (n[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((O = {
                icon: u.jsx(r("WDSIconIcCheckCircle.react"), {
                  width: 24,
                  height: 24,
                  iconXstyle: d.bulletIcon,
                }),
                text: s._(
                  /*BTDS*/ "Continue to answer calls and reply to messages in existing chats.",
                ),
                testid: "capping-usage-modal-bullet-1",
              }),
              (n[18] = O))
            : (O = n[18]),
          w.push(O),
          C && h)
        ) {
          var B;
          (n[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((B = {
                icon: u.jsx(r("WDSIconIcChat.react"), {
                  width: 24,
                  height: 24,
                  iconXstyle: d.bulletIcon,
                }),
                text: s._(
                  /*BTDS*/ "Request a one-time exception to increase the limit.",
                ),
                testid: "capping-usage-modal-bullet-2",
              }),
              (n[19] = B))
            : (B = n[19]),
            w.push(B));
        } else {
          var W;
          (n[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((W = {
                icon: u.jsx(o("WAWebBusinessIcon.react").BusinessIcon, {
                  width: 24,
                  height: 24,
                  iconXstyle: d.bulletIcon,
                }),
                text: s._(
                  /*BTDS*/ "Reach more people with paid tools on WhatsApp Business.",
                ),
                testid: "capping-usage-modal-bullet-3",
              }),
              (n[20] = W))
            : (W = n[20]),
            w.push(W));
        }
        ((n[10] = R), (n[11] = v), (n[12] = C), (n[13] = h), (n[14] = w));
      } else w = n[14];
      var q, U, V, H;
      if (C && h) {
        var G;
        (n[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((G = s._(/*BTDS*/ "Request an exception")), (n[21] = G))
          : (G = n[21]),
          (q = G),
          (V = P));
        var z;
        (n[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = s._(/*BTDS*/ "Explore WhatsApp Business Platform")),
            (n[22] = z))
          : (z = n[22]),
          (U = z),
          (H = x));
      } else if (C) {
        var j;
        (n[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = s._(/*BTDS*/ "Explore WhatsApp Business Platform")),
            (n[23] = j))
          : (j = n[23]),
          (q = j),
          (V = x));
      } else {
        var K;
        (n[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((K = s._(/*BTDS*/ "Get WhatsApp Business")), (n[24] = K))
          : (K = n[24]),
          (q = K),
          (V = x));
        var Q;
        (n[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((Q = s._(/*BTDS*/ "Not now")), (n[25] = Q))
          : (Q = n[25]),
          (U = Q),
          (H = o("WAWebModalManager").closeModalManager));
      }
      var X;
      n[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = s._(/*BTDS*/ "New chats started")), (n[26] = X))
        : (X = n[26]);
      var Y = q,
        J = V,
        Z = U,
        ee = H,
        te;
      n[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((te = { className: "xb0esv5 xyo0t3i x12xbjc7" }), (n[27] = te))
        : (te = n[27]);
      var ne;
      n[28] !== k || n[29] !== E
        ? ((ne = u.jsx(r("WDSText.react"), {
            type: "Headline1",
            colorName: "contentDefault",
            testid: void 0,
            children: s._(/*BTDS*/ "{used} of {total} started", [
              s._param("used", E),
              s._param("total", k),
            ]),
          })),
          (n[28] = k),
          (n[29] = E),
          (n[30] = ne))
        : (ne = n[30]);
      var re;
      n[31] !== D || n[32] !== T
        ? ((re =
            T !== "" &&
            D !== "" &&
            u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              testid: void 0,
              children: s._(/*BTDS*/ "{startDate} - {endDate}", [
                s._param("startDate", T),
                s._param("endDate", D),
              ]),
            })),
          (n[31] = D),
          (n[32] = T),
          (n[33] = re))
        : (re = n[33]);
      var oe;
      n[34] !== ne || n[35] !== re
        ? ((oe = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "end",
            justify: "all",
            paddingBottom: 8,
            children: [ne, re],
          })),
          (n[34] = ne),
          (n[35] = re),
          (n[36] = oe))
        : (oe = n[36]);
      var ae;
      n[37] !== l
        ? ((ae = u.jsx(r("WAWebProgressBar.react"), { value: l, max: 100 })),
          (n[37] = l),
          (n[38] = ae))
        : (ae = n[38]);
      var ie;
      n[39] !== oe || n[40] !== ae
        ? ((ie = u.jsxs(
            "div",
            babelHelpers.extends({}, te, { children: [oe, ae] }),
          )),
          (n[39] = oe),
          (n[40] = ae),
          (n[41] = ie))
        : (ie = n[41]);
      var le;
      n[42] === Symbol.for("react.memo_cache_sentinel")
        ? ((le = { className: "xb0esv5 xyo0t3i x12xbjc7" }), (n[42] = le))
        : (le = n[42]);
      var se;
      n[43] !== M
        ? ((se = u.jsx(
            "div",
            babelHelpers.extends({}, le, {
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                testid: void 0,
                children: M,
              }),
            }),
          )),
          (n[43] = M),
          (n[44] = se))
        : (se = n[44]);
      var ue;
      n[45] !== w
        ? ((ue = u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "start",
            justify: "start",
            children: w.map(p),
          })),
          (n[45] = w),
          (n[46] = ue))
        : (ue = n[46]);
      var ce;
      return (
        n[47] !== ie || n[48] !== se || n[49] !== ue
          ? ((ce = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              type: o("WAWebModal.react").ModalTheme
                .IndividualNewChatMessageCapped,
              title: X,
              okText: Y,
              onOK: J,
              cancelText: Z,
              onCancel: ee,
              children: [ie, se, ue],
            })),
            (n[47] = ie),
            (n[48] = se),
            (n[49] = ue),
            (n[50] = ce))
          : (ce = n[50]),
        ce
      );
    }
    function p(e) {
      var t = e.icon,
        n = e.testid,
        a = e.text;
      return u.jsxs(
        o("WAWebFlex.react").FlexRow,
        {
          testid: void 0,
          paddingStart: 8,
          paddingTop: 4,
          paddingBottom: 4,
          marginBottom: 8,
          columnGap: 24,
          align: "center",
          children: [
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              justify: "center",
              align: "center",
              shrink: 0,
              xstyle: d.bulletIconContainer,
              children: t,
            }),
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              alignSelf: "center",
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDefault",
                children: a,
              }),
            }),
          ],
        },
        n,
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      (o("WAWebModalManager").closeModalManager(),
        o("WAWebExternalLink.react").openExternalLink(
          o("WAWebFaqUrl").getWhatsAppBusinessHomeUrl(),
        ));
    }
    function f(e) {
      var t = new Date(e * 1e3);
      return t.toLocaleDateString(void 0, { day: "numeric", month: "short" });
    }
    function g() {
      o("WAWebIndividualNewChatMessageCappingLogEvents").logView(
        o("WAWebWamEnumSurfaceType").SURFACE_TYPE.MESSAGE_CAPPING_USAGE_STATS,
        JSON.stringify(
          o(
            "WAWebIndividualNewChatMessageCappingLimitUtils",
          ).getCappingData() || {},
        ),
      );
    }
    l.CappingUsageModal = m;
  },
  226,
);
