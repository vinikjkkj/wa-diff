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
    "asyncToGeneratorRuntime",
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
      var a = o("react-compiler-runtime").c(58),
        i = t.contactId,
        l = t.ellipsify,
        s = t.waitIdle,
        u = l === void 0 ? !0 : l,
        p,
        _;
      a[0] !== i
        ? ((p = o("WAWebContactCollection").ContactCollection.gadd(i)),
          (_ = p.getStatus()),
          (a[0] = i),
          (a[1] = p),
          (a[2] = _))
        : ((p = a[1]), (_ = a[2]));
      var f = _,
        g,
        h;
      a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = ["id", "stale", "status"]),
          (h = { isStrong: !1 }),
          (a[3] = g),
          (a[4] = h))
        : ((g = a[3]), (h = a[4]));
      var y = o("useWAWebModelValues").useModelValues(f, g, h),
        C;
      if (a[5] === Symbol.for("react.memo_cache_sentinel")) {
        var b;
        ((C = [
          (b = o("WAWebFrontendContactGetters")).getTextStatusString,
          b.getTextStatusEmoji,
          b.getTextStatusLastUpdateTime,
          b.getTextStatusExpiryTs,
          b.getTextStatusEphemeralDuration,
        ]),
          (a[5] = C));
      } else C = a[5];
      var v = o("useWAWebContactValues").useContactValues(p.id, C),
        S = v[0],
        R = v[1],
        L = v[2],
        E = v[3],
        k = v[4],
        I;
      a[6] !== R || a[7] !== k || a[8] !== E || a[9] !== L || a[10] !== S
        ? ((I = o("WAWebTextStatusUtils").shouldDisplayTextStatus(
            S,
            R,
            L,
            E,
            k,
          )),
          (a[6] = R),
          (a[7] = k),
          (a[8] = E),
          (a[9] = L),
          (a[10] = S),
          (a[11] = I))
        : (I = a[11]);
      var T = I,
        D;
      a[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = c.jsx(c.Fragment, {})), (a[12] = D))
        : (D = a[12]);
      var x = D,
        $;
      a[13] !== T || a[14] !== u || a[15] !== R || a[16] !== S
        ? (($ = function () {
            if (!T) return x;
            var t;
            if (R != null) {
              var n = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(R);
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
                  ellipsify: u === !1 ? void 0 : !0,
                  titlify: !0,
                  text: S != null ? S : "",
                  breakWord: !0,
                }),
              ],
            });
          }),
          (a[13] = T),
          (a[14] = u),
          (a[15] = R),
          (a[16] = S),
          (a[17] = $))
        : ($ = a[17]);
      var P = $,
        N;
      a[18] !== L
        ? ((N = o("WAWebTextStatusUtils").isTextStatusNotFetched(L)),
          (a[18] = L),
          (a[19] = N))
        : (N = a[19]);
      var M = N,
        w;
      a[20] !== y || a[21] !== R || a[22] !== S
        ? ((w =
            !S && !R && o("WAWebTextStatusUtils").isLegacyAboutNotFetched(y)),
          (a[20] = y),
          (a[21] = R),
          (a[22] = S),
          (a[23] = w))
        : (w = a[23]);
      var A = w,
        F;
      a[24] !== i
        ? ((F = o("WAWebUserPrefsMeUser").isMeAccount(i)),
          (a[24] = i),
          (a[25] = F))
        : (F = a[25]);
      var O = F,
        B;
      a[26] !== L
        ? ((B = o("WAWebTextStatusUtils").hasEverHadTextStatus(L)),
          (a[26] = L),
          (a[27] = B))
        : (B = a[27]);
      var W = B,
        q;
      a[28] !== y
        ? ((q = o("WAWebStateUtils").unproxy(y)), (a[28] = y), (a[29] = q))
        : (q = a[29]);
      var U = q.stale,
        V,
        H;
      (a[30] !== W || a[31] !== i || a[32] !== O || a[33] !== U || a[34] !== M
        ? ((V = function () {
            !O &&
              !W &&
              !M &&
              U &&
              o("WAWebTextStatusCollection").TextStatusCollection.find(i);
          }),
          (H = [i, O, W, M, U]),
          (a[30] = W),
          (a[31] = i),
          (a[32] = O),
          (a[33] = U),
          (a[34] = M),
          (a[35] = V),
          (a[36] = H))
        : ((V = a[35]), (H = a[36])),
        d(V, H));
      var G;
      if (
        a[37] !== W ||
        a[38] !== T ||
        a[39] !== P ||
        a[40] !== O ||
        a[41] !== y ||
        a[42] !== U ||
        a[43] !== M
      ) {
        var z = function () {
          return o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
            ? T
              ? P()
              : !O && !W && !M && o("WAWebTextStatusUtils").hasCustomAboutSet(y)
                ? U
                  ? m
                  : c.jsx(c.Fragment, { children: y.status })
                : x
            : x;
        };
        ((G = z()),
          (a[37] = W),
          (a[38] = T),
          (a[39] = P),
          (a[40] = O),
          (a[41] = y),
          (a[42] = U),
          (a[43] = M),
          (a[44] = G));
      } else G = a[44];
      var j = G,
        K;
      a[45] !== W ||
      a[46] !== i ||
      a[47] !== j ||
      a[48] !== O ||
      a[49] !== A ||
      a[50] !== M ||
      a[51] !== L
        ? ((K = function () {
            var e = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e;
                  return (
                    M
                      ? (e = o("WAWebTextStatusAction").getTextStatus(i, L))
                      : !O &&
                        !W &&
                        A &&
                        (e = o(
                          "WAWebTextStatusCollection",
                        ).TextStatusCollection.find(i)),
                    e
                  );
                },
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            return (e(), j);
          }),
          (a[45] = W),
          (a[46] = i),
          (a[47] = j),
          (a[48] = O),
          (a[49] = A),
          (a[50] = M),
          (a[51] = L),
          (a[52] = K))
        : (K = a[52]);
      var Q = K,
        X;
      return (
        a[53] !== i || a[54] !== Q || a[55] !== j || a[56] !== s
          ? ((X = c.jsx(r("WAWebIdleComponent.react"), {
              id: i,
              onComplex: Q,
              waitIdle: s,
              children: j,
            })),
            (a[53] = i),
            (a[54] = Q),
            (a[55] = j),
            (a[56] = s),
            (a[57] = X))
          : (X = a[57]),
        X
      );
    }
    ((l.willTextStatusDisplayContent = p), (l.TextStatus = _));
  },
  226,
);
