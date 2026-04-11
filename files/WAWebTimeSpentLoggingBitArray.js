__d(
  "WAWebTimeSpentLoggingBitArray",
  [
    "Promise",
    "WALogger",
    "WAWebPermanentStorage",
    "WAWebTsBitArrayWamEvent",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e, t) {
      for (var n, o, a, i = "" + e.bitmap[0], l = 1; l < e.bitmap.length; ++l)
        i += ":" + e.bitmap[l];
      var s = [
          e.sessionId,
          e.sessionSeq,
          e.sessionCum,
          e.startTime,
          e.bitmapLen,
          (n = e.relativeStartTimeMs) != null ? n : "",
          (o = e.tsTimestampMs) != null ? o : "",
          (a = e.unifiedSessionId) != null ? a : "",
        ],
        u = s.join(":") + "$" + i,
        c = r("WAWebPermanentStorage").getItem(t);
      if (c == null) return (r("WAWebPermanentStorage").setItem(t, u), [e]);
      var d = h(c);
      return (d.push(e), r("WAWebPermanentStorage").setItem(t, c + "_" + u), d);
    }
    function _(t, a) {
      var i = p(t, a);
      (m || (m = n("Promise")))
        .all(i.map(g))
        .then(function () {
          return r("WAWebPermanentStorage").removeItem(a);
        })
        .catch(function () {
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[time-spent] error flushing events for ",
                ".",
              ])),
            a,
          );
        });
    }
    function f(e, t) {
      var a = r("WAWebPermanentStorage").getItem(e);
      if (a != null) {
        var i = h(a);
        if (i == null) {
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[time-spent] error parsing stashed bitarray data (",
                ")",
              ])),
            e,
          );
          return;
        }
        (m || (m = n("Promise")))
          .all(i.map(t))
          .then(function () {
            return r("WAWebPermanentStorage").removeItem(e);
          })
          .catch(function () {
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[time-spent] error flushing events for ",
                  ".",
                ])),
              e,
            );
          });
      }
    }
    function g(e) {
      var t,
        n,
        r = Number(e.sessionId),
        a = new (o("WAWebTsBitArrayWamEvent").TsBitArrayWamEvent)({
          tsSessionId: Number.isSafeInteger(r) ? r : -1,
          bitarrayLength: e.bitmapLen,
          bitarrayLow: e.bitmap[0],
          bitarrayHigh: (t = e.bitmap[1]) != null ? t : void 0,
          cumulativeBits: e.sessionCum,
          relativeTimestampMs: (n = e.relativeStartTimeMs) != null ? n : void 0,
          sessionSeq: e.sessionSeq,
        });
      return (
        e.tsTimestampMs != null && (a.tsTimestampMs = e.tsTimestampMs),
        e.unifiedSessionId != null && (a.unifiedSessionId = e.unifiedSessionId),
        a.commitAndWaitForFlush()
      );
    }
    function h(e) {
      return e.length === 0 ? [] : r("compactMap")(e.split("_"), y);
    }
    function y(e) {
      var t,
        n,
        r,
        a = e.split("$"),
        i = a[0],
        l = a[1],
        s = babelHelpers.arrayLikeToArray(a).slice(2);
      if (s.length || !l) {
        o("WALogger").WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "Invalid stashed time spent event",
            ])),
        );
        return;
      }
      var u = i.split(":");
      if (!(u.length >= 5 && u.length <= 8)) {
        o("WALogger").WARN(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "Invalid stashed time spent event",
            ])),
        );
        return;
      }
      var m = new Int32Array(
          l.split(":").map(function (e) {
            return Number(e);
          }),
        ),
        p = {
          sessionId: u[0],
          sessionSeq: Number(u[1]),
          sessionCum: Number(u[2]),
          startTime: Number(u[3]),
          bitmapLen: Number(u[4]),
          bitmap: m,
        };
      return (
        (t = u[5]) != null &&
          t.length &&
          (p.relativeStartTimeMs = Number(u[5])),
        (n = u[6]) != null && n.length && (p.tsTimestampMs = Number(u[6])),
        (r = u[7]) != null && r.length && (p.unifiedSessionId = u[7]),
        p
      );
    }
    ((l.stashBitarrayData = p),
      (l.stashAndFlushBitarray = _),
      (l.flushBitarrays = f),
      (l.postTsBitArrayEvent = g),
      (l.parseStashedBitarrayData = h));
  },
  98,
);
