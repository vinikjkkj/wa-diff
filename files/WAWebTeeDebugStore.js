__d(
  "WAWebTeeDebugStore",
  ["WAWebTeeEnums", "err"],
  function (t, n, r, o, a, i, l) {
    var e = 100,
      s = 1,
      u = o("WAWebTeeEnums").TeeClientMode.MOCK,
      c = [],
      d = [];
    function m(e) {
      return (
        d.push(e),
        function () {
          var t = d.indexOf(e);
          t !== -1 && d.splice(t, 1);
        }
      );
    }
    function p() {
      return c;
    }
    function _() {
      return u;
    }
    function f(e) {
      ((u = e), C());
    }
    function g(t, n) {
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
      for (c.unshift(o); c.length > e; ) {
        var a = c.pop();
        a != null &&
          a.rejectResponse != null &&
          (a.rejectResponse(r("err")("TEE debug entry evicted from store")),
          (a.rejectResponse = null),
          (a.resolveResponse = null));
      }
      return (C(), o);
    }
    function h(e, t, n) {
      var r = c.find(function (t) {
        return t.id === e;
      });
      if (r != null) {
        var a = {
          common_metadata: {
            identifier: r.request.common_metadata.identifier,
            status: n,
          },
          summary_response:
            r.request.summary_request != null ? { text: t, status: n } : null,
          wwai_response:
            r.request.wwai_request != null
              ? { suggestions: [t], status: n }
              : null,
          tee_chat_response:
            r.request.tee_chat_request != null ||
            r.request.chat_participation_request != null
              ? { response: t, message_id: String(Date.now()) }
              : null,
        };
        (r.responses.push(a),
          n !== o("WAWebTeeEnums").TEEResponseStatus.IN_PROGRESS
            ? (r.status = "completed")
            : (r.status = "streaming"),
          r.resolveResponse != null &&
            (r.resolveResponse(a), (r.resolveResponse = null)),
          C());
      }
    }
    function y() {
      for (var e of c)
        e.rejectResponse != null &&
          (e.rejectResponse(r("err")("TEE debug entries cleared")),
          (e.rejectResponse = null),
          (e.resolveResponse = null));
      ((c.length = 0), C());
    }
    function C() {
      for (var e of d) e();
    }
    ((l.subscribe = m),
      (l.getEntries = p),
      (l.getMode = _),
      (l.updateMode = f),
      (l.addRequest = g),
      (l.submitResponse = h),
      (l.clearEntries = y));
  },
  98,
);
