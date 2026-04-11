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
        c = l === o("WAWebTextStatusUtils").TEXT_STATUS_NOT_FETCHED;
      if (!o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled())
        return !1;
      if (o("WAWebTextStatusUtils").shouldDisplayTextStatus(a, i, l, s, u))
        return !0;
      if (o("WAWebUserPrefsMeUser").isMeAccount(e)) return !1;
      if (!c && o("WAWebTextStatusUtils").hasCustomAboutSet(r)) {
        var d,
          m,
          p = (d = (m = r.status) == null ? void 0 : m.trim()) != null ? d : "";
        return p !== "";
      }
      return !1;
    }
    function d(t) {
      var a = o("react-compiler-runtime").c(41),
        i = t.contactId,
        l = t.waitIdle,
        s,
        c;
      a[0] !== i
        ? ((s = o("WAWebContactCollection").ContactCollection.gadd(i)),
          (c = s.getStatus()),
          (a[0] = i),
          (a[1] = s),
          (a[2] = c))
        : ((s = a[1]), (c = a[2]));
      var d = c,
        m,
        p;
      a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = ["id", "stale", "status"]),
          (p = { isStrong: !1 }),
          (a[3] = m),
          (a[4] = p))
        : ((m = a[3]), (p = a[4]));
      var _ = o("useWAWebModelValues").useModelValues(d, m, p),
        f;
      if (a[5] === Symbol.for("react.memo_cache_sentinel")) {
        var g;
        ((f = [
          (g = o("WAWebFrontendContactGetters")).getTextStatusString,
          g.getTextStatusEmoji,
          g.getTextStatusLastUpdateTime,
          g.getTextStatusExpiryTs,
          g.getTextStatusEphemeralDuration,
        ]),
          (a[5] = f));
      } else f = a[5];
      var h = o("useWAWebContactValues").useContactValues(s.id, f),
        y = h[0],
        C = h[1],
        b = h[2],
        v = h[3],
        S = h[4],
        R;
      a[6] !== C || a[7] !== S || a[8] !== v || a[9] !== b || a[10] !== y
        ? ((R = o("WAWebTextStatusUtils").shouldDisplayTextStatus(
            y,
            C,
            b,
            v,
            S,
          )),
          (a[6] = C),
          (a[7] = S),
          (a[8] = v),
          (a[9] = b),
          (a[10] = y),
          (a[11] = R))
        : (R = a[11]);
      var L = R,
        E;
      a[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = u.jsx(u.Fragment, {})), (a[12] = E))
        : (E = a[12]);
      var k = E,
        I;
      a[13] !== L || a[14] !== C || a[15] !== y
        ? ((I = function () {
            if (!L) return k;
            var t;
            if (C != null) {
              var n = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(C);
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
                  ellipsify: !0,
                  titlify: !0,
                  text: y != null ? y : "",
                  breakWord: !0,
                }),
              ],
            });
          }),
          (a[13] = L),
          (a[14] = C),
          (a[15] = y),
          (a[16] = I))
        : (I = a[16]);
      var T = I,
        D = b === o("WAWebTextStatusUtils").TEXT_STATUS_NOT_FETCHED,
        x;
      a[17] !== _ || a[18] !== C || a[19] !== y
        ? ((x =
            !y && !C && o("WAWebTextStatusUtils").isLegacyAboutNotFetched(_)),
          (a[17] = _),
          (a[18] = C),
          (a[19] = y),
          (a[20] = x))
        : (x = a[20]);
      var $ = x,
        P;
      a[21] !== i
        ? ((P = o("WAWebUserPrefsMeUser").isMeAccount(i)),
          (a[21] = i),
          (a[22] = P))
        : (P = a[22]);
      var N = P,
        M;
      if (
        a[23] !== L ||
        a[24] !== T ||
        a[25] !== N ||
        a[26] !== _ ||
        a[27] !== D
      ) {
        var w = function () {
          return o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
            ? L
              ? T()
              : !N && !D && o("WAWebTextStatusUtils").hasCustomAboutSet(_)
                ? u.jsx(u.Fragment, { children: _.status })
                : k
            : k;
        };
        ((M = w()),
          (a[23] = L),
          (a[24] = T),
          (a[25] = N),
          (a[26] = _),
          (a[27] = D),
          (a[28] = M));
      } else M = a[28];
      var A = M,
        F;
      a[29] !== i ||
      a[30] !== A ||
      a[31] !== N ||
      a[32] !== $ ||
      a[33] !== D ||
      a[34] !== b
        ? ((F = function () {
            var e = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e;
                  return (
                    D
                      ? (e = o("WAWebTextStatusAction").getTextStatus(i, b))
                      : !N &&
                        $ &&
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
            return (e(), A);
          }),
          (a[29] = i),
          (a[30] = A),
          (a[31] = N),
          (a[32] = $),
          (a[33] = D),
          (a[34] = b),
          (a[35] = F))
        : (F = a[35]);
      var O = F,
        B;
      return (
        a[36] !== i || a[37] !== O || a[38] !== A || a[39] !== l
          ? ((B = u.jsx(r("WAWebIdleComponent.react"), {
              id: i,
              onComplex: O,
              waitIdle: l,
              children: A,
            })),
            (a[36] = i),
            (a[37] = O),
            (a[38] = A),
            (a[39] = l),
            (a[40] = B))
          : (B = a[40]),
        B
      );
    }
    ((l.willTextStatusDisplayContent = c), (l.TextStatus = d));
  },
  98,
);
