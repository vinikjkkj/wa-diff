__d(
  "MWEncryptedBackupsSharedState",
  [
    "FBLogger",
    "ReQL",
    "ReQLSuspense",
    "WebStorage",
    "getMWEncryptedBackupsIsLocalStorageSupported",
    "promiseDone",
    "react",
    "react-compiler-runtime",
    "useReStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (u || (u = o("react"))).useCallback;
    function d(e) {
      var t = e.db,
        n = e.stateKey,
        r = e.stateValue,
        o = r === void 0 ? "true" : r;
      return t.runInTransaction(
        function (e) {
          return e.experiences_shared_state.upsert([n], {
            stateKey: n,
            stateValue: o,
          });
        },
        "readwrite",
        "background",
        void 0,
        i.id + ":38",
      );
    }
    function m(t) {
      var n,
        a = t.db,
        i = t.stateKey;
      if (
        o(
          "getMWEncryptedBackupsIsLocalStorageSupported",
        ).getMWEncryptedBackupsIsLocalStorageSupported()
      ) {
        var l =
          (n = (e || (e = r("WebStorage"))).getLocalStorageForRead()) == null
            ? void 0
            : n.getItem(i);
        if (l != null) {
          var s;
          ((s = (e || (e = r("WebStorage"))).getLocalStorage()) == null ||
            s.removeItem(i),
            r("promiseDone")(d({ db: a, stateKey: i, stateValue: l })));
        }
        return l;
      }
    }
    function p(e) {
      var t = e.db,
        n = e.sharedStateTable,
        r = e.stateKey,
        o = n.filter(function (e) {
          return e.stateKey === r;
        });
      if (o.length === 0) {
        var a = m({ db: t, stateKey: r });
        return a != null;
      }
      return !0;
    }
    function _(e) {
      var t = e.db,
        n = e.sharedStateTable,
        r = e.stateKey,
        o = n.filter(function (e) {
          return e.stateKey === r;
        }),
        a = o[0];
      return (a == null ? void 0 : a.stateValue) != null
        ? a.stateValue
        : m({ db: t, stateKey: r });
    }
    function f(e) {
      var t = e.db,
        n = e.sharedStateRow,
        r = e.stateKey;
      return n == null ? m({ db: t, stateKey: r }) : n.stateValue;
    }
    function g(e) {
      var t = e.db,
        n = e.stateKey;
      return t.runInTransaction(
        function (e) {
          return e.experiences_shared_state.delete(n);
        },
        "readwrite",
        "background",
        void 0,
        i.id + ":132",
      );
    }
    function h(e) {
      var t,
        n = o("react-compiler-runtime").c(6),
        a = (s || (s = r("useReStore")))(),
        l =
          (t = o("ReQLSuspense").useFirst(
            function () {
              return o("ReQL")
                .fromTableAscending(a.tables.experiences_shared_state)
                .getKeyRange(e);
            },
            [a.tables.experiences_shared_state, e],
            i.id + ":143",
          )) == null
            ? void 0
            : t.stateValue,
        u;
      n[0] !== a || n[1] !== e
        ? ((u = function (n) {
            return d({ db: a, stateKey: e, stateValue: n });
          }),
          (n[0] = a),
          (n[1] = e),
          (n[2] = u))
        : (u = n[2]);
      var c = u,
        m;
      return (
        n[3] !== c || n[4] !== l
          ? ((m = [l, c]), (n[3] = c), (n[4] = l), (n[5] = m))
          : (m = n[5]),
        m
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(5),
        n = h(e),
        r = n[0],
        a = n[1],
        i;
      t[0] !== a
        ? ((i = function () {
            a("true");
          }),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        s = r === "true",
        u;
      return (
        t[2] !== l || t[3] !== s
          ? ((u = [s, l]), (t[2] = l), (t[3] = s), (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    function C(e, t) {
      var n,
        a = o("react-compiler-runtime").c(10),
        i =
          (n = t == null ? void 0 : t.timestampFormat) != null ? n : "seconds",
        l = h(e),
        s = l[0],
        u = l[1],
        c = s != null ? parseInt(s, 10) : void 0,
        d;
      a[0] !== c || a[1] !== i
        ? ((d =
            c != null
              ? i === "seconds"
                ? new Date(c * 1e3)
                : i === "milliseconds"
                  ? new Date(c)
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          i,
                      );
                    })()
              : void 0),
          (a[0] = c),
          (a[1] = i),
          (a[2] = d))
        : (d = a[2]);
      var m = d,
        p;
      a[3] !== u || a[4] !== e || a[5] !== i
        ? ((p = function (n) {
            var t =
              i === "seconds"
                ? Math.round(n.getTime() / 1e3)
                : i === "milliseconds"
                  ? n.getTime()
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          i,
                      );
                    })();
            return u(t.toString()).catch(function (t) {
              r("FBLogger")("messenger_web_trust")
                .catching(t)
                .warn("Failed to set timestamp in shared state for key %s", e);
            });
          }),
          (a[3] = u),
          (a[4] = e),
          (a[5] = i),
          (a[6] = p))
        : (p = a[6]);
      var _ = p,
        f;
      return (
        a[7] !== m || a[8] !== _
          ? ((f = [m, _]), (a[7] = m), (a[8] = _), (a[9] = f))
          : (f = a[9]),
        f
      );
    }
    ((l.upsertEBSharedStateEntry = d),
      (l.getEntryPresentInLocalStorage = m),
      (l.getIsEntryPresentInSharedState = p),
      (l.getEntryValueFromSharedState = _),
      (l.getEntryValue = f),
      (l.deleteEntry = g),
      (l.useEBSharedStateEntry = h),
      (l.useEBSharedStateEntryBoolean = y),
      (l.useEBSharedStateEntryTimestamp = C));
  },
  98,
);
