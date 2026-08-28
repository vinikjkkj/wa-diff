__d(
  "OfflineThreadingId",
  ["I64", "XPlatReactCrypto"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("I64"))).of_string("4194303");
    function u() {
      return (e || (e = o("I64"))).to_string(c());
    }
    function c() {
      var t = o("XPlatReactCrypto").getRandomValues(new Uint8Array(8)),
        n = new DataView(t.buffer),
        r = (e || (e = o("I64"))).add(
          e.lsl_(e.of_int32(n.getUint32(0)), 32),
          e.of_int32(n.getUint32(4)),
        );
      return d(Date.now(), r);
    }
    function d(t, n) {
      return (e || (e = o("I64"))).and_(
        e.or_(e.lsl_(e.of_float(t), 22), e.and_(n, s)),
        e.max_int,
      );
    }
    function m(t) {
      for (var n = c(), r = [], a = 0; a < t.length; a++)
        (r.push([t[a], (e || (e = o("I64"))).to_string(n)]), (n = p(n)));
      return r;
    }
    function p(t, n) {
      n === void 0 && (n = (e || (e = o("I64"))).one);
      var r = _(t),
        a = (e || (e = o("I64"))).and_(t, s);
      return d(r, e.add(a, n));
    }
    function _(t) {
      return (e || (e = o("I64"))).to_float(e.lsr_(t, 22));
    }
    ((l.createOfflineThreadingID = u),
      (l.createForItemsInOrder = m),
      (l.createNewFromExisting = p),
      (l.extractTimestamp = _));
  },
  98,
);
