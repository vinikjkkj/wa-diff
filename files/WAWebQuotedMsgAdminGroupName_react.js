__d(
  "WAWebQuotedMsgAdminGroupName.react",
  [
    "fbt",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebEmojiText.react",
    "WAWebFindChatAction",
    "WAWebGroupMetadataCollection",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useImperativeHandle,
      p = d.useState,
      _ = {
        description: {
          color: "xhslqc4",
          paddingTop: "x123j3cw",
          fontSize: "x1f6kntn",
          fontWeight: "xo1l8bm",
          lineHeight: "xyesn5m",
          $$css: !0,
        },
      };
    function f(t) {
      var n = o("react-compiler-runtime").c(53),
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
        u = l.isComposePreview,
        d = l.quotedGroupJid,
        f = l.quotedGroupSubject,
        h = l.quotedParentGroupJid,
        y = u === void 0 ? !1 : u,
        C;
      if (n[3] !== d) {
        var b;
        ((C =
          (b = r("WAWebGroupMetadataCollection").get(d)) == null
            ? void 0
            : b.participants),
          (n[3] = d),
          (n[4] = C));
      } else C = n[4];
      var v = C,
        S = h != null,
        R = p(!1),
        L = R[0],
        E = R[1],
        k;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = function (t) {
            E(!0);
          }),
          (n[5] = k))
        : (k = n[5]);
      var I = k,
        T;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function (t) {
            E(!0);
          }),
          (n[6] = T))
        : (T = n[6]);
      var D = T,
        x;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = function (t) {
            E(!1);
          }),
          (n[7] = x))
        : (x = n[7]);
      var $ = x,
        P;
      n[8] !== d
        ? ((P = function () {
            var e = o("WAWebChatCollection").ChatCollection.get(d);
            return e == null ? void 0 : e.formattedTitle;
          }),
          (n[8] = d),
          (n[9] = P))
        : (P = n[9]);
      var N = P,
        M;
      n[10] !== v || n[11] !== d || n[12] !== S
        ? ((M = function () {
            var e = S && (v == null || !v.iAmMember());
            e ||
              o("WAWebFindChatAction")
                .findOrCreateLatestChat(d, "quotedMsgAdminGroupName")
                .then(g);
          }),
          (n[10] = v),
          (n[11] = d),
          (n[12] = S),
          (n[13] = M))
        : (M = n[13]);
      var w = M,
        A;
      n[14] !== L || n[15] !== y
        ? ((A = function () {
            return !L && !y;
          }),
          (n[14] = L),
          (n[15] = y),
          (n[16] = A))
        : (A = n[16]);
      var F = A,
        O;
      (n[17] !== F
        ? ((O = function () {
            return { hoverable: F };
          }),
          (n[17] = F),
          (n[18] = O))
        : (O = n[18]),
        m(i, O));
      var B;
      n[19] !== N || n[20] !== f
        ? ((B = f != null ? f : N()), (n[19] = N), (n[20] = f), (n[21] = B))
        : (B = n[21]);
      var W = B;
      if (W == null) return null;
      var q;
      n[22] !== L || n[23] !== y
        ? ((q = {
            0: "x1n2onr6 x78zum5 x6ikm8r x10wlt62 x16p640f xp43t2z x5j5mwf xptal55 xjodkme",
            2: "x1ypdohk x1n2onr6 x78zum5 x6ikm8r x10wlt62 x16p640f xp43t2z x5j5mwf xptal55 xjodkme",
            1: "x1n2onr6 x78zum5 x6ikm8r x10wlt62 xjbqb8w x1bczwif x17un8ov x1e7945m x11o6v7j",
            3: "x1ypdohk x1n2onr6 x78zum5 x6ikm8r x10wlt62 xjbqb8w x1bczwif x17un8ov x1e7945m x11o6v7j",
          }[(!!L << 1) | (!!y << 0)]),
          (n[22] = L),
          (n[23] = y),
          (n[24] = q))
        : (q = n[24]);
      var U = q,
        V;
      n[25] !== W || n[26] !== S
        ? ((V = S
            ? s._(/*BTDS*/ "{subgroup-name}", [s._param("subgroup-name", W)])
            : null),
          (n[25] = W),
          (n[26] = S),
          (n[27] = V))
        : (V = n[27]);
      var H = V,
        G;
      n[28] !== S
        ? ((G = S
            ? c.jsx(o("WAWebEmojiText.react").EmojiText, {
                xstyle: _.description,
                text: s._(/*BTDS*/ "Request to join"),
              })
            : null),
          (n[28] = S),
          (n[29] = G))
        : (G = n[29]);
      var z = G,
        j;
      n[30] !== y
        ? ((j = {
            0: { className: "x78zum5 x6ikm8r x10wlt62 xlyipyv" },
            1: {
              className:
                "x78zum5 x6ikm8r x10wlt62 xlyipyv xh8yej3 xcr9lap x1f6kntn x1n6pog2",
            },
          }[!!y << 0]),
          (n[30] = y),
          (n[31] = j))
        : (j = n[31]);
      var K = y ? "none" : "button",
        Q;
      n[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = c.jsx("span", { className: "x1okw0bk x51ohtg x1w6zdaa" })),
          (n[32] = Q))
        : (Q = n[32]);
      var X;
      n[33] !== y || n[34] !== S
        ? ((X = {
            0: {
              className:
                "x9f619 x78zum5 x1iyjqo2 x6s0dn4 x123j3cw xpdmqnj x1ykpatu xmzvs34 x6ikm8r x10wlt62",
            },
            2: {
              className:
                "x9f619 x78zum5 x1iyjqo2 x6s0dn4 x6ikm8r x10wlt62 x1y1aw1k xpdmqnj xdvlbce x1iwz3mf",
            },
            1: {
              className:
                "x9f619 x78zum5 x1iyjqo2 x123j3cw xpdmqnj x1ykpatu xmzvs34 x6ikm8r x10wlt62 xdt5ytf x7a106z x1yc453h",
            },
            3: {
              className:
                "x9f619 x78zum5 x1iyjqo2 x6ikm8r x10wlt62 x1y1aw1k xpdmqnj xdvlbce x1iwz3mf xdt5ytf x7a106z x1yc453h",
            },
          }[(!!y << 1) | (!!S << 0)]),
          (n[33] = y),
          (n[34] = S),
          (n[35] = X))
        : (X = n[35]);
      var Y;
      n[36] !== W || n[37] !== H
        ? ((Y =
            H != null
              ? H
              : s._(/*BTDS*/ "Group \u2022 {groupName}", [
                  s._param("groupName", W),
                ])),
          (n[36] = W),
          (n[37] = H),
          (n[38] = Y))
        : (Y = n[38]);
      var J;
      n[39] !== Y
        ? ((J = c.jsx(
            o("WAWebEmojiText.react").EmojiText,
            { className: "quoted-mention", text: Y, direction: "auto" },
            "status",
          )),
          (n[39] = Y),
          (n[40] = J))
        : (J = n[40]);
      var Z;
      n[41] !== z || n[42] !== X || n[43] !== J
        ? ((Z = c.jsxs(
            "div",
            babelHelpers.extends({}, X, { children: [J, z] }),
          )),
          (n[41] = z),
          (n[42] = X),
          (n[43] = J),
          (n[44] = Z))
        : (Z = n[44]);
      var ee;
      n[45] !== w || n[46] !== j || n[47] !== K || n[48] !== Z
        ? ((ee = c.jsxs(
            "div",
            babelHelpers.extends({}, j, {
              role: K,
              onClick: w,
              children: [Q, Z],
            }),
          )),
          (n[45] = w),
          (n[46] = j),
          (n[47] = K),
          (n[48] = Z),
          (n[49] = ee))
        : (ee = n[49]);
      var te;
      return (
        n[50] !== U || n[51] !== ee
          ? ((te = c.jsx("div", {
              onMouseOver: I,
              onMouseEnter: D,
              onMouseLeave: $,
              className: U,
              children: ee,
            })),
            (n[50] = U),
            (n[51] = ee),
            (n[52] = te))
          : (te = n[52]),
        te
      );
    }
    function g(e) {
      var t = e.chat;
      return o("WAWebCmd").Cmd.openChatBottom({ chat: t });
    }
    var h = f;
    l.QuotedMsgAdminGroupName = h;
  },
  226,
);
