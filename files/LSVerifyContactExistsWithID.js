__d(
  "LSVerifyContactExistsWithID",
  [
    "LSAuthorityLevel",
    "LSContactBlockedByViewerStatus",
    "LSContactGender",
    "LSContactIdType",
    "LSContactType",
    "LSContactViewerRelationship",
    "LSContactWorkForeignEntityType",
    "LSFactory",
    "LSIntEnum",
    "LSPlatformWaitForTaskCompletion",
    "LSVerifyContactRowExistsStoredProcedure",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n, r) {
      return e.runInTransaction(
        function (e) {
          return d(t, n, e);
        },
        "readwrite",
        r != null ? r : "background",
        void 0,
        i.id + ":37",
      );
    }
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          yield r("LSPlatformWaitForTaskCompletion")(
            e,
            function (e) {
              return d(t, n, e);
            },
            "readwrite",
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(t, n, a) {
      return r("LSVerifyContactRowExistsStoredProcedure")(r("LSFactory")(a), {
        authorityLevel: (e || (e = o("LSIntEnum"))).ofNumber(
          r("LSAuthorityLevel").CLIENT_PARTIAL,
        ),
        blockedByViewerStatus: e.ofNumber(
          r("LSContactBlockedByViewerStatus").UNBLOCKED,
        ),
        contactIdType: e.ofNumber(r("LSContactIdType").FBID),
        contactType: e.ofNumber(r("LSContactType").USER),
        contactViewerRelationship: e.ofNumber(
          r("LSContactViewerRelationship").UNKNOWN,
        ),
        gender: e.ofNumber(r("LSContactGender").UNKNOWN),
        id: t,
        isBlocked: !1,
        isMemorialized: !1,
        isSelf: n,
        workForeignEntityType: e.ofNumber(
          r("LSContactWorkForeignEntityType").UNKNOWN,
        ),
      });
    }
    ((l.runInTransaction = s),
      (l.waitForTaskFinish = u),
      (l.callStoredProcedure = d));
  },
  98,
);
