__d(
  "WAWebStaleBaseCollection",
  [
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        var t;
        return (
          (t = e.call(this) || this),
          t.listenTo(
            o("WAWebSocketModel").Socket,
            "change:stream",
            t.$StaleBaseCollection$p_1,
          ),
          t
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.$StaleBaseCollection$p_2 = function () {
          e: {
            if (
              o("WAWebSocketModel").Socket.stream ===
              o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED
            ) {
              this.forEach(function (e) {
                e && (e.stale = !0);
              });
              break e;
            }
            if (
              o("WAWebSocketModel").Socket.stream ===
                o("WAWebSocketConstants").SOCKET_STREAM.RESUMING ||
              o("WAWebSocketModel").Socket.stream ===
                o("WAWebSocketConstants").SOCKET_STREAM.SYNCING ||
              o("WAWebSocketModel").Socket.stream ===
                o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED
            )
              break e;
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                o("WAWebSocketModel").Socket.stream,
            );
          }
        }),
        (n.$StaleBaseCollection$p_1 = function () {
          (this.$StaleBaseCollection$p_2(),
            this._cachePolicy.constructor.policy ===
              o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD &&
              this._updateFromCache());
        }),
        (n._markResultsNotStale = function (t) {
          var e = Array.isArray(t) ? t : [t];
          e.filter(Boolean).forEach(function (e) {
            typeof e.stale == "undefined" && (e.stale = !1);
          });
        }),
        (n.gaddUp = function (t) {
          var e = !0;
          this.get(t.id) && (e = !1);
          var n = babelHelpers.extends({ stale: e }, t),
            o = this.add(n, { merge: !0 })[0];
          if (o) {
            var a = o;
            return (o.stale && this.find(o.id), a);
          }
          throw r("err")(".gaddUp called without an id attr (id)");
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    l.StaleBaseCollection = e;
  },
  98,
);
