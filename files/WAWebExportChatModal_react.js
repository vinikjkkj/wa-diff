__d(
  "WAWebExportChatModal.react",
  [
    "fbt",
    "WAAbortError",
    "WAWebExportChatAction",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebNoop",
    "WAWebProgressBar.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSBaseRadio.react",
    "WDSButton.react",
    "WDSButtonGroup.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useRef,
      p = c.useState,
      _ = {
        radioLabel: { paddingInlineStart: "xdx6fka", $$css: !0 },
        sectionLabel: { marginBottom: "xefnzgg", $$css: !0 },
      },
      f = {
        loading: function () {
          return s._(/*BTDS*/ "Loading messages...");
        },
        downloading_media: function () {
          return s._(/*BTDS*/ "Downloading media...");
        },
        formatting: function () {
          return s._(/*BTDS*/ "Generating export file...");
        },
        saving: function () {
          return s._(/*BTDS*/ "Saving file...");
        },
      };
    function g(e) {
      var t = o("react-compiler-runtime").c(112),
        n = e.chat,
        a = e.onClose,
        i = p("config"),
        l = i[0],
        c = i[1],
        d = p(!1),
        g = d[0],
        h = d[1],
        y = p("all"),
        C = y[0],
        b = y[1],
        v = p(""),
        S = v[0],
        R = v[1],
        L = p(""),
        E = L[0],
        k = L[1],
        I = p("loading"),
        T = I[0],
        D = I[1],
        x = p(0),
        $ = x[0],
        P = x[1],
        N = p(1),
        M = N[0],
        w = N[1],
        A = m(null),
        F;
      t[0] !== n ||
      t[1] !== C ||
      t[2] !== E ||
      t[3] !== g ||
      t[4] !== a ||
      t[5] !== S
        ? ((F = function () {
            var e = new AbortController();
            ((A.current = e), c("exporting"), P(0), w(1));
            var t, r;
            (C === "custom" &&
              (S !== "" &&
                (t = Math.floor(new Date(S + "T00:00:00").getTime() / 1e3)),
              E !== "" &&
                (r = Math.floor(new Date(E + "T23:59:59").getTime() / 1e3))),
              o("WAWebExportChatAction")
                .exportChat({
                  chat: n,
                  includeMedia: g,
                  startDate: t,
                  endDate: r,
                  signal: e.signal,
                  onProgress: function (t, n, r) {
                    (D(t), P(n), w(r));
                  },
                })
                .then(function (e) {
                  (o("WAWebToastManager").ToastManager.open(
                    u.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(
                        /*BTDS*/ '_j{"*":"{count} messages exported","_1":"{count} message exported"}',
                        [
                          s._plural(e.messageCount),
                          s._param("count", e.messageCount),
                        ],
                      ),
                      id: o("WAWebToast.react").genId("export-chat-success"),
                    }),
                    o("WAWebToastManager").ToastPosition.CENTER,
                  ),
                    a());
                })
                .catch(function (e) {
                  e instanceof o("WAAbortError").AbortError || c("error");
                }));
          }),
          (t[0] = n),
          (t[1] = C),
          (t[2] = E),
          (t[3] = g),
          (t[4] = a),
          (t[5] = S),
          (t[6] = F))
        : (F = t[6]);
      var O = F,
        B;
      t[7] !== a
        ? ((B = function () {
            (A.current != null && A.current.abort(), a());
          }),
          (t[7] = a),
          (t[8] = B))
        : (B = t[8]);
      var W = B,
        q;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = function (t) {
            h(t === "with_media");
          }),
          (t[9] = q))
        : (q = t[9]);
      var U = q,
        V;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = function (t) {
            b(t === "custom" ? "custom" : "all");
          }),
          (t[10] = V))
        : (V = t[10]);
      var H = V,
        G;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = function (t) {
            R(t.target.value);
          }),
          (t[11] = G))
        : (G = t[11]);
      var z = G,
        j;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = function (t) {
            k(t.target.value);
          }),
          (t[12] = j))
        : (j = t[12]);
      var K = j,
        Q;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = new Date().toISOString().slice(0, 10)), (t[13] = Q))
        : (Q = t[13]);
      var X = Q;
      if (l === "config") {
        var Y;
        t[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((Y = s._(/*BTDS*/ "Export")), (t[14] = Y))
          : (Y = t[14]);
        var J;
        t[15] !== O
          ? ((J = { label: Y, onPress: O }), (t[15] = O), (t[16] = J))
          : (J = t[16]);
        var Z;
        t[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = s._(/*BTDS*/ "Cancel")), (t[17] = Z))
          : (Z = t[17]);
        var ee;
        t[18] !== a
          ? ((ee = { label: Z, onPress: a, variant: "borderless" }),
            (t[18] = a),
            (t[19] = ee))
          : (ee = t[19]);
        var te;
        t[20] !== ee || t[21] !== J
          ? ((te = u.jsx("div", {
              children: u.jsx(r("WDSButtonGroup.react"), {
                width: "hug",
                primaryButtonProps: J,
                tertiaryButtonProps: ee,
              }),
            })),
            (t[20] = ee),
            (t[21] = J),
            (t[22] = te))
          : (te = t[22]);
        var ne = te,
          re;
        t[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((re = s._(/*BTDS*/ "Export chat")), (t[23] = re))
          : (re = t[23]);
        var oe;
        t[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((oe = { className: "x14mdic9" }), (t[24] = oe))
          : (oe = t[24]);
        var ae;
        t[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((ae = u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              xstyle: _.sectionLabel,
              children: s._(/*BTDS*/ "Export mode"),
            })),
            (t[25] = ae))
          : (ae = t[25]);
        var ie;
        t[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((ie = { className: "x6s0dn4 x78zum5 x1wxaq2x x16ovd2e x12xbjc7" }),
            (t[26] = ie))
          : (ie = t[26]);
        var le = !g,
          se;
        t[27] !== le
          ? ((se = u.jsx(r("WDSBaseRadio.react"), {
              id: "export-mode-text",
              value: "text_only",
              name: "export-mode",
              checked: le,
              onChange: U,
            })),
            (t[27] = le),
            (t[28] = se))
          : (se = t[28]);
        var ue;
        t[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((ue = u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              xstyle: _.radioLabel,
              children: s._(/*BTDS*/ "Without media"),
            })),
            (t[29] = ue))
          : (ue = t[29]);
        var ce;
        t[30] !== se
          ? ((ce = u.jsxs(
              "label",
              babelHelpers.extends({ htmlFor: "export-mode-text" }, ie, {
                children: [se, ue],
              }),
            )),
            (t[30] = se),
            (t[31] = ce))
          : (ce = t[31]);
        var de;
        t[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((de = { className: "x6s0dn4 x78zum5 x1wxaq2x x16ovd2e x12xbjc7" }),
            (t[32] = de))
          : (de = t[32]);
        var me;
        t[33] !== g
          ? ((me = u.jsx(r("WDSBaseRadio.react"), {
              id: "export-mode-media",
              value: "with_media",
              name: "export-mode",
              checked: g,
              onChange: U,
            })),
            (t[33] = g),
            (t[34] = me))
          : (me = t[34]);
        var pe;
        t[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((pe = u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              xstyle: _.radioLabel,
              children: s._(/*BTDS*/ "With media"),
            })),
            (t[35] = pe))
          : (pe = t[35]);
        var _e;
        t[36] !== me
          ? ((_e = u.jsxs(
              "label",
              babelHelpers.extends({ htmlFor: "export-mode-media" }, de, {
                children: [me, pe],
              }),
            )),
            (t[36] = me),
            (t[37] = _e))
          : (_e = t[37]);
        var fe;
        t[38] !== ce || t[39] !== _e
          ? ((fe = u.jsxs(
              "div",
              babelHelpers.extends({}, oe, {
                children: [
                  ae,
                  u.jsxs(o("WAWebFlex.react").FlexColumn, {
                    role: "radiogroup",
                    children: [ce, _e],
                  }),
                ],
              }),
            )),
            (t[38] = ce),
            (t[39] = _e),
            (t[40] = fe))
          : (fe = t[40]);
        var ge;
        t[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((ge = { className: "x14mdic9" }), (t[41] = ge))
          : (ge = t[41]);
        var he;
        t[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((he = u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              xstyle: _.sectionLabel,
              children: s._(/*BTDS*/ "Date range"),
            })),
            (t[42] = he))
          : (he = t[42]);
        var ye;
        t[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((ye = { className: "x6s0dn4 x78zum5 x1wxaq2x x16ovd2e x12xbjc7" }),
            (t[43] = ye))
          : (ye = t[43]);
        var Ce = C === "all",
          be;
        t[44] !== Ce
          ? ((be = u.jsx(r("WDSBaseRadio.react"), {
              id: "date-range-all",
              value: "all",
              name: "date-range",
              checked: Ce,
              onChange: H,
            })),
            (t[44] = Ce),
            (t[45] = be))
          : (be = t[45]);
        var ve;
        t[46] === Symbol.for("react.memo_cache_sentinel")
          ? ((ve = u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              xstyle: _.radioLabel,
              children: s._(/*BTDS*/ "All messages"),
            })),
            (t[46] = ve))
          : (ve = t[46]);
        var Se;
        t[47] !== be
          ? ((Se = u.jsxs(
              "label",
              babelHelpers.extends({ htmlFor: "date-range-all" }, ye, {
                children: [be, ve],
              }),
            )),
            (t[47] = be),
            (t[48] = Se))
          : (Se = t[48]);
        var Re;
        t[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((Re = { className: "x6s0dn4 x78zum5 x1wxaq2x x16ovd2e x12xbjc7" }),
            (t[49] = Re))
          : (Re = t[49]);
        var Le = C === "custom",
          Ee;
        t[50] !== Le
          ? ((Ee = u.jsx(r("WDSBaseRadio.react"), {
              id: "date-range-custom",
              value: "custom",
              name: "date-range",
              checked: Le,
              onChange: H,
            })),
            (t[50] = Le),
            (t[51] = Ee))
          : (Ee = t[51]);
        var ke;
        t[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((ke = u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              xstyle: _.radioLabel,
              children: s._(/*BTDS*/ "Custom date range"),
            })),
            (t[52] = ke))
          : (ke = t[52]);
        var Ie;
        t[53] !== Ee
          ? ((Ie = u.jsxs(
              "label",
              babelHelpers.extends({ htmlFor: "date-range-custom" }, Re, {
                children: [Ee, ke],
              }),
            )),
            (t[53] = Ee),
            (t[54] = Ie))
          : (Ie = t[54]);
        var Te;
        t[55] !== Se || t[56] !== Ie
          ? ((Te = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              role: "radiogroup",
              children: [Se, Ie],
            })),
            (t[55] = Se),
            (t[56] = Ie),
            (t[57] = Te))
          : (Te = t[57]);
        var De;
        t[58] !== C || t[59] !== E || t[60] !== S
          ? ((De =
              C === "custom" &&
              u.jsxs("div", {
                className:
                  "x6s0dn4 x78zum5 x1qvou4u x1s70e7g x16ovd2e x1m4z3lf",
                children: [
                  u.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: s._(/*BTDS*/ "From"),
                  }),
                  u.jsx("input", {
                    "aria-label": s._(/*BTDS*/ "Start date"),
                    "data-testid": void 0,
                    max: E !== "" ? E : X,
                    onChange: z,
                    type: "date",
                    value: S,
                    className:
                      "xjbqb8w x1pyc6se x1mlb2bo x16pkwpw xqe4bef xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x14ug900 x1f6kntn x16ovd2e x12xbjc7 xdx6fka xvtqlqk",
                  }),
                  u.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: s._(/*BTDS*/ "To"),
                  }),
                  u.jsx("input", {
                    "aria-label": s._(/*BTDS*/ "End date"),
                    "data-testid": void 0,
                    max: X,
                    min: S !== "" ? S : void 0,
                    onChange: K,
                    type: "date",
                    value: E,
                    className:
                      "xjbqb8w x1pyc6se x1mlb2bo x16pkwpw xqe4bef xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x14ug900 x1f6kntn x16ovd2e x12xbjc7 xdx6fka xvtqlqk",
                  }),
                ],
              })),
            (t[58] = C),
            (t[59] = E),
            (t[60] = S),
            (t[61] = De))
          : (De = t[61]);
        var xe;
        t[62] !== Te || t[63] !== De
          ? ((xe = u.jsxs(
              "div",
              babelHelpers.extends({}, ge, { children: [he, Te, De] }),
            )),
            (t[62] = Te),
            (t[63] = De),
            (t[64] = xe))
          : (xe = t[64]);
        var $e;
        return (
          t[65] !== ne || t[66] !== fe || t[67] !== xe
            ? (($e = u.jsxs(o("WAWebModal.react").Modal, {
                title: re,
                actions: ne,
                testid: void 0,
                children: [fe, xe],
              })),
              (t[65] = ne),
              (t[66] = fe),
              (t[67] = xe),
              (t[68] = $e))
            : ($e = t[68]),
          $e
        );
      }
      if (l === "exporting") {
        var Pe, Ne;
        t[69] !== M || t[70] !== $
          ? ((Ne = M > 0 ? Math.round(($ / M) * 100) : 0),
            (t[69] = M),
            (t[70] = $),
            (t[71] = Ne))
          : (Ne = t[71]);
        var Me = Ne,
          we = (Pe = f[T]) != null ? Pe : f.loading,
          Ae;
        t[72] !== we ? ((Ae = we()), (t[72] = we), (t[73] = Ae)) : (Ae = t[73]);
        var Fe = Ae,
          Oe = M > 0,
          Be;
        t[74] === Symbol.for("react.memo_cache_sentinel")
          ? ((Be = s._(/*BTDS*/ "Exporting chat...")), (t[74] = Be))
          : (Be = t[74]);
        var We;
        t[75] === Symbol.for("react.memo_cache_sentinel")
          ? ((We = {
              className:
                "x6s0dn4 x78zum5 xdt5ytf x1f0uite xs2akgl xl56j7k xi3av73 xl7twdi xvg22vi",
            }),
            (t[75] = We))
          : (We = t[75]);
        var qe;
        t[76] !== Me || t[77] !== Oe
          ? ((qe =
              Oe &&
              u.jsx(r("WAWebProgressBar.react"), { value: Me, max: 100 })),
            (t[76] = Me),
            (t[77] = Oe),
            (t[78] = qe))
          : (qe = t[78]);
        var Ue;
        t[79] !== Fe
          ? ((Ue = u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: Fe,
            })),
            (t[79] = Fe),
            (t[80] = Ue))
          : (Ue = t[80]);
        var Ve;
        t[81] !== T || t[82] !== $
          ? ((Ve =
              T === "loading" &&
              $ > 0 &&
              u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: s._(
                  /*BTDS*/ '_j{"*":"{count} messages loaded","_1":"{count} message loaded"}',
                  [s._plural($), s._param("count", $)],
                ),
              })),
            (t[81] = T),
            (t[82] = $),
            (t[83] = Ve))
          : (Ve = t[83]);
        var He;
        t[84] !== T || t[85] !== M || t[86] !== $
          ? ((He =
              T === "downloading_media" &&
              M > 0 &&
              u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: s._(/*BTDS*/ "{current} of {total}", [
                  s._param("current", $),
                  s._param("total", M),
                ]),
              })),
            (t[84] = T),
            (t[85] = M),
            (t[86] = $),
            (t[87] = He))
          : (He = t[87]);
        var Ge;
        t[88] !== qe || t[89] !== Ue || t[90] !== Ve || t[91] !== He
          ? ((Ge = u.jsxs(
              "div",
              babelHelpers.extends({}, We, { children: [qe, Ue, Ve, He] }),
            )),
            (t[88] = qe),
            (t[89] = Ue),
            (t[90] = Ve),
            (t[91] = He),
            (t[92] = Ge))
          : (Ge = t[92]);
        var ze;
        t[93] === Symbol.for("react.memo_cache_sentinel")
          ? ((ze = s._(/*BTDS*/ "Cancel")), (t[93] = ze))
          : (ze = t[93]);
        var je;
        t[94] !== W
          ? ((je = u.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "end",
              children: u.jsx(r("WDSButton.react"), {
                label: ze,
                variant: "borderless",
                onPress: W,
              }),
            })),
            (t[94] = W),
            (t[95] = je))
          : (je = t[95]);
        var Ke;
        return (
          t[96] !== Ge || t[97] !== je
            ? ((Ke = u.jsxs(o("WAWebModal.react").Modal, {
                title: Be,
                onOverlayClick: r("WAWebNoop"),
                testid: void 0,
                children: [Ge, je],
              })),
              (t[96] = Ge),
              (t[97] = je),
              (t[98] = Ke))
            : (Ke = t[98]),
          Ke
        );
      }
      if (l === "error") {
        var Qe;
        t[99] === Symbol.for("react.memo_cache_sentinel")
          ? ((Qe = s._(/*BTDS*/ "Retry")), (t[99] = Qe))
          : (Qe = t[99]);
        var Xe;
        t[100] !== O
          ? ((Xe = { label: Qe, onPress: O }), (t[100] = O), (t[101] = Xe))
          : (Xe = t[101]);
        var Ye;
        t[102] === Symbol.for("react.memo_cache_sentinel")
          ? ((Ye = s._(/*BTDS*/ "Close")), (t[102] = Ye))
          : (Ye = t[102]);
        var Je;
        t[103] !== a
          ? ((Je = { label: Ye, onPress: a, variant: "borderless" }),
            (t[103] = a),
            (t[104] = Je))
          : (Je = t[104]);
        var Ze;
        t[105] !== Je || t[106] !== Xe
          ? ((Ze = u.jsx("div", {
              children: u.jsx(r("WDSButtonGroup.react"), {
                width: "hug",
                primaryButtonProps: Xe,
                tertiaryButtonProps: Je,
              }),
            })),
            (t[105] = Je),
            (t[106] = Xe),
            (t[107] = Ze))
          : (Ze = t[107]);
        var et = Ze,
          tt;
        t[108] === Symbol.for("react.memo_cache_sentinel")
          ? ((tt = s._(/*BTDS*/ "Export failed")), (t[108] = tt))
          : (tt = t[108]);
        var nt;
        t[109] === Symbol.for("react.memo_cache_sentinel")
          ? ((nt = u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDeemphasized",
              children: s._(
                /*BTDS*/ "Something went wrong while exporting this chat. Please try again.",
              ),
            })),
            (t[109] = nt))
          : (nt = t[109]);
        var rt;
        return (
          t[110] !== et
            ? ((rt = u.jsx(o("WAWebModal.react").Modal, {
                title: tt,
                actions: et,
                testid: void 0,
                children: nt,
              })),
              (t[110] = et),
              (t[111] = rt))
            : (rt = t[111]),
          rt
        );
      }
      return null;
    }
    l.default = g;
  },
  226,
);
