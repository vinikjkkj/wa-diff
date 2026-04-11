__d(
  "getAsyncParams",
  [
    "CometPersistQueryParams",
    "CurrentCanonicalRoute",
    "CurrentUserInitialData",
    "DTSGUtils",
    "Env",
    "GetAsyncParamsExtraData",
    "HasteBitMap",
    "HasteBitMapName",
    "JSErrorLoggingConfig",
    "LSD",
    "ServerJSDefine",
    "SiteData",
    "SprinkleConfig",
    "StaticSiteData",
    "WebConnectionClassServerGuess",
    "WebSession",
    "asyncParams",
    "cr:8959",
    "cr:8960",
    "getAsyncParamsForProfiling",
    "getAsyncParamsFromCurrentPageURI",
    "isSocialPlugin",
    "objectValues",
    "requireWeak",
    "uniqueRequestID",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, a) {
      var i, l, u;
      a === void 0 && (a = !1);
      var c = (i = r("GetAsyncParamsExtraData").extra_data) != null ? i : {},
        d = babelHelpers.extends(
          {},
          o("asyncParams").get(),
          c,
          ((l = {
            __user: (e || (e = r("CurrentUserInitialData"))).USER_ID,
            __a: 1,
            __req: r("uniqueRequestID")(),
          }),
          (l[r("StaticSiteData").hs_key] = r("SiteData").haste_session),
          (l[r("StaticSiteData").dpr_key] = r("SiteData").pr),
          (l[r("StaticSiteData").connection_class_server_guess_key] = r(
            "WebConnectionClassServerGuess",
          ).connectionClass),
          (l.__rev = r("SiteData").client_revision),
          (l.__s = o("WebSession").getId()),
          (l[r("StaticSiteData").haste_session_id_key] = r("SiteData").hsi),
          l),
        );
      if (
        (a ||
          ((d[r("StaticSiteData").jsmod_key] =
            r("ServerJSDefine").getLoadedModuleHash()),
          r("objectValues")(r("HasteBitMapName")).forEach(function (e) {
            var t = o("HasteBitMap").toCompressedString(e);
            t !== "" && (d[e] = t);
          })),
        !r("SiteData").wbloks_env &&
          r("SiteData").comet_env != null &&
          r("SiteData").comet_env !== 0)
      ) {
        var m;
        d[r("StaticSiteData").comet_key] =
          (m = r("SiteData").comet_env) != null ? m : 1;
      }
      if (
        (Object.entries(r("CometPersistQueryParams").relative).forEach(
          function (e) {
            var t = e[0],
              n = e[1];
            n != null && (d[t] = String(n));
          },
        ),
        typeof window != "undefined" &&
          ((u = window) == null ? void 0 : u.location) != null &&
          (Object.assign(d, r("getAsyncParamsFromCurrentPageURI")()),
          Object.assign(
            d,
            o("getAsyncParamsForProfiling").getAsyncParamsForProfiling(),
          )),
        (s || (s = r("Env"))).isCQuick &&
          !d.cquick &&
          ((d.cquick = (s || (s = r("Env"))).iframeKey),
          (d.ctarget = s.iframeTarget),
          (d.cquick_token = s.iframeToken)),
        t == "POST")
      ) {
        var p = n("cr:8959").getCachedToken
          ? n("cr:8959").getCachedToken()
          : n("cr:8959").getToken();
        (p &&
          ((d.fb_dtsg = p),
          r("SprinkleConfig").param_name &&
            (d[r("SprinkleConfig").param_name] =
              r("DTSGUtils").getNumericValue(p))),
          r("LSD").token &&
            ((d.lsd = r("LSD").token),
            r("SprinkleConfig").param_name &&
              !p &&
              (d[r("SprinkleConfig").param_name] = r(
                "DTSGUtils",
              ).getNumericValue(r("LSD").token))));
      }
      if (t == "GET") {
        var _ = n("cr:8960").getCachedToken
          ? n("cr:8960").getCachedToken()
          : n("cr:8960").getToken();
        _ &&
          ((d.fb_dtsg_ag = _),
          r("SprinkleConfig").param_name &&
            (d[r("SprinkleConfig").param_name] =
              r("DTSGUtils").getNumericValue(_)));
      }
      if ((r("isSocialPlugin")() && (d.__sp = 1), r("SiteData").spin)) {
        var f;
        ((d[(f = r("StaticSiteData")).spin_rev_key] =
          r("SiteData")[f.spin_rev_key]),
          (d[f.spin_branch_key] = r("SiteData")[f.spin_branch_key]),
          (d[f.spin_time_key] = r("SiteData")[f.spin_time_key]),
          r("SiteData")[r("StaticSiteData").spin_mhenv_key] &&
            (d[r("StaticSiteData").spin_mhenv_key] =
              r("SiteData")[r("StaticSiteData").spin_mhenv_key]));
      }
      o("JSErrorLoggingConfig").sampleWeight != null &&
        o("JSErrorLoggingConfig").sampleWeightKey != null &&
        (d[o("JSErrorLoggingConfig").sampleWeightKey] = o(
          "JSErrorLoggingConfig",
        ).sampleWeight);
      var g = o("CurrentCanonicalRoute").getForGlobalLoggingOnly();
      return (
        g != null && (d[r("StaticSiteData").canonical_route_key] = g),
        r("requireWeak")("QPLUserFlow", function (e) {
          var t = e.getActiveFlowIDs();
          t.length > 0 && (d.qpl_active_flow_ids = t.sort().join(","));
        }),
        r("requireWeak")("MessengerPWAVersionForUserAgent", function (e) {
          var t = e();
          t != null && (d.__pwa = t);
        }),
        d
      );
    }
    l.default = u;
  },
  98,
);
