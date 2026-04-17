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
      var a = o("react-compiler-runtime").c(46),
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
        $ = S === o("WAWebTextStatusUtils").TEXT_STATUS_NOT_FETCHED,
        P;
      a[18] !== g || a[19] !== v || a[20] !== b
        ? ((P =
            !b && !v && o("WAWebTextStatusUtils").isLegacyAboutNotFetched(g)),
          (a[18] = g),
          (a[19] = v),
          (a[20] = b),
          (a[21] = P))
        : (P = a[21]);
      var N = P,
        M;
      a[22] !== i
        ? ((M = o("WAWebUserPrefsMeUser").isMeAccount(i)),
          (a[22] = i),
          (a[23] = M))
        : (M = a[23]);
      var w = M,
        A;
      a[24] !== S
        ? ((A = o("WAWebTextStatusUtils").hasEverHadTextStatus(S)),
          (a[24] = S),
          (a[25] = A))
        : (A = a[25]);
      var F = A,
        O;
      if (
        a[26] !== F ||
        a[27] !== k ||
        a[28] !== x ||
        a[29] !== w ||
        a[30] !== g ||
        a[31] !== $
      ) {
        var B = function () {
          return o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
            ? k
              ? x()
              : !w && !F && !$ && o("WAWebTextStatusUtils").hasCustomAboutSet(g)
                ? u.jsx(u.Fragment, { children: g.status })
                : T
            : T;
        };
        ((O = B()),
          (a[26] = F),
          (a[27] = k),
          (a[28] = x),
          (a[29] = w),
          (a[30] = g),
          (a[31] = $),
          (a[32] = O));
      } else O = a[32];
      var W = O,
        q;
      a[33] !== F ||
      a[34] !== i ||
      a[35] !== W ||
      a[36] !== w ||
      a[37] !== N ||
      a[38] !== $ ||
      a[39] !== S
        ? ((q = function () {
            var e = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e;
                  return (
                    $
                      ? (e = o("WAWebTextStatusAction").getTextStatus(i, S))
                      : !w &&
                        !F &&
                        N &&
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
            return (e(), W);
          }),
          (a[33] = F),
          (a[34] = i),
          (a[35] = W),
          (a[36] = w),
          (a[37] = N),
          (a[38] = $),
          (a[39] = S),
          (a[40] = q))
        : (q = a[40]);
      var U = q,
        V;
      return (
        a[41] !== i || a[42] !== U || a[43] !== W || a[44] !== s
          ? ((V = u.jsx(r("WAWebIdleComponent.react"), {
              id: i,
              onComplex: U,
              waitIdle: s,
              children: W,
            })),
            (a[41] = i),
            (a[42] = U),
            (a[43] = W),
            (a[44] = s),
            (a[45] = V))
          : (V = a[45]),
        V
      );
    }
    ((l.willTextStatusDisplayContent = c), (l.TextStatus = d));
  },
  98,
);
