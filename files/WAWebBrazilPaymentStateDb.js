__d(
  "WAWebBrazilPaymentStateDb",
  [
    "WAWebBrazilPaymentState",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message"], async function (n) {
          var r = n[0],
            a = await r.bulkGet(c(e).map(String), !1),
            i = a.find(function (e) {
              return d(e) != null;
            }),
            l = d(i);
          if (i == null || l == null) return null;
          var s = o("WAWebBrazilPaymentState").getBrazilPaymentState(l),
            u = t(s);
          if (o("WAWebBrazilPaymentState").isSameBrazilPaymentState(s, u))
            return { previous: s, next: u, updatedPayload: null };
          var m = o("WAWebBrazilPaymentState").withBrazilPaymentState(l, u);
          return m === l
            ? null
            : (await r.bulkCreateOrMerge([{ id: i.id, interactivePayload: m }]),
              { previous: s, next: u, updatedPayload: m });
        });
    }
    function s(e, t) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message"], async function (n) {
          var r = n[0],
            a = await r.bulkGet(c(e).map(String), !1),
            i = a.find(function (e) {
              return d(e) != null;
            }),
            l = d(i);
          if (
            i == null ||
            l == null ||
            o("WAWebBrazilPaymentState").isBubbleViewLogged(l)
          )
            return null;
          var s = o("WAWebBrazilPaymentState").withBubbleViewLogged(l);
          return s === l
            ? null
            : (await r.bulkCreateOrMerge([{ id: i.id, interactivePayload: s }]),
              t(),
              s);
        });
    }
    function u(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message"], async function (t) {
          var n = t[0],
            r = c(e),
            a = await n.bulkGet(r.map(String), !1),
            i = a.findIndex(function (e) {
              return e != null && e.type === o("WAWebMsgType").MSG_TYPE.IMAGE;
            }),
            l = a[i];
          return l == null
            ? null
            : (l.viewMode !== o("WAWebViewMode.flow").ViewModeType.HIDDEN &&
                (await n.bulkCreateOrMerge([
                  {
                    id: l.id,
                    viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
                  },
                ])),
              r[i]);
        });
    }
    function c(e) {
      var t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
      return t == null ? [e] : [e, t];
    }
    function d(e) {
      var t;
      if (e != null && (t = e.interactivePayload) != null && t.buttons) {
        var n = e.interactivePayload;
        return n;
      }
      return null;
    }
    ((l.updateStoredBrazilPaymentState = e),
      (l.markStoredBubbleViewLogged = s),
      (l.hideStoredReceiptImage = u));
  },
  98,
);
