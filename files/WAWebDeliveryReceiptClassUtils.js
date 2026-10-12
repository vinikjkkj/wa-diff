__d(
  "WAWebDeliveryReceiptClassUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      return e.isStatus() || (t == null ? void 0 : t.isGroupStatus) === !0
        ? "status"
        : void 0;
    }
    function l(e, t) {
      var n = t.author,
        r = t.externalId,
        o = t.from,
        a = t.receiptClass,
        i = e.get(o);
      i == null && ((i = new Map()), e.set(o, i));
      var l = i.get(a);
      l == null && ((l = new Map()), i.set(a, l));
      var s = l.get(n);
      (s == null && ((s = []), l.set(n, s)), s.push(r));
    }
    ((i.getDeliveryReceiptClass = e), (i.addReceiptByClass = l));
  },
  66,
);
