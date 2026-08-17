__d(
  "WAWebNewsletterAddAiContentLabelFlow",
  [
    "fbt",
    "Promise",
    "WAJids",
    "WAWebActionToast.react",
    "WAWebFbtCommon",
    "WAWebFrontendMsgGetters",
    "WAWebNetworkStatus",
    "WAWebNewsletterAddAiContentLabelAction",
    "WAWebNewsletterAiContentInfoModalOpener",
    "WAWebNewsletterAiContentInfoModalTypes",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          i === void 0 && (i = o("WAWebActionToast.react").genId());
          var l = o("WAWebFrontendMsgGetters").getChat(t),
            u = o("WAJids").toNewsletterJid(l.id.toJid()),
            m = t.serverId,
            p =
              m != null
                ? o(
                    "WAWebNewsletterAddAiContentLabelAction",
                  ).WAWebNewsletterAddAiContentLabelAction(u, m.toString(), a)
                : (e || (e = n("Promise"))).resolve(!1),
            _ = s._(/*BTDS*/ "Please wait a moment"),
            f = s._(/*BTDS*/ "AI content label added"),
            g = s._(/*BTDS*/ "Label not added."),
            h = new (o("WAWebActionToast.react").ActionType)(_),
            y = p
              .then(function (e) {
                if (e === !0)
                  return new (o("WAWebActionToast.react").ActionType)(f);
                throw r("err")("Label not added");
              })
              .catch(function () {
                return new (o("WAWebActionToast.react").ActionType)(g, {
                  actionText: r("WAWebFbtCommon")("Try again"),
                  actionHandler: function () {
                    return d(t, a, i);
                  },
                });
              });
          return o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebActionToast.react").ActionToast, {
              id: i,
              initialAction: h,
              pendingAction: y,
            }),
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(t, a, i) {
      i === void 0 && (i = o("WAWebActionToast.react").genId());
      var l = s._(/*BTDS*/ "Check your internet connection"),
        u = new (o("WAWebActionToast.react").ActionType)(l, {
          actionText: r("WAWebFbtCommon")("Try again"),
          actionHandler: function () {
            return r("WAWebNetworkStatus").online
              ? d(t, a, i)
              : (p(t, a, i), (e || (e = n("Promise"))).resolve());
          },
        });
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          id: i,
          initialAction: u,
          pendingAction: (e || (e = n("Promise"))).resolve(u),
        }),
      );
    }
    function _(e, t) {
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
              p(e, i);
              return;
            }
            d(e, i);
          },
        },
      );
    }
    l.runAddAiContentLabelFlow = _;
  },
  226,
);
