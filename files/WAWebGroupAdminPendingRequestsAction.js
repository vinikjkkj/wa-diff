__d(
  "WAWebGroupAdminPendingRequestsAction",
  [
    "WALogger",
    "WAWebApiMembershipApprovalRequestStore",
    "WAWebChatCollection",
    "WAWebGroupGetMembershipApprovalRequestsJob",
    "WAWebGroupMembershipApprovalRequestModel",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = null,
      c = [];
    function d() {
      return (
        (u == null || c.some(p)) &&
          ((c = []),
          (u = _().then(
            function (e) {
              c = e;
            },
            function (t) {
              u = null;
              var n = r("getErrorSafe")(t);
              throw (
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "loadAdminGroupPendingRequests: failed to read stored join requests",
                      ])),
                  )
                  .catching(n),
                n
              );
            },
          ))),
        u
      );
    }
    function m(e) {
      o("WAWebGroupGetMembershipApprovalRequestsJob")
        .queryAndUpdateGroupMembershipApprovalRequests(e.id)
        .catch(function (e) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "refreshGroupPendingRequests: failed to query join requests",
                ])),
            )
            .catching(r("getErrorSafe")(e));
        });
    }
    function p(e) {
      var t;
      return (
        ((t = o("WAWebChatCollection").ChatCollection.get(
          o("WAWebWidFactory").createWid(e),
        )) == null
          ? void 0
          : t.groupMetadata) != null
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
              "WAWebApiMembershipApprovalRequestStore",
            ).getAllMembershipApprovalRequests(),
            t = new Map();
          e.forEach(function (e) {
            var n = e.groupId,
              r = e.request,
              o = t.get(n);
            o != null ? o.push(r) : t.set(n, [r]);
          });
          var n = [];
          return (
            t.forEach(function (e, t) {
              var a,
                i =
                  (a = o("WAWebChatCollection").ChatCollection.get(
                    o("WAWebWidFactory").createWid(t),
                  )) == null
                    ? void 0
                    : a.groupMetadata;
              if (i == null) {
                n.push(t);
                return;
              }
              i.membershipApprovalRequests.add(
                e.map(function (e) {
                  return new (r("WAWebGroupMembershipApprovalRequestModel"))(e);
                }),
                { merge: !0 },
              );
            }),
            n
          );
        })),
        f.apply(this, arguments)
      );
    }
    ((l.loadAdminGroupPendingRequests = d),
      (l.refreshGroupPendingRequests = m));
  },
  98,
);
