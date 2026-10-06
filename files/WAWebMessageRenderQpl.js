__d(
  "WAWebMessageRenderQpl",
  ["QPLFlow", "WAWebABProps", "WAWebChatCollection", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(891426174, "3263"),
      s = 60 * 1e3,
      u = 200,
      c = new Map();
    function d(t, n, r) {
      var a;
      if (
        o("WAWebABProps").getABPropConfigValue(
          "wmi_wa_web_message_delivery_qpl_instrumentation",
        ) &&
        ((a = o("WAWebChatCollection").ChatCollection.get(t)) == null
          ? void 0
          : a.active) === !0
      ) {
        var i = t.isGroup(),
          l = new Set(
            r.map(function (e) {
              return String(e.id);
            }),
          );
        n.filter(function (e) {
          return e.isNewMsg === !0 && !e.id.fromMe && l.has(e.id.toString());
        }).forEach(function (t) {
          var n,
            r = t.id.toString();
          (f(r, "superseded"),
            _(),
            c.set(
              r,
              o("QPLFlow").startQPLFlow(e, {
                annotations: {
                  bool: { is_group: i },
                  string: { msg_type: (n = t.type) != null ? n : "unknown" },
                },
                timeoutInMs: s,
              }),
            ));
        });
      }
    }
    function m(e) {
      e.forEach(function (e) {
        var t;
        return (t = c.get(e.toString())) == null
          ? void 0
          : t.addPoint("added_to_chat");
      });
    }
    function p(e) {
      var t = c.get(e);
      t != null && (c.delete(e), t.endSuccess());
    }
    function _() {
      if (!(c.size < u)) {
        var e = c.keys().next().value;
        e != null && f(e, "evicted");
      }
    }
    function f(e, t) {
      var n;
      ((n = c.get(e)) == null ||
        n.endCancel(4, { string: { cancel_reason: t } }),
        c.delete(e));
    }
    ((l.MAX_OPEN_MESSAGE_RENDER_FLOWS = u),
      (l.startMessageRenderFlows = d),
      (l.markMessageRenderAddedToChat = m),
      (l.endMessageRenderFlow = p));
  },
  98,
);
