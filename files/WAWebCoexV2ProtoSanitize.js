__d(
  "WAWebCoexV2ProtoSanitize",
  [
    "WAProtoCompile",
    "WAProtoUtils",
    "WAWebE2EProtoUtils",
    "WAWebLidMigrationUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebStructuredClone",
    "WAWebWid",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 32;
    function s(e) {
      var t = r("WAWebStructuredClone")(e);
      return (
        u({ depth: 0, node: t, spec: o("WAWebProtobufsE2E.pb").MessageSpec }),
        t
      );
    }
    function u(t) {
      var n = t.depth,
        a = t.node,
        i = t.spec;
      if (n > e)
        throw r("err")("coexv2 relay sanitize exceeded max nesting depth");
      for (
        var l = o("WAProtoCompile").compileSpec(i),
          s = l.meta,
          u = l.names,
          p = l.types,
          _ = 0;
        _ < u.length;
        _++
      ) {
        var f = u[_],
          g = p[_],
          h = Reflect.get(a, f);
        if (h != null) {
          if (o("WAProtoUtils").isMessageType(g)) {
            c({
              depth: n + 1,
              repeated: o("WAProtoUtils").isRepeatedField(g),
              spec: s[_],
              value: h,
            });
            continue;
          }
          if (o("WAProtoUtils").isStringType(g)) {
            if (o("WAProtoUtils").isRepeatedField(g)) {
              Array.isArray(h) && Reflect.set(a, f, d(h));
              continue;
            }
            var y = m(h);
            y == null ? Reflect.deleteProperty(a, f) : Reflect.set(a, f, y);
          }
        }
      }
    }
    function c(e) {
      var t = e.depth,
        n = e.repeated,
        r = e.spec,
        o = e.value;
      if (!n) {
        typeof o == "object" && o != null && u({ depth: t, node: o, spec: r });
        return;
      }
      if (Array.isArray(o))
        for (var a of o)
          typeof a == "object" &&
            a != null &&
            u({ depth: t, node: a, spec: r });
    }
    function d(e) {
      var t = [];
      for (var n of e) {
        var r = p(n);
        r != null ? t.push(r) : _(n) || t.push(n);
      }
      return t;
    }
    function m(e) {
      var t = p(e);
      if (t != null) return t;
      if (!_(e)) return e;
    }
    function p(e) {
      var t = f(e);
      if (t == null || !t.isUser() || t.isBot() || t.isLid()) return null;
      var n = o("WAWebLidMigrationUtils").toLid(t);
      return n != null ? o("WAWebE2EProtoUtils").encodeJid(n) : null;
    }
    function _(e) {
      var t = f(e);
      return t != null && t.isUser() && !t.isBot() && !t.isLid();
    }
    function f(e) {
      if (typeof e != "string" || !r("WAWebWid").isWid(e)) return null;
      try {
        return o("WAWebWidFactory").createWid(e);
      } catch (e) {
        return null;
      }
    }
    l.sanitizeCoexV2RelayMessage = s;
  },
  98,
);
