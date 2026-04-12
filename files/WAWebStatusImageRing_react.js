__d(
  "WAWebStatusImageRing.react",
  [
    "$InternalEnum",
    "WAWebStatusGetters",
    "react",
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
      var n = (2 * f + t.strokeWidth) / 2,
        r = t.customStrokeColor,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return c.jsx(
        "circle",
        babelHelpers.extends(
          { cx: n, cy: n, r: f, fill: "none", strokeLinecap: "round" },
          o,
          r != null ? { style: { stroke: r } } : void 0,
        ),
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.className,
        n = e.customStrokeColor,
        r = e.dashesToDraw,
        o = e.dashesToOffsetBy,
        a = e.stroke,
        i = e.totalDashes,
        l = g,
        s = Math.PI * f * 2;
      s - g * i < 1 && (l = s / i / 1.2);
      var u = (s - l * i) / i,
        d = s / 4 - l / 2,
        m = C(d, o, l, u),
        p = i !== 1 ? y(r, u, s, l) : void 0;
      return c.jsx(b, {
        className: t,
        customStrokeColor: n,
        strokeDashoffset: m,
        strokeDasharray: p,
        strokeWidth: a,
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = e.customUnreadRingColor,
        n = e.respectAppTheme,
        o = e.stroke,
        a = e.totalCount,
        i = e.unreadCount,
        l = a - i,
        u =
          i > 0
            ? c.jsx(v, {
                className: (s || (s = r("stylex")))(h(n)),
                customStrokeColor: t,
                totalDashes: a,
                dashesToDraw: i,
                dashesToOffsetBy: a,
                stroke: o,
              })
            : null,
        d =
          l > 0
            ? c.jsx(v, {
                className: "x1xwosuo x18cpw0e",
                totalDashes: a,
                dashesToDraw: l,
                dashesToOffsetBy: l,
                stroke: o,
              })
            : null;
      return c.jsxs(c.Fragment, { children: [u, d] });
    }
    S.displayName = S.name + " [from " + i.id + "]";
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
      var t = e.customUnreadRingColor,
        n = e.respectAppTheme,
        o = e.size,
        a = e.stroke,
        i = e.theme,
        l = e.unreadCount;
      return c.jsx("div", {
        className: (s || (s = r("stylex")))(
          _.get(i),
          m.loadingRing,
          l > 0 ? h(n, t) : m.read,
        ),
        style: babelHelpers.extends(
          {},
          R(o, a),
          t != null ? { color: t } : void 0,
        ),
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      var t = e.id,
        n = e.stroke,
        a = n === void 0 ? 4 : n,
        i = e.size,
        l = i === void 0 ? 48 : i,
        u = e.breakRing,
        d = u === void 0 ? !0 : u,
        g = e.hideWhenNoUnreadStatuses,
        y = g === void 0 ? !1 : g,
        C = e.respectAppTheme,
        v = C === void 0 ? !1 : C,
        R = e.theme,
        E = R === void 0 ? p.StatusPanel : R,
        k = e.customUnreadRingColor,
        I = k === void 0 ? null : k,
        T = o("useWAWebStatusValues").useStatusValues(t, [
          o("WAWebStatusGetters").getUnreadCount,
          o("WAWebStatusGetters").getTotalCount,
          o("WAWebStatusGetters").getIsLoading,
        ]),
        D = T[0],
        x = T[1],
        $ = T[2];
      if ((D <= 0 && y) || x === 0) return null;
      if ($)
        return c.jsx(L, {
          customUnreadRingColor: I,
          respectAppTheme: v,
          size: l,
          stroke: a,
          theme: E,
          unreadCount: D,
        });
      var P = 2 * f + a,
        N = "0 0 " + P + " " + P,
        M = I != null && D > 0,
        w =
          !d || x === 1 || M
            ? c.jsx(b, {
                className: (s || (s = r("stylex")))(D > 0 ? h(v, I) : m.read),
                customStrokeColor: D > 0 ? I : null,
                strokeWidth: a,
              })
            : c.jsx(S, {
                customUnreadRingColor: I,
                totalCount: x,
                unreadCount: D,
                stroke: a,
                respectAppTheme: v,
              });
      return c.jsx(
        "svg",
        babelHelpers.extends({}, (s || (s = r("stylex"))).props(_.get(E)), {
          width: l,
          height: l,
          viewBox: N,
          children: w,
        }),
      );
    }
    ((E.displayName = E.name + " [from " + i.id + "]"),
      (l.RingTheme = p),
      (l.StatusImageRing = E));
  },
  98,
);
