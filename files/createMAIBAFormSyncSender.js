__d(
  "createMAIBAFormSyncSender",
  ["FBLogger", "LWIFormSyncState", "Promise", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1500;
    function u(t) {
      var a = null,
        i = !1,
        l = o("LWIFormSyncState").subscribeToLWIFormSyncReceipts(function () {
          return c();
        });
      function u() {
        (a == null || a(), (a = i ? null : t.schedule(c, s)));
      }
      function c() {
        (a == null || a(), (a = null));
        var l = i ? null : t.getReadyConversationID(),
          s = l == null ? null : o("LWIFormSyncState").beginLWIFormSyncSend(l);
        if (!(l == null || s == null)) {
          var c = null;
          try {
            c = o("LWIFormSyncState").selectLWIFormSyncMessage(l, t.now());
          } catch (e) {
            (r("FBLogger")("maiba_lwi_form_sync").mustfix(
              "Selecting a form-sync message threw %s",
              r("getErrorSafe")(e).name,
            ),
              (c = "degraded"));
          }
          if (c == null || c === "degraded") {
            (c === "degraded" &&
              o("LWIFormSyncState").markLWIFormSyncDegraded(l),
              s());
            return;
          }
          var d = c,
            m = d.markPersisted,
            p = d.message,
            _ = function () {},
            f = new (e || (e = n("Promise")))(function (e) {
              ((_ = t.schedule(function () {
                return e(!1);
              }, o("LWIFormSyncState").LWI_FORM_SYNC_WATCHDOG_MS)),
                t.send(l, p).then(
                  function () {
                    return e(!0);
                  },
                  function () {
                    return e(!1);
                  },
                ));
            });
          o("LWIFormSyncState").trackLWIFormSyncSilentSend(l, f);
          var g = function (t) {
            _();
            try {
              t ? m() : o("LWIFormSyncState").markLWIFormSyncDegraded(l);
            } finally {
              s();
            }
            t && u();
          };
          f.then(g, function () {
            return g(!1);
          });
        }
      }
      return {
        dispose: function () {
          ((i = !0), a == null || a(), l());
        },
        flush: c,
        onFormChanged: u,
      };
    }
    l.default = u;
  },
  98,
);
