__d(
  "WAWebCustomerManagerDrawer.react",
  [
    "fbt",
    "WAWebAddCustomerDialog.react",
    "WAWebContactCollection",
    "WAWebCustomerDataCollection",
    "WAWebCustomerManagerFilterBar.react",
    "WAWebCustomerManagerFindOrCreateChat",
    "WAWebCustomerManagerLastMessageFilter.react",
    "WAWebCustomerManagerListView.react",
    "WAWebCustomerManagerPipelineView.react",
    "WAWebCustomerManagerSearchInput.react",
    "WAWebCustomerManagerSearchUtils",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebExternalLink.react",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebLabelFlowLoadable",
    "WAWebModalManager",
    "WAWebViewSwitcher.react",
    "WDSButton.react",
    "WDSIconIcAdd.react",
    "WDSIconIcFormatListBulleted.react",
    "WDSIconIcSpaceDashboard.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebCustomerData",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useMemo,
      p = c.useRef,
      _ = c.useState,
      f = "list",
      g = "pipeline",
      h = [
        {
          value: f,
          label: function () {
            return s._(/*BTDS*/ "List view");
          },
          Icon: r("WDSIconIcFormatListBulleted.react"),
          testid: "customer-manager-view-list",
        },
        {
          value: g,
          label: function () {
            return s._(/*BTDS*/ "Pipeline view");
          },
          Icon: r("WDSIconIcSpaceDashboard.react"),
          testid: "customer-manager-view-pipeline",
        },
      ];
    function y() {
      var e = o("react-compiler-runtime").c(73),
        t = _(f),
        n = t[0],
        a = t[1],
        i = _(""),
        l = i[0],
        c = i[1],
        d;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = []), (e[0] = d))
        : (d = e[0]);
      var m = _(d),
        y = m[0],
        v = m[1],
        S = _(null),
        R = S[0],
        L = S[1],
        E = _(null),
        k = E[0],
        I = E[1],
        T = _(null),
        D = T[0],
        x = T[1],
        $;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = function (t) {
            (a(t), t === g && v([]));
          }),
          (e[1] = $))
        : ($ = e[1]);
      var P = $,
        N;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = function (t) {
            v(function (e) {
              return e.includes(t)
                ? e.filter(function (e) {
                    return e !== t;
                  })
                : [].concat(e, [t]);
            });
          }),
          (e[2] = N))
        : (N = e[2]);
      var M = N,
        w;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = function () {
            v([]);
          }),
          (e[3] = w))
        : (w = e[3]);
      var A = w,
        F;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = function (t) {
            L(t);
          }),
          (e[4] = F))
        : (F = e[4]);
      var O = F,
        B;
      e[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = function () {
            L(null);
          }),
          (e[5] = B))
        : (B = e[5]);
      var W = B,
        q;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = function (t) {
            I(t);
          }),
          (e[6] = q))
        : (q = e[6]);
      var U = q,
        V;
      e[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = function () {
            I(null);
          }),
          (e[7] = V))
        : (V = e[7]);
      var H = V,
        G;
      e[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = function (t) {
            x(t);
          }),
          (e[8] = G))
        : (G = e[8]);
      var z = G,
        j;
      e[9] !== l || e[10] !== k || e[11] !== R || e[12] !== D || e[13] !== y
        ? ((j = {
            acquisitionSource: k,
            labelId: R,
            lastMessageRange: D,
            leadStages: y,
            query: l,
          }),
          (e[9] = l),
          (e[10] = k),
          (e[11] = R),
          (e[12] = D),
          (e[13] = y),
          (e[14] = j))
        : (j = e[14]);
      var K = j,
        Q = r("useWAWebCustomerData")(),
        X;
      e[15] !== Q || e[16] !== K
        ? ((X = o(
            "WAWebCustomerDataCollection",
          ).CustomerDataCollection.filterCustomers(Q, K)),
          (e[15] = Q),
          (e[16] = K),
          (e[17] = X))
        : (X = e[17]);
      var Y = X,
        J = _(null),
        Z = J[0],
        ee = J[1],
        te = _(!1),
        ne = te[0],
        re = te[1],
        oe;
      if (e[18] !== Z) {
        var ae;
        ((oe =
          Z != null &&
          (ae = o("WAWebContactCollection").ContactCollection.get(Z.chatJid)) !=
            null
            ? ae
            : null),
          (e[18] = Z),
          (e[19] = oe));
      } else oe = e[19];
      var ie = oe,
        le = _(null),
        se = le[0],
        ue = le[1],
        ce = _("profile"),
        de = ce[0],
        me = ce[1],
        pe = p(null),
        _e;
      e[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((_e = function (t, n) {
            var e = o("WAWebContactCollection").ContactCollection.get(
              t.chatJid,
            );
            e != null &&
              (re(!1),
              ee(t),
              ue(null),
              me(n),
              (pe.current = t),
              o("WAWebCustomerManagerFindOrCreateChat")
                .customerManagerFindOrCreateChat(e.id)
                .then(function (e) {
                  pe.current === t && ue(e);
                })
                .catch(function () {
                  pe.current === t && (ee(null), ue(null), (pe.current = null));
                }));
          }),
          (e[20] = _e))
        : (_e = e[20]);
      var fe = _e,
        ge;
      e[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((ge = function (t) {
            fe(t, "profile");
          }),
          (e[21] = ge))
        : (ge = e[21]);
      var he = ge,
        ye;
      e[22] !== Q
        ? ((ye = function (t) {
            var e = Q.find(function (e) {
              return e.chatJid === t;
            });
            e != null && fe(e, "chat");
          }),
          (e[22] = Q),
          (e[23] = ye))
        : (ye = e[23]);
      var Ce = ye,
        be;
      e[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((be = function () {
            (ee(null), ue(null), (pe.current = null));
          }),
          (e[24] = be))
        : (be = e[24]);
      var ve = be,
        Se;
      e[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((Se = function (t) {
            pe.current != null && pe.current.chatJid === t && ve();
          }),
          (e[25] = Se))
        : (Se = e[25]);
      var Re = Se,
        Le = b,
        Ee;
      e[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ee = function () {
            (ve(), re(!0));
          }),
          (e[26] = Ee))
        : (Ee = e[26]);
      var ke = Ee,
        Ie;
      e[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ie = function () {
            re(!1);
          }),
          (e[27] = Ie))
        : (Ie = e[27]);
      var Te = Ie,
        De = C,
        xe;
      e[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((xe = {
            className: "x78zum5 x1q0g3np x98rzlu x2lwn1j x6ikm8r x10wlt62",
          }),
          (e[28] = xe))
        : (xe = e[28]);
      var $e;
      e[29] !== ne
        ? (($e =
            ne &&
            u.jsx("div", {
              className:
                "x1n2onr6 x1czfd9k x2lah0s x1lun4ml x18b5jzi xbogo7e x6ikm8r x10wlt62",
              children: u.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
                isInitialStep: !0,
                onEnd: Te,
              }),
            })),
          (e[29] = ne),
          (e[30] = $e))
        : ($e = e[30]);
      var Pe;
      e[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((Pe = {
            className:
              "x1n2onr6 x78zum5 xdt5ytf x98rzlu xeuugli x6ikm8r x10wlt62",
          }),
          (e[31] = Pe))
        : (Pe = e[31]);
      var Ne;
      e[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ne = s._(/*BTDS*/ "Customer Manager")), (e[32] = Ne))
        : (Ne = e[32]);
      var Me, we;
      e[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((Me = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: Ne,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
            rightActionElement: u.jsx(r("WDSButton.react"), {
              variant: "filled",
              type: "default",
              Icon: r("WDSIconIcAdd.react"),
              label: s._(/*BTDS*/ "Add customer"),
              onPress: Le,
              testid: void 0,
            }),
          })),
          (we = {
            className: "x78zum5 x6s0dn4 x1s70e7g xdx6fka x16ovd2e x12xbjc7",
          }),
          (e[33] = Me),
          (e[34] = we))
        : ((Me = e[33]), (we = e[34]));
      var Ae;
      e[35] !== Y.length
        ? ((Ae = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            testid: void 0,
            children: s._(
              /*BTDS*/ '_j{"*":"{number} customers","_1":"1 customer"}',
              [s._plural(Y.length, "number")],
            ),
          })),
          (e[35] = Y.length),
          (e[36] = Ae))
        : (Ae = e[36]);
      var Fe;
      e[37] !== n
        ? ((Fe = u.jsx(r("WAWebViewSwitcher.react"), {
            items: h,
            currentValue: n,
            onValueChange: P,
            testid: void 0,
          })),
          (e[37] = n),
          (e[38] = Fe))
        : (Fe = e[38]);
      var Oe;
      e[39] !== D
        ? ((Oe = u.jsx(r("WAWebCustomerManagerLastMessageFilter.react"), {
            onSelectRange: z,
            selectedRange: D,
            testid: void 0,
          })),
          (e[39] = D),
          (e[40] = Oe))
        : (Oe = e[40]);
      var Be;
      e[41] !== l
        ? ((Be = u.jsx(r("WAWebCustomerManagerSearchInput.react"), {
            value: l,
            onChange: c,
            testid: void 0,
          })),
          (e[41] = l),
          (e[42] = Be))
        : (Be = e[42]);
      var We = n === g,
        qe;
      e[43] !== k || e[44] !== R || e[45] !== y || e[46] !== We
        ? ((qe = u.jsx(r("WAWebCustomerManagerFilterBar.react"), {
            hideLeadStage: We,
            onClear: A,
            onClearAcquisitionSource: H,
            onClearLabel: W,
            onSelectAcquisitionSource: U,
            onSelectLabel: O,
            onToggleStage: M,
            selectedAcquisitionSource: k,
            selectedLabelId: R,
            selectedStages: y,
            testid: void 0,
          })),
          (e[43] = k),
          (e[44] = R),
          (e[45] = y),
          (e[46] = We),
          (e[47] = qe))
        : (qe = e[47]);
      var Ue;
      e[48] !== Ae ||
      e[49] !== Fe ||
      e[50] !== Oe ||
      e[51] !== Be ||
      e[52] !== qe
        ? ((Ue = u.jsxs(
            "div",
            babelHelpers.extends({}, we, { children: [Ae, Fe, Oe, Be, qe] }),
          )),
          (e[48] = Ae),
          (e[49] = Fe),
          (e[50] = Oe),
          (e[51] = Be),
          (e[52] = qe),
          (e[53] = Ue))
        : (Ue = e[53]);
      var Ve;
      e[54] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ve = { className: "x5yr21d" }), (e[54] = Ve))
        : (Ve = e[54]);
      var He;
      e[55] !== n ||
      e[56] !== Y ||
      e[57] !== Ce ||
      e[58] !== K ||
      e[59] !== (Z == null ? void 0 : Z.chatJid)
        ? ((He = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsx(
              "div",
              babelHelpers.extends({}, Ve, {
                children:
                  n === f
                    ? u.jsx(r("WAWebCustomerManagerListView.react"), {
                        customers: Y,
                        hasActiveFilter: o(
                          "WAWebCustomerManagerSearchUtils",
                        ).hasActiveFilter(K),
                        onAddCustomer: Le,
                        onChatClick: Ce,
                        onCustomerClick: he,
                        onDeleteCustomer: Re,
                        onLearnMore: De,
                        onManageLabels: ke,
                        selectedCustomerJid: Z == null ? void 0 : Z.chatJid,
                      })
                    : u.jsx(r("WAWebCustomerManagerPipelineView.react"), {
                        onCustomerClick: he,
                        searchOptions: K,
                      }),
              }),
            ),
          })),
          (e[55] = n),
          (e[56] = Y),
          (e[57] = Ce),
          (e[58] = K),
          (e[59] = Z == null ? void 0 : Z.chatJid),
          (e[60] = He))
        : (He = e[60]);
      var Ge;
      e[61] !== Ue || e[62] !== He
        ? ((Ge = u.jsxs(
            "div",
            babelHelpers.extends({}, Pe, { children: [Me, Ue, He] }),
          )),
          (e[61] = Ue),
          (e[62] = He),
          (e[63] = Ge))
        : (Ge = e[63]);
      var ze;
      e[64] !== de || e[65] !== se || e[66] !== ie || e[67] !== Z
        ? ((ze =
            Z != null &&
            se != null &&
            ie != null &&
            u.jsx("div", {
              className:
                "x1n2onr6 x1czfd9k x2lah0s xpilrb4 x1t7ytsu x1vb5itz x6ikm8r x10wlt62",
              children: u.jsx(
                o("WAWebInfoFlowLoadable").InfoFlowLoadable,
                {
                  chat: se,
                  initialContactInfoTab: de,
                  initialStep: o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo,
                  contactProp: ie,
                  onEnd: ve,
                  showChatTabInContactInfoDrawer: !0,
                },
                ie.id.toString() + "-" + de,
              ),
            })),
          (e[64] = de),
          (e[65] = se),
          (e[66] = ie),
          (e[67] = Z),
          (e[68] = ze))
        : (ze = e[68]);
      var je;
      return (
        e[69] !== $e || e[70] !== Ge || e[71] !== ze
          ? ((je = u.jsx(r("WAWebDrawer.react"), {
              theme: "catalog",
              testid: void 0,
              children: u.jsxs(
                "div",
                babelHelpers.extends({}, xe, { children: [$e, Ge, ze] }),
              ),
            })),
            (e[69] = $e),
            (e[70] = Ge),
            (e[71] = ze),
            (e[72] = je))
          : (je = e[72]),
        je
      );
    }
    function C() {
      o("WAWebExternalLink.react").openExternalLink(
        "https://faq.whatsapp.com/",
      );
    }
    function b() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebAddCustomerDialog.react"), {}),
      );
    }
    l.default = y;
  },
  226,
);
