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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(5),
        n = e.duration,
        r = e.seekingTime,
        a = r != null ? r : n;
      if (a == null) return null;
      var i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = {
            className: "x10l6tqk x1fesggd xu96u03 x1ncwhqj x152skdk xljy9j3",
          }),
          (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== a
        ? ((l = o("WAWebClock").Clock.durationStr(a)), (t[1] = a), (t[2] = l))
        : (l = t[2]);
      var s;
      return (
        t[3] !== l
          ? ((s = c.jsx(
              "div",
              babelHelpers.extends({}, i, { "aria-hidden": !0, children: l }),
            )),
            (t[3] = l),
            (t[4] = s))
          : (s = t[4]),
        s
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(35),
        n;
      t[0] !== e.action ||
      t[1] !== e.ariaLabel ||
      t[2] !== e.button ||
      t[3] !== e.canCancel ||
      t[4] !== e.outgoingMsg ||
      t[5] !== e.spinner
        ? ((n =
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
              : null),
          (t[0] = e.action),
          (t[1] = e.ariaLabel),
          (t[2] = e.button),
          (t[3] = e.canCancel),
          (t[4] = e.outgoingMsg),
          (t[5] = e.spinner),
          (t[6] = n))
        : (n = t[6]);
      var a = n,
        i;
      t[7] !== e.action ||
      t[8] !== e.ariaLabel ||
      t[9] !== e.button ||
      t[10] !== e.icon ||
      t[11] !== e.spinner
        ? ((i =
            e.icon != null && e.button == null && e.spinner !== !0
              ? c.jsx("button", {
                  className: "x1n2onr6 x1lliihq x1691je0 x90ne7k x1sj5et5",
                  onClick: e.action,
                  "aria-label": e.ariaLabel,
                  children: e.icon,
                })
              : null),
          (t[7] = e.action),
          (t[8] = e.ariaLabel),
          (t[9] = e.button),
          (t[10] = e.icon),
          (t[11] = e.spinner),
          (t[12] = i))
        : (i = t[12]);
      var l = i,
        u =
          e.displayType === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS ||
          e.displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY,
        d = e.fileSize,
        m;
      t[13] !== d || t[14] !== u
        ? ((m =
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
              : null),
          (t[13] = d),
          (t[14] = u),
          (t[15] = m))
        : (m = t[15]);
      var p = m,
        _,
        f;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = { className: "x78zum5 x6s0dn4 xzt5al7 x1nbhmlj" }),
          (f = {
            className:
              "x1n2onr6 x1lliihq x1okw0bk x1691je0 x90ne7k x1y332i5 x14mko6t",
          }),
          (t[16] = _),
          (t[17] = f))
        : ((_ = t[16]), (f = t[17]));
      var g;
      t[18] !== l || t[19] !== e.button || t[20] !== a
        ? ((g = c.jsxs(
            "div",
            babelHelpers.extends({}, f, { children: [e.button, a, l] }),
          )),
          (t[18] = l),
          (t[19] = e.button),
          (t[20] = a),
          (t[21] = g))
        : (g = t[21]);
      var h;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = { className: "x1n2onr6 x98rzlu" }), (t[22] = h))
        : (h = t[22]);
      var y;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = c.jsx(o("WAWebAccessibility.react").InvisibleLabel, {
            children: s._(/*BTDS*/ "Voice message"),
          })),
          (t[23] = y))
        : (y = t[23]);
      var C;
      if (
        t[24] !== e.children ||
        t[25] !== e.msg ||
        t[26] !== e.outgoingMsg ||
        t[27] !== e.played
      ) {
        var b, S, R;
        ((C =
          (b = e.children) != null
            ? b
            : c.jsx(v, {
                msg: e.msg,
                currentTime: 0,
                duration: 100,
                onSeek: r("WAWebNoop"),
                onSeekEnd: r("WAWebNoop"),
                outgoing: e.outgoingMsg,
                played: (S = e.played) != null ? S : !1,
                waveform: (R = e.msg) == null ? void 0 : R.mediaData.waveform,
                disabled: !0,
              })),
          (t[24] = e.children),
          (t[25] = e.msg),
          (t[26] = e.outgoingMsg),
          (t[27] = e.played),
          (t[28] = C));
      } else C = t[28];
      var L;
      t[29] !== p || t[30] !== C
        ? ((L = c.jsxs(
            "div",
            babelHelpers.extends({}, h, { children: [y, C, p] }),
          )),
          (t[29] = p),
          (t[30] = C),
          (t[31] = L))
        : (L = t[31]);
      var E;
      return (
        t[32] !== g || t[33] !== L
          ? ((E = c.jsxs(
              "div",
              babelHelpers.extends({}, _, { children: [g, L] }),
            )),
            (t[32] = g),
            (t[33] = L),
            (t[34] = E))
          : (E = t[34]),
        E
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.currentTime,
        a = e.disabled,
        i = e.duration,
        l = e.msg,
        s = e.onSeek,
        u = e.onSeekEnd,
        d = e.outgoing,
        m = e.played,
        p = e.waveform,
        _;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = [
            o("WAWebFrontendMsgGetters").getAsPttLike,
            o("WAWebMsgGetters").getId,
          ]),
          (t[0] = _))
        : (_ = t[0]);
      var f = o("useWAWebMsgValues").useOptionalMsgValues(
          l == null ? void 0 : l.id,
          _,
        ),
        g = !!(f != null && f[0]),
        h =
          g ||
          o(
            "WAWebNewsletterGatingUtils",
          ).isAudioFileWaveformDisplayInNewslettersEnabled();
      if (h && p != null) {
        var y;
        return (
          t[1] !== n ||
          t[2] !== a ||
          t[3] !== i ||
          t[4] !== s ||
          t[5] !== u ||
          t[6] !== d ||
          t[7] !== m ||
          t[8] !== p
            ? ((y = c.jsx(r("WAWebPttMessageWaveform.react"), {
                currentTime: n,
                duration: i,
                onSeek: s,
                onSeekEnd: u,
                outgoing: d,
                played: m,
                waveform: p,
                disabled: a,
                skipThumb: a,
              })),
              (t[1] = n),
              (t[2] = a),
              (t[3] = i),
              (t[4] = s),
              (t[5] = u),
              (t[6] = d),
              (t[7] = m),
              (t[8] = p),
              (t[9] = y))
            : (y = t[9]),
          y
        );
      }
      var C;
      return (
        t[10] !== n ||
        t[11] !== a ||
        t[12] !== i ||
        t[13] !== s ||
        t[14] !== u ||
        t[15] !== d ||
        t[16] !== m
          ? ((C = c.jsx(r("WAWebPttMessageSeekBar"), {
              currentTime: n,
              duration: i,
              onSeek: s,
              onCommit: u,
              outgoing: d,
              played: m,
              disabled: a,
            })),
            (t[10] = n),
            (t[11] = a),
            (t[12] = i),
            (t[13] = s),
            (t[14] = u),
            (t[15] = d),
            (t[16] = m),
            (t[17] = C))
          : (C = t[17]),
        C
      );
    }
    ((l.WrappedAudioPlayer = y), (l.AudioPlayerFrame = b));
  },
  226,
);
