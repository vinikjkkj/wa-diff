__d(
  "WAWebCallParticipantInfo.react",
  [
    "WAWebContactCollection",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebMultiParticipantCallImage.react",
    "WAWebName.react",
    "WAWebVelocityAnimate",
    "WAWebVoipAudioWaveform.react",
    "WAWebVoipUiContext",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebVoipAudioLevel",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useContext,
      m = c.useEffect,
      p = c.useRef,
      _ = 250,
      f = 0.8,
      g = { width: "x5lhr3w", height: "x16ye13r", $$css: !0 },
      h = {
        compactContainer: {
          alignItems: "x6s0dn4",
          rowGap: "x1f0uite",
          columnGap: "xs2akgl",
          width: "xh8yej3",
          $$css: !0,
        },
        nameSpacing: { marginTop: "x1de0gy", $$css: !0 },
        nameContainer: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          minWidth: "xeuugli",
          $$css: !0,
        },
        nameContainerTruncate: {
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        textAlignStart: { textAlign: "x1yc453h", $$css: !0 },
        textAlignCenter: { textAlign: "x2b8uid", $$css: !0 },
        textAlignEnd: { textAlign: "xp4054r", $$css: !0 },
        profilePicContainer: { position: "x1n2onr6", $$css: !0 },
        waveformOverlay: {
          position: "x10l6tqk",
          bottom: "x134aglq",
          left: "x1nrll8i",
          insetInlineStart: null,
          insetInlineEnd: null,
          transform: "xuuh30",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        sizeAuto: function (t) {
          return [
            g,
            {
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })("max(49px, min(" + (t != null ? t : 0) * 0.2 + "px, 120px))"),
              "--x-height": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })("max(49px, min(" + (t != null ? t : 0) * 0.2 + "px, 120px))"),
            },
          ];
        },
        nameAccentColor: function (t) {
          return [
            { color: t != null ? "x14rh7hd" : t, $$css: !0 },
            { "--x-color": t != null ? t : void 0 },
          ];
        },
      };
    function y(t) {
      var n = o("react-compiler-runtime").c(35),
        a = t.accentColor,
        i = t.animateInDelay,
        l = t.audioLevelType,
        s = t.callStateText,
        c = t.compact,
        g = t.imageSize,
        y = t.nameColorName,
        C = t.nameOverride,
        b = t.participantWids,
        v = t.shouldAnimateIn,
        S = t.showAudioWaveform,
        R = t.showCallStateTextOnly,
        L = t.showTextInfo,
        E = t.stateColorName,
        k = t.textAlign,
        I = t.userId,
        T = t.waveformBarCount,
        D = t.xstyle,
        x = i === void 0 ? 0 : i,
        $ = c === void 0 ? !1 : c,
        P = g === void 0 ? "small" : g,
        N = y === void 0 ? "contentDefault" : y,
        M = v === void 0 ? !1 : v,
        w = S === void 0 ? !1 : S,
        A = R === void 0 ? !1 : R,
        F = L === void 0 ? !0 : L,
        O = E === void 0 ? "contentDeemphasized" : E,
        B = k === void 0 ? "center" : k,
        W = T === void 0 ? 7 : T,
        q = d(r("WAWebVoipUiContext")),
        U = q.uiHeight,
        V = r("useWAWebVoipAudioLevel")(l != null ? l : "peer", I),
        H =
          B === "start"
            ? h.textAlignStart
            : B === "center"
              ? h.textAlignCenter
              : B === "end"
                ? h.textAlignEnd
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        B,
                    );
                  })(),
        G;
      n[0] !== I
        ? ((G =
            I != null
              ? o("WAWebContactCollection").ContactCollection.get(I)
              : null),
          (n[0] = I),
          (n[1] = G))
        : (G = n[1]);
      var z = G,
        j;
      n[2] !== P
        ? ((j =
            P === "small"
              ? 1
              : P === "auto"
                ? 1.25
                : P === "large"
                  ? 2
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          P,
                      );
                    })()),
          (n[2] = P),
          (n[3] = j))
        : (j = n[3]);
      var K = j,
        Q = p(null),
        X,
        Y;
      (n[4] !== x || n[5] !== M
        ? ((X = function () {
            if (M && Q.current) {
              var e = Q.current;
              ((e.style.opacity = "0"),
                (e.style.transform = "scale(" + f + ")"),
                window.requestAnimationFrame(function () {
                  r("WAWebVelocityAnimate")(
                    e,
                    { opacity: [1, 0], scale: [1, f] },
                    { duration: _, easing: "easeOutQuart", delay: x },
                  );
                }));
            }
          }),
          (Y = [M, x]),
          (n[4] = x),
          (n[5] = M),
          (n[6] = X),
          (n[7] = Y))
        : ((X = n[6]), (Y = n[7])),
        m(X, Y));
      var J;
      n[8] !== P
        ? ((J =
            P === "small"
              ? 48
              : P === "large"
                ? 110
                : P === "auto"
                  ? null
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          P,
                      );
                    })()),
          (n[8] = P),
          (n[9] = J))
        : (J = n[9]);
      var Z = J,
        ee;
      n[10] !== P
        ? ((ee =
            P === "small"
              ? o("WAWebDetailImage.react").DetailImageQuality.Low
              : P === "large" || P === "auto"
                ? o("WAWebDetailImage.react").DetailImageQuality.High
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        P,
                    );
                  })()),
          (n[10] = P),
          (n[11] = ee))
        : (ee = n[11]);
      var te = ee,
        ne;
      e: {
        if (A) {
          ne = null;
          break e;
        }
        if (b != null && b.length > 0) {
          var re;
          n[12] !== P
            ? ((re =
                P === "small"
                  ? 48
                  : P === "large"
                    ? 110
                    : P === "auto"
                      ? 120
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              P,
                          );
                        })()),
              (n[12] = P),
              (n[13] = re))
            : (re = n[13]);
          var oe = re,
            ae;
          (n[14] !== oe || n[15] !== b
            ? ((ae = u.jsx(r("WAWebMultiParticipantCallImage.react"), {
                participantWids: b,
                size: oe,
              })),
              (n[14] = oe),
              (n[15] = b),
              (n[16] = ae))
            : (ae = n[16]),
            (ne = ae));
          break e;
        }
        if (I != null) {
          var ie = P === "auto",
            le;
          n[17] !== P || n[18] !== U
            ? ((le = P === "auto" && h.sizeAuto(U)),
              (n[17] = P),
              (n[18] = U),
              (n[19] = le))
            : (le = n[19]);
          var se;
          (n[20] !== Z ||
          n[21] !== te ||
          n[22] !== ie ||
          n[23] !== le ||
          n[24] !== I
            ? ((se = u.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: I,
                size: Z,
                quality: te,
                customDimensionsStyle: ie,
                waitIdle: !0,
                xstyle: le,
              })),
              (n[20] = Z),
              (n[21] = te),
              (n[22] = ie),
              (n[23] = le),
              (n[24] = I),
              (n[25] = se))
            : (se = n[25]),
            (ne = se));
          break e;
        }
        ne = null;
      }
      var ue = ne,
        ce = F && (z != null || A || C != null || (b != null && b.length > 0)),
        de = a != null ? "Body1Emphasized" : "Body1",
        me;
      n[26] !== a || n[27] !== z || n[28] !== N || n[29] !== C || n[30] !== de
        ? ((me = function (n) {
            return C != null
              ? u.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: n,
                  testid: void 0,
                  children: u.jsx(r("WDSText.react"), {
                    type: de,
                    colorName: N,
                    selectable: !1,
                    maxLines: 1,
                    children:
                      a != null
                        ? u.jsx(
                            "span",
                            babelHelpers.extends(
                              {},
                              (e || (e = r("stylex"))).props(
                                h.nameAccentColor(a),
                              ),
                              { children: C },
                            ),
                          )
                        : C,
                  }),
                })
              : z != null
                ? u.jsx(o("WAWebFlex.react").FlexItem, {
                    xstyle: n,
                    testid: void 0,
                    children: u.jsx(r("WDSText.react"), {
                      type: de,
                      colorName: N,
                      selectable: !1,
                      maxLines: 1,
                      children:
                        a != null
                          ? u.jsx(
                              "span",
                              babelHelpers.extends(
                                {},
                                (e || (e = r("stylex"))).props(
                                  h.nameAccentColor(a),
                                ),
                                {
                                  children: u.jsx(o("WAWebName.react").Name, {
                                    contact: z,
                                  }),
                                },
                              ),
                            )
                          : u.jsx(o("WAWebName.react").Name, { contact: z }),
                    }),
                  })
                : null;
          }),
          (n[26] = a),
          (n[27] = z),
          (n[28] = N),
          (n[29] = C),
          (n[30] = de),
          (n[31] = me))
        : (me = n[31]);
      var pe = me,
        _e = $
          ? u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: [h.compactContainer, D],
              children: [
                u.jsxs(o("WAWebFlex.react").FlexItem, {
                  xstyle: h.profilePicContainer,
                  children: [
                    ue,
                    w &&
                      u.jsx(o("WAWebFlex.react").FlexItem, {
                        xstyle: h.waveformOverlay,
                        children: u.jsx(r("WAWebVoipAudioWaveform.react"), {
                          accentColor: a,
                          audioLevel: V,
                          barCount: W,
                          isActive: !0,
                          scale: K,
                        }),
                      }),
                  ],
                }),
                ce &&
                  u.jsxs(o("WAWebFlex.react").FlexColumn, {
                    align: "start",
                    justify: "center",
                    grow: 1,
                    shrink: 1,
                    basis: 0,
                    xstyle: [h.nameContainer, h.nameContainerTruncate],
                    children: [
                      pe(h.textAlignStart),
                      s &&
                        u.jsx(o("WAWebFlex.react").FlexItem, {
                          xstyle: h.textAlignStart,
                          children: u.jsx(r("WDSText.react"), {
                            type: "Body2",
                            colorName: O,
                            selectable: !1,
                            maxLines: 1,
                            children: u.jsx("span", {
                              "data-testid": void 0,
                              children: s,
                            }),
                          }),
                        }),
                    ],
                  }),
              ],
            })
          : u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              xstyle: D,
              children: [
                u.jsxs(o("WAWebFlex.react").FlexItem, {
                  xstyle: h.profilePicContainer,
                  children: [
                    ue,
                    w &&
                      u.jsx(o("WAWebFlex.react").FlexItem, {
                        xstyle: h.waveformOverlay,
                        children: u.jsx(r("WAWebVoipAudioWaveform.react"), {
                          accentColor: a,
                          audioLevel: V,
                          barCount: W,
                          isActive: !0,
                          scale: K,
                        }),
                      }),
                  ],
                }),
                ce &&
                  u.jsxs(u.Fragment, {
                    children: [
                      pe([h.nameSpacing, h.nameContainer, H]),
                      s &&
                        u.jsx(o("WAWebFlex.react").FlexItem, {
                          xstyle: H,
                          children: u.jsx(r("WDSText.react"), {
                            type: "Body2",
                            colorName: O,
                            selectable: !1,
                            children: u.jsx("span", {
                              "data-testid": void 0,
                              children: s,
                            }),
                          }),
                        }),
                    ],
                  }),
              ],
            }),
        fe;
      n[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((fe = { className: "xh8yej3" }), (n[32] = fe))
        : (fe = n[32]);
      var ge;
      return (
        n[33] !== _e
          ? ((ge = u.jsx(
              "div",
              babelHelpers.extends({ ref: Q }, fe, { children: _e }),
            )),
            (n[33] = _e),
            (n[34] = ge))
          : (ge = n[34]),
        ge
      );
    }
    l.default = y;
  },
  98,
);
