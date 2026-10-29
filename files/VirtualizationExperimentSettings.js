__d(
  "VirtualizationExperimentSettings",
  ["QE2Logger", "VirtualizationExperimentConfig", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S = (v = r("gkx"))("2548"),
      R = v("221"),
      L = v("19232"),
      E = v("6600");
    function k(e) {
      return Object.prototype.hasOwnProperty.call(
        o("VirtualizationExperimentConfig").ROLLOUT_CONFIG,
        e,
      )
        ? o("VirtualizationExperimentConfig").ROLLOUT_CONFIG
        : S &&
            Object.prototype.hasOwnProperty.call(
              o("VirtualizationExperimentConfig").GK_HOLDOUT_CONFIG,
              e,
            )
          ? o("VirtualizationExperimentConfig").GK_HOLDOUT_CONFIG
          : L &&
              Object.prototype.hasOwnProperty.call(
                o("VirtualizationExperimentConfig").FIREFOX_ROLLOUT_CONFIG,
                e,
              )
            ? o("VirtualizationExperimentConfig").FIREFOX_ROLLOUT_CONFIG
            : R &&
                Object.prototype.hasOwnProperty.call(
                  o("VirtualizationExperimentConfig").GK_ROLLOUT_CONFIG,
                  e,
                )
              ? o("VirtualizationExperimentConfig").GK_ROLLOUT_CONFIG
              : null;
    }
    var I = function (t) {
        var e = k(t);
        return e == null ? void 0 : e[t];
      },
      T = new Set(
        ((e = r("qex")._("641")) != null ? e : "").split(",").map(function (e) {
          return e.trim();
        }),
      );
    function D(e) {
      var t = new Map();
      return function (n) {
        if (t.has(n)) {
          var r = t.get(n);
          if (r !== void 0) return r;
        }
        var o = e(n);
        return (t.set(n, o), o);
      };
    }
    function x(e) {
      var t;
      if (T.has(e)) return !0;
      var n = I(e);
      return (t = n == null ? void 0 : n.surface_enabled) != null ? t : !1;
    }
    var $ = D(x);
    function P(e) {
      var t = new Map();
      return (
        e.split(",").forEach(function (e) {
          var n,
            r,
            o = e.trim(),
            a = o.split(":"),
            i = a[0],
            l = a[1],
            s = (n = i == null ? void 0 : i.trim()) != null ? n : "",
            u = parseInt(
              (r = l == null ? void 0 : l.trim()) != null ? r : "",
              10,
            );
          s.length > 0 && !Number.isNaN(u) && t.set(s, u);
        }),
        t
      );
    }
    var N = P((s = r("qex")._("628")) != null ? s : "");
    function M(e) {
      var t;
      if (N.has(e)) {
        var n;
        return (n = N.get(e)) != null
          ? n
          : o("VirtualizationExperimentConfig").DEFAULT_TOP_BOTTOM_MARGIN;
      }
      var r = I(e);
      return (t = r == null ? void 0 : r.root_margin_top_bottom) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_TOP_BOTTOM_MARGIN;
    }
    var w = D(M),
      A = P((u = r("qex")._("2453")) != null ? u : "");
    function F(e) {
      var t = A.get(e);
      return t != null && t >= 0 ? t : null;
    }
    var O = new Set(((c = r("qex")._("642")) != null ? c : "all").split(",")),
      B = new Set();
    function W(e) {
      B.has(e) ||
        ((O.has("all") || O.has(e)) &&
          o("QE2Logger").logExposureForActingAccount(
            "comet_front_end_virtualization",
          ),
        B.add(e));
    }
    var q =
      (d = r("qex")._("4937")) != null
        ? d
        : o("VirtualizationExperimentConfig").DEFAULT_ACTIVITY_MODE_ON;
    function U(e) {
      var t;
      if (T.has(e)) return q != null ? q : !1;
      var n = I(e);
      return (t = n == null ? void 0 : n.react_activity_mode) != null ? t : !1;
    }
    var V = D(U),
      H =
        (m = r("qex")._("648")) != null
          ? m
          : o("VirtualizationExperimentConfig")
              .DEFAULT_PIN_CHILDREN_ON_INTERACTION;
    function G(e) {
      var t;
      if (T.has(e)) return H != null ? H : !0;
      var n = I(e);
      return (t = n == null ? void 0 : n.pin_children_on_interaction) != null
        ? t
        : !0;
    }
    var z = D(G),
      j =
        (p = r("qex")._("347")) != null
          ? p
          : o("VirtualizationExperimentConfig").DEFAULT_PIN_EXCLUSION_ENABLED;
    function K(e) {
      var t;
      if (T.has(e))
        return j != null
          ? j
          : o("VirtualizationExperimentConfig").DEFAULT_PIN_EXCLUSION_ENABLED;
      var n = I(e);
      return (t = n == null ? void 0 : n.pin_exclusion_enabled) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_PIN_EXCLUSION_ENABLED;
    }
    var Q = D(K);
    function X() {
      var e;
      return (e = r("qex")._("2825")) != null
        ? e
        : o("VirtualizationExperimentConfig")
            .DEFAULT_MEDIA_CONTROL_PIN_EXCLUSION;
    }
    function Y() {
      var e;
      return (e = r("qex")._("48")) != null
        ? e
        : o("VirtualizationExperimentConfig")
            .DEFAULT_RESUME_FEED_VIDEO_PLAYHEAD;
    }
    var J =
      (_ = r("qex")._("4590")) != null
        ? _
        : o("VirtualizationExperimentConfig").DEFAULT_SHARED_MARGIN_ENABLED;
    function Z(e) {
      var t;
      if (T.has(e)) return J;
      var n = I(e);
      return (t = n == null ? void 0 : n.shared_margin_enabled) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_SHARED_MARGIN_ENABLED;
    }
    var ee = D(Z),
      te = (f = r("qex")._("339")) != null ? f : "default",
      ne = te === "disable" ? !0 : te === "enable" ? !1 : null;
    function re(e) {
      var t;
      if (T.has(e))
        return ne != null
          ? ne
          : o("VirtualizationExperimentConfig").DEFAULT_DISABLE_HIDING;
      var n = I(e);
      return (t = n == null ? void 0 : n.hiding_disabled) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_DISABLE_HIDING;
    }
    var oe = D(re),
      ae =
        (g = r("qex")._("885")) != null
          ? g
          : o("VirtualizationExperimentConfig")
              .DEFAULT_PIN_CHILDREN_WITH_PLAYER;
    function ie(e) {
      var t;
      if (T.has(e))
        return ae != null
          ? ae
          : o("VirtualizationExperimentConfig")
              .DEFAULT_PIN_CHILDREN_WITH_PLAYER;
      var n = I(e);
      return (t = n == null ? void 0 : n.pin_children_with_player) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_PIN_CHILDREN_WITH_PLAYER;
    }
    var le = D(ie);
    function se() {
      return r("gkx")("5800");
    }
    var ue = (h = r("qex")._("5443")) != null ? h : !1;
    function ce() {
      return ue;
    }
    function de(e) {
      var t = new Map();
      return (
        e.split(",").forEach(function (e) {
          var n,
            r = e.trim(),
            a = r.split(":"),
            i = a[0],
            l = a[1],
            s = (n = i == null ? void 0 : i.trim()) != null ? n : "",
            u = l == null ? void 0 : l.trim(),
            c =
              o("VirtualizationExperimentConfig").VALID_STRATEGIES.has(u) &&
              (u === "static" || u === "dynamic")
                ? u
                : o("VirtualizationExperimentConfig")
                    .DEFAULT_VIRTUALIZATION_STRATEGY;
          s.length > 0 && t.set(s, c);
        }),
        t
      );
    }
    var me = de((y = r("qex")._("1851")) != null ? y : "");
    function pe(e) {
      var t;
      if (me.has(e)) {
        var n;
        return (n = me.get(e)) != null
          ? n
          : o("VirtualizationExperimentConfig").DEFAULT_VIRTUALIZATION_STRATEGY;
      }
      var r = I(e);
      return (t = r == null ? void 0 : r.virtualization_strategy) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_VIRTUALIZATION_STRATEGY;
    }
    var _e =
      (C = r("qex")._("1271")) != null
        ? C
        : o("VirtualizationExperimentConfig")
            .DEFAULT_SKIP_SCROLL_ANCHORING_CHECK;
    function fe(e) {
      return T.has(e)
        ? _e != null
          ? _e
          : o("VirtualizationExperimentConfig")
              .DEFAULT_SKIP_SCROLL_ANCHORING_CHECK
        : (R && E) || L;
    }
    var ge = D(fe),
      he = D(pe),
      ye = function (t) {
        var e = I(t);
        return (e == null ? void 0 : e.is_at_bottom_scroll_up) === !0 ||
          o("VirtualizationExperimentConfig").infiniteScrollUpSurfaces.has(t)
          ? !0
          : o("VirtualizationExperimentConfig").DEFAULT_AT_BOTTOM_SCROLL_UP;
      },
      Ce =
        (b = r("qex")._("5027")) != null
          ? b
          : o("VirtualizationExperimentConfig").DEFAULT_TEXT_SEARCHABLE;
    function be(e) {
      var t;
      if (T.has(e))
        return Ce != null
          ? Ce
          : o("VirtualizationExperimentConfig").DEFAULT_TEXT_SEARCHABLE;
      var n = I(e);
      return (t = n == null ? void 0 : n.text_searchable) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_TEXT_SEARCHABLE;
    }
    var ve = D(be);
    ((l.isSurfaceEnabled = $),
      (l.getTopBottomMargin = w),
      (l.getReadAheadMarginMax = F),
      (l.logQEExposureOnceWhenNecessary = W),
      (l.getActivityModeOn = V),
      (l.getPinChildrenOnInteration = z),
      (l.getPinExclusionEnabled = Q),
      (l.isMediaControlPinExclusionEnabled = X),
      (l.isResumeFeedVideoPlayheadEnabled = Y),
      (l.getSharedMarginEnabled = ee),
      (l.isHidingDisabled = oe),
      (l.getPinChildrenWithPlayer = le),
      (l.isPinVideoPostsWithPlayerEnabled = se),
      (l.isMessageExpandPinExclusionEnabled = ce),
      (l.getSkipScrollAnchoringCheck = ge),
      (l.getVirtualizationStrategy = he),
      (l.getIsInfiniteScrollUp = ye),
      (l.getTextSearchable = ve));
  },
  98,
);
