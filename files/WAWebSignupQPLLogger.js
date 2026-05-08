__d(
  "WAWebSignupQPLLogger",
  ["WALogger", "WAWebABProps", "WAWebQplFlowWrapper", "getErrorSafe", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("qpl")._(239206401, "2349"),
      c = r("qpl")._(239206402, "3585"),
      d = r("qpl")._(239206403, "3586"),
      m = 0,
      p = new Map();
    function _(e) {
      var t = p.get(e);
      return (t == null && ((t = m++), p.set(e, t)), t);
    }
    function f(e) {
      p.delete(e);
    }
    function g() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "inapp_signup_qpl_logging_enabled",
        ) === !0
      );
    }
    function h(e) {
      g() &&
        o("WAWebQplFlowWrapper").QPL.markerStart(u, {
          annotations: { string: { signup_id: e } },
          cancelOnUnload: !0,
          instanceKey: _(e),
        });
    }
    function y(e) {
      g() &&
        o("WAWebQplFlowWrapper").QPL.markerPoint(u, "metadata_fetch_start", {
          instanceKey: _(e),
        });
    }
    function C(e) {
      g() &&
        o("WAWebQplFlowWrapper").QPL.markerPoint(u, "metadata_fetch_end", {
          instanceKey: _(e),
        });
    }
    function b(e) {
      g() &&
        (o("WAWebQplFlowWrapper").QPL.markerEnd(u, 2, { instanceKey: _(e) }),
        f(e));
    }
    function v(e) {
      g() &&
        (o("WAWebQplFlowWrapper").QPL.markerEnd(u, 4, { instanceKey: _(e) }),
        f(e));
    }
    function S(e, t) {
      if (g()) {
        var n = _(e);
        (o("WAWebQplFlowWrapper").QPL.markerAnnotate(
          u,
          { string: { error_type: t } },
          { instanceKey: n },
        ),
          o("WAWebQplFlowWrapper").QPL.markerEnd(u, 3, { instanceKey: n }),
          f(e));
      }
    }
    function R(e) {
      g() &&
        o("WAWebQplFlowWrapper").QPL.markerStart(c, {
          annotations: { string: { signup_id: e } },
          cancelOnUnload: !0,
          instanceKey: _(e),
        });
    }
    function L(e) {
      g() &&
        o("WAWebQplFlowWrapper").QPL.markerPoint(c, "iq_start", {
          instanceKey: _(e),
        });
    }
    function E(e) {
      g() &&
        o("WAWebQplFlowWrapper").QPL.markerPoint(c, "iq_end", {
          instanceKey: _(e),
        });
    }
    function k(e) {
      g() &&
        (o("WAWebQplFlowWrapper").QPL.markerEnd(c, 2, { instanceKey: _(e) }),
        f(e));
    }
    function I(e, t) {
      if (g()) {
        var n = _(e);
        (o("WAWebQplFlowWrapper").QPL.markerAnnotate(
          c,
          { string: { error_type: t } },
          { instanceKey: n },
        ),
          o("WAWebQplFlowWrapper").QPL.markerEnd(c, 3, { instanceKey: n }),
          f(e));
      }
    }
    function T(e) {
      g() &&
        o("WAWebQplFlowWrapper").QPL.markerStart(d, {
          annotations: { string: { signup_id: e } },
          cancelOnUnload: !0,
          instanceKey: _(e),
        });
    }
    function D(e) {
      g() &&
        (o("WAWebQplFlowWrapper").QPL.markerEnd(d, 2, { instanceKey: _(e) }),
        f(e));
    }
    function x(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[signup:confirmation] parse failed",
            ])),
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("inapp_signup_confirmation_parse_failure");
    }
    function $() {
      o("WALogger")
        .ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[signup:confirmation] missing params",
            ])),
        )
        .sendLogs("inapp_signup_confirmation_missing_params");
    }
    ((l.deepLinkStart = h),
      (l.deepLinkMetadataFetchStart = y),
      (l.deepLinkMetadataFetchEnd = C),
      (l.deepLinkSuccess = b),
      (l.deepLinkCancel = v),
      (l.deepLinkFail = S),
      (l.userRequestStart = R),
      (l.userRequestIqStart = L),
      (l.userRequestIqEnd = E),
      (l.userRequestSuccess = k),
      (l.userRequestFail = I),
      (l.confirmationStart = T),
      (l.confirmationSuccess = D),
      (l.confirmationParseFailure = x),
      (l.confirmationMissingParams = $));
  },
  98,
);
