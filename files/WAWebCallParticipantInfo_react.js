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
      var n = t.accentColor,
        a = t.animateInDelay,
        i = a === void 0 ? 0 : a,
        l = t.audioLevelType,
        s = t.callStateText,
        c = t.compact,
        g = c === void 0 ? !1 : c,
        y = t.imageSize,
        C = y === void 0 ? "small" : y,
        b = t.nameColorName,
        v = b === void 0 ? "contentDefault" : b,
        S = t.nameOverride,
        R = t.participantWids,
        L = t.shouldAnimateIn,
        E = L === void 0 ? !1 : L,
        k = t.showAudioWaveform,
        I = k === void 0 ? !1 : k,
        T = t.showCallStateTextOnly,
        D = T === void 0 ? !1 : T,
        x = t.showTextInfo,
        $ = x === void 0 ? !0 : x,
        P = t.stateColorName,
        N = P === void 0 ? "contentDeemphasized" : P,
        M = t.textAlign,
        w = M === void 0 ? "center" : M,
        A = t.userId,
        F = t.waveformBarCount,
        O = F === void 0 ? 7 : F,
        B = t.xstyle,
        W = d(r("WAWebVoipUiContext")),
        q = W.uiHeight,
        U = r("useWAWebVoipAudioLevel")(l != null ? l : "peer", A),
        V =
          w === "start"
            ? h.textAlignStart
            : w === "center"
              ? h.textAlignCenter
              : w === "end"
                ? h.textAlignEnd
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        w,
                    );
                  })(),
        H =
          A != null
            ? o("WAWebContactCollection").ContactCollection.get(A)
            : null,
        G =
          C === "small"
            ? 1
            : C === "auto"
              ? 1.25
              : C === "large"
                ? 2
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        C,
                    );
                  })(),
        z = p(null);
      m(
        function () {
          if (E && z.current) {
            var e = z.current;
            ((e.style.opacity = "0"),
              (e.style.transform = "scale(" + f + ")"),
              window.requestAnimationFrame(function () {
                r("WAWebVelocityAnimate")(
                  e,
                  { opacity: [1, 0], scale: [1, f] },
                  { duration: _, easing: "easeOutQuart", delay: i },
                );
              }));
          }
        },
        [E, i],
      );
      var j =
          C === "small"
            ? 48
            : C === "large"
              ? 110
              : C === "auto"
                ? null
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        C,
                    );
                  })(),
        K =
          C === "small"
            ? o("WAWebDetailImage.react").DetailImageQuality.Low
            : C === "large" || C === "auto"
              ? o("WAWebDetailImage.react").DetailImageQuality.High
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      C,
                  );
                })(),
        Q = (function () {
          if (D) return null;
          if (R != null && R.length > 0) {
            var e =
              C === "small"
                ? 48
                : C === "large"
                  ? 110
                  : C === "auto"
                    ? 120
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            C,
                        );
                      })();
            return u.jsx(r("WAWebMultiParticipantCallImage.react"), {
              participantWids: R,
              size: e,
            });
          }
          return A != null
            ? u.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: A,
                size: j,
                quality: K,
                customDimensionsStyle: C === "auto",
                waitIdle: !0,
                xstyle: C === "auto" && h.sizeAuto(q),
              })
            : null;
        })(),
        X = $ && (H != null || D || S != null || (R != null && R.length > 0)),
        Y = n != null ? "Body1Emphasized" : "Body1",
        J = function (a) {
          return S != null
            ? u.jsx(o("WAWebFlex.react").FlexItem, {
                xstyle: a,
                testid: void 0,
                children: u.jsx(r("WDSText.react"), {
                  type: Y,
                  colorName: v,
                  selectable: !1,
                  maxLines: 1,
                  children:
                    n != null
                      ? u.jsx(
                          "span",
                          babelHelpers.extends(
                            {},
                            (e || (e = r("stylex"))).props(
                              h.nameAccentColor(n),
                            ),
                            { children: S },
                          ),
                        )
                      : S,
                }),
              })
            : H != null
              ? u.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: a,
                  testid: void 0,
                  children: u.jsx(r("WDSText.react"), {
                    type: Y,
                    colorName: v,
                    selectable: !1,
                    maxLines: 1,
                    children:
                      n != null
                        ? u.jsx(
                            "span",
                            babelHelpers.extends(
                              {},
                              (e || (e = r("stylex"))).props(
                                h.nameAccentColor(n),
                              ),
                              {
                                children: u.jsx(o("WAWebName.react").Name, {
                                  contact: H,
                                }),
                              },
                            ),
                          )
                        : u.jsx(o("WAWebName.react").Name, { contact: H }),
                  }),
                })
              : null;
        },
        Z = g
          ? u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: [h.compactContainer, B],
              children: [
                u.jsxs(o("WAWebFlex.react").FlexItem, {
                  xstyle: h.profilePicContainer,
                  children: [
                    Q,
                    I &&
                      u.jsx(o("WAWebFlex.react").FlexItem, {
                        xstyle: h.waveformOverlay,
                        children: u.jsx(r("WAWebVoipAudioWaveform.react"), {
                          accentColor: n,
                          audioLevel: U,
                          barCount: O,
                          isActive: !0,
                          scale: G,
                        }),
                      }),
                  ],
                }),
                X &&
                  u.jsxs(o("WAWebFlex.react").FlexColumn, {
                    align: "start",
                    justify: "center",
                    grow: 1,
                    shrink: 1,
                    basis: 0,
                    xstyle: [h.nameContainer, h.nameContainerTruncate],
                    children: [
                      J(h.textAlignStart),
                      s &&
                        u.jsx(o("WAWebFlex.react").FlexItem, {
                          xstyle: h.textAlignStart,
                          children: u.jsx(r("WDSText.react"), {
                            type: "Body2",
                            colorName: N,
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
              xstyle: B,
              children: [
                u.jsxs(o("WAWebFlex.react").FlexItem, {
                  xstyle: h.profilePicContainer,
                  children: [
                    Q,
                    I &&
                      u.jsx(o("WAWebFlex.react").FlexItem, {
                        xstyle: h.waveformOverlay,
                        children: u.jsx(r("WAWebVoipAudioWaveform.react"), {
                          accentColor: n,
                          audioLevel: U,
                          barCount: O,
                          isActive: !0,
                          scale: G,
                        }),
                      }),
                  ],
                }),
                X &&
                  u.jsxs(u.Fragment, {
                    children: [
                      J([h.nameSpacing, h.nameContainer, V]),
                      s &&
                        u.jsx(o("WAWebFlex.react").FlexItem, {
                          xstyle: V,
                          children: u.jsx(r("WDSText.react"), {
                            type: "Body2",
                            colorName: N,
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
            });
      return u.jsx("div", { ref: z, className: "xh8yej3", children: Z });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  98,
);
