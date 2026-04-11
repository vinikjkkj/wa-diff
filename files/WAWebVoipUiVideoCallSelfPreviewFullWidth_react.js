__d(
  "WAWebVoipUiVideoCallSelfPreviewFullWidth.react",
  [
    "WALogger",
    "WAWebCallParticipantInfo.react",
    "WAWebUserPrefsMeUser",
    "WAWebVoipCameraUnavailableBanner.react",
    "WAWebVoipDocPipSelfPreviewNotice.react",
    "WAWebVoipMicOffIndicator.react",
    "WAWebVoipStackInterface",
    "WAWebVoipUiPopoutWindowContext",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoRendererRegistry",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useContext,
      f = m.useEffect,
      g = m.useRef,
      h = m.useState,
      y = 16 / 9,
      C = {
        fullWidthContainer: {
          position: "x1n2onr6",
          width: "x1m22und",
          marginInlineStart: "xvc5jky",
          marginInlineEnd: "x11t971q",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        fullWidthContainerAspectRatio: function (t) {
          return [
            {
              aspectRatio: String(t) != null ? "x10y9f9r" : String(t),
              $$css: !0,
            },
            { "--x-aspectRatio": String(t) != null ? String(t) : void 0 },
          ];
        },
      };
    function b(t) {
      var a = t.accentColor,
        i = t.cameraDenied,
        l = i === void 0 ? !1 : i,
        c = t.isIncoming,
        m = c === void 0 ? !1 : c,
        b = t.isLobbyView,
        v = b === void 0 ? !1 : b,
        S = t.isSelfScreenSharing,
        R = t.isVideoMuted,
        L = t.nameOverride,
        E = t.noCameraDevice,
        k = E === void 0 ? !1 : E,
        I = t.preserveVideoAspectRatio,
        T = I === void 0 ? !1 : I,
        D = t.selfMicMuted,
        x = _(r("WAWebVoipUiPopoutWindowContext")),
        $ = g(null),
        P = g(null),
        N = h(!1),
        M = N[0],
        w = N[1],
        A = h(y),
        F = A[0],
        O = A[1],
        B = p(
          function (e) {
            if (!(!e || !x.isContextInPopoutWindow)) {
              var t = e.querySelector("img");
              t != null &&
                t.complete &&
                t.style.visibility === "hidden" &&
                (t.style.visibility = "visible");
            }
          },
          [x.isContextInPopoutWindow],
        );
      f(function () {
        var e = function (t, n, r) {
            if (
              t === o("WAWebVoipVideoRendererInterface").selfPreviewJid &&
              n > 0 &&
              r > 0
            ) {
              var e = n / r;
              O(e);
            }
          },
          t = o(
            "WAWebVoipVideoRendererRegistry",
          ).videoRendererRegistry.addVideoDimensionChangeListener(e);
        return t;
      }, []);
      var W = p(
        function (e) {
          if (e)
            ((P.current = e),
              o(
                "WAWebVoipVideoRendererRegistry",
              ).videoRendererRegistry.registerVideoCanvas(
                e,
                x.isContextInPopoutWindow,
              ),
              o(
                "WAWebVoipVideoRendererRegistry",
              ).videoRendererRegistry.assignJidToCanvas(
                o("WAWebVoipVideoRendererInterface").selfPreviewJid,
                e,
                !0,
              ),
              w(!0));
          else {
            var t = P.current;
            (t &&
              (o(
                "WAWebVoipVideoRendererRegistry",
              ).videoRendererRegistry.unregisterVideoCanvas(t),
              (P.current = null)),
              w(!1));
          }
        },
        [x.isContextInPopoutWindow],
      );
      f(
        function () {
          var e = P.current;
          e &&
            (o(
              "WAWebVoipVideoRendererRegistry",
            ).videoRendererRegistry.unassignJidFromCanvas(
              o("WAWebVoipVideoRendererInterface").selfPreviewJid,
              e,
            ),
            o(
              "WAWebVoipVideoRendererRegistry",
            ).videoRendererRegistry.assignJidToCanvas(
              o("WAWebVoipVideoRendererInterface").selfPreviewJid,
              e,
              !S,
            ));
        },
        [S],
      );
      var q = g(null),
        U = g(null),
        V = g(null),
        H = g(F);
      f(
        function () {
          H.current = F;
        },
        [F],
      );
      var G = p(
        function (e) {
          (U.current != null && window.cancelAnimationFrame(U.current),
            (U.current = window.requestAnimationFrame(function () {
              U.current = null;
              var t = P.current;
              for (var n of e)
                if (x.isContextInPopoutWindow && n.target === $.current) {
                  var r = n.contentRect.width,
                    a = n.contentRect.height;
                  if (r > 0 && a > 0) {
                    var i = 56,
                      l = 48,
                      s = Math.max(0, a - i - l),
                      u = H.current,
                      c = r / s,
                      d = void 0,
                      m = void 0;
                    c > u
                      ? ((m = s), (d = s * u))
                      : ((d = r), (m = r / u), m > s && ((m = s), (d = s * u)));
                    var p = Math.floor(d),
                      _ = Math.floor(m);
                    if (t) {
                      ((t.style.width = p + "px"), (t.style.height = _ + "px"));
                      var f = 4096,
                        g = Math.min(
                          window.devicePixelRatio,
                          f / Math.max(d, m),
                        ),
                        h = Math.trunc(d * g),
                        y = Math.trunc(m * g);
                      o(
                        "WAWebVoipVideoRendererRegistry",
                      ).videoRendererRegistry.onCanvasResize(t, h, y);
                    }
                    var C = q.current;
                    C &&
                      ((C.style.width = p + "px"), (C.style.height = _ + "px"));
                  }
                } else if (t && n.target === t) {
                  var b = n.contentRect,
                    v = Math.trunc(b.width * window.devicePixelRatio),
                    S = Math.trunc(b.height * window.devicePixelRatio);
                  v > 0 &&
                    S > 0 &&
                    o(
                      "WAWebVoipVideoRendererRegistry",
                    ).videoRendererRegistry.onCanvasResize(t, v, S);
                }
            })));
        },
        [x.isContextInPopoutWindow],
      );
      (f(
        function () {
          var e = P.current,
            t = $.current;
          V.current || (V.current = new ResizeObserver(G));
          var n = V.current;
          return (
            x.isContextInPopoutWindow && t ? n.observe(t) : e && n.observe(e),
            function () {
              (t && n.unobserve(t), e && n.unobserve(e));
            }
          );
        },
        [G, M, x.isContextInPopoutWindow],
      ),
        f(function () {
          return function () {
            (U.current != null && window.cancelAnimationFrame(U.current),
              V.current && V.current.disconnect());
          };
        }, []),
        f(
          function () {
            M &&
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  var t = yield o(
                    "WAWebVoipStackInterface",
                  ).getVoipStackInterface();
                  if ((t == null ? void 0 : t.type) !== "web") return;
                  var n = "static-call-id",
                    r = "self-preview-jid",
                    a = yield t.startVideoPreview(n, r);
                  a === 0 ||
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[voip] fullWidth: startVideoPreview failed ",
                          "",
                        ])),
                      a,
                    );
                } catch (e) {
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ui: fullWidthSelfPreview: startVideoPreview error: ",
                        "",
                      ])),
                    e,
                  );
                }
              })();
          },
          [M],
        ));
      var z = R && !m && !T ? 1 : F,
        j = x.isContextInPopoutWindow;
      return j
        ? d.jsx(
            o("WAWebVoipDocPipSelfPreviewNotice.react")
              .WAWebVoipDocPipSelfPreviewNotice,
            {},
          )
        : d.jsxs(
            "div",
            babelHelpers.extends(
              { ref: $ },
              (u || (u = r("stylex"))).props([
                C.fullWidthContainer,
                C.fullWidthContainerAspectRatio(z),
              ]),
              {
                children: [
                  d.jsx("canvas", {
                    ref: W,
                    className:
                      "xh8yej3 x5yr21d xl1xv1r x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a",
                  }),
                  R &&
                    d.jsx("div", {
                      ref: function (t) {
                        ((q.current = t), B(t));
                      },
                      role: "status",
                      "aria-label": "Video is paused",
                      className:
                        "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1jeq31z x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x6s0dn4 xl56j7k x47corl",
                      children: d.jsx(r("WAWebCallParticipantInfo.react"), {
                        accentColor: a,
                        userId: o(
                          "WAWebUserPrefsMeUser",
                        ).getMePnUserOrThrow_DO_NOT_USE(),
                        imageSize: v ? "auto" : "small",
                        nameOverride: L,
                        showTextInfo: L != null,
                        showAudioWaveform: v && !D,
                        audioLevelType: v ? "self" : void 0,
                        waveformBarCount: v ? 5 : void 0,
                        textAlign: "center",
                      }),
                    }),
                  (l || k) &&
                    d.jsx(r("WAWebVoipCameraUnavailableBanner.react"), {
                      noCameraDevice: k,
                    }),
                  D &&
                    d.jsx("div", {
                      className: "x10l6tqk x13vifvy x1o0tod xcegukh",
                      children: d.jsx(r("WAWebVoipMicOffIndicator.react"), {}),
                    }),
                ],
              },
            ),
          );
    }
    ((b.displayName = b.name + " [from " + i.id + "]"),
      (l.WAWebVoipUiVideoCallSelfPreviewFullWidth = b));
  },
  98,
);
