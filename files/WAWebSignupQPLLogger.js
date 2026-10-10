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
      p = new Map(),
      _ = new Map();
    function f(e) {
      var t = p.get(e);
      return (t == null && ((t = m++), p.set(e, t)), t);
    }
    function g(e) {
      p.delete(e);
    }
    function h(e, t) {
      p.get(e) === t && g(e);
    }
    function y(e) {
      o("WAWebQplFlowWrapper").QPL.markerStart(u, {
        annotations: { string: { signup_id: e } },
        cancelOnUnload: !0,
        instanceKey: f(e),
      });
    }
    function C(e) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(u, "metadata_fetch_start", {
        instanceKey: f(e),
      });
    }
    function b(e) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(u, "metadata_fetch_end", {
        instanceKey: f(e),
      });
    }
    function v(e) {
      (o("WAWebQplFlowWrapper").QPL.markerEnd(u, 2, { instanceKey: f(e) }),
        g(e));
    }
    function S(e) {
      (o("WAWebQplFlowWrapper").QPL.markerEnd(u, 4, { instanceKey: f(e) }),
        g(e));
    }
    function R(e, t) {
      var n = f(e);
      (o("WAWebQplFlowWrapper").QPL.markerAnnotate(
        u,
        { string: { error_type: t } },
        { instanceKey: n },
      ),
        o("WAWebQplFlowWrapper").QPL.markerEnd(u, 3, { instanceKey: n }),
        g(e));
    }
    function L(e) {
      o("WAWebQplFlowWrapper").QPL.markerStart(c, {
        annotations: { string: { signup_id: e } },
        cancelOnUnload: !0,
        instanceKey: f(e),
      });
    }
    function E(e) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(c, "iq_start", {
        instanceKey: f(e),
      });
    }
    function k(e) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(c, "iq_end", {
        instanceKey: f(e),
      });
    }
    function I(e) {
      (o("WAWebQplFlowWrapper").QPL.markerEnd(c, 2, { instanceKey: f(e) }),
        g(e));
    }
    function T(e, t) {
      var n = f(e);
      (o("WAWebQplFlowWrapper").QPL.markerAnnotate(
        c,
        { string: { error_type: t } },
        { instanceKey: n },
      ),
        o("WAWebQplFlowWrapper").QPL.markerEnd(c, 3, { instanceKey: n }),
        g(e));
    }
    function D(e) {
      var t = _.get(e);
      t != null &&
        o("WAWebQplFlowWrapper").QPL.markerEnd(d, 4, { instanceKey: t });
      var n = t == null ? f(e) : m++;
      (_.set(e, n),
        o("WAWebQplFlowWrapper").QPL.markerStart(d, {
          annotations: { string: { signup_id: e } },
          cancelOnUnload: !0,
          instanceKey: n,
        }));
    }
    function x(e) {
      var t = _.get(e);
      t != null &&
        (o("WAWebQplFlowWrapper").QPL.markerEnd(d, 2, { instanceKey: t }),
        _.delete(e),
        h(e, t));
    }
    function $(e, t) {
      var n = _.get(e);
      n != null &&
        (o("WAWebQplFlowWrapper").QPL.markerAnnotate(
          d,
          { string: { error_type: t } },
          { instanceKey: n },
        ),
        o("WAWebQplFlowWrapper").QPL.markerEnd(d, 3, { instanceKey: n }),
        _.delete(e),
        h(e, n));
    }
    function P(t) {
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
    function N() {
      o("WALogger")
        .ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[signup:confirmation] missing params",
            ])),
        )
        .sendLogs("inapp_signup_confirmation_missing_params");
    }
    ((l.deepLinkStart = y),
      (l.deepLinkMetadataFetchStart = C),
      (l.deepLinkMetadataFetchEnd = b),
      (l.deepLinkSuccess = v),
      (l.deepLinkCancel = S),
      (l.deepLinkFail = R),
      (l.userRequestStart = L),
      (l.userRequestIqStart = E),
      (l.userRequestIqEnd = k),
      (l.userRequestSuccess = I),
      (l.userRequestFail = T),
      (l.confirmationStart = D),
      (l.confirmationSuccess = x),
      (l.confirmationFail = $),
      (l.confirmationParseFailure = P),
      (l.confirmationMissingParams = N));
  },
  98,
);
