__d(
  "MAWThreadCutover",
  [
    "I64",
    "LSAuthorityLevel",
    "LSContactBitOffset",
    "LSDatabaseSingleton",
    "LSMessagingThreadTypeUtil",
    "MWEncryptedBackupsLocalStorageEntryEnum",
    "MWEncryptedBackupsSharedState",
    "MWPActor.react",
    "MWPreloadableQueries",
    "ReQL",
    "ReQLSuspense",
    "WAJids",
    "asyncToGeneratorRuntime",
    "react-compiler-runtime",
    "useCometMessengerhasDefaultThreadOneToOneCapability",
    "useMAWCanThreadBeCutoverOnDemand",
    "useReStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e, t) {
      var n = (u || (u = r("useReStore")))(),
        a = L(e),
        i = r("useCometMessengerhasDefaultThreadOneToOneCapability")(n, e),
        l = t != null && o("LSMessagingThreadTypeUtil").isGroup(t);
      return l ? !0 : a || i;
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (yield P(e)) != null;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(4),
        n = (u || (u = r("useReStore")))(),
        a,
        l;
      return (
        t[0] !== n || t[1] !== e
          ? ((a = function () {
              return e != null
                ? o("MWPreloadableQueries").getCutoverThreadByThreadKey(n, e)
                : o("ReQL").empty();
            }),
            (l = [n, e]),
            (t[0] = n),
            (t[1] = e),
            (t[2] = a),
            (t[3] = l))
          : ((a = t[2]), (l = t[3])),
        o("ReQLSuspense").useFirst(a, l, i.id + ":62") != null
      );
    }
    function _(e) {
      var t,
        n = (u || (u = r("useReStore")))(),
        a =
          (t = o("ReQLSuspense").useFirst(
            function () {
              return e != null
                ? o("MWPreloadableQueries").getCutoverThreadByThreadKey(n, e)
                : o("ReQL").empty();
            },
            [n, e],
            i.id + ":74",
          )) == null
            ? void 0
            : t.showOpenMessageHistory;
      return a === !1;
    }
    function f(e) {
      var t = R(e);
      return _(t);
    }
    function g(e, t) {
      return o("ReQL")
        .fromTableAscending(e.tables.mi_act_mapping_table)
        .getKeyRange(t);
    }
    function h(t, n) {
      return o("ReQL")
        .fromTableAscending(t.tables.cutover_threads)
        .filter(function (t) {
          return (e || (e = o("I64"))).equal(t.armadilloThreadId, n);
        });
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(8),
        n = (u || (u = r("useReStore")))(),
        a,
        l;
      t[0] !== n || t[1] !== e
        ? ((a = function () {
            return e == null ? o("ReQL").empty() : g(n, e);
          }),
          (l = [n, e]),
          (t[0] = n),
          (t[1] = e),
          (t[2] = a),
          (t[3] = l))
        : ((a = t[2]), (l = t[3]));
      var s = o("ReQLSuspense").useFirst(a, l, i.id + ":112"),
        c,
        d;
      return (
        t[4] !== n || t[5] !== s
          ? ((c = function () {
              return s == null ? o("ReQL").empty() : h(n, s.jid);
            }),
            (d = [n, s]),
            (t[4] = n),
            (t[5] = s),
            (t[6] = c),
            (t[7] = d))
          : ((c = t[6]), (d = t[7])),
        o("ReQLSuspense").useFirst(c, d, i.id + ":120")
      );
    }
    function C(e, t) {
      return o("ReQL")
        .fromTableAscending(e.tables.threads)
        .getKeyRange(t.openThreadId);
    }
    function b(t) {
      var n = v(t);
      if (
        !(
          n == null ||
          (e || (e = o("I64"))).lt(
            n.authorityLevel,
            (e || (e = o("I64"))).of_int32(
              r("LSAuthorityLevel").SERVER_PARTIAL,
            ),
          )
        )
      )
        return n;
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(4),
        n = (u || (u = r("useReStore")))(),
        a = y(e),
        l,
        s;
      return (
        t[0] !== a || t[1] !== n
          ? ((l = function () {
              return a == null ? o("ReQL").empty() : C(n, a);
            }),
            (s = [n, a]),
            (t[0] = a),
            (t[1] = n),
            (t[2] = l),
            (t[3] = s))
          : ((l = t[2]), (s = t[3])),
        o("ReQLSuspense").useFirst(l, s, i.id + ":162")
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(8),
        n = (u || (u = r("useReStore")))(),
        a,
        l;
      t[0] !== n || t[1] !== e
        ? ((a = function () {
            return e == null ? o("ReQL").empty() : g(n, e);
          }),
          (l = [n, e]),
          (t[0] = n),
          (t[1] = e),
          (t[2] = a),
          (t[3] = l))
        : ((a = t[2]), (l = t[3]));
      var s = o("ReQLSuspense").useFirst(a, l, i.id + ":174"),
        c = s == null ? void 0 : s.jid,
        d,
        m;
      t[4] !== n.tables.threads || t[5] !== c
        ? ((d = function () {
            return c != null
              ? o("ReQL").fromTableAscending(n.tables.threads).getKeyRange(c)
              : o("ReQL").empty();
          }),
          (m = [n.tables.threads, c]),
          (t[4] = n.tables.threads),
          (t[5] = c),
          (t[6] = d),
          (t[7] = m))
        : ((d = t[6]), (m = t[7]));
      var p = o("ReQLSuspense").useFirst(d, m, i.id + ":183"),
        _ = r("useMAWCanThreadBeCutoverOnDemand")(c);
      return _ ? p : void 0;
    }
    function R(e) {
      var t = y(e);
      if (t != null) return t.openThreadId;
    }
    function L(e) {
      return y(e) != null;
    }
    function E(t, n) {
      var r = o("WAJids").threadIdForChatJid(n);
      return o("ReQL")
        .firstAsync(
          o("ReQL")
            .fromTableAscending(t.tables.cutover_threads)
            .getKeyRange((e || (e = o("I64"))).of_string(r)),
        )
        .then(function (e) {
          return e != null;
        });
    }
    function k() {
      var e = o("react-compiler-runtime").c(3),
        t = (u || (u = r("useReStore")))(),
        n = o("MWPActor.react").useActor(),
        a;
      if (e[0] !== n || e[1] !== t.tables.contacts) {
        var l,
          s = o("ReQLSuspense").first(
            o("ReQL").fromTableAscending(t.tables.contacts).getKeyRange(n),
            i.id + ":223",
          );
        ((a =
          s != null &&
          ((l = o("LSContactBitOffset").has(75, s)) != null ? l : !1)),
          (e[0] = n),
          (e[1] = t.tables.contacts),
          (e[2] = a));
      } else a = e[2];
      return a;
    }
    function I() {
      var e = o("react-compiler-runtime").c(7),
        t = (u || (u = r("useReStore")))(),
        n;
      e[0] !== t.tables.experiences_shared_state
        ? ((n = function () {
            return o("ReQL")
              .fromTableAscending(t.tables.experiences_shared_state)
              .getKeyRange(
                r("MWEncryptedBackupsLocalStorageEntryEnum")
                  .ENCRYPTED_BACKUPS_RESTORED_SUCCESSFULLY,
              );
          }),
          (e[0] = t.tables.experiences_shared_state),
          (e[1] = n))
        : (n = e[1]);
      var a;
      e[2] !== t ? ((a = [t]), (e[2] = t), (e[3] = a)) : (a = e[3]);
      var l = o("ReQLSuspense").useFirst(n, a, i.id + ":238"),
        s;
      e[4] !== l || e[5] !== t
        ? ((s = o("MWEncryptedBackupsSharedState").getEntryValue({
            db: t,
            sharedStateRow: l,
            stateKey: r("MWEncryptedBackupsLocalStorageEntryEnum")
              .ENCRYPTED_BACKUPS_RESTORED_SUCCESSFULLY,
          })),
          (e[4] = l),
          (e[5] = t),
          (e[6] = s))
        : (s = e[6]);
      var c = s;
      return c != null;
    }
    function T(t) {
      var n = o("react-compiler-runtime").c(7),
        a = (u || (u = r("useReStore")))(),
        l;
      n[0] !== t
        ? ((l = t != null ? (e || (e = o("I64"))).of_string(t) : void 0),
          (n[0] = t),
          (n[1] = l))
        : (l = n[1]);
      var s = l,
        c = p(s),
        d,
        m;
      return (
        n[2] !== a || n[3] !== c || n[4] !== s
          ? ((d = function () {
              return c && s != null
                ? o("ReQL")
                    .fromTableAscending(a.tables.mi_act_mapping_table)
                    .filter(function (t) {
                      return (e || (e = o("I64"))).equal(t.jid, s);
                    })
                    .map(D)
                : o("ReQL").empty();
            }),
            (m = [a, s, c]),
            (n[2] = a),
            (n[3] = c),
            (n[4] = s),
            (n[5] = d),
            (n[6] = m))
          : ((d = n[5]), (m = n[6])),
        o("ReQLSuspense").useFirst(d, m, i.id + ":259")
      );
    }
    function D(t) {
      return (e || (e = o("I64"))).to_string(t.serverThreadKey);
    }
    function x() {
      return !0;
    }
    function $(e) {
      var t = o("react-compiler-runtime").c(8),
        n = (u || (u = r("useReStore")))(),
        a,
        l;
      t[0] !== n || t[1] !== e
        ? ((a = function () {
            return e != null
              ? o("MWPreloadableQueries").getCutoverThreadByThreadKey(n, e)
              : o("ReQL").empty();
          }),
          (l = [n, e]),
          (t[0] = n),
          (t[1] = e),
          (t[2] = a),
          (t[3] = l))
        : ((a = t[2]), (l = t[3]));
      var s = o("ReQLSuspense").useFirst(a, l, i.id + ":286"),
        c = s == null ? void 0 : s.armadilloThreadId,
        d,
        m;
      t[4] !== n.tables.mi_act_mapping_table || t[5] !== c
        ? ((d = function () {
            return c != null
              ? o("ReQL")
                  .fromTableAscending(
                    n.tables.mi_act_mapping_table.index("jid"),
                  )
                  .getKeyRange(c)
              : o("ReQL").empty();
          }),
          (m = [c, n.tables.mi_act_mapping_table]),
          (t[4] = n.tables.mi_act_mapping_table),
          (t[5] = c),
          (t[6] = d),
          (t[7] = m))
        : ((d = t[6]), (m = t[7]));
      var p = o("ReQLSuspense").useFirst(d, m, i.id + ":297");
      return p == null ? void 0 : p.serverThreadKey;
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield (s || (s = o("LSDatabaseSingleton")))
              .LSDatabaseSingleton,
            r = yield o("ReQL").firstAsync(
              o("ReQL")
                .fromTableAscending(n.tables.mi_act_mapping_table)
                .getKeyRange(t),
            );
          if (r != null) {
            var a = yield o("ReQL").firstAsync(
              o("ReQL")
                .fromTableAscending(n.tables.cutover_threads)
                .filter(function (t) {
                  return (e || (e = o("I64"))).equal(
                    t.armadilloThreadId,
                    r.jid,
                  );
                }),
            );
            return a;
          }
        })),
        N.apply(this, arguments)
      );
    }
    ((l.useShouldHideE2eeAttribution = c),
      (l.isCutoverThreadKey = d),
      (l.useIsCutoverOpenThread = p),
      (l.useIsDualThreadCutoverOpenThread = _),
      (l.useIsDualThreadCutoverSecureThread = f),
      (l.getMiActMappings = g),
      (l.getCutoverThreadsByJid = h),
      (l.useGetCutoverMapping = y),
      (l.getThreadByCutoverThread = C),
      (l.useOpenThreadIfExistsFromCutoverThread = b),
      (l.useCutoverOpenThread = v),
      (l.useODCutoverEligibleOpenOneToOneThread = S),
      (l.useGetCutoverOpenThreadKey = R),
      (l.useIsCutoverSecureThread = L),
      (l.isCutoverSecureThreadFromChatJid = E),
      (l.useIsCurrentUserCutoverUser = k),
      (l.useGetHasUserRestoredBefore = I),
      (l.useGetCutoverSecureThreadKey = T),
      (l.useSupportedCutoverEnvironment = x),
      (l.useCutoverSecureThreadKeyForOpenThreadKey = $),
      (l.getCutoverThreadBySecureThreadKey = P));
  },
  98,
);
