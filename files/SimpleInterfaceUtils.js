__d(
  "SimpleInterfaceUtils",
  [
    "BusinessSupportPage",
    "DateTime",
    "LBDSupportedAsset",
    "SimpleInterface.config",
    "XVanityURLControllerRouteBuilder",
    "filterNulls",
    "isEmail",
    "keyMirror",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "devnull.facebook.com";
    function s() {
      var e;
      return r("nullthrows")(
        (e = r("XVanityURLControllerRouteBuilder")
          .buildUri({ vanity: r("BusinessSupportPage").pageAlias })
          .setProtocol("https")) == null
          ? void 0
          : e.setDomain("facebook.com"),
      );
    }
    var u = r("keyMirror")(r("LBDSupportedAsset"));
    function c(e) {
      return Array.isArray(e) ? e.map(String) : [];
    }
    function d(e) {
      var t = [];
      return (
        Object.getOwnPropertyNames(e).forEach(function (n) {
          if (n === "file_attachments") {
            var r, o;
            t.push({
              field_id: n,
              values: c(
                (r = (o = e.file_attachments) == null ? void 0 : o.value) !=
                  null
                  ? r
                  : [],
              ),
            });
          } else if (n === "user_calendar_timeslot") {
            var a = e.user_calendar_timeslot.value;
            if (a != null && typeof a == "object" && !Array.isArray(a)) {
              var i,
                l,
                s =
                  a == null || (i = a.time_interval) == null
                    ? void 0
                    : i.start_time.toString(),
                u =
                  a == null || (l = a.time_interval) == null
                    ? void 0
                    : l.end_time.toString();
              s != null && u != null && t.push({ field_id: n, values: [s, u] });
            }
          } else {
            var d;
            t.push({
              field_id: n,
              value: String((d = e[n].value) != null ? d : ""),
            });
          }
        }),
        t
      );
    }
    function m(e) {
      var t = Object.prototype.hasOwnProperty.call(e, "file_attachments")
        ? e.file_attachments.value
        : null;
      return c(t);
    }
    function p(e, t) {
      return (
        t === void 0 && (t = !1),
        t
          ? r("isEmail")(e) &&
            (e.endsWith("@meta.com") || e.endsWith("@fb.com"))
          : r("isEmail")(e)
      );
    }
    function _(e) {
      var t = Object.keys(e);
      return t.every(function (t) {
        return e[t].isRequired ? e[t].isValid : !0;
      });
    }
    function f(e, t) {
      return t === !0 && e != null;
    }
    function g(e, t, n) {
      return t != null || (e == null && n == null);
    }
    function h(e) {
      return e != null;
    }
    function y(e, t, n) {
      return n != null || t != null || e != null;
    }
    function C(e, t, n) {
      return (n === !0 ? t != null : !0) && e != null;
    }
    function b(e, t, n, r) {
      return (
        (r === !0 ? n != null : !0) &&
        t != null &&
        t !== o("SimpleInterface.config").OTHER_ISSUE_KEY &&
        e != null
      );
    }
    function v(e, t) {
      var n = r("filterNulls")(
          e == null
            ? void 0
            : e.map(function (e) {
                var n,
                  o,
                  a =
                    e == null || (n = e.start_time) == null
                      ? void 0
                      : n.timestamp,
                  i =
                    e == null || (o = e.end_time) == null
                      ? void 0
                      : o.timestamp;
                if (a != null && i != null && a * 1e3 > Date.now())
                  return {
                    endTime: r("DateTime").create(i, t),
                    startTime: r("DateTime").create(a, t),
                    agentID: e == null ? void 0 : e.agent_id,
                  };
              }),
        ),
        o = {};
      return (
        n.forEach(function (e) {
          var t = e.startTime.format("Y-m-d", { skipPatternLocalization: !0 });
          (Object.prototype.hasOwnProperty.call(o, t) || (o[t] = []),
            o[t].push({
              time_interval: {
                start_time: e.startTime.instant,
                end_time: e.endTime.instant,
                agent_id: e.agentID,
              },
            }));
        }),
        o
      );
    }
    function S(e) {
      return e === "NONE" ? !1 : e !== "REDIRECT";
    }
    function R(e) {
      return (
        e != null &&
        (e == null ? void 0 : e.status) !== "NOT_CONFIGURED" &&
        (e == null ? void 0 : e.status) !== "AVAILABLE" &&
        (e == null ? void 0 : e.channel_button_name) != null &&
        (e == null ? void 0 : e.message) != null
      );
    }
    function L(t) {
      return t.includes(e);
    }
    function E(e) {
      var t = (e != null ? e : [])
        .map(function (e) {
          return e != null && e.display_email != null && !L(e.display_email)
            ? r("nullthrows")(e.display_email)
            : "";
        })
        .filter(function (e) {
          return e.length > 0;
        });
      return t;
    }
    ((l.getBusinessSupportPageURI = s),
      (l.LBDSupportedAssetEnum = u),
      (l.castToArray = c),
      (l.getTypedFormPayload = d),
      (l.getTypedFileAttachmentHandles = m),
      (l.getIsValidEmail = p),
      (l.getIsFormPayloadValid = _),
      (l.shouldShowGranularAssetSelection = f),
      (l.shouldShowSuggestedIssueSelection = g),
      (l.shouldShowSuggestedSymptomSelection = h),
      (l.shouldShowAssetSelection = y),
      (l.shouldShowHelpSectionV2 = C),
      (l.shouldShowHelpSection = b),
      (l.getDateToTimeslots = v),
      (l.getShowContactSupportButtonInSelfHelpFlows = S),
      (l.shouldShowLiveCallStatusButton = R),
      (l.getValidUserEmails = E));
  },
  98,
);
