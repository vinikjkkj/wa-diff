__d(
  "WAWebChatTextStatusWrapper",
  [
    "WAWebContactCollection",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebIdleComponent.react",
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
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(e) {
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
    function d(t) {
      var a = o("react-compiler-runtime").c(48),
        i = t.contactId,
        l = t.ellipsify,
        s = t.waitIdle,
        c = l === void 0 ? !0 : l,
        d,
        m;
      a[0] !== i
        ? ((d = o("WAWebContactCollection").ContactCollection.gadd(i)),
          (m = d.getStatus()),
          (a[0] = i),
          (a[1] = d),
          (a[2] = m))
        : ((d = a[1]), (m = a[2]));
      var p = m,
        _,
        f;
      a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = ["id", "stale", "status"]),
          (f = { isStrong: !1 }),
          (a[3] = _),
          (a[4] = f))
        : ((_ = a[3]), (f = a[4]));
      var g = o("useWAWebModelValues").useModelValues(p, _, f),
        h;
      if (a[5] === Symbol.for("react.memo_cache_sentinel")) {
        var y;
        ((h = [
          (y = o("WAWebFrontendContactGetters")).getTextStatusString,
          y.getTextStatusEmoji,
          y.getTextStatusLastUpdateTime,
          y.getTextStatusExpiryTs,
          y.getTextStatusEphemeralDuration,
        ]),
          (a[5] = h));
      } else h = a[5];
      var C = o("useWAWebContactValues").useContactValues(d.id, h),
        b = C[0],
        v = C[1],
        S = C[2],
        R = C[3],
        L = C[4],
        E;
      a[6] !== v || a[7] !== L || a[8] !== R || a[9] !== S || a[10] !== b
        ? ((E = o("WAWebTextStatusUtils").shouldDisplayTextStatus(
            b,
            v,
            S,
            R,
            L,
          )),
          (a[6] = v),
          (a[7] = L),
          (a[8] = R),
          (a[9] = S),
          (a[10] = b),
          (a[11] = E))
        : (E = a[11]);
      var k = E,
        I;
      a[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = u.jsx(u.Fragment, {})), (a[12] = I))
        : (I = a[12]);
      var T = I,
        D;
      a[13] !== k || a[14] !== c || a[15] !== v || a[16] !== b
        ? ((D = function () {
            if (!k) return T;
            var t;
            if (v != null) {
              var n = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(v);
              n != null &&
                (t = u.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      o("WAWebUISpacing").uiPadding.end5,
                    ),
                    {
                      children: u.jsx(
                        r("WAWebEmoji.react"),
                        { emoji: n, size: "small" },
                        "low-res",
                      ),
                    },
                  ),
                ));
            }
            return u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [
                t,
                u.jsx(o("WAWebEmojiText.react").EmojiText, {
                  direction: "auto",
                  selectable: !0,
                  ellipsify: c === !1 ? void 0 : !0,
                  titlify: !0,
                  text: b != null ? b : "",
                  breakWord: !0,
                }),
              ],
            });
          }),
          (a[13] = k),
          (a[14] = c),
          (a[15] = v),
          (a[16] = b),
          (a[17] = D))
        : (D = a[17]);
      var x = D,
        $;
      a[18] !== S
        ? (($ = o("WAWebTextStatusUtils").isTextStatusNotFetched(S)),
          (a[18] = S),
          (a[19] = $))
        : ($ = a[19]);
      var P = $,
        N;
      a[20] !== g || a[21] !== v || a[22] !== b
        ? ((N =
            !b && !v && o("WAWebTextStatusUtils").isLegacyAboutNotFetched(g)),
          (a[20] = g),
          (a[21] = v),
          (a[22] = b),
          (a[23] = N))
        : (N = a[23]);
      var M = N,
        w;
      a[24] !== i
        ? ((w = o("WAWebUserPrefsMeUser").isMeAccount(i)),
          (a[24] = i),
          (a[25] = w))
        : (w = a[25]);
      var A = w,
        F;
      a[26] !== S
        ? ((F = o("WAWebTextStatusUtils").hasEverHadTextStatus(S)),
          (a[26] = S),
          (a[27] = F))
        : (F = a[27]);
      var O = F,
        B;
      if (
        a[28] !== O ||
        a[29] !== k ||
        a[30] !== x ||
        a[31] !== A ||
        a[32] !== g ||
        a[33] !== P
      ) {
        var W = function () {
          return o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
            ? k
              ? x()
              : !A && !O && !P && o("WAWebTextStatusUtils").hasCustomAboutSet(g)
                ? u.jsx(u.Fragment, { children: g.status })
                : T
            : T;
        };
        ((B = W()),
          (a[28] = O),
          (a[29] = k),
          (a[30] = x),
          (a[31] = A),
          (a[32] = g),
          (a[33] = P),
          (a[34] = B));
      } else B = a[34];
      var q = B,
        U;
      a[35] !== O ||
      a[36] !== i ||
      a[37] !== q ||
      a[38] !== A ||
      a[39] !== M ||
      a[40] !== P ||
      a[41] !== S
        ? ((U = function () {
            var e = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e;
                  return (
                    P
                      ? (e = o("WAWebTextStatusAction").getTextStatus(i, S))
                      : !A &&
                        !O &&
                        M &&
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
            return (e(), q);
          }),
          (a[35] = O),
          (a[36] = i),
          (a[37] = q),
          (a[38] = A),
          (a[39] = M),
          (a[40] = P),
          (a[41] = S),
          (a[42] = U))
        : (U = a[42]);
      var V = U,
        H;
      return (
        a[43] !== i || a[44] !== V || a[45] !== q || a[46] !== s
          ? ((H = u.jsx(r("WAWebIdleComponent.react"), {
              id: i,
              onComplex: V,
              waitIdle: s,
              children: q,
            })),
            (a[43] = i),
            (a[44] = V),
            (a[45] = q),
            (a[46] = s),
            (a[47] = H))
          : (H = a[47]),
        H
      );
    }
    ((l.willTextStatusDisplayContent = c), (l.TextStatus = d));
  },
  98,
);
