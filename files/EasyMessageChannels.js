__d(
  "EasyMessageChannels",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 5e3;
    function l(t, n) {
      var r = typeof t.timeout == "number" ? t.timeout : e,
        o = t.window ? t.window : window,
        a = window.setTimeout(function () {
          n(new Error("ERROR 2200: timed out before getting a connection"));
        }, r),
        i = new MessageChannel(),
        l = function (t) {
          var e = t.data;
          typeof e != "object" ||
            e === null ||
            (e.type === "REQ_ACK" &&
              ((i.port1.onmessage = null),
              window.clearTimeout(a),
              n(null, i.port1)));
        };
      ((i.port1.onmessage = l),
        o.postMessage({ hash: t.hash, type: "REQ" }, "*", [i.port2]));
    }
    function s(e, t) {
      var n = e.window ? e.window : window,
        r = function (r) {
          if (r.data.type === "REQ") {
            if (!(r.ports && r.ports[0])) {
              t(
                new Error(
                  "ERROR 2315: connection request was malformed. No port.",
                ),
              );
              return;
            }
            if (!r.data.hash) {
              t(
                new Error(
                  "ERROR 2315: connection request was malformed. No hash.",
                ),
              );
              return;
            }
            r.data.hash === e.hash &&
              (r.ports[0].postMessage({ type: "REQ_ACK" }),
              t(null, r.ports[0]));
          }
        };
      n.addEventListener("message", r);
    }
    ((i.connect = l), (i.listen = s));
  },
  66,
);
