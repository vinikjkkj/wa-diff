__d(
  "AdsAdPreviewClientSideUtils",
  [
    "AdsAdPreviewRenderSpecUtils",
    "AdsAdvancedPreviewClientSidePreviewUtils",
    "AdsClientSidePreviewWhitelistConfig.experimental",
    "AdsPreviewConsistencyContainerTypes",
    "AdsPreviewsPlugins",
    "URI",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useRef,
      c = r(
        "AdsClientSidePreviewWhitelistConfig.experimental",
      ).ENTRYPOINT_WHITELIST.concat(
        o("AdsPreviewConsistencyContainerTypes")
          .AD_CLIENT_CONSISTENCY_CONTAINER_CLIENT,
      );
    function d(e) {
      return (
        (e.adCreativeOptimizationType == null ||
          e.adCreativeOptimizationType === 0) &&
        (e.adCreativeOptimizationOptionValue == null ||
          e.adCreativeOptimizationOptionValue === 0) &&
        (e.adCreativeOptimizationMulti == null ||
          e.adCreativeOptimizationMulti.length === 0)
      );
    }
    function m(e) {
      return (
        e == null ||
        o(
          "AdsAdvancedPreviewClientSidePreviewUtils",
        ).isVariationClientSidePreviewSupported(e)
      );
    }
    function p(e, t, n, a, i, l, s, u) {
      return i
        ? "bulk_editing_with_pac"
        : o("AdsAdPreviewRenderSpecUtils").isRenderSpecSupported(t)
          ? c.includes(n)
            ? d(l)
              ? m(s)
                ? r("AdsPreviewsPlugins")
                    .withShape({ apiFormat: e })
                    .getOne()
                    .isClientSideSupported(t, n, a, u)
                  ? null
                  : "format_plugin"
                : "variation"
              : "aco_setting"
            : "entrypoint_not_allowlisted"
          : "render_spec_unsupported";
    }
    function _(e, t, n, r, o, a, i, l) {
      return p(e, t, n, r, o, a, i, l) == null;
    }
    function f(e, t, n, r, o, a, i, l) {
      return (
        a === void 0 && (a = {}),
        l === void 0 && (l = !1),
        l ? "supplied_preview" : p(e, t, n, r, o, a, i, !1)
      );
    }
    function g(e) {
      return e === "bulk_editing_with_pac"
        ? "bulk_editing_pac"
        : e === "render_spec_unsupported"
          ? "render_spec"
          : e === "entrypoint_not_allowlisted"
            ? "entrypoint"
            : e === "aco_setting"
              ? "aco"
              : e === "variation" ||
                  e === "format_plugin" ||
                  e === "supplied_preview"
                ? e
                : e == null
                  ? null
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
    }
    function h(e, t, n, r, o, a, i) {
      return (a === void 0 && (a = {}), g(f(e, t, n, r, o, a, i)));
    }
    function y(e, t, n, r, o, a, i) {
      return (a === void 0 && (a = {}), _(e, t, n, r, o, a, i, !1));
    }
    function C(e, t, n, r, o) {
      return _(e, t, n, r, !1, {}, o, !0);
    }
    function b(t, n) {
      var o,
        a = new (e || (e = r("URI")))(t).getPath(),
        i = new e(n).getPath(),
        l = u(null);
      return (
        i === ((o = l.current) == null ? void 0 : o.renderSpecMediaBaseURL) ||
          (l.current = { mediaURL: n, renderSpecMediaBaseURL: a }),
        l.current
      );
    }
    ((l.getClientSidePreviewRejectReason = f),
      (l.getClientSideUnsupportedReasonFromRejectReason = g),
      (l.getClientSideUnsupportedReason = h),
      (l.isClientSideSupported = y),
      (l.isClientSideSupportedBypassGK = C),
      (l.useCachedMediaURL = b));
  },
  98,
);
