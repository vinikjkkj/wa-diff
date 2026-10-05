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
      v = (b = r("gkx"))("2548"),
      S = b("221"),
      R = b("19232"),
      L = b("6600");
    function E(e) {
      return Object.prototype.hasOwnProperty.call(
        o("VirtualizationExperimentConfig").ROLLOUT_CONFIG,
        e,
      )
        ? o("VirtualizationExperimentConfig").ROLLOUT_CONFIG
        : v &&
            Object.prototype.hasOwnProperty.call(
              o("VirtualizationExperimentConfig").GK_HOLDOUT_CONFIG,
              e,
            )
          ? o("VirtualizationExperimentConfig").GK_HOLDOUT_CONFIG
          : R &&
              Object.prototype.hasOwnProperty.call(
                o("VirtualizationExperimentConfig").FIREFOX_ROLLOUT_CONFIG,
                e,
              )
            ? o("VirtualizationExperimentConfig").FIREFOX_ROLLOUT_CONFIG
            : S &&
                Object.prototype.hasOwnProperty.call(
                  o("VirtualizationExperimentConfig").GK_ROLLOUT_CONFIG,
                  e,
                )
              ? o("VirtualizationExperimentConfig").GK_ROLLOUT_CONFIG
              : null;
    }
    var k = function (t) {
        var e = E(t);
        return e == null ? void 0 : e[t];
      },
      I = new Set(
        ((e = r("qex")._("641")) != null ? e : "").split(",").map(function (e) {
          return e.trim();
        }),
      );
    function T(e) {
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
    function D(e) {
      var t;
      if (I.has(e)) return !0;
      var n = k(e);
      return (t = n == null ? void 0 : n.surface_enabled) != null ? t : !1;
    }
    var x = T(D);
    function $(e) {
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
    var P = $((s = r("qex")._("628")) != null ? s : "");
    function N(e) {
      var t;
      if (P.has(e)) {
        var n;
        return (n = P.get(e)) != null
          ? n
          : o("VirtualizationExperimentConfig").DEFAULT_TOP_BOTTOM_MARGIN;
      }
      var r = k(e);
      return (t = r == null ? void 0 : r.root_margin_top_bottom) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_TOP_BOTTOM_MARGIN;
    }
    var M = T(N),
      w = $((u = r("qex")._("2453")) != null ? u : "");
    function A(e) {
      var t = w.get(e);
      return t != null && t >= 0 ? t : null;
    }
    var F = new Set(((c = r("qex")._("642")) != null ? c : "all").split(",")),
      O = new Set();
    function B(e) {
      O.has(e) ||
        ((F.has("all") || F.has(e)) &&
          o("QE2Logger").logExposureForActingAccount(
            "comet_front_end_virtualization",
          ),
        O.add(e));
    }
    var W =
      (d = r("qex")._("4937")) != null
        ? d
        : o("VirtualizationExperimentConfig").DEFAULT_ACTIVITY_MODE_ON;
    function q(e) {
      var t;
      if (I.has(e)) return W != null ? W : !1;
      var n = k(e);
      return (t = n == null ? void 0 : n.react_activity_mode) != null ? t : !1;
    }
    var U = T(q),
      V =
        (m = r("qex")._("648")) != null
          ? m
          : o("VirtualizationExperimentConfig")
              .DEFAULT_PIN_CHILDREN_ON_INTERACTION;
    function H(e) {
      var t;
      if (I.has(e)) return V != null ? V : !0;
      var n = k(e);
      return (t = n == null ? void 0 : n.pin_children_on_interaction) != null
        ? t
        : !0;
    }
    var G = T(H),
      z =
        (p = r("qex")._("347")) != null
          ? p
          : o("VirtualizationExperimentConfig").DEFAULT_PIN_EXCLUSION_ENABLED;
    function j(e) {
      var t;
      if (I.has(e))
        return z != null
          ? z
          : o("VirtualizationExperimentConfig").DEFAULT_PIN_EXCLUSION_ENABLED;
      var n = k(e);
      return (t = n == null ? void 0 : n.pin_exclusion_enabled) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_PIN_EXCLUSION_ENABLED;
    }
    var K = T(j),
      Q =
        (_ = r("qex")._("302")) != null
          ? _
          : o("VirtualizationExperimentConfig")
              .DEFAULT_PERSISTED_MARGIN_ENABLED;
    function X(e) {
      var t;
      if (I.has(e))
        return Q != null
          ? Q
          : o("VirtualizationExperimentConfig")
              .DEFAULT_PERSISTED_MARGIN_ENABLED;
      var n = k(e);
      return (t = n == null ? void 0 : n.persisted_margin_enabled) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_PERSISTED_MARGIN_ENABLED;
    }
    var Y = T(X),
      J = r("qex")._("989");
    function Z() {
      return J == null || !Number.isInteger(J) || J < 1
        ? o("VirtualizationExperimentConfig").DEFAULT_EMA_WEIGHT_CAP
        : J;
    }
    var ee = (f = r("qex")._("339")) != null ? f : "default",
      te = ee === "disable" ? !0 : ee === "enable" ? !1 : null;
    function ne(e) {
      var t;
      if (I.has(e))
        return te != null
          ? te
          : o("VirtualizationExperimentConfig").DEFAULT_DISABLE_HIDING;
      var n = k(e);
      return (t = n == null ? void 0 : n.hiding_disabled) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_DISABLE_HIDING;
    }
    var re = T(ne),
      oe =
        (g = r("qex")._("885")) != null
          ? g
          : o("VirtualizationExperimentConfig")
              .DEFAULT_PIN_CHILDREN_WITH_PLAYER;
    function ae(e) {
      var t;
      if (I.has(e))
        return oe != null
          ? oe
          : o("VirtualizationExperimentConfig")
              .DEFAULT_PIN_CHILDREN_WITH_PLAYER;
      var n = k(e);
      return (t = n == null ? void 0 : n.pin_children_with_player) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_PIN_CHILDREN_WITH_PLAYER;
    }
    var ie = T(ae),
      le = r("qex")._("4749") === !0;
    function se() {
      return le;
    }
    function ue(e) {
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
    var ce = ue((h = r("qex")._("1851")) != null ? h : "");
    function de(e) {
      var t;
      if (ce.has(e)) {
        var n;
        return (n = ce.get(e)) != null
          ? n
          : o("VirtualizationExperimentConfig").DEFAULT_VIRTUALIZATION_STRATEGY;
      }
      var r = k(e);
      return (t = r == null ? void 0 : r.virtualization_strategy) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_VIRTUALIZATION_STRATEGY;
    }
    var me =
      (y = r("qex")._("1271")) != null
        ? y
        : o("VirtualizationExperimentConfig")
            .DEFAULT_SKIP_SCROLL_ANCHORING_CHECK;
    function pe(e) {
      return I.has(e)
        ? me != null
          ? me
          : o("VirtualizationExperimentConfig")
              .DEFAULT_SKIP_SCROLL_ANCHORING_CHECK
        : (S && L) || R;
    }
    var _e = T(pe),
      fe = T(de),
      ge = function (t) {
        var e = k(t);
        return (e == null ? void 0 : e.is_at_bottom_scroll_up) === !0 ||
          o("VirtualizationExperimentConfig").infiniteScrollUpSurfaces.has(t)
          ? !0
          : o("VirtualizationExperimentConfig").DEFAULT_AT_BOTTOM_SCROLL_UP;
      },
      he =
        (C = r("qex")._("5027")) != null
          ? C
          : o("VirtualizationExperimentConfig").DEFAULT_TEXT_SEARCHABLE;
    function ye(e) {
      var t;
      if (I.has(e))
        return he != null
          ? he
          : o("VirtualizationExperimentConfig").DEFAULT_TEXT_SEARCHABLE;
      var n = k(e);
      return (t = n == null ? void 0 : n.text_searchable) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_TEXT_SEARCHABLE;
    }
    var Ce = T(ye);
    ((l.isSurfaceEnabled = x),
      (l.getTopBottomMargin = M),
      (l.getReadAheadMarginMax = A),
      (l.logQEExposureOnceWhenNecessary = B),
      (l.getActivityModeOn = U),
      (l.getPinChildrenOnInteration = G),
      (l.getPinExclusionEnabled = K),
      (l.getPersistedMarginEnabled = Y),
      (l.getEmaWeightCap = Z),
      (l.isHidingDisabled = re),
      (l.getPinChildrenWithPlayer = ie),
      (l.getRereadPlayerFlagAtMargin = se),
      (l.getSkipScrollAnchoringCheck = _e),
      (l.getVirtualizationStrategy = fe),
      (l.getIsInfiniteScrollUp = ge),
      (l.getTextSearchable = Ce));
  },
  98,
);
