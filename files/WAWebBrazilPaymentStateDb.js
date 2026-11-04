__d(
  "WAWebBrazilPaymentStateDb",
  [
    "WAWebBrazilPaymentState",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["message"],
          (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                var r = n[0],
                  a = yield r.bulkGet(u(e).map(String), !1),
                  i = a.find(function (e) {
                    return c(e) != null;
                  }),
                  l = c(i);
                if (i == null || l == null) return null;
                var s = o("WAWebBrazilPaymentState").getBrazilPaymentState(l),
                  d = t(s);
                if (o("WAWebBrazilPaymentState").isSameBrazilPaymentState(s, d))
                  return { previous: s, next: d, updatedPayload: null };
                var m = o("WAWebBrazilPaymentState").withBrazilPaymentState(
                  l,
                  d,
                );
                return m === l
                  ? null
                  : (yield r.bulkCreateOrMerge([
                      { id: i.id, interactivePayload: m },
                    ]),
                    { previous: s, next: d, updatedPayload: m });
              },
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })(),
        );
    }
    function s(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["message"],
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t[0],
                  r = u(e),
                  a = yield n.bulkGet(r.map(String), !1),
                  i = a.findIndex(function (e) {
                    return (
                      e != null && e.type === o("WAWebMsgType").MSG_TYPE.IMAGE
                    );
                  }),
                  l = a[i];
                return l == null
                  ? null
                  : (l.viewMode !==
                      o("WAWebViewMode.flow").ViewModeType.HIDDEN &&
                      (yield n.bulkCreateOrMerge([
                        {
                          id: l.id,
                          viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
                        },
                      ])),
                    r[i]);
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        );
    }
    function u(e) {
      var t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
      return t == null ? [e] : [e, t];
    }
    function c(e) {
      var t;
      if (e != null && (t = e.interactivePayload) != null && t.buttons) {
        var n = e.interactivePayload;
        return n;
      }
      return null;
    }
    ((l.updateStoredBrazilPaymentState = e), (l.hideStoredReceiptImage = s));
  },
  98,
);
