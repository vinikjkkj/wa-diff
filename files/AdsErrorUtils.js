__d(
  "AdsErrorUtils",
  [
    "errorCode",
    "AdsError",
    "AdsFinservSoftErrors",
    "AdsInstagramSoftErrors",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPreemptiveErrorUtils",
    "adsFormatErrorMessage",
    "adsPageAppealConstants",
    "areEqual",
    "distinctArray",
    "distinctArrayBy",
    "err",
    "filterNulls",
    "getAllErrorsAtLevel",
    "getByPath",
    "gkx",
    "mapObject",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = "\u2022 ",
      m = ["errors"];
    function p(e, t) {
      return e.filter(function (e) {
        return e.objectID == null || e.objectID === t;
      });
    }
    function _(t, n) {
      return t.filter(function (t) {
        return (e || (e = r("areEqual")))(n, t.path);
      });
    }
    function f(e) {
      var t = e.map(function (e) {
        return e instanceof r("AdsError") &&
          (e.key === 2238228 || e.key === 4829018)
          ? e.message
          : e instanceof r("AdsError")
            ? e.message.toString()
            : r("adsFormatErrorMessage")(e).toString();
      });
      return (u || (u = r("distinctArray")))(t);
    }
    function g(e) {
      var t = $.getRawMessages(e);
      return $.formatErrorMessages(t);
    }
    function h(e) {
      return e.length === 0
        ? null
        : e.length === 1
          ? e[0]
          : d + e.join("\n" + d);
    }
    function y(e) {
      e.sort(function (e, t) {
        return x(e).length - x(t).length;
      });
      var t = {};
      e.forEach(function (e) {
        var n = x(e);
        r("getByPath")(t, n) || r("setByPath")(t, n, []);
        var o = r("getByPath")(t, n);
        Array.isArray(o) && o.push(e);
      });
      function n(e) {
        if (Array.isArray(e)) return $.getMessages(e);
        if (Object.prototype.toString.call(e) === "[object Object]")
          return (c || (c = r("mapObject")))(e, n);
      }
      return n(t);
    }
    function C(e) {
      e = $.getDistrinctErrorsByKey(e);
      var t = {};
      return (
        e.forEach(function (e) {
          var n = e.path || m,
            o = r("getByPath")(t, n);
          (o || ((o = []), r("setByPath")(t, n, o)), o.push(e));
        }),
        t
      );
    }
    function b(e, t) {
      return e.some(function (e) {
        var n = e.path || [];
        return n.length === 1 && n[0] === t;
      });
    }
    function v(e, t) {
      return t &&
        (t.some(function (e) {
          return (
            o("AdsPlacementAPISpecReaderUtils").isOnlyActivePublisherPlatform(
              e,
              "instagram",
            ) &&
            !!e.instagram_positions &&
            e.instagram_positions.length === 1
          );
        }) ||
          o(
            "AdsPlacementAPISpecReaderUtils",
          ).haveTheSameActivePublisherPlatform(t))
        ? e
        : e.map(function (e) {
            return (
              e.key in r("AdsInstagramSoftErrors") &&
                e.level === r("AdsError").Level.WARN &&
                (e.level = r("AdsError").Level.RECOMMEND),
              e
            );
          });
    }
    function S(e) {
      var t = r("AdsError").Level.SUCCESS;
      return (
        e.forEach(function (e) {
          r("AdsError").compareLevels(e.level, t) > 0 && (t = e.level);
        }),
        t
      );
    }
    function R(e) {
      return r("distinctArrayBy")(e, function (e) {
        return e.key;
      });
    }
    function L(e) {
      switch (e) {
        case r("AdsError").Level.WARN:
          return "ERROR";
        case r("AdsError").Level.RECOMMEND:
          return "WARNING";
        case r("AdsError").Level.NOTIFY:
          return "ACTIVE_FEEDBACK";
        case r("AdsError").Level.SUCCESS:
          return "ACTIVE_FEEDBACK_SUCCESS_MESSAGE";
        default:
          return "WARNING";
      }
    }
    function E(e) {
      var t = e.message,
        n = e.code;
      if (n && t.includes(n)) {
        var r = "(#" + n + ") ";
        t = e.message.replace(r, "") + " (#" + n + ").";
      }
      return t;
    }
    function k(e) {
      if (e.message == null)
        throw r("err")("Error '" + e.key + "' missing message");
      return e.message.toString();
    }
    function I(e, t) {
      t === void 0 && (t = [r("AdsError").Level.WARN]);
      var n = r("distinctArrayBy")(
        e.filter(function (e) {
          return r("gkx")("22026") &&
            e.key ===
              o("adsPageAppealConstants")
                .EU_SENSITIVE_DATA_AUDIENCE_LIMITED__PAGE_HARD_ERROR
            ? !1
            : o("AdsFinservSoftErrors").isErrorFinservAdsSoftError(e)
              ? !0
              : e.level != null && t.includes(e.level);
        }),
        function (e) {
          var t;
          return o("AdsPreemptiveErrorUtils").shouldUsePreemptiveErrorTreatment(
            e,
          ) || e.key === 3858204
            ? e.key
            : ((t = e.errorPlacementType) != null ? t : "RIGHT_HAND_CARD") +
                k(e);
        },
      );
      return n;
    }
    function T(e) {
      var t = r("filterNulls")(e.getValues());
      return t.length === 0 ? "" : t[0] || "";
    }
    function D(e) {
      var t = e.getValues();
      return t.length !== 0 ? t[0] : null;
    }
    function x(e) {
      return e.path || m;
    }
    var $ = {
      getErrorsForObjectID: p,
      getErrorsForPath: _,
      getRawMessages: f,
      getMessages: g,
      formatErrorMessages: h,
      getErrorSpec: y,
      indexErrorsByPath: C,
      hasErrorForField: b,
      giveRecommendationsForSoftErrors: v,
      getLevelForErrors: S,
      getAllErrorsAtLevel: r("getAllErrorsAtLevel"),
      getDistrinctErrorsByKey: R,
      getFirstBulkError: D,
      getFirstBulkErrorMessage: T,
      moveErrorCodeToEndOfMessage: E,
      getDistinctErrors: I,
      getAdsCCCategoryForLevel: L,
    };
    i.exports = $;
  },
  34,
);
