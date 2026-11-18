__d(
  "WAWebContactsAndGroupsPresence",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebContactsAndGroupsSampleData",
    "WAWebLidMigrationUtils",
    "WAWebNoop",
    "WAWebPresenceCollection",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebStreamModel",
    "WAWebWidFactory",
    "compactMap",
    "getErrorSafe",
    "once",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 30,
      u = 5 * o("WATimeUtils").MINUTE_SECONDS,
      c = 4,
      d = 16,
      m = 13,
      p = new Map(),
      _ = new Map(),
      f = !1,
      g = new Map(),
      h = new Map(),
      y = h,
      C = null;
    function b(e) {
      var t,
        n = e.id;
      return n.isUser()
        ? n.isLid()
          ? o("WAWebWidFactory").asUserLidOrThrow(n)
          : (t = o("WAWebLidMigrationUtils").toUserLid(n)) != null
            ? t
            : null
        : null;
    }
    function v(e) {
      return R(e, "row");
    }
    function S(e) {
      var t = e.map(function (e) {
        return R(e, "prefetch");
      });
      return function () {
        t.forEach(function (e) {
          return e();
        });
      };
    }
    function R(e, t) {
      var n,
        o,
        a = e.toString(),
        i =
          (n = (o = p.get(a)) != null ? o : t === "row" ? _.get(a) : null) !=
          null
            ? n
            : E(e, t);
      return i == null
        ? r("WAWebNoop")
        : (L(i, t, 1),
          function () {
            (L(i, t, -1),
              i.prefetchHolds + i.rowHolds <= 0
                ? N(a, i)
                : i.rowHolds <= 0 && M());
          });
    }
    function L(e, t, n) {
      e: {
        if (t === "prefetch") {
          e.prefetchHolds += n;
          break e;
        }
        if (t === "row") {
          e.rowHolds += n;
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function E(e, t) {
      var n = e.toString(),
        r = { presenceKey: e, prefetchHolds: 0, rowHolds: 0 };
      return k(t) ? (I(n, r), r) : t === "prefetch" ? null : (_.set(n, r), r);
    }
    function k(e) {
      return _.size > 0 ? !1 : p.size < s || (e === "row" && P());
    }
    function I(e, t) {
      (p.set(e, t), T(e) || D(e, t), x());
    }
    function T(e) {
      var t = g.get(e);
      return t != null && o("WATimeUtils").unixTime() - t.at < u;
    }
    function D(t, n) {
      var a = { at: o("WATimeUtils").unixTime() };
      (g.set(t, a),
        o("WAWebPresenceCollection")
          .PresenceCollection.find(n.presenceKey)
          .catch(function (i) {
            if (
              (o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "requestContactPresence: subscribing failed",
                    ])),
                )
                .catching(r("getErrorSafe")(i)),
              g.get(t) === a)
            ) {
              g.delete(t);
              var l = p.get(t);
              l != null && l !== n && D(t, l);
            }
            N(t, n);
          }));
    }
    var x = r("once")(function () {
      (o("WAWebStreamModel").Stream.on("change:available", $),
        o("WAWebSocketModel").Socket.on("change:stream", $),
        o("WAWebPresenceCollection").PresenceCollection.on(
          "reset",
          function () {
            return g.clear();
          },
        ));
    });
    function $() {
      !o("WAWebStreamModel").Stream.available ||
        o("WAWebSocketModel").Socket.stream !==
          o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED ||
        (g.clear(),
        p.forEach(function (e, t) {
          return D(t, e);
        }));
    }
    function P() {
      var e = null;
      return (
        p.forEach(function (t, n) {
          t.rowHolds === 0 && (e = n);
        }),
        e == null ? !1 : (p.delete(e), !0)
      );
    }
    function N(e, t) {
      _.get(e) === t ? _.delete(e) : p.get(e) === t && (p.delete(e), M());
    }
    function M() {
      f || _.size === 0 || ((f = !0), queueMicrotask(w));
    }
    function w() {
      f = !1;
      for (var e of _) {
        var t = e[0],
          n = e[1];
        if (p.size >= s && !P()) return;
        (_.delete(t), I(t, n));
      }
    }
    function A(e) {
      var t, n;
      return e == null
        ? !1
        : ((t = o("WAWebPresenceCollection").PresenceCollection.get(e)) == null
            ? void 0
            : t.isOnline) === !0 ||
            ((n = B(e)) == null ? void 0 : n.isOnline) === !0;
    }
    function F() {
      return new Set(
        [].concat(
          o("WAWebPresenceCollection")
            .PresenceCollection.filter(function (e) {
              return e.isOnline;
            })
            .map(function (e) {
              return e.id;
            }),
          Array.from(W().values())
            .filter(function (e) {
              var t,
                n = e.key;
              return ((t = B(n)) == null ? void 0 : t.isOnline) === !0;
            })
            .map(function (e) {
              var t = e.key;
              return t;
            }),
        ),
      );
    }
    function O(e) {
      var t,
        n =
          e == null
            ? null
            : o("WAWebPresenceCollection").PresenceCollection.get(e),
        r = n == null ? null : q(n);
      return (r == null ? void 0 : r.isOnline) === !0
        ? r
        : (t = B(e)) != null
          ? t
          : r;
    }
    function B(e) {
      var t,
        n =
          e == null
            ? null
            : (t = W().get(e.toString())) == null
              ? void 0
              : t.presence;
      if (n == null || e == null) return null;
      var r = o("WAWebPresenceCollection").PresenceCollection.get(e);
      return r == null || q(r) == null ? n : null;
    }
    function W() {
      if (!o("WAWebContactsAndGroupsSampleData").isSampleDataOn()) return h;
      var e = o("WAWebContactsAndGroupsSampleData").getSampleDataSession();
      if (y.size === 0 || C !== e) {
        var t = o("WATimeUtils").unixTime();
        ((y = new Map(
          r("compactMap")(
            o("WAWebContactsAndGroupsSampleData").getSampleContacts(),
            b,
          )
            .slice(0, c + d)
            .map(function (e, n) {
              return [
                e.toString(),
                {
                  key: e,
                  presence:
                    n < c
                      ? { isOnline: !0, lastSeen: null }
                      : {
                          isOnline: !1,
                          lastSeen: t - n * m * o("WATimeUtils").MINUTE_SECONDS,
                        },
                },
              ];
            }),
        )),
          (C = e));
      }
      return y;
    }
    function q(e) {
      if (e.isOnline === !0) return { isOnline: !0, lastSeen: null };
      var t = e.chatstate,
        n = t != null && t.deny !== !0 ? t.t : null;
      return n == null ? null : { isOnline: !1, lastSeen: n };
    }
    ((l.MAX_PRESENCE_ROWS = s),
      (l.getContactPresenceKey = b),
      (l.requestContactPresence = v),
      (l.prefetchContactPresence = S),
      (l.isContactOnline = A),
      (l.getOnlinePresenceKeys = F),
      (l.getContactPresence = O));
  },
  98,
);
