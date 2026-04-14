__d(
  "WAWebPttComposer.react",
  [
    "$InternalEnum",
    "WANullthrows",
    "WAWebAttachMediaViewOnceInChat.react",
    "WAWebChatGetters",
    "WAWebClock",
    "WAWebCmd",
    "WAWebFrontendChatGetters",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterWamoSubMessageType",
    "WAWebNewsletterWamoSubMessageTypePopup.react",
    "WAWebNewsletterWamoSubUtils",
    "WAWebPttCancelButton.react",
    "WAWebPttComposerRecordingSession",
    "WAWebPttComposerRecordingSessionGetters",
    "WAWebPttComposerWaveform.react",
    "WAWebPttMessageUserJourneyLogger",
    "WAWebPttPauseResumeRecordingButton.react",
    "WAWebPttPlayPauseButton.react",
    "WAWebPttSendButton.react",
    "WAWebPttTsExternalLogger",
    "WAWebRecordingSessionStateEnum",
    "WAWebTabOrder",
    "WAWebUserPrefsMeUser",
    "WAWebVelocityTransitionGroup",
    "WAWebViewOnceGatingUtils",
    "asyncToGeneratorRuntime",
    "err",
    "react",
    "useWAWebChatValues",
    "useWAWebEventTargetValue",
    "useWAWebListener",
    "useWAWebOnUnmount",
    "useWAWebPttRecordingSessionValues",
    "useWAWebSetModelValue",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef,
      p = u.useState,
      _ = n("$InternalEnum").Mirrored(["RECORDER", "PREVIEW"]),
      f = { viewOnceButtonSpacing: { marginInlineEnd: "xqf2s3x", $$css: !0 } };
    function g(e) {
      var t,
        a = e.chat,
        i = e.onComplete,
        l = e.recordingSession,
        u = m(),
        g = m(),
        C = p(function () {
          switch (l.recordingState) {
            case o("WAWebRecordingSessionStateEnum").RecordingSessionState
              .PAUSED:
              return _.PREVIEW;
            case o("WAWebRecordingSessionStateEnum").RecordingSessionState
              .RECORDING:
              return _.RECORDER;
            default:
              throw r("err")(
                "Invalid recording session state: " + l.recordingState,
              );
          }
        }),
        b = C[0],
        v = C[1],
        S =
          (t = o("useWAWebChatValues").useOptionalChatValues(a.id, [
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
            o("WAWebFrontendChatGetters").getComposeQuotedMsg,
          ])) != null
            ? t
            : [!1, null, null],
        R = S[0],
        L = S[1],
        E = S[2],
        k = p(null),
        I = k[0],
        T = k[1],
        D = p(function () {
          return b === _.PREVIEW ? l.getAudioForPlayback() : null;
        }),
        x = D[0],
        $ = D[1];
      d(
        function () {
          if (x != null)
            return o("WAWebPttTsExternalLogger").attachPttPlayTimeSpentLogger(
              x.getAudio(),
            );
        },
        [x],
      );
      var P = function () {
          ($(null), x == null || x.dispose());
        },
        N = x == null ? void 0 : x.getAudio(),
        M = m(),
        w = m(),
        A = m(l);
      A.current = l;
      var F = r("useWAWebEventTargetValue")(l, "change:duration", function () {
          return Math.floor(l.duration);
        }),
        O = p(function () {
          return Math.floor((N == null ? void 0 : N.currentTime) || 0);
        }),
        B = O[0],
        W = O[1],
        q = p(function () {
          return ((N == null ? void 0 : N.currentTime) || 0) === 0;
        }),
        U = q[0],
        V = q[1],
        H = function (t) {
          (W(Math.floor(t)), V(t === 0));
        };
      o("useWAWebListener").useListener(N, "timeupdate", function () {
        var e;
        H((e = N == null ? void 0 : N.currentTime) != null ? e : 0);
      });
      var G = p(null),
        z = G[0],
        j = G[1],
        K = o("useWAWebPttRecordingSessionValues").usePttRecordingSessionValues(
          l,
          [
            o("WAWebPttComposerRecordingSessionGetters").getExceedsMinDuration,
            o("WAWebPttComposerRecordingSessionGetters").getIsRecording,
            o("WAWebPttComposerRecordingSessionGetters").getIsViewOnce,
          ],
        ),
        Q = K[0],
        X = K[1],
        Y = K[2],
        J = o("useWAWebSetModelValue").useSetModelValue(l, "isViewOnce"),
        Z = p(Y),
        ee = Z[0],
        te = Z[1],
        ne = function () {
          (te(!1), J(!Y));
        };
      o("useWAWebListener").useListener(
        l,
        "change:recordingState",
        function () {
          (l.recordingState ===
            o("WAWebRecordingSessionStateEnum").RecordingSessionState.STOPPED ||
            l.recordingState ===
              o("WAWebRecordingSessionStateEnum").RecordingSessionState
                .ERROR) &&
            i();
        },
      );
      var re = r("useWAWebEventTargetValue")(N, ["play", "pause"], function () {
          return N != null && !N.paused;
        }),
        oe = h(),
        ae = function () {
          (l.stop(
            o("WAWebPttComposerRecordingSession").RecordingSessionStopReason
              .CANCEL_BUTTON,
          ),
            o(
              "WAWebPttMessageUserJourneyLogger",
            ).PttMessageUserJourneyLogger.delete(a.id, E != null));
        };
      (d(
        function () {
          X &&
            self.setTimeout(function () {
              var e;
              (e = M.current) == null || e.focus();
            }, 100);
        },
        [X],
      ),
        d(
          function () {
            b === _.PREVIEW &&
              (A.current.markDraftPreviewSeen(),
              self.setTimeout(function () {
                var e;
                (e = w.current) == null || e.focus();
              }, 100));
          },
          [b],
        ),
        r("useWAWebOnUnmount")(function () {
          (N == null || N.pause(), P(), l.pause());
        }));
      var ie = function (n) {
          l.send({ isViewOnce: Y, isWamoSub: n, threadId: e.threadId });
        },
        le = function () {
          if (Q) {
            var t = g.current;
            if (
              R &&
              o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(
                L,
              ) &&
              t &&
              o(
                "WAWebNewsletterGatingUtils",
              ).isWamoSubCreatorExperienceSupported()
            ) {
              var n = function (t) {
                ie(
                  t ===
                    o("WAWebNewsletterWamoSubMessageType")
                      .NewsletterWamoSubMessageType.WamoSub,
                );
              };
              T({ popupAnchorEl: t, handleSelect: n });
            } else ie();
            (e.onSend == null || e.onSend(),
              o(
                "WAWebPttMessageUserJourneyLogger",
              ).PttMessageUserJourneyLogger.send(a.id, E != null));
          }
        };
      o("useWAWebListener").useListener(
        l,
        "change:recordingState",
        function () {
          if (
            !o("WAWebPttComposerRecordingSessionGetters").getIsRecording(l) &&
            l.recordingState ===
              o("WAWebRecordingSessionStateEnum").RecordingSessionState.PAUSED
          ) {
            P();
            var e = l.getAudioForPlayback();
            ($(e), H(0), v(_.PREVIEW));
          }
        },
      );
      var se = function () {
          (l.incrementPauseButtonCount(),
            l.pause(),
            o(
              "WAWebPttMessageUserJourneyLogger",
            ).PttMessageUserJourneyLogger.pause(a.id, E != null));
        },
        ue = function () {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (N == null || N.pause(), v(_.RECORDER));
            var e = yield l.resume();
            (e || v(_.PREVIEW),
              o(
                "WAWebPttMessageUserJourneyLogger",
              ).PttMessageUserJourneyLogger.resume(a.id, E != null));
          })();
        },
        ce = function () {
          var e = r("WANullthrows")(N);
          e.paused ? (e.play(), l.incrementDraftPlayCount()) : e.pause();
        };
      (o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "pause_ptt_recording",
        function () {
          var e = b === _.RECORDER ? se : ue;
          e();
        },
      ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "send_ptt_recording",
          le,
        ),
        o("useWAWebListener").useListener(N, "ended", function () {
          r("WANullthrows")(N).load();
        }));
      var de = c(
          function () {
            var e;
            return (e = N == null ? void 0 : N.currentTime) != null ? e : 0;
          },
          [N],
        ),
        me = r("useWAWebStableCallback")(function () {
          return l.getPreciseDuration();
        }),
        pe = r("useWAWebStableCallback")(function () {
          return l.duration;
        }),
        _e = r("useWAWebStableCallback")(function () {
          return l.getLiveWaveformSamples();
        }),
        fe = r("useWAWebStableCallback")(function () {
          return l.getCorrectedWaveformSamples();
        }),
        ge = r("useWAWebStableCallback")(function (e) {
          (H(e),
            j(null),
            (r("WANullthrows")(N).currentTime = e),
            l.incrementDraftSeekCount());
        }),
        he = r("useWAWebStableCallback")(function (e) {
          j(Math.floor(e));
        }),
        ye = s.jsx("div", {
          className: "x78zum5 xqf2s3x",
          children: s.jsx(r("WAWebPttPauseResumeRecordingButton.react"), {
            recording: b === _.RECORDER,
            confirmOnMouseUp: oe,
            tabOrder: o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON,
            onConfirm: b === _.RECORDER ? se : ue,
          }),
        }),
        Ce = s.jsxs("div", {
          className:
            "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x78zum5 x6s0dn4",
          children: [
            s.jsx("div", {
              className:
                "x170jfvy x1fsd2vl x1b0f5k1 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1uvdrpn x14mko6t",
            }),
            s.jsx(y, { time: F }),
            s.jsx("div", {
              className:
                "x78zum5 x1iyjqo2 xs83m0k x1r8uery x1sikpz7 x1sa5p1d x1wbi8v6",
              children: s.jsx(o("WAWebPttComposerWaveform.react").Waveform, {
                location: o("WAWebPttComposerWaveform.react").WaveformLocation
                  .DRAFT_PREVIEW,
                sampleRate: l.getWaveformSampleRate(),
                getSamples: _e,
                getCurrentTime: de,
                getDuration: me,
                live: X,
                mode: o("WAWebPttComposerWaveform.react").WaveformMode.RECORDER,
                onSeek: he,
                onSeekEnd: ge,
                tabIndex: o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON,
              }),
            }),
          ],
        }),
        be =
          o("WAWebViewOnceGatingUtils").isSendingViewOnceV2Enabled() &&
          !a.contact.isEnterprise &&
          !o("WAWebUserPrefsMeUser").isMeAccount(a.contact.id)
            ? s.jsx(r("WAWebAttachMediaViewOnceInChat.react"), {
                chat: a,
                containerXstyle: f.viewOnceButtonSpacing,
                mediaType: o("WAWebMsgType").MSG_TYPE.PTT,
                onChange: ne,
                isOn: Y,
                disabled: !1,
                shouldShowNux: b === _.PREVIEW,
                dataTab: o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON,
                shouldSkipNuxAndToast: ee,
              })
            : null,
        ve = z != null ? z : U ? F : B,
        Se = s.jsxs("div", {
          className:
            "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x78zum5 x6s0dn4 x14mko6t x1y3qizg x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x15unhv1 x1s194ge xvp2sfm x11hqq3w x13tw7jo xbm2e5w xgdig0o xj3boke xzt5al7 x1kukv79 x11ahuha x972fbf x10w94by x1qhh985 x14e42zd",
          children: [
            s.jsx(r("WAWebPttPlayPauseButton.react"), {
              ref: w,
              theme: "compose-box",
              paused: !re,
              tabOrder: o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON,
              onConfirm: ce,
            }),
            s.jsx("div", {
              className:
                "x78zum5 x1iyjqo2 xs83m0k x1r8uery x1sikpz7 xf6vk7d x1hm9lzh",
              children: s.jsx(o("WAWebPttComposerWaveform.react").Waveform, {
                location: o("WAWebPttComposerWaveform.react").WaveformLocation
                  .DRAFT_PREVIEW,
                sampleRate: l.getWaveformSampleRate(),
                getSamples: fe,
                getCurrentTime: de,
                getDuration: pe,
                live: re,
                mode: o("WAWebPttComposerWaveform.react").WaveformMode.PREVIEW,
                onSeek: he,
                onSeekEnd: ge,
                tabIndex: o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON,
              }),
            }),
            s.jsx(y, { time: ve }),
          ],
        }),
        Re = function (t) {
          t.key === "Escape" && (t.stopPropagation(), ae());
        };
      return s.jsxs("div", {
        onKeyDown: Re,
        ref: u,
        className: "x78zum5 x6s0dn4 xh8yej3 x19ygybj",
        tabIndex: 0,
        children: [
          s.jsx(r("WAWebPttCancelButton.react"), {
            ref: M,
            confirmOnMouseUp: oe,
            onConfirm: ae,
            tabOrder: o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON,
          }),
          s.jsx("div", {
            className:
              "x1n2onr6 x78zum5 x1iyjqo2 xs83m0k x1r8uery x6s0dn4 x5yr21d",
            children: s.jsxs(r("WAWebVelocityTransitionGroup"), {
              transitionName: "fade",
              children: [
                b === _.RECORDER ? Ce : null,
                b === _.PREVIEW ? Se : null,
              ],
            }),
          }),
          ye,
          be,
          s.jsx(r("WAWebPttSendButton.react"), {
            ref: g,
            disabled: !Q && !X,
            confirmOnMouseUp: oe,
            onConfirm: le,
            tabOrder: o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON,
          }),
          I != null &&
            s.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
              handleSelect: I.handleSelect,
              popupAnchorEl: I.popupAnchorEl,
              onDismiss: function () {
                return T(null);
              },
            }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      var e = p(!1),
        t = e[0],
        n = e[1],
        r = 250;
      return (
        d(function () {
          var e = self.setTimeout(function () {
              n(!0);
            }, r),
            t = function () {
              (n(!1), o());
            };
          window.addEventListener("mouseup", t);
          var o = function () {
            (window.removeEventListener("mouseup", t), self.clearTimeout(e));
          };
          return o;
        }, []),
        t
      );
    }
    function y(e) {
      var t = e.time;
      return s.jsx("div", {
        className: "x2c5eco xunn93x",
        role: "timer",
        children: o("WAWebClock").Clock.durationStr(t),
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
