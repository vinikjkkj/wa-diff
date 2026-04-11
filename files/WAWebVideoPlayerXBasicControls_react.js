__d(
  "WAWebVideoPlayerXBasicControls.react",
  [
    "fbt",
    "VideoPlayerHooks",
    "WAWebClock",
    "WAWebStopEvent",
    "WDSIconIcArrowBack.react",
    "WDSIconIcCheck.react",
    "WDSIconIcFullscreen.react",
    "WDSIconIcMoreVert.react",
    "WDSIconIcPauseFilled.react",
    "WDSIconIcPictureInPictureAlt.react",
    "WDSIconIcPlayArrowFilled.react",
    "WDSIconIcVolumeOffFilled.react",
    "WDSIconIcVolumeUp.react",
    "react",
    "react-compiler-runtime",
    "useVideoPlayerDefaultControlsVisibility",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = e || (e = o("react")),
      d = e,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useRef,
      f = d.useState;
    function g(e, t) {
      (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t());
    }
    var h = "x1xkg3e2-B",
      y = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
      C = 20,
      b = 20;
    function v(e) {
      var t = o("react-compiler-runtime").c(3),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = c.jsx("path", {
            d: "M13.05 9.79L10 7.5v9l3.05-2.29L16 12l-2.95-2.21zm0 0L10 7.5v9l3.05-2.29L16 12l-2.95-2.21zm0 0L10 7.5v9l3.05-2.29L16 12l-2.95-2.21zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69A7.941 7.941 0 0111 4.07zM5.69 7.1L4.26 5.68A9.949 9.949 0 002.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43A7.868 7.868 0 014.07 13zm1.61 6.74A9.981 9.981 0 0011 21.95v-2.02a7.941 7.941 0 01-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z",
          })),
          (t[0] = n))
        : (n = t[0]);
      var r;
      return (
        t[1] !== e
          ? ((r = c.jsx(
              "svg",
              babelHelpers.extends(
                {
                  "aria-hidden": "true",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                },
                e,
                { children: n },
              ),
            )),
            (t[1] = e),
            (t[2] = r))
          : (r = t[2]),
        r
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(3),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = c.jsx("path", {
            d: "M19 7H5v10h14V7zm4 12V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z",
          })),
          (t[0] = n))
        : (n = t[0]);
      var r;
      return (
        t[1] !== e
          ? ((r = c.jsx(
              "svg",
              babelHelpers.extends(
                {
                  "aria-hidden": "true",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                },
                e,
                { children: n },
              ),
            )),
            (t[1] = e),
            (t[2] = r))
          : (r = t[2]),
        r
      );
    }
    var R = {
      iconBlock: { display: "x1lliihq", $$css: !0 },
      menuCheckmark: {
        color: "x1v5yvga",
        flexShrink: "x2lah0s",
        height: "x1qx5ct2",
        marginInlineStart: "xvc5jky",
        width: "xw4jnvo",
        $$css: !0,
      },
      menuHeaderIcon: {
        flexShrink: "x2lah0s",
        height: "x1qx5ct2",
        width: "xw4jnvo",
        $$css: !0,
      },
      menuItemIcon: {
        flexShrink: "x2lah0s",
        height: "xxk0z11",
        width: "xvy4d1p",
        $$css: !0,
      },
    };
    function L() {
      var e = o("react-compiler-runtime").c(177),
        t = r("useVideoPlayerDefaultControlsVisibility")(),
        n = t.isControlsVisible,
        a = (u || (u = o("VideoPlayerHooks"))).useController(),
        i = u.usePaused(),
        l = u.useEnded(),
        d = u.useMuted(),
        m = u.useVolume(),
        h = u.useCurrentTimeThrottled(250),
        L = u.useDuration(),
        E = u.usePlaybackRate(),
        k = f(null),
        I = k[0],
        T = k[1],
        D = _(null),
        x = _(h),
        $ = f(!1),
        P = $[0],
        N = $[1],
        M = f(!1),
        w = M[0],
        A = M[1],
        F = f(!1),
        O = F[0],
        B = F[1],
        W = f(!1),
        q = W[0],
        U = W[1],
        V = _(null),
        H = f(!1),
        G = H[0],
        z = H[1],
        j = f("main"),
        K = j[0],
        Q = j[1],
        X = _(null),
        Y,
        J;
      (e[0] !== K
        ? ((Y = function () {
            if (!(K !== "speed" || X.current == null)) {
              var e = X.current.querySelector("[data-active]");
              e != null && e.scrollIntoView({ block: "center" });
            }
          }),
          (J = [K]),
          (e[0] = K),
          (e[1] = Y),
          (e[2] = J))
        : ((Y = e[1]), (J = e[2])),
        p(Y, J));
      var Z, ee;
      (e[3] !== G
        ? ((Z = function () {
            if (G) {
              var e = function (t) {
                var e = t.target;
                X.current != null &&
                  e instanceof Node &&
                  !X.current.contains(e) &&
                  (z(!1), Q("main"));
              };
              return (
                document.addEventListener("mousedown", e),
                function () {
                  return document.removeEventListener("mousedown", e);
                }
              );
            }
          }),
          (ee = [G]),
          (e[3] = G),
          (e[4] = Z),
          (e[5] = ee))
        : ((Z = e[4]), (ee = e[5])),
        p(Z, ee));
      var te, ne;
      (e[6] !== h || e[7] !== I
        ? ((te = function () {
            (I != null && D.current == null && h !== x.current && T(null),
              (x.current = h));
          }),
          (ne = [h, I]),
          (e[6] = h),
          (e[7] = I),
          (e[8] = te),
          (e[9] = ne))
        : ((te = e[8]), (ne = e[9])),
        p(te, ne));
      var re, oe;
      (e[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = function () {
            var e = V.current;
            if (e != null) {
              var t = new ResizeObserver(function (e) {
                for (var t of e) U(t.contentRect.width > 80);
              });
              return (
                t.observe(e),
                function () {
                  return t.disconnect();
                }
              );
            }
          }),
          (oe = []),
          (e[10] = re),
          (e[11] = oe))
        : ((re = e[10]), (oe = e[11])),
        p(re, oe));
      var ae = I != null ? I : h,
        ie;
      e[12] !== a || e[13] !== l
        ? ((ie = function () {
            (l &&
              a.getCurrentState().duration === a.getPlayheadPosition() &&
              a.seek(0),
              a.play("user_initiated"));
          }),
          (e[12] = a),
          (e[13] = l),
          (e[14] = ie))
        : (ie = e[14]);
      var le = ie,
        se;
      e[15] !== a
        ? ((se = function () {
            a.pause("user_initiated");
          }),
          (e[15] = a),
          (e[16] = se))
        : (se = e[16]);
      var ue = se,
        ce;
      e[17] !== a
        ? ((ce = function (t) {
            a.scrubBegin();
          }),
          (e[17] = a),
          (e[18] = ce))
        : (ce = e[18]);
      var de = ce,
        me;
      e[19] !== a || e[20] !== h
        ? ((me = function (t) {
            var e,
              n = (e = D.current) != null ? e : h;
            (a.scrubEnd(n), (D.current = null));
          }),
          (e[19] = a),
          (e[20] = h),
          (e[21] = me))
        : (me = e[21]);
      var pe = me,
        _e;
      e[22] !== a
        ? ((_e = function (t) {
            var e = parseFloat(t.target.value);
            ((D.current = e), T(e), a.seek(e));
          }),
          (e[22] = a),
          (e[23] = _e))
        : (_e = e[23]);
      var fe = _e,
        ge;
      e[24] !== a
        ? ((ge = function () {
            a.setMuted(!0, "user_initiated");
          }),
          (e[24] = a),
          (e[25] = ge))
        : (ge = e[25]);
      var he = ge,
        ye;
      e[26] !== a
        ? ((ye = function () {
            a.setMuted(!1, "user_initiated");
          }),
          (e[26] = a),
          (e[27] = ye))
        : (ye = e[27]);
      var Ce = ye,
        be;
      e[28] !== a || e[29] !== d
        ? ((be = function (t) {
            (a.setVolume(t), t > 0 && d && a.setMuted(!1, "user_initiated"));
          }),
          (e[28] = a),
          (e[29] = d),
          (e[30] = be))
        : (be = e[30]);
      var ve = be,
        Se;
      e[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((Se = function () {
            z(function (e) {
              return (e && Q("main"), !e);
            });
          }),
          (e[31] = Se))
        : (Se = e[31]);
      var Re = Se,
        Le = f(!1),
        Ee = Le[0],
        ke = Le[1],
        Ie = document.pictureInPictureEnabled === !0,
        Te,
        De;
      (e[32] !== a
        ? ((Te = function () {
            if (Ie) {
              var e = null,
                t = function (n) {
                  var t = function () {
                      return ke(!0);
                    },
                    r = function () {
                      return ke(!1);
                    };
                  (n.addEventListener("enterpictureinpicture", t),
                    n.addEventListener("leavepictureinpicture", r),
                    (e = function () {
                      (n.removeEventListener("enterpictureinpicture", t),
                        n.removeEventListener("leavepictureinpicture", r));
                    }));
                },
                n = a.internal_getVideoElement();
              if (n != null)
                return (
                  t(n),
                  function () {
                    return e == null ? void 0 : e();
                  }
                );
              var r = null;
              return (
                (r = a.subscribe(function () {
                  var e = a.internal_getVideoElement();
                  if (e != null) {
                    var n;
                    ((n = r) == null || n.remove(), t(e));
                  }
                })),
                function () {
                  var t;
                  ((t = r) == null || t.remove(), e == null || e());
                }
              );
            }
          }),
          (De = [a, Ie]),
          (e[32] = a),
          (e[33] = Te),
          (e[34] = De))
        : ((Te = e[33]), (De = e[34])),
        p(Te, De));
      var xe;
      (e[35] !== a || e[36] !== Ee
        ? ((xe = function () {
            Ee && a.exitPictureInPicture();
          }),
          (e[35] = a),
          (e[36] = Ee),
          (e[37] = xe))
        : (xe = e[37]),
        r("useWAWebOnUnmount")(xe));
      var $e;
      e[38] !== a || e[39] !== Ee
        ? (($e = function () {
            (Ee ? a.exitPictureInPicture() : a.requestPictureInPicture(),
              z(!1),
              Q("main"));
          }),
          (e[38] = a),
          (e[39] = Ee),
          (e[40] = $e))
        : ($e = e[40]);
      var Pe = $e,
        Ne;
      e[41] !== a
        ? ((Ne = function (t) {
            (a.setPlaybackRate == null || a.setPlaybackRate(t),
              z(!1),
              Q("main"));
          }),
          (e[41] = a),
          (e[42] = Ne))
        : (Ne = e[42]);
      var Me = Ne,
        we = L > 0 ? ae / L : 0;
      we > 1 && (we = 1);
      var Ae = we * 100 + "%",
        Fe = !i && !l,
        Oe = Math.ceil(ae) >= L && L > 0,
        Be;
      e[43] !== Oe
        ? ((Be = Oe ? s._(/*BTDS*/ "Replay") : s._(/*BTDS*/ "Play")),
          (e[43] = Oe),
          (e[44] = Be))
        : (Be = e[44]);
      var We = Be,
        qe = d || m === 0,
        Ue = qe ? 0 : m,
        Ve;
      e[45] !== qe
        ? ((Ve = qe ? s._(/*BTDS*/ "Unmute") : s._(/*BTDS*/ "Mute")),
          (e[45] = qe),
          (e[46] = Ve))
        : (Ve = e[46]);
      var He = Ve,
        Ge = w,
        ze;
      e[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((ze = { className: "x13vifvy xtijo5x x1ey2m1c x1o0tod x10l6tqk" }),
          (e[47] = ze))
        : (ze = e[47]);
      var je;
      e[48] !== n
        ? ((je = {
            0: {
              className:
                "x183btaf x1ey2m1c xjp8j0k x1o0tod x10l6tqk xh8yej3 xg01cxk x47corl x1d8287x x19991ni",
            },
            1: {
              className:
                "x183btaf x1ey2m1c xjp8j0k x1o0tod x47corl x10l6tqk xh8yej3 x1hc1fzr x1d8287x x19991ni",
            },
          }[!!n << 0]),
          (e[48] = n),
          (e[49] = je))
        : (je = e[49]);
      var Ke;
      e[50] !== je
        ? ((Ke = c.jsx("div", babelHelpers.extends({}, je))),
          (e[50] = je),
          (e[51] = Ke))
        : (Ke = e[51]);
      var Qe;
      e[52] !== n
        ? ((Qe = {
            0: {
              className:
                "x1ey2m1c x17t9dm2 x78zum5 xdt5ytf xtijo5x x1o0tod x12xbjc7 x10l6tqk xg01cxk x47corl x1d8287x x19991ni",
            },
            1: {
              className:
                "x1ey2m1c x17t9dm2 x78zum5 xdt5ytf xtijo5x x1o0tod x12xbjc7 x10l6tqk x1hc1fzr x1d8287x x19991ni",
            },
          }[!!n << 0]),
          (e[52] = n),
          (e[53] = Qe))
        : (Qe = e[53]);
      var Xe;
      e[54] === Symbol.for("react.memo_cache_sentinel")
        ? ((Xe = {
            className:
              "x6s0dn4 x78zum5 x1q0g3np x1a8lsjc xf159sx xmzvs34 x1n2onr6",
          }),
          (e[54] = Xe))
        : (Xe = e[54]);
      var Ye;
      e[55] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ye = {
            className:
              "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1yrsyyn x1icxu4v x10b6aqq x25sj25 xtr8le0",
          }),
          (e[55] = Ye))
        : (Ye = e[55]);
      var Je;
      e[56] === Symbol.for("react.memo_cache_sentinel")
        ? ((Je = {
            className:
              "x11g6tue x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1heor9g x1ypdohk x78zum5 xexx8yu xyri2b x18d9i69 x1c1uobl",
          }),
          (e[56] = Je))
        : (Je = e[56]);
      var Ze;
      e[57] !== Fe || e[58] !== We
        ? ((Ze = Fe ? s._(/*BTDS*/ "Pause") : We),
          (e[57] = Fe),
          (e[58] = We),
          (e[59] = Ze))
        : (Ze = e[59]);
      var et = Fe ? ue : le,
        tt;
      e[60] !== Fe
        ? ((tt = Fe
            ? c.jsx(r("WDSIconIcPauseFilled.react"), {
                height: C,
                width: C,
                iconXstyle: R.iconBlock,
              })
            : c.jsx(r("WDSIconIcPlayArrowFilled.react"), {
                height: C,
                width: C,
                iconXstyle: R.iconBlock,
              })),
          (e[60] = Fe),
          (e[61] = tt))
        : (tt = e[61]);
      var nt;
      e[62] !== Ze || e[63] !== et || e[64] !== tt
        ? ((nt = c.jsx(
            "div",
            babelHelpers.extends({}, Ye, {
              onMouseUp: o("WAWebStopEvent").stopPropagation,
              children: c.jsx(
                "button",
                babelHelpers.extends({}, Je, {
                  "aria-label": Ze,
                  onClick: et,
                  type: "button",
                  children: tt,
                }),
              ),
            }),
          )),
          (e[62] = Ze),
          (e[63] = et),
          (e[64] = tt),
          (e[65] = nt))
        : (nt = e[65]);
      var rt;
      e[66] === Symbol.for("react.memo_cache_sentinel")
        ? ((rt = { className: "x1iyjqo2 xeuugli" }), (e[66] = rt))
        : (rt = e[66]);
      var ot;
      e[67] !== ae || e[68] !== L || e[69] !== q
        ? ((ot = q
            ? c.jsxs("div", {
                className: "x17t9dm2 x1f6kntn xmzvs34 xuxw1ft",
                children: [
                  o("WAWebClock").Clock.durationStr(ae),
                  " / ",
                  o("WAWebClock").Clock.durationStr(L),
                ],
              })
            : null),
          (e[67] = ae),
          (e[68] = L),
          (e[69] = q),
          (e[70] = ot))
        : (ot = e[70]);
      var at;
      e[71] !== ot
        ? ((at = c.jsx(
            "div",
            babelHelpers.extends({ ref: V }, rt, { children: ot }),
          )),
          (e[71] = ot),
          (e[72] = at))
        : (at = e[72]);
      var it;
      e[73] === Symbol.for("react.memo_cache_sentinel")
        ? ((it = { className: "x6s0dn4 x78zum5 xiyxwb5" }), (e[73] = it))
        : (it = e[73]);
      var lt;
      e[74] !== Ge
        ? ((lt = {
            0: {
              className:
                "x6s0dn4 xamitd3 xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x1n2onr6",
            },
            1: {
              className:
                "x6s0dn4 xamitd3 xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x1n2onr6 x1rk1j4g",
            },
          }[!!Ge << 0]),
          (e[74] = Ge),
          (e[75] = lt))
        : (lt = e[75]);
      var st, ut, ct;
      e[76] === Symbol.for("react.memo_cache_sentinel")
        ? ((st = { transition: "background-color 0.2s" }),
          (ut = function () {
            return A(!0);
          }),
          (ct = function () {
            return A(!1);
          }),
          (e[76] = st),
          (e[77] = ut),
          (e[78] = ct))
        : ((st = e[76]), (ut = e[77]), (ct = e[78]));
      var dt;
      e[79] !== Ge
        ? ((dt = {
            0: {
              className:
                "x6s0dn4 x78zum5 x1qx5ct2 x1m189uc x6ikm8r x10wlt62 x1vjfegm",
            },
            1: {
              className:
                "x6s0dn4 x78zum5 x1qx5ct2 x6ikm8r x10wlt62 x1vjfegm x1chcg4z xf159sx xf7dkkf",
            },
          }[!!Ge << 0]),
          (e[79] = Ge),
          (e[80] = dt))
        : (dt = e[80]);
      var mt, pt, _t, ft, gt;
      e[81] === Symbol.for("react.memo_cache_sentinel")
        ? ((mt = { transition: "max-width 0.2s ease, padding 0.2s ease" }),
          (pt = function () {
            return B(!0);
          }),
          (_t = function () {
            return B(!1);
          }),
          (ft = {
            className:
              "x1ers9ju xbrszos xea3l6g x18isctg x2q3nzr xqu0tyb x1n2onr6 xvni27",
          }),
          (gt = {
            className:
              "x1p8t8ri xbrszos xea3l6g x18isctg x2q3nzr x5yr21d x10l6tqk x13vifvy",
          }),
          (e[81] = mt),
          (e[82] = pt),
          (e[83] = _t),
          (e[84] = ft),
          (e[85] = gt))
        : ((mt = e[81]),
          (pt = e[82]),
          (_t = e[83]),
          (ft = e[84]),
          (gt = e[85]));
      var ht = Ue * 100 + "%",
        yt;
      e[86] !== ht
        ? ((yt = c.jsx(
            "div",
            babelHelpers.extends({}, gt, { style: { width: ht } }),
          )),
          (e[86] = ht),
          (e[87] = yt))
        : (yt = e[87]);
      var Ct;
      e[88] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ct = {
            className:
              "x1p8t8ri x1c9tyrk xeusxvb x1pahc9y x1ertn4p x6w4g8m x47corl x10l6tqk xwa60dl x11lhmoz x10vfzb2 x1vjfegm",
          }),
          (e[88] = Ct))
        : (Ct = e[88]);
      var bt = Ue * 100 + "%",
        vt = O ? 1 : 0,
        St;
      e[89] !== bt || e[90] !== vt
        ? ((St = c.jsx(
            "div",
            babelHelpers.extends({}, Ct, {
              style: { left: bt, opacity: vt, transition: "opacity 0.15s" },
            }),
          )),
          (e[89] = bt),
          (e[90] = vt),
          (e[91] = St))
        : (St = e[91]);
      var Rt;
      e[92] === Symbol.for("react.memo_cache_sentinel")
        ? ((Rt = {
            className:
              "x1ypdohk x1qx5ct2 x1o0tod xdj266r x14z9mp xat24cr x1lziwak xg01cxk x10l6tqk xwa60dl x1cb1t30 xh8yej3",
          }),
          (e[92] = Rt))
        : (Rt = e[92]);
      var Lt;
      e[93] !== ve
        ? ((Lt = function (t) {
            ve(parseFloat(t.target.value));
          }),
          (e[93] = ve),
          (e[94] = Lt))
        : (Lt = e[94]);
      var Et;
      e[95] !== Ue || e[96] !== Lt
        ? ((Et = c.jsx(
            "input",
            babelHelpers.extends({ tabIndex: -1 }, Rt, {
              dir: "ltr",
              max: 1,
              min: "0",
              onChange: Lt,
              step: "any",
              type: "range",
              value: Ue,
            }),
          )),
          (e[95] = Ue),
          (e[96] = Lt),
          (e[97] = Et))
        : (Et = e[97]);
      var kt;
      e[98] !== yt || e[99] !== St || e[100] !== Et
        ? ((kt = c.jsxs(
            "div",
            babelHelpers.extends({}, ft, { children: [yt, St, Et] }),
          )),
          (e[98] = yt),
          (e[99] = St),
          (e[100] = Et),
          (e[101] = kt))
        : (kt = e[101]);
      var It;
      e[102] !== dt || e[103] !== kt
        ? ((It = c.jsx(
            "div",
            babelHelpers.extends({}, dt, {
              style: mt,
              onMouseEnter: pt,
              onMouseLeave: _t,
              children: kt,
            }),
          )),
          (e[102] = dt),
          (e[103] = kt),
          (e[104] = It))
        : (It = e[104]);
      var Tt, Dt;
      e[105] === Symbol.for("react.memo_cache_sentinel")
        ? ((Tt = { className: "x1yrsyyn x1icxu4v x10b6aqq x25sj25" }),
          (Dt = {
            className:
              "x11g6tue x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1heor9g x1ypdohk x78zum5 xexx8yu xyri2b x18d9i69 x1c1uobl",
          }),
          (e[105] = Tt),
          (e[106] = Dt))
        : ((Tt = e[105]), (Dt = e[106]));
      var xt = qe ? Ce : he,
        $t;
      e[107] !== qe
        ? (($t = qe
            ? c.jsx(r("WDSIconIcVolumeOffFilled.react"), {
                height: 22,
                width: 22,
                iconXstyle: R.iconBlock,
              })
            : c.jsx(r("WDSIconIcVolumeUp.react"), {
                height: 22,
                width: 22,
                iconXstyle: R.iconBlock,
              })),
          (e[107] = qe),
          (e[108] = $t))
        : ($t = e[108]);
      var Pt;
      e[109] !== xt || e[110] !== $t || e[111] !== He
        ? ((Pt = c.jsx(
            "div",
            babelHelpers.extends({}, Tt, {
              children: c.jsx(
                "button",
                babelHelpers.extends({}, Dt, {
                  "aria-label": He,
                  onClick: xt,
                  tabIndex: 0,
                  type: "button",
                  children: $t,
                }),
              ),
            }),
          )),
          (e[109] = xt),
          (e[110] = $t),
          (e[111] = He),
          (e[112] = Pt))
        : (Pt = e[112]);
      var Nt;
      e[113] !== lt || e[114] !== It || e[115] !== Pt
        ? ((Nt = c.jsxs(
            "div",
            babelHelpers.extends({}, lt, {
              style: st,
              onMouseEnter: ut,
              onMouseLeave: ct,
              children: [It, Pt],
            }),
          )),
          (e[113] = lt),
          (e[114] = It),
          (e[115] = Pt),
          (e[116] = Nt))
        : (Nt = e[116]);
      var Mt, wt, At;
      e[117] === Symbol.for("react.memo_cache_sentinel")
        ? ((Mt = {
            className:
              "x1c9tyrk xeusxvb x1pahc9y x1ertn4p xt0e3qv x1yrsyyn x1icxu4v x10b6aqq x25sj25 x47corl",
          }),
          (wt = {
            className:
              "x11g6tue x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1heor9g x78zum5 xexx8yu xyri2b x18d9i69 x1c1uobl xt0e3qv xbyyjgo",
          }),
          (At = s._(/*BTDS*/ "Full screen")),
          (e[117] = Mt),
          (e[118] = wt),
          (e[119] = At))
        : ((Mt = e[117]), (wt = e[118]), (At = e[119]));
      var Ft, Ot, Bt, Wt;
      e[120] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ft = c.jsx(
            "div",
            babelHelpers.extends({}, Mt, {
              children: c.jsx(
                "button",
                babelHelpers.extends({}, wt, {
                  "aria-label": At,
                  disabled: !0,
                  type: "button",
                  children: c.jsx(r("WDSIconIcFullscreen.react"), {
                    height: C,
                    width: C,
                    iconXstyle: R.iconBlock,
                  }),
                }),
              ),
            }),
          )),
          (Ot = {
            className:
              "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1yrsyyn x1icxu4v x10b6aqq x25sj25 xtr8le0",
          }),
          (Bt = {
            className:
              "x11g6tue x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1heor9g x1ypdohk x78zum5 xexx8yu xyri2b x18d9i69 x1c1uobl",
          }),
          (Wt = s._(/*BTDS*/ "More options")),
          (e[120] = Ft),
          (e[121] = Ot),
          (e[122] = Bt),
          (e[123] = Wt))
        : ((Ft = e[120]), (Ot = e[121]), (Bt = e[122]), (Wt = e[123]));
      var qt;
      e[124] === Symbol.for("react.memo_cache_sentinel")
        ? ((qt = c.jsx(
            "div",
            babelHelpers.extends({}, Ot, {
              children: c.jsx(
                "button",
                babelHelpers.extends({}, Bt, {
                  "aria-label": Wt,
                  onClick: Re,
                  type: "button",
                  children: c.jsx(r("WDSIconIcMoreVert.react"), {
                    height: C,
                    width: C,
                    iconXstyle: R.iconBlock,
                  }),
                }),
              ),
            }),
          )),
          (e[124] = qt))
        : (qt = e[124]);
      var Ut;
      e[125] !== Pe ||
      e[126] !== Me ||
      e[127] !== G ||
      e[128] !== Ee ||
      e[129] !== K ||
      e[130] !== E
        ? ((Ut = G
            ? c.jsx("div", {
                ref: X,
                className:
                  "xtsvl71 x1wpzwpe xa3vuyk x1p8t8ri xyi3aci xwf5gio x1p453bz x1suzm8a xqo3gd xpj8aza xxx7yvo xl8z2ie xfb3i0g x6ikm8r x1odjw0f x10l6tqk x6ow6l x1n327nk",
                onClick: o("WAWebStopEvent").stopPropagation,
                role: "menu",
                tabIndex: -1,
                children:
                  K === "main"
                    ? c.jsxs(c.Fragment, {
                        children: [
                          c.jsxs("div", {
                            className:
                              "x6s0dn4 x1lljey2 x1ypdohk x78zum5 x1pg5gke xtqikln xsdox4t xv54qhq xf7dkkf x1xub2uj",
                            onClick: function () {
                              return Q("speed");
                            },
                            onKeyDown: function (t) {
                              return g(t, function () {
                                return Q("speed");
                              });
                            },
                            role: "menuitem",
                            tabIndex: 0,
                            children: [
                              c.jsx(v, {
                                className: "x2lah0s xxk0z11 xvy4d1p",
                              }),
                              c.jsx("span", {
                                className: "x1iyjqo2",
                                children: s._(/*BTDS*/ "Playback speed"),
                              }),
                            ],
                          }),
                          Ie
                            ? c.jsxs("div", {
                                className:
                                  "x6s0dn4 x1lljey2 x1ypdohk x78zum5 x1pg5gke xtqikln xsdox4t xv54qhq xf7dkkf x1xub2uj",
                                onClick: Pe,
                                onKeyDown: function (t) {
                                  return g(t, Pe);
                                },
                                role: "menuitem",
                                tabIndex: 0,
                                children: [
                                  Ee
                                    ? c.jsx(S, {
                                        className: "x2lah0s xxk0z11 xvy4d1p",
                                      })
                                    : c.jsx(
                                        r("WDSIconIcPictureInPictureAlt.react"),
                                        {
                                          height: 24,
                                          width: 24,
                                          xstyle: R.menuItemIcon,
                                          iconXstyle: R.iconBlock,
                                        },
                                      ),
                                  c.jsx("span", {
                                    className: "x1iyjqo2",
                                    children: Ee
                                      ? s._(/*BTDS*/ "Exit Picture-in-Picture")
                                      : s._(/*BTDS*/ "Picture in Picture"),
                                  }),
                                ],
                              })
                            : null,
                        ],
                      })
                    : c.jsxs(c.Fragment, {
                        children: [
                          c.jsxs("div", {
                            className:
                              "x6s0dn4 x1lljey2 x1ypdohk x78zum5 x1pg5gke xtqikln xsdox4t xv54qhq xf7dkkf x1xub2uj",
                            onClick: function () {
                              return Q("main");
                            },
                            onKeyDown: function (t) {
                              return g(t, function () {
                                return Q("main");
                              });
                            },
                            role: "menuitem",
                            tabIndex: 0,
                            children: [
                              c.jsx(r("WDSIconIcArrowBack.react"), {
                                height: b,
                                width: b,
                                xstyle: R.menuHeaderIcon,
                                iconXstyle: R.iconBlock,
                                directional: !0,
                              }),
                              c.jsx("span", {
                                children: s._(/*BTDS*/ "Options"),
                              }),
                            ],
                          }),
                          y.map(function (e) {
                            var t = Math.abs(E - e) < 0.01;
                            return c.jsxs(
                              "div",
                              {
                                className:
                                  "x6s0dn4 x1lljey2 x1ypdohk x78zum5 x1pg5gke xtqikln xsdox4t xv54qhq xf7dkkf x1xub2uj",
                                "data-active": t ? "" : void 0,
                                onClick: function () {
                                  return Me(e);
                                },
                                onKeyDown: function (n) {
                                  return g(n, function () {
                                    return Me(e);
                                  });
                                },
                                role: "menuitemradio",
                                "aria-checked": t,
                                tabIndex: 0,
                                children: [
                                  c.jsx("div", {
                                    className:
                                      "x2lah0s x1qx5ct2 xlshs6z xw4jnvo",
                                  }),
                                  c.jsx("span", {
                                    children:
                                      e === 1
                                        ? s._(/*BTDS*/ "Normal")
                                        : String(e),
                                  }),
                                  t
                                    ? c.jsx(r("WDSIconIcCheck.react"), {
                                        height: 20,
                                        width: 20,
                                        xstyle: R.menuCheckmark,
                                        iconXstyle: R.iconBlock,
                                      })
                                    : null,
                                ],
                              },
                              e,
                            );
                          }),
                        ],
                      }),
              })
            : null),
          (e[125] = Pe),
          (e[126] = Me),
          (e[127] = G),
          (e[128] = Ee),
          (e[129] = K),
          (e[130] = E),
          (e[131] = Ut))
        : (Ut = e[131]);
      var Vt;
      e[132] !== Nt || e[133] !== Ut
        ? ((Vt = c.jsxs(
            "div",
            babelHelpers.extends({}, it, { children: [Nt, Ft, qt, Ut] }),
          )),
          (e[132] = Nt),
          (e[133] = Ut),
          (e[134] = Vt))
        : (Vt = e[134]);
      var Ht;
      e[135] !== nt || e[136] !== at || e[137] !== Vt
        ? ((Ht = c.jsxs(
            "div",
            babelHelpers.extends({}, Xe, {
              onClick: o("WAWebStopEvent").stopPropagation,
              onMouseDown: o("WAWebStopEvent").stopPropagation,
              children: [nt, at, Vt],
            }),
          )),
          (e[135] = nt),
          (e[136] = at),
          (e[137] = Vt),
          (e[138] = Ht))
        : (Ht = e[138]);
      var Gt;
      e[139] === Symbol.for("react.memo_cache_sentinel")
        ? ((Gt = { className: "x1hshjfz xpdmqnj x1g0dm76 x1n2onr6" }),
          (e[139] = Gt))
        : (Gt = e[139]);
      var zt, jt;
      e[140] === Symbol.for("react.memo_cache_sentinel")
        ? ((zt = function () {
            return N(!0);
          }),
          (jt = function () {
            return N(!1);
          }),
          (e[140] = zt),
          (e[141] = jt))
        : ((zt = e[140]), (jt = e[141]));
      var Kt;
      e[142] === Symbol.for("react.memo_cache_sentinel")
        ? ((Kt = {
            className:
              "xjbqb8w x1ypdohk x5yr21d x1o0tod xdj266r x14z9mp xat24cr x1lziwak xg01cxk x10l6tqk x13vifvy xh8yej3 xhtitgo",
          }),
          (e[142] = Kt))
        : (Kt = e[142]);
      var Qt;
      e[143] !== L
        ? ((Qt =
            L > 0
              ? L.toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                  roundingMode: "trunc",
                  useGrouping: !1,
                })
              : 0),
          (e[143] = L),
          (e[144] = Qt))
        : (Qt = e[144]);
      var Xt;
      e[145] !== ae ||
      e[146] !== fe ||
      e[147] !== de ||
      e[148] !== pe ||
      e[149] !== Qt
        ? ((Xt = c.jsx(
            "input",
            babelHelpers.extends({ tabIndex: -1, "data-testid": void 0 }, Kt, {
              dir: "ltr",
              max: Qt,
              min: "0",
              onChange: fe,
              onMouseDown: de,
              onMouseUp: pe,
              step: "any",
              type: "range",
              value: ae,
            }),
          )),
          (e[145] = ae),
          (e[146] = fe),
          (e[147] = de),
          (e[148] = pe),
          (e[149] = Qt),
          (e[150] = Xt))
        : (Xt = e[150]);
      var Yt, Jt;
      e[151] === Symbol.for("react.memo_cache_sentinel")
        ? ((Yt = { className: "x47corl x1n2onr6 xh8yej3" }),
          (Jt = c.jsx("div", {
            className:
              "xqu0tyb x1o0tod x10l6tqk xwa60dl x1cb1t30 xh8yej3 xki6t65 xbrszos xea3l6g x18isctg x2q3nzr",
          })),
          (e[151] = Yt),
          (e[152] = Jt))
        : ((Yt = e[151]), (Jt = e[152]));
      var Zt;
      e[153] !== we
        ? ((Zt = {
            0: {
              className:
                "xqu0tyb x1o0tod x10l6tqk xwa60dl x1cb1t30 xh8yej3 x1p8t8ri x1e7945m x2q3nzr x17un8ov xbrszos",
            },
            1: {
              className:
                "xqu0tyb x1o0tod x10l6tqk xwa60dl x1cb1t30 xh8yej3 x1p8t8ri xbrszos xea3l6g x18isctg x2q3nzr",
            },
          }[(we === 1) << 0]),
          (e[153] = we),
          (e[154] = Zt))
        : (Zt = e[154]);
      var en;
      e[155] !== Ae
        ? ((en = { width: Ae }), (e[155] = Ae), (e[156] = en))
        : (en = e[156]);
      var tn;
      e[157] !== Zt || e[158] !== en
        ? ((tn = c.jsx(
            "div",
            babelHelpers.extends({ "data-testid": void 0 }, Zt, { style: en }),
          )),
          (e[157] = Zt),
          (e[158] = en),
          (e[159] = tn))
        : (tn = e[159]);
      var nn;
      e[160] === Symbol.for("react.memo_cache_sentinel")
        ? ((nn = {
            className:
              "x1p8t8ri x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1kpxq89 x47corl x10l6tqk xwa60dl x11lhmoz xx6bhzk x19991ni xsmyaan xk3oba8",
          }),
          (e[160] = nn))
        : (nn = e[160]);
      var rn = P ? 1 : 0,
        on;
      e[161] !== Ae || e[162] !== rn
        ? ((on = c.jsx(
            "div",
            babelHelpers.extends({}, nn, { style: { left: Ae, opacity: rn } }),
          )),
          (e[161] = Ae),
          (e[162] = rn),
          (e[163] = on))
        : (on = e[163]);
      var an;
      e[164] !== tn || e[165] !== on
        ? ((an = c.jsxs(
            "div",
            babelHelpers.extends({}, Yt, { children: [Jt, tn, on] }),
          )),
          (e[164] = tn),
          (e[165] = on),
          (e[166] = an))
        : (an = e[166]);
      var ln;
      e[167] !== Xt || e[168] !== an
        ? ((ln = c.jsxs(
            "div",
            babelHelpers.extends({}, Gt, {
              onClick: o("WAWebStopEvent").stopPropagation,
              onMouseDown: o("WAWebStopEvent").stopPropagation,
              onMouseEnter: zt,
              onMouseLeave: jt,
              children: [Xt, an],
            }),
          )),
          (e[167] = Xt),
          (e[168] = an),
          (e[169] = ln))
        : (ln = e[169]);
      var sn;
      e[170] !== Qe || e[171] !== Ht || e[172] !== ln
        ? ((sn = c.jsxs(
            "div",
            babelHelpers.extends({}, Qe, { children: [Ht, ln] }),
          )),
          (e[170] = Qe),
          (e[171] = Ht),
          (e[172] = ln),
          (e[173] = sn))
        : (sn = e[173]);
      var un;
      return (
        e[174] !== Ke || e[175] !== sn
          ? ((un = c.jsxs(
              "div",
              babelHelpers.extends({}, ze, { children: [Ke, sn] }),
            )),
            (e[174] = Ke),
            (e[175] = sn),
            (e[176] = un))
          : (un = e[176]),
        un
      );
    }
    l.default = L;
  },
  226,
);
