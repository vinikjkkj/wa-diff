__d(
  "AdsAplusCAnimationUtils",
  ["$InternalEnum", "first", "gkx", "immutable", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        GENAI_ANIMATION: 1105,
        MULTI_SHOT_ANIMATION: 1151,
        AVG_V1_ANIMATION: 1160,
        AVG_V2_ANIMATION: 1164,
      }),
      s = [
        e.AVG_V2_ANIMATION,
        e.AVG_V1_ANIMATION,
        e.GENAI_ANIMATION,
        e.MULTI_SHOT_ANIMATION,
      ];
    function u() {
      var t = [];
      for (var n of e.members())
        (n === e.AVG_V1_ANIMATION && !d("silent")) ||
          (n === e.AVG_V2_ANIMATION && !m()) ||
          t.push(n);
      return (
        t.sort(function (e, t) {
          var n = s.indexOf(e),
            r = s.indexOf(t),
            o = n === -1 ? s.length : n,
            a = r === -1 ? s.length : r;
          return o - a;
        }),
        t
      );
    }
    function c(e) {
      return e ? r("gkx")("24552") : r("gkx")("7590");
    }
    function d(e) {
      return e ? r("gkx")("810") : r("gkx")("1885");
    }
    function m() {
      return r("gkx")("9087");
    }
    function p(e, t) {
      return e == null ? !1 : r("isTruthy")(t) ? h(e) : y(e);
    }
    function _(e) {
      var t,
        n = e == null ? null : r("first")(e),
        o =
          n == null ||
          (t = n.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.link_data) == null
            ? void 0
            : t.child_attachments;
      if (o == null || o.length < 2) return null;
      var a = o[0].image_hash;
      return a == null || a === "" ? null : a;
    }
    function f(t, n) {
      if ((n === void 0 && (n = !1), n && t === e.AVG_V1_ANIMATION))
        return {
          adCreativeOptimizationType: 319,
          adCreativeOptimizationOptionValue: 3190008,
          apiFormat: "INSTAGRAM_STANDARD",
          shouldUsePreloader: !0,
        };
      var r =
        t === e.GENAI_ANIMATION
          ? 1220012
          : t === e.AVG_V1_ANIMATION
            ? 1220015
            : t === e.AVG_V2_ANIMATION
              ? 1220016
              : t === e.MULTI_SHOT_ANIMATION
                ? 1220014
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })();
      return {
        adCreativeOptimizationType: 122,
        adCreativeOptimizationOptionValue: r,
        apiFormat: "INSTAGRAM_REELS",
        shouldUsePreloader: !0,
      };
    }
    function g(e) {
      e === void 0 && (e = !1);
      var t = u(),
        n = t.map(function (t) {
          return f(t, e);
        });
      return r("immutable").List(n);
    }
    function h(e) {
      if (e == null) return !1;
      var t = C(e, !0);
      return t === "photo";
    }
    function y(e) {
      if (e == null) return !1;
      var t = C(e, !1);
      return t === "photo";
    }
    function C(e, t) {
      var n, r;
      return (n = t
        ? e.type
        : (r = e.attachments) == null || (r = r.data[0]) == null
          ? void 0
          : r.type) != null
        ? n
        : "";
    }
    ((l.passAnimationUnificationGK = c),
      (l.passAnimationModelUpgradeTransparencyGK = d),
      (l.isSupportedExistingPostForAnimation = p),
      (l.getCarouselFirstCardImageHash = _),
      (l.getAddAnimationOptimizationInfoListForAdgroup = g));
  },
  98,
);
