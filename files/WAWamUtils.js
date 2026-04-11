__d(
  "WAWamUtils",
  ["WABase64", "WALogger", "WAWamTypes", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        ((e = {}),
        (e[(u = o("WAWamTypes")).TYPES.INT] = "number"),
        (e[u.TYPES.FLOAT] = "number"),
        (e[u.TYPES.STRING] = "string"),
        (e[u.TYPES.BOOL] = "boolean"),
        e);
    function d(e, t) {
      if (t == null || t.length === 0) return e;
      for (var n = new Map(), r = 0; r < e.length; r += 3) {
        var o = e[r];
        n.set(o, r);
      }
      for (var a = 0; a < t.length; ++a) {
        var i = t[a],
          l = i[0],
          s = i[1],
          u = i[2];
        if (u != null) {
          var d = n.get(l);
          if (d != null) {
            var m = e[d + 2];
            if (m !== void 0) continue;
          }
          var p = c[s];
          p === typeof u &&
            (d == null
              ? (n.set(l, e.length), e.push(l, s, u))
              : (e[d + 2] = u));
        }
      }
      return e;
    }
    function m(e) {
      for (var t = new Map(), n = new Map(), a = 0; a < e.length; a += 4) {
        var i = e[a],
          l = e[a + 1],
          u = e[a + 2],
          c = e[a + 3];
        if (u === o("WAWamTypes").TYPES.FLOAT)
          throw r("err")(
            "Float attributes are currently not supported in runtime",
          );
        if (!Array.isArray(i)) {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "logAttributes WAM channel is not an array",
                ])),
            )
            .sendLogs("wam-log-attributes");
          return;
        }
        (i.includes("regular") && t.set(l, c),
          i.includes("private") && n.set(l, c));
      }
      return { deltaRegular: t, deltaPrivate: n };
    }
    function p(e, t) {
      var n = [];
      return (
        t.forEach(function (t) {
          var r = t.channel;
          if (r == null) {
            if (e !== "regular") return;
          } else if (r !== e) return;
          if (t.finished) {
            var a = new Uint8Array(o("WABase64").decodeB64(t.buffer)),
              i = t.key;
            n.push({ key: i, content: a });
          }
        }),
        n
      );
    }
    function _(e) {
      return JSON.stringify([e.streamId, e.sequenceNumber, e.channel]);
    }
    function f(e, t, n, r, a) {
      var i = _(e);
      return {
        bufferKey: i,
        meta: { streamId: e.streamId, sequenceNumber: e.sequenceNumber },
        bufferRow: {
          key: i,
          channel: t,
          streamId: n,
          buffer: o("WABase64").encodeB64(r),
          finished: a,
        },
      };
    }
    function g(e) {
      var t = null;
      return (e && (t = e.sequenceNumber), t);
    }
    ((l.appendRawFields = d),
      (l.getDeltaFromAttributes = m),
      (l.getFinishedBuffers = p),
      (l.asBufferEntry = f),
      (l.getSequenceNumber = g));
  },
  98,
);
