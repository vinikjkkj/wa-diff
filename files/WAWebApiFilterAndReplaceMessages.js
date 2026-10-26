__d(
  "WAWebApiFilterAndReplaceMessages",
  [
    "WALogger",
    "WAWebApiOrphanRevoke",
    "WAWebBackendApi",
    "WAWebCoexV2StoredRevokeAuthorization",
    "WAWebLidMigrationUtils",
    "WAWebRequestDeleteAddOns",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return function (t) {
        return t.associationType != null ? e.get(t.id.toString()) : t;
      };
    }
    function u(e, t) {
      var n = [];
      return (
        e.forEach(function (e) {
          if (e != null)
            if (t) {
              var r = t(e);
              r && n.push(r);
            } else n.push(e);
        }),
        n
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = yield o("WAWebApiOrphanRevoke").getOrphansRevokesCache(),
            i = [],
            l = [],
            s = 0,
            u = [],
            c = [];
          return (
            t.forEach(function (e) {
              var t,
                d = e.id.toString(),
                m = o("WAWebLidMigrationUtils").getAlternateMsgKey(e.id),
                p = (t = a.get(d)) != null ? t : m && a.get(m.toString()),
                _ = p
                  ? o(
                      "WAWebCoexV2StoredRevokeAuthorization",
                    ).getCoexV2OrphanRevokeOutcome(e, p)
                  : null;
              if (
                (p && _ === "reject" && i.push(p),
                p && (_ == null || _ === "accept"))
              )
                (s++,
                  u.length < 3 && u.push(e.id.id),
                  r("WAWebWid").isStatus(e.id.remote) ||
                    l.push(
                      o("WAWebApiOrphanRevoke").createRevokeMsgFromOrphanRevoke(
                        e,
                        p,
                      ),
                    ),
                  _ === "accept" &&
                    (o(
                      "WAWebRequestDeleteAddOns",
                    ).requestDeleteAddOnsFireAndForget(e.id.remote.toString(), [
                      d,
                    ]),
                    c.push(d)),
                  i.push(p));
              else if (n) {
                var f = n(e);
                f && l.push(f);
              } else l.push(e);
            }),
            s > 0 &&
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[filterAndReplaceMessages] ",
                    " orphan revokes ids=",
                    "",
                  ])),
                s,
                u,
              ),
            c.length > 0 &&
              o("WAWebBackendApi").frontendFireAndForget(
                "deleteModelsForLastAddOnPreview",
                { messagesIds: c },
              ),
            o("WAWebApiOrphanRevoke").bulkRemoveOrphansUsingOrphansCache(i),
            { newMsgs: l }
          );
        })),
        d.apply(this, arguments)
      );
    }
    ((l.validateMsgFn = s),
      (l.filterAndReplaceMessagesInitialHistorySync = u),
      (l.filterAndReplaceMessages = c));
  },
  98,
);
