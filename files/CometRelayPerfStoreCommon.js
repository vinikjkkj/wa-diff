__d(
  "CometRelayPerfStoreCommon",
  ["performanceNow", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e5,
      u = {},
      c = {},
      d = {};
    function m(e, t) {
      r("setTimeout")(function () {
        (delete c[t], e != null && delete u[e]);
      }, s);
    }
    function p(e) {
      r("setTimeout")(function () {
        delete d[e];
      }, s);
    }
    function _(t) {
      if (t.name === "network.start") {
        var n = (e || (e = r("performanceNow")))(),
          o = {
            flushes: [],
            hasteResponseLogEvents: [],
            isExecTime: t.params.metadata.is_ls_relay_request === !0,
            isPreloaded: !1,
            name: t.params.name,
            networkStart: n,
            start: n,
          };
        ((c[t.networkRequestId] = o),
          (u[t.params.name] = o),
          m(t.params.name, t.networkRequestId));
      } else if (t.name === "network.next") {
        var a = c[t.networkRequestId];
        if (a) {
          var i = t.response,
            l = function (n) {
              var t;
              if (a.isExecTime) {
                var o, i;
                if (
                  (n == null || (o = n.extensions) == null
                    ? void 0
                    : o.is_normalized) === !0
                )
                  return;
                a.end == null &&
                  (n == null || (i = n.extensions) == null
                    ? void 0
                    : i.is_final) === !0 &&
                  (a.end = (e || (e = r("performanceNow")))());
              }
              a.flushes.push({
                label: (t = n.label) != null ? t : "root",
                time: (e || (e = r("performanceNow")))(),
              });
            };
          i instanceof Array ? i.forEach(l) : l(i);
        }
      } else if (t.name === "network.complete") {
        var s = c[t.networkRequestId];
        s && (s.end = (e || (e = r("performanceNow")))());
      } else if (t.name === "queryresource.fetch") {
        if (t.operation.root.node.name != null) {
          var _ = t.operation.root.node.name,
            f = u[_];
          f != null && ((d[t.resourceID] = f), p(t.resourceID));
        }
      } else if (t.name === "queryresource.retain") {
        var g = d[t.resourceID];
        if (g != null) {
          var h = t.profilerContext;
          h && h.retainQuery && h.retainQuery(g);
        }
      } else if (t.name === "network.info") {
        var y = t.info;
        if (
          y != null &&
          typeof y == "object" &&
          Object.prototype.hasOwnProperty.call(y, "prefetched")
        ) {
          var C = c[t.networkRequestId];
          C && ((C.start = 0), (C.isPreloaded = !0));
        }
        if (
          y != null &&
          typeof y == "object" &&
          "srPayloadStats" in y &&
          y.srPayloadStats != null &&
          typeof y.srPayloadStats == "object"
        ) {
          var b = c[t.networkRequestId];
          b && b.hasteResponseLogEvents.push(y.srPayloadStats);
        }
      } else if (t.name === "entrypoint.root.consume") {
        var v = t.profilerContext;
        v &&
          typeof v.consumeBootload == "function" &&
          v.consumeBootload(t.rootModuleID);
      }
    }
    l.log = _;
  },
  98,
);
