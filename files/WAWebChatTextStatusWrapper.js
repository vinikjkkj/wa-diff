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
    "WAWebFrontendTextStatusGetters",
    "WAWebIdleComponent.react",
    "WAWebTextStatusAction",
    "WAWebTextStatusCollection",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusGetters",
    "WAWebTextStatusUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebTextStatusValues",
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
      var t = o("react-compiler-runtime").c(41),
        a = e.contactId,
        i = e.ellipsify,
        l = e.waitIdle,
        s = i === void 0 ? !0 : i,
        m = o("WAWebContactCollection").ContactCollection.gadd(a),
        p = m.getStatus(),
        _,
        f;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = [
            o("WAWebFrontendTextStatusGetters").getStale,
            o("WAWebTextStatusGetters").getStatus,
          ]),
          (f = { isStrong: !1 }),
          (t[0] = _),
          (t[1] = f))
        : ((_ = t[0]), (f = t[1]));
      var g = o("useWAWebTextStatusValues").useTextStatusValues(p.id, _, f),
        h = g[0],
        y = g[1],
        C;
      if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
        var b;
        ((C = [
          (b = o("WAWebFrontendContactGetters")).getTextStatusString,
          b.getTextStatusEmoji,
          b.getTextStatusLastUpdateTime,
          b.getTextStatusExpiryTs,
          b.getTextStatusEphemeralDuration,
        ]),
          (t[2] = C));
      } else C = t[2];
      var v = o("useWAWebContactValues").useContactValues(m.id, C),
        S = v[0],
        R = v[1],
        L = v[2],
        E = v[3],
        k = v[4],
        I;
      t[3] !== R || t[4] !== k || t[5] !== E || t[6] !== L || t[7] !== S
        ? ((I = o("WAWebTextStatusUtils").shouldDisplayTextStatus(
            S,
            R,
            L,
            E,
            k,
          )),
          (t[3] = R),
          (t[4] = k),
          (t[5] = E),
          (t[6] = L),
          (t[7] = S),
          (t[8] = I))
        : (I = t[8]);
      var T = I,
        D;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = u.jsx(u.Fragment, {})), (t[9] = D))
        : (D = t[9]);
      var x = D,
        $;
      t[10] !== T || t[11] !== s || t[12] !== R || t[13] !== S
        ? (($ = function () {
            if (!T) return x;
            var e;
            if (R != null) {
              var t = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(R);
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
                  text: S != null ? S : "",
                  breakWord: !0,
                }),
              ],
            });
          }),
          (t[10] = T),
          (t[11] = s),
          (t[12] = R),
          (t[13] = S),
          (t[14] = $))
        : ($ = t[14]);
      var P = $,
        N;
      t[15] !== L
        ? ((N = o("WAWebTextStatusUtils").isTextStatusNotFetched(L)),
          (t[15] = L),
          (t[16] = N))
        : (N = t[16]);
      var M = N,
        w = !S && !R && o("WAWebTextStatusUtils").isLegacyAboutNotFetched(p),
        A;
      t[17] !== a
        ? ((A = o("WAWebUserPrefsMeUser").isMeAccount(a)),
          (t[17] = a),
          (t[18] = A))
        : (A = t[18]);
      var F = A,
        O;
      t[19] !== L
        ? ((O = o("WAWebTextStatusUtils").hasEverHadTextStatus(L)),
          (t[19] = L),
          (t[20] = O))
        : (O = t[20]);
      var B = O,
        W,
        q;
      (t[21] !== B || t[22] !== a || t[23] !== F || t[24] !== h || t[25] !== M
        ? ((W = function () {
            !F &&
              !B &&
              !M &&
              h &&
              o("WAWebTextStatusCollection").TextStatusCollection.find(a);
          }),
          (q = [a, F, B, M, h]),
          (t[21] = B),
          (t[22] = a),
          (t[23] = F),
          (t[24] = h),
          (t[25] = M),
          (t[26] = W),
          (t[27] = q))
        : ((W = t[26]), (q = t[27])),
        c(W, q));
      var U = function () {
          return o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
            ? T
              ? P()
              : !F && !B && !M && o("WAWebTextStatusUtils").hasCustomAboutSet(p)
                ? h
                  ? d
                  : u.jsx(u.Fragment, { children: y })
                : x
            : x;
        },
        V = U(),
        H;
      t[28] !== B ||
      t[29] !== a ||
      t[30] !== V ||
      t[31] !== F ||
      t[32] !== w ||
      t[33] !== M ||
      t[34] !== L
        ? ((H = function () {
            var e = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e;
                  return (
                    M
                      ? (e = o("WAWebTextStatusAction").getTextStatus(a, L))
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
            return (e(), V);
          }),
          (t[28] = B),
          (t[29] = a),
          (t[30] = V),
          (t[31] = F),
          (t[32] = w),
          (t[33] = M),
          (t[34] = L),
          (t[35] = H))
        : (H = t[35]);
      var G = H,
        z;
      return (
        t[36] !== a || t[37] !== G || t[38] !== V || t[39] !== l
          ? ((z = u.jsx(r("WAWebIdleComponent.react"), {
              id: a,
              onComplex: G,
              waitIdle: l,
              children: V,
            })),
            (t[36] = a),
            (t[37] = G),
            (t[38] = V),
            (t[39] = l),
            (t[40] = z))
          : (z = t[40]),
        z
      );
    }
    ((l.willTextStatusDisplayContent = m), (l.TextStatus = p));
  },
  226,
);
