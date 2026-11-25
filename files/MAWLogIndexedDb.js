__d(
  "MAWLogIndexedDb",
  [
    "FBLogger",
    "MAWCurrentUser",
    "MAWErrorObject",
    "MAWIndexedDbMetadata",
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
    function _() {
      var t;
      if (u != null) return u;
      if (s != null) return (e || (e = n("Promise"))).resolve();
      var r = o("MAWCurrentUser").getID(),
        a = o("MAWIndexedDbMetadata").logDbName(r),
        i = (t = c()) != null ? t : p.length;
      return (
        (u = new (e || (e = n("Promise")))(function (e, t) {
          var n = indexedDB.open(a, i);
          ((n.onupgradeneeded = function (e) {
            for (var t = 0; t < p.length; t++) {
              var n = p[t];
              f(e, t + 1) && n(e);
            }
          }),
            (n.onsuccess = function () {
              var t = n.result;
              ((t.onversionchange = function () {
                t.close();
              }),
                (s = t),
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
    function h(e, t) {
      var n = g(t);
      return function (t) {
        return function () {
          for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          return m()
            .then(function (r) {
              var a = function (a) {
                var t = r.transaction(e, a != null ? g(a) : n, {
                  durability: "relaxed",
                });
                return (
                  o("WAExceededStorageQuota").listenToQuotaExceededError(t),
                  t.objectStore(e)
                );
              };
              return t.apply(void 0, [a].concat(i));
            })
            .catch(function (e) {
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
