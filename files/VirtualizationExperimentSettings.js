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
    var Q = D(K),
      X =
        (_ = r("qex")._("302")) != null
          ? _
          : o("VirtualizationExperimentConfig")
              .DEFAULT_PERSISTED_MARGIN_ENABLED;
    function Y(e) {
      var t;
      if (T.has(e))
        return X != null
          ? X
          : o("VirtualizationExperimentConfig")
              .DEFAULT_PERSISTED_MARGIN_ENABLED;
      var n = I(e);
      return (t = n == null ? void 0 : n.persisted_margin_enabled) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_PERSISTED_MARGIN_ENABLED;
    }
    var J = D(Y),
      Z =
        (f = r("qex")._("4590")) != null
          ? f
          : o("VirtualizationExperimentConfig").DEFAULT_SHARED_MARGIN_ENABLED;
    function ee(e) {
      var t;
      if (T.has(e)) return Z;
      var n = I(e);
      return (t = n == null ? void 0 : n.shared_margin_enabled) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_SHARED_MARGIN_ENABLED;
    }
    var te = D(ee),
      ne = r("qex")._("989");
    function re() {
      return ne == null || !Number.isInteger(ne) || ne < 1
        ? o("VirtualizationExperimentConfig").DEFAULT_EMA_WEIGHT_CAP
        : ne;
    }
    var oe = (g = r("qex")._("339")) != null ? g : "default",
      ae = oe === "disable" ? !0 : oe === "enable" ? !1 : null;
    function ie(e) {
      var t;
      if (T.has(e))
        return ae != null
          ? ae
          : o("VirtualizationExperimentConfig").DEFAULT_DISABLE_HIDING;
      var n = I(e);
      return (t = n == null ? void 0 : n.hiding_disabled) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_DISABLE_HIDING;
    }
    var le = D(ie),
      se =
        (h = r("qex")._("885")) != null
          ? h
          : o("VirtualizationExperimentConfig")
              .DEFAULT_PIN_CHILDREN_WITH_PLAYER;
    function ue(e) {
      var t;
      if (T.has(e))
        return se != null
          ? se
          : o("VirtualizationExperimentConfig")
              .DEFAULT_PIN_CHILDREN_WITH_PLAYER;
      var n = I(e);
      return (t = n == null ? void 0 : n.pin_children_with_player) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_PIN_CHILDREN_WITH_PLAYER;
    }
    var ce = D(ue);
    function de() {
      return r("gkx")("5800");
    }
    function me(e) {
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
            c = o("VirtualizationExperimentConfig").VALID_STRATEGIES.has(u)
              ? u
              : o("VirtualizationExperimentConfig")
                  .DEFAULT_VIRTUALIZATION_STRATEGY;
          s.length > 0 && t.set(s, c);
        }),
        t
      );
    }
    var pe = me((y = r("qex")._("1851")) != null ? y : "");
    function _e(e) {
      var t;
      if (pe.has(e)) {
        var n;
        return (n = pe.get(e)) != null
          ? n
          : o("VirtualizationExperimentConfig").DEFAULT_VIRTUALIZATION_STRATEGY;
      }
      var r = I(e);
      return (t = r == null ? void 0 : r.virtualization_strategy) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_VIRTUALIZATION_STRATEGY;
    }
    var fe =
      (C = r("qex")._("1271")) != null
        ? C
        : o("VirtualizationExperimentConfig")
            .DEFAULT_SKIP_SCROLL_ANCHORING_CHECK;
    function ge(e) {
      return T.has(e)
        ? fe != null
          ? fe
          : o("VirtualizationExperimentConfig")
              .DEFAULT_SKIP_SCROLL_ANCHORING_CHECK
        : (R && E) || L;
    }
    var he = D(ge),
      ye = D(_e),
      Ce = function (t) {
        var e = I(t);
        return (e == null ? void 0 : e.is_at_bottom_scroll_up) === !0 ||
          o("VirtualizationExperimentConfig").infiniteScrollUpSurfaces.has(t)
          ? !0
          : o("VirtualizationExperimentConfig").DEFAULT_AT_BOTTOM_SCROLL_UP;
      },
      be =
        (b = r("qex")._("5027")) != null
          ? b
          : o("VirtualizationExperimentConfig").DEFAULT_TEXT_SEARCHABLE;
    function ve(e) {
      var t;
      if (T.has(e))
        return be != null
          ? be
          : o("VirtualizationExperimentConfig").DEFAULT_TEXT_SEARCHABLE;
      var n = I(e);
      return (t = n == null ? void 0 : n.text_searchable) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_TEXT_SEARCHABLE;
    }
    var Se = D(ve);
    ((l.isSurfaceEnabled = $),
      (l.getTopBottomMargin = w),
      (l.getReadAheadMarginMax = F),
      (l.logQEExposureOnceWhenNecessary = W),
      (l.getActivityModeOn = V),
      (l.getPinChildrenOnInteration = z),
      (l.getPinExclusionEnabled = Q),
      (l.getPersistedMarginEnabled = J),
      (l.getSharedMarginEnabled = te),
      (l.getEmaWeightCap = re),
      (l.isHidingDisabled = le),
      (l.getPinChildrenWithPlayer = ce),
      (l.isPinVideoPostsWithPlayerEnabled = de),
      (l.getSkipScrollAnchoringCheck = he),
      (l.getVirtualizationStrategy = ye),
      (l.getIsInfiniteScrollUp = Ce),
      (l.getTextSearchable = Se));
  },
  98,
);
