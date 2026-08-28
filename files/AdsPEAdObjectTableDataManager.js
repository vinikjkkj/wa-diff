__d(
  "AdsPEAdObjectTableDataManager",
  [
    "invariant",
    "AdCampaignSpecUtil",
    "AdsGraphAPI",
    "AdsInsightsQueryFieldUtil",
    "AdsManagerAdObjectTableDataSpecUtils",
    "AdsMgmtPreloadingUtils",
    "AdsPEAdObjectTableDataManagerPreloader",
    "AndromedaValidatorConfigReverseInteropL2",
    "AndromedaValidatorConfigReverseInteropL3",
    "FBLogger",
    "Promise",
    "ReverseInteropUtil",
    "chunkArray",
    "gkx",
    "immutable",
    "performanceAbsoluteNow",
    "shouldValidateReverseInterop",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u;
    function c(e, t, a, i) {
      var l = o("AdsInsightsQueryFieldUtil").toAPIFields(a),
        s = "adtable_" + t;
      if (t === "adgroup") {
        var c = 5,
          m = r("chunkArray")(e, c);
        return (u || (u = n("Promise")))
          .all(
            m.map(function (e) {
              return d(e, s, l, i);
            }),
          )
          .then(function (e) {
            return e.reduce(function (e, t) {
              return Object.assign(e, t);
            });
          });
      } else if (t === "campaignGroup") return p(e, t, l);
      return d(e, s, l, i);
    }
    function d(e, t, n, a) {
      var l,
        s = o("AdsGraphAPI").get(i.id).objects(t, e);
      return (
        a &&
          (s = s.preloadedBy(
            r("AdsPEAdObjectTableDataManagerPreloader").preloader,
            o("AdsMgmtPreloadingUtils").defaultConfig,
          )),
        s.get(((l = {}), (l.fields = n), l)).then(
          function (t) {
            return (
              e.forEach(function (e) {
                t[e] == null && (t[e] = void 0);
              }),
              t
            );
          },
          function (e) {
            throw e;
          },
        )
      );
    }
    function m(t, n, o, a) {
      var i = (e || (e = r("performanceAbsoluteNow")))();
      return d(t, n, o, a).then(function (t) {
        return {
          response: t,
          duration: (e || (e = r("performanceAbsoluteNow")))() - i,
        };
      });
    }
    function p(t, n, a) {
      var l = o("AdsInsightsQueryFieldUtil").toAPIFields(a),
        u = "adtable_" + n,
        c = Array.from(t),
        p = (e || (e = r("performanceAbsoluteNow")))(),
        f =
          n === "campaignGroup"
            ? o("AdsManagerAdObjectTableDataSpecUtils").fetchCampaignGroupSpec(
                t,
              )
            : null;
      if (f == null) return d(t, u, l, !1);
      var g = r("gkx")("21684"),
        h = r("shouldValidateReverseInterop")(n);
      if (h) {
        var y = m(t, u, l, g),
          C =
            n === "campaignGroup"
              ? "CAMPAIGN_GROUP"
              : n === "campaign"
                ? "CAMPAIGN"
                : "UNKNOWN";
        o("ReverseInteropUtil").logToReverseInterop(
          i.id,
          C,
          y,
          f,
          p,
          c,
          "Double Cache",
          null,
          null,
          r(
            n === "campaignGroup"
              ? "AndromedaValidatorConfigReverseInteropL3"
              : "AndromedaValidatorConfigReverseInteropL2",
          ),
        );
      }
      return f.then(
        function (e) {
          var t = e == null ? void 0 : e.response;
          t != null || s(0, 64065);
          var a = c.length,
            i = Object.keys(t).length;
          return (
            i !== a &&
              r("FBLogger")("ads").warn(
                "Tried to load %s %s IDs, but received %s! This indicates a problem on the backend. IDs: %s",
                a,
                u,
                i,
                c.join(","),
              ),
            n === "campaign" && h && (t = _(t)),
            c.forEach(function (e) {
              (t != null || s(0, 64065),
                t[e] == null
                  ? (t[e] = void 0)
                  : n === "campaign" &&
                    (t[e] = o("AdCampaignSpecUtil").transformCampaignData(
                      t[e],
                    )));
            }),
            t
          );
        },
        function (e) {
          throw e;
        },
      );
    }
    function _(e) {
      return o("immutable").fromJS(e).toJS();
    }
    l.getAdObjects = c;
  },
  98,
);
