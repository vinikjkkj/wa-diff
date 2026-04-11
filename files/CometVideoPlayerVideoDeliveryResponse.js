__d(
  "CometVideoPlayerVideoDeliveryResponse",
  ["emptyFunction", "fb-error"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = { quality: "SD" };
      return {
        ok: !0,
        value: {
          dash_manifest_urls: [],
          dash_manifests: [],
          hls_playlist_urls: [],
          progressive_urls: [
            {
              failure_reason:
                e != null && e !== ""
                  ? null
                  : {
                      message_format:
                        "makeVideoDeliveryResponseResultFromSingleProgressiveUrl received empty value",
                      message_params: [],
                      type: "from_js_progressive_url_is_empty",
                    },
              metadata: t,
              progressive_url: e != null && e !== "" ? e : null,
            },
          ],
        },
      };
    }
    function s(e, t) {
      t === void 0 && (t = !1);
      var n = null,
        o = null,
        a = null,
        i = null,
        l = [],
        s = [],
        c = [],
        d = [],
        m = [];
      if (e.ok !== !0) {
        var p = r("fb-error").err(
          "VideoDeliveryResponse API failed: %s",
          JSON.stringify(
            e.errors.map(function (e) {
              try {
                return (JSON.stringify(e), e);
              } catch (t) {
                return String(e);
              }
            }),
          ),
        );
        ((p.name = "VideoDeliveryResponseAPIFailed"), l.push(p));
      } else {
        var _,
          f,
          g,
          h,
          y = e.value,
          C = u(
            s,
            "dash_manifests",
            "DashManifest",
            y.dash_manifests,
            r("emptyFunction").thatReturnsTrue,
            function (e) {
              return e.manifest_xml != null && e.manifest_xml !== "" ? e : null;
            },
          )[0],
          b = u(
            c,
            "dash_manifest_urls",
            "DashManifestURL",
            y.dash_manifest_urls,
            r("emptyFunction").thatReturnsTrue,
            function (e) {
              return e.manifest_url != null && e.manifest_url !== "" ? e : null;
            },
          )[0],
          v = u(
            d,
            "progressive_urls",
            "ProgressiveURLHD",
            y.progressive_urls,
            function (e) {
              var t;
              return ((t = e.metadata) == null ? void 0 : t.quality) === "HD";
            },
            function (e) {
              return e.progressive_url != null ? e : null;
            },
          )[0],
          S = u(
            d,
            "progressive_urls",
            "ProgressiveURLSD",
            y.progressive_urls,
            function (e) {
              var t;
              return ((t = e.metadata) == null ? void 0 : t.quality) === "SD";
            },
            function (e) {
              return e.progressive_url != null ? e : null;
            },
          )[0];
        if (
          ((n = (_ = C == null ? void 0 : C.manifest_xml) != null ? _ : null),
          (o = (f = b == null ? void 0 : b.manifest_url) != null ? f : null),
          (a = (g = v == null ? void 0 : v.progressive_url) != null ? g : null),
          (i = (h = S == null ? void 0 : S.progressive_url) != null ? h : null),
          a == null && i == null && t)
        ) {
          var R,
            L = u(
              m,
              "hls_playlist_urls",
              "HLSPlaylistURL",
              y.hls_playlist_urls,
              r("emptyFunction").thatReturnsTrue,
              function (e) {
                return e.hls_playlist_url != null ? e : null;
              },
            )[0];
          ((a = null),
            (i =
              (R = L == null ? void 0 : L.hls_playlist_url) != null
                ? R
                : null));
        }
      }
      return {
        browserNativeHdUrl: a,
        browserNativeSdUrl: i,
        dashManifestDeliveryFailures: s,
        dashManifestUrl: o,
        dashManifestUrlDeliveryFailures: c,
        dashManifestXmlString: n,
        hlsDeliveryFailures: m,
        progressiveDeliveryFailures: d,
        videoDeliveryResponseAPIFailures: l,
      };
    }
    function u(e, t, n, r, o, a) {
      var i = r.filter(o),
        l = i
          .map(function (e) {
            return e.failure_reason == null ? a(e) : null;
          })
          .filter(Boolean);
      if (i.length === 0) e.push(d(t, n, r));
      else if (l.length === 0) {
        var s = i.filter(function (e) {
          return e.failure_reason != null;
        });
        s.length === 0
          ? e.push(m(t, n, r))
          : e.push.apply(
              e,
              s
                .map(function (e) {
                  return e.failure_reason != null
                    ? c(t, n, e.failure_reason, e.metadata)
                    : null;
                })
                .filter(Boolean),
            );
      }
      return l;
    }
    function c(e, t, n, o) {
      var a;
      try {
        var i;
        a = (i = JSON.stringify(o)) != null ? i : String(o);
      } catch (e) {
        a = String(o);
      }
      var l = r("fb-error").err.apply(
        r("fb-error"),
        [
          "VideoDeliveryResponse " +
            e +
            " failure for " +
            t +
            ": " +
            n.type +
            "; metadata=%s" +
            (n.message_format != null && n.message_format !== ""
              ? "; " + n.message_format
              : ""),
          a,
        ].concat(n.message_params),
      );
      return (
        (l.name =
          "VideoDeliveryResponseFailureReason/" + e + "(" + t + ")/" + n.type),
        l
      );
    }
    function d(e, t, n) {
      var o;
      try {
        var a;
        o = (a = JSON.stringify(n)) != null ? a : "N/A";
      } catch (e) {
        o = "N/A";
      }
      var i = r("fb-error").err(
        "VideoDeliveryResponse " +
          e +
          " failure for " +
          t +
          ": no matching items; all items: %s",
        o,
      );
      return (
        (i.name =
          "VideoDeliveryResponseContractViolation/" +
          e +
          "(" +
          t +
          ")/no_matching"),
        i
      );
    }
    function m(e, t, n) {
      var o;
      try {
        var a;
        o = (a = JSON.stringify(n)) != null ? a : "N/A";
      } catch (e) {
        o = "N/A";
      }
      var i = r("fb-error").err(
        "VideoDeliveryResponse " +
          e +
          " failure for " +
          t +
          ": no succeeded or failed items; all items: %s",
        o,
      );
      return (
        (i.name =
          "VideoDeliveryResponseContractViolation/" +
          e +
          "(" +
          t +
          ")/no_success_and_failure"),
        i
      );
    }
    ((l.makeVideoDeliveryResponseResultFromSingleProgressiveUrl = e),
      (l.processVideoDeliveryResponseResult = s));
  },
  98,
);
