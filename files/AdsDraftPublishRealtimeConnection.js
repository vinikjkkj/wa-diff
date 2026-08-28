__d(
  "AdsDraftPublishRealtimeConnection",
  [
    "AdDraftPublishRealtimeEvent",
    "AdsDraftPublishRealtimeLogger",
    "AdsDraftRealtimeSubscription",
    "createObjectFrom",
    "emptyFunction",
    "expectationViolation",
    "flipObject",
    "mixInEventEmitter",
    "objectValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["event"],
      s,
      u = null,
      c = new Map(),
      d = r("flipObject")(r("AdDraftPublishRealtimeEvent"));
    function m(e, t, n) {
      var a = c.get(e);
      if (a) {
        if (a.draftID === t) return;
        p(e);
      }
      var i = o("AdsDraftRealtimeSubscription").subscribe(
        t,
        function (n) {
          var r,
            o =
              n == null || (r = n.ad_draft_publish_subscribe) == null
                ? void 0
                : r.message;
          o != null && f(JSON.parse(o), e, t);
        },
        n,
      );
      (c.set(e, { draftID: t, token: i }),
        r("AdsDraftPublishRealtimeLogger").debugLog(
          "Subscribed to draftID %s for account %s",
          t,
          e,
        ));
    }
    function p(e) {
      var t = c.get(e);
      if (!t) {
        r("expectationViolation")(
          "Trying to unsubscribe from account %s, but we're not subscribed to it!",
          e,
        );
        return;
      }
      (t.token.dispose(),
        c.delete(e),
        r("AdsDraftPublishRealtimeLogger").debugLog(
          "Unsubscribed from draft %s for account %s",
          t.draftID,
          e,
        ));
    }
    function _() {
      for (var e of c.values()) e.token.dispose();
      c = new Map();
    }
    function f(t, n, o) {
      var a = t.event,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e);
      r("AdsDraftPublishRealtimeLogger").isDebugEnabled() &&
        r("AdsDraftPublishRealtimeLogger").debugLog(
          "%s:",
          d[a] || "[UNKNOWN]",
          i,
        );
      var l = function () {
        (C.emit(a, i, n, o), C.emit("all", a, i, n, o));
      };
      u
        ? u.push(function () {
            l();
          })
        : l();
    }
    function g() {
      u = [];
    }
    function h() {
      (u &&
        u.length > 0 &&
        u.forEach(function (e) {
          return e();
        }),
        (u = null));
    }
    function y() {
      u && (u = []);
    }
    var C = {
      subscribe: m,
      unsubscribe: p,
      unsubscribeAll: _,
      startBuffering: g,
      stopBuffering: h,
      discardBuffer: y,
      addListener: (s = r("emptyFunction")),
      addRetroactiveListener: s,
      once: s,
      emit: s,
    };
    r("mixInEventEmitter")(
      C,
      babelHelpers.extends(
        {},
        r("createObjectFrom")(
          r("objectValues")(r("AdDraftPublishRealtimeEvent")),
        ),
        { all: !0 },
      ),
      !0,
    );
    var b = C;
    l.default = b;
  },
  98,
);
