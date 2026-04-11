__d(
  "WebBloksScopedIds",
  ["WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e() {
        this.scopedClientIdToClientIdMap = new Map();
      }
      var t = e.prototype;
      return (
        (t.createScopedClientId = function (t, n) {
          return t + "/" + n;
        }),
        (t.registerOrGetClientIdForScopedId = function (t, n) {
          var e = this.createScopedClientId(t, n),
            r = this.scopedClientIdToClientIdMap.get(e);
          if (r !== void 0) return r;
          var a = o("WebBloksUtils").getNextGlobalBloksClientId();
          return (this.scopedClientIdToClientIdMap.set(e, a), a);
        }),
        (t.getScopedClientId = function (t, n) {
          return this.registerOrGetClientIdForScopedId(t.clientId, n);
        }),
        (t.copyModelWithKeyPath = function (t, n, r) {
          return t.makeCopyWithKeypath(this.getScopedClientId(t, r), n);
        }),
        e
      );
    })();
    function s(e, t, n) {
      return c(t, u(e.slice(0, n)));
    }
    function u(e) {
      var t = [];
      for (var n of e) (t.push("/"), t.push(n));
      return t.join("");
    }
    function c(e, t) {
      return e + "#" + t;
    }
    function d(e, t) {
      t === void 0 && (t = null);
      var n = e != null ? e.slice() : [];
      return (
        n.push(t != null ? t : o("WebBloksUtils").getNextGlobalBloksClientId()),
        n
      );
    }
    ((l.ClientIdToScopedIdMapper = e),
      (l.getScopedVariableIdAtDepth = s),
      (l.buildKeypathBase = u),
      (l.buildScopedVariableIdentifier = c),
      (l.extendKeyPath = d));
  },
  98,
);
