__d(
  "WAWebPipVideoControls.react",
  [
    "cx",
    "fbt",
    "WAWebClassnames",
    "WAWebClock",
    "WAWebExternalLink.react",
    "WAWebMediaGatingUtils",
    "WAWebPipCloseButton.react",
    "WAWebPipConst",
    "WAWebPipCtwaSourceButton.react",
    "WAWebPipFullscreenToggleButton.react",
    "WAWebRefreshIcon.react",
    "WAWebStopEvent",
    "WAWebSvgButton.react",
    "WAWebUA",
    "WAWebURLUtils",
    "WAWebVideoPauseIcon.react",
    "WAWebVideoPlayIcon.react",
    "WAWebVideoPlaybackSpeed",
    "WAWebVideoPlaybackSpeedButton.react",
    "WAWebVideoVolume1Icon.react",
    "WAWebVideoVolume2Icon.react",
    "WAWebVideoVolumeIcon.react",
    "WAWebVideoVolumeMutedIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useRef,
      f = m.useState,
      g = 4.5,
      h = 5,
      y = 0.25;
    function C(e, t) {
      switch (!0) {
        case t:
          return o("WAWebVideoVolumeMutedIcon.react").VideoVolumeMutedIcon;
        case e < 0.5:
          return o("WAWebVideoVolume1Icon.react").VideoVolume1Icon;
        case e >= 1:
          return o("WAWebVideoVolumeIcon.react").VideoVolumeIcon;
      }
      return o("WAWebVideoVolume2Icon.react").VideoVolume2Icon;
    }
    function b(e) {
      return r("WAWebURLUtils").withoutWww(r("WAWebURLUtils").hostname(e));
    }
    function v(e, t, n, r) {
      return e
        ? {
            ariaLabel: u._(/*BTDS*/ "Pause"),
            Icon: o("WAWebVideoPauseIcon.react").VideoPauseIcon,
            onClick: n,
          }
        : t
          ? {
              ariaLabel: u._(/*BTDS*/ "Replay"),
              Icon: o("WAWebRefreshIcon.react").RefreshIcon,
              onClick: r,
            }
          : {
              ariaLabel: u._(/*BTDS*/ "Play"),
              Icon: o("WAWebVideoPlayIcon.react").VideoPlayIcon,
              onClick: r,
            };
    }
    function S(e) {
      var t = e.duration,
        n = e.mouseOverProgressRatio;
      if (n === void 0) return d.jsx("div", { className: "_ahbn" });
      var r = o("WAWebClock").Clock.durationStr(n * t),
        a = n * 100 + "%";
      return d.jsx("div", {
        className: "_ahbn",
        style: { left: a },
        children: d.jsx("div", {
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_ahbp",
            "_ahbo",
          ),
          children: r,
        }),
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t,
        n,
        r,
        a = e.bufferedTime,
        i = e.duration,
        l = e.isFullscreenMode,
        s = e.isMouseOverProgressBar,
        u = e.mouseOverProgressRatio,
        c = e.onChange,
        m = e.onMouseDown,
        p = e.onMouseEnter,
        _ = e.onMouseLeave,
        f = e.onMouseOverProgressRatioChange,
        y = e.onMouseUp,
        C = e.progress,
        b = C / i;
      b > 1 && (b = 1);
      var v = b * 100 + "%",
        R = { width: v },
        L = a / i;
      L > 1 && (L = 1);
      var E = L * 100 + "%",
        k = { width: E },
        I = { left: v };
      return d.jsxs("div", {
        className: "_ahb8",
        onClick: o("WAWebStopEvent").stopPropagation,
        onMouseDown: o("WAWebStopEvent").stopPropagation,
        onMouseEnter: p,
        onMouseLeave: function (t) {
          (_(t), f(void 0));
        },
        onMouseMove: function (t) {
          var e = l ? h : g,
            n = t.currentTarget.getBoundingClientRect().left,
            r = t.pageX,
            o = t.currentTarget.offsetWidth,
            a = r - n - e,
            s = o - 2 * e,
            u = (r - n - e) / s,
            c = s * (C / i),
            d = Math.abs(a - c) <= e;
          (u < 0 ? (u = d ? 0 : void 0) : u > 1 && (u = d ? 1 : void 0), f(u));
        },
        children: [
          d.jsx("input", {
            tabIndex: -1,
            "data-testid": void 0,
            className: "_ahb9",
            dir: "ltr",
            onChange: c,
            onMouseDown: m,
            onMouseUp: y,
            type: "range",
            min: "0",
            max: i.toLocaleString("en-US", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
              roundingMode: "trunc",
              useGrouping: !1,
            }),
            step: "any",
            value: C,
          }),
          d.jsxs("div", {
            className: "_ahba",
            children: [
              d.jsx("div", {
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease("_ahbb", "_ahbe"),
              }),
              d.jsx("div", {
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease(
                  ((t = {}),
                  (t._ahbl = L === 1),
                  (t._ahbb = !0),
                  (t._ahbd = !0),
                  t),
                ),
                style: k,
              }),
              d.jsx("div", {
                "data-testid": void 0,
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease(
                  ((n = {}),
                  (n._ahbl = b === 1),
                  (n._ahbb = !0),
                  (n._ahbc = !0),
                  n),
                ),
                style: R,
              }),
              d.jsx("div", {
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease(
                  ((r = {}), (r._ahbg = !s), (r._ahbf = !0), r),
                ),
                style: I,
              }),
              d.jsx(S, { mouseOverProgressRatio: u, duration: i }),
            ],
          }),
        ],
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    var L = 0.05;
    function E(e) {
      var t,
        n,
        a = e.defaultValume,
        i = e.disableAudioControls,
        l = e.isVolumeControlActive,
        s = e.muted,
        c = e.onBlur,
        m = e.onFocus,
        p = e.onMouseEnter,
        _ = e.onMouseLeave,
        f = e.onMute,
        g = e.onUnmute,
        h = e.onVolumeValueChange,
        b = e.volume,
        v = function (t) {
          var e = t.key;
          e === "ArrowRight" || e === "ArrowUp"
            ? (t.preventDefault(), t.stopPropagation(), h(Math.min(1, b + L)))
            : (e === "ArrowLeft" || e === "ArrowDown") &&
              (t.preventDefault(), t.stopPropagation(), h(Math.max(0, b - L)));
        },
        S = i === !0 || s || b === 0,
        R = (function () {
          return i === !0
            ? u._(/*BTDS*/ "Audio is disabled")
            : S
              ? u._(/*BTDS*/ "Unmute")
              : u._(/*BTDS*/ "Mute");
        })(),
        E = d.jsx(r("WAWebSvgButton.react"), {
          tabIndex: 0,
          "aria-label": R,
          Icon: C(b, S),
          displayInline: !0,
          onClick: function () {
            (S ? g() : f(), a === 0 && h(y));
          },
        }),
        k = { width: b * 100 + "%" },
        I = l && !s && i !== !0,
        T = d.jsxs("div", {
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            ((t = {}), (t._ahbi = I), (t._ahbh = !0), t),
          ),
          children: [
            d.jsx("div", {
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                ((n = {}),
                (n._ahbl = b === 1),
                (n._ahbk = o("WAWebUA").UA.isGecko),
                (n._ahbj = !0),
                n),
              ),
              style: k,
            }),
            d.jsx("input", {
              tabIndex: 0,
              "aria-label": u._(/*BTDS*/ "Volume"),
              className: "_ahbm",
              dir: "ltr",
              onChange: function (t) {
                h(parseFloat(t.target.value));
              },
              type: "range",
              min: "0",
              max: 1,
              step: "any",
              value: b,
            }),
          ],
        });
      return d.jsxs("div", {
        className: "_ahb1",
        onClick: o("WAWebStopEvent").stopPropagation,
        onMouseEnter: p,
        onMouseLeave: _,
        onMouseDown: o("WAWebStopEvent").stopPropagation,
        onFocus: m,
        onBlur: c,
        onKeyDown: v,
        children: [E, T],
      });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e, t) {
      t === void 0 && (t = !1);
      var n = f(e),
        r = n[0],
        o = n[1],
        a = f(e),
        i = a[0],
        l = a[1];
      return (i !== e && !t && (o(e), l(e)), [r, o]);
    }
    function I(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.className,
        s = i.ctwaSourceUrl,
        u = i.duration,
        c = i.isFullscreenMode,
        m = i.isVideoPlaying,
        g = i.newPiPStyle,
        h = g === void 0 ? !1 : g,
        y = i.onClose,
        C = i.onFullscreenToggle,
        S = i.onMutedValueChange,
        L = i.onPause,
        I = i.onPlay,
        T = i.onProgressChange,
        D = i.onVolumeValueChange,
        x = i.playbackRate,
        $ =
          x === void 0
            ? o("WAWebVideoPlaybackSpeed").DEFAULT_VIDEO_PLAYBACK_RATE
            : x,
        P = i.onPlaybackRateChange,
        N = _(null),
        M = _(null),
        w = f(!1),
        A = w[0],
        F = w[1],
        O = f(!1),
        B = O[0],
        W = O[1],
        q = f(!1),
        U = q[0],
        V = q[1],
        H = f(!1),
        G = H[0],
        z = H[1],
        j = f(void 0),
        K = j[0],
        Q = j[1],
        X = k(i.muted),
        Y = X[0],
        J = X[1],
        Z = k(i.volume),
        ee = Z[0],
        te = Z[1],
        ne = k(i.bufferedTime),
        re = ne[0],
        oe = ne[1],
        ae = k(i.progress, U),
        ie = ae[0],
        le = ae[1];
      p(function () {
        var e;
        (e = M.current) == null || e.focus();
      }, []);
      var se = function (t) {
          (t.preventDefault(),
            t.stopPropagation(),
            s != null && o("WAWebExternalLink.react").openExternalLink(s));
        },
        ue = function () {
          (S(!1), J(!1));
        },
        ce = function () {
          (S(!0), J(!0));
        },
        de = function (t) {
          z(!0);
        },
        me = function (t) {
          z(!1);
        },
        pe = function (t) {
          F(!0);
        },
        _e = function (t) {
          F(!1);
        },
        fe = function () {
          W(!0);
        },
        ge = function (t) {
          ((t.relatedTarget instanceof Node &&
            !t.currentTarget.contains(t.relatedTarget)) ||
            t.relatedTarget == null) &&
            W(!1);
        },
        he = function (t) {
          (te(t), D(t));
        },
        ye = function (t) {
          (V(!0), (N.current = m), m && L());
        },
        Ce = function (t) {
          (V(!1), N.current === !0 && I(), (N.current = null));
        },
        be = function (t) {
          var e = parseFloat(t.target.value);
          T(e);
          var n = Math.abs(re - u) < 0.1 ? re : 0;
          (le(e), oe(n));
        },
        ve = A || B,
        Se = ve && !Y,
        Re = c
          ? d.jsx("div", {
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                "_ahb7",
                "_ahb6",
              ),
              onClick: o("WAWebStopEvent").stopPropagation,
              children: o("WAWebClock").Clock.durationStr(ie),
            })
          : null,
        Le = c
          ? d.jsx("div", {
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                "_ahb7",
                "_ahb2",
              ),
              onClick: o("WAWebStopEvent").stopPropagation,
              children: o("WAWebClock").Clock.durationStr(u),
            })
          : null,
        Ee = l != null ? l : "_aha-",
        ke = h && Math.ceil(ie) >= u,
        Ie = v(m, ke, L, I);
      return d.jsxs("div", {
        ref: a,
        className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((n = {}), (n._aha_ = c), (n._ahb0 = h), (n[Ee] = !0), n),
        ),
        children: [
          d.jsx("div", {
            className: "_ahb5",
            onClick: o("WAWebStopEvent").stopPropagation,
            onMouseDown: o("WAWebStopEvent").stopPropagation,
            onMouseUp: o("WAWebStopEvent").stopPropagation,
            children: d.jsx(r("WAWebSvgButton.react"), {
              ref: M,
              "aria-label": Ie.ariaLabel,
              Icon: Ie.Icon,
              displayInline: !0,
              onClick: Ie.onClick,
            }),
          }),
          d.jsx(R, {
            progress: i.progress,
            duration: u,
            bufferedTime: re,
            isFullscreenMode: c,
            isMouseOverProgressBar: G,
            mouseOverProgressRatio: K,
            onChange: be,
            onMouseDown: ye,
            onMouseUp: Ce,
            onMouseEnter: de,
            onMouseLeave: me,
            onMouseOverProgressRatioChange: Q,
          }),
          o("WAWebMediaGatingUtils").isVideoPlaybackSpeedEnabled() && P != null
            ? d.jsx("div", {
                className: "xamitd3 x2fvf9 x182iqb8",
                onClick: o("WAWebStopEvent").stopPropagation,
                onMouseDown: o("WAWebStopEvent").stopPropagation,
                children: d.jsx(r("WAWebVideoPlaybackSpeedButton.react"), {
                  playbackRate: $,
                  onClick: P,
                }),
              })
            : null,
          d.jsx(E, {
            muted: Y,
            volume: ee,
            defaultValume: i.volume,
            onUnmute: ue,
            onMute: ce,
            onVolumeValueChange: he,
            isVolumeControlActive: ve,
            onFocus: fe,
            onBlur: ge,
            onMouseEnter: pe,
            onMouseLeave: _e,
            disableAudioControls: i.disableAudioControls,
          }),
          Re,
          Le,
          C != null
            ? d.jsx("div", {
                className: "_ahb3",
                children: d.jsx(r("WAWebPipFullscreenToggleButton.react"), {
                  isFullscreenMode: c,
                  onClick: C,
                  isStatic: !0,
                }),
              })
            : null,
          y != null
            ? d.jsx("div", {
                className: "_ahb4",
                children: d.jsx(r("WAWebPipCloseButton.react"), {
                  isFullscreenMode: c,
                  onClick: y,
                  isStatic: !0,
                }),
              })
            : null,
          !Se && s != null
            ? d.jsx(r("WAWebPipCtwaSourceButton.react"), {
                isFullscreenMode: c,
                onClick: se,
                isInstagram: b(s) === o("WAWebPipConst").HOSTNAME.INSTAGRAM,
              })
            : null,
        ],
      });
    }
    ((I.displayName = I.name + " [from " + i.id + "]"), (l.default = I));
  },
  226,
);
