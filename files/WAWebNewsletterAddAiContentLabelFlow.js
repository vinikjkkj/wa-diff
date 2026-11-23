__d(
  "WAWebNewsletterAddAiContentLabelFlow",
  [
    "fbt",
    "WAJids",
    "WAWebActionToast.react",
    "WAWebFbtCommon",
    "WAWebFrontendMsgGetters",
    "WAWebNetworkStatus",
    "WAWebNewsletterAddAiContentLabelAction",
    "WAWebNewsletterAiContentInfoModalOpener",
    "WAWebNewsletterAiContentInfoModalTypes",
    "WAWebToastManager",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    async function c(e, t, n) {
      n === void 0 && (n = o("WAWebActionToast.react").genId());
      var a = o("WAWebFrontendMsgGetters").getChat(e),
        i = o("WAJids").toNewsletterJid(a.id.toJid()),
        l = e.serverId,
        d =
          l != null
            ? o(
                "WAWebNewsletterAddAiContentLabelAction",
              ).WAWebNewsletterAddAiContentLabelAction(i, l.toString(), t)
            : Promise.resolve(!1),
        m = s._(/*BTDS*/ ""),
        p = s._(/*BTDS*/ ""),
        _ = s._(/*BTDS*/ ""),
        f = new (o("WAWebActionToast.react").ActionType)(m),
        g = d
          .then(function (e) {
            if (e === !0)
              return new (o("WAWebActionToast.react").ActionType)(p);
            throw r("err")("Label not added");
          })
          .catch(function () {
            return new (o("WAWebActionToast.react").ActionType)(_, {
              actionText: r("WAWebFbtCommon")("Try again"),
              actionHandler: function () {
                return c(e, t, n);
              },
            });
          });
      return o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebActionToast.react").ActionToast, {
          id: n,
          initialAction: f,
          pendingAction: g,
        }),
      );
    }
    function d(e, t, n) {
      n === void 0 && (n = o("WAWebActionToast.react").genId());
      var a = s._(/*BTDS*/ ""),
        i = new (o("WAWebActionToast.react").ActionType)(a, {
          actionText: r("WAWebFbtCommon")("Try again"),
          actionHandler: function () {
            return r("WAWebNetworkStatus").online
              ? c(e, t, n)
              : (d(e, t, n), Promise.resolve());
          },
        });
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebActionToast.react").ActionToast, {
          id: n,
          initialAction: i,
          pendingAction: Promise.resolve(i),
        }),
      );
    }
    function m(e, t) {
      t === void 0 && (t = {});
      var n = t,
        a = n.onClose,
        i = e.isNewsletterStatus === !0 ? "STATUS" : "MESSAGE";
      o("WAWebNewsletterAiContentInfoModalOpener").openAiContentInfoModal(
        o("WAWebNewsletterAiContentInfoModalTypes").AiContentModalVariant
          .ADMIN_CONFIRMATION,
        {
          onClose: a,
          onConfirm: function () {
            if (!r("WAWebNetworkStatus").online) {
              d(e, i);
              return;
            }
            c(e, i);
          },
        },
      );
    }
    l.runAddAiContentLabelFlow = m;
  },
  226,
);
