__d(
  "BootloaderEndpoint",
  [
    "AdsManagerReadRegions",
    "Bootloader",
    "BootloaderEndpointConfig",
    "BootloaderEvents",
    "CSRFGuard",
    "FBLogger",
    "HasteResponse",
    "TimeSlice",
    "clearImmediate",
    "fb-error",
    "getAsyncParams",
    "getSameOriginTransport",
    "gkx",
    "performanceAbsoluteNow",
    "setImmediateAcrossTransitions",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("fb-error").ErrorXFBDebug,
      s = n("BootloaderEndpointConfig").endpointURI,
      u = 0,
      c = null,
      d = null,
      m = new Map(),
      p = new Map();
    function _(e, t, n) {
      return {
        requestStart: e,
        responseStart: t,
        serverGenTime: 0,
        uri: n,
        source: "bootloader_endpoint",
        sourceDetail: "Invalid response",
        isFirstIdentical: !1,
        timesliceContext: null,
        startTime: e,
        logTime: t,
        jsmodsStart: t,
        jsmodsEnd: t,
        rsrcs: {
          blocking: new Map(),
          nonblocking: new Map(),
          default: new Map(),
        },
        payloadStats: {
          hsdp: { entry: 0, dup_entry: 0 },
          hblp: { rsrc: 0, dup_rsrc: 0, comp: 0, dup_comp: 0 },
          sjsp: {
            define: 0,
            dup_user_define: 0,
            dup_system_define: 0,
            require: 0,
          },
        },
      };
    }
    function f(t, r, o, a, i) {
      if (n("gkx")("5163")) {
        var l = (e || (e = n("performanceAbsoluteNow")))();
        for (var s of [t, r])
          for (var u of s.entries()) {
            var c = u[0],
              d = u[1];
            (n("Bootloader").done(d), n("Bootloader").beDone(c, o, _(a, l, i)));
          }
      }
    }
    function g(e) {
      return Array.from(e.keys()).join(",");
    }
    function h(e, t) {
      var r = {};
      (e.size && (r.modules = g(e)), t.size && (r.nb_modules = g(t)));
      var o = Object.entries(
        babelHelpers.extends({}, r, n("getAsyncParams")("GET")),
      )
        .map(function (e) {
          var t = e[0],
            n = e[1];
          return encodeURIComponent(t) + "=" + encodeURIComponent(String(n));
        })
        .join("&");
      return s + (s.includes("?") ? "&" : "?") + o;
    }
    function y(e, t, r) {
      if (!n("gkx")("18719")) return null;
      var o = e.getAllResponseHeaders(),
        a =
          o.indexOf("error-mid") >= 0 ? e.getResponseHeader("error-mid") : null;
      if (a != null)
        for (var i of [t, r])
          for (var l of i.entries()) {
            var s = l[0],
              u = l[1];
            n("BootloaderEvents").notifyBootloadEndpointError({
              module: s,
              hash: u,
              errorMID: a,
              blockingMods: t,
              nonblockingMods: r,
            });
          }
      return a;
    }
    function C(t, r) {
      if (!(t.size === 0 && r.size === 0)) {
        var o = R._getURL(t, r);
        L(o) && (o += "&ads_manager_read_regions=true");
        var a = n("getSameOriginTransport")(),
          i = u++,
          s = (e || (e = n("performanceAbsoluteNow")))();
        a.open("GET", o, !0);
        var c = n("TimeSlice").getGuardedContinuation(
          "Bootloader _requestHastePayload",
        );
        ((a.onreadystatechange = function () {
          a.readyState === 4 &&
            c(function () {
              l.addFromXHR(a);
              var e =
                a.status === 200
                  ? JSON.parse(n("CSRFGuard").clean(a.responseText))
                  : null;
              if (e == null) {
                f(t, r, i, s, o);
                var u = y(a, t, r),
                  c = n("FBLogger")("bootloader");
                (u != null &&
                  ((c = c.addMetadata("OPES", "MID", u)),
                  c.addToCategoryKey(u)),
                  c.warn(
                    'Invalid bootloader response %s; blocking mods: %s; non-blocking mods: %s; opes mid: %s; "%s"',
                    a.status,
                    g(t),
                    g(r),
                    u != null ? u : "none",
                    a.responseText.substr(0, 256),
                  ));
                return;
              }
              if (e.error)
                n("FBLogger")("bootloader").warn(
                  "Non-fatal error from bootloader endpoint, blocking mods: %s; non-blocking mods: %s",
                  g(t),
                  g(r),
                );
              else if (e.__error) {
                f(t, r, i, s, o);
                var d = y(a, t, r),
                  m = n("FBLogger")("bootloader");
                (d != null &&
                  ((m = m.addMetadata("OPES", "MID", d)),
                  m.addToCategoryKey(d)),
                  m.warn(
                    "Fatal error from bootloader endpoint, blocking mods: %s; non-blocking mods: %s; opes mid: %s",
                    g(t),
                    g(r),
                    d != null ? d : "none",
                  ));
                return;
              }
              n("TimeSlice").guard(
                function () {
                  return b(o, e, t, r, i, s);
                },
                "Bootloader receiveEndpointData",
                {
                  propagationType: n("TimeSlice").PropagationType.CONTINUATION,
                },
              )();
            });
        }),
          a.send());
      }
    }
    function b(t, r, o, a, i, l) {
      var s = (e || (e = n("performanceAbsoluteNow")))(),
        u = r.serverGenTime,
        c = r.hrp;
      if (c == null) {
        var d = r;
        (n("FBLogger")("be_null_hrp").mustfix(
          "Found null hrp, blocking mods: %s; non-blocking mods: %s; response error: %s",
          g(o),
          g(a),
          d.error +
            ", summary: " +
            d.errorSummary +
            ", description: " +
            d.errorDescription,
        ),
          (c = d));
      }
      n("HasteResponse").handle(c, {
        source: "bootloader_endpoint",
        sourceDetail: JSON.stringify({
          b: Array.from(o.keys()),
          n: Array.from(a.keys()),
        }),
        onBlocking: function () {
          for (var e of [o, a])
            for (var t of e.values()) n("Bootloader").done(t);
        },
        onLog: function (r) {
          for (var e of [o, a])
            for (var c of e.keys())
              n("Bootloader").beDone(
                c,
                i,
                babelHelpers.extends(
                  {
                    requestStart: l,
                    responseStart: s,
                    serverGenTime: u,
                    uri: t,
                  },
                  r,
                ),
              );
        },
      });
    }
    function v() {
      var e = m,
        t = p;
      (n("clearImmediate")(d),
        (d = null),
        (c = null),
        (m = new Map()),
        (p = new Map()),
        C(e, t));
    }
    function S() {
      var e = n("BootloaderEndpointConfig").maxBatchSize;
      return e <= 0 ? !1 : m.size + p.size >= e;
    }
    var R = {
      load: function (t, r, o) {
        if (
          ((r ? m : p).set(t, o),
          n("BootloaderEndpointConfig").debugNoBatching || S())
        ) {
          v();
          return;
        }
        d == null &&
          ((c = n("TimeSlice").getGuardedContinuation(
            "Schedule async batch request: Bootloader._loadResources",
          )),
          (d = n("setImmediateAcrossTransitions")(function () {
            c &&
              c(function () {
                return v();
              });
          })));
      },
      forceFlush: function () {
        c &&
          c(function () {
            return v();
          });
      },
      _getURL: h,
      _sendRequest: C,
    };
    function L(e) {
      return !!(
        window.location.host.includes("adsmanager") &&
        !n("AdsManagerReadRegions").excluded_endpoints.some(function (t) {
          return e.includes(t);
        }) &&
        n("BootloaderEndpointConfig").adsManagerReadRegions
      );
    }
    a.exports = { BootloaderEndpoint: R, shouldRouteToAMReadRegions: L };
  },
  null,
);
