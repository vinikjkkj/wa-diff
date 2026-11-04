__d(
  "WAWebContactsAndGroupsPresence",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebContactsAndGroupsSampleData",
    "WAWebLidMigrationUtils",
    "WAWebNoop",
    "WAWebPresenceCollection",
    "WAWebWidFactory",
    "compactMap",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 30,
      u = 4,
      c = 16,
      d = 13,
      m = new Map(),
      p = new Map(),
      _ = p,
      f = null;
    function g(e) {
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
    function h(e) {
      return C(e, "row");
    }
    function y(e) {
      var t = e.map(function (e) {
        return C(e, "prefetch");
      });
      return function () {
        t.forEach(function (e) {
          return e();
        });
      };
    }
    function C(e, t) {
      var n,
        o = e.toString(),
        a = (n = m.get(o)) != null ? n : v(e, t);
      return a == null
        ? r("WAWebNoop")
        : (b(a, t, 1),
          function () {
            (b(a, t, -1), a.prefetchHolds + a.rowHolds <= 0 && R(o, a));
          });
    }
    function b(e, t, n) {
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
    function v(t, n) {
      if (m.size >= s && (n === "prefetch" || !S())) return null;
      var a = t.toString(),
        i = { prefetchHolds: 0, rowHolds: 0 };
      return (
        m.set(a, i),
        o("WAWebPresenceCollection")
          .PresenceCollection.find(t)
          .catch(function (t) {
            (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "requestContactPresence: subscribing failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t)),
              R(a, i));
          }),
        i
      );
    }
    function S() {
      var e = null;
      return (
        m.forEach(function (t, n) {
          t.rowHolds === 0 && (e = n);
        }),
        e == null ? !1 : (m.delete(e), !0)
      );
    }
    function R(e, t) {
      m.get(e) === t && m.delete(e);
    }
    function L(e) {
      var t, n;
      return e == null
        ? !1
        : ((t = o("WAWebPresenceCollection").PresenceCollection.get(e)) == null
            ? void 0
            : t.isOnline) === !0 ||
            ((n = I(e)) == null ? void 0 : n.isOnline) === !0;
    }
    function E() {
      return new Set(
        [].concat(
          o("WAWebPresenceCollection")
            .PresenceCollection.filter(function (e) {
              return e.isOnline;
            })
            .map(function (e) {
              return e.id;
            }),
          Array.from(T().values())
            .filter(function (e) {
              var t,
                n = e.key;
              return ((t = I(n)) == null ? void 0 : t.isOnline) === !0;
            })
            .map(function (e) {
              var t = e.key;
              return t;
            }),
        ),
      );
    }
    function k(e) {
      var t,
        n =
          e == null
            ? null
            : o("WAWebPresenceCollection").PresenceCollection.get(e),
        r = n == null ? null : D(n);
      return (r == null ? void 0 : r.isOnline) === !0
        ? r
        : (t = I(e)) != null
          ? t
          : r;
    }
    function I(e) {
      var t,
        n =
          e == null
            ? null
            : (t = T().get(e.toString())) == null
              ? void 0
              : t.presence;
      if (n == null || e == null) return null;
      var r = o("WAWebPresenceCollection").PresenceCollection.get(e);
      return r == null || D(r) == null ? n : null;
    }
    function T() {
      if (!o("WAWebContactsAndGroupsSampleData").isSampleDataOn()) return p;
      var e = o("WAWebContactsAndGroupsSampleData").getSampleDataSession();
      if (_.size === 0 || f !== e) {
        var t = o("WATimeUtils").unixTime();
        ((_ = new Map(
          r("compactMap")(
            o("WAWebContactsAndGroupsSampleData").getSampleContacts(),
            g,
          )
            .slice(0, u + c)
            .map(function (e, n) {
              return [
                e.toString(),
                {
                  key: e,
                  presence:
                    n < u
                      ? { isOnline: !0, lastSeen: null }
                      : {
                          isOnline: !1,
                          lastSeen: t - n * d * o("WATimeUtils").MINUTE_SECONDS,
                        },
                },
              ];
            }),
        )),
          (f = e));
      }
      return _;
    }
    function D(e) {
      if (e.isOnline === !0) return { isOnline: !0, lastSeen: null };
      var t = e.chatstate,
        n = t != null && t.deny !== !0 ? t.t : null;
      return n == null ? null : { isOnline: !1, lastSeen: n };
    }
    ((l.MAX_PRESENCE_ROWS = s),
      (l.getContactPresenceKey = g),
      (l.requestContactPresence = h),
      (l.prefetchContactPresence = y),
      (l.isContactOnline = L),
      (l.getOnlinePresenceKeys = E),
      (l.getContactPresence = k));
  },
  98,
);
