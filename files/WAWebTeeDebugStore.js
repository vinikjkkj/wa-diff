__d(
  "WAWebTeeDebugStore",
  ["WAWebTeeEnums", "err"],
  function (t, n, r, o, a, i, l) {
    var e = 100,
      s = 1,
      u = o("WAWebTeeEnums").TeeClientMode.MOCK,
      c = [],
      d = new Map(),
      m = [];
    function p(e) {
      return (
        m.push(e),
        function () {
          var t = m.indexOf(e);
          t !== -1 && m.splice(t, 1);
        }
      );
    }
    function _() {
      return c;
    }
    function f() {
      return u;
    }
    function g(e) {
      ((u = e), S());
    }
    function h(t, n) {
      var o = {
        id: s++,
        timestamp: Date.now(),
        requestType: t,
        request: n,
        responses: [],
        status: "pending",
        resolveResponse: null,
        rejectResponse: null,
      };
      for (c.unshift(o), d.set(o.id, o); c.length > e; ) {
        var a = c.pop();
        a != null &&
          (d.delete(a.id),
          a.rejectResponse != null &&
            (a.rejectResponse(r("err")("TEE debug entry evicted from store")),
            (a.rejectResponse = null),
            (a.resolveResponse = null)));
      }
      return (S(), o);
    }
    function y(e, t, n) {
      var r,
        a = d.get(e);
      if (a != null) {
        var i = typeof t == "string" ? t : (r = t[0]) != null ? r : "",
          l = typeof t == "string" ? [t] : [].concat(t),
          s = {
            common_metadata: {
              identifier: a.request.common_metadata.identifier,
              status: n,
            },
            summary_response:
              a.request.summary_request != null ? { text: i, status: n } : null,
            wwai_response:
              a.request.wwai_request != null
                ? { suggestions: l, status: n }
                : null,
            tee_chat_response:
              a.request.tee_chat_request != null ||
              a.request.chat_participation_request != null
                ? { response: i, message_id: String(Date.now()) }
                : null,
          };
        (a.responses.push(s),
          n !== o("WAWebTeeEnums").TEEResponseStatus.IN_PROGRESS
            ? (a.status = "completed")
            : (a.status = "streaming"),
          a.resolveResponse != null &&
            (a.resolveResponse(s), (a.resolveResponse = null)),
          S());
      }
    }
    function C(e, t) {
      var n,
        r = d.get(e);
      if (r != null) {
        var a = Number((n = t.common_metadata) == null ? void 0 : n.status);
        (r.responses.push(t),
          a !== Number(o("WAWebTeeEnums").TEEResponseStatus.IN_PROGRESS)
            ? (r.status = "completed")
            : (r.status = "streaming"),
          r.resolveResponse != null &&
            (r.resolveResponse(t), (r.resolveResponse = null)),
          S());
      }
    }
    function b(e, t) {
      var n = d.get(e);
      n != null &&
        ((n.status = "completed"),
        n.rejectResponse != null &&
          (n.rejectResponse(r("err")(t)),
          (n.rejectResponse = null),
          (n.resolveResponse = null)),
        S());
    }
    function v() {
      for (var e of c)
        e.rejectResponse != null &&
          (e.rejectResponse(r("err")("TEE debug entries cleared")),
          (e.rejectResponse = null),
          (e.resolveResponse = null));
      ((c.length = 0), d.clear(), S());
    }
    function S() {
      for (var e of m) e();
    }
    ((l.subscribe = p),
      (l.getEntries = _),
      (l.getMode = f),
      (l.updateMode = g),
      (l.addRequest = h),
      (l.submitResponse = y),
      (l.submitRawResponse = C),
      (l.rejectEntry = b),
      (l.clearEntries = v));
  },
  98,
);
