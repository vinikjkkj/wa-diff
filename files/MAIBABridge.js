__d(
  "MAIBABridge",
  [
    "FBLogger",
    "MAIBAChatAppUIActions",
    "MAIBAMSHDisplayMessage",
    "logMAIBAMSHFunnelEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["complete", "cancel", "error"],
      s = ["OPEN_PIXEL_HELPER"],
      u = /^[A-Za-z0-9_-]{1,128}$/,
      c = /^\d{1,32}$/,
      d = /^[A-Za-z0-9_-]{1,64}$/,
      m = /^[A-Za-z0-9_-]{1,128}$/,
      p = 500,
      _ = 10,
      f = new Set(),
      g = [];
    function h(t) {
      return typeof t == "string" && e.includes(t);
    }
    function y(e) {
      return typeof e == "string" && s.includes(e);
    }
    function C(e) {
      return typeof e == "string" && u.test(e);
    }
    function b(e) {
      return e == null || e === "" ? !0 : typeof e == "string" && c.test(e);
    }
    function v(e) {
      return e == null || e === ""
        ? null
        : typeof e == "string" && d.test(e)
          ? e
          : null;
    }
    function S(e) {
      return e == null || e === ""
        ? null
        : typeof e == "string" && m.test(e)
          ? e
          : null;
    }
    function R(e) {
      return e == null || e === ""
        ? !0
        : typeof e == "string" && e.length <= p && !/[\r\n\t]/.test(e);
    }
    function L(e) {
      var t;
      if (!C(e.thread_id) || !h(e.status)) return null;
      var n = (t = e.automation_action) != null ? t : "OPEN_PIXEL_HELPER";
      if (!y(n) || !b(e.pixel_id)) return null;
      var r = ["status=" + e.status, "action=" + n];
      e.pixel_id != null &&
        e.pixel_id !== "" &&
        r.push("pixel_id=" + e.pixel_id);
      var a = "[System: MSH] outcome " + r.join(" ");
      return (
        R(e.message) &&
          e.message != null &&
          e.message !== "" &&
          (a = a + " | " + e.message),
        {
          displayMessage: o("MAIBAMSHDisplayMessage").getMSHDisplayMessage(
            e.status,
          ),
          externalConversationId: e.thread_id,
          hideUserMessage: !1,
          isSentFromOutOfChat: !0,
          message: a,
          originComponent: "MAIBABridge",
        }
      );
    }
    function E(e) {
      var t = f.values().next().value;
      if (t == null) return !1;
      try {
        return (t.submit(e), !0);
      } catch (e) {
        return (
          e instanceof Error
            ? r("FBLogger")("MAIBABridge")
                .catching(e)
                .warn("Submit threw while dispatching MSH signal")
            : r("FBLogger")("MAIBABridge").warn(
                "Submit threw non-Error while dispatching MSH signal",
              ),
          !1
        );
      }
    }
    function k(e) {
      var t = { submit: e };
      f.add(t);
      var n = g.splice(0);
      for (var o of n)
        try {
          e(o);
        } catch (e) {
          e instanceof Error
            ? r("FBLogger")("MAIBABridge")
                .catching(e)
                .warn("Submit threw while draining pending MSH signals")
            : r("FBLogger")("MAIBABridge").warn(
                "Submit threw non-Error while draining pending MSH signals",
              );
        }
      return t;
    }
    function I(e) {
      f.delete(e);
    }
    function T() {
      o("MAIBAChatAppUIActions").closeMAIBAChatApp();
    }
    function D(e) {
      C(e) &&
        o("MAIBAChatAppUIActions").openMAIBAChatThread({
          externalConversationId: e,
        });
    }
    function x(e) {
      var t,
        n = v(e.flow_id),
        r = S(e.bot_response_id),
        a = L(e);
      if (a == null) {
        o("logMAIBAMSHFunnelEvent").logMAIBAMSHFunnelMSHDroppedInvalid({
          conversationId: typeof e.thread_id == "string" ? e.thread_id : null,
          flowId: n,
          maibaRequestId: r,
          pixelId: typeof e.pixel_id == "string" ? e.pixel_id : null,
          errorCode: "invalid_payload",
          errorMessage: "status=" + String(e.status),
        });
        return;
      }
      o("MAIBAChatAppUIActions").openMAIBAChatThread({
        externalConversationId: e.thread_id,
      });
      var i = {
        conversationId: e.thread_id,
        flowId: n,
        maibaRequestId: r,
        pixelId: e.pixel_id != null && e.pixel_id !== "" ? e.pixel_id : null,
        action: (t = e.automation_action) != null ? t : "OPEN_PIXEL_HELPER",
      };
      switch (e.status) {
        case "complete":
          o("logMAIBAMSHFunnelEvent").logMAIBAMSHFunnelMSHComplete(i);
          break;
        case "cancel":
          o("logMAIBAMSHFunnelEvent").logMAIBAMSHFunnelMSHCancel(i);
          break;
        case "error":
          o("logMAIBAMSHFunnelEvent").logMAIBAMSHFunnelMSHError(
            babelHelpers.extends({}, i, { errorMessage: e.message }),
          );
          break;
      }
      E(a) || (g.length >= _ && g.shift(), g.push(a));
    }
    ((l.registerMAIBABridgeSubmit = k),
      (l.unregisterMAIBABridgeSubmit = I),
      (l.maibaCollapse = T),
      (l.maibaOpen = D),
      (l.maibaPixelHelperSignal = x));
  },
  98,
);
