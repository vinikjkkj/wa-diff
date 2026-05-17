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
      ((u = e), b());
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
      return (b(), o);
    }
    function h(e, t, n) {
      var r,
        a = c.find(function (t) {
          return t.id === e;
        });
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
          b());
      }
    }
    function y(e, t) {
      var n = c.find(function (t) {
        return t.id === e;
      });
      n != null &&
        ((n.status = "completed"),
        n.rejectResponse != null &&
          (n.rejectResponse(r("err")(t)),
          (n.rejectResponse = null),
          (n.resolveResponse = null)),
        b());
    }
    function C() {
      for (var e of c)
        e.rejectResponse != null &&
          (e.rejectResponse(r("err")("TEE debug entries cleared")),
          (e.rejectResponse = null),
          (e.resolveResponse = null));
      ((c.length = 0), b());
    }
    function b() {
      for (var e of d) e();
    }
    ((l.subscribe = m),
      (l.getEntries = p),
      (l.getMode = _),
      (l.updateMode = f),
      (l.addRequest = g),
      (l.submitResponse = h),
      (l.rejectEntry = y),
      (l.clearEntries = C));
  },
  98,
);
