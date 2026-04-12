__d(
  "WAWebPttAudioPlayer.react",
  [
    "fbt",
    "WAAbortError",
    "WAWebAccessibility.react",
    "WAWebAppTracker",
    "WAWebClock",
    "WAWebDisplayType",
    "WAWebDocStateControls.react",
    "WAWebEventsWaitForEvent",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10nFilesize",
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebNoop",
    "WAWebPttGetDurationFromMediaOrProtobuf",
    "WAWebPttGetSafeDuration",
    "WAWebPttMessageSeekBar",
    "WAWebPttMessageWaveform.react",
    "WAWebPttMsgAudioStore",
    "WAWebPttPrefs",
    "WAWebUA",
    "WDSButton.react",
    "WDSIconIcPauseFilled.react",
    "WDSIconIcPlayArrowFilled.react",
    "asyncToGeneratorRuntime",
    "promiseDone",
    "react",
    "useWAWebAnimationFrames",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebMsgValues",
    "useWAWebOnUnmount",
    "useWAWebSendViewCount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useImperativeHandle,
      _ = d.useRef,
      f = d.useState,
      g = {
        button: {
          position: "x1n2onr6",
          display: "x1lliihq",
          width: "x1691je0",
          height: "x90ne7k",
          color: "x1sj5et5",
          $$css: !0,
        },
        incoming: { color: "xomj9j4", $$css: !0 },
        outgoing: { color: "x2eip5m", $$css: !0 },
      };
    function h(t) {
      var a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        u = l.displayType,
        d = l.enableKbSeekSpeedChange,
        h = d === void 0 ? !1 : d,
        y = l.mediaData,
        S = l.msg,
        R = l.outgoingMsg,
        L = l.played,
        E = o("useWAWebMsgValues").useMsgValues(S.id, [
          o("WAWebMsgGetters").getId,
          o("WAWebFrontendMsgGetters").getAsPttLike,
          o("WAWebFrontendMsgGetters").getAsPtt,
        ]),
        k = E[0],
        I = E[1],
        T = E[2],
        D = o("useWAWebModelValues").useModelValues(
          (a = l.pttPrefs) != null ? a : o("WAWebPttPrefs").PttPrefs,
          ["playbackRate"],
        ),
        x = D.playbackRate,
        $ = o("useWAWebSendViewCount").usePlaybackSendViewCount(l.msg.id, {
          mediaData: y,
        }),
        P = _(x),
        N = _(0),
        M = _(null),
        w = f(function () {
          return o("WAWebPttMsgAudioStore").MsgAudioStore.acquireAudio(S);
        }),
        A = w[0],
        F = w[1],
        O = f(S),
        B = O[0],
        W = O[1];
      B !== S &&
        (W(S),
        F(function (e) {
          var t = o("WAWebPttMsgAudioStore").MsgAudioStore.acquireAudio(S);
          return (e.dispose(), t);
        }));
      var q = A.audio,
        U = A.pttPlaybackLogger,
        V = f(function () {
          return o(
            "WAWebPttGetDurationFromMediaOrProtobuf",
          ).getDurationFromMediaOrProtobuf(q, y);
        }),
        H = V[0],
        G = V[1],
        z = f(!q.paused),
        j = z[0],
        K = z[1],
        Q = f(null),
        X = Q[0],
        Y = Q[1],
        J = f(H > 0 ? q.currentTime / H : 0),
        Z = J[0],
        ee = J[1],
        te = function (t, n) {
          ee(n > 0 ? t / n : 0);
        },
        ne = _(!1),
        re = function () {
          return Z * H;
        },
        oe = function () {
          if (!ne.current) {
            var e = q.currentTime;
            $(e);
            var t = re();
            e !== t && te(e, H);
          }
        };
      (r("useWAWebAnimationFrames")(oe, { active: j }),
        r("useWAWebOnUnmount")(function () {
          (o("WAWebPttPrefs").PttPrefs.outOfChatPlayerMessage ||
            (U.commit(!0), q.pause()),
            q.paused && o("WAWebPttPrefs").PttPrefs.clearOutOfChatMessage(S),
            A.dispose());
        }));
      var ae = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (!ne.current) {
              ne.current = !0;
              var e = I == null ? 1 : x;
              ((q.playbackRate = e), (q.defaultPlaybackRate = e));
              var t = o("WAWebPttGetSafeDuration").getSafeDuration(q);
              if (t == null) {
                var n = r("WAWebEventsWaitForEvent")(q, "durationchange");
                (q.load(),
                  yield n,
                  (t = o(
                    "WAWebPttGetDurationFromMediaOrProtobuf",
                  ).getDurationFromMediaOrProtobuf(q, y)));
              }
              ((q.currentTime = Z * t),
                q.play().catch(o("WAAbortError").catchAbort(r("WAWebNoop"))),
                (ne.current = !1));
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        ie = function () {
          (M.current && (N.current = M.current.getBoundingClientRect().top),
            j ? q.pause() : r("promiseDone")(ae()));
        },
        le = function () {
          (K(!q.paused),
            o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.PlayPTT,
            ));
        },
        se = function () {
          return H != null
            ? H
            : o("WAWebPttGetDurationFromMediaOrProtobuf").getDurationFromProto(
                y,
              );
        },
        ue = function () {
          var e = o("WAWebPttGetSafeDuration").getSafeDuration(q),
            t = se();
          e != null && e !== t && G(e);
        },
        ce = function (t) {
          Y(t);
        },
        de = function (t) {
          var e = q.duration,
            n = t === e && !j ? 0 : t;
          (te(n, H), (q.currentTime = n), Y(null));
        };
      m(
        function () {
          var e = P.current;
          x !== e &&
            ((q.playbackRate = x),
            (q.defaultPlaybackRate = x),
            (P.current = x));
        },
        [q, x],
      );
      var me = function () {
          (o("WAWebPttPrefs").PttPrefs.clearOutOfChatMessage(),
            K(!q.paused),
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.PlayPTT,
            ));
        },
        pe = function () {
          ((q.currentTime = 0),
            q.load(),
            oe(),
            o("WAWebPttPrefs").PttPrefs.clearOutOfChatMessage(),
            K(!q.paused),
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.PlayPTT,
            ));
        };
      (o("useWAWebListener").useListener(q, "playing", le),
        o("useWAWebListener").useListener(q, "pause", me),
        o("useWAWebListener").useListener(q, "ended", pe),
        o("useWAWebListener").useListener(q, "timeupdate", oe),
        o("useWAWebListener").useListener(q, "durationchange", ue));
      var _e = function (t) {
        (t.preventDefault(), ie());
      };
      p(i, function () {
        return { handleKeyActivation: _e };
      });
      var fe = r(
          j ? "WDSIconIcPauseFilled.react" : "WDSIconIcPlayArrowFilled.react",
        ),
        ge = j
          ? s._(/*BTDS*/ "Pause voice message")
          : s._(/*BTDS*/ "Play voice message"),
        he = c.jsx(r("WDSButton.react"), {
          Icon: fe,
          xstyle: [g.button, R ? g.outgoing : g.incoming],
          onPress: ie,
          "aria-label": ge,
          variant: "borderless",
          size: "small",
          testid: void 0,
        }),
        ye = function (t) {
          return !(
            h !== !0 ||
            (o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC &&
              t.metaKey !== !0) ||
            (o("WAWebUA").UA.os !== o("WAWebUA").OS_TYPE.MAC &&
              t.ctrlKey !== !0)
          );
        },
        Ce = function (t) {
          var e = t.direction,
            n = t.e;
          ye(n) &&
            (e === "left"
              ? o("WAWebPttPrefs").PttPrefs.decreasePlaybackRateFor(k)
              : o("WAWebPttPrefs").PttPrefs.increasePlaybackRateFor(k));
        },
        be = {
          "ctrl+left": function (t) {
            return Ce({ e: t, direction: "left" });
          },
          "ctrl+right": function (t) {
            return Ce({ e: t, direction: "right" });
          },
          "meta+left": function (t) {
            return Ce({ e: t, direction: "left" });
          },
          "meta+right": function (t) {
            return Ce({ e: t, direction: "right" });
          },
        },
        ve = c.jsx("div", { ref: M, className: "x10l6tqk x13vifvy xu96u03" });
      return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: h ? be : {},
        tabIndex: -1,
        children: c.jsxs(b, {
          button: he,
          played: L,
          outgoingMsg: R,
          displayType: u,
          msg: T,
          children: [
            ve,
            c.jsx(C, {
              duration: j
                ? re()
                : o(
                    "WAWebPttGetDurationFromMediaOrProtobuf",
                  ).getDurationFromProto(y),
              seekingTime: X,
            }),
            c.jsx(v, {
              msg: S,
              currentTime: re(),
              duration: H,
              onSeek: ce,
              onSeekEnd: de,
              outgoing: R,
              played: L != null ? L : !1,
              waveform: y.waveform,
            }),
          ],
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    var y = h;
    function C(e) {
      var t = e.duration,
        n = e.seekingTime,
        r = n != null ? n : t;
      return r == null
        ? null
        : c.jsx("div", {
            className: "x10l6tqk x1fesggd xu96u03 x1ncwhqj x152skdk xljy9j3",
            "aria-hidden": !0,
            children: o("WAWebClock").Clock.durationStr(r),
          });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t,
        n,
        a,
        i =
          e.spinner === !0 && e.button == null
            ? c.jsx("button", {
                className: "x1n2onr6 x1lliihq x1691je0 x90ne7k x1sj5et5",
                onClick: e.action,
                "data-testid": void 0,
                "aria-label": e.ariaLabel,
                children: c.jsx("div", {
                  className: "x10l6tqk x13vifvy xu96u03",
                  children: c.jsx(o("WAWebDocStateControls.react").Pending, {
                    outgoingMsg: e.outgoingMsg,
                    canCancel: e.canCancel,
                  }),
                }),
              })
            : null,
        l =
          e.icon != null && e.button == null && e.spinner !== !0
            ? c.jsx("button", {
                className: "x1n2onr6 x1lliihq x1691je0 x90ne7k x1sj5et5",
                onClick: e.action,
                "aria-label": e.ariaLabel,
                children: e.icon,
              })
            : null,
        u =
          e.displayType === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS ||
          e.displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY,
        d = e.fileSize,
        m =
          d != null && d !== 0
            ? c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: {
                      className:
                        "x10l6tqk x1fesggd xu96u03 x1ncwhqj x152skdk xljy9j3",
                    },
                    1: {
                      className:
                        "x10l6tqk x1fesggd xu96u03 x1ncwhqj x152skdk xljy9j3 x1cxzzos",
                    },
                  }[!!u << 0],
                  { children: o("WAWebL10nFilesize").getL10nFilesize(d) },
                ),
              )
            : null;
      return c.jsxs("div", {
        className: "x78zum5 x6s0dn4 xzt5al7 x1nbhmlj",
        children: [
          c.jsxs("div", {
            className:
              "x1n2onr6 x1lliihq x1okw0bk x1691je0 x90ne7k x1y332i5 x14mko6t",
            children: [e.button, i, l],
          }),
          c.jsxs("div", {
            className: "x1n2onr6 x98rzlu",
            children: [
              c.jsx(o("WAWebAccessibility.react").InvisibleLabel, {
                children: s._(/*BTDS*/ "Voice message"),
              }),
              (t = e.children) != null
                ? t
                : c.jsx(v, {
                    msg: e.msg,
                    currentTime: 0,
                    duration: 100,
                    onSeek: r("WAWebNoop"),
                    onSeekEnd: r("WAWebNoop"),
                    outgoing: e.outgoingMsg,
                    played: (n = e.played) != null ? n : !1,
                    waveform:
                      (a = e.msg) == null ? void 0 : a.mediaData.waveform,
                    disabled: !0,
                  }),
              m,
            ],
          }),
        ],
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.currentTime,
        n = e.disabled,
        a = e.duration,
        i = e.msg,
        l = e.onSeek,
        s = e.onSeekEnd,
        u = e.outgoing,
        d = e.played,
        m = e.waveform,
        p = o("useWAWebMsgValues").useOptionalMsgValues(
          i == null ? void 0 : i.id,
          [
            o("WAWebFrontendMsgGetters").getAsPttLike,
            o("WAWebMsgGetters").getId,
          ],
        ),
        _ = !!(p != null && p[0]),
        f =
          _ ||
          o(
            "WAWebNewsletterGatingUtils",
          ).isAudioFileWaveformDisplayInNewslettersEnabled();
      return f && m != null
        ? c.jsx(r("WAWebPttMessageWaveform.react"), {
            currentTime: t,
            duration: a,
            onSeek: l,
            onSeekEnd: s,
            outgoing: u,
            played: d,
            waveform: m,
            disabled: n,
            skipThumb: n,
          })
        : c.jsx(r("WAWebPttMessageSeekBar"), {
            currentTime: t,
            duration: a,
            onSeek: l,
            onCommit: s,
            outgoing: u,
            played: d,
            disabled: n,
          });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"),
      (l.WrappedAudioPlayer = y),
      (l.AudioPlayerFrame = b));
  },
  226,
);
