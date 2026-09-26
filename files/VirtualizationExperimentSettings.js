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
      b = (C = r("gkx"))("2548"),
      v = C("221"),
      S = C("19232"),
      R = C("6600");
    function L(e) {
      return Object.prototype.hasOwnProperty.call(
        o("VirtualizationExperimentConfig").ROLLOUT_CONFIG,
        e,
      )
        ? o("VirtualizationExperimentConfig").ROLLOUT_CONFIG
        : b &&
            Object.prototype.hasOwnProperty.call(
              o("VirtualizationExperimentConfig").GK_HOLDOUT_CONFIG,
              e,
            )
          ? o("VirtualizationExperimentConfig").GK_HOLDOUT_CONFIG
          : S &&
              Object.prototype.hasOwnProperty.call(
                o("VirtualizationExperimentConfig").FIREFOX_ROLLOUT_CONFIG,
                e,
              )
            ? o("VirtualizationExperimentConfig").FIREFOX_ROLLOUT_CONFIG
            : v &&
                Object.prototype.hasOwnProperty.call(
                  o("VirtualizationExperimentConfig").GK_ROLLOUT_CONFIG,
                  e,
                )
              ? o("VirtualizationExperimentConfig").GK_ROLLOUT_CONFIG
              : null;
    }
    var E = function (t) {
        var e = L(t);
        return e == null ? void 0 : e[t];
      },
      k = new Set(
        ((e = r("qex")._("641")) != null ? e : "").split(",").map(function (e) {
          return e.trim();
        }),
      );
    function I(e) {
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
    function T(e) {
      var t;
      if (k.has(e)) return !0;
      var n = E(e);
      return (t = n == null ? void 0 : n.surface_enabled) != null ? t : !1;
    }
    var D = I(T);
    function x(e) {
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
    var $ = x((s = r("qex")._("628")) != null ? s : "");
    function P(e) {
      var t;
      if ($.has(e)) {
        var n;
        return (n = $.get(e)) != null
          ? n
          : o("VirtualizationExperimentConfig").DEFAULT_TOP_BOTTOM_MARGIN;
      }
      var r = E(e);
      return (t = r == null ? void 0 : r.root_margin_top_bottom) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_TOP_BOTTOM_MARGIN;
    }
    var N = I(P),
      M = new Set(((u = r("qex")._("642")) != null ? u : "all").split(",")),
      w = new Set();
    function A(e) {
      w.has(e) ||
        ((M.has("all") || M.has(e)) &&
          o("QE2Logger").logExposureForActingAccount(
            "comet_front_end_virtualization",
          ),
        w.add(e));
    }
    var F =
      (c = r("qex")._("4937")) != null
        ? c
        : o("VirtualizationExperimentConfig").DEFAULT_ACTIVITY_MODE_ON;
    function O(e) {
      var t;
      if (k.has(e)) return F != null ? F : !1;
      var n = E(e);
      return (t = n == null ? void 0 : n.react_activity_mode) != null ? t : !1;
    }
    var B = I(O),
      W =
        (d = r("qex")._("648")) != null
          ? d
          : o("VirtualizationExperimentConfig")
              .DEFAULT_PIN_CHILDREN_ON_INTERACTION;
    function q(e) {
      var t;
      if (k.has(e)) return W != null ? W : !0;
      var n = E(e);
      return (t = n == null ? void 0 : n.pin_children_on_interaction) != null
        ? t
        : !0;
    }
    var U = I(q),
      V =
        (m = r("qex")._("347")) != null
          ? m
          : o("VirtualizationExperimentConfig").DEFAULT_PIN_EXCLUSION_ENABLED;
    function H(e) {
      var t;
      if (k.has(e))
        return V != null
          ? V
          : o("VirtualizationExperimentConfig").DEFAULT_PIN_EXCLUSION_ENABLED;
      var n = E(e);
      return (t = n == null ? void 0 : n.pin_exclusion_enabled) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_PIN_EXCLUSION_ENABLED;
    }
    var G = I(H),
      z =
        (p = r("qex")._("302")) != null
          ? p
          : o("VirtualizationExperimentConfig")
              .DEFAULT_PERSISTED_MARGIN_ENABLED;
    function j(e) {
      var t;
      if (k.has(e))
        return z != null
          ? z
          : o("VirtualizationExperimentConfig")
              .DEFAULT_PERSISTED_MARGIN_ENABLED;
      var n = E(e);
      return (t = n == null ? void 0 : n.persisted_margin_enabled) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_PERSISTED_MARGIN_ENABLED;
    }
    var K = I(j),
      Q = r("qex")._("989");
    function X() {
      return Q == null || !Number.isInteger(Q) || Q < 1
        ? o("VirtualizationExperimentConfig").DEFAULT_EMA_WEIGHT_CAP
        : Q;
    }
    var Y = (_ = r("qex")._("339")) != null ? _ : "default",
      J = Y === "disable" ? !0 : Y === "enable" ? !1 : null;
    function Z(e) {
      var t;
      if (k.has(e))
        return J != null
          ? J
          : o("VirtualizationExperimentConfig").DEFAULT_DISABLE_HIDING;
      var n = E(e);
      return (t = n == null ? void 0 : n.hiding_disabled) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_DISABLE_HIDING;
    }
    var ee = I(Z),
      te =
        (f = r("qex")._("885")) != null
          ? f
          : o("VirtualizationExperimentConfig")
              .DEFAULT_PIN_CHILDREN_WITH_PLAYER;
    function ne(e) {
      var t;
      if (k.has(e))
        return te != null
          ? te
          : o("VirtualizationExperimentConfig")
              .DEFAULT_PIN_CHILDREN_WITH_PLAYER;
      var n = E(e);
      return (t = n == null ? void 0 : n.pin_children_with_player) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_PIN_CHILDREN_WITH_PLAYER;
    }
    var re = I(ne),
      oe = r("qex")._("4749") === !0;
    function ae() {
      return oe;
    }
    function ie(e) {
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
    var le = ie((g = r("qex")._("1851")) != null ? g : "");
    function se(e) {
      var t;
      if (le.has(e)) {
        var n;
        return (n = le.get(e)) != null
          ? n
          : o("VirtualizationExperimentConfig").DEFAULT_VIRTUALIZATION_STRATEGY;
      }
      var r = E(e);
      return (t = r == null ? void 0 : r.virtualization_strategy) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_VIRTUALIZATION_STRATEGY;
    }
    var ue =
      (h = r("qex")._("1271")) != null
        ? h
        : o("VirtualizationExperimentConfig")
            .DEFAULT_SKIP_SCROLL_ANCHORING_CHECK;
    function ce(e) {
      return k.has(e)
        ? ue != null
          ? ue
          : o("VirtualizationExperimentConfig")
              .DEFAULT_SKIP_SCROLL_ANCHORING_CHECK
        : (v && R) || S;
    }
    var de = I(ce),
      me = I(se),
      pe = function (t) {
        var e = E(t);
        return (e == null ? void 0 : e.is_at_bottom_scroll_up) === !0 ||
          o("VirtualizationExperimentConfig").infiniteScrollUpSurfaces.has(t)
          ? !0
          : o("VirtualizationExperimentConfig").DEFAULT_AT_BOTTOM_SCROLL_UP;
      },
      _e =
        (y = r("qex")._("5027")) != null
          ? y
          : o("VirtualizationExperimentConfig").DEFAULT_TEXT_SEARCHABLE;
    function fe(e) {
      var t;
      if (k.has(e))
        return _e != null
          ? _e
          : o("VirtualizationExperimentConfig").DEFAULT_TEXT_SEARCHABLE;
      var n = E(e);
      return (t = n == null ? void 0 : n.text_searchable) != null
        ? t
        : o("VirtualizationExperimentConfig").DEFAULT_TEXT_SEARCHABLE;
    }
    var ge = I(fe);
    ((l.isSurfaceEnabled = D),
      (l.getTopBottomMargin = N),
      (l.logQEExposureOnceWhenNecessary = A),
      (l.getActivityModeOn = B),
      (l.getPinChildrenOnInteration = U),
      (l.getPinExclusionEnabled = G),
      (l.getPersistedMarginEnabled = K),
      (l.getEmaWeightCap = X),
      (l.isHidingDisabled = ee),
      (l.getPinChildrenWithPlayer = re),
      (l.getRereadPlayerFlagAtMargin = ae),
      (l.getSkipScrollAnchoringCheck = de),
      (l.getVirtualizationStrategy = me),
      (l.getIsInfiniteScrollUp = pe),
      (l.getTextSearchable = ge));
  },
  98,
);
