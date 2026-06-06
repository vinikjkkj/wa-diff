__d(
  "WAWebChatTextStatusWrapper",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebIdleComponent.react",
    "WAWebStateUtils",
    "WAWebTextStatusAction",
    "WAWebTextStatusCollection",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebContactValues",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useEffect,
      m = c.jsx(c.Fragment, { children: s._(/*BTDS*/ "Loading About\u2026") });
    function p(e) {
      var t,
        n = o("WAWebContactCollection").ContactCollection.gadd(e),
        r = n.getStatus(),
        a = (t = o("WAWebFrontendContactGetters")).getTextStatusString(n),
        i = t.getTextStatusEmoji(n),
        l = t.getTextStatusLastUpdateTime(n),
        s = t.getTextStatusExpiryTs(n),
        u = t.getTextStatusEphemeralDuration(n),
        c = o("WAWebTextStatusUtils").isTextStatusNotFetched(l);
      if (!o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled())
        return !1;
      if (o("WAWebTextStatusUtils").shouldDisplayTextStatus(a, i, l, s, u))
        return !0;
      if (o("WAWebUserPrefsMeUser").isMeAccount(e)) return !1;
      if (
        !o("WAWebTextStatusUtils").hasEverHadTextStatus(l) &&
        !c &&
        o("WAWebTextStatusUtils").hasCustomAboutSet(r)
      ) {
        var d,
          m,
          p = (d = (m = r.status) == null ? void 0 : m.trim()) != null ? d : "";
        return p !== "";
      }
      return !1;
    }
    function _(t) {
      var n = o("react-compiler-runtime").c(58),
        a = t.contactId,
        i = t.ellipsify,
        l = t.waitIdle,
        s = i === void 0 ? !0 : i,
        u,
        p;
      n[0] !== a
        ? ((u = o("WAWebContactCollection").ContactCollection.gadd(a)),
          (p = u.getStatus()),
          (n[0] = a),
          (n[1] = u),
          (n[2] = p))
        : ((u = n[1]), (p = n[2]));
      var _ = p,
        f,
        g;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = ["id", "stale", "status"]),
          (g = { isStrong: !1 }),
          (n[3] = f),
          (n[4] = g))
        : ((f = n[3]), (g = n[4]));
      var h = o("useWAWebModelValues").useModelValues(_, f, g),
        y;
      if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
        var C;
        ((y = [
          (C = o("WAWebFrontendContactGetters")).getTextStatusString,
          C.getTextStatusEmoji,
          C.getTextStatusLastUpdateTime,
          C.getTextStatusExpiryTs,
          C.getTextStatusEphemeralDuration,
        ]),
          (n[5] = y));
      } else y = n[5];
      var b = o("useWAWebContactValues").useContactValues(u.id, y),
        v = b[0],
        S = b[1],
        R = b[2],
        L = b[3],
        E = b[4],
        k;
      n[6] !== S || n[7] !== E || n[8] !== L || n[9] !== R || n[10] !== v
        ? ((k = o("WAWebTextStatusUtils").shouldDisplayTextStatus(
            v,
            S,
            R,
            L,
            E,
          )),
          (n[6] = S),
          (n[7] = E),
          (n[8] = L),
          (n[9] = R),
          (n[10] = v),
          (n[11] = k))
        : (k = n[11]);
      var I = k,
        T;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = c.jsx(c.Fragment, {})), (n[12] = T))
        : (T = n[12]);
      var D = T,
        x;
      n[13] !== I || n[14] !== s || n[15] !== S || n[16] !== v
        ? ((x = function () {
            if (!I) return D;
            var t;
            if (S != null) {
              var n = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(S);
              n != null &&
                (t = c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      o("WAWebUISpacing").uiPadding.end5,
                    ),
                    {
                      children: c.jsx(
                        r("WAWebEmoji.react"),
                        { emoji: n, size: "small" },
                        "low-res",
                      ),
                    },
                  ),
                ));
            }
            return c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [
                t,
                c.jsx(o("WAWebEmojiText.react").EmojiText, {
                  direction: "auto",
                  selectable: !0,
                  ellipsify: s === !1 ? void 0 : !0,
                  titlify: !0,
                  text: v != null ? v : "",
                  breakWord: !0,
                }),
              ],
            });
          }),
          (n[13] = I),
          (n[14] = s),
          (n[15] = S),
          (n[16] = v),
          (n[17] = x))
        : (x = n[17]);
      var $ = x,
        P;
      n[18] !== R
        ? ((P = o("WAWebTextStatusUtils").isTextStatusNotFetched(R)),
          (n[18] = R),
          (n[19] = P))
        : (P = n[19]);
      var N = P,
        M;
      n[20] !== h || n[21] !== S || n[22] !== v
        ? ((M =
            !v && !S && o("WAWebTextStatusUtils").isLegacyAboutNotFetched(h)),
          (n[20] = h),
          (n[21] = S),
          (n[22] = v),
          (n[23] = M))
        : (M = n[23]);
      var w = M,
        A;
      n[24] !== a
        ? ((A = o("WAWebUserPrefsMeUser").isMeAccount(a)),
          (n[24] = a),
          (n[25] = A))
        : (A = n[25]);
      var F = A,
        O;
      n[26] !== R
        ? ((O = o("WAWebTextStatusUtils").hasEverHadTextStatus(R)),
          (n[26] = R),
          (n[27] = O))
        : (O = n[27]);
      var B = O,
        W;
      n[28] !== h
        ? ((W = o("WAWebStateUtils").unproxy(h)), (n[28] = h), (n[29] = W))
        : (W = n[29]);
      var q = W.stale,
        U,
        V;
      (n[30] !== B || n[31] !== a || n[32] !== F || n[33] !== q || n[34] !== N
        ? ((U = function () {
            !F &&
              !B &&
              !N &&
              q &&
              o("WAWebTextStatusCollection").TextStatusCollection.find(a);
          }),
          (V = [a, F, B, N, q]),
          (n[30] = B),
          (n[31] = a),
          (n[32] = F),
          (n[33] = q),
          (n[34] = N),
          (n[35] = U),
          (n[36] = V))
        : ((U = n[35]), (V = n[36])),
        d(U, V));
      var H;
      if (
        n[37] !== B ||
        n[38] !== I ||
        n[39] !== $ ||
        n[40] !== F ||
        n[41] !== h ||
        n[42] !== q ||
        n[43] !== N
      ) {
        var G = function () {
          return o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
            ? I
              ? $()
              : !F && !B && !N && o("WAWebTextStatusUtils").hasCustomAboutSet(h)
                ? q
                  ? m
                  : c.jsx(c.Fragment, { children: h.status })
                : D
            : D;
        };
        ((H = G()),
          (n[37] = B),
          (n[38] = I),
          (n[39] = $),
          (n[40] = F),
          (n[41] = h),
          (n[42] = q),
          (n[43] = N),
          (n[44] = H));
      } else H = n[44];
      var z = H,
        j;
      n[45] !== B ||
      n[46] !== a ||
      n[47] !== z ||
      n[48] !== F ||
      n[49] !== w ||
      n[50] !== N ||
      n[51] !== R
        ? ((j = function () {
            var e = async function () {
              var e;
              return (
                N
                  ? (e = o("WAWebTextStatusAction").getTextStatus(a, R))
                  : !F &&
                    !B &&
                    w &&
                    (e = o(
                      "WAWebTextStatusCollection",
                    ).TextStatusCollection.find(a)),
                e
              );
            };
            return (e(), z);
          }),
          (n[45] = B),
          (n[46] = a),
          (n[47] = z),
          (n[48] = F),
          (n[49] = w),
          (n[50] = N),
          (n[51] = R),
          (n[52] = j))
        : (j = n[52]);
      var K = j,
        Q;
      return (
        n[53] !== a || n[54] !== K || n[55] !== z || n[56] !== l
          ? ((Q = c.jsx(r("WAWebIdleComponent.react"), {
              id: a,
              onComplex: K,
              waitIdle: l,
              children: z,
            })),
            (n[53] = a),
            (n[54] = K),
            (n[55] = z),
            (n[56] = l),
            (n[57] = Q))
          : (Q = n[57]),
        Q
      );
    }
    ((l.willTextStatusDisplayContent = p), (l.TextStatus = _));
  },
  226,
);
