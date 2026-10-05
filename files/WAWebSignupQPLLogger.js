__d(
  "WAWebSignupQPLLogger",
  ["WALogger", "WAWebQplFlowWrapper", "getErrorSafe", "qpl"],
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
    function g(e) {
      o("WAWebQplFlowWrapper").QPL.markerStart(u, {
        annotations: { string: { signup_id: e } },
        cancelOnUnload: !0,
        instanceKey: _(e),
      });
    }
    function h(e) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(u, "metadata_fetch_start", {
        instanceKey: _(e),
      });
    }
    function y(e) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(u, "metadata_fetch_end", {
        instanceKey: _(e),
      });
    }
    function C(e) {
      (o("WAWebQplFlowWrapper").QPL.markerEnd(u, 2, { instanceKey: _(e) }),
        f(e));
    }
    function b(e) {
      (o("WAWebQplFlowWrapper").QPL.markerEnd(u, 4, { instanceKey: _(e) }),
        f(e));
    }
    function v(e, t) {
      var n = _(e);
      (o("WAWebQplFlowWrapper").QPL.markerAnnotate(
        u,
        { string: { error_type: t } },
        { instanceKey: n },
      ),
        o("WAWebQplFlowWrapper").QPL.markerEnd(u, 3, { instanceKey: n }),
        f(e));
    }
    function S(e) {
      o("WAWebQplFlowWrapper").QPL.markerStart(c, {
        annotations: { string: { signup_id: e } },
        cancelOnUnload: !0,
        instanceKey: _(e),
      });
    }
    function R(e) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(c, "iq_start", {
        instanceKey: _(e),
      });
    }
    function L(e) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(c, "iq_end", {
        instanceKey: _(e),
      });
    }
    function E(e) {
      (o("WAWebQplFlowWrapper").QPL.markerEnd(c, 2, { instanceKey: _(e) }),
        f(e));
    }
    function k(e, t) {
      var n = _(e);
      (o("WAWebQplFlowWrapper").QPL.markerAnnotate(
        c,
        { string: { error_type: t } },
        { instanceKey: n },
      ),
        o("WAWebQplFlowWrapper").QPL.markerEnd(c, 3, { instanceKey: n }),
        f(e));
    }
    function I(e) {
      o("WAWebQplFlowWrapper").QPL.markerStart(d, {
        annotations: { string: { signup_id: e } },
        cancelOnUnload: !0,
        instanceKey: _(e),
      });
    }
    function T(e) {
      (o("WAWebQplFlowWrapper").QPL.markerEnd(d, 2, { instanceKey: _(e) }),
        f(e));
    }
    function D(t) {
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
    function x() {
      o("WALogger")
        .ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[signup:confirmation] missing params",
            ])),
        )
        .sendLogs("inapp_signup_confirmation_missing_params");
    }
    ((l.deepLinkStart = g),
      (l.deepLinkMetadataFetchStart = h),
      (l.deepLinkMetadataFetchEnd = y),
      (l.deepLinkSuccess = C),
      (l.deepLinkCancel = b),
      (l.deepLinkFail = v),
      (l.userRequestStart = S),
      (l.userRequestIqStart = R),
      (l.userRequestIqEnd = L),
      (l.userRequestSuccess = E),
      (l.userRequestFail = k),
      (l.confirmationStart = I),
      (l.confirmationSuccess = T),
      (l.confirmationParseFailure = D),
      (l.confirmationMissingParams = x));
  },
  98,
);
