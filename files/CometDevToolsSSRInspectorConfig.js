__d(
  "CometDevToolsSSRInspectorConfig",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e != null && e.includes("instagram.com");
      return {
        comet_ssr_use_match_media_throw: {
          description:
            "Throws an error if content contains a useMatchMedia call,  which is not safe for SSR. The error results in client-side rendering.",
          value: r("gkx")("20941"),
        },
        comet_ssr_viz: {
          description:
            "Visualize the hydration of SSR content. The red outline indicates a unhydrated boundary with the background color indicating the depth. The blue outline indicates a fallback boundary.",
          value: r("gkx")("22865"),
        },
        comet_ssr_wait_for_dev: {
          description: "Enables wait for dev mode.",
          hidden: !0,
          value: r("gkx")("22866"),
        },
        haas_enable_sample_profiling: {
          description:
            "Enables sample profiling. (This would not work if SSR is not enabled on the app level or route level.) This is to toggle between on/off for SSR sample profiling. When sample profiling is enabled, we also include search param: ?mh_p_min=min_with_symbols so that the traces are not minified",
          label: "enable_sample_profiling",
          unused: t,
          value: r("gkx")("7251") && r("gkx")("22867"),
        },
        ig_haas_enable_sample_profiling: {
          description:
            "Instagram version: Enables sample profiling. (This would not work if SSR is not enabled on the app level or route level.) This is to toggle between on/off for SSR sample profiling. When sample profiling is enabled, we also include search param: ?mh_p_min=min_with_symbols so that the traces are not minified",
          label: "ig_enable_sample_profiling",
          unused: !t,
          value: r("gkx")("20682") && r("gkx")("20683"),
        },
        ig_mwp_ssr_enabled: {
          description:
            "Instagram version: Enables server-side rendering. (This would not work if SSR is not enabled on the app level or route level.) This is to toggle between on/off for SSR capable platforms",
          label: "ig_ssr_enabled",
          unused: !t,
          value: r("gkx")("20683"),
        },
        mwp_ssr_enabled: {
          description:
            "Enables server-side rendering. (This would not work if SSR is not enabled on the app level or route level.) This is to toggle between on/off for SSR capable platforms",
          label: "ssr_enabled",
          unused: t,
          value: r("gkx")("22867"),
        },
      };
    }
    l.getGKs = e;
  },
  98,
);
