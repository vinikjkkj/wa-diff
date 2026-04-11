__d(
  "WAWebApiFilterAndReplaceMessages",
  [
    "WALogger",
    "WAWebApiOrphanRevoke",
    "WAWebLidMigrationUtils",
    "WAWebMessageAssociationGatingUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return function (t) {
        return t.associationType != null &&
          o(
            "WAWebMessageAssociationGatingUtils",
          ).isMessageAssociationInfraEnabled()
          ? e.get(t.id.toString())
          : t;
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
            u = [];
          return (
            t.forEach(function (e) {
              var t,
                c = e.id.toString(),
                d = o("WAWebLidMigrationUtils").getAlternateMsgKey(e.id),
                m = (t = a.get(c)) != null ? t : d && a.get(d.toString());
              if (m)
                (s++,
                  u.length < 3 && u.push(e.id.id),
                  r("WAWebWid").isStatus(e.id.remote) ||
                    l.push(
                      o("WAWebApiOrphanRevoke").createRevokeMsgFromOrphanRevoke(
                        e,
                        m,
                      ),
                    ),
                  i.push(m));
              else if (n) {
                var p = n(e);
                p && l.push(p);
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
