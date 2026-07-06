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
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = u.jsx(u.Fragment, { children: s._(/*BTDS*/ "Loading About\u2026") });
    function m(e) {
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
    function p(e) {
      var t = o("react-compiler-runtime").c(58),
        a = e.contactId,
        i = e.ellipsify,
        l = e.waitIdle,
        s = i === void 0 ? !0 : i,
        m,
        p;
      t[0] !== a
        ? ((m = o("WAWebContactCollection").ContactCollection.gadd(a)),
          (p = m.getStatus()),
          (t[0] = a),
          (t[1] = m),
          (t[2] = p))
        : ((m = t[1]), (p = t[2]));
      var _ = p,
        f,
        g;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = ["id", "stale", "status"]),
          (g = { isStrong: !1 }),
          (t[3] = f),
          (t[4] = g))
        : ((f = t[3]), (g = t[4]));
      var h = o("useWAWebModelValues").useModelValues(_, f, g),
        y;
      if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
        var C;
        ((y = [
          (C = o("WAWebFrontendContactGetters")).getTextStatusString,
          C.getTextStatusEmoji,
          C.getTextStatusLastUpdateTime,
          C.getTextStatusExpiryTs,
          C.getTextStatusEphemeralDuration,
        ]),
          (t[5] = y));
      } else y = t[5];
      var b = o("useWAWebContactValues").useContactValues(m.id, y),
        v = b[0],
        S = b[1],
        R = b[2],
        L = b[3],
        E = b[4],
        k;
      t[6] !== S || t[7] !== E || t[8] !== L || t[9] !== R || t[10] !== v
        ? ((k = o("WAWebTextStatusUtils").shouldDisplayTextStatus(
            v,
            S,
            R,
            L,
            E,
          )),
          (t[6] = S),
          (t[7] = E),
          (t[8] = L),
          (t[9] = R),
          (t[10] = v),
          (t[11] = k))
        : (k = t[11]);
      var I = k,
        T;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = u.jsx(u.Fragment, {})), (t[12] = T))
        : (T = t[12]);
      var D = T,
        x;
      t[13] !== I || t[14] !== s || t[15] !== S || t[16] !== v
        ? ((x = function () {
            if (!I) return D;
            var e;
            if (S != null) {
              var t = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(S);
              t != null &&
                (e = u.jsx("div", {
                  className: "x1gabggj",
                  children: u.jsx(
                    r("WAWebEmoji.react"),
                    { emoji: t, size: "small" },
                    "low-res",
                  ),
                }));
            }
            return u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [
                e,
                u.jsx(o("WAWebEmojiText.react").EmojiText, {
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
          (t[13] = I),
          (t[14] = s),
          (t[15] = S),
          (t[16] = v),
          (t[17] = x))
        : (x = t[17]);
      var $ = x,
        P;
      t[18] !== R
        ? ((P = o("WAWebTextStatusUtils").isTextStatusNotFetched(R)),
          (t[18] = R),
          (t[19] = P))
        : (P = t[19]);
      var N = P,
        M;
      t[20] !== h || t[21] !== S || t[22] !== v
        ? ((M =
            !v && !S && o("WAWebTextStatusUtils").isLegacyAboutNotFetched(h)),
          (t[20] = h),
          (t[21] = S),
          (t[22] = v),
          (t[23] = M))
        : (M = t[23]);
      var w = M,
        A;
      t[24] !== a
        ? ((A = o("WAWebUserPrefsMeUser").isMeAccount(a)),
          (t[24] = a),
          (t[25] = A))
        : (A = t[25]);
      var F = A,
        O;
      t[26] !== R
        ? ((O = o("WAWebTextStatusUtils").hasEverHadTextStatus(R)),
          (t[26] = R),
          (t[27] = O))
        : (O = t[27]);
      var B = O,
        W;
      t[28] !== h
        ? ((W = o("WAWebStateUtils").unproxy(h)), (t[28] = h), (t[29] = W))
        : (W = t[29]);
      var q = W.stale,
        U,
        V;
      (t[30] !== B || t[31] !== a || t[32] !== F || t[33] !== q || t[34] !== N
        ? ((U = function () {
            !F &&
              !B &&
              !N &&
              q &&
              o("WAWebTextStatusCollection").TextStatusCollection.find(a);
          }),
          (V = [a, F, B, N, q]),
          (t[30] = B),
          (t[31] = a),
          (t[32] = F),
          (t[33] = q),
          (t[34] = N),
          (t[35] = U),
          (t[36] = V))
        : ((U = t[35]), (V = t[36])),
        c(U, V));
      var H;
      if (
        t[37] !== B ||
        t[38] !== I ||
        t[39] !== $ ||
        t[40] !== F ||
        t[41] !== h ||
        t[42] !== q ||
        t[43] !== N
      ) {
        var G = function () {
          return o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
            ? I
              ? $()
              : !F && !B && !N && o("WAWebTextStatusUtils").hasCustomAboutSet(h)
                ? q
                  ? d
                  : u.jsx(u.Fragment, { children: h.status })
                : D
            : D;
        };
        ((H = G()),
          (t[37] = B),
          (t[38] = I),
          (t[39] = $),
          (t[40] = F),
          (t[41] = h),
          (t[42] = q),
          (t[43] = N),
          (t[44] = H));
      } else H = t[44];
      var z = H,
        j;
      t[45] !== B ||
      t[46] !== a ||
      t[47] !== z ||
      t[48] !== F ||
      t[49] !== w ||
      t[50] !== N ||
      t[51] !== R
        ? ((j = function () {
            var e = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
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
                },
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            return (e(), z);
          }),
          (t[45] = B),
          (t[46] = a),
          (t[47] = z),
          (t[48] = F),
          (t[49] = w),
          (t[50] = N),
          (t[51] = R),
          (t[52] = j))
        : (j = t[52]);
      var K = j,
        Q;
      return (
        t[53] !== a || t[54] !== K || t[55] !== z || t[56] !== l
          ? ((Q = u.jsx(r("WAWebIdleComponent.react"), {
              id: a,
              onComplex: K,
              waitIdle: l,
              children: z,
            })),
            (t[53] = a),
            (t[54] = K),
            (t[55] = z),
            (t[56] = l),
            (t[57] = Q))
          : (Q = t[57]),
        Q
      );
    }
    ((l.willTextStatusDisplayContent = m), (l.TextStatus = p));
  },
  226,
);
