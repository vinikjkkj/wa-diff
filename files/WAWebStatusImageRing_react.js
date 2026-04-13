__d(
  "WAWebStatusImageRing.react",
  [
    "$InternalEnum",
    "WAWebStatusGetters",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebStatusValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["customStrokeColor"],
      s,
      u,
      c = u || (u = o("react")),
      d = "xnrop4s-B",
      m = {
        businessContactInfoRing: {
          marginTop: "x1380le5",
          position: "x10l6tqk",
          $$css: !0,
        },
        read: { stroke: "x1xwosuo", color: "x18cpw0e", $$css: !0 },
        statusPanelRing: {
          marginInlineStart: "x165d6jo",
          marginTop: "x1rdy4ex",
          position: "x10l6tqk",
          $$css: !0,
        },
        chatListRing: {
          marginInlineStart: "xe9ewy2",
          marginTop: "x1kgmq87",
          position: "x10l6tqk",
          $$css: !0,
        },
        updatesTabRing: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          $$css: !0,
        },
        unread: { stroke: "xg8543d", color: "x5ymo0g", $$css: !0 },
        unreadCloseFriends: { stroke: "xc8us4n", $$css: !0 },
        unreadDarkModeOnly: { stroke: "xc92gef", color: "x1r8hjv8", $$css: !0 },
        loadingRing: {
          backgroundColor: "xtwfq29",
          backgroundImage: "x1c5nfnd",
          filter: "xhe8x8x",
          animationName: "x1e112to",
          animationDuration: "x7t6ubo",
          animationTimingFunction: "x1esw782",
          animationIterationCount: "xa4qsjk",
          $$css: !0,
        },
      },
      p = n("$InternalEnum").Mirrored([
        "StatusPanel",
        "BusinessContactInfo",
        "ChatList",
        "UpdatesTab",
      ]),
      _ = new Map([
        [p.StatusPanel, m.statusPanelRing],
        [p.BusinessContactInfo, m.businessContactInfoRing],
        [p.ChatList, m.chatListRing],
        [p.UpdatesTab, m.updatesTabRing],
      ]),
      f = 50,
      g = 10,
      h = function (t, n) {
        return n != null
          ? m.unreadCloseFriends
          : t
            ? m.unread
            : m.unreadDarkModeOnly;
      },
      y = function (t, n, r, o) {
        return new Array(t)
          .fill(void 0)
          .map(function (e, a) {
            var i = a === t - 1 ? r - t * (o + n) + o : o;
            return n + " " + i;
          })
          .join(" ");
      },
      C = function (t, n, r, o) {
        return t + n * (r + o);
      };
    function b(t) {
      var n = o("react-compiler-runtime").c(9),
        r = (2 * f + t.strokeWidth) / 2,
        a,
        i;
      n[0] !== t
        ? ((i = t.customStrokeColor),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l;
      n[3] !== i
        ? ((l = i != null ? { style: { stroke: i } } : void 0),
          (n[3] = i),
          (n[4] = l))
        : (l = n[4]);
      var s;
      return (
        n[5] !== a || n[6] !== r || n[7] !== l
          ? ((s = c.jsx(
              "circle",
              babelHelpers.extends(
                { cx: r, cy: r, r: f, fill: "none", strokeLinecap: "round" },
                a,
                l,
              ),
            )),
            (n[5] = a),
            (n[6] = r),
            (n[7] = l),
            (n[8] = s))
          : (s = n[8]),
        s
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.className,
        r = e.customStrokeColor,
        a = e.dashesToDraw,
        i = e.dashesToOffsetBy,
        l = e.stroke,
        s = e.totalDashes,
        u = g,
        d = Math.PI * f * 2;
      d - g * s < 1 && (u = d / s / 1.2);
      var m = (d - u * s) / s,
        p = d / 4 - u / 2,
        _;
      t[0] !== m || t[1] !== i || t[2] !== u || t[3] !== p
        ? ((_ = C(p, i, u, m)),
          (t[0] = m),
          (t[1] = i),
          (t[2] = u),
          (t[3] = p),
          (t[4] = _))
        : (_ = t[4]);
      var h = _,
        v;
      t[5] !== m || t[6] !== a || t[7] !== u || t[8] !== s
        ? ((v = s !== 1 ? y(a, m, d, u) : void 0),
          (t[5] = m),
          (t[6] = a),
          (t[7] = u),
          (t[8] = s),
          (t[9] = v))
        : (v = t[9]);
      var S = v,
        R;
      return (
        t[10] !== n || t[11] !== r || t[12] !== S || t[13] !== h || t[14] !== l
          ? ((R = c.jsx(b, {
              className: n,
              customStrokeColor: r,
              strokeDashoffset: h,
              strokeDasharray: S,
              strokeWidth: l,
            })),
            (t[10] = n),
            (t[11] = r),
            (t[12] = S),
            (t[13] = h),
            (t[14] = l),
            (t[15] = R))
          : (R = t[15]),
        R
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.customUnreadRingColor,
        a = e.respectAppTheme,
        i = e.stroke,
        l = e.totalCount,
        u = e.unreadCount,
        d = l - u,
        m;
      t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l || t[4] !== u
        ? ((m =
            u > 0
              ? c.jsx(v, {
                  className: (s || (s = r("stylex")))(h(a)),
                  customStrokeColor: n,
                  totalDashes: l,
                  dashesToDraw: u,
                  dashesToOffsetBy: l,
                  stroke: i,
                })
              : null),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = u),
          (t[5] = m))
        : (m = t[5]);
      var p = m,
        _;
      t[6] !== d || t[7] !== i || t[8] !== l
        ? ((_ =
            d > 0
              ? c.jsx(v, {
                  className: "x1xwosuo x18cpw0e",
                  totalDashes: l,
                  dashesToDraw: d,
                  dashesToOffsetBy: d,
                  stroke: i,
                })
              : null),
          (t[6] = d),
          (t[7] = i),
          (t[8] = l),
          (t[9] = _))
        : (_ = t[9]);
      var f = _,
        g;
      return (
        t[10] !== f || t[11] !== p
          ? ((g = c.jsxs(c.Fragment, { children: [p, f] })),
            (t[10] = f),
            (t[11] = p),
            (t[12] = g))
          : (g = t[12]),
        g
      );
    }
    var R = function (t, n) {
      var e = t / (2 * f + n),
        r = t / 2,
        o = r - n * e,
        a =
          "radial-gradient(circle, transparent " +
          (o - 0.5) +
          "px, black " +
          (o + 0.5) +
          "px, black " +
          (r - 0.5) +
          "px, transparent " +
          (r + 0.5) +
          "px)";
      return { width: t, height: t, mask: a, WebkitMask: a };
    };
    function L(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.customUnreadRingColor,
        a = e.respectAppTheme,
        i = e.size,
        l = e.stroke,
        u = e.theme,
        d = e.unreadCount,
        p;
      t[0] !== n || t[1] !== a || t[2] !== u || t[3] !== d
        ? ((p = (s || (s = r("stylex")))(
            _.get(u),
            m.loadingRing,
            d > 0 ? h(a, n) : m.read,
          )),
          (t[0] = n),
          (t[1] = a),
          (t[2] = u),
          (t[3] = d),
          (t[4] = p))
        : (p = t[4]);
      var f;
      t[5] !== i || t[6] !== l
        ? ((f = R(i, l)), (t[5] = i), (t[6] = l), (t[7] = f))
        : (f = t[7]);
      var g;
      t[8] !== n
        ? ((g = n != null ? { color: n } : void 0), (t[8] = n), (t[9] = g))
        : (g = t[9]);
      var y;
      t[10] !== f || t[11] !== g
        ? ((y = babelHelpers.extends({}, f, g)),
          (t[10] = f),
          (t[11] = g),
          (t[12] = y))
        : (y = t[12]);
      var C;
      return (
        t[13] !== p || t[14] !== y
          ? ((C = c.jsx("div", { className: p, style: y })),
            (t[13] = p),
            (t[14] = y),
            (t[15] = C))
          : (C = t[15]),
        C
      );
    }
    function E(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.id,
        a = e.stroke,
        i = e.size,
        l = e.breakRing,
        u = e.hideWhenNoUnreadStatuses,
        d = e.respectAppTheme,
        g = e.theme,
        y = e.customUnreadRingColor,
        C = a === void 0 ? 4 : a,
        v = i === void 0 ? 48 : i,
        R = l === void 0 ? !0 : l,
        E = u === void 0 ? !1 : u,
        k = d === void 0 ? !1 : d,
        I = g === void 0 ? p.StatusPanel : g,
        T = y === void 0 ? null : y,
        D;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = [
            o("WAWebStatusGetters").getUnreadCount,
            o("WAWebStatusGetters").getTotalCount,
            o("WAWebStatusGetters").getIsLoading,
          ]),
          (t[0] = D))
        : (D = t[0]);
      var x = o("useWAWebStatusValues").useStatusValues(n, D),
        $ = x[0],
        P = x[1],
        N = x[2];
      if (($ <= 0 && E) || P === 0) return null;
      if (N) {
        var M;
        return (
          t[1] !== T ||
          t[2] !== k ||
          t[3] !== v ||
          t[4] !== C ||
          t[5] !== I ||
          t[6] !== $
            ? ((M = c.jsx(L, {
                customUnreadRingColor: T,
                respectAppTheme: k,
                size: v,
                stroke: C,
                theme: I,
                unreadCount: $,
              })),
              (t[1] = T),
              (t[2] = k),
              (t[3] = v),
              (t[4] = C),
              (t[5] = I),
              (t[6] = $),
              (t[7] = M))
            : (M = t[7]),
          M
        );
      }
      var w = 2 * f + C,
        A = "0 0 " + w + " " + w,
        F = T != null && $ > 0,
        O;
      t[8] !== R ||
      t[9] !== T ||
      t[10] !== F ||
      t[11] !== k ||
      t[12] !== C ||
      t[13] !== P ||
      t[14] !== $
        ? ((O =
            !R || P === 1 || F
              ? c.jsx(b, {
                  className: (s || (s = r("stylex")))($ > 0 ? h(k, T) : m.read),
                  customStrokeColor: $ > 0 ? T : null,
                  strokeWidth: C,
                })
              : c.jsx(S, {
                  customUnreadRingColor: T,
                  totalCount: P,
                  unreadCount: $,
                  stroke: C,
                  respectAppTheme: k,
                })),
          (t[8] = R),
          (t[9] = T),
          (t[10] = F),
          (t[11] = k),
          (t[12] = C),
          (t[13] = P),
          (t[14] = $),
          (t[15] = O))
        : (O = t[15]);
      var B = O,
        W;
      t[16] !== I
        ? ((W = (s || (s = r("stylex"))).props(_.get(I))),
          (t[16] = I),
          (t[17] = W))
        : (W = t[17]);
      var q;
      return (
        t[18] !== B || t[19] !== v || t[20] !== W || t[21] !== A
          ? ((q = c.jsx(
              "svg",
              babelHelpers.extends({}, W, {
                width: v,
                height: v,
                viewBox: A,
                children: B,
              }),
            )),
            (t[18] = B),
            (t[19] = v),
            (t[20] = W),
            (t[21] = A),
            (t[22] = q))
          : (q = t[22]),
        q
      );
    }
    ((l.RingTheme = p), (l.StatusImageRing = E));
  },
  98,
);
