__d(
  "WAWebPipelineCustomerCard.react",
  [
    "fbt",
    "WAWebAcquisitionSourceNames",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactImage.react",
    "WAWebFrontendContactGetters",
    "WAWebPipelineDragAndDrop.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo;
    function d(e) {
      var t = new Date(e * 1e3);
      return t.toLocaleDateString(void 0, {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(60),
        n = e.customer,
        a = e.onClick,
        i = e.stage,
        l;
      t[0] !== n.chatJid
        ? ((l = o("WAWebContactCollection").ContactCollection.get(n.chatJid)),
          (t[0] = n.chatJid),
          (t[1] = l))
        : (l = t[1]);
      var c = l,
        m;
      t[2] !== c
        ? ((m =
            c != null
              ? o("WAWebFrontendContactGetters").getDisplayName(c)
              : ""),
          (t[2] = c),
          (t[3] = m))
        : (m = t[3]);
      var p = m,
        _;
      if (t[4] !== n.acquisitionSource) {
        var f;
        ((_ =
          n.acquisitionSource != null &&
          (f = o("WAWebAcquisitionSourceNames").getAcquisitionSourceDisplayName(
            n.acquisitionSource,
          )) != null
            ? f
            : ""),
          (t[4] = n.acquisitionSource),
          (t[5] = _));
      } else _ = t[5];
      var g = _,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D,
        x;
      if (
        t[6] !== g ||
        t[7] !== c ||
        t[8] !== n ||
        t[9] !== p ||
        t[10] !== a ||
        t[11] !== i
      ) {
        var $ = o("WAWebChatCollection").ChatCollection.get(n.chatJid),
          P = $ == null ? void 0 : $.t;
        ((h = o("WAWebPipelineDragAndDrop.react").PipelineDraggableCard),
          (R = String(n.id)),
          (L = i),
          t[26] === Symbol.for("react.memo_cache_sentinel")
            ? ((D = {
                className:
                  "x78zum5 x1q0g3np x6s0dn4 x1aj3ljl x150mmf0 xqf2s3x xjpr12u x16ovd2e x12xbjc7 x12w63v0 x1nzty39 xyi3aci xwf5gio x1p453bz x1suzm8a x1280gxy x1ypdohk",
              }),
              (t[26] = D))
            : (D = t[26]),
          (x = "pipeline-customer-card"),
          t[27] !== n || t[28] !== a
            ? ((y = function () {
                return a(n);
              }),
              (t[27] = n),
              (t[28] = a),
              (t[29] = y))
            : (y = t[29]),
          (C = "button"),
          (b = 0),
          t[30] !== n || t[31] !== a
            ? ((v = function (t) {
                (t.key === "Enter" || t.key === " ") &&
                  (t.preventDefault(), a(n));
              }),
              (t[30] = n),
              (t[31] = a),
              (t[32] = v))
            : (v = t[32]),
          t[33] !== c
            ? ((S =
                c != null &&
                u.jsx(r("WAWebContactImage.react"), { contact: c, size: 40 })),
              (t[33] = c),
              (t[34] = S))
            : (S = t[34]));
        var N;
        (t[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = { className: "x78zum5 xdt5ytf x1dbijih xeuugli x98rzlu" }),
            (N = { className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft" }),
            (t[35] = N),
            (t[36] = E))
          : ((N = t[35]), (E = t[36])),
          t[37] !== p
            ? ((k = u.jsx(
                "div",
                babelHelpers.extends({}, N, {
                  children: u.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDefault",
                    children: p,
                  }),
                }),
              )),
              (t[37] = p),
              (t[38] = k))
            : (k = t[38]),
          t[39] !== g
            ? ((I =
                g !== "" &&
                u.jsx("div", {
                  className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft",
                  children: u.jsx(r("WDSText.react"), {
                    type: "Body3",
                    colorName: "contentDeemphasized",
                    children: g,
                  }),
                })),
              (t[39] = g),
              (t[40] = I))
            : (I = t[40]),
          (T =
            P != null &&
            u.jsx("div", {
              className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft",
              children: u.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDeemphasized",
                children: s._(/*BTDS*/ "Last message: {date}", [
                  s._param("date", d(P)),
                ]),
              }),
            })),
          (t[6] = g),
          (t[7] = c),
          (t[8] = n),
          (t[9] = p),
          (t[10] = a),
          (t[11] = i),
          (t[12] = h),
          (t[13] = y),
          (t[14] = C),
          (t[15] = b),
          (t[16] = v),
          (t[17] = S),
          (t[18] = R),
          (t[19] = L),
          (t[20] = E),
          (t[21] = k),
          (t[22] = I),
          (t[23] = T),
          (t[24] = D),
          (t[25] = x));
      } else
        ((h = t[12]),
          (y = t[13]),
          (C = t[14]),
          (b = t[15]),
          (v = t[16]),
          (S = t[17]),
          (R = t[18]),
          (L = t[19]),
          (E = t[20]),
          (k = t[21]),
          (I = t[22]),
          (T = t[23]),
          (D = t[24]),
          (x = t[25]));
      var M;
      t[41] !== E || t[42] !== k || t[43] !== I || t[44] !== T
        ? ((M = u.jsxs(
            "div",
            babelHelpers.extends({}, E, { children: [k, I, T] }),
          )),
          (t[41] = E),
          (t[42] = k),
          (t[43] = I),
          (t[44] = T),
          (t[45] = M))
        : (M = t[45]);
      var w;
      t[46] !== y ||
      t[47] !== C ||
      t[48] !== b ||
      t[49] !== v ||
      t[50] !== S ||
      t[51] !== M ||
      t[52] !== D ||
      t[53] !== x
        ? ((w = u.jsxs(
            "div",
            babelHelpers.extends({}, D, {
              "data-testid": void 0,
              onClick: y,
              role: C,
              tabIndex: b,
              onKeyDown: v,
              children: [S, M],
            }),
          )),
          (t[46] = y),
          (t[47] = C),
          (t[48] = b),
          (t[49] = v),
          (t[50] = S),
          (t[51] = M),
          (t[52] = D),
          (t[53] = x),
          (t[54] = w))
        : (w = t[54]);
      var A;
      return (
        t[55] !== h || t[56] !== R || t[57] !== L || t[58] !== w
          ? ((A = u.jsx(h, { customerId: R, stage: L, children: w })),
            (t[55] = h),
            (t[56] = R),
            (t[57] = L),
            (t[58] = w),
            (t[59] = A))
          : (A = t[59]),
        A
      );
    }
    l.default = m;
  },
  226,
);
