__d(
  "AdsError",
  ["AdsErrorPriorityMap", "isObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, r, o) {
        var a;
        return (
          (a = e.call(this) || this),
          (a.isServerError = !1),
          (a.isDeliveryIssue = !1),
          (a.key = t),
          (a.message = n),
          r &&
            (a.$AdsError$p_1("deliverySubstatus", r.deliverySubstatus),
            a.$AdsError$p_1("field", r.field),
            a.$AdsError$p_1("fragmentID", r.fragmentID),
            a.$AdsError$p_1("path", r.path),
            a.$AdsError$p_1("level", r.level),
            a.$AdsError$p_1("objectID", r.objectID),
            a.$AdsError$p_1("title", r.title),
            a.$AdsError$p_1("originalError", r.originalError),
            a.$AdsError$p_1("isServerError", r.isServerError),
            a.$AdsError$p_1("isDeliveryIssue", r.isDeliveryIssue),
            r.helpCenterID != null && (a.help_center_id = r.helpCenterID),
            a.$AdsError$p_1("cta", r.cta),
            a.$AdsError$p_1("assetKeys", r.assetKeys),
            r.wwwRequestID != null && (a.www_request_id = r.wwwRequestID),
            r.opesMid != null && (a.opes_mid = r.opesMid),
            a.$AdsError$p_1("searchKey", r.searchKey),
            a.$AdsError$p_1("secondaryKey", r.secondaryKey),
            a.$AdsError$p_1("customCTA", r.customCTA),
            a.$AdsError$p_1("ctaRenderer", r.ctaRenderer),
            a.$AdsError$p_1("buttonRef", r.buttonRef),
            a.$AdsError$p_1("errorPlacementType", r.errorPlacementType),
            a.$AdsError$p_1("ctaButton", r.ctaButton),
            a.$AdsError$p_1("customCTAWithPromise", r.customCTAWithPromise),
            a.$AdsError$p_1("statusOverride", r.statusOverride),
            a.$AdsError$p_1("additionalInfo", r.additionalInfo),
            a.$AdsError$p_1("secondaryCTA", r.secondaryCTA),
            a.$AdsError$p_1(
              "customSecondaryCTAWithPromise",
              r.customSecondaryCTAWithPromise,
            ),
            a.$AdsError$p_1("secondaryCTARenderer", r.secondaryCTARenderer),
            o != null &&
              Object.keys(o).forEach(function (e) {
                Object.defineProperty(a, e, {
                  value: o[e],
                  writable: !0,
                  enumerable: !1,
                  configurable: !0,
                });
              })),
          a
        );
      }
      (babelHelpers.inheritsLoose(t, e),
        (t.clone = function (n, r, o) {
          return new t(
            n.key,
            n.message,
            babelHelpers.extends({}, n.getOptions(), r),
            o,
          );
        }));
      var n = t.prototype;
      return (
        (n.$AdsError$p_1 = function (t, n) {
          n != null && (this[t] = n);
        }),
        (n.getOptions = function () {
          return {
            assetKeys: this.assetKeys,
            cta: this.cta,
            secondaryCTA: this.secondaryCTA,
            deliverySubstatus: this.deliverySubstatus,
            field: this.field,
            fragmentID: this.fragmentID,
            level: this.level,
            objectID: this.objectID,
            originalError: this.originalError,
            path: this.path,
            title: this.title,
            isServerError: this.isServerError,
            isDeliveryIssue: this.isDeliveryIssue,
            helpCenterID: this.help_center_id,
            wwwRequestID: this.www_request_id,
            opesMid: this.opes_mid,
            errorPlacementType: this.errorPlacementType,
            ctaButton: this.ctaButton,
            ctaRenderer: this.ctaRenderer,
            buttonRef: this.buttonRef,
            customCTAWithPromise: this.customCTAWithPromise,
            customCTA: this.customCTA,
            customCTAType: this.customCTAType,
            customSecondaryCTAWithPromise: this.customSecondaryCTAWithPromise,
            secondaryCTARenderer: this.secondaryCTARenderer,
            additionalInfo: this.additionalInfo,
          };
        }),
        (t.compareLevels = function (t, n) {
          var e = t ? r("AdsErrorPriorityMap")[t] : 0,
            o = n ? r("AdsErrorPriorityMap")[n] : 0;
          return e === o ? 0 : e > o ? 1 : -1;
        }),
        (t.createError = function (n, r, o) {
          return new t(n, r != null ? r : "", s(o));
        }),
        (t.createRecommendation = function (n, r, o) {
          return new t(
            n,
            r,
            babelHelpers.extends({}, s(o), { level: t.Level.RECOMMEND }),
          );
        }),
        (t.createNotice = function (n, r, o) {
          return new t(
            n,
            r,
            babelHelpers.extends({}, s(o), { level: t.Level.NOTIFY }),
          );
        }),
        (t.createSuccess = function (n, r, o) {
          return new t(
            n,
            r,
            babelHelpers.extends({}, s(o), { level: t.Level.SUCCESS }),
          );
        }),
        t
      );
    })(babelHelpers.wrapNativeSuper(Error));
    e.Level = {
      WARN: "warn",
      RECOMMEND: "recommend",
      NOTIFY: "notify",
      SUCCESS: "success",
      QUIET: "quiet",
    };
    function s(t) {
      var n = { field: null, level: e.Level.WARN };
      return (
        typeof t == "string"
          ? (n.field = t)
          : r("isObject")(t) && (n = babelHelpers.extends({}, n, t)),
        n
      );
    }
    l.default = e;
  },
  98,
);
