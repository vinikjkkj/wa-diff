__d(
  "WAWebDebugMsgLogger",
  ["err", "vulture"],
  function (t, n, r, o, a, i, l) {
    var e = new Map(),
      s = new Map();
    function u(e) {
      throw (
        r("vulture")("gNeny0t3IDw9RpTJcKvxkt-lGKo="),
        r("err")("This file can only be called on DEV builds")
      );
      return (
        Object.entries(e).forEach(function (t) {
          var n = t[0],
            r = t[1];
          r != null &&
            (n === "$$unknownFieldCount"
              ? delete e[n]
              : r.constructor === Object
                ? (e[n] = u(r))
                : r.constructor.name === "Uint8Array"
                  ? (e[n] = "Uint8Array(" + r.length + ")")
                  : (e[n] = r));
        }),
        e
      );
    }
    function c(t, n) {
      var o;
      throw r("err")("This file can only be called on DEV builds");
      if (
        ((o = n.reactionMessage) == null || (o = o.key) == null
          ? void 0
          : o.id) != null
      ) {
        var a, i;
        s.set(i, n);
      }
    }
    function d(t) {
      r("vulture")("Eg6A9UoUlPToMhlwyjXbBleRCpk=");
      var n = e.get(t);
      return n == null ? null : JSON.stringify(u(n), null, 2);
    }
    function m(e) {
      r("vulture")("tdsa5j9RlKSEVky0LivkWdmNd8k=");
      var t = s.get(e);
      return t == null ? null : JSON.stringify(u(t), null, 2);
    }
    ((l.logMessage = c),
      (l.getMessageByMsgId = d),
      (l.getMessagesByParentMsgId = m));
  },
  98,
);
