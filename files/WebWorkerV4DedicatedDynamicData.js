__d(
  "WebWorkerV4DedicatedDynamicData",
  ["cometAsyncFetchShared", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s(t, n, r) {
      r === void 0 && (r = !1);
      var o = t.name,
        a = n.getPath() + ":" + o,
        i = e.get(a);
      if (i == null || r) {
        var l = Math.floor(+Date.now() / 1e3),
          s = u(t, n, r).then(function (e) {
            return { time: l, data: e };
          });
        (s.catch(function () {
          e.get(a) === s && e.delete(a);
        }),
          e.set(a, s),
          (i = s));
      }
      return i;
    }
    function u(e, t, n) {
      var r = e.name;
      return c(r, t, n);
    }
    function c(e, t, n) {
      var o = null;
      return (
        n &&
          ((o = new FormData()),
          o.set("__rev", "null"),
          o.set("__spin_r", "null")),
        r("cometAsyncFetchShared")(
          t.buildUri({ worker_module: e }).toString(),
          {
            formData: o != null ? o : void 0,
            data: {},
            getFullPayload: !0,
            method: "POST",
            skipSRState: !0,
            retryCount: n ? 2 : void 0,
          },
        ).then(function (t) {
          if (
            t != null &&
            typeof t == "object" &&
            Object.prototype.hasOwnProperty.call(t, "hrp") &&
            typeof t.hrp == "object"
          )
            return t;
          throw r("err")(
            "Unexpected data from WebWorkerV4DedicatedHasteResponseController for worker %s",
            e,
          );
        })
      );
    }
    l.readDynamicDataForWorkerV4 = s;
  },
  98,
);
