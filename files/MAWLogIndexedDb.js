__d(
  "MAWLogIndexedDb",
  [
    "FBLogger",
    "MAWCurrentUser",
    "MAWErrorObject",
    "MAWIndexedDbMetadata",
    "MAWQplProxy",
    "MAWTransactionMode",
    "Promise",
    "WAExceededStorageQuota",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = null;
    function c() {
      return r("justknobx")._("1399");
    }
    function d() {
      if (s == null)
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "LogDB IndexDB should've been initialized",
        );
      return s;
    }
    function m() {
      return u == null
        ? _().then(function () {
            return d();
          })
        : u.then(function () {
            return d();
          });
    }
    var p = [
      function (e) {
        var t = e.target.transaction;
        o("WAExceededStorageQuota").listenToQuotaExceededError(t);
        var n = t.db.createObjectStore("logs", {
          autoIncrement: !0,
          keyPath: "id",
        });
        n.createIndex("date", "date", { unique: !1 });
      },
    ];
    function _(t) {
      var r;
      if (u != null) return u;
      if (s != null) return (e || (e = n("Promise"))).resolve();
      var a = o("MAWCurrentUser").getID(),
        i = o("MAWIndexedDbMetadata").logDbName(a),
        l = (r = t != null ? t : c()) != null ? r : p.length;
      return (
        (u = new (e || (e = n("Promise")))(function (e, t) {
          var n = indexedDB.open(i, l);
          ((n.onupgradeneeded = function (e) {
            for (var t = 0; t < p.length; t++) {
              var n = p[t];
              f(e, t + 1) && n(e);
            }
          }),
            (n.onsuccess = function (t) {
              var n = t.target.result;
              ((n.onversionchange = function () {
                n.close();
              }),
                (s = n),
                e());
            }),
            (n.onerror = function () {
              t(n.error);
            }));
        })),
        u
      );
    }
    function f(e, t) {
      var n = e.newVersion,
        r = e.oldVersion;
      return r < t && n >= t;
    }
    function g(e) {
      return e === o("MAWTransactionMode").READWRITE ? "readwrite" : "readonly";
    }
    function h(e, t, n) {
      var a = g(t);
      return function (t) {
        return function () {
          for (var i = arguments.length, l = new Array(i), s = 0; s < i; s++)
            l[s] = arguments[s];
          var u = n != null ? o("MAWQplProxy").startQplUserFlow(n) : null;
          return m()
            .then(function (n) {
              var r = function (r) {
                var t = n.transaction(e, r != null ? g(r) : a, {
                  durability: "relaxed",
                });
                return (
                  o("WAExceededStorageQuota").listenToQuotaExceededError(t),
                  t.objectStore(e)
                );
              };
              return t.apply(void 0, [r].concat(l));
            })
            .then(function (e) {
              return (u == null || u.endSuccess(), e);
            })
            .catch(function (e) {
              u == null || u.endFail("transaction_fail");
              var t = o("MAWErrorObject").getErrorObject(e),
                n = r("FBLogger")("maw_db");
              throw t instanceof Error
                ? n
                    .catching(t)
                    .mustfixThrow(
                      "LOG - Error performing transaction in log transactor",
                    )
                : n.mustfixThrow(
                    "LOG - Error performing transaction in log transactor",
                  );
            });
        };
      };
    }
    l.makeLogMsgrTransactor = h;
  },
  98,
);
